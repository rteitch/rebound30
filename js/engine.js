// ============================================================
// SCORE ENGINE
// ============================================================
const ScoreEngine = {
  calculate(state) {
    const components = {};
    
    // 1. Financial Visibility (20) — how much data is filled
    let vis = 0;
    if (state.debts.length > 0) vis += 40;
    if (Object.values(state.expenses.essential).some(v => v > 0)) vis += 25;
    if (state.assets.length > 0 || state.profile.cash > 0) vis += 20;
    if (state.profile.skills.length > 0) vis += 15;
    components.visibility = Math.min(vis, 100);
    
    // 2. Cashflow (20) — income vs expenses
    const totalIncome = state.profile.monthlyIncome + 
      state.incomes.filter(i => H.isThisMonth(i.date)).reduce((s,i) => s + i.amount, 0);
    const essentialBurn = Object.values(state.expenses.essential).reduce((s,v) => s+v, 0);
    const debtPayments = state.debts.reduce((s,d) => s + (d.minPayment||0), 0);
    const cashflow = totalIncome - essentialBurn - debtPayments;
    
    if (totalIncome === 0) components.cashflow = 5;
    else if (cashflow >= 0) components.cashflow = Math.min(80 + (cashflow / totalIncome * 20), 100);
    else components.cashflow = Math.max(5, 50 + (cashflow / essentialBurn * 50));
    
    // 3. Income Activity (20) — missions done + income recorded
    const today = H.today();
    const todayMissions = state.missions[today] || [];
    const incomeMissions = todayMissions.filter(m => 
      ['CLIENT_OUTREACH','JOB_APPLICATION','INCOME_TASK','FOLLOW_UP'].includes(m.type) && m.completed
    ).length;
    const recentIncome = state.incomes.filter(i => H.isThisMonth(i.date)).length;
    components.income_activity = Math.min((incomeMissions * 20) + (recentIncome * 10), 100);
    
    // 4. Debt Control (15)
    const activeNeg = state.debts.filter(d => 
      d.negotiations && d.negotiations.some(n => ['NEGOTIATING','AGREED','CONTACTED'].includes(n.status))
    ).length;
    const debtPaysMade = state.debts.filter(d => d.payments && d.payments.length > 0).length;
    components.debt_control = state.debts.length === 0 ? 60 :
      Math.min((activeNeg * 25) + (debtPaysMade * 20) + 20, 100);
    
    // 5. Expense Control (15)
    const essTotal = essentialBurn;
    const nonEss = state.expenses.records.filter(e => H.isThisMonth(e.date) && !e.essential).reduce((s,e)=>s+e.amount,0);
    if (essTotal === 0 && nonEss === 0) components.expense_control = 60;
    else {
      const ratio = nonEss / Math.max(essTotal, 1);
      components.expense_control = ratio > 0.5 ? 20 : ratio > 0.3 ? 40 : ratio > 0.1 ? 70 : 90;
    }
    
    // 6. Consistency (10) — streak
    const streak = ScoreEngine.getStreak(state);
    components.consistency = Math.min(streak * 14, 100);
    
    const weights = { visibility: 0.20, cashflow: 0.20, income_activity: 0.20, debt_control: 0.15, expense_control: 0.15, consistency: 0.10 };
    let score = 0;
    for (const [k,w] of Object.entries(weights)) score += (components[k] || 0) * w;
    
    return { score: Math.round(score), components };
  },
  
  getStreak(state) {
    let streak = 0;
    const today = H.today();
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      const missions = state.missions[key] || [];
      if (missions.length === 0 && i === 0) break;
      if (missions.length === 0) break;
      const done = missions.filter(m => m.completed).length;
      if (done === 0 && i > 0) break;
      streak++;
    }
    return Math.max(streak - 1, 0);
  },
  
  getFocus(components) {
    const lowest = Object.entries(components).sort((a,b) => a[1]-b[1])[0];
    const map = {
      visibility: 'Lengkapi pemetaan finansial kamu',
      cashflow: 'Fokus meningkatkan cashflow bulanan',
      income_activity: 'Perbanyak tindakan mencari pemasukan',
      debt_control: 'Ambil tindakan terhadap utang',
      expense_control: 'Kendalikan pengeluaran non-esensial',
      consistency: 'Jaga konsistensi misi harian',
    };
    return map[lowest[0]] || 'Terus lakukan tindakan harian';
  }
};

