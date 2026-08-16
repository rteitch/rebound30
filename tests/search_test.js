// ============================================================================
// REBOUND 30 — SUITE PENCARIAN KISAH BANGKIT
// ----------------------------------------------------------------------------
// BUG YANG DIJAGA SUITE INI
//
// Versi lama `Stories.setSearch()` memanggil `this.render()`, yang menulis
// ulang innerHTML SELURUH pustaka — termasuk elemen <input> tempat pengguna
// sedang mengetik. Node input dihancurkan lalu diganti node baru pada setiap
// ketikan, sehingga fokus keyboard hilang terus-menerus. Gejalanya persis
// seperti yang dilaporkan: pengguna hanya bisa mengetik SATU huruf, lalu
// harus mengklik kembali kotak pencarian untuk huruf berikutnya.
//
// Suite ini menguji dua lapis:
//   A. KONTRAK DOM  — setSearch hanya boleh menyentuh daftar hasil,
//                     tidak pernah membangun ulang wadah atau input.
//   B. LOGIKA CARI  — cakupan field, frasa banyak kata, dan padanan kata.
//
// Jalankan:  node tests/search_test.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ---------------------------------------------------------------------------
// DOM tiruan seperlunya, dengan pencatat setiap penulisan innerHTML
// ---------------------------------------------------------------------------
function buatLingkungan() {
  const tulisan = [];   // catatan setiap penulisan innerHTML
  const sentuhInput = []; // catatan setiap perubahan pada elemen input

  function elemen(nama, opts) {
    const o = opts || {};
    const el = {
      _nama: nama,
      className: o.className || '',
      style: {},
      _value: '',
      _html: '',
      _attrs: {},
      classList: {
        _set: new Set((o.className || '').split(' ').filter(Boolean)),
        add(c) { this._set.add(c); },
        remove(c) { this._set.delete(c); },
        toggle(c, on) { on ? this._set.add(c) : this._set.delete(c); },
        contains(c) { return this._set.has(c); },
      },
      getAttribute(k) { return this._attrs[k] !== undefined ? this._attrs[k] : null; },
      setAttribute(k, v) { this._attrs[k] = String(v); },
      focus() { el._focused = true; },
      querySelectorAll: () => [],
    };
    Object.defineProperty(el, 'innerHTML', {
      get() { return el._html; },
      set(v) { el._html = v; tulisan.push({ el: nama, panjang: String(v).length }); },
    });
    Object.defineProperty(el, 'value', {
      get() { return el._value; },
      set(v) { el._value = v; if (nama === 'input') sentuhInput.push(v); },
    });
    Object.defineProperty(el, 'textContent', {
      get() { return el._text || ''; },
      set(v) { el._text = String(v); },
    });
    return el;
  }

  const grid = elemen('grid');
  const wadah = elemen('stories-root');
  const input = elemen('input');
  const info = elemen('info');
  const clear = elemen('clear');
  const chips = ['all', 'debt', 'indonesia', 'bookmarks'].map(id => {
    const c = elemen('chip-' + id);
    c.setAttribute('data-cat', id);
    return c;
  });

  const storage = {};
  const context = {
    console,
    window: {},
    localStorage: {
      getItem: (k) => (k in storage ? storage[k] : null),
      setItem: (k, v) => { storage[k] = String(v); },
      removeItem: (k) => { delete storage[k]; },
    },
    document: {
      getElementById(id) {
        if (id === 'stories-root') return wadah;
        if (id === 'story-search-input') return input;
        if (id === 'story-search-info') return info;
        if (id === 'story-search-clear') return clear;
        return null;
      },
      querySelector(sel) {
        if (sel.indexOf('story-catalog-grid') !== -1) return grid;
        return null;
      },
      querySelectorAll(sel) {
        if (sel.indexOf('story-category-chip') !== -1) return chips;
        return [];
      },
      createElement: () => elemen('tmp'),
      body: { appendChild() {}, removeChild() {} },
    },
  };
  vm.createContext(context);

  for (const f of ['js/helpers.js', 'js/stories.js']) {
    const code = fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
    vm.runInContext(code + `
      ['H','Stories'].forEach(function(n){
        try { if (eval('typeof '+n) !== 'undefined') window[n] = eval(n); } catch(e){}
      });`, context);
  }

  return { Stories: context.window.Stories, H: context.window.H,
           grid, wadah, input, info, clear, chips, tulisan, sentuhInput };
}

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
console.log('🔎 REBOUND 30 — SUITE PENCARIAN KISAH BANGKIT');
console.log('============================================================================');

// ---------------------------------------------------------------------------
section('A. KONTRAK DOM — mengetik tidak boleh membangun ulang kotak pencarian');
// ---------------------------------------------------------------------------

