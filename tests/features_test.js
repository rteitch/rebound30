// ============================================================================
// REBOUND 30 — SUITE FITUR BARU
// ----------------------------------------------------------------------------
// Menguji modul yang menutup gap PRD:
//
//   1. Prioritas utang        PRD §17.2  (agunan, risiko hukum, custom)
//   2. Assessment finansial   PRD §12    (DTI, NO_INCOME, runway, net position)
//   3. Pengingat in-app       PRD §27    (jatuh tempo, follow-up, kas kritis)
//   4. Laporan bulanan        PRD §26
//   5. Review mingguan        PRD §9
//   6. Rencana 90 hari        PRD §24
//   7. Export CSV             PRD §42
//
// Jalankan:  node tests/features_test.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadApp() {
  const storage = {};
  const context = {
    window: {}, console,
    document: {
      createElement: () => ({ style: {}, setAttribute() {}, click() {}, appendChild() {} }),
      body: { appendChild() {}, removeChild() {} },
      getElementById: () => null,
    },
    localStorage: {
      getItem: (k) => (k in storage ? storage[k] : null),
      setItem: (k, v) => { storage[k] = String(v); },
      removeItem: (k) => { delete storage[k]; },
      clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
    },
    URL: { createObjectURL: () => 'blob:x', revokeObjectURL() {} },
    Blob: function Blob(parts) { this.parts = parts; },
  };
  vm.createContext(context);
  const files = ['js/icons.js', 'js/helpers.js', 'js/store.js', 'js/engine.js',
                 'js/finance.js', 'js/notify.js', 'js/exporter.js'];
  for (const f of files) {
    const code = fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
    vm.runInContext(code + `
      ['H','Store','ScoreEngine','ReboundEngine','Achievements','FinanceEngine','NotifyCenter','Exporter','Icons']
        .forEach(function(n){ try { if (eval('typeof '+n) !== 'undefined') window[n] = eval(n); } catch(e){} });
    `, context);
  }
  return context.window;
}

const { H, Store, FinanceEngine, NotifyCenter, Exporter } = loadApp();

let total = 0, passed = 0, failed = 0;
function assert(cond, msg, meta) {
  total++;
  if (cond) { passed++; console.log(`  ✓ [PASS] ${msg}`); }
  else {
    failed++;
    console.error(`  ✗ [FAIL] ${msg}`);
    if (meta !== undefined) console.error(`          ${JSON.stringify(meta)}`);
  }
}
function section(t) {
  console.log(`\n----------------------------------------------------------------------------\n${t}\n----------------------------------------------------------------------------`);
}

/** State dasar yang realistis untuk pengujian. */
function baseState(opts) {
  const o = opts || {};
  const s = Store.defaultState();
  s.meta.onboardingDone = true;
  s.meta.startDate = H.addDays(H.today(), -(o.day != null ? o.day : 25) + 1);
  s.profile.cash = o.cash != null ? o.cash : 2000000;
  s.profile.monthlyIncome = o.income != null ? o.income : 3000000;
  s.expenses.essential = { food: 1200000, housing: 900000, utilities: 250000,
    transport: 300000, comm: 100000, other: 0 };
  return s;
}

function debt(over) {
  return Object.assign({
    id: H.uid(), name: 'Utang', creditor: '', original: 5000000, remaining: 5000000,
    interestMonthly: 0, dueDate: '', minPayment: 500000, collateral: '',
    riskLevel: 'MEDIUM', payments: [], negotiations: [], notes: '',
  }, over);
}

console.log('============================================================================');
console.log('🧩 REBOUND 30 — SUITE FITUR BARU');
console.log('============================================================================');

// ---------------------------------------------------------------------------
section('1. PRIORITAS UTANG (PRD §17.2)');
// ---------------------------------------------------------------------------

