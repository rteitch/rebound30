// ============================================================================
// REBOUND 30 — SUITE TATA LETAK & TARGET SENTUH
// ----------------------------------------------------------------------------
// Menjaga aturan tata letak yang mudah dilanggar kembali tanpa disadari.
// Suite ini memeriksa STYLESHEET, bukan render browser, sehingga bisa
// dijalankan di CI tanpa memasang peramban.
//
// Aturan yang dijaga (semuanya berasal dari bug nyata yang pernah terjadi):
//
//   L1  Media query target sentuh 44px harus ada DAN diletakkan setelah
//       nilai dasarnya. Bila urutannya terbalik, aturan dasar yang muncul
//       belakangan mengalahkan blok sentuh karena kekhususannya sama —
//       persis kesalahan yang membuat tombol tetap 38px di ponsel.
//
//   L2  `.stats-grid` tidak boleh dipaksa 5 kolom dengan !important.
//       !important mengalahkan style inline, sehingga layar Pengeluaran
//       dan Aset yang sengaja memakai dua kartu ikut diperas jadi 5 kolom
//       dan nominalnya terpotong di desktop.
//
//   L3  Dropdown tidak boleh dikunci `width:auto` di markup; label opsi
//       berbahasa Indonesia panjang dan mudah terpotong.
//
//   L4  Kategori tidak boleh ditampilkan sebagai kunci internal mentah.
//
// Jalankan:  node tests/layout_test.js
// ============================================================================

const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '..', 'css/styles.css'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, '..', 'js/app.js'), 'utf8');
const helpersJs = fs.readFileSync(path.join(__dirname, '..', 'js/helpers.js'), 'utf8');

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

console.log('============================================================================');
console.log('📐 REBOUND 30 — SUITE TATA LETAK & TARGET SENTUH');
console.log('============================================================================');

// ---------------------------------------------------------------------------
section('L1. TARGET SENTUH 44px & URUTAN CASCADE');
// ---------------------------------------------------------------------------

const blokSentuh = '@media (max-width: 900px), (pointer: coarse)';
assert(css.indexOf(blokSentuh) !== -1,
  'L1.1: blok media query perangkat sentuh tersedia');

const posBlokSentuh = css.indexOf(blokSentuh);
const posDasarBtnSm = css.lastIndexOf('.btn-sm { min-height: 38px; }');
assert(posDasarBtnSm !== -1, 'L1.2: nilai dasar .btn-sm ditetapkan eksplisit');
assert(posDasarBtnSm < posBlokSentuh,
  'L1.3: nilai dasar ditulis SEBELUM blok sentuh (urutan cascade benar)',
  { posDasar: posDasarBtnSm, posSentuh: posBlokSentuh });

// Tidak boleh ada penetapan .btn-sm min-height setelah blok sentuh yang
// akan menimpanya kembali.
const setelahSentuh = css.slice(posBlokSentuh);
const timpaUlang = /\.btn-sm\s*\{[^}]*min-height:\s*3\d px?/.test(setelahSentuh.replace(/\s+/g, ' '));
assert(!timpaUlang,
  'L1.4: tidak ada aturan .btn-sm di bawah 44px setelah blok sentuh');

const isiBlokSentuh = css.slice(posBlokSentuh, posBlokSentuh + 1800);
for (const [sel, minimal] of [['.btn-sm', 44], ['.btn ', 46], ['.notif-dismiss', 44],
                              ['.story-category-chip', 44], ['.bookmark-btn', 44]]) {
  const re = new RegExp(sel.trim().replace('.', '\\.') + '[^}]*?(min-height|height|width):\\s*(\\d+)px');
  const m = isiBlokSentuh.match(re);
  assert(m && Number(m[2]) >= minimal,
    `L1.5: ${sel.trim()} minimal ${minimal}px pada perangkat sentuh`,
    { ditemukan: m ? m[2] + 'px' : 'tidak ada' });
}

assert(/\.form-input[^}]*min-height:\s*4\d px?/.test(isiBlokSentuh.replace(/\s+/g,' ')) ||
       isiBlokSentuh.indexOf('min-height: 46px') !== -1,
  'L1.6: kolom isian form dinaikkan agar nyaman disentuh');

// ---------------------------------------------------------------------------
section('L2. GRID STATISTIK — TIDAK MEMAKSA 5 KOLOM');
// ---------------------------------------------------------------------------

const paksa5 = /\.stats-grid\s*\{[^}]*grid-template-columns:\s*repeat\(5[^}]*!important/;
assert(!paksa5.test(css.replace(/\s+/g, ' ')),
  'L2.1: tidak ada aturan !important yang memaksa .stats-grid jadi 5 kolom');

const paksa3 = /\.stats-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3[^}]*!important/;
assert(!paksa3.test(css.replace(/\s+/g, ' ')),
  'L2.2: tidak ada aturan !important yang memaksa .stats-grid jadi 3 kolom');

