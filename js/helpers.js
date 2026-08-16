// ============================================================
// HELPERS
// ============================================================
//
// CATATAN PENTING — ZONA WAKTU
// Seluruh tanggal di aplikasi ini memakai kalender LOKAL pengguna
// (WIB/WITA/WIT), bukan UTC. Menggunakan `new Date().toISOString()`
// untuk mendapatkan "hari ini" adalah BUG di Indonesia: pada pukul
// 00:00–06:59 WIB, UTC masih berada di tanggal kemarin, sehingga
// aplikasi salah menghitung "Hari ke-N", salah me-regenerate misi
// harian, dan mencatat transaksi dengan tanggal mundur satu hari.
//
// Gunakan H.today() / H.toKey() / H.addDays() untuk SEMUA operasi
// tanggal. Jangan pernah memakai toISOString() sebagai kunci tanggal.
// ============================================================
const H = {
  // Batas nilai uang (PRD §54: cegah overflow & nilai ekstrem).
  // Rp 999 triliun — jauh di atas kebutuhan nyata, tetapi masih aman
  // di bawah Number.MAX_SAFE_INTEGER sehingga penjumlahan tidak bocor.
  MAX_MONEY: 999_999_999_999_999,

  // ---- FORMAT UANG ----

  /**
   * Format Rupiah PENUH — selalu menampilkan angka persis.
   * Ini default di seluruh aplikasi: Rebound 30 adalah aplikasi utang,
   * pengguna harus bisa memverifikasi setiap rupiah (PRD §7.6
   * Transparent Calculation). Contoh: 18547300 -> "Rp 18.547.300"
   */
  formatRp(n) {
    const num = Math.round(Number(n) || 0);
    const abs = Math.abs(num);
    const sign = num < 0 ? '-' : '';
    return `${sign}Rp ${abs.toLocaleString('id-ID')}`;
  },

  /**
   * Format Rupiah RINGKAS — hanya untuk ruang yang benar-benar sempit
   * (badge kecil, chip, label grafik). JANGAN dipakai untuk sisa utang,
   * saldo kas, atau nilai apa pun yang perlu diverifikasi pengguna.
   * Contoh: 18547300 -> "Rp 18,5jt"
   */
  formatRpShort(n) {
    const num = Math.round(Number(n) || 0);
    const abs = Math.abs(num);
    const sign = num < 0 ? '-' : '';
    if (abs >= 1_000_000_000) return `${sign}Rp ${(abs / 1_000_000_000).toFixed(1).replace('.', ',')}M`;
    if (abs >= 1_000_000) return `${sign}Rp ${(abs / 1_000_000).toFixed(1).replace('.', ',')}jt`;
    return `${sign}Rp ${abs.toLocaleString('id-ID')}`;
  },

  /**
   * Ubah input pengguna menjadi bilangan bulat rupiah yang aman.
   * Menolak NaN, nilai negatif, dan nilai di atas MAX_MONEY (PRD §54).
   */
  parseRp(s) {
    if (typeof s === 'number') {
      if (!isFinite(s)) return 0;
      return Math.min(Math.max(Math.round(s), 0), H.MAX_MONEY);
    }
    const digits = String(s == null ? '' : s).replace(/[^\d]/g, '');
    if (!digits) return 0;
    // Potong panjang digit sebelum parseInt agar tidak meledak jadi Infinity
    const n = parseInt(digits.slice(0, 18), 10);
    if (!isFinite(n)) return 0;
    return Math.min(Math.max(n, 0), H.MAX_MONEY);
  },

  uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); },

  // ---- TANGGAL (LOKAL, BUKAN UTC) ----

  /**
   * Ubah objek Date menjadi kunci tanggal "YYYY-MM-DD" berdasarkan
   * kalender LOKAL. Pengganti toISOString().split('T')[0] yang bocor
   * ke UTC dan menggeser tanggal di zona waktu Indonesia.
   */
  toKey(date) {
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  },

  /** Ubah kunci "YYYY-MM-DD" menjadi Date tengah malam LOKAL. */
  fromKey(key) {
    if (!key) return null;
    if (key instanceof Date) return isNaN(key.getTime()) ? null : key;
    const m = String(key).match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (!m) {
      const d = new Date(key);
      return isNaN(d.getTime()) ? null : d;
    }
    return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 0, 0, 0, 0);
  },

  /** Tanggal hari ini menurut jam dinding pengguna. */
  today() { return H.toKey(new Date()); },

  /** Geser kunci tanggal sebanyak n hari (n boleh negatif). Aman terhadap DST. */
  addDays(key, n) {
    const d = H.fromKey(key);
    if (!d) return '';
    d.setDate(d.getDate() + Number(n || 0));
    return H.toKey(d);
  },

  formatDate(iso) {
    const d = H.fromKey(iso);
    if (!d) return '';
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  },

  /**
   * Selisih hari kalender antara dua kunci tanggal (b - a).
   * Dihitung dari tengah malam lokal ke tengah malam lokal lalu
   * dibulatkan, sehingga pergeseran offset zona waktu tidak
   * menghasilkan hasil ±1 hari yang salah.
   */
  daysBetween(a, b) {
    const da = H.fromKey(a), db = H.fromKey(b);
    if (!da || !db) return 0;
    return Math.round((db - da) / 86400000);
  },

  dayNumber(startDate) { return this.currentDay(startDate); },

  currentDay(startDate) {
    if (!startDate) return 1;
    const d = H.daysBetween(startDate, H.today()) + 1;
    return Math.max(d, 1);
  },

  getPhase(day) {
    if (day <= 4) return { id: 0, name: 'Survive', emoji: 'Shield', days: '1–4' };
    if (day <= 14) return { id: 1, name: 'Create Cash', emoji: 'Cash', days: '5–14' };
    if (day <= 21) return { id: 2, name: 'Stabilize', emoji: 'Scale', days: '15–21' };
    if (day <= 30) return { id: 3, name: 'Debt Attack', emoji: 'Attack', days: '22–30' };
    return { id: 3, name: 'Maintenance & Growth', emoji: 'Growth', days: '30+' };
  },

  priorityOrder: { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 },

  escHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  /** Tanggal 1 bulan berjalan, kalender lokal. */
  monthStart() {
    const d = new Date();
    return H.toKey(new Date(d.getFullYear(), d.getMonth(), 1));
  },

  /** Tanggal 1 bulan berikutnya (batas atas eksklusif bulan berjalan). */
  nextMonthStart() {
    const d = new Date();
    return H.toKey(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  },

  /**
   * Benar hanya jika tanggal berada di dalam bulan berjalan.
   * Versi lama hanya memeriksa `>= monthStart()`, sehingga transaksi
   * bertanggal masa depan ikut terhitung sebagai pemasukan bulan ini.
   */
  isThisMonth(dateStr) {
    if (!dateStr) return false;
    return dateStr >= H.monthStart() && dateStr < H.nextMonthStart();
  },
};

// Ekspor untuk test suite Node (tests/*.js) tanpa mengganggu browser.
if (typeof module !== 'undefined' && module.exports) { module.exports = { H }; }
