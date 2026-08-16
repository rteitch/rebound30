'use strict';

// ============================================================
// STORAGE LAYER
// ============================================================
// Seluruh data finansial pengguna hanya tersimpan di localStorage
// perangkat masing-masing (PRD §7.7 Privacy First). Karena tidak ada
// server cadangan, lapisan ini wajib:
//   1. memberi tahu pengguna jika penyimpanan GAGAL (kuota penuh),
//      bukan menelan error diam-diam;
//   2. memigrasi data lama ke struktur baru tanpa merusak riwayat;
//   3. menolak berkas import yang bukan state Rebound 30.
// ============================================================
const Store = {
  KEY: 'rebound30_v1',

  // Naikkan angka ini setiap kali struktur state berubah, lalu tambahkan
  // langkah penyesuaiannya di Store.migrate().
  SCHEMA_VERSION: 2,

  // Diisi oleh App.init() agar Store bisa melaporkan kegagalan simpan ke
  // antarmuka. Dibiarkan null di lingkungan test/Node.
  onError: null,

  get() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return null;
      return this.migrate(parsed);
    } catch (e) {
      console.error('Store.get gagal membaca data:', e);
      return null;
    }
  },

  save(data) {
    try {
      if (data && data.meta) data.meta.schemaVersion = this.SCHEMA_VERSION;
      localStorage.setItem(this.KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Store.save gagal:', e);

      // QuotaExceededError punya nama berbeda antar-browser.
      const quotaFull = !!e && (
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
        e.code === 22 || e.code === 1014
      );

      const message = quotaFull
        ? 'Penyimpanan browser penuh — perubahan terakhir TIDAK tersimpan. Buka Pengaturan → Export Data untuk mencadangkan, lalu kosongkan data situs lain di browser ini.'
        : 'Data gagal disimpan di perangkat ini. Jika kamu memakai mode penyamaran (incognito), keluar dari mode tersebut agar progres tersimpan.';

      if (typeof this.onError === 'function') {
        try { this.onError(message, e); } catch { /* handler tidak boleh ikut melempar */ }
      }
      return false;
    }
  },

  /**
   * Gabungkan state tersimpan dengan struktur default terbaru.
   * Kunci yang hilang (karena backup dibuat versi lama) diisi dari
   * default; data milik pengguna tidak pernah ditimpa.
   */
  migrate(raw) {
    const base = this.defaultState();
    const s = raw && typeof raw === 'object' ? raw : {};

    const merged = {
      meta: Object.assign({}, base.meta, s.meta || {}),
      profile: Object.assign({}, base.profile, s.profile || {}),
      expenses: {
        essential: Object.assign({}, base.expenses.essential, (s.expenses && s.expenses.essential) || {}),
        records: Array.isArray(s.expenses && s.expenses.records) ? s.expenses.records : [],
      },
      debts: Array.isArray(s.debts) ? s.debts : [],
      incomes: Array.isArray(s.incomes) ? s.incomes : [],
      opportunities: Array.isArray(s.opportunities) ? s.opportunities : [],
      assets: Array.isArray(s.assets) ? s.assets : [],
      missions: (s.missions && typeof s.missions === 'object' && !Array.isArray(s.missions)) ? s.missions : {},
      achievements: Array.isArray(s.achievements) ? s.achievements : [],
      settings: Object.assign({}, base.settings, s.settings || {}),
    };

    // --- v1 -> v2 -------------------------------------------------
    // v1 menyimpan startDate memakai toISOString() (UTC). Bagi pengguna
    // WIB yang memulai program antara 00:00–06:59, tanggal itu mundur
    // satu hari sehingga "Hari ke-N" salah selamanya. Jam pembuatannya
    // tidak bisa direkonstruksi, jadi yang dilakukan hanya menormalkan
    // format dan memastikan tanggal tidak berada di masa depan.
    if (!merged.meta.startDate || !/^\d{4}-\d{2}-\d{2}$/.test(String(merged.meta.startDate))) {
      merged.meta.startDate = H.today();
    }
    if (merged.meta.startDate > H.today()) merged.meta.startDate = H.today();

    // Normalisasi entitas: field wajib selalu ada dan nominal selalu
    // berupa bilangan bulat aman — melindungi dari backup lama maupun
    // berkas yang diedit manual.
    merged.debts = merged.debts.filter(d => d && typeof d === 'object').map(d => Object.assign({
      id: H.uid(), name: 'Utang', creditor: '', original: 0, remaining: 0,
      interestMonthly: 0, dueDate: '', minPayment: 0, collateral: '',
      riskLevel: 'MEDIUM', payments: [], negotiations: [], notes: '',
    }, d, {
      original: H.parseRp(d.original),
      remaining: H.parseRp(d.remaining),
      minPayment: H.parseRp(d.minPayment),
      interestMonthly: Number(d.interestMonthly) || 0,
      payments: Array.isArray(d.payments) ? d.payments : [],
      negotiations: Array.isArray(d.negotiations) ? d.negotiations : [],
    }));

    merged.incomes = merged.incomes.filter(i => i && typeof i === 'object')
      .map(i => Object.assign({ id: H.uid(), source: '', category: 'other', date: H.today(), recurring: false, notes: '' }, i, {
        amount: H.parseRp(i.amount),
      }));

    merged.expenses.records = merged.expenses.records.filter(e => e && typeof e === 'object')
      .map(e => Object.assign({ id: H.uid(), description: '', category: 'other', date: H.today(), essential: false }, e, {
        amount: H.parseRp(e.amount),
      }));

    merged.assets = merged.assets.filter(a => a && typeof a === 'object')
      .map(a => Object.assign({ id: H.uid(), name: '', category: 'other', liquidatable: false, keepForWork: false, notes: '' }, a, {
        value: H.parseRp(a.value),
      }));

    merged.opportunities = merged.opportunities.filter(o => o && typeof o === 'object')
      .map(o => Object.assign({ id: H.uid(), title: '', company: '', type: 'job', status: 'SAVED', dateApplied: H.today(), followUpDate: '', notes: '' }, o, {
        expectedIncome: H.parseRp(o.expectedIncome),
      }));

    for (const k of Object.keys(merged.expenses.essential)) {
      merged.expenses.essential[k] = H.parseRp(merged.expenses.essential[k]);
    }
    merged.profile.cash = H.parseRp(merged.profile.cash);
    merged.profile.monthlyIncome = H.parseRp(merged.profile.monthlyIncome);
    if (!Array.isArray(merged.profile.skills)) merged.profile.skills = [];

    merged.meta.schemaVersion = this.SCHEMA_VERSION;
    return merged;
  },

  /**
   * Validasi berkas import; mengembalikan { ok, state, reason }.
   * Pemeriksaan lama hanya `data.meta && data.profile`, sehingga JSON
   * apa pun yang kebetulan punya dua kunci itu diterima dan bisa
   * merusak aplikasi setelah seluruh data lama tertimpa.
   */
  validateImport(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
      return { ok: false, reason: 'Isi berkas bukan objek data Rebound 30.' };
    }
    if (!raw.meta || typeof raw.meta !== 'object') {
      return { ok: false, reason: 'Berkas tidak memiliki bagian "meta".' };
    }
    if (!raw.profile || typeof raw.profile !== 'object') {
      return { ok: false, reason: 'Berkas tidak memiliki bagian "profile".' };
    }
    const markers = ['debts', 'incomes', 'expenses', 'assets', 'missions'];
    if (!markers.some(k => k in raw)) {
      return { ok: false, reason: 'Struktur berkas tidak dikenali sebagai backup Rebound 30.' };
    }
    for (const k of ['debts', 'incomes', 'opportunities', 'assets', 'achievements']) {
      if (k in raw && !Array.isArray(raw[k])) {
        return { ok: false, reason: `Bagian "${k}" rusak — seharusnya berupa daftar.` };
      }
    }
    if (raw.meta.schemaVersion && Number(raw.meta.schemaVersion) > this.SCHEMA_VERSION) {
      return { ok: false, reason: 'Berkas dibuat oleh versi aplikasi yang lebih baru. Perbarui aplikasi terlebih dahulu.' };
    }
    return { ok: true, state: this.migrate(raw) };
  },

  defaultState() {
    return {
      meta: {
        schemaVersion: this.SCHEMA_VERSION,
        startDate: H.today(),
        onboardingDone: false,
        lastBackupReminder: null,
        snapshotDay1: null,
      },
      profile: {
        employment: null,
        monthlyIncome: 0,
        incomeFrequency: 'bulanan',
        cash: 0,
        skills: [],
        goal: null,
      },
      expenses: {
        essential: { food: 0, housing: 0, utilities: 0, transport: 0, comm: 0, other: 0 },
        records: [],
      },
      debts: [],
      incomes: [],
      opportunities: [],
      assets: [],
      missions: {},
      achievements: [],
      settings: {
        backupReminderEnabled: true,
        backupReminderDays: 7,
        lastExport: null,
        debtStrategy: 'risk_first',
      },
    };
  }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = { Store }; }