// Runtuh ke satu kolom di layar sempit tetap harus ada.
assert(/max-width:\s*480px[\s\S]{0,220}\.stats-grid[\s\S]{0,120}1fr\s*!important/.test(css),
  'L2.3: .stats-grid tetap runtuh jadi satu kolom di layar sangat sempit');

// Layar dua-kartu masih mendeklarasikan templatenya sendiri.
const duaKolom = (html.match(/grid-template-columns:repeat\(2,1fr\)/g) || []).length;
assert(duaKolom >= 2,
  'L2.4: layar Pengeluaran & Aset tetap menetapkan grid dua kolomnya sendiri',
  { ditemukan: duaKolom });

// ---------------------------------------------------------------------------
section('L3. DROPDOWN — LEBAR & LABEL');
// ---------------------------------------------------------------------------

assert(html.indexOf('id="debt-strategy-select" style="width:auto') === -1,
  'L3.1: pemilih strategi utang tidak lagi dikunci width:auto');
assert(html.indexOf('width:auto;padding:8px 28px 8px 12px;" onchange="App.settings.setBackupDays') === -1,
  'L3.2: pemilih hari pengingat backup tidak lagi dikunci width:auto');

assert(/\.form-select,\s*select\.form-input\s*\{[^}]*width:\s*100%/.test(css.replace(/\s+/g,' ')),
  'L3.3: dropdown melebar mengikuti wadahnya secara baku');
assert(/\.form-select,\s*select\.form-input\s*\{[^}]*text-overflow:\s*ellipsis/.test(css.replace(/\s+/g,' ')),
  'L3.4: teks dropdown yang tetap kepanjangan dipotong secara rapi');

// Label opsi tidak boleh terlalu panjang untuk layar sempit.
// Sebagian dropdown dibuat di dalam modal JavaScript, jadi markup HTML
// saja tidak cukup — berkas skrip ikut dipindai.
const screensJs = fs.readFileSync(path.join(__dirname, '..', 'js/screens.js'), 'utf8');
const sumberOpsi = html + appJs + screensJs;
const opsi = [...sumberOpsi.matchAll(/<option[^>]*>([^<$]+)<\/option>/g)]
  .map(m => m[1].trim())
  .filter(t => t && t.indexOf('${') === -1);

const terlaluPanjang = [...new Set(opsi.filter(o => o.length > 42))];
assert(terlaluPanjang.length === 0,
  'L3.5: tidak ada label opsi melebihi 42 karakter (mudah terpotong di ponsel)',
  { terlaluPanjang });

assert(opsi.length > 40,
  'L3.6: opsi dari HTML maupun modal JavaScript ikut diperiksa',
  { jumlah: opsi.length });

// ---------------------------------------------------------------------------
section('L4. LABEL KATEGORI TIDAK BOCOR KE ANTARMUKA');
// ---------------------------------------------------------------------------

assert(helpersJs.indexOf('CATEGORY_LABELS') !== -1 && helpersJs.indexOf('catLabel(') !== -1,
  'L4.1: tersedia peta label kategori berbahasa Indonesia');

for (const mentah of ['${i.category}', '${e.category}', '${a.category}', '${o.type}']) {
  assert(appJs.indexOf(mentah) === -1,
    `L4.2: kunci mentah ${mentah} tidak lagi dirender langsung`);
}

// Kunci yang paling terlihat asing bila bocor.
const H = require('../js/helpers.js') && null; // helpers.js mengekspor H via module
for (const k of ['eating_out', 'asset_sale', 'debt_interest', 'part_time']) {
  assert(helpersJs.indexOf(k + ':') !== -1,
    `L4.3: kunci "${k}" punya label bahasa Indonesia`);
}

// ---------------------------------------------------------------------------
section('L5. GULIR & GERAK');
// ---------------------------------------------------------------------------

assert(appJs.indexOf("behavior: 'instant'") !== -1,
  'L5.1: perpindahan layar memakai gulir instan, bukan animasi smooth global');
assert(css.indexOf('prefers-reduced-motion') !== -1,
  'L5.2: preferensi pengurangan gerak dihormati');

// ---------------------------------------------------------------------------
section('L6. KARTU UTANG DI LAYAR SEMPIT');
// ---------------------------------------------------------------------------

assert(/max-width:\s*420px[\s\S]{0,400}\.debt-card-header[\s\S]{0,120}flex-direction:\s*column/.test(css),
  'L6.1: header kartu utang ditumpuk di layar sempit agar nama tidak terpecah');

console.log('\n============================================================================');
console.log(`🏁 SUITE TATA LETAK: ${passed}/${total} TESTS PASSED (${failed} failures)`);
console.log('============================================================================');
if (failed > 0) process.exit(1);
console.log('\n✅ Aturan tata letak, target sentuh, dan dropdown terverifikasi.');
