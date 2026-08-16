// ============================================================================
// REBOUND 30 — DATA INTEGRITY & STORAGE RESILIENCE SUITE
// ----------------------------------------------------------------------------
// Data finansial pengguna hanya ada di localStorage perangkatnya sendiri.
// Tidak ada server cadangan. Karena itu tiga hal wajib benar:
//
//   1. MIGRASI  — backup lama / state versi sebelumnya harus tetap terbuka
//                 tanpa merusak riwayat atau membuat aplikasi crash.
//   2. VALIDASI — berkas import yang bukan backup Rebound 30 harus DITOLAK
//                 sebelum menimpa apa pun.
//   3. KEGAGALAN TERLIHAT — jika localStorage penuh, pengguna harus diberi
//                 tahu; kegagalan simpan tidak boleh ditelan diam-diam.
//
// Jalankan:  node tests/data_integrity.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadApp(localStorageImpl) {
  const storage = {};
  const context = {
    window: {}, document: {}, console,
    localStorage: localStorageImpl || {
      getItem: (k) => (k in storage ? storage[k] : null),
      setItem: (k, v) => { storage[k] = String(v); },
      removeItem: (k) => { delete storage[k]; },
      clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
    },
  };
  vm.createContext(context);
  for (const f of ['js/helpers.js', 'js/store.js', 'js/engine.js']) {
    const code = fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
    vm.runInContext(
      code + '\n' +
      'window.H = typeof H !== "undefined" ? H : window.H;\n' +
      'window.Store = typeof Store !== "undefined" ? Store : window.Store;\n' +
      'window.ScoreEngine = typeof ScoreEngine !== "undefined" ? ScoreEngine : window.ScoreEngine;\n' +
      'window.ReboundEngine = typeof ReboundEngine !== "undefined" ? ReboundEngine : window.ReboundEngine;\n' +
      'window.Achievements = typeof Achievements !== "undefined" ? Achievements : window.Achievements;',
      context
    );
  }
  return context.window;
}

let total = 0, passed = 0, failed = 0;
function assert(cond, msg, meta) {
  total++;
  if (cond) { passed++; console.log(`  ✓ [PASS] ${msg}`); }
  else {
    failed++;
    console.error(`  ✗ [FAIL] ${msg}`);
    if (meta) console.error(`          ${JSON.stringify(meta)}`);
  }
}
function section(t) { console.log(`\n----------------------------------------------------------------------------\n${t}\n----------------------------------------------------------------------------`); }

console.log('============================================================================');
console.log('🗄️  REBOUND 30 — DATA INTEGRITY & STORAGE RESILIENCE SUITE');
console.log('============================================================================');

const { H, Store, ScoreEngine } = loadApp();

// ---------------------------------------------------------------------------
section('1. MIGRASI SKEMA — backup versi lama harus tetap terbuka');
// ---------------------------------------------------------------------------

{
  // State v1 asli: tanpa schemaVersion, tanpa beberapa kunci yang kini ada.
  const v1 = {
    meta: { startDate: '2026-08-01', onboardingDone: true },
    profile: { employment: 'freelance', monthlyIncome: 3000000, cash: 500000 },
    expenses: { essential: { food: 1000000 } },
    debts: [{ id: 'd1', name: 'Pinjol A', remaining: 5000000, original: 6000000 }],
    incomes: [{ id: 'i1', amount: 250000, date: '2026-08-05' }],
  };
  const m = Store.migrate(v1);

  assert(m.meta.schemaVersion === Store.SCHEMA_VERSION, 'MIG-1.1: schemaVersion terisi setelah migrasi');
  assert(m.meta.startDate === '2026-08-01', 'MIG-1.2: startDate pengguna TIDAK ditimpa', { hasil: m.meta.startDate });
  assert(Array.isArray(m.opportunities) && m.opportunities.length === 0, 'MIG-1.3: kunci "opportunities" yang hilang diisi dari default');
  assert(Array.isArray(m.assets) && Array.isArray(m.achievements), 'MIG-1.4: "assets" & "achievements" yang hilang diisi dari default');
  assert(m.settings.debtStrategy === 'risk_first', 'MIG-1.5: settings default terisi tanpa menghapus data pengguna');
  assert(m.expenses.essential.housing === 0 && m.expenses.essential.food === 1000000,
    'MIG-1.6: kategori pengeluaran esensial baru diisi 0, nilai lama dipertahankan');
  assert(m.profile.skills.length === 0 && Array.isArray(m.profile.skills), 'MIG-1.7: profile.skills yang hilang menjadi array kosong');
  assert(m.debts[0].payments.length === 0 && m.debts[0].negotiations.length === 0,
    'MIG-1.8: utang lama mendapat array payments/negotiations kosong, bukan undefined');
  assert(m.debts[0].remaining === 5000000, 'MIG-1.9: nominal utang tetap utuh setelah migrasi');
}

{
  // Struktur rusak: tipe data salah di setiap kunci.
  const rusak = {
    meta: { startDate: 'bukan-tanggal' },
    profile: { cash: 'seratus ribu', monthlyIncome: null, skills: 'programming' },
    expenses: 'harusnya objek',
    debts: 'harusnya array',
    incomes: [null, { amount: -5000 }, 'sampah'],
    missions: [],
    achievements: null,
  };
  const m = Store.migrate(rusak);

  assert(/^\d{4}-\d{2}-\d{2}$/.test(m.meta.startDate), 'MIG-2.1: startDate tak sah diganti tanggal hari ini', { hasil: m.meta.startDate });
  assert(m.profile.cash === 0, 'MIG-2.2: cash non-numerik dinormalkan ke 0');
  assert(Array.isArray(m.profile.skills), 'MIG-2.3: skills bertipe string dinormalkan jadi array');
  assert(Array.isArray(m.debts) && m.debts.length === 0, 'MIG-2.4: debts bertipe string dinormalkan jadi array kosong');
  assert(m.incomes.length === 1 && m.incomes[0].amount === 0,
    'MIG-2.5: entri income null/sampah dibuang, nominal negatif dijepit ke 0', { hasil: m.incomes });
  assert(m.missions && typeof m.missions === 'object' && !Array.isArray(m.missions),
    'MIG-2.6: missions bertipe array dinormalkan jadi objek');
  assert(Array.isArray(m.achievements), 'MIG-2.7: achievements null dinormalkan jadi array');
  assert(typeof m.expenses.records === 'object' && Array.isArray(m.expenses.records),
    'MIG-2.8: expenses yang rusak total tetap menghasilkan struktur sah');
}

{
  // startDate di masa depan (jam perangkat pernah salah) tidak boleh
  // membuat currentDay() menghasilkan angka negatif/aneh.
  const m = Store.migrate({ meta: { startDate: '2099-01-01' }, profile: {}, debts: [] });
  assert(m.meta.startDate <= H.today(), 'MIG-3.1: startDate masa depan ditarik ke hari ini', { hasil: m.meta.startDate });
  assert(H.currentDay(m.meta.startDate) === 1, 'MIG-3.2: currentDay tetap 1, bukan angka negatif');
}

// ---------------------------------------------------------------------------
section('2. VALIDASI IMPORT — berkas asing harus ditolak sebelum menimpa data');
// ---------------------------------------------------------------------------

const kasusTolak = [
  ['null', null],
  ['array kosong', []],
  ['string', 'halo'],
  ['objek kosong', {}],
  ['tanpa meta', { profile: {}, debts: [] }],
  ['tanpa profile', { meta: {}, debts: [] }],
  ['tanpa penanda entitas apa pun', { meta: {}, profile: {} }],
  ['debts bertipe objek', { meta: {}, profile: {}, debts: { a: 1 } }],
  ['incomes bertipe string', { meta: {}, profile: {}, debts: [], incomes: 'x' }],
  ['skema lebih baru dari aplikasi', { meta: { schemaVersion: 999 }, profile: {}, debts: [] }],
];
for (const [nama, payload] of kasusTolak) {
  const r = Store.validateImport(payload);
  assert(r.ok === false && typeof r.reason === 'string' && r.reason.length > 0,
    `IMP-1: menolak berkas — ${nama}`, { hasil: r });
}

{
  // Kasus yang dulu LOLOS pemeriksaan lama (`data.meta && data.profile`)
  // padahal jelas bukan backup Rebound 30.
  const penyusup = { meta: { judul: 'Ekspor aplikasi lain' }, profile: { nama: 'Budi' } };
  const lamaLolos = !!(penyusup.meta && penyusup.profile); // logika versi lama
  const r = Store.validateImport(penyusup);
  assert(lamaLolos === true && r.ok === false,
    'IMP-2: berkas yang lolos validasi versi lama kini ditolak', { alasan: r.reason });
}

{
  const sah = Store.defaultState();
  sah.debts.push({ id: 'd', name: 'Utang', remaining: 1000000, original: 1000000 });
  const r = Store.validateImport(JSON.parse(JSON.stringify(sah)));
  assert(r.ok === true, 'IMP-3.1: backup sah diterima');
  assert(r.state && r.state.debts.length === 1, 'IMP-3.2: hasil validasi mengembalikan state yang sudah dimigrasi');
  assert(r.state.meta.schemaVersion === Store.SCHEMA_VERSION, 'IMP-3.3: state hasil import ikut dinaikkan versinya');
}

// ---------------------------------------------------------------------------
section('3. KEGAGALAN SIMPAN — kuota penuh harus terlihat oleh pengguna');
// ---------------------------------------------------------------------------

{
  const penuh = {
    getItem: () => null,
    setItem: () => { const e = new Error('penuh'); e.name = 'QuotaExceededError'; throw e; },
    removeItem: () => {}, clear: () => {},
  };
  const w = loadApp(penuh);
  let pesan = null;
  w.Store.onError = (m) => { pesan = m; };
  const hasil = w.Store.save(w.Store.defaultState());

  assert(hasil === false, 'SAV-1.1: save() mengembalikan false saat gagal (bukan undefined diam-diam)');
  assert(typeof pesan === 'string' && /penuh/i.test(pesan),
    'SAV-1.2: onError dipanggil dengan pesan yang menyebut penyimpanan penuh', { pesan });
  assert(/export/i.test(pesan), 'SAV-1.3: pesan mengarahkan pengguna untuk mencadangkan data lebih dulu', { pesan });
}

{
  const meledak = {
    getItem: () => null,
    setItem: () => { throw new Error('akses ditolak'); },
    removeItem: () => {}, clear: () => {},
  };
  const w = loadApp(meledak);
  let dipanggil = false;
  w.Store.onError = () => { dipanggil = true; };
  assert(w.Store.save({ meta: {} }) === false && dipanggil,
    'SAV-2.1: error penyimpanan non-kuota juga dilaporkan, tidak ditelan');
}

{
  const w = loadApp();
  // Handler yang sendirinya melempar tidak boleh menjatuhkan alur simpan.
  w.Store.onError = () => { throw new Error('handler rusak'); };
  let aman = true;
  const errAsli = console.error;
  console.error = () => {}; // bungkam log yang memang disengaja pada uji ini
  try {
    const rusak = { get toJSON() { throw new Error('serialisasi gagal'); } };
    w.Store.save(rusak);
  } catch { aman = false; } finally { console.error = errAsli; }
  assert(aman, 'SAV-3.1: onError yang melempar tidak merambat keluar dari Store.save');
}

{
  const w = loadApp();
  const st = w.Store.defaultState();
  st.debts.push({ id: 'x', name: 'Utang Uji', remaining: 1234567, original: 2000000 });
  w.Store.save(st);
  const kembali = w.Store.get();
  assert(kembali && kembali.debts.length === 1 && kembali.debts[0].remaining === 1234567,
    'SAV-4.1: simpan lalu baca kembali mempertahankan nominal persis');
  assert(kembali.meta.schemaVersion === w.Store.SCHEMA_VERSION,
    'SAV-4.2: schemaVersion ikut tertulis saat menyimpan');
}

// ---------------------------------------------------------------------------
section('4. NILAI EKSTREM & PRESISI UANG (PRD §54 & §7.6)');
// ---------------------------------------------------------------------------