{
  // Regresi inti: agunan harus mengalahkan sekadar jatuh tempo lebih dekat.
  // Versi lama hanya mengurutkan berdasarkan dueDate sehingga utang tanpa
  // jaminan bisa mendahului utang yang bisa menyita motor pengguna.
  const beragunan = debt({ id: 'agunan', name: 'Kredit Motor',
    collateral: 'BPKB Motor', dueDate: H.addDays(H.today(), 20) });
  const biasa = debt({ id: 'biasa', name: 'Utang Warung',
    collateral: '', dueDate: H.addDays(H.today(), 10) });

  const urut = FinanceEngine.sortDebts([biasa, beragunan], 'risk_first');
  assert(urut[0].id === 'agunan',
    'DEBT-1.1: utang beragunan BPKB didahulukan meski jatuh temponya lebih jauh',
    { urutan: urut.map(d => d.name) });

  const skorAgunan = FinanceEngine.riskScore(beragunan);
  assert(skorAgunan.rincian.some(r => r.faktor === 'agunan'),
    'DEBT-1.2: skor risiko menyertakan faktor agunan');
  assert(skorAgunan.skor > FinanceEngine.riskScore(biasa).skor,
    'DEBT-1.3: skor risiko utang beragunan lebih tinggi');
}

{
  // Bunga di atas batas legal menandakan risiko hukum, bukan sekadar mahal.
  const ilegal = debt({ id: 'ilegal', name: 'Pinjol', interestMonthly: 15 });
  const legal = debt({ id: 'legal', name: 'Koperasi', interestMonthly: 2 });
  const urut = FinanceEngine.sortDebts([legal, ilegal], 'risk_first');
  assert(urut[0].id === 'ilegal', 'DEBT-2.1: bunga di atas batas legal naik prioritas',
    { urutan: urut.map(d => d.name) });
  assert(FinanceEngine.riskScore(ilegal).rincian.some(r => r.faktor === 'risiko_hukum'),
    'DEBT-2.2: faktor risiko hukum tercatat pada rincian');
}

{
  // Jatuh tempo terlewat tetap sangat mendesak.
  const telat = debt({ id: 'telat', dueDate: H.addDays(H.today(), -5) });
  const r = FinanceEngine.riskScore(telat);
  assert(r.rincian.some(x => x.faktor === 'jatuh_tempo' && /lewat/i.test(x.alasan)),
    'DEBT-3.1: tunggakan yang sudah lewat jatuh tempo terdeteksi');
}

{
  // Kesepakatan restrukturisasi menurunkan urgensi (PRD §17.2 poin 7).
  const sepakat = debt({ id: 's', collateral: 'BPKB Motor',
    negotiations: [{ status: 'AGREED', date: H.today() }] });
  const belum = debt({ id: 'b', collateral: 'BPKB Motor' });
  assert(FinanceEngine.riskScore(sepakat).skor < FinanceEngine.riskScore(belum).skor,
    'DEBT-4.1: utang dengan kesepakatan tertulis turun urgensinya',
    { sepakat: FinanceEngine.riskScore(sepakat).skor, belum: FinanceEngine.riskScore(belum).skor });
}

{
  // Regresi: strategi 'custom' dulu tidak ditangani sama sekali dan
  // diam-diam mengembalikan daftar apa adanya.
  const a = debt({ id: 'a', name: 'A', customOrder: 2 });
  const b = debt({ id: 'b', name: 'B', customOrder: 0 });
  const c = debt({ id: 'c', name: 'C', customOrder: 1 });
  const urut = FinanceEngine.sortDebts([a, b, c], 'custom').map(d => d.name);
  assert(JSON.stringify(urut) === JSON.stringify(['B', 'C', 'A']),
    'DEBT-5.1: strategi custom menghormati customOrder', { urut });

  const tanpaUrutan = debt({ id: 'z', name: 'Z' });
  const urut2 = FinanceEngine.sortDebts([tanpaUrutan, b], 'custom').map(d => d.name);
  assert(urut2[0] === 'B' && urut2[1] === 'Z',
    'DEBT-5.2: utang tanpa customOrder ditempatkan di belakang, bukan diacak', { urut2 });
}

{
  // Utang lunas tidak boleh menempati posisi prioritas.
  const lunas = debt({ id: 'lunas', name: 'Lunas', remaining: 0, collateral: 'BPKB Motor' });
  const aktif = debt({ id: 'aktif', name: 'Aktif', remaining: 1000000 });
  for (const st of ['risk_first', 'avalanche', 'snowball', 'custom']) {
    const urut = FinanceEngine.sortDebts([lunas, aktif], st);
    assert(urut[urut.length - 1].id === 'lunas',
      `DEBT-6.1 [${st}]: utang lunas selalu turun ke bawah daftar`, { urut: urut.map(d => d.name) });
  }
  assert(FinanceEngine.riskScore(lunas).skor === 0, 'DEBT-6.2: skor risiko utang lunas nol');
}

