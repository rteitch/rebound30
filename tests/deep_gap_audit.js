// ============================================================================
// REBOUND 30 — DEEP DECISION-MATRIX GAP AUDIT
// ----------------------------------------------------------------------------
// ReboundEngine memilih misi harian dari kombinasi beberapa variabel bebas:
// status pekerjaan, target 30 hari, keahlian, fase/hari berjalan, dan kondisi
// keuangan. Audit ini menyapu SELURUH kombinasi tersebut dan memastikan tidak
// ada satu pun profil pengguna yang berakhir tanpa arahan ("gap").
//
// Yang diperiksa pada setiap permutasi:
//   G1  Selalu ada minimal satu misi — tidak ada pengguna yang dibiarkan buntu.
//   G2  Jumlah misi 1–5 sesuai PRD §14 (3–5 ideal, maksimum 5).
//   G3  Tidak ada tipe misi ganda dalam satu hari.
//   G4  Setiap misi punya template lengkap: judul, deskripsi, alasan, langkah.
//   G5  Prioritas selalu salah satu dari CRITICAL/HIGH/MEDIUM/LOW.
//   G6  Daftar misi terurut menaik menurut prioritas.
//   G7  Runway kas < 7 hari SELALU memunculkan misi berprioritas CRITICAL.
//   G8  Deskripsi dipersonalisasi saat pengguna mengisi keahlian.
//   G9  Engine bersifat deterministik untuk hari yang sama (idempoten).
//   G10 Aset "alat kerja" tidak pernah didorong untuk dijual (PRD §22, §54).
//   G11 Misi jangkar fase tidak pernah hilang karena pemangkasan 5 misi.
//       (Regresi: DEBT_PAYMENT dulu selalu terpangkas di Fase 4 justru bagi
//        pengguna menganggur berutang — persis orang yang paling butuh.)
//
// Jalankan:  node tests/deep_gap_audit.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadApp() {
  const storage = {};
  const context = {
    window: {}, document: {}, console,
    localStorage: {
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
      'window.ReboundEngine = typeof ReboundEngine !== "undefined" ? ReboundEngine : window.ReboundEngine;\n' +
      'window.ScoreEngine = typeof ScoreEngine !== "undefined" ? ScoreEngine : window.ScoreEngine;',
      context
    );
  }
  return context.window;
}

const { H, Store, ReboundEngine } = loadApp();

// ---------------------------------------------------------------------------
// Dimensi matriks keputusan
// ---------------------------------------------------------------------------
const EMPLOYMENT = [null, 'tidak_bekerja', 'baru_phk', 'freelance', 'pekerja_harian', 'usaha_kecil', 'bekerja_kurang', 'lainnya'];
const GOALS = [null, 'pemasukan_pertama', 'dapat_kerja', 'kurangi_utang', 'pemasukan_rutin', 'bantu_keluarga'];
const SKILLS = [[], ['design'], ['programming', 'cooking']];
const DAYS = [1, 5, 15, 22, 30];               // satu hari perwakilan tiap fase + akhir program
const KONDISI = [
  {
    nama: 'krisis (tanpa kas, tanpa pemasukan, utang jatuh tempo)',
    cash: 0, monthlyIncome: 0, essential: 1500000, adaUtang: true, jatuhTempoDekat: true, adaRecurring: false,
  },
  {
    nama: 'stabil (kas aman, pemasukan rutin, tanpa utang)',
    cash: 9000000, monthlyIncome: 5000000, essential: 1500000, adaUtang: false, jatuhTempoDekat: false, adaRecurring: true,
  },
];

const PRIORITAS_SAH = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
const urutan = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

function buatState(emp, goal, skills, day, kondisi) {
  const s = Store.defaultState();
  s.meta.startDate = H.addDays(H.today(), -(day - 1));
  s.meta.onboardingDone = true;

  s.profile.employment = emp;
  s.profile.goal = goal;
  s.profile.skills = skills.slice();
  s.profile.cash = kondisi.cash;
  s.profile.monthlyIncome = kondisi.monthlyIncome;

  s.expenses.essential.food = kondisi.essential;

  if (kondisi.adaUtang) {
    s.debts.push({
      id: 'd1', name: 'Pinjaman Online', creditor: 'AdaModal',
      original: 8000000, remaining: 6500000, interestMonthly: 3,
      dueDate: kondisi.jatuhTempoDekat ? H.addDays(H.today(), 3) : H.addDays(H.today(), 60),
      minPayment: 800000, collateral: '', riskLevel: 'HIGH',
      payments: [], negotiations: [], notes: '',
    });
  }
  if (kondisi.adaRecurring) {
    s.incomes.push({ id: 'i1', source: 'Klien retainer', category: 'freelance', amount: 2000000, date: H.today(), recurring: true, notes: '' });
  }

  // Aset alat kerja — tidak boleh direkomendasikan dijual (PRD §22).
  s.assets.push({ id: 'a1', name: 'Laptop kerja', category: 'electronics', value: 7000000, liquidatable: false, keepForWork: true, notes: '' });

  s.opportunities.push({ id: 'o1', title: 'Lamaran admin', company: 'PT Uji', type: 'job', status: 'APPLIED', expectedIncome: 3000000, dateApplied: H.today(), followUpDate: '', notes: '' });

  return s;
}

