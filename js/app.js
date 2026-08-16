// ============================================================
// MAIN APP
// ============================================================
const App = {
  refreshIcons() {
    // Pure inline SVGs are rendered natively by the browser at 0ms.
    // Safe no-op hook for backward compatibility.
  },
  state: null,
  currentScreen: 'dashboard',
  
  
  // SOS / Mental & Legal First Aid Controller
  sos: {
    breathingActive: false,
    breathingTimer: null,
    breathingStep: 0, // 0: Inhale (4s), 1: Hold (4s), 2: Exhale (4s), 3: Hold (4s)
    breathingSecondsLeft: 4,

    open(tab = 'breathing') {
      const modal = document.getElementById('modal-sos');
      if (modal) modal.style.display = 'flex';
      this.switchTab(tab);
    },

    closeOverlay(e) { if (e && e.target && e.target.id === 'modal-sos') this.close(); },

    close() {
      const modal = document.getElementById('modal-sos');
      if (modal) modal.style.display = 'none';
      this.stopBreathing();
    },

    switchTab(tab) {
      const tabs = ['breathing', 'legal', 'triage'];
      tabs.forEach(t => {
        const btn = document.getElementById(`sos-tab-${t}`);
        const view = document.getElementById(`sos-view-${t}`);
        if (btn) btn.classList.toggle('active', t === tab);
        if (view) view.style.display = (t === tab) ? 'block' : 'none';
      });
      if (tab !== 'breathing') {
        this.stopBreathing();
      }
    },

    toggleBreathing() {
      if (this.breathingActive) {
        this.stopBreathing();
      } else {
        this.startBreathing();
      }
    },

    startBreathing() {
      this.breathingActive = true;
      this.breathingStep = 0;
      this.breathingSecondsLeft = 4;
      const btn = document.getElementById('btn-toggle-breathing');
      if (btn) btn.textContent = 'Hentikan Latihan';
      this.runBreathingStep();
    },

    stopBreathing() {
      this.breathingActive = false;
      if (this.breathingTimer) clearInterval(this.breathingTimer);
      const circle = document.getElementById('breathing-circle');
      if (circle) {
        circle.classList.remove('inhale', 'exhale');
      }
      const textEl = document.getElementById('breathing-instruction');
      const timerEl = document.getElementById('breathing-timer');
      const btn = document.getElementById('btn-toggle-breathing');
      if (textEl) textEl.textContent = 'Tarik Napas...';
      if (timerEl) timerEl.textContent = '4s';
      if (btn) btn.textContent = 'Mulai Latihan (Box Breathing 4-4-4-4)';
    },

    runBreathingStep() {
      if (!this.breathingActive) return;
      const steps = [
        { text: 'Tarik Napas Perlahan...', class: 'inhale' },
        { text: 'Tahan Napas...', class: 'inhale' },
        { text: 'Hembuskan Perlahan...', class: 'exhale' },
        { text: 'Tahan Kosong...', class: 'exhale' }
      ];

      const current = steps[this.breathingStep];
      const circle = document.getElementById('breathing-circle');
      const textEl = document.getElementById('breathing-instruction');
      const timerEl = document.getElementById('breathing-timer');

      if (circle) {
        circle.classList.remove('inhale', 'exhale');
        circle.classList.add(current.class);
      }
      if (textEl) textEl.textContent = current.text;

      this.breathingSecondsLeft = 4;
      if (timerEl) timerEl.textContent = `${this.breathingSecondsLeft}s`;

      if (this.breathingTimer) clearInterval(this.breathingTimer);
      this.breathingTimer = setInterval(() => {
        this.breathingSecondsLeft--;
        if (timerEl) timerEl.textContent = `${this.breathingSecondsLeft}s`;

        if (this.breathingSecondsLeft <= 0) {
          clearInterval(this.breathingTimer);
          this.breathingStep = (this.breathingStep + 1) % 4;
          this.runBreathingStep();
        }
      }, 1000);
    }
  },

  init() {
    let stored = Store.get();
    if (!stored) {
      this.state = Store.defaultState();
    } else {
      this.state = stored;
    }
    
    // Hide splash after short delay
    setTimeout(() => {
      document.getElementById('splash').classList.add('fade-out');
      setTimeout(() => document.getElementById('splash').remove(), 500);
    }, 1200);
    
    if (!this.state.meta.onboardingDone) {
      this.showOnboarding();
    } else {
      this.showApp();
    }
  },
  
  save() {
    // Check new achievements
    const newAch = Achievements.check(this.state);
    if (newAch.length > 0) {
      this.state.achievements = [...(this.state.achievements || []), ...newAch];
      newAch.forEach(id => {
        const def = Achievements.DEFINITIONS.find(d => d.id === id);
        if (def) this.toast(`Pencapaian Baru: ${def.name}`, 'success');
      });
    }
    Store.save(this.state);
  },
  
  showOnboarding() {
    document.getElementById('screen-onboarding').classList.add('active');
    document.getElementById('app').style.display = 'none';
    document.getElementById('bottom-nav').style.display = 'none';
    this.ob.renderProgress();
    this.refreshIcons();
  },
  
  showApp() {
    document.getElementById('screen-onboarding').classList.remove('active');
    document.getElementById('app').style.display = '';
    document.getElementById('bottom-nav').style.display = '';
    this.navigate('dashboard');
    this.refreshIcons();
  },
  
  navigate(screen) {
    this.currentScreen = screen;
    
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + screen).classList.add('active');
    
    // Update nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navEl = document.getElementById('nav-' + screen);
    if (navEl) navEl.classList.add('active');
    document.querySelectorAll('.bottom-nav-item').forEach(n => n.classList.remove('active'));
    const bnavEl = document.getElementById('bnav-' + screen);
    if (bnavEl) bnavEl.classList.add('active');
    
    const titles = {
      dashboard: 'Dashboard', missions: 'Misi Harian', debts: 'Utang',
      income: 'Pemasukan', expenses: 'Pengeluaran', assets: 'Aset',
      plan: 'Rencana 30 Hari', reports: 'Laporan', reports: 'Laporan', stories: 'Kisah Bangkit', settings: 'Pengaturan',
    };
    const title = titles[screen] || screen;
    const el1 = document.getElementById('topbar-title');
    const el2 = document.getElementById('mobile-title');
    if (el1) el1.textContent = title;
    if (el2) el2.textContent = title;
    
    // Update day badges
    const day = H.currentDay(this.state.meta.startDate);
    const dayText = `Hari ${day} / 30`;
    const el3 = document.getElementById('sidebar-day');
    const el4 = document.getElementById('mobile-day-badge');
    const el5 = document.getElementById('topbar-day');
    if (el3) el3.textContent = dayText;
    if (el4) el4.textContent = `Hari ${day}`;
    if (el5) el5.textContent = dayText;
    
    // Render the screen
    const renders = {
      dashboard: () => this.renderDashboard(),
      missions: () => this.renderMissions(),
      debts: () => this.debts.render(),
      income: () => this.income.render(),
      expenses: () => this.expenses.render(),
      assets: () => this.assets.render(),
      plan: () => this.renderPlan(),
      reports: () => this.renderReports(),
      stories: () => Stories.render(), settings: () => this.renderSettings(),
    };
    if (renders[screen]) renders[screen]();
    this.refreshIcons();
    window.scrollTo(0, 0);
  },
  
  // ---- DASHBOARD ----
  renderDashboard() {
    const s = this.state;
    const day = H.currentDay(s.meta.startDate);
    const phase = H.getPhase(day);
    const { score, components } = ScoreEngine.calculate(s);
    
    // Header
    const today = new Date();
    const dateStr = today.toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
    document.getElementById('dash-date').textContent = dateStr;
    
    const greetings = ['Hari ke', 'Rebound'];
    document.getElementById('dash-greeting').innerHTML = `Hari ke-${day} dari 30 &nbsp;${phase.emoji} ${phase.name}`;
    
    // Score ring
    document.getElementById('dash-score').textContent = score;
    const circumference = 226.2;
    const offset = circumference - (score / 100) * circumference;
    document.getElementById('score-ring-fill').style.strokeDashoffset = offset;
    document.getElementById('dash-phase-badge').textContent = `${phase.emoji} ${phase.name}`;
    document.getElementById('dash-focus').textContent = (components.coaching || ScoreEngine.getFocus(components));

    // Daily Mindset Anchor Banner
    const mindsetAnchor = MindsetEngine.getDailyAnchor(day);
    const mindsetContainer = document.getElementById('dash-mindset-anchor');
    if (mindsetContainer) {
      mindsetContainer.innerHTML = `
        <div class="daily-mindset-banner">
          <div class="mindset-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Jangkar Mental & Mindset Hari ke-${day} (${phase.name})
          </div>
          <h3 class="mindset-theme">${H.escHtml(mindsetAnchor.theme)}</h3>
          <p class="mindset-principle">${H.escHtml(mindsetAnchor.principle)}</p>
          <div class="mindset-quote-box">
            <span>"${H.escHtml(mindsetAnchor.quote)}"</span>
            <strong style="color:var(--teal-300);margin-left:auto;white-space:nowrap;">— ${H.escHtml(mindsetAnchor.author)}</strong>
          </div>
        </div>
      `;
    }

    
    // Phase strip
    const phases = [
      { name: 'Survive', days: '1–4' },
      { name: 'Cash', days: '5–14' },
      { name: 'Stabilize', days: '15–21' },
      { name: 'Attack', days: '22–30' },
    ];
    document.getElementById('phase-strip').innerHTML = phases.map((p,i) => `
      <div class="phase-item ${i < phase.id ? 'done' : i === phase.id ? 'current' : ''}">
        ${i < phase.id ? '✓' : ''} ${p.name}<br>
        <span style="font-size:10px;font-weight:400">${p.days}</span>
      </div>
    `).join('');
    
    // Stats
    const income = s.profile.monthlyIncome + s.incomes.filter(i=>H.isThisMonth(i.date)).reduce((a,i)=>a+i.amount,0);
    const essential = Object.values(s.expenses.essential).reduce((a,v)=>a+v,0);
    const totalDebt = s.debts.reduce((a,d)=>a+d.remaining,0);
    const cash = s.profile.cash;
    const runway = essential > 0 ? Math.round(cash / essential * 30) : null;
    
    document.getElementById('stat-cash').textContent = H.formatRp(cash);
    document.getElementById('stat-income').textContent = H.formatRp(income);
    const expEl = document.getElementById('stat-expenses');
    expEl.textContent = H.formatRp(essential);
    expEl.className = 'stat-value ' + (income > 0 && essential > income ? 'negative' : 'warning');
    document.getElementById('stat-debt').textContent = H.formatRp(totalDebt);
    const runwayEl = document.getElementById('stat-runway');
    if (runway !== null && income === 0) {
      runwayEl.textContent = `Runway: ${runway} hari`;
    } else { runwayEl.textContent = ''; }
    
    // Missions preview
    const todayMissions = ReboundEngine.generate(s);
    this.save();
    const done = todayMissions.filter(m=>m.completed).length;
    document.getElementById('missions-progress-text').textContent = `${done} / ${todayMissions.length} selesai`;
    
    document.getElementById('dash-missions').innerHTML = todayMissions.slice(0,3).map(m => `
      <div class="mission-card ${m.completed?'completed':''} priority-${m.priority.toLowerCase()}" id="dash-m-${m.id}">
        <div class="mission-header">
          <div class="mission-check" onclick="App.toggleMission('${m.id}')">
            ${m.completed ? '✓' : ''}
          </div>
          <div class="mission-content" style="flex:1">
            <div class="mission-type-label">${this.missionTypeLabel(m.type)} · <span class="badge badge-${m.priority.toLowerCase()}">${m.priority}</span></div>
            <div class="mission-title">${H.escHtml(m.title)}</div>
            <div style="margin-top:6px;">
              <button class="btn btn-sm btn-outline" style="font-size:11px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px;" onclick="event.stopPropagation(); App.missions.showGuide('${m.type}', '${m.id}')">
                📖 Panduan & Template
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('') || '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="empty-state-title">Semua misi selesai!</div></div>';
    
    // Achievements
    const earned = (s.achievements || []);
    const earnedDefs = Achievements.DEFINITIONS.filter(d=>earned.includes(d.id));
    document.getElementById('dash-achievements').innerHTML = earnedDefs.slice(0,5).map(d=>`
      <div class="card-sm" style="text-align:center;padding:var(--space-3);min-width:80px;">
        <div class="achievement-icon">${Icons[d.icon] || Icons.award}</div>
        <div style="font-size:10px;font-weight:600;color:var(--color-text-secondary);margin-top:4px">${d.name}</div>
      </div>
    `).join('') || '<div style="font-size:13px;color:var(--color-text-muted)">Selesaikan misi harian untuk membuka pencapaian</div>';
    
    // Backup banner
    this.checkBackupBanner();
  },
  
  checkBackupBanner() {
    const container = document.getElementById('backup-banner-container');
    if (!container) return;
    const s = this.state.settings;
    if (!s.backupReminderEnabled) { container.innerHTML = ''; return; }
    const lastExport = s.lastExport;
    const days = s.backupReminderDays || 7;
    const needsBanner = !lastExport || H.daysBetween(lastExport, H.today()) >= days;
    if (!needsBanner) { container.innerHTML = ''; return; }
    const daysSince = lastExport ? H.daysBetween(lastExport, H.today()) : null;
    const msg = daysSince ? `Terakhir backup ${daysSince} hari yang lalu.` : `Kamu belum pernah backup data.`;
    container.innerHTML = `
      <div class="backup-banner">
        <div class="backup-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg></div>
        <div class="backup-text">
          <strong>Saatnya backup data</strong>
          <span>${msg} Export sekarang agar data tidak hilang jika browser dibersihkan.</span>
        </div>
        <button class="btn btn-sm btn-primary" onclick="App.settings.exportData()">Export</button>
      </div>
    `;
  },
  
  missionTypeLabel(type) {
    const map = {
      CLIENT_OUTREACH:'Cari Klien', JOB_APPLICATION:'Lamaran', FOLLOW_UP:'Follow-up',
      CUT_EXPENSE:'Hemat', TRACK_EXPENSE:'Catat', DEBT_REVIEW:'Review Utang',
      DEBT_PAYMENT:'Bayar Utang', NEGOTIATION:'Negosiasi', INCOME_TASK:'Cari Income',
      SELL_ASSET:'Jual Aset', SKILL_BUILDING:'Tingkatkan Skill', BUILD_RECURRING:'Income Rutin',
      NO_NEW_DEBT:'Jangan Berutang', MAP_FINANCES:'Petakan Finansial',
    };
    return map[type] || type;
  },
  
  
  toggleYesterdayMission(id) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().split('T')[0];
    const missions = this.state.missions[yKey] || [];
    const m = missions.find(x => x.id === id);
    if (m) {
      m.completed = !m.completed;
      this.save();
      this.toast(m.completed ? 'Misi kemarin ditandai selesai! ✓' : 'Status misi kemarin diperbarui', 'info');
      this.renderMissions();
    }
  },

  toggleMission(id) {
    const today = H.today();
    const missions = this.state.missions[today] || [];
    const m = missions.find(x=>x.id===id);
    if (m) {
      m.completed = !m.completed;
      this.save();
      if (m.completed) this.toast('Misi selesai! ✓', 'success');
      if (this.currentScreen === 'dashboard') {
        this.renderDashboard();
      } else if (this.currentScreen === 'missions') {
        this.renderMissions();
      }
      this.refreshIcons();
    }
  },
  
  // ---- MISSIONS ----
  renderMissions() {
    const s = this.state;
    // Render Mindset Anchor on Missions Screen
    const day = H.dayNumber(s.meta.startDate);
    const phase = H.getPhase(day);
    const mindsetAnchor = MindsetEngine.getDailyAnchor(day);
    const missionsMindsetEl = document.getElementById('missions-mindset-anchor');
    if (missionsMindsetEl) {
      missionsMindsetEl.innerHTML = `
        <div class="daily-mindset-banner" style="margin-bottom:var(--space-5);">
          <div class="mindset-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Jangkar Mental & Mindset Hari ke-${day} (${phase.name})
          </div>
          <h3 class="mindset-theme">${H.escHtml(mindsetAnchor.theme)}</h3>
          <p class="mindset-principle">${H.escHtml(mindsetAnchor.principle)}</p>
          <div class="mindset-quote-box">
            <span>"${H.escHtml(mindsetAnchor.quote)}"</span>
            <strong style="color:var(--teal-300);margin-left:auto;white-space:nowrap;">— ${H.escHtml(mindsetAnchor.author)}</strong>
          </div>
        </div>
      `;
    }
    const today = H.today();
    const todayFmt = new Date().toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long' });
    document.getElementById('missions-date-subtitle').textContent = todayFmt;
    
    const missions = ReboundEngine.generate(s);
    this.save();
    
    // Streak
    const streak = ScoreEngine.getStreak(s);
    const streakContainer = document.getElementById('streak-container');
    if (streak > 0) {
      streakContainer.innerHTML = `
        <div class="streak-banner">
          <div class="streak-icon" style="color:#EF4444;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg></div>
          <div class="streak-text">
            <div class="streak-days">${streak} Hari Beruntun</div>
            <div class="streak-label">Teruskan konsistensimu!</div>
          </div>
        </div>
      `;
    } else { streakContainer.innerHTML = ''; }
    
    document.getElementById('missions-list').innerHTML = missions.map(m => `
      <div class="mission-card ${m.completed?'completed':''} priority-${m.priority.toLowerCase()} fade-in" id="m-${m.id}">
        <div class="mission-header">
          <div class="mission-check" onclick="App.toggleMission('${m.id}')">
            ${m.completed ? '✓' : ''}
          </div>
          <div class="mission-content" style="flex:1">
            <div class="mission-type-label">${this.missionTypeLabel(m.type)} · <span class="badge badge-${m.priority.toLowerCase()}">${m.priority}</span></div>
            <div class="mission-title">${H.escHtml(m.title)}</div>
            <div class="mission-description">${H.escHtml(m.desc)}</div>
            <div style="margin-top:8px;">
              <button class="btn btn-sm btn-outline" style="font-size:11px;padding:3px 8px;display:inline-flex;align-items:center;gap:4px;" onclick="event.stopPropagation(); App.missions.showGuide('${m.type}', '${m.id}')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Panduan & Template Siap Pakai
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('') || '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="empty-state-title">Semua misi selesai hari ini!</div><div class="empty-state-text">Luar biasa! Kembali lagi besok untuk misi baru.</div></div>';
    
    // History (yesterday)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    const yKey = yesterday.toISOString().split('T')[0];
    const yMissions = s.missions[yKey] || [];
    document.getElementById('missions-history').innerHTML = (yMissions.length ? yMissions.map(m=>`
      <div class="mission-card ${m.completed?'completed':''}" style="opacity:0.85" id="ym-${m.id}">
        <div class="mission-header">
          <div class="mission-check" onclick="App.toggleYesterdayMission('${m.id}')" title="Klik untuk ubah status misi kemarin">
            ${m.completed?'✓':''}
          </div>
          <div class="mission-content" style="flex:1">
            <div class="mission-title" style="font-size:13px;">${H.escHtml(m.title)}</div>
            <div style="font-size:11px;color:var(--color-text-muted);">Misi Kemarin · ${m.completed ? '<span style="color:var(--teal-600);font-weight:600;">Selesai ✓</span>' : '<span style="color:var(--amber-600);">Terlewat (bisa dicentang jika sudah dikerjakan)</span>'}</div>
          </div>
        </div>
      </div>
    `).join('') : '<div style="font-size:13px;color:var(--color-text-muted);padding:var(--space-3)">Belum ada riwayat misi kemarin.</div>') + `
      <div style="margin-top:var(--space-5);padding:var(--space-4);background:var(--slate-50);border:1px dashed var(--slate-300);border-radius:var(--radius-lg);text-align:center;">
        <div style="font-size:12.5px;color:var(--slate-600);margin-bottom:8px;">Ingin melihat gambaran target misi di fase-fase berikutnya?</div>
        <button class="btn btn-secondary btn-sm" onclick="App.navigate('plan')" style="font-size:12px;display:inline-flex;align-items:center;gap:6px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          Lihat Roadmap Lengkap 30 Hari di Menu Rencana →
        </button>
      </div>
    `;
  },
  
  // ---- PLAN ----
  renderPlan() {
    const s = this.state;
    const currentDay = H.currentDay(s.meta.startDate);
    const planData = [
      { days: [1,2,3,4], phase: 'Survive (Fase 1)', objective: 'Petakan kondisi finansial secara akurat', tasks: ['Catat semua utang', 'Catat pengeluaran esensial', 'Inventaris aset', 'Hitung cashflow bersih'] },
      { days: [5,6,7,8,9,10,11,12,13,14], phase: 'Create Cash (Fase 2)', objective: 'Hasilkan pemasukan pertama', tasks: ['Hubungi calon klien/pelanggan', 'Kirim lamaran pekerjaan', 'Jual aset aman', 'Follow-up prospek'] },
      { days: [15,16,17,18,19,20,21], phase: 'Stabilize (Fase 3)', objective: 'Bangun pola pemasukan berulang', tasks: ['Identifikasi klien yang bisa jadi rutin', 'Hubungi kreditur untuk restrukturisasi', 'Susun jadwal kerja', 'Kurangi aktivitas tidak menghasilkan'] },
      { days: [22,23,24,25,26,27,28,29,30], phase: 'Debt Attack (Fase 4)', objective: 'Eksekusi strategi pelunasan utang', tasks: ['Tentukan prioritas utang', 'Bayar cicilan sesuai kemampuan', 'Track outstanding tiap pembayaran', 'Mulai susun rencana 90 hari'] },
    ];
    
    let html = '';
    planData.forEach(group => {
      group.days.forEach(d => {
        const isToday = d === currentDay;
        const isDone = d < currentDay;
        html += `
          <div class="plan-day-card ${isToday?'today':''} ${isDone?'completed-day':''}">
            <div class="plan-day-number">${isDone?'✓':d}</div>
            <div class="plan-day-content">
              <div class="plan-day-phase">${group.phase}</div>
              <div class="plan-day-objective">${group.objective}</div>
              ${isToday ? `<div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px">${group.tasks.map(t=>`<span class="badge badge-primary">${t}</span>`).join('')}</div>` : ''}
            </div>
          </div>
        `;
      });
    });
    document.getElementById('plan-list').innerHTML = html;
  },
  
  // ---- REPORTS ----
  renderReports() {
    const s = this.state;
    const { score, components } = ScoreEngine.calculate(s);
    const snap = s.meta.snapshotDay1;
    
    // Compare: Day 1 vs Now
    const totalDebt = s.debts.reduce((a,d)=>a+d.remaining,0);
    const origDebt = s.debts.reduce((a,d)=>a+d.original,0);
    const income = s.profile.monthlyIncome + s.incomes.filter(i=>H.isThisMonth(i.date)).reduce((a,i)=>a+i.amount,0);
    const recurringIncome = s.incomes.filter(i=>i.recurring).reduce((a,i)=>a+i.amount,0);
    
    document.getElementById('report-compare').innerHTML = `
      <div class="report-before">
        <div class="report-label">Hari 1</div>
        <div class="report-row">
          <div class="report-row-label">Pemasukan/bln</div>
          <div class="report-row-value">${snap ? H.formatRp(snap.income) : '—'}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Total Utang</div>
          <div class="report-row-value">${snap ? H.formatRp(snap.debt) : H.formatRp(origDebt)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Uang Tunai</div>
          <div class="report-row-value">${snap ? H.formatRp(snap.cash) : '—'}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Rebound Score</div>
          <div class="report-row-value">${snap ? snap.score : '—'}</div>
        </div>
      </div>
      <div class="report-after">
        <div class="report-label" style="color:var(--teal-700)">Sekarang</div>
        <div class="report-row">
          <div class="report-row-label">Pemasukan/bln</div>
          <div class="report-row-value" style="color:var(--green-600)">${H.formatRp(income)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Total Utang</div>
          <div class="report-row-value" style="color:var(--red-600)">${H.formatRp(totalDebt)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Uang Tunai</div>
          <div class="report-row-value">${H.formatRp(s.profile.cash)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Rebound Score</div>
          <div class="report-row-value" style="color:var(--teal-700);font-size:1.3rem">${score}/100</div>
        </div>
      </div>
    `;
    
    // Score breakdown
    const labels = { visibility:'Peta Finansial', cashflow:'Cashflow', income_activity:'Aktivitas Income', debt_control:'Kontrol Utang', expense_control:'Kontrol Pengeluaran', consistency:'Konsistensi' };
    document.getElementById('score-breakdown').innerHTML = Object.entries(components).map(([k,v])=>`
      <div class="score-bar-row">
        <div class="score-bar-label">${labels[k]||k}</div>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${v}%"></div></div>
        <div class="score-bar-value">${Math.round(v)}</div>
      </div>
    `).join('');
    
    // Achievements
    const earned = new Set(s.achievements || []);
    document.getElementById('achievements-grid').innerHTML = Achievements.DEFINITIONS.map(d=>`
      <div class="achievement-card ${earned.has(d.id)?'earned':'locked'}">
        <div class="achievement-icon">${Icons[d.icon] || Icons.award}</div>
        <div class="achievement-name">${d.name}</div>
      </div>
    `).join('');
  },
  
  
  // ---- STORIES CONTROLLER ----
  stories: {
    switchTab(storyId, btn) {
      document.querySelectorAll('#screen-stories .tab-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      
      const shaoEl = document.getElementById('story-content-shao');
      const tangEl = document.getElementById('story-content-tang');
      if (storyId === 'shao') {
        if (shaoEl) shaoEl.style.display = 'block';
        if (tangEl) tangEl.style.display = 'none';
      } else {
        if (shaoEl) shaoEl.style.display = 'none';
        if (tangEl) tangEl.style.display = 'block';
      }
    }
  },

  
  copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        this.toast('Template berhasil disalin ke clipboard! 📋', 'success');
      }).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      this.fallbackCopy(text);
    }
  },
  
  fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-999999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      this.toast('Template berhasil disalin ke clipboard! 📋', 'success');
    } catch (e) {
      this.toast('Gagal menyalin otomatis. Silakan salin manual.', 'error');
    }
    document.body.removeChild(ta);
  },

  // ---- MISSIONS CONTROLLER ----
  missions: {
    showGuide(type, id) {
      const tmpl = ReboundEngine.MISSION_TEMPLATES[type];
      if (!tmpl) return;

      const stepsHtml = (tmpl.steps || []).map((s, idx) => `
        <div style="display:flex;gap:10px;margin-bottom:8px;font-size:13px;color:var(--slate-700);">
          <div style="width:22px;height:22px;border-radius:50%;background:var(--teal-100);color:var(--teal-800);font-weight:800;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${idx+1}</div>
          <div style="line-height:1.5;">${H.escHtml(s)}</div>
        </div>
      `).join('');

      const templateBlock = tmpl.templateText ? `
        <div style="margin-top:var(--space-4);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <div style="font-size:11.5px;font-weight:700;color:var(--teal-800);text-transform:uppercase;">${H.escHtml(tmpl.templateTitle || 'Template Siap Pakai')}</div>
            <button class="btn btn-sm btn-primary" onclick="App.copyText(decodeURIComponent('${encodeURIComponent(tmpl.templateText)}'))" style="font-size:11px;padding:3px 8px;">
              📋 Salin Template
            </button>
          </div>
          <textarea readonly class="form-input" style="width:100%;height:140px;font-size:12px;font-family:monospace;line-height:1.5;background:var(--slate-50);border:1px solid var(--slate-300);resize:none;">${H.escHtml(tmpl.templateText)}</textarea>
        </div>
      ` : '';

      const actionBtn = tmpl.actionTarget ? `
        <button class="btn btn-secondary flex-1" onclick="App.closeModal(); App.navigate('${tmpl.actionTarget}');">
          ${H.escHtml(tmpl.actionLabel || 'Buka Menu Terkait')} →
        </button>
      ` : '';

      App.openModal(`
        <div class="modal-title" style="margin-bottom:4px;font-size:1.15rem;">${H.escHtml(tmpl.title)}</div>
        <div style="font-size:12px;color:var(--color-text-muted);margin-bottom:var(--space-3);">
          Kategori: <strong>${App.missionTypeLabel(type)}</strong>
        </div>

        <!-- Why Box -->
        <div style="background:var(--teal-50);border-left:4px solid var(--teal-600);padding:var(--space-3) var(--space-4);border-radius:var(--radius-md);margin-bottom:var(--space-4);font-size:13px;color:var(--teal-950);line-height:1.5;">
          <strong>🎯 Mengapa Misi Ini Penting:</strong><br>
          ${H.escHtml(tmpl.why || tmpl.desc)}
        </div>

        <!-- Steps -->
        <div style="margin-bottom:var(--space-4);">
          <div style="font-size:11.5px;font-weight:700;color:var(--slate-500);text-transform:uppercase;margin-bottom:8px;">Langkah Praktis:</div>
          ${stepsHtml}
        </div>

        <!-- Template -->
        ${templateBlock}

        <!-- Actions -->
        <div style="display:flex;gap:var(--space-2);margin-top:var(--space-5);">
          ${actionBtn}
          <button class="btn btn-primary" onclick="App.toggleMission('${id}'); App.closeModal();">
            Tandai Selesai ✓
          </button>
        </div>
      `);
    }
  },

  // ---- SETTINGS ----
  renderSettings() {
    const s = this.state.settings;
    document.getElementById('backup-reminder-toggle').checked = s.backupReminderEnabled;
    document.getElementById('backup-days-select').value = String(s.backupReminderDays || 7);
    document.getElementById('last-export-text').textContent = s.lastExport 
      ? `Terakhir export: ${H.formatDate(s.lastExport)}`
      : 'Belum pernah di-export';
  },
  
  // ---- MODALS ----
  openModal(html) {
    document.getElementById('modal-body').innerHTML = html;
    setTimeout(() => this.refreshIcons(), 0);
    document.getElementById('modal-backdrop').classList.add('open');
  },
  
  closeModal(e) {
    if (!e || e.target === document.getElementById('modal-backdrop')) {
      document.getElementById('modal-backdrop').classList.remove('open');
    }
  },
  
  // ---- TOAST ----
  toast(msg, type='') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = msg;
    document.getElementById('toast-container').appendChild(el);
    setTimeout(() => el.remove(), 3000);
  },
  
  // ---- FULLSCREEN ----
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(()=>{});
    } else {
      document.exitFullscreen().catch(()=>{});
    }
  },
  
  // ============================================================
  // ONBOARDING
  // ============================================================
  ob: {
    step: 0,
    totalSteps: 8,
    tempDebt: null,
    pendingDebts: [],
    selectedSkills: [],
    selectedEmployment: null,
    selectedGoal: null,
    
    renderProgress() {
      const el = document.getElementById('ob-progress');
      let html = '';
      for (let i = 0; i < this.totalSteps; i++) {
        const cls = i < this.step ? 'done' : i === this.step ? 'current' : '';
        html += `<div class="progress-dot ${cls}"></div>`;
      }
      el.innerHTML = html;
    },
    
    showStep(n) {
      document.querySelectorAll('.onboarding-step').forEach(s => s.classList.remove('active'));
      const el = document.getElementById('ob-step-' + n);
      if (el) el.classList.add('active');
      this.step = n;
      this.renderProgress();
    },
    
    next() {
      this.saveCurrentStep();
      if (this.step < this.totalSteps - 1) this.showStep(this.step + 1);
    },
    
    prev() {
      if (this.step > 0) this.showStep(this.step - 1);
    },
    
    saveCurrentStep() {
      const s = App.state;
      if (this.step === 1 && this.selectedEmployment) s.profile.employment = this.selectedEmployment;
      if (this.step === 2) {
        s.profile.monthlyIncome = parseInt(document.getElementById('ob-income').value) || 0;
        s.profile.incomeFrequency = document.getElementById('ob-income-freq').value;
      }
      if (this.step === 3) {
        s.expenses.essential = {
          food: parseInt(document.getElementById('ob-exp-food').value) || 0,
          housing: parseInt(document.getElementById('ob-exp-housing').value) || 0,
          utilities: parseInt(document.getElementById('ob-exp-utilities').value) || 0,
          transport: parseInt(document.getElementById('ob-exp-transport').value) || 0,
          comm: parseInt(document.getElementById('ob-exp-comm').value) || 0,
          other: parseInt(document.getElementById('ob-exp-other').value) || 0,
        };
      }
      if (this.step === 5) {
        s.profile.cash = parseInt(document.getElementById('ob-cash').value) || 0;
        const assetVal = parseInt(document.getElementById('ob-assets-value').value) || 0;
        if (assetVal > 0 && !s.assets.find(a=>a.name==='Aset Lainnya (estimasi)')) {
          s.assets.push({ id: H.uid(), name: 'Aset Lainnya (estimasi)', category: 'other', value: assetVal, liquidatable: true, keepForWork: false, notes: '' });
        }
      }
      if (this.step === 6) s.profile.skills = [...this.selectedSkills];
      if (this.step === 7 && this.selectedGoal) s.profile.goal = this.selectedGoal;
      App.save();
    },
    
    selectOption(field, value, el) {
      el.closest('.option-grid').querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
      if (field === 'employment') this.selectedEmployment = value;
      if (field === 'goal') this.selectedGoal = value;
    },
    
    toggleSkill(skill, el) {
      el.classList.toggle('selected');
      if (this.selectedSkills.includes(skill)) {
        this.selectedSkills = this.selectedSkills.filter(s=>s!==skill);
      } else {
        this.selectedSkills.push(skill);
      }
    },
    
    showAddDebt() {
      App.openModal(`
        <div class="modal-title">+ Tambah Utang</div>
        <div class="form-group">
          <label class="form-label">Nama / Label Utang</label>
          <input class="form-input" id="ob-debt-name" placeholder="mis. KPR BCA, Pinjol Kredivo, KTA Mandiri">
        </div>
        <div class="form-group">
          <label class="form-label">Nama Kreditur</label>
          <input class="form-input" id="ob-debt-creditor" placeholder="mis. Bank BCA">
        </div>
        <div class="form-group">
          <label class="form-label">Sisa Utang Sekarang</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ob-debt-remaining" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Cicilan/Pembayaran Minimum/Bulan</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ob-debt-minpay" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Bunga (% per bulan)</label>
          <input type="number" step="0.01" class="form-input" id="ob-debt-interest" placeholder="mis. 2.5">
          <div class="form-hint">Batas legal OJK 2026: maks 3%/bulan (konsumtif) atau 2%/bulan (produktif)</div>
        </div>
        <div class="form-group">
          <label class="form-label">Jatuh Tempo Berikutnya</label>
          <input type="date" class="form-input" id="ob-debt-due">
        </div>
        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.ob.saveDebt()">Simpan</button>
        </div>
      `);
    },
    
    saveDebt() {
      const name = document.getElementById('ob-debt-name').value.trim();
      if (!name) { App.toast('Nama utang tidak boleh kosong', 'error'); return; }
      const debt = {
        id: H.uid(),
        name,
        creditor: document.getElementById('ob-debt-creditor').value.trim(),
        original: parseInt(document.getElementById('ob-debt-remaining').value) || 0,
        remaining: parseInt(document.getElementById('ob-debt-remaining').value) || 0,
        interestMonthly: parseFloat(document.getElementById('ob-debt-interest').value) || 0,
        dueDate: document.getElementById('ob-debt-due').value,
        minPayment: parseInt(document.getElementById('ob-debt-minpay').value) || 0,
        collateral: '',
        status: 'ACTIVE',
        notes: '',
        payments: [],
        negotiations: [],
        riskLevel: 'MEDIUM',
      };
      App.state.debts.push(debt);
      App.save();
      App.closeModal();
      this.renderDebtList();
      App.toast('Utang ditambahkan ✓', 'success');
    },
    
    renderDebtList() {
      const debts = App.state.debts;
      document.getElementById('ob-debts-list').innerHTML = debts.map(d=>`
        <div class="card-sm" style="margin-bottom:var(--space-2);display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-weight:600;font-size:14px">${H.escHtml(d.name)}</div>
            <div style="font-size:12px;color:var(--color-text-secondary)">${H.formatRp(d.remaining)}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="App.removeDebt('${d.id}')">✕</button>
        </div>
      `).join('');
    },
    
    finish() {
      this.saveCurrentStep();
      App.state.meta.onboardingDone = true;
      // Snapshot Day 1
      const { score } = ScoreEngine.calculate(App.state);
      App.state.meta.snapshotDay1 = {
        income: App.state.profile.monthlyIncome,
        debt: App.state.debts.reduce((a,d)=>a+d.remaining,0),
        cash: App.state.profile.cash,
        score,
        date: H.today(),
      };
      // Generate today's missions
      ReboundEngine.generate(App.state);
      App.save();
      App.showApp();
      App.toast('Selamat datang di Rebound 30!', 'success');
    }
  },
  
  removeDebt(id) {
    this.state.debts = this.state.debts.filter(d=>d.id!==id);
    this.save();
    this.ob.renderDebtList();
    if (this.currentScreen === 'debts') this.debts.render();
  },
  
  // ============================================================
  // DEBT MANAGEMENT
  // ============================================================
  debts: {
    render() {
      const s = App.state;
      const debts = [...s.debts];
      const strategy = s.settings.debtStrategy || 'risk_first';
      document.getElementById('debt-strategy-select').value = strategy;
      
      // Sort by strategy
      const sorted = this.sortDebts(debts, strategy);
      
      const total = sorted.reduce((a,d)=>a+d.remaining,0);
      document.getElementById('debt-total-value').textContent = H.formatRp(total);
      document.getElementById('debt-count-text').textContent = `${sorted.length} utang aktif`;
      
      // Interest widget
      const thisMonthInterest = s.expenses.records
        .filter(e => e.isInterest && H.isThisMonth(e.date))
        .reduce((a,e)=>a+e.amount,0);
      const widget = document.getElementById('debt-interest-widget');
      if (thisMonthInterest > 0) {
        widget.innerHTML = `
          <div class="interest-widget">
            <div class="interest-widget-title">Total Beban Bunga Bulan Ini</div>
            <div class="interest-widget-amount">${H.formatRp(thisMonthInterest)}</div>
            <div class="interest-widget-sub">Ini biaya "waktu" untuk menyelesaikan utang — bukan pokok.</div>
          </div>
        `;
      } else { widget.innerHTML = ''; }
      
      if (sorted.length === 0) {
        document.getElementById('debts-list').innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <div class="empty-state-title">Belum ada utang tercatat</div>
            <div class="empty-state-text">Tambahkan utangmu untuk mulai memetakan kewajiban.</div>
          </div>
        `;
        return;
      }
      
      document.getElementById('debts-list').innerHTML = sorted.map((d,i) => {
        const paidPct = d.original > 0 ? Math.round((1 - d.remaining/d.original)*100) : 0;
        const interestPerDay = d.interestMonthly / 30;
        const isIllegal = interestPerDay > 0.1;
        const daysUntilDue = d.dueDate ? H.daysBetween(H.today(), d.dueDate) : null;
        const negStatus = d.negotiations && d.negotiations.length > 0
          ? d.negotiations[d.negotiations.length-1].status : 'NOT_CONTACTED';
        
        return `
          <div class="debt-card" id="debt-card-${d.id}">
            <div class="debt-card-header" onclick="App.debts.toggleCard('${d.id}')">
              <div>
                <div class="debt-name">${H.escHtml(d.name)} ${strategy !== 'custom' ? `<span style="font-size:11px;background:var(--slate-100);padding:2px 6px;border-radius:10px;color:var(--slate-600)">#${i+1}</span>` : ''}</div>
                <div class="debt-creditor">${H.escHtml(d.creditor || '—')} · <span class="negotiation-status neg-${negStatus}">${this.negLabel(negStatus)}</span></div>
                ${daysUntilDue !== null && daysUntilDue <= 7 && daysUntilDue >= 0
                  ? `<div class="badge badge-critical" style="margin-top:4px">Jatuh tempo ${daysUntilDue===0?'hari ini':`${daysUntilDue} hari lagi`}</div>` 
                  : daysUntilDue !== null && daysUntilDue < 0 
                    ? `<div class="badge badge-critical" style="margin-top:4px">Sudah melewati jatuh tempo</div>` : ''}
              </div>
              <div style="text-align:right">
                <div class="debt-amount">${H.formatRp(d.remaining)}</div>
                <div class="debt-amount-label">tersisa ${paidPct>0?`· ${paidPct}% lunas`:''}</div>
              </div>
            </div>
            <div class="debt-card-body">
              <div class="debt-progress-bar"><div class="debt-progress-fill" style="width:${paidPct}%"></div></div>
              ${isIllegal ? `
                <div class="illegal-flag">
                  <strong>Perhatian:</strong> Bunga ${d.interestMonthly}%/bln melebihi batas legal OJK (maks 3%/bln konsumtif). 
                  Kemungkinan ini pinjol ilegal. Verifikasi di ojk.go.id sebelum membayar lebih.
                </div>` : ''}
              <div class="debt-meta-grid">
                <div class="debt-meta-item">
                  <div class="debt-meta-label">Cicilan Min/Bln</div>
                  <div class="debt-meta-value">${H.formatRp(d.minPayment)}</div>
                </div>
                <div class="debt-meta-item">
                  <div class="debt-meta-label">Bunga/Bln</div>
                  <div class="debt-meta-value ${isIllegal?'interest-illegal':'interest-legal'}">${d.interestMonthly}%</div>
                </div>
                <div class="debt-meta-item">
                  <div class="debt-meta-label">Jatuh Tempo</div>
                  <div class="debt-meta-value">${d.dueDate ? H.formatDate(d.dueDate) : '—'}</div>
                </div>
              </div>
              <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;">
                <button class="btn btn-sm btn-outline" onclick="App.debts.showPayment('${d.id}')">Catat Pembayaran</button>
                <button class="btn btn-sm btn-secondary" onclick="App.debts.showNegotiation('${d.id}')">Ajukan Negosiasi</button>
                <button class="btn btn-sm btn-ghost" onclick="App.debts.showEdit('${d.id}')">Edit</button>
                <button class="btn btn-sm btn-ghost" style="color:var(--red-500)" onclick="App.removeDebt('${d.id}')">Hapus</button>
              </div>
              ${d.negotiations && d.negotiations.length > 0 ? `
                <div style="margin-top:var(--space-3);padding-top:var(--space-3);border-top:1px solid var(--color-border)">
                  <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);margin-bottom:var(--space-2)">Riwayat Negosiasi</div>
                  ${d.negotiations.map(n=>`
                    <div style="font-size:12px;padding:var(--space-2);background:var(--slate-50);border-radius:var(--radius-md);margin-bottom:4px">
                      <span class="negotiation-status neg-${n.status}">${this.negLabel(n.status)}</span>
                      ${H.escHtml(n.offer||'')} — ${H.formatDate(n.date)}
                      ${n.followUp ? `<div style="color:var(--amber-600)">Follow-up: ${H.formatDate(n.followUp)}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              ${d.payments && d.payments.length > 0 ? `
                <div style="margin-top:var(--space-3);padding-top:var(--space-3);border-top:1px solid var(--color-border)">
                  <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);margin-bottom:var(--space-2)">Pembayaran Terakhir</div>
                  ${d.payments.slice(-2).map(p=>`
                    <div style="font-size:12px;color:var(--green-700);font-weight:600">${H.formatRp(p.amount)} — ${H.formatDate(p.date)}</div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    },
    
    sortDebts(debts, strategy) {
      if (strategy === 'avalanche') return [...debts].sort((a,b)=>b.interestMonthly-a.interestMonthly);
      if (strategy === 'snowball') return [...debts].sort((a,b)=>a.remaining-b.remaining);
      if (strategy === 'risk_first') {
        return [...debts].sort((a,b)=>{
          const riskA = a.dueDate ? H.daysBetween(H.today(), a.dueDate) : 999;
          const riskB = b.dueDate ? H.daysBetween(H.today(), b.dueDate) : 999;
          return riskA - riskB;
        });
      }
      return debts;
    },
    
    negLabel(status) {
      const map = { NOT_CONTACTED:'Belum dihubungi', CONTACTED:'Sudah dihubungi', NEGOTIATING:'Negosiasi', AGREED:'Setuju', REJECTED:'Ditolak', FOLLOW_UP:'Follow-up' };
      return map[status] || status;
    },
    
    toggleCard(id) {
      document.getElementById('debt-card-'+id).classList.toggle('expanded');
    },
    
    setStrategy(val) {
      App.state.settings.debtStrategy = val;
      App.save();
      this.render();
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Tambah Utang</div>
        <div class="form-group">
          <label class="form-label">Nama / Label Utang *</label>
          <input class="form-input" id="d-name" placeholder="mis. KPR, Pinjol Kredivo">
        </div>
        <div class="form-group">
          <label class="form-label">Nama Kreditur</label>
          <input class="form-input" id="d-creditor" placeholder="mis. Bank BCA">
        </div>
        <div class="form-group">
          <label class="form-label">Jumlah Awal</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="d-original" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Sisa Utang Sekarang *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="d-remaining" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Bunga (% per bulan)</label>
          <input type="number" step="0.01" class="form-input" id="d-interest" placeholder="0">
        </div>
        <div class="form-group">
          <label class="form-label">Cicilan Minimum/Bulan</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="d-minpay" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Jatuh Tempo Berikutnya</label>
          <input type="date" class="form-input" id="d-due">
        </div>
        <div class="form-group">
          <label class="form-label">Agunan / Jaminan</label>
          <input class="form-input" id="d-collateral" placeholder="mis. BPKB Motor, KTP">
        </div>
        <div class="form-group">
          <label class="form-label">Catatan</label>
          <textarea class="form-input form-textarea" id="d-notes"></textarea>
        </div>
        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-2)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.debts.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const name = document.getElementById('d-name').value.trim();
      if (!name) { App.toast('Nama utang wajib diisi', 'error'); return; }
      const remaining = parseInt(document.getElementById('d-remaining').value) || 0;
      App.state.debts.push({
        id: H.uid(), name,
        creditor: document.getElementById('d-creditor').value.trim(),
        original: parseInt(document.getElementById('d-original').value) || remaining,
        remaining,
        interestMonthly: parseFloat(document.getElementById('d-interest').value) || 0,
        minPayment: parseInt(document.getElementById('d-minpay').value) || 0,
        dueDate: document.getElementById('d-due').value,
        collateral: document.getElementById('d-collateral').value.trim(),
        notes: document.getElementById('d-notes').value.trim(),
        payments: [], negotiations: [], status: 'ACTIVE',
      });
      App.save();
      App.closeModal();
      this.render();
      App.toast('Utang ditambahkan ✓', 'success');
    },
    
    showPayment(id) {
      App.openModal(`
        <div class="modal-title">Catat Pembayaran</div>
        <div class="form-group">
          <label class="form-label">Jumlah Dibayar</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="pay-amount" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="pay-date" value="${H.today()}">
        </div>
        <div class="form-group">
          <label class="form-label">Dari jumlah itu, berapa bunga?</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="pay-interest" placeholder="0"></div>
          <div class="form-hint">Digunakan untuk menghitung "total bunga terbayar bulan ini"</div>
        </div>
        <div class="form-group">
          <label class="form-label">Catatan</label>
          <input class="form-input" id="pay-notes">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.debts.savePayment('${id}')">Simpan</button>
        </div>
      `);
    },
    
    savePayment(id) {
      const amount = parseInt(document.getElementById('pay-amount').value) || 0;
      if (!amount) { App.toast('Masukkan jumlah pembayaran', 'error'); return; }
      const interest = parseInt(document.getElementById('pay-interest').value) || 0;
      const date = document.getElementById('pay-date').value;
      const debt = App.state.debts.find(d=>d.id===id);
      if (!debt) return;
      const principal = amount - interest;
      debt.remaining = Math.max(0, debt.remaining - principal);
      debt.payments = debt.payments || [];
      debt.payments.push({ id: H.uid(), amount, interest, date, notes: document.getElementById('pay-notes').value });
      // Track interest as expense
      if (interest > 0) {
        App.state.expenses.records.push({ id: H.uid(), description: `Bunga utang: ${debt.name}`, amount: interest, date, category: 'debt_interest', essential: true, isInterest: true });
      }
      App.save();
      App.closeModal();
      this.render();
      App.toast(`Pembayaran ${H.formatRp(amount)} dicatat ✓`, 'success');
    },
    
    showNegotiation(id) {
      App.openModal(`
        <div class="modal-title">Catat Negosiasi</div>
        <div class="form-group">
          <label class="form-label">Status</label>
          <select class="form-input form-select" id="neg-status">
            <option value="CONTACTED">Sudah dihubungi</option>
            <option value="NEGOTIATING">Sedang negosiasi</option>
            <option value="AGREED">Setuju/Deal</option>
            <option value="REJECTED">Ditolak</option>
            <option value="FOLLOW_UP">Perlu follow-up</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tawaran / Permintaan Restrukturisasi</label>
          <select class="form-input form-select" id="neg-offer-select" onchange="App.debts.fillOffer(this.value)">
            <option value="">— Pilih template —</option>
            <option value="Permohonan perpanjangan tenor">Perpanjangan tenor</option>
            <option value="Permohonan penurunan bunga">Penurunan bunga</option>
            <option value="Permohonan penghapusan denda keterlambatan">Hapus denda keterlambatan</option>
            <option value="Permohonan penundaan pokok 3 bulan">Tunda pokok 3 bulan</option>
            <option value="Permohonan penundaan pokok 6 bulan">Tunda pokok 6 bulan</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Detail</label>
          <textarea class="form-input form-textarea" id="neg-offer" placeholder="Jelaskan situasimu secara jujur..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal Kontak</label>
          <input type="date" class="form-input" id="neg-date" value="${H.today()}">
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal Follow-up Berikutnya</label>
          <input type="date" class="form-input" id="neg-followup">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.debts.saveNegotiation('${id}')">Simpan</button>
        </div>
      `);
    },
    
    fillOffer(val) {
      if (val) document.getElementById('neg-offer').value = val;
    },
    
    saveNegotiation(id) {
      const debt = App.state.debts.find(d=>d.id===id);
      if (!debt) return;
      debt.negotiations = debt.negotiations || [];
      debt.negotiations.push({
        id: H.uid(),
        status: document.getElementById('neg-status').value,
        offer: document.getElementById('neg-offer').value.trim(),
        date: document.getElementById('neg-date').value,
        followUp: document.getElementById('neg-followup').value,
      });
      App.save();
      App.closeModal();
      this.render();
      App.toast('Negosiasi dicatat ✓', 'success');
    },
    
    showEdit(id) {
      const d = App.state.debts.find(x=>x.id===id);
      if (!d) return;
      App.openModal(`
        <div class="modal-title">Edit Utang</div>
        <div class="form-group">
          <label class="form-label">Nama Utang</label>
          <input class="form-input" id="ed-name" value="${H.escHtml(d.name)}">
        </div>
        <div class="form-group">
          <label class="form-label">Sisa Utang Sekarang</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ed-remaining" value="${d.remaining}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Bunga %/bln</label>
          <input type="number" step="0.01" class="form-input" id="ed-interest" value="${d.interestMonthly}">
        </div>
        <div class="form-group">
          <label class="form-label">Cicilan Min/Bln</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ed-minpay" value="${d.minPayment}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Jatuh Tempo</label>
          <input type="date" class="form-input" id="ed-due" value="${d.dueDate||''}">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.debts.saveEdit('${id}')">Simpan</button>
        </div>
      `);
    },
    
    saveEdit(id) {
      const d = App.state.debts.find(x=>x.id===id);
      if (!d) return;
      d.name = document.getElementById('ed-name').value.trim() || d.name;
      d.remaining = parseInt(document.getElementById('ed-remaining').value) || d.remaining;
      d.interestMonthly = parseFloat(document.getElementById('ed-interest').value) || 0;
      d.minPayment = parseInt(document.getElementById('ed-minpay').value) || 0;
      d.dueDate = document.getElementById('ed-due').value;
      App.save();
      App.closeModal();
      this.render();
      App.toast('Utang diperbarui ✓', 'success');
    },
  },
  
  // ============================================================
  // INCOME TRACKER
  // ============================================================
  income: {
    render() {
      const s = App.state;
      const monthIncome = s.incomes.filter(i=>H.isThisMonth(i.date));
      const totalMonth = monthIncome.reduce((a,i)=>a+i.amount,0);
      const recurring = s.incomes.filter(i=>i.recurring).reduce((a,i)=>a+i.amount,0);
      document.getElementById('income-month-total').textContent = H.formatRp(totalMonth);
      document.getElementById('income-recurring-total').textContent = H.formatRp(recurring) + '/bln';
      
      const sorted = [...s.incomes].sort((a,b)=>b.date.localeCompare(a.date));
      document.getElementById('income-list').innerHTML = sorted.length ? sorted.map(i => `
        <div class="income-card">
          <div class="income-icon-bg">${this.catIcon(i.category)}</div>
          <div class="income-info">
            <div class="income-source">${H.escHtml(i.source)}</div>
            <div class="income-meta">${H.formatDate(i.date)} · ${i.category}</div>
            ${i.recurring ? '<div class="recurring-badge">Rutin</div>' : ''}
          </div>
          <div style="text-align:right">
            <div class="income-amount">${H.formatRp(i.amount)}</div>
            <button class="btn btn-ghost btn-sm" onclick="App.income.remove('${i.id}')">✕</button>
          </div>
        </div>
      `).join('') : '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><div class="empty-state-title">Belum ada pemasukan</div><div class="empty-state-text">Catat setiap pemasukan, sekecil apapun.</div></div>';
      
      // Opportunities
      const opps = [...s.opportunities].sort((a,b)=>b.dateApplied?.localeCompare(a.dateApplied||''));
      document.getElementById('opportunities-list').innerHTML = opps.length ? opps.map(o=>`
        <div class="opportunity-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <div style="font-weight:600">${H.escHtml(o.title)}</div>
              <div style="font-size:12px;color:var(--color-text-secondary)">${H.escHtml(o.company||'')} · ${o.type}</div>
            </div>
            <div style="text-align:right">
              <div class="opp-${o.status}" style="font-size:12px;font-weight:700">${this.oppStatusLabel(o.status)}</div>
              ${o.expectedIncome ? `<div style="font-size:12px;color:var(--green-600);font-weight:600">${H.formatRp(o.expectedIncome)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex;gap:var(--space-2);margin-top:var(--space-3)">
            <select class="form-input form-select" style="font-size:12px;padding:6px 24px 6px 8px;flex:1" onchange="App.income.updateOppStatus('${o.id}',this.value)">
              ${['SAVED','APPLIED','INTERVIEW','NEGOTIATION','WON','LOST','CANCELLED'].map(st=>`<option value="${st}" ${o.status===st?'selected':''}>${this.oppStatusLabel(st)}</option>`).join('')}
            </select>
            <button class="btn btn-ghost btn-sm" onclick="App.income.removeOpp('${o.id}')">✕</button>
          </div>
          ${o.followUpDate ? `<div style="font-size:11px;color:var(--amber-600);margin-top:4px">⏰ Follow-up: ${H.formatDate(o.followUpDate)}</div>` : ''}
        </div>
      `).join('') : '<div style="font-size:13px;color:var(--color-text-muted);padding:var(--space-4)">Catat lamaran kerja atau calon klien di sini.</div>';
    },
    
    catIcon(cat) {
      const map = { job:'💼', freelance:'💻', client:'🤝', business:'🏪', daily:'⚒️', commission:'📊', asset_sale:'📦', other:'💵' };
      return map[cat] || '💵';
    },
    
    oppStatusLabel(st) {
      const map = { SAVED:'Tersimpan', APPLIED:'Dilamar', INTERVIEW:'Interview', NEGOTIATION:'Negosiasi', WON:'Berhasil ✓', LOST:'Tidak jadi', CANCELLED:'Dibatalkan' };
      return map[st] || st;
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Catat Pemasukan</div>
        <div class="form-group">
          <label class="form-label">Sumber / Deskripsi *</label>
          <input class="form-input" id="i-source" placeholder="mis. Freelance desain, Gaji harian, Jual HP lama">
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="i-cat">
            <option value="job">Pekerjaan</option>
            <option value="freelance">Freelance</option>
            <option value="client">Klien</option>
            <option value="business">Usaha</option>
            <option value="daily">Kerja Harian</option>
            <option value="commission">Komisi</option>
            <option value="asset_sale">Jual Aset</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Jumlah *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="i-amount" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="i-date" value="${H.today()}">
        </div>
        <div class="form-group">
          <label class="form-label">Klien / Pemberi Kerja</label>
          <input class="form-input" id="i-client" placeholder="Opsional">
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-4)">
          <div><div class="settings-item-label">Pemasukan Berulang?</div><div class="settings-item-sub">Tandai jika ini pemasukan rutin</div></div>
          <label class="toggle"><input type="checkbox" id="i-recurring"><span class="toggle-slider"></span></label>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.income.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const source = document.getElementById('i-source').value.trim();
      const amount = parseInt(document.getElementById('i-amount').value) || 0;
      if (!source || !amount) { App.toast('Isi sumber dan jumlah', 'error'); return; }
      App.state.incomes.push({
        id: H.uid(), source, amount,
        category: document.getElementById('i-cat').value,
        date: document.getElementById('i-date').value,
        client: document.getElementById('i-client').value.trim(),
        recurring: document.getElementById('i-recurring').checked,
        status: 'RECEIVED', notes: '',
      });
      // Update profile income estimate
      App.state.profile.monthlyIncome = App.state.incomes
        .filter(i => H.isThisMonth(i.date))
        .reduce((a,i)=>a+i.amount, 0);
      App.save();
      App.closeModal();
      this.render();
      App.toast(`${H.formatRp(amount)} dicatat ✓`, 'success');
    },
    
    remove(id) {
      App.state.incomes = App.state.incomes.filter(i=>i.id!==id);
      App.save(); this.render();
    },
    
    showAddOpp() {
      App.openModal(`
        <div class="modal-title">+ Tambah Peluang / Lamaran</div>
        <div class="form-group">
          <label class="form-label">Posisi / Proyek *</label>
          <input class="form-input" id="o-title" placeholder="mis. Desainer UI Freelance, Admin Toko Online">
        </div>
        <div class="form-group">
          <label class="form-label">Perusahaan / Klien</label>
          <input class="form-input" id="o-company" placeholder="Opsional">
        </div>
        <div class="form-group">
          <label class="form-label">Tipe</label>
          <select class="form-input form-select" id="o-type">
            <option value="Pekerjaan Tetap">Pekerjaan Tetap</option>
            <option value="Freelance">Freelance</option>
            <option value="Part-time">Part-time</option>
            <option value="Gig/Ojol">Gig / Ojol</option>
            <option value="Proyek Langsung">Proyek Langsung</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Kanal</label>
          <select class="form-input form-select" id="o-channel">
            <option>Direct / Kontak Langsung</option>
            <option>Projects.co.id</option>
            <option>Sribulancer</option>
            <option>Upwork</option>
            <option>Fiverr</option>
            <option>LinkedIn</option>
            <option>Jobstreet</option>
            <option>Ojol / Gojek / Grab</option>
            <option>Marketplace (Tokopedia/Shopee)</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Estimasi Pemasukan</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="o-income" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal Lamar / Hubungi</label>
          <input type="date" class="form-input" id="o-date" value="${H.today()}">
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal Follow-up</label>
          <input type="date" class="form-input" id="o-followup">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.income.saveOpp()">Simpan</button>
        </div>
      `);
    },
    
    saveOpp() {
      const title = document.getElementById('o-title').value.trim();
      if (!title) { App.toast('Isi nama posisi/proyek', 'error'); return; }
      App.state.opportunities.push({
        id: H.uid(), title,
        company: document.getElementById('o-company').value.trim(),
        type: document.getElementById('o-type').value,
        channel: document.getElementById('o-channel').value,
        expectedIncome: parseInt(document.getElementById('o-income').value) || 0,
        dateApplied: document.getElementById('o-date').value,
        followUpDate: document.getElementById('o-followup').value,
        status: 'APPLIED', notes: '',
      });
      App.save(); App.closeModal(); this.render();
      App.toast('Peluang ditambahkan ✓', 'success');
    },
    
    updateOppStatus(id, status) {
      const o = App.state.opportunities.find(x=>x.id===id);
      if (o) { o.status = status; App.save(); this.render(); }
    },
    
    removeOpp(id) {
      App.state.opportunities = App.state.opportunities.filter(o=>o.id!==id);
      App.save(); this.render();
    },
  },
  
  // ============================================================
  // EXPENSE TRACKER
  // ============================================================
  expenses: {
    render() {
      const s = App.state;
      const records = s.expenses.records || [];
      const thisMonth = records.filter(e => H.isThisMonth(e.date));
      const essential = thisMonth.filter(e=>e.essential).reduce((a,e)=>a+e.amount,0);
      const nonEssential = thisMonth.filter(e=>!e.essential).reduce((a,e)=>a+e.amount,0);
      
      document.getElementById('exp-essential-total').textContent = H.formatRp(essential);
      document.getElementById('exp-nonessential-total').textContent = H.formatRp(nonEssential);
      
      const warnEl = document.getElementById('exp-warning-banner');
      if (essential > 0 && nonEssential / essential > 0.3) {
        warnEl.style.display = 'flex';
      } else {
        warnEl.style.display = 'none';
      }
      
      const sorted = [...records].sort((a,b)=>b.date.localeCompare(a.date));
      document.getElementById('expenses-list').innerHTML = sorted.length ? sorted.map(e=>`
        <div class="income-card" style="border-left: 3px solid ${e.essential?'var(--teal-400)':'var(--amber-400)'}">
          <div class="income-icon-bg" style="background:${e.essential?'var(--teal-50)':'var(--amber-50)'}">
            ${this.catIcon(e.category)}
          </div>
          <div class="income-info">
            <div class="income-source">${H.escHtml(e.description)}</div>
            <div class="income-meta">${H.formatDate(e.date)} · ${e.essential?'Esensial':'Non-esensial'}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:700;color:var(--red-600)">${H.formatRp(e.amount)}</div>
            <button class="btn btn-ghost btn-sm" onclick="App.expenses.remove('${e.id}')">✕</button>
          </div>
        </div>
      `).join('') : '<div class="empty-state"><div class="empty-state-icon" style="color:var(--slate-400);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div><div class="empty-state-title">Belum ada pengeluaran tercatat</div><div class="empty-state-text">Catat pengeluaran harian untuk kontrol cashflow.</div></div>';
    },
    
    catIcon(cat) {
      const m = { food:'🍛', housing:'🏠', utilities:'⚡', transport:'🚗', comm:'📱', debt_interest:'💸', entertainment:'🎮', shopping:'🛒', eating_out:'🍜', other:'💳' };
      return m[cat] || '💳';
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Catat Pengeluaran</div>
        <div class="form-group">
          <label class="form-label">Deskripsi *</label>
          <input class="form-input" id="exp-desc" placeholder="mis. Makan siang, Bensin, Netflix">
        </div>
        <div class="form-group">
          <label class="form-label">Jumlah *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="exp-amount" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="exp-cat">
            <optgroup label="Esensial">
              <option value="food">Makanan & Minuman</option>
              <option value="housing">Tempat Tinggal</option>
              <option value="utilities">Listrik & Air</option>
              <option value="transport">Transportasi</option>
              <option value="comm">Komunikasi</option>
              <option value="health">Kesehatan</option>
            </optgroup>
            <optgroup label="Non-esensial">
              <option value="entertainment">Hiburan</option>
              <option value="shopping">Belanja</option>
              <option value="eating_out">Makan di Luar</option>
              <option value="subscription">Langganan</option>
              <option value="other">Lainnya</option>
            </optgroup>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="exp-date" value="${H.today()}">
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-4)">
          <div><div class="settings-item-label">Pengeluaran Esensial?</div></div>
          <label class="toggle"><input type="checkbox" id="exp-essential" checked><span class="toggle-slider"></span></label>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.expenses.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const desc = document.getElementById('exp-desc').value.trim();
      const amount = parseInt(document.getElementById('exp-amount').value) || 0;
      if (!desc || !amount) { App.toast('Isi deskripsi dan jumlah', 'error'); return; }
      if (!App.state.expenses.records) App.state.expenses.records = [];
      App.state.expenses.records.push({
        id: H.uid(), description: desc, amount,
        category: document.getElementById('exp-cat').value,
        date: document.getElementById('exp-date').value,
        essential: document.getElementById('exp-essential').checked,
      });
      App.save(); App.closeModal(); this.render();
      App.toast(`${H.formatRp(amount)} dicatat ✓`, 'success');
    },
    
    remove(id) {
      App.state.expenses.records = (App.state.expenses.records||[]).filter(e=>e.id!==id);
      App.save(); this.render();
    },
  },
  
  // ============================================================
  // ASSET INVENTORY
  // ============================================================
  assets: {
    render() {
      const s = App.state;
      const assets = s.assets || [];
      const total = assets.reduce((a,x)=>a+x.value,0);
      const liquid = assets.filter(x=>x.liquidatable && !x.keepForWork).reduce((a,x)=>a+x.value,0);
      document.getElementById('asset-total-value').textContent = H.formatRp(total);
      document.getElementById('asset-liquid-value').textContent = H.formatRp(liquid);
      
      document.getElementById('assets-list').innerHTML = assets.length ? assets.map(a=>`
        <div class="income-card">
          <div class="income-icon-bg">${this.catIcon(a.category)}</div>
          <div class="income-info">
            <div class="income-source">${H.escHtml(a.name)}</div>
            <div class="income-meta">${a.category} ${a.keepForWork ? '· Alat kerja' : ''}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:700">${H.formatRp(a.value)}</div>
            <div style="font-size:11px;color:${a.liquidatable&&!a.keepForWork?'var(--green-600)':'var(--slate-400)'}">${a.liquidatable&&!a.keepForWork?'Bisa dijual':'—'}</div>
            <button class="btn btn-ghost btn-sm" onclick="App.assets.remove('${a.id}')">✕</button>
          </div>
        </div>
      `).join('') : '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg></div><div class="empty-state-title">Belum ada aset</div><div class="empty-state-text">Catat aset untuk mengetahui apa yang bisa dijual saat darurat.</div></div>';
    },
    
    catIcon(cat) {
      const m = { cash:'💵', bank:'🏦', vehicle:'🏍️', electronics:'📱', property:'🏠', business:'🏪', jewelry:'💍', other:'📦' };
      return m[cat] || '📦';
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Tambah Aset</div>
        <div class="form-group">
          <label class="form-label">Nama Aset *</label>
          <input class="form-input" id="a-name" placeholder="mis. HP Samsung A54, Motor Beat 2019">
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="a-cat">
            <option value="electronics">Elektronik</option>
            <option value="vehicle">Kendaraan</option>
            <option value="property">Properti</option>
            <option value="cash">Uang Tunai</option>
            <option value="jewelry">Perhiasan</option>
            <option value="business">Peralatan Usaha</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Estimasi Nilai</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="a-value" placeholder="0"></div>
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-2)">
          <div><div class="settings-item-label">Bisa dijual?</div></div>
          <label class="toggle"><input type="checkbox" id="a-liquid" checked><span class="toggle-slider"></span></label>
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-4)">
          <div><div class="settings-item-label">Dipakai untuk bekerja?</div><div class="settings-item-sub">Jika ya, tidak akan direkomendasikan untuk dijual</div></div>
          <label class="toggle"><input type="checkbox" id="a-work"><span class="toggle-slider"></span></label>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.assets.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const name = document.getElementById('a-name').value.trim();
      if (!name) { App.toast('Nama aset wajib diisi', 'error'); return; }
      App.state.assets.push({
        id: H.uid(), name, value: parseInt(document.getElementById('a-value').value)||0,
        category: document.getElementById('a-cat').value,
        liquidatable: document.getElementById('a-liquid').checked,
        keepForWork: document.getElementById('a-work').checked,
        notes: '',
      });
      App.save(); App.closeModal(); this.render();
      App.toast('Aset ditambahkan ✓', 'success');
    },
    
    remove(id) {
      App.state.assets = App.state.assets.filter(a=>a.id!==id);
      App.save(); this.render();
    },
  },
  
  // ============================================================
  // SETTINGS
  // ============================================================
  settings: {
    exportData() {
      const data = JSON.stringify(App.state, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rebound30-backup-${H.today()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      App.state.settings.lastExport = H.today();
      App.save();
      document.getElementById('last-export-text').textContent = `Terakhir export: ${H.formatDate(H.today())}`;
      App.toast('Data berhasil di-export ✓', 'success');
      App.checkBackupBanner && App.checkBackupBanner();
    },
    
    importData() {
      document.getElementById('import-file-input').click();
    },
    
    handleImport(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (!data.meta || !data.profile) throw new Error('Format tidak valid');
          if (confirm('Import akan menggantikan SEMUA data yang ada. Lanjutkan?')) {
            App.state = data;
            App.save();
            App.navigate('dashboard');
            App.toast('Data berhasil di-import ✓', 'success');
          }
        } catch {
          App.toast('File tidak valid. Gunakan file backup Rebound 30.', 'error');
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    },
    
    toggleBackupReminder(val) {
      App.state.settings.backupReminderEnabled = val;
      App.save();
    },
    
    setBackupDays(val) {
      App.state.settings.backupReminderDays = parseInt(val);
      App.save();
    },
    
    showRights() {
      App.openModal(`
        <div class="modal-title">Hak-hak Resmi Debitur</div>
        <div class="rights-card" style="margin-bottom:0">
          <h4>Aturan Penagihan (POJK 22/2023 & SEOJK 19/2023)</h4>
          <div class="rights-list">
            <div class="rights-item">Penagihan hanya boleh antara <strong>08.00 – 20.00</strong> waktu setempat</div>
            <div class="rights-item">Penagih wajib bersertifikasi AFPI dan membawa surat tugas resmi</div>
            <div class="rights-item">Tidak boleh menghubungi orang lain (kontak HP, keluarga) tanpa persetujuanmu</div>
            <div class="rights-item">Dilarang: ancaman, kekerasan, kata kasar, penyebaran data, cyberbullying</div>
            <div class="rights-item">Bunga + biaya total tidak boleh melebihi 100% dari pokok pinjaman</div>
            <div class="rights-item">Kamu berhak mengajukan restrukturisasi: perpanjang tenor, kurangi bunga, tunda pokok</div>
            <div class="rights-item">Ajukan secara tertulis (email) sebelum benar-benar macet bayar</div>
          </div>
          <div class="rights-contact">
            Layanan OJK: 157 atau WhatsApp 081-157-157-157<br>
            🌐 AFPI: afpi.or.id<br>
            Laporan Siber: patrolisiber.id
          </div>
        </div>
        <div style="margin-top:var(--space-4);padding:var(--space-3);background:var(--slate-50);border-radius:var(--radius-md);font-size:12px;color:var(--color-text-secondary)">
          Info ini bersumber dari OJK dan peraturan yang berlaku. Ini bukan nasihat hukum profesional.
        </div>
        <button class="btn btn-primary btn-full" style="margin-top:var(--space-4)" onclick="App.closeModal()">Mengerti</button>
      `);
    },
    
    resetData() {
      if (confirm('YAKIN? Semua data akan DIHAPUS PERMANEN dan tidak bisa dipulihkan.\n\nSarankan export dulu sebelum reset.')) {
        if (confirm('Ini tidak bisa dibatalkan. Reset sekarang?')) {
          localStorage.removeItem(Store.KEY);
          location.reload();
        }
      }
    },
  },
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
// Register Service Worker for PWA / Offline use
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').catch(function(err) {
      console.log('SW registration error: ', err);
    });
  });
}