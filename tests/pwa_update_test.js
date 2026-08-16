// ============================================================================
// REBOUND 30 — SUITE PEMBARUAN PWA & MODE LURING
// ----------------------------------------------------------------------------
// BUG YANG DIJAGA SUITE INI
//
// Versi lama service worker memakai cache-first untuk SELURUH berkas,
// termasuk HTML dan JavaScript. Selama berkas ada di cache, jaringan tidak
// pernah disentuh, sehingga kode baru tidak pernah sampai ke pengguna.
// Kesegaran sepenuhnya bergantung pada CACHE_NAME yang dinaikkan MANUAL
// tiap deploy. Pengujian di browser sungguhan dengan latensi seluler:
//
//   • Deploy normal (CACHE_NAME dinaikkan) -> versi baru baru terlihat
//     pada pembukaan aplikasi KE-EMPAT.
//   • Lupa menaikkan CACHE_NAME            -> tidak pernah terlihat.
//
// Selain itu `cache.addAll()` bersifat semua-atau-gagal: satu berkas 404
// membatalkan seluruh pemasangan, dan aplikasi diam-diam kehilangan
// kemampuan luring tanpa gejala apa pun.
//
// Jalankan:  node tests/pwa_update_test.js
// ============================================================================

const fs = require('fs');
const path = require('path');

const sw = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, '..', 'js/app.js'), 'utf8');
const screensJs = fs.readFileSync(path.join(__dirname, '..', 'js/screens.js'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const vercel = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'vercel.json'), 'utf8'));

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
console.log('🔄 REBOUND 30 — SUITE PEMBARUAN PWA & MODE LURING');
console.log('============================================================================');

// ---------------------------------------------------------------------------
section('1. STRATEGI CACHE — KODE APLIKASI HARUS JARINGAN-DULU');
// ---------------------------------------------------------------------------

assert(/function\s+jaringanDuluan/.test(sw),
  'PWA-1.1: tersedia strategi jaringan-dulu untuk kode aplikasi');
assert(/function\s+cacheDuluan/.test(sw),
  'PWA-1.2: tersedia strategi cache-dulu untuk aset tetap');
assert(/kodeAplikasi\([^)]*\)[\s\S]{0,80}jaringanDuluan/.test(sw),
  'PWA-1.3: berkas HTML/JS/CSS diarahkan ke jaringan lebih dulu');
assert(/asetTetap\([^)]*\)[\s\S]{0,60}cacheDuluan/.test(sw),
  'PWA-1.4: font & gambar tetap disajikan dari cache (hemat kuota)');