{
  // Avalanche & snowball tetap berperilaku sesuai definisinya.
  const kecilBungaTinggi = debt({ id: 'k', remaining: 1000000, interestMonthly: 10 });
  const besarBungaRendah = debt({ id: 'b', remaining: 9000000, interestMonthly: 1 });
  assert(FinanceEngine.sortDebts([besarBungaRendah, kecilBungaTinggi], 'avalanche')[0].id === 'k',
    'DEBT-7.1: avalanche mendahulukan bunga tertinggi');
  assert(FinanceEngine.sortDebts([besarBungaRendah, kecilBungaTinggi], 'snowball')[0].id === 'k',
    'DEBT-7.2: snowball mendahulukan saldo terkecil');
}

{
  // Setiap rekomendasi wajib bisa dijelaskan (PRD §7.6).
  const d = debt({ collateral: 'BPKB Motor' });
  for (const st of ['risk_first', 'avalanche', 'snowball', 'custom']) {
    const teks = FinanceEngine.explainPriority(d, st);
    assert(typeof teks === 'string' && teks.length > 10,
      `DEBT-8.1 [${st}]: alasan prioritas tersedia dan tidak kosong`, { teks });
  }
}

// ---------------------------------------------------------------------------
section('2. ASSESSMENT FINANSIAL (PRD §12)');
// ---------------------------------------------------------------------------

{
  const s = baseState({ income: 0, cash: 0 });
  const a = FinanceEngine.assess(s);
  assert(a.incomeStatus === 'NO_INCOME', 'FIN-1.1: status NO_INCOME terdeteksi saat pemasukan nol');
  assert(a.dtiRatio === null && a.dtiStatus === 'UNDEFINED',
    'FIN-1.2: DTI tidak dipaksa jadi angka saat pemasukan nol', { dti: a.dtiRatio });
  assert(a.runwayDays === 0 && a.runwayStatus === 'CRITICAL',
    'FIN-1.3: runway nol saat kas kosong', { runway: a.runwayDays });
}

{
  const s = baseState({ income: 5000000, cash: 5000000 });
  s.debts.push(debt({ minPayment: 1000000 }));
  const a = FinanceEngine.assess(s);
  assert(Math.abs(a.dtiRatio - 0.2) < 0.001 && a.dtiStatus === 'SEHAT',
    'FIN-2.1: DTI 20% dinilai sehat', { dti: a.dtiRatio });

  s.debts.push(debt({ minPayment: 2000000 }));
  const a2 = FinanceEngine.assess(s);
  assert(a2.dtiStatus === 'BERAT', 'FIN-2.2: DTI di atas 50% dinilai berat', { dti: a2.dtiRatio });
}

{
  const s = baseState({ cash: 2750000 }); // biaya pokok 2.750.000/bln
  const a = FinanceEngine.assess(s);
  assert(a.runwayDays === 30 && a.runwayStatus === 'SAFE',
    'FIN-3.1: kas satu bulan biaya pokok = runway 30 hari', { hari: a.runwayDays });

  const s2 = baseState({ cash: 400000 });
  assert(FinanceEngine.assess(s2).runwayStatus === 'CRITICAL',
    'FIN-3.2: kas di bawah sepekan berstatus kritis');
}

{
  const s = baseState({ cash: 1000000 });
  s.assets.push({ id: 'a', name: 'Motor', value: 8000000, liquidatable: true, keepForWork: false });
  s.assets.push({ id: 'b', name: 'Laptop', value: 7000000, liquidatable: true, keepForWork: true });
  s.debts.push(debt({ remaining: 20000000 }));
  const a = FinanceEngine.assess(s);
  assert(a.netPosition === (1000000 + 15000000) - 20000000,
    'FIN-4.1: kekayaan bersih = kas + aset − utang', { net: a.netPosition });
  assert(a.liquidAssets === 8000000,
    'FIN-4.2: aset alat kerja TIDAK dihitung sebagai bisa dijual (PRD §22)',
    { likuid: a.liquidAssets });
}