// ============================================================
// REBOUND ENGINE — Daily Mission Generator
// ============================================================
const ReboundEngine = {
  MISSION_TEMPLATES: {
    CLIENT_OUTREACH: { title: 'Hubungi 3 calon klien atau pelanggan', desc: 'Tawarkan skill atau jasamu. Mulai dari kontak terdekat.', type: 'CLIENT_OUTREACH' },
    JOB_APPLICATION: { title: 'Kirim 5 lamaran pekerjaan yang relevan', desc: 'Cari lowongan di platform online. Fokus pada yang bisa langsung menghasilkan.', type: 'JOB_APPLICATION' },
    FOLLOW_UP: { title: 'Follow-up 2 prospek atau lamaran yang belum direspons', desc: 'Follow-up bukan opsional — ini bagian dari proses.', type: 'FOLLOW_UP' },
    CUT_EXPENSE: { title: 'Identifikasi 1 pengeluaran yang bisa dipangkas hari ini', desc: 'Tunda atau hilangkan satu pengeluaran non-esensial.', type: 'CUT_EXPENSE' },
    TRACK_EXPENSE: { title: 'Catat semua pengeluaran hari ini', desc: 'Tidak perlu jumlah yang besar — yang penting tercatat.', type: 'TRACK_EXPENSE' },
    DEBT_REVIEW: { title: 'Review prioritas utang dan jatuh tempo terdekat', desc: 'Ketahui utang mana yang paling mendesak minggu ini.', type: 'DEBT_REVIEW' },
    DEBT_PAYMENT: { title: 'Bayar cicilan minimum utang prioritas', desc: 'Bayar sesuai kemampuan, bukan rasa bersalah.', type: 'DEBT_PAYMENT' },
    NEGOTIATION: { title: 'Hubungi kreditur untuk minta restrukturisasi', desc: 'Ajukan permohonan tertulis (email). Jelaskan kondisi secara jujur.', type: 'NEGOTIATION' },
    INCOME_TASK: { title: 'Ambil pekerjaan atau tugas yang bisa menghasilkan HARI INI', desc: 'Ojol, jual barang, ambil project kecil — utamakan kecepatan.', type: 'INCOME_TASK' },
    SELL_ASSET: { title: 'Pasang 1 barang untuk dijual di marketplace', desc: 'Mulai dari aset yang tidak kamu pakai dan bukan alat kerja.', type: 'SELL_ASSET' },
    SKILL_BUILDING: { title: 'Perbarui profil di platform freelance', desc: 'Update portofolio atau kirim proposal ke platform lokal.', type: 'SKILL_BUILDING' },
    BUILD_RECURRING: { title: 'Kontak klien/atasan untuk jadwal rutin berikutnya', desc: 'Ubah pekerjaan satu kali menjadi pemasukan berulang.', type: 'BUILD_RECURRING' },
    NO_NEW_DEBT: { title: 'Jangan ambil utang konsumtif baru hari ini', desc: 'Bukan soal moral — supaya angka keuangan tidak berubah saat dipetakan.', type: 'NO_NEW_DEBT' },
    MAP_FINANCES: { title: 'Lengkapi pemetaan utang dan pengeluaran', desc: 'Ketahui angka pasti sebelum bertindak. Kurangi ambiguitas.', type: 'MAP_FINANCES' },
  },
  
  generate(state) {
    const today = H.today();
    const existing = state.missions[today];
    if (existing && existing.length > 0) return existing;
    
    const day = H.currentDay(state.meta.startDate);
    const phase = H.getPhase(day);
    const missions = [];
    const add = (type, priority) => {
      const tmpl = this.MISSION_TEMPLATES[type];
      if (!tmpl) return;
      missions.push({
        id: H.uid(), date: today, type, priority,
        title: tmpl.title, desc: tmpl.desc, completed: false, notes: ''
      });
    };
    
    const income = state.profile.monthlyIncome + 
      state.incomes.filter(i=>H.isThisMonth(i.date)).reduce((s,i)=>s+i.amount,0);
    const essential = Object.values(state.expenses.essential).reduce((s,v)=>s+v,0);
    const cash = state.profile.cash;
    const cashRunway = essential > 0 ? cash / essential * 30 : 999;
    const debtsDue7 = state.debts.filter(d => {
      if (!d.dueDate) return false;
      return H.daysBetween(today, d.dueDate) <= 7 && H.daysBetween(today, d.dueDate) >= 0;
    });
    const hasRepeatClient = state.incomes.some(i => i.recurring);
    const needsFinancialMap = state.debts.length === 0 || essential === 0;
    const hasOppFollowUp = state.opportunities.filter(o => 
      o.status === 'APPLIED' || o.status === 'INTERVIEW'
    ).length > 0;
    
    // Phase-based + condition-based rules
    if (cashRunway < 7) add('INCOME_TASK', 'CRITICAL');
    if (needsFinancialMap && day <= 4) add('MAP_FINANCES', 'HIGH');
    
    if (income === 0) {
      add('CLIENT_OUTREACH', 'HIGH');
      add('JOB_APPLICATION', 'HIGH');
    } else if (income < essential) {
      add('CLIENT_OUTREACH', 'HIGH');
    }
    
    if (essential > 0 && income > 0 && income < essential) add('CUT_EXPENSE', 'HIGH');
    if (debtsDue7.length > 0) add('DEBT_REVIEW', 'HIGH');
    if (hasOppFollowUp) add('FOLLOW_UP', 'HIGH');
    
    if (phase.id >= 1) {
      if (income === 0) add('SELL_ASSET', 'MEDIUM');
      if (state.profile.skills.length > 0) add('SKILL_BUILDING', 'MEDIUM');
    }
    
    if (phase.id >= 2 && hasRepeatClient) add('BUILD_RECURRING', 'HIGH');
    if (phase.id >= 2 && state.debts.filter(d => !d.negotiations || d.negotiations.length === 0).length > 0) {
      add('NEGOTIATION', 'MEDIUM');
    }
    if (phase.id >= 3 && state.debts.length > 0) add('DEBT_PAYMENT', 'MEDIUM');
    
    // Always: track expenses + no new debt
    if (missions.every(m => m.type !== 'TRACK_EXPENSE')) add('TRACK_EXPENSE', 'MEDIUM');
    if (phase.id <= 1) add('NO_NEW_DEBT', 'LOW');
    
    // Limit to 5, sort by priority
    const sorted = missions
      .filter((m,i,a) => a.findIndex(x=>x.type===m.type)===i) // dedupe
      .sort((a,b) => H.priorityOrder[a.priority] - H.priorityOrder[b.priority])
      .slice(0, 5);
    
    state.missions[today] = sorted;
    return sorted;
  }
};