// Regresi utama: tidak boleh kembali ke cache-first menyeluruh.
const cacheFirstMenyeluruh =
  /event\.respondWith\(\s*caches\.match\(event\.request\)/.test(sw.replace(/\s+/g, ' '));
assert(!cacheFirstMenyeluruh,
  'PWA-1.5: tidak ada lagi cache-first menyeluruh untuk semua permintaan');

assert(/BATAS_JARINGAN_MS/.test(sw) && /AbortController/.test(sw),
  'PWA-1.6: permintaan jaringan dibatasi waktu agar sinyal lemah tidak menggantung');

const batas = (sw.match(/BATAS_JARINGAN_MS\s*=\s*(\d+)/) || [])[1];
assert(batas && Number(batas) >= 1500 && Number(batas) <= 8000,
  'PWA-1.7: batas waktu jaringan wajar untuk jaringan seluler', { batas });

// ---------------------------------------------------------------------------
section('2. KETAHANAN PEMASANGAN');
// ---------------------------------------------------------------------------

assert(!/cache\.addAll\(/.test(sw),
  'PWA-2.1: tidak memakai cache.addAll (satu berkas 404 membatalkan semuanya)');
assert(/ASSETS_TO_CACHE\.map/.test(sw) && /catch/.test(sw),
  'PWA-2.2: tiap aset disimpan sendiri-sendiri, kegagalan tidak menjatuhkan yang lain');
assert(/console\.warn\([^)]*SW/.test(sw),
  'PWA-2.3: kegagalan penyimpanan aset dicatat, tidak ditelan diam-diam');

// Seluruh berkas skrip yang dimuat halaman harus ikut di-cache untuk luring.
const skripHalaman = (html.match(/<script src="([^"]+)"/g) || [])
  .map(t => '/' + t.replace('<script src="', '').replace('"', ''));
const belum = skripHalaman.filter(f => sw.indexOf("'" + f + "'") === -1);
assert(belum.length === 0,
  'PWA-2.4: setiap berkas JS yang dimuat halaman terdaftar di ASSETS_TO_CACHE',
  { belum });

const cssHalaman = (html.match(/<link[^>]+href="(css\/[^"]+)"/g) || [])
  .map(t => '/' + (t.match(/href="([^"]+)"/) || [])[1]);
const cssBelum = cssHalaman.filter(f => sw.indexOf("'" + f + "'") === -1);
assert(cssBelum.length === 0,
  'PWA-2.5: setiap berkas CSS yang dimuat halaman terdaftar di ASSETS_TO_CACHE',
  { cssBelum });

// ---------------------------------------------------------------------------
section('3. PERGANTIAN VERSI TERKENDALI');
// ---------------------------------------------------------------------------

// skipWaiting saat install membuat pergantian terjadi di tengah sesi,
// sehingga halaman bisa memakai campuran kode lama dan baru.
const skipDiInstall = /addEventListener\('install'[\s\S]{0,1200}self\.skipWaiting\(\)/.test(sw);
assert(!skipDiInstall,
  'PWA-3.1: skipWaiting TIDAK dipanggil otomatis saat install');
assert(/SKIP_WAITING[\s\S]{0,120}self\.skipWaiting\(\)/.test(sw),
  'PWA-3.2: skipWaiting hanya dijalankan setelah pengguna menyetujui');
assert(/clients\.claim\(\)/.test(sw),
  'PWA-3.3: service worker baru mengambil alih klien setelah aktif');

assert(/keys\.filter\([^)]*rebound30-[\s\S]{0,80}caches\.delete/.test(sw),
  'PWA-3.4: cache versi lama dibersihkan saat aktivasi');

// ---------------------------------------------------------------------------
section('4. PEMBERITAHUAN PEMBARUAN DI ANTARMUKA');
// ---------------------------------------------------------------------------

assert(/updatefound/.test(appJs) || /updatefound/.test(screensJs),
  'PWA-4.1: aplikasi memantau kemunculan service worker baru');
assert(/statechange/.test(screensJs),
  'PWA-4.2: memantau sampai versi baru selesai terpasang');
assert(/navigator\.serviceWorker\.controller/.test(screensJs),
  'PWA-4.3: membedakan pembaruan dari pemasangan pertama (tidak menawarkan muat ulang ke pengguna baru)');
assert(/controllerchange/.test(appJs),
  'PWA-4.4: memuat ulang saat service worker baru mengambil alih');
assert(/sudahMuatUlang/.test(appJs),
  'PWA-4.5: ada penjaga agar tidak terjadi muat ulang berulang tanpa henti');
assert(/update-banner/.test(screensJs) && /Versi baru tersedia/.test(screensJs),
  'PWA-4.6: tersedia tawaran muat ulang berbahasa Indonesia');
assert(/Datamu tidak terpengaruh/.test(screensJs),
  'PWA-4.7: tawaran menegaskan data pengguna aman (mengurangi keraguan menekan tombol)');
assert(/visibilitychange/.test(appJs) && /reg\.update\(\)/.test(appJs),
  'PWA-4.8: pembaruan diperiksa ulang saat aplikasi kembali dibuka');
assert(/addEventListener\('online'/.test(appJs),
  'PWA-4.9: pembaruan diperiksa saat koneksi kembali tersambung');

// ---------------------------------------------------------------------------
section('5. VERSI TERLIHAT & HEADER HOSTING');
// ---------------------------------------------------------------------------

const versi = (sw.match(/APP_VERSION\s*=\s*'([^']+)'/) || [])[1];
assert(!!versi && /^\d+\.\d+\.\d+$/.test(versi),
  'PWA-5.1: APP_VERSION memakai penomoran semantik', { versi });
assert(sw.indexOf("CACHE_NAME = 'rebound30-' + APP_VERSION") !== -1,
  'PWA-5.2: nama cache diturunkan dari APP_VERSION (satu tempat untuk dinaikkan)');
assert(html.indexOf('id="app-version-text"') !== -1,
  'PWA-5.3: versi ditampilkan di Pengaturan agar mudah saat menangani keluhan');
assert(/GET_VERSION/.test(sw) && /GET_VERSION/.test(screensJs),
  'PWA-5.4: aplikasi dapat menanyakan versi yang benar-benar aktif');

const headerSw = (vercel.headers || []).find(h => h.source === '/sw.js');
const nilaiCache = headerSw && (headerSw.headers || []).find(x => x.key === 'Cache-Control');
assert(nilaiCache && /no-cache|max-age=0/.test(nilaiCache.value),
  'PWA-5.5: hosting menyajikan sw.js tanpa cache, sehingga pembaruan terdeteksi',
  { nilai: nilaiCache && nilaiCache.value });

console.log('\n============================================================================');
console.log(`🏁 SUITE PEMBARUAN PWA: ${passed}/${total} TESTS PASSED (${failed} failures)`);
console.log('============================================================================');
if (failed > 0) process.exit(1);
console.log('\n✅ Pembaruan sampai ke pengguna tanpa perlu membersihkan cache, luring tetap utuh.');