{
  const s = baseState();
  s.expenses.essential = { food: 0, housing: 0, utilities: 0, transport: 0, comm: 0, other: 0 };
  const a = FinanceEngine.assess(s);
  assert(a.runwayDays === null && a.runwayStatus === 'UNKNOWN',
    'FIN-5.1: runway tidak dihitung bila biaya pokok belum diisi (hindari bagi nol)');
}

// ---------------------------------------------------------------------------
section('3. PENGINGAT IN-APP (PRD §27)');
// ---------------------------------------------------------------------------

{
  // Regresi utama: followUpDate dulu hanya disimpan dan ditampilkan pasif.
  const s = baseState();
  s.opportunities.push({ id: 'o1', title: 'Admin', company: 'PT A', type: 'job',
    status: 'APPLIED', expectedIncome: 0, dateApplied: H.addDays(H.today(), -7),
    followUpDate: H.today(), notes: '' });
  const n = NotifyCenter.build(s);
  assert(n.some(x => x.id === 'opp_followup_o1'),
    'NOTIF-1.1: follow-up peluang yang jatuh hari ini memunculkan pengingat',
    { ids: n.map(x => x.id) });
}

{
  const s = baseState();
  s.opportunities.push({ id: 'o1', title: 'Admin', status: 'APPLIED',
    dateApplied: H.today(), followUpDate: H.addDays(H.today(), 5), notes: '' });
  assert(!NotifyCenter.build(s).some(x => x.id === 'opp_followup_o1'),
    'NOTIF-1.2: follow-up yang belum jatuh tempo tidak mengganggu (hindari spam)');

  s.opportunities[0].followUpDate = H.today();
  s.opportunities[0].status = 'WON';
  assert(!NotifyCenter.build(s).some(x => x.id === 'opp_followup_o1'),
    'NOTIF-1.3: peluang yang sudah menang tidak lagi diingatkan');
}

{
  const s = baseState();
  s.debts.push(debt({ id: 'd1', name: 'Pinjol',
    negotiations: [{ status: 'NEGOTIATING', date: H.addDays(H.today(), -10),
      followUp: H.addDays(H.today(), -2) }] }));
  const n = NotifyCenter.build(s);
  assert(n.some(x => x.id.startsWith('neg_followup_d1')),
    'NOTIF-2.1: negosiasi yang tidak dijawab memunculkan pengingat', { ids: n.map(x => x.id) });
  assert(n.some(x => /OJK|157/.test(x.pesan)),
    'NOTIF-2.2: pengingat negosiasi menyertakan jalur eskalasi resmi OJK');

  s.debts[0].negotiations[0].status = 'AGREED';
  assert(!NotifyCenter.build(s).some(x => x.id.startsWith('neg_followup_d1')),
    'NOTIF-2.3: negosiasi yang sudah disepakati berhenti mengingatkan');
}

{
  const s = baseState();
  s.debts.push(debt({ id: 'd1', name: 'Cicilan', dueDate: H.today() }));
  const n = NotifyCenter.build(s);
  const item = n.find(x => x.id === 'debt_due_d1');
  assert(item && item.severity === 'CRITICAL',
    'NOTIF-3.1: utang jatuh tempo hari ini berstatus kritis', { item });

  s.debts[0].dueDate = H.addDays(H.today(), 30);
  assert(!NotifyCenter.build(s).some(x => x.id === 'debt_due_d1'),
    'NOTIF-3.2: jatuh tempo masih jauh tidak ditampilkan');

  s.debts[0].dueDate = H.today();
  s.debts[0].remaining = 0;
  assert(!NotifyCenter.build(s).some(x => x.id === 'debt_due_d1'),
    'NOTIF-3.3: utang lunas tidak diingatkan meski tanggalnya tiba');
}

{
  const s = baseState({ cash: 0 });
  const n = NotifyCenter.build(s);
  const kritis = n.find(x => x.id === 'runway_critical');
  assert(!!kritis, 'NOTIF-4.1: kas kritis memunculkan pengingat');
  assert(kritis && kritis.dismissible === false,
    'NOTIF-4.2: pengingat bertahan hidup tidak bisa disembunyikan');
  assert(kritis && /emergency/i.test(kritis.aksi),
    'NOTIF-4.3: pengingat kas kritis mengarah ke Mode Darurat');
}