{
  const env = buatLingkungan();
  const { Stories } = env;

  // Mata-mata: catat bila render()/renderLibrary() ikut terpanggil.
  let renderDipanggil = 0, libraryDipanggil = 0;
  const renderAsli = Stories.render;
  const libraryAsli = Stories.renderLibrary;
  Stories.render = function () { renderDipanggil++; return renderAsli.apply(this, arguments); };
  Stories.renderLibrary = function () { libraryDipanggil++; return libraryAsli.apply(this, arguments); };

  env.tulisan.length = 0;
  env.sentuhInput.length = 0;

  // Simulasikan mengetik "bakpao" huruf demi huruf, persis seperti pengguna.
  const kata = 'bakpao';
  for (let i = 1; i <= kata.length; i++) Stories.setSearch(kata.slice(0, i));

  assert(renderDipanggil === 0,
    'SRCH-A1: setSearch TIDAK memanggil render() penuh (penyebab hilangnya fokus)',
    { renderDipanggil });
  assert(libraryDipanggil === 0,
    'SRCH-A2: setSearch TIDAK membangun ulang renderLibrary()', { libraryDipanggil });
  assert(env.tulisan.every(t => t.el === 'grid'),
    'SRCH-A3: hanya daftar hasil yang ditulis ulang, bukan wadah pustaka',
    { ditulis: [...new Set(env.tulisan.map(t => t.el))] });
  assert(env.tulisan.length === kata.length,
    'SRCH-A4: satu penulisan daftar per ketikan, tanpa render berlebih',
    { penulisan: env.tulisan.length, ketikan: kata.length });
  assert(env.sentuhInput.length === 0,
    'SRCH-A5: nilai <input> tidak pernah ditimpa saat mengetik (kursor aman)',
    { sentuhan: env.sentuhInput });

  Stories.render = renderAsli;
  Stories.renderLibrary = libraryAsli;
}

{
  const env = buatLingkungan();
  const { Stories } = env;
  let renderDipanggil = 0;
  const renderAsli = Stories.render;
  Stories.render = function () { renderDipanggil++; return renderAsli.apply(this, arguments); };

  env.tulisan.length = 0;
  Stories.setCategory('indonesia');

  assert(renderDipanggil === 0,
    'SRCH-A6: klik chip kategori juga tidak membangun ulang kotak pencarian');
  assert(env.chips.find(c => c.getAttribute('data-cat') === 'indonesia').classList.contains('active'),
    'SRCH-A7: chip yang dipilih ditandai aktif');
  assert(!env.chips.find(c => c.getAttribute('data-cat') === 'all').classList.contains('active'),
    'SRCH-A8: chip lain kehilangan status aktif');
  Stories.render = renderAsli;
}

{
  const env = buatLingkungan();
  const { Stories } = env;
  // Saat berada di layar pembaca tidak ada grid; jangan sampai melempar error.
  env.document = null;
  let aman = true;
  try {
    Stories.viewMode = 'reader';
    const asli = Stories.buildCardsHtml;
    Stories.setSearch('apa saja');
    Stories.buildCardsHtml = asli;
  } catch (e) { aman = false; }
  assert(aman, 'SRCH-A9: setSearch aman dipanggil meski daftar tidak sedang tampil');
}

// ---------------------------------------------------------------------------
section('B. PENANGANAN TEKS — spasi & huruf besar');
// ---------------------------------------------------------------------------

{
  const env = buatLingkungan();
  const { Stories } = env;

  Stories.setSearch('yiwu ');
  assert(Stories.searchQuery === 'yiwu ',
    'SRCH-B1: spasi di akhir TIDAK dipangkas saat mengetik (versi lama memakai .trim() sehingga spasi langsung hilang)',
    { q: JSON.stringify(Stories.searchQuery) });

  Stories.setSearch('yiwu bakpao');
  assert(Stories.searchQuery === 'yiwu bakpao',
    'SRCH-B2: frasa dua kata tersimpan utuh', { q: Stories.searchQuery });

  Stories.setSearch('BAKPAO');
  const hasil = Stories.getFilteredData();
  assert(hasil.length >= 1, 'SRCH-B3: pencarian tidak peka huruf besar/kecil', { n: hasil.length });

  Stories.setSearch('');
  assert(Stories.getFilteredData().length === Stories.DATA.length,
    'SRCH-B4: kata kunci kosong menampilkan seluruh kisah');

  Stories.setSearch('   ');
  assert(Stories.getFilteredData().length === Stories.DATA.length,
    'SRCH-B5: kata kunci berisi spasi saja tidak menyaring apa pun');
}

// ---------------------------------------------------------------------------
section('C. CAKUPAN PENCARIAN — sesuai janji placeholder');
// ---------------------------------------------------------------------------

