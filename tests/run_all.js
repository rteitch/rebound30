// ============================================================================
// REBOUND 30 — TEST RUNNER TERPADU
// ----------------------------------------------------------------------------
// Menjalankan seluruh suite pengujian secara berurutan dan mengembalikan
// exit code non-nol bila ada satu saja yang gagal (cocok untuk CI).
//
// Jalankan:  node tests/run_all.js
// ============================================================================

const { execFileSync } = require('child_process');
const path = require('path');

const SUITES = [
  ['audit_all_buttons.js',     'Audit tombol & callback antarmuka'],
  ['istqb_test_suite.js',      'ISTQB formal (EP, BVA, STT, Integrasi)'],
  ['test_simulation_30days.js','Simulasi siklus Hari 1–30'],
  ['data_integrity.js',        'Migrasi skema, validasi import, presisi uang'],
  ['timezone_integrity.js',    'Integritas tanggal lintas zona waktu'],
  ['features_test.js',         'Fitur baru: prioritas utang, DTI, pengingat, laporan'],
  ['search_test.js',           'Pencarian Kisah: fokus input, cakupan, padanan kata'],
  ['layout_test.js',           'Tata letak: target sentuh, grid, dropdown, label'],
  ['deep_gap_audit.js',        'Matriks keputusan — audit gap menyeluruh'],
];

console.log('############################################################################');
console.log('#  REBOUND 30 — MENJALANKAN SELURUH SUITE PENGUJIAN');
console.log('############################################################################\n');

const hasil = [];
let adaGagal = false;

for (const [berkas, keterangan] of SUITES) {
  process.stdout.write(`▶ ${berkas.padEnd(28)} ${keterangan}\n`);
  let out = '', ok = true;
  const mulai = Date.now();
  try {
    out = execFileSync(process.execPath, [path.join(__dirname, berkas)], { encoding: 'utf8' });
  } catch (e) {
    ok = false;
    adaGagal = true;
    out = (e.stdout || '') + (e.stderr || '');
  }
  const durasi = Date.now() - mulai;

  // Ambil baris ringkasan dari masing-masing suite.
  const ringkas = out.split('\n').find(l => /PASSED|VALID|GAP|PELANGGARAN/.test(l) && /🏁|🎉|Result/.test(l))
    || out.split('\n').filter(Boolean).slice(-1)[0] || '';

  hasil.push({ berkas, ok, ringkas: ringkas.trim(), durasi });
  console.log(`  ${ok ? '✅' : '❌'} ${ringkas.trim()}  (${durasi} ms)\n`);
  if (!ok) console.log(out.split('\n').filter(l => /✗|FAIL/.test(l)).slice(0, 15).join('\n') + '\n');
}

console.log('############################################################################');
console.log('#  RINGKASAN');
console.log('############################################################################');
for (const h of hasil) {
  console.log(`  ${h.ok ? '✅ LULUS' : '❌ GAGAL'}  ${h.berkas.padEnd(28)} ${h.durasi} ms`);
}
console.log('############################################################################');

if (adaGagal) {
  console.error('\n❌ Ada suite yang gagal. Perbaiki sebelum melakukan deploy.');
  process.exit(1);
}
console.log('\n✅ Seluruh suite pengujian lulus.');