// ============================================================
// VECTOR ICONS (INLINE SVG)
// ============================================================
const Icons = {
  banknote: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
  handshake: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2"/><path d="m14 14 2.5 2.5a1 1 0 0 0 1.4 0l2.3-2.3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 0L14 11.5"/><path d="M10.5 7.5 8 5a1 1 0 0 0-1.4 0L2.3 9.3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4 0L10 10.5"/><path d="m7 10.5 2.5 2.5a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2"/></svg>`,
  phoneCall: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  flame: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  map: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>`,
  scale: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  scissors: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>`,
  trendingDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`,
  trophy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  clipboardCheck: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`,
  repeat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  wallet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
  receipt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>`,
  expenses: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
};

// ============================================================
// ACHIEVEMENTS
// ============================================================
const Achievements = {
  DEFINITIONS: [
    { id: 'first_cash', name: 'Uang Pertama', icon: 'banknote', desc: 'Catat pemasukan pertama' },
    { id: 'first_client', name: 'Klien Pertama', icon: 'handshake', desc: 'Tambah peluang pertama' },
    { id: 'first_followup', name: 'Follow-up', icon: 'phone-call', desc: 'Selesaikan misi follow-up' },
    { id: 'streak_3', name: '3 Hari Beruntun', icon: 'flame', desc: 'Misi 3 hari berturut-turut' },
    { id: 'streak_7', name: '7 Hari Beruntun', icon: 'zap', desc: 'Misi 7 hari berturut-turut' },
    { id: 'first_debt_review', name: 'Peta Utang', icon: 'map', desc: 'Review utang pertama kali' },
    { id: 'first_negotiation', name: 'Negosiator', icon: 'scale', desc: 'Hubungi kreditur pertama kali' },
    { id: 'expense_control', name: 'Hemat Cermat', icon: 'scissors', desc: 'Selesaikan misi potong pengeluaran' },
    { id: 'first_debt_payment', name: 'Bayar Utang', icon: 'trending-down', desc: 'Catat pembayaran utang pertama' },
    { id: 'day_30', name: 'Rebound 30!', icon: 'trophy', desc: 'Selesaikan 30 hari' },
    { id: 'financial_map', name: 'Peta Lengkap', icon: 'clipboard-check', desc: 'Lengkapi semua data finansial' },
    { id: 'first_recurring', name: 'Pemasukan Rutin', icon: 'repeat', desc: 'Tandai pemasukan berulang' },
  ],
  
  check(state) {
    const earned = new Set(state.achievements || []);
    const newOnes = [];
    
    if (state.incomes.length > 0 && !earned.has('first_cash')) newOnes.push('first_cash');
    if (state.opportunities.length > 0 && !earned.has('first_client')) newOnes.push('first_client');
    
    const streak = ScoreEngine.getStreak(state);
    if (streak >= 3 && !earned.has('streak_3')) newOnes.push('streak_3');
    if (streak >= 7 && !earned.has('streak_7')) newOnes.push('streak_7');
    
    const allMissions = Object.values(state.missions).flat();
    const completedTypes = new Set(allMissions.filter(m=>m.completed).map(m=>m.type));
    if (completedTypes.has('FOLLOW_UP') && !earned.has('first_followup')) newOnes.push('first_followup');
    if (completedTypes.has('DEBT_REVIEW') && !earned.has('first_debt_review')) newOnes.push('first_debt_review');
    if (completedTypes.has('NEGOTIATION') && !earned.has('first_negotiation')) newOnes.push('first_negotiation');
    if (completedTypes.has('CUT_EXPENSE') && !earned.has('expense_control')) newOnes.push('expense_control');
    if (completedTypes.has('DEBT_PAYMENT') && !earned.has('first_debt_payment')) newOnes.push('first_debt_payment');
    
    if (state.incomes.some(i=>i.recurring) && !earned.has('first_recurring')) newOnes.push('first_recurring');
    if (H.currentDay(state.meta.startDate) >= 30 && !earned.has('day_30')) newOnes.push('day_30');
    
    const hasDebt = state.debts.length > 0;
    const hasExp = Object.values(state.expenses.essential).some(v=>v>0);
    const hasCash = state.profile.cash > 0 || state.assets.length > 0;
    if (hasDebt && hasExp && hasCash && !earned.has('financial_map')) newOnes.push('financial_map');
    
    return newOnes;
  }
};