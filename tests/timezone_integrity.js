// ============================================================================
// REBOUND 30 — TIMEZONE & DATE INTEGRITY REGRESSION SUITE
// ----------------------------------------------------------------------------
// Melindungi perbaikan bug kritis: seluruh kunci tanggal aplikasi harus
// memakai kalender LOKAL pengguna, bukan UTC.
//
// Bug asal:
//   H.today() = new Date().toISOString().split('T')[0]
// Di WIB (UTC+7), pukul 00:00–06:59 waktu setempat masih tanggal KEMARIN
// menurut UTC. Akibatnya "Hari ke-N" meleset, misi harian dianggap milik
// hari kemarin dan diregenerasi ulang, streak putus, dan transaksi
// tercatat mundur satu hari.
//
// Suite ini mensimulasikan jam-jam rawan tersebut untuk seluruh zona waktu
// Indonesia (WIB/WITA/WIT) plus beberapa zona offset negatif sebagai kontrol.
//
// Jalankan:  node tests/timezone_integrity.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const IS_CHILD = process.env.RB_TZ_CHILD === '1';

// Zona uji: tiga zona Indonesia + kontrol offset negatif & offset pecahan.
const ZONES = [
  'Asia/Jakarta',    // WIB  UTC+7  — zona utama pengguna
  'Asia/Makassar',   // WITA UTC+8
  'Asia/Jayapura',   // WIT  UTC+9
  'Pacific/Kiritimati', // UTC+14 — offset positif ekstrem
  'America/Los_Angeles', // UTC-7/-8 — kontrol offset negatif
  'Asia/Kathmandu',  // UTC+5:45 — offset pecahan
];

// Jam-jam rawan dalam waktu LOKAL. Untuk offset positif, jam dini hari
// adalah titik di mana UTC masih di tanggal sebelumnya.
const HOURS = [0, 1, 6, 7, 12, 18, 23];

// ---------------------------------------------------------------------------
// Pemuat skrip aplikasi ke sandbox
// ---------------------------------------------------------------------------
const RealDate = Date;

function loadApp() {
  const storage = {};

  // Jam yang bisa dibekukan. Mock HARUS dipasang sebagai properti context
  // agar ikut menjadi global di dalam sandbox — mengganti `global.Date` di
  // proses induk tidak berpengaruh, karena vm context punya built-in sendiri.
  const clock = { now: null }; // null = pakai waktu nyata

  class MockDate extends RealDate {
    constructor(...args) {
      if (args.length === 0) super(clock.now !== null ? clock.now : RealDate.now());
      else super(...args);
    }
    static now() { return clock.now !== null ? clock.now : RealDate.now(); }
  }

  const context = {
    window: {}, document: {},
    localStorage: {
      getItem: (k) => (k in storage ? storage[k] : null),
      setItem: (k, v) => { storage[k] = String(v); },
      removeItem: (k) => { delete storage[k]; },
      clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
    },
    console,
    Date: MockDate,
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
  return Object.assign({ clock }, context.window);
}

// ---------------------------------------------------------------------------
// Harness
// ---------------------------------------------------------------------------
let total = 0, passed = 0, failed = 0;
const failures = [];

function assert(cond, msg, meta) {
  total++;
  if (cond) { passed++; }
  else {
    failed++;
    failures.push(msg + (meta ? ` | ${JSON.stringify(meta)}` : ''));
    console.error(`  ✗ [FAIL] ${msg}`);
    if (meta) console.error(`          ${JSON.stringify(meta)}`);
  }
}

/** Waktu dinding lokal yang diharapkan, dihitung tanpa memakai kode aplikasi. */
function expectedLocalKey(d) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(d);
  const get = (t) => parts.find(p => p.type === t).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

// ---------------------------------------------------------------------------
// Pengujian untuk SATU zona waktu (dijalankan di proses anak dengan TZ diset)
// ---------------------------------------------------------------------------
function runForCurrentZone() {
  const tz = process.env.TZ;
  const { H, Store, ScoreEngine, ReboundEngine, clock } = loadApp();

  console.log(`\n  Zona: ${tz}`);

  /** Bekukan jam aplikasi pada waktu LOKAL tertentu. */
  function freezeLocal(y, mo, d, hh, mm = 0) {
    const fixed = new RealDate(y, mo - 1, d, hh, mm, 0, 0);
    clock.now = fixed.getTime();
    return fixed;
  }
  function unfreeze() { clock.now = null; }

  // --- TZ-1: H.today() selalu sama dengan kalender lokal -------------------
  for (const hh of HOURS) {
    const fixed = freezeLocal(2026, 8, 16, hh);
    const expected = expectedLocalKey(fixed);
    const actual = H.today();
    unfreeze();
    assert(actual === expected,
      `TZ-1 [${tz} ${String(hh).padStart(2, '0')}:00] H.today() mengikuti kalender lokal`,
      { expected, actual });
  }

  // --- TZ-2: pergantian tengah malam menaikkan hari tepat satu ------------
  {
    freezeLocal(2026, 8, 16, 23, 59);
    const before = H.today();
    unfreeze();
    freezeLocal(2026, 8, 17, 0, 1);
    const after = H.today();
    unfreeze();
    assert(H.daysBetween(before, after) === 1,
      `TZ-2 [${tz}] 23:59 -> 00:01 bergeser tepat 1 hari`,
      { before, after, diff: H.daysBetween(before, after) });
  }

  // --- TZ-3: "Hari ke-N" stabil sepanjang hari ----------------------------
  // Pengguna yang memulai program tanggal 1 harus melihat "Hari 16" pada
  // tanggal 16, baik dibuka pukul 01:00 dini hari maupun 22:00 malam.
  {
    const seen = new Set();
    for (const hh of HOURS) {
      freezeLocal(2026, 8, 16, hh);
      seen.add(H.currentDay('2026-08-01'));
      unfreeze();
    }
    assert(seen.size === 1 && seen.has(16),
      `TZ-3 [${tz}] currentDay() konsisten sepanjang 24 jam`,
      { nilaiTerlihat: [...seen] });
  }

  // --- TZ-4: misi harian tidak diregenerasi di jam dini hari --------------
  // Regresi langsung dari bug asal: pukul 01:00 WIB, H.today() lama
  // mengembalikan tanggal kemarin sehingga ReboundEngine menganggap misi
  // hari ini belum ada dan menimpanya.
  {
    freezeLocal(2026, 8, 16, 21);
    const state = Store.defaultState();
    state.meta.startDate = '2026-08-10';
    state.profile.employment = 'tidak_bekerja';
    state.profile.goal = 'pemasukan_pertama';
    const malam = ReboundEngine.generate(state);
    const idMalam = malam.map(m => m.id).join(',');
    unfreeze();

    freezeLocal(2026, 8, 16, 1); // dini hari, TANGGAL SAMA
    const dini = ReboundEngine.generate(state);
    const idDini = dini.map(m => m.id).join(',');
    const kunci = Object.keys(state.missions);
    unfreeze();

    assert(idMalam === idDini,
      `TZ-4 [${tz}] misi tidak diregenerasi saat dibuka dini hari di tanggal yang sama`,
      { jumlahKunciTanggal: kunci.length, kunci });
    assert(kunci.length === 1,
      `TZ-4b [${tz}] hanya satu kunci tanggal terbentuk untuk satu hari kalender`,
      { kunci });
  }

  // --- TZ-5: streak menghitung hari ini saat misi sudah selesai -----------
  {
    freezeLocal(2026, 8, 16, 9);
    const state = Store.defaultState();
    state.missions = {
      '2026-08-14': [{ id: 'a', completed: true }],
      '2026-08-15': [{ id: 'b', completed: true }],
      '2026-08-16': [{ id: 'c', completed: true }],
    };
    const streak = ScoreEngine.getStreak(state);
    unfreeze();
    assert(streak === 3,
      `TZ-5 [${tz}] streak menghitung hari ini yang misinya sudah selesai`,
      { streak, diharapkan: 3 });
  }

  // --- TZ-6: hari ini yang belum dikerjakan tidak memutus streak ----------
  {
    freezeLocal(2026, 8, 16, 9);
    const state = Store.defaultState();
    state.missions = {
      '2026-08-14': [{ id: 'a', completed: true }],
      '2026-08-15': [{ id: 'b', completed: true }],
      '2026-08-16': [{ id: 'c', completed: false }], // hari masih berjalan
    };
    const streak = ScoreEngine.getStreak(state);
    unfreeze();
    assert(streak === 2,
      `TZ-6 [${tz}] hari berjalan yang belum selesai tidak memutus streak`,
      { streak, diharapkan: 2 });
  }

  // --- TZ-7: addDays konsisten melewati batas bulan & tahun --------------
  {
    assert(H.addDays('2026-08-31', 1) === '2026-09-01', `TZ-7a [${tz}] addDays melewati akhir bulan`);
    assert(H.addDays('2026-01-01', -1) === '2025-12-31', `TZ-7b [${tz}] addDays mundur melewati tahun`);
    assert(H.addDays('2028-02-28', 1) === '2028-02-29', `TZ-7c [${tz}] addDays menghormati tahun kabisat`);
    assert(H.daysBetween('2026-08-01', '2026-08-31') === 30, `TZ-7d [${tz}] daysBetween sepanjang bulan`);
  }

  // --- TZ-8: startDate default memakai tanggal lokal ----------------------
  {
    for (const hh of [0, 1, 6]) {
      const fixed = freezeLocal(2026, 8, 16, hh);
      const expected = expectedLocalKey(fixed);
      const st = Store.defaultState();
      unfreeze();
      assert(st.meta.startDate === expected,
        `TZ-8 [${tz} ${String(hh).padStart(2, '0')}:00] startDate default = tanggal lokal`,
        { expected, actual: st.meta.startDate });
    }
  }

  // --- TZ-9: isThisMonth tidak ikut menghitung bulan berikutnya -----------
  {
    freezeLocal(2026, 8, 16, 10);
    const dalam = H.isThisMonth('2026-08-01') && H.isThisMonth('2026-08-31');
    const luar = H.isThisMonth('2026-09-01') || H.isThisMonth('2026-07-31');
    unfreeze();
    assert(dalam && !luar,
      `TZ-9 [${tz}] isThisMonth dibatasi pada bulan berjalan saja`,
      { dalam, luar });
  }

  // --- TZ-10: formatDate tidak menggeser tanggal --------------------------
  {
    const d = H.fromKey('2026-08-16');
    assert(H.toKey(d) === '2026-08-16',
      `TZ-10 [${tz}] fromKey -> toKey pulang-pergi tanpa pergeseran`,
      { hasil: H.toKey(d) });
  }

  return { total, passed, failed, failures };
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------
if (IS_CHILD) {
  const r = runForCurrentZone();
  console.log(`__RESULT__${JSON.stringify({ total: r.total, passed: r.passed, failed: r.failed, failures: r.failures })}`);
  process.exit(r.failed > 0 ? 1 : 0);
}

console.log('============================================================================');
console.log('🕐 REBOUND 30 — TIMEZONE & DATE INTEGRITY REGRESSION SUITE');
console.log('============================================================================');
console.log('Memverifikasi bahwa seluruh kunci tanggal memakai kalender LOKAL, bukan UTC.');

let grand = { total: 0, passed: 0, failed: 0 };
const allFailures = [];

for (const tz of ZONES) {
  let out = '';
  let ok = true;
  try {
    out = execFileSync(process.execPath, [__filename], {
      env: { ...process.env, TZ: tz, RB_TZ_CHILD: '1' },
      encoding: 'utf8',
    });
  } catch (e) {
    ok = false;
    out = (e.stdout || '') + (e.stderr || '');
  }

  const line = out.split('\n').find(l => l.startsWith('__RESULT__'));
  const body = out.split('\n').filter(l => !l.startsWith('__RESULT__')).join('\n').trim();
  if (body) console.log(body);

  if (line) {
    const r = JSON.parse(line.slice('__RESULT__'.length));
    grand.total += r.total; grand.passed += r.passed; grand.failed += r.failed;
    r.failures.forEach(f => allFailures.push(`[${tz}] ${f}`));
    console.log(`  → ${r.passed}/${r.total} lolos`);
  } else {
    grand.failed++; grand.total++;
    allFailures.push(`[${tz}] proses uji gagal dijalankan`);
    console.error(`  ✗ [${tz}] proses uji gagal dijalankan`);
  }
  if (!ok && !line) console.error(out);
}

console.log('\n============================================================================');
console.log(`🏁 TIMEZONE INTEGRITY: ${grand.passed}/${grand.total} TESTS PASSED (${grand.failed} failures)`);
console.log('============================================================================');
if (grand.failed > 0) {
  console.error('\nKegagalan:');
  allFailures.forEach(f => console.error('  • ' + f));
  process.exit(1);
}
console.log('\n✅ Seluruh operasi tanggal aman terhadap zona waktu di WIB, WITA, dan WIT.');