{
  const env = buatLingkungan();
  const { Stories } = env;
  Stories.selectedCategory = 'all';

  // Placeholder menjanjikan "nama tokoh, kota, atau kata kunci masalah".
  // Versi lama hanya mencari name/title/tagline/subtitle — field `origin`
  // (kota) tidak pernah ikut dicari.
  const kota = ['yiwu', 'madura', 'bangkok', 'cimahi', 'surabaya', 'solo'];
  let kotaKetemu = 0;
  for (const k of kota) {
    Stories.setSearch(k);
    if (Stories.getFilteredData().length > 0) kotaKetemu++;
  }
  assert(kotaKetemu >= 4, 'SRCH-C1: nama kota/daerah bisa dicari (janji placeholder)',
    { dariTotal: kota.length, ketemu: kotaKetemu });

  Stories.setSearch('shao');
  assert(Stories.getFilteredData().length === 1, 'SRCH-C2: nama tokoh ditemukan tepat');

  for (const k of ['bangkrut', 'rentenir', 'kredit', 'disita']) {
    Stories.setSearch(k);
    assert(Stories.getFilteredData().length > 0, `SRCH-C3: kata kunci masalah "${k}" menemukan hasil`);
  }

  Stories.setSearch('zzzqqqxyz');
  assert(Stories.getFilteredData().length === 0,
    'SRCH-C4: kata kunci mengada-ada tetap menghasilkan nol (tidak asal cocok)');
}

{
  const env = buatLingkungan();
  const { Stories } = env;
  Stories.selectedCategory = 'all';

  Stories.setSearch('yiwu');
  const satuKata = Stories.getFilteredData().length;
  Stories.setSearch('yiwu bakpao');
  const duaKata = Stories.getFilteredData().length;
  assert(duaKata <= satuKata && duaKata >= 1,
    'SRCH-C5: menambah kata kunci mempersempit hasil (AND, bukan OR)',
    { satuKata, duaKata });

  Stories.setSearch('yiwu zzzqqq');
  assert(Stories.getFilteredData().length === 0,
    'SRCH-C6: satu kata yang tidak cocok membatalkan hasil (bukti AND)');
}

// ---------------------------------------------------------------------------
section('D. PADANAN KATA SEHARI-HARI');
// ---------------------------------------------------------------------------

{
  const env = buatLingkungan();
  const { Stories } = env;
  Stories.selectedCategory = 'all';

  // Pengguna aplikasi utang mengetik dengan kosakata situasinya sendiri.
  // Kata-kata ini tidak muncul persis di naskah kisah mana pun.
  const korpus = Stories.DATA.map(d => Stories._haystack(d)).join(' ');
  for (const k of ['pinjol', 'phk', 'galbay']) {
    assert(korpus.indexOf(k) === -1,
      `SRCH-D0: "${k}" memang tidak ada di naskah (dasar perlunya padanan kata)`);
  }

  for (const k of ['pinjol', 'phk', 'galbay', 'dc', 'lintah darat', 'gulung tikar']) {
    Stories.setSearch(k);
    assert(Stories.getFilteredData().length > 0,
      `SRCH-D1: kosakata sehari-hari "${k}" tetap menemukan kisah relevan`,
      { n: Stories.getFilteredData().length });
  }

  // Padanan tidak boleh melebar sampai semua kisah cocok.
  Stories.setSearch('pinjol');
  const n = Stories.getFilteredData().length;
  assert(n < Stories.DATA.length,
    'SRCH-D2: padanan kata tetap menyaring, tidak mengembalikan semua kisah',
    { n, total: Stories.DATA.length });

  assert(Stories.SEARCH_SUGGESTIONS.every(k => {
    Stories.setSearch(k);
    return Stories.getFilteredData().length > 0;
  }), 'SRCH-D3: setiap kata kunci saran benar-benar membuahkan hasil');
}

// ---------------------------------------------------------------------------
section('E. INTERAKSI KATEGORI & CACHE');
// ---------------------------------------------------------------------------

{
  const env = buatLingkungan();
  const { Stories } = env;

  Stories.selectedCategory = 'all';
  Stories.setSearch('bangkrut');
  const semua = Stories.getFilteredData().length;

  Stories.setCategory('indonesia');
  const indo = Stories.getFilteredData().length;
  assert(Stories.searchQuery === 'bangkrut',
    'SRCH-E1: kata kunci tetap tersimpan setelah ganti kategori');
  assert(indo <= semua, 'SRCH-E2: kategori & pencarian bekerja bersama (AND)', { semua, indo });

  Stories.setCategory('bookmarks');
  Stories.bookmarks = [];
  assert(Stories.getFilteredData().length === 0,
    'SRCH-E3: kategori Tersimpan tanpa bookmark menghasilkan daftar kosong');
}

{
  const env = buatLingkungan();
  const { Stories } = env;
  const t1 = Stories._haystack(Stories.DATA[0]);
  const t2 = Stories._haystack(Stories.DATA[0]);
  assert(t1 === t2 && Stories._haystackCache[Stories.DATA[0].id] === t1,
    'SRCH-E4: teks pencarian di-cache per kisah, tidak dibangun ulang tiap ketikan');
  assert(t1.indexOf(String(Stories.DATA[0].origin).toLowerCase()) !== -1,
    'SRCH-E5: field origin (kota) benar-benar masuk ke teks pencarian');
}

// ---------------------------------------------------------------------------
console.log('\n============================================================================');
console.log(`🏁 SUITE PENCARIAN: ${passed}/${total} TESTS PASSED (${failed} failures)`);
console.log('============================================================================');
if (failed > 0) process.exit(1);
console.log('\n✅ Pencarian Kisah Bangkit terverifikasi: fokus aman, cakupan sesuai janji.');