{
  // Dismiss hanya berlaku untuk hari ini, dan tidak boleh menutup yang kritis.
  const s = baseState();
  s.missions[H.today()] = [{ id: 'm1', completed: false }];
  const sebelum = NotifyCenter.build(s).length;
  NotifyCenter.dismiss(s, 'missions_untouched');
  assert(NotifyCenter.build(s).length === sebelum - 1,
    'NOTIF-5.1: pengingat yang ditutup hilang dari daftar hari ini');
  assert(s.meta.notifDismissed.missions_untouched === H.today(),
    'NOTIF-5.2: penutupan dicatat bertanggal hari ini, bukan permanen');
}

{
  const s = baseState();
  s.meta.notifDismissed = { lama: '2020-01-01', baru: H.today() };
  NotifyCenter.dismiss(s, 'apa_saja');
  assert(!('lama' in s.meta.notifDismissed),
    'NOTIF-5.3: catatan penutupan lama dibersihkan agar tidak menumpuk');
}

{
  // Nada tidak menghakimi (PRD §7.4 & §21).
  const s = baseState();
  s.expenses.records.push({ id: 'e', description: 'Jajan', amount: 2000000,
    date: H.today(), category: 'eating_out', essential: false });
  const n = NotifyCenter.build(s).find(x => x.id === 'expense_spike');
  assert(!!n, 'NOTIF-6.1: lonjakan pengeluaran non-pokok terdeteksi');
  assert(n && !/boros|gagal|salah|buruk/i.test(n.pesan),
    'NOTIF-6.2: peringatan pengeluaran tidak memakai kata menghakimi', { pesan: n && n.pesan });
}

{
  const s = baseState();
  s.debts.push(debt({ dueDate: H.today() }));
  const n = NotifyCenter.build(s);
  const urut = n.map(x => NotifyCenter.SEVERITY_ORDER[x.severity]);
  assert(urut.every((v, i) => i === 0 || urut[i - 1] <= v),
    'NOTIF-7.1: pengingat terurut dari paling mendesak', { urut });
}

// ---------------------------------------------------------------------------
section('4. LAPORAN BULANAN (PRD §26)');
// ---------------------------------------------------------------------------

{
  const s = baseState();
  const bulan = H.today().slice(0, 7);
  s.incomes.push(
    { id: 'i1', source: 'Proyek', amount: 1500000, date: H.today(), recurring: false },
    { id: 'i2', source: 'Retainer', amount: 800000, date: H.today(), recurring: true });
  s.expenses.records.push(
    { id: 'e1', description: 'Makan', amount: 400000, date: H.today(), category: 'food', essential: true },
    { id: 'e2', description: 'Nonton', amount: 150000, date: H.today(), category: 'entertainment', essential: false });
  s.debts.push(debt({ payments: [{ id: 'p', amount: 700000, interest: 100000, date: H.today() }] }));

  const r = FinanceEngine.monthlyReport(s, bulan);
  assert(r.totalIncome === 2300000, 'RPT-1.1: total pemasukan bulan berjalan benar', { r: r.totalIncome });
  assert(r.incomeRecurring === 800000, 'RPT-1.2: porsi pemasukan berulang dipisahkan');
  assert(r.pengeluaranEsensial === 400000 && r.pengeluaranNonEsensial === 150000,
    'RPT-1.3: pengeluaran esensial & non-esensial dipisahkan (PRD §26)');
  assert(r.debtPokok === 600000 && r.debtBunga === 100000,
    'RPT-1.4: pembayaran utang dipecah menjadi pokok dan bunga',
    { pokok: r.debtPokok, bunga: r.debtBunga });
  assert(r.arusKasBersih === 2300000 - 550000 - 600000 - 100000,
    'RPT-1.5: arus kas bersih dihitung menyeluruh', { arus: r.arusKasBersih });
  assert(r.kategoriTerurut[0][0] === 'food',
    'RPT-1.6: kategori pengeluaran diurutkan dari yang terbesar', { kat: r.kategoriTerurut });
}