// ---------------------------------------------------------------------------
console.log('============================================================================');
console.log('🧭 REBOUND 30 — DEEP DECISION-MATRIX GAP AUDIT');
console.log('============================================================================');
console.log(`Dimensi: Pekerjaan(${EMPLOYMENT.length}) × Target(${GOALS.length}) × Keahlian(${SKILLS.length}) × Hari(${DAYS.length}) × Kondisi(${KONDISI.length})`);

const totalPermutasi = EMPLOYMENT.length * GOALS.length * SKILLS.length * DAYS.length * KONDISI.length;
console.log(`Total permutasi diaudit: ${totalPermutasi}\n`);

const pelanggaran = { G1: [], G2: [], G3: [], G4: [], G5: [], G6: [], G7: [], G8: [], G9: [], G10: [], G11: [] };
const sebaranJumlah = {};
const tipeTerpakai = new Set();
let diperiksa = 0;

for (const emp of EMPLOYMENT) {
  for (const goal of GOALS) {
    for (const skills of SKILLS) {
      for (const day of DAYS) {
        for (const kondisi of KONDISI) {
          diperiksa++;
          const label = `emp=${emp} goal=${goal} skills=[${skills}] hari=${day} kondisi=${kondisi.nama.split(' ')[0]}`;

          const state = buatState(emp, goal, skills, day, kondisi);
          const misi = ReboundEngine.generate(state);

          // G1 — tidak ada permutasi tanpa arahan
          if (!Array.isArray(misi) || misi.length === 0) { pelanggaran.G1.push(label); continue; }

          // G2 — jumlah dalam batas PRD
          sebaranJumlah[misi.length] = (sebaranJumlah[misi.length] || 0) + 1;
          if (misi.length < 1 || misi.length > 5) pelanggaran.G2.push(`${label} -> ${misi.length} misi`);

          // G3 — tanpa duplikasi tipe
          const tipe = misi.map(m => m.type);
          if (new Set(tipe).size !== tipe.length) pelanggaran.G3.push(`${label} -> ${tipe.join(',')}`);
          tipe.forEach(t => tipeTerpakai.add(t));

          // G4 — template lengkap
          for (const m of misi) {
            const t = ReboundEngine.MISSION_TEMPLATES[m.type];
            const lengkap = t && t.title && t.desc && t.why && Array.isArray(t.steps) && t.steps.length > 0
              && m.title && m.desc && m.id && m.date;
            if (!lengkap) pelanggaran.G4.push(`${label} -> ${m.type}`);
            if (!PRIORITAS_SAH.includes(m.priority)) pelanggaran.G5.push(`${label} -> ${m.type}:${m.priority}`);
          }

          // G6 — terurut menurut prioritas
          for (let i = 1; i < misi.length; i++) {
            if (urutan[misi[i - 1].priority] > urutan[misi[i].priority]) {
              pelanggaran.G6.push(`${label} -> ${misi.map(m => m.priority).join('>')}`);
              break;
            }
          }

          // G7 — runway kritis wajib memunculkan misi CRITICAL
          const runway = kondisi.essential > 0 ? (kondisi.cash / kondisi.essential) * 30 : 999;
          if (runway < 7 && !misi.some(m => m.priority === 'CRITICAL')) {
            pelanggaran.G7.push(`${label} -> runway=${runway.toFixed(1)} hari tanpa misi CRITICAL`);
          }

          // G8 — personalisasi keahlian
          if (skills.length > 0) {
            const outreach = misi.find(m => m.type === 'CLIENT_OUTREACH');
            const bawaan = ReboundEngine.MISSION_TEMPLATES.CLIENT_OUTREACH.desc;
            if (outreach && outreach.desc === bawaan) {
              pelanggaran.G8.push(`${label} -> deskripsi outreach tidak dipersonalisasi`);
            }
          }

          // G9 — idempoten pada hari yang sama
          const ulang = ReboundEngine.generate(state);
          if (ulang.map(m => m.id).join(',') !== misi.map(m => m.id).join(',')) {
            pelanggaran.G9.push(label);
          }

          // G10 — alat kerja tidak pernah didorong dijual
          const jualAset = misi.find(m => m.type === 'SELL_ASSET');
          if (jualAset) {
            const bisaDijual = state.assets.filter(a => !a.keepForWork);
            if (bisaDijual.length === 0 && /laptop kerja/i.test(jualAset.desc || '')) {
              pelanggaran.G10.push(`${label} -> menyarankan menjual alat kerja`);
            }
          }

          // G11 — misi jangkar fase bertahan dari pemangkasan.
          // Hanya diuji pada kondisi yang PASTI membangkitkan misi jangkar
          // menurut aturan engine; jangkar tidak boleh memaksa misi muncul
          // pada profil yang memang tidak membutuhkannya (mis. pengguna
          // stabil berpemasukan rutin tidak perlu outreach harian).
          const fase = H.getPhase(day);

          // Fase 4 + punya utang => DEBT_PAYMENT pasti dibangkitkan.
          if (fase.id >= 3 && kondisi.adaUtang && !tipe.includes('DEBT_PAYMENT')) {
            pelanggaran.G11.push(`${label} -> Fase ${fase.name} tanpa DEBT_PAYMENT | daftar: ${tipe.join(',')}`);
          }

          // Pemasukan nol => CLIENT_OUTREACH pasti dibangkitkan.
          if (kondisi.monthlyIncome === 0 && !kondisi.adaRecurring && !tipe.includes('CLIENT_OUTREACH')) {
            pelanggaran.G11.push(`${label} -> pemasukan nol tanpa CLIENT_OUTREACH | daftar: ${tipe.join(',')}`);
          }

          // Fase 1 (hari 1–4) + data finansial belum lengkap => MAP_FINANCES.
          if (fase.id === 0 && !kondisi.adaUtang && !tipe.includes('MAP_FINANCES')) {
            pelanggaran.G11.push(`${label} -> Fase ${fase.name} tanpa MAP_FINANCES | daftar: ${tipe.join(',')}`);
          }
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
const KETERANGAN = {
  G1: 'Permutasi tanpa misi sama sekali (GAP arahan)',
  G2: 'Jumlah misi di luar batas 1–5 (PRD §14)',
  G3: 'Tipe misi terduplikasi dalam satu hari',
  G4: 'Misi tanpa template lengkap (judul/desc/why/steps)',
  G5: 'Prioritas tidak sah',
  G6: 'Urutan prioritas tidak menaik',
  G7: 'Runway < 7 hari tanpa misi CRITICAL',
  G8: 'Keahlian terisi tetapi deskripsi tidak dipersonalisasi',
  G9: 'Engine tidak idempoten pada hari yang sama',
  G10: 'Menyarankan menjual aset alat kerja',
  G11: 'Misi jangkar fase hilang akibat pemangkasan 5 misi',
};

let totalPelanggaran = 0;
console.log('----------------------------------------------------------------------------');
console.log('HASIL AUDIT');
console.log('----------------------------------------------------------------------------');
for (const [kode, daftar] of Object.entries(pelanggaran)) {
  totalPelanggaran += daftar.length;
  const status = daftar.length === 0 ? '✓ LULUS' : `✗ ${daftar.length} PELANGGARAN`;
  console.log(`  ${status.padEnd(20)} ${kode}: ${KETERANGAN[kode]}`);
  daftar.slice(0, 5).forEach(d => console.log(`        • ${d}`));
  if (daftar.length > 5) console.log(`        • ... dan ${daftar.length - 5} lainnya`);
}

console.log('\n----------------------------------------------------------------------------');
console.log('CAKUPAN');
console.log('----------------------------------------------------------------------------');
console.log(`  Permutasi diperiksa : ${diperiksa} / ${totalPermutasi}`);
console.log(`  Sebaran jumlah misi : ${Object.entries(sebaranJumlah).sort().map(([k, v]) => `${k} misi ×${v}`).join(' | ')}`);
console.log(`  Tipe misi terpakai  : ${tipeTerpakai.size} / ${Object.keys(ReboundEngine.MISSION_TEMPLATES).length}`);

const tidakTerpakai = Object.keys(ReboundEngine.MISSION_TEMPLATES).filter(t => !tipeTerpakai.has(t));
if (tidakTerpakai.length > 0) {
  console.log(`  ⚠ Template tak pernah terpicu: ${tidakTerpakai.join(', ')}`);
}

console.log('\n============================================================================');
if (totalPelanggaran === 0) {
  console.log(`🏁 DEEP GAP AUDIT: ${diperiksa} PERMUTASI — 0 GAP (100% TERCAKUP)`);
  console.log('============================================================================');
  console.log('\n✅ Setiap kombinasi profil pengguna menerima arahan harian yang sah.');
} else {
  console.log(`🏁 DEEP GAP AUDIT: ${totalPelanggaran} PELANGGARAN pada ${diperiksa} permutasi`);
  console.log('============================================================================');
  process.exit(1);
}