assert(H.parseRp('Rp 1.500.000') === 1500000, 'UANG-1.1: parseRp membaca format bertitik');
assert(H.parseRp('-50000') === 50000, 'UANG-1.2: nilai negatif dijepit ke positif');
assert(H.parseRp('abc') === 0, 'UANG-1.3: teks non-numerik menjadi 0');
assert(H.parseRp('') === 0 && H.parseRp(null) === 0 && H.parseRp(undefined) === 0, 'UANG-1.4: input kosong/null aman');
assert(H.parseRp('9'.repeat(40)) === H.MAX_MONEY, 'UANG-1.5: nilai ekstrem dijepit ke MAX_MONEY, bukan Infinity');
assert(Number.isFinite(H.parseRp('9'.repeat(40))), 'UANG-1.6: hasil selalu bilangan berhingga');
assert(H.MAX_MONEY < Number.MAX_SAFE_INTEGER, 'UANG-1.7: MAX_MONEY aman untuk dijumlahkan tanpa kehilangan presisi');

assert(H.formatRp(18547300) === 'Rp 18.547.300',
  'UANG-2.1: formatRp menampilkan nominal PENUH, bukan singkatan', { hasil: H.formatRp(18547300) });
assert(H.formatRp(1500000) === 'Rp 1.500.000', 'UANG-2.2: satu setengah juta ditampilkan utuh', { hasil: H.formatRp(1500000) });
assert(H.formatRp(0) === 'Rp 0', 'UANG-2.3: nol ditampilkan sebagai Rp 0');
assert(H.formatRp(-250000) === '-Rp 250.000', 'UANG-2.4: nilai negatif diberi tanda minus di depan', { hasil: H.formatRp(-250000) });
assert(/jt|M/.test(H.formatRpShort(18547300)), 'UANG-2.5: formatRpShort tetap tersedia untuk ruang sempit', { hasil: H.formatRpShort(18547300) });
assert(!/jt|M/.test(H.formatRp(18547300)), 'UANG-2.6: formatRp tidak pernah menyingkat nominal');

// Presisi: total ribuan transaksi tidak boleh melenceng.
{
  let jumlah = 0;
  for (let i = 0; i < 5000; i++) jumlah += H.parseRp(String(123457));
  assert(jumlah === 617285000, 'UANG-3.1: penjumlahan 5.000 transaksi tetap presisi bulat', { jumlah });
}

// ---------------------------------------------------------------------------
section('5. STREAK & KONSISTENSI');
// ---------------------------------------------------------------------------

{
  const st = Store.defaultState();
  const t = H.today();
  st.missions[H.addDays(t, -2)] = [{ id: '1', completed: true }];
  st.missions[H.addDays(t, -1)] = [{ id: '2', completed: true }];
  st.missions[t] = [{ id: '3', completed: true }];
  assert(ScoreEngine.getStreak(st) === 3, 'STRK-1.1: tiga hari berturut-turut = streak 3', { hasil: ScoreEngine.getStreak(st) });
}
{
  const st = Store.defaultState();
  const t = H.today();
  st.missions[H.addDays(t, -3)] = [{ id: '1', completed: true }];
  st.missions[H.addDays(t, -2)] = [{ id: '2', completed: false }]; // hari bolong
  st.missions[H.addDays(t, -1)] = [{ id: '3', completed: true }];
  st.missions[t] = [{ id: '4', completed: true }];
  assert(ScoreEngine.getStreak(st) === 2, 'STRK-1.2: hari bolong memutus streak', { hasil: ScoreEngine.getStreak(st) });
}
{
  const st = Store.defaultState();
  assert(ScoreEngine.getStreak(st) === 0, 'STRK-1.3: state kosong menghasilkan streak 0');
  assert(ScoreEngine.getStreak({}) === 0, 'STRK-1.4: state tanpa properti missions tidak melempar error');
}

// ---------------------------------------------------------------------------
console.log('\n============================================================================');
console.log(`🏁 DATA INTEGRITY SUMMARY: ${passed}/${total} TESTS PASSED (${failed} failures)`);
console.log('============================================================================');
if (failed > 0) process.exit(1);
console.log('\n✅ Lapisan penyimpanan, migrasi, validasi import, dan presisi uang terverifikasi.');