{
  // Transaksi bulan lain tidak boleh bocor ke laporan bulan ini.
  const s = baseState();
  const bulanIni = H.today().slice(0, 7);
  s.incomes.push({ id: 'lama', source: 'Lama', amount: 9999999, date: '2020-03-15', recurring: false });
  const r = FinanceEngine.monthlyReport(s, bulanIni);
  assert(r.totalIncome === 0, 'RPT-2.1: transaksi bulan lain tidak ikut terhitung', { r: r.totalIncome });

  const rLama = FinanceEngine.monthlyReport(s, '2020-03');
  assert(rLama.totalIncome === 9999999, 'RPT-2.2: laporan bulan lampau bisa dibuka kembali');
  assert(/Maret 2020/i.test(rLama.label), 'RPT-2.3: label bulan dalam bahasa Indonesia', { label: rLama.label });
}

{
  const s = baseState();
  s.missions[H.today()] = [
    { id: 'a', completed: true }, { id: 'b', completed: false, skipped: true }, { id: 'c', completed: false }];
  const r = FinanceEngine.monthlyReport(s);
  assert(r.misiSelesai === 1 && r.misiDilewati === 1 && r.misiTotal === 3,
    'RPT-3.1: rekap misi memisahkan selesai, dilewati, dan total',
    { s: r.misiSelesai, d: r.misiDilewati, t: r.misiTotal });
  assert(r.hariAktif === 1, 'RPT-3.2: hari aktif dihitung dari hari dengan misi tuntas');
}

{
  const s = baseState();
  s.incomes.push({ id: 'i', source: 'X', amount: 1, date: '2026-01-10', recurring: false });
  const bulan = FinanceEngine.availableMonths(s);
  assert(bulan.indexOf('2026-01') !== -1 && bulan.indexOf(H.today().slice(0, 7)) !== -1,
    'RPT-4.1: daftar bulan mencakup bulan berdata dan bulan berjalan', { bulan });
  assert(bulan[0] >= bulan[bulan.length - 1], 'RPT-4.2: daftar bulan terurut terbaru lebih dulu');
}

// ---------------------------------------------------------------------------
section('5. REVIEW MINGGUAN (PRD §9)');
// ---------------------------------------------------------------------------

{
  const s = baseState({ day: 8 });
  assert(FinanceEngine.pendingReview(s) === 7,
    'WK-1.1: review pekan 1 tertunda setelah melewati hari ke-7',
    { pending: FinanceEngine.pendingReview(s) });

  s.meta.reviewsDone = [7];
  assert(FinanceEngine.pendingReview(s) === null,
    'WK-1.2: review yang sudah dikerjakan tidak muncul lagi');

  const s2 = baseState({ day: 5 });
  assert(FinanceEngine.pendingReview(s2) === null,
    'WK-1.3: review belum ditawarkan sebelum hari ke-7');

  const s3 = baseState({ day: 25 });
  assert(FinanceEngine.pendingReview(s3) === 21,
    'WK-1.4: yang ditawarkan adalah titik review terakhir yang terlewat',
    { pending: FinanceEngine.pendingReview(s3) });
}

{
  const s = baseState({ day: 8 });
  const start = s.meta.startDate;
  s.incomes.push({ id: 'i', source: 'X', amount: 500000, date: H.addDays(start, 3), recurring: false });
  s.missions[H.addDays(start, 2)] = [{ id: 'a', completed: true }, { id: 'b', completed: false }];
  const r = FinanceEngine.weeklyReview(s, 7);
  assert(r.totalIncome === 500000, 'WK-2.1: pemasukan dalam rentang pekan terhitung', { r: r.totalIncome });
  assert(r.misiSelesai === 1 && r.misiTotal === 2 && r.persenMisi === 50,
    'WK-2.2: persentase misi pekan dihitung benar', { p: r.persenMisi });
  assert(typeof r.catatan === 'string' && r.catatan.length > 20,
    'WK-2.3: catatan refleksi tersedia');
}

{
  // Nada tetap suportif saat pekan berat (PRD §7.4 No Shame).
  const s = baseState({ day: 8 });
  const start = s.meta.startDate;
  s.missions[H.addDays(start, 2)] = [{ id: 'a', completed: false }, { id: 'b', completed: false }];
  const r = FinanceEngine.weeklyReview(s, 7);
  assert(!/gagal|malas|buruk|salah/i.test(r.catatan),
    'WK-3.1: catatan pekan berat tidak memakai kata menghakimi', { catatan: r.catatan });
}

