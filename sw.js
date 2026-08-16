// ============================================================================
// Rebound 30 — Service Worker (offline-first + pembaruan yang andal)
// ============================================================================
//
// MASALAH YANG DIPERBAIKI
// Versi sebelumnya memakai strategi cache-first untuk SELURUH berkas,
// termasuk HTML dan JavaScript. Selama berkas masih ada di cache, jaringan
// tidak pernah disentuh, sehingga kode baru tidak pernah terbaca. Kesegaran
// sepenuhnya bergantung pada CACHE_NAME yang dinaikkan manual tiap deploy —
// sekali lupa, seluruh pengguna terkunci di versi lama tanpa gejala apa pun
// bagi pengembang. Pengujian di jaringan seluler menunjukkan pengguna harus
// membuka aplikasi EMPAT kali sebelum melihat versi baru, itu pun hanya bila
// CACHE_NAME memang dinaikkan.
//
// STRATEGI SEKARANG
//   • Kode aplikasi (HTML, JS, CSS)  -> jaringan lebih dulu, cache cadangan.
//     Saat daring pengguna selalu mendapat versi terbaru, meski CACHE_NAME
//     lupa dinaikkan. Saat luring aplikasi tetap berjalan dari cache.
//   • Aset tetap (font, favicon)     -> cache lebih dulu. Isinya tidak
//     pernah berubah, jadi tidak perlu membebani kuota data pengguna.
//   • Permintaan jaringan diberi batas waktu, sehingga sinyal lemah tidak
//     membuat aplikasi menggantung — setelah batas terlampaui langsung
//     memakai cache.
//
// Menaikkan APP_VERSION tetap dianjurkan (agar cache lama dibersihkan dan
// pengguna mendapat tawaran muat ulang), tetapi tidak lagi menjadi
// satu-satunya penentu apakah pembaruan sampai ke pengguna.
// ============================================================================

const APP_VERSION = '2.1.0';
const CACHE_NAME = 'rebound30-' + APP_VERSION;

// Batas waktu menunggu jaringan sebelum beralih ke cache (milidetik).
// Cukup longgar untuk jaringan seluler, cukup pendek agar tidak menggantung.
const BATAS_JARINGAN_MS = 3500;

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/css/fonts.css',
  '/css/styles.css',
  '/js/icons.js',
  '/js/helpers.js',
  '/js/store.js',
  '/js/engine.js',
  '/js/finance.js',
  '/js/notify.js',
  '/js/exporter.js',
  '/js/stories.js',
  '/js/app.js',
  '/js/screens.js',
  '/fonts/plus-jakarta-sans-1.woff2',
  '/fonts/plus-jakarta-sans-2.woff2',
  '/fonts/plus-jakarta-sans-3.woff2',
  '/fonts/plus-jakarta-sans-4.woff2',
  '/fonts/plus-jakarta-sans-5.woff2',
  '/fonts/plus-jakarta-sans-6.woff2',
  '/fonts/plus-jakarta-sans-7.woff2',
  '/fonts/plus-jakarta-sans-8.woff2',
  '/fonts/plus-jakarta-sans-9.woff2',
  '/fonts/plus-jakarta-sans-10.woff2',
  '/fonts/plus-jakarta-sans-11.woff2',
  '/fonts/plus-jakarta-sans-12.woff2',
  '/fonts/plus-jakarta-sans-13.woff2',
  '/fonts/plus-jakarta-sans-14.woff2',
  '/fonts/plus-jakarta-sans-15.woff2',
  '/fonts/plus-jakarta-sans-16.woff2',
  '/fonts/plus-jakarta-sans-17.woff2',
  '/fonts/plus-jakarta-sans-18.woff2',
  '/fonts/plus-jakarta-sans-19.woff2',
  '/fonts/plus-jakarta-sans-20.woff2'
];

/** Berkas yang isinya tidak pernah berubah -> aman disajikan dari cache. */
function asetTetap(url) {
  return /\.(woff2|ttf|otf|png|jpg|jpeg|webp|ico)$/i.test(url.pathname)
      || url.pathname === '/favicon.svg';
}

/** Kode aplikasi -> harus selalu diperiksa ke jaringan saat daring. */
function kodeAplikasi(url) {
  return /\.(html|js|css|json)$/i.test(url.pathname)
      || url.pathname === '/'
      || url.pathname.indexOf('.') === -1;
}

// ---------------------------------------------------------------------------
// Pemasangan
// ---------------------------------------------------------------------------
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    // cache.addAll bersifat semua-atau-gagal: satu berkas 404 membatalkan
    // SELURUH pemasangan, dan aplikasi diam-diam kehilangan kemampuan luring
    // tanpa gejala apa pun. Karena itu tiap berkas diambil sendiri-sendiri
    // dan kegagalannya dicatat, bukan menjatuhkan yang lain.
    const gagal = [];
    await Promise.all(ASSETS_TO_CACHE.map(async (aset) => {
      try {
        const res = await fetch(aset, { cache: 'reload' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        await cache.put(aset, res);
      } catch (e) {
        gagal.push(aset + ' (' + e.message + ')');
      }
    }));
    if (gagal.length) {
      console.warn('[SW] Sebagian aset gagal disimpan; mode luring mungkin tidak lengkap:', gagal);
    }
  })());

  // TIDAK memanggil skipWaiting() di sini, dengan sengaja. Mengganti service
  // worker di tengah sesi membuat halaman yang sudah termuat memakai campuran
  // kode lama dan baru. Pergantian hanya dilakukan setelah pengguna menyetujui
  // lewat tombol "Muat Ulang".
});

// ---------------------------------------------------------------------------
// Aktivasi
// ---------------------------------------------------------------------------
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(k => k.indexOf('rebound30-') === 0 && k !== CACHE_NAME)
          .map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

// ---------------------------------------------------------------------------
// Pesan dari halaman
// ---------------------------------------------------------------------------
self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type === 'SKIP_WAITING') self.skipWaiting();
  if (data.type === 'GET_VERSION' && event.ports && event.ports[0]) {
    event.ports[0].postMessage({ version: APP_VERSION, cache: CACHE_NAME });
  }
});

// ---------------------------------------------------------------------------
// Strategi pengambilan
// ---------------------------------------------------------------------------
async function jaringanDuluan(request, cache) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), BATAS_JARINGAN_MS);
  try {
    const res = await fetch(request, { signal: controller.signal });
    clearTimeout(timer);
    if (res && res.status === 200 && res.type === 'basic') {
      cache.put(request, res.clone()).catch(() => {});
    }
    return res;
  } catch (e) {
    clearTimeout(timer);
    const tersimpan = await cache.match(request);
    if (tersimpan) return tersimpan;

    // Luring dan belum pernah tersimpan: untuk navigasi, sajikan kerangka
    // aplikasi supaya pengguna tetap bisa membuka datanya sendiri.
    if (request.mode === 'navigate') {
      const beranda = await cache.match('/index.html');
      if (beranda) return beranda;
    }
    throw e;
  }
}

async function cacheDuluan(request, cache) {
  const tersimpan = await cache.match(request);
  if (tersimpan) return tersimpan;
  const res = await fetch(request);
  if (res && res.status === 200 && res.type === 'basic') {
    cache.put(request, res.clone()).catch(() => {});
  }
  return res;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  let url;
  try { url = new URL(request.url); } catch (e) { return; }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (url.origin !== self.location.origin) return; // lintas domain dibiarkan apa adanya

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (asetTetap(url)) return cacheDuluan(request, cache);
    if (kodeAplikasi(url) || request.mode === 'navigate') return jaringanDuluan(request, cache);
    return cacheDuluan(request, cache);
  })());
});