// ---------------------------------------------------------------------------
section('6. RENCANA 90 HARI (PRD §24)');
// ---------------------------------------------------------------------------

{
  const s = baseState({ day: 30 });
  s.debts.push(debt({ remaining: 10000000 }));
  s.incomes.push({ id: 'i', source: 'Retainer', amount: 1000000, date: H.today(), recurring: true });
  const p = FinanceEngine.plan90(s);

  assert(p.months.length === 3, 'P90-1.1: rencana terdiri dari tiga bulan');
  assert(/Recovery/i.test(p.months[0].nama) && /Stabilization/i.test(p.months[1].nama)
    && /Debt Attack/i.test(p.months[2].nama),
    'P90-1.2: urutan bulan sesuai PRD §24 (Recovery, Stabilization, Debt Attack)',
    { nama: p.months.map(m => m.nama) });
  assert(p.targets.debtCut === 2000000,
    'P90-1.3: target penurunan utang 20% dari sisa saat ini', { t: p.targets.debtCut });
  assert(p.months.every(m => m.langkah.length >= 3),
    'P90-1.4: setiap bulan punya langkah konkret');
}

{
  // Tanpa utang, rencana harus beralih ke penguatan tabungan — bukan
  // menyuruh menyerang utang yang tidak ada (PRD §54 edge case).
  const s = baseState({ day: 30 });
  const p = FinanceEngine.plan90(s);
  assert(/dana darurat/i.test(p.months[2].target),
    'P90-2.1: pengguna tanpa utang diarahkan ke dana darurat', { target: p.months[2].target });
  assert(!p.months[2].langkah.some(l => /utang prioritas/i.test(l)),
    'P90-2.2: tidak menyarankan menyerang utang yang tidak ada');
}

{
  const s = baseState({ day: 30 });
  s.meta.plan90Targets = { recurring: 7777777, debtCut: 1111111, emergency: 2222222 };
  const p = FinanceEngine.plan90(s);
  assert(p.targets.recurring === 7777777 && p.targets.debtCut === 1111111,
    'P90-3.1: target yang ditetapkan pengguna menimpa hitungan otomatis', { t: p.targets });
}

// ---------------------------------------------------------------------------
section('7. EXPORT CSV (PRD §42)');
// ---------------------------------------------------------------------------

{
  const s = baseState();
  s.debts.push(debt({ name: 'Pinjol "Cepat"', collateral: 'BPKB',
    negotiations: [{ status: 'CONTACTED', date: H.today(), offer: 'Minta, tenor panjang',
      contactPerson: 'Ibu Rina', channel: 'email', attachment: 'Screenshot' }] }));
  s.incomes.push({ id: 'i', source: 'Desain\nlogo', amount: 500000, date: H.today(), recurring: true });

  const csv = Exporter.buildCSV(s);
  const baris = csv.split('\r\n');

  assert(csv.includes('DAFTAR UTANG') && csv.includes('RIWAYAT NEGOSIASI KREDITUR'),
    'CSV-1.1: seluruh bagian data tercakup');
  assert(csv.includes('Ibu Rina') && csv.includes('email') && csv.includes('Screenshot'),
    'CSV-1.2: field negosiasi baru (narahubung, kanal, bukti) ikut diekspor');
  assert(csv.includes('""Cepat""'),
    'CSV-2.1: tanda kutip di dalam data di-escape ganda sesuai RFC 4180');
  assert(baris.filter(Boolean).every(b => b.startsWith('"')),
    'CSV-2.2: setiap sel dibungkus kutip sehingga koma & baris baru aman');
  assert(csv.includes('Desain\nlogo'),
    'CSV-2.3: baris baru dalam catatan tersimpan di dalam sel, tidak memecah baris');
  assert(/,"5000000"/.test(csv) || csv.includes('"5000000"'),
    'CSV-3.1: nominal ditulis sebagai bilangan bulat polos agar terbaca sebagai angka');
}

// ---------------------------------------------------------------------------
console.log('\n============================================================================');
console.log(`🏁 SUITE FITUR BARU: ${passed}/${total} TESTS PASSED (${failed} failures)`);
console.log('============================================================================');
if (failed > 0) process.exit(1);
console.log('\n✅ Seluruh modul fitur baru terverifikasi.');
