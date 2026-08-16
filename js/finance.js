'use strict';

// ============================================================
// FINANCE ENGINE — Penilaian Kondisi & Prioritas Utang
// ============================================================
// Berisi perhitungan finansial yang diminta PRD §12 (assessment),
// §17 (prioritas utang), §24 (rencana 90 hari), dan §26 (laporan).
// Dipisahkan dari app.js agar logika angka bisa diuji tanpa DOM.
// ============================================================

const FinanceEngine = {

  // ==========================================================
  // 1. ASSESSMENT — PRD §12
  // ==========================================================

  /**
   * Ringkasan kondisi finansial pengguna.
   * Semua nilai berupa bilangan bulat rupiah; rasio berupa angka desimal.
   */
  assess(state) {
    const s = state || {};
    const profile = s.profile || {};
    const essentialObj = (s.expenses && s.expenses.essential) || {};
    const records = (s.expenses && s.expenses.records) || [];
    const debts = s.debts || [];
    const incomes = s.incomes || [];
    const assets = s.assets || [];

    const gajiPokok = H.parseRp(profile.monthlyIncome);
    const pemasukanBulanIni = incomes
      .filter(i => H.isThisMonth(i.date))
      .reduce((a, i) => a + H.parseRp(i.amount), 0);
    const totalIncome = gajiPokok + pemasukanBulanIni;

    const essentialBurn = Object.values(essentialObj).reduce((a, v) => a + H.parseRp(v), 0);
    const nonEssential = records
      .filter(e => H.isThisMonth(e.date) && !e.essential)
      .reduce((a, e) => a + H.parseRp(e.amount), 0);
    const essentialRecords = records
      .filter(e => H.isThisMonth(e.date) && e.essential)
      .reduce((a, e) => a + H.parseRp(e.amount), 0);

    const debtPayments = debts.reduce((a, d) => a + H.parseRp(d.minPayment), 0);
    const totalDebt = debts.reduce((a, d) => a + H.parseRp(d.remaining), 0);
    const totalAssets = assets.reduce((a, x) => a + H.parseRp(x.value), 0);
    const liquidAssets = assets
      .filter(a => a.liquidatable && !a.keepForWork)
      .reduce((a, x) => a + H.parseRp(x.value), 0);

    const cash = H.parseRp(profile.cash);

    // PRD §12.1
    const monthlyCashflow = totalIncome - essentialBurn - debtPayments;
    // PRD §12.2
    const netPosition = (cash + totalAssets) - totalDebt;

    // PRD §12.4 — runway & status
    let runwayDays;
    let runwayStatus;
    if (essentialBurn <= 0) {
      runwayDays = null;
      runwayStatus = 'UNKNOWN'; // biaya hidup belum dipetakan
    } else {
      runwayDays = Math.floor((cash / essentialBurn) * 30);
      if (runwayDays < 7) runwayStatus = 'CRITICAL';
      else if (runwayDays < 30) runwayStatus = 'WARNING';
      else runwayStatus = 'SAFE';
    }

    // PRD §12.4 — status khusus tanpa pemasukan sama sekali
    const incomeStatus = totalIncome === 0 ? 'NO_INCOME' : (totalIncome < essentialBurn ? 'INCOME_BELOW_NEEDS' : 'INCOME_OK');

    // Rasio utang terhadap pendapatan (DTI). Tidak terdefinisi bila
    // pemasukan nol — jangan dipaksa jadi Infinity atau 0.
    const dtiRatio = totalIncome > 0 ? debtPayments / totalIncome : null;
    let dtiStatus;
    if (dtiRatio === null) dtiStatus = 'UNDEFINED';
    else if (dtiRatio <= 0.30) dtiStatus = 'SEHAT';
    else if (dtiRatio <= 0.50) dtiStatus = 'WASPADA';
    else dtiStatus = 'BERAT';

    const recurringMonthly = incomes
      .filter(i => i.recurring)
      .reduce((a, i) => a + H.parseRp(i.amount), 0);

    return {
      totalIncome, gajiPokok, pemasukanBulanIni, recurringMonthly,
      essentialBurn, nonEssential, essentialRecords,
      totalExpenses: essentialBurn + nonEssential,
      debtPayments, totalDebt, totalAssets, liquidAssets, cash,
      monthlyCashflow, netPosition,
      runwayDays, runwayStatus,
      incomeStatus,
      dtiRatio, dtiStatus,
    };
  },

  /** Label bahasa manusia untuk status DTI — tanpa bahasa menghakimi (PRD §7.4). */
  dtiLabel(status) {
    return {
      SEHAT: 'Beban cicilan masih terkendali',
      WASPADA: 'Beban cicilan mulai berat — pertimbangkan restrukturisasi',
      BERAT: 'Beban cicilan melebihi separuh pemasukan — restrukturisasi jadi prioritas',
      UNDEFINED: 'Belum bisa dihitung karena pemasukan bulan ini masih nol',
    }[status] || '';
  },

  runwayLabel(status) {
    return {
      CRITICAL: 'Kas menipis — fokus penuh pada pemasukan cepat',
      WARNING: 'Kas cukup untuk kurang dari sebulan',
      SAFE: 'Kas aman untuk lebih dari sebulan',
      UNKNOWN: 'Isi biaya hidup pokok agar bisa dihitung',
    }[status] || '';
  },

  // ==========================================================
  // 2. PRIORITAS UTANG — PRD §17.2
  // ==========================================================
  //
  // PRD tegas: "Aplikasi tidak boleh menyederhanakan seluruh utang hanya
  // berdasarkan bunga." Urutan pertimbangan yang diminta:
  //   1. kebutuhan hidup
  //   2. risiko kehilangan aset penting  (agunan)
  //   3. risiko hukum
  //   4. jatuh tempo
  //   5. bunga/denda
  //   6. nominal
  //   7. kemampuan negosiasi
  //
  // Versi lama `risk_first` hanya mengurutkan berdasarkan jatuh tempo —
  // field `collateral` dan `riskLevel` tersimpan tetapi tidak pernah
  // dipakai, sehingga utang beragunan BPKB bisa kalah prioritas dari
  // utang tanpa jaminan yang kebetulan jatuh tempo lebih dulu.

  /** Batas bunga legal per bulan (turunan 0,1%/hari konsumtif). */
  BATAS_BUNGA_LEGAL_BULANAN: 3,

  /** Kata kunci agunan yang menandakan aset penting dapat disita. */
  AGUNAN_BERAT: /bpkb|sertifikat|shm|shgb|rumah|tanah|motor|mobil|kendaraan|emas|ijazah/i,

  /**
   * Skor risiko sebuah utang, 0–100. Makin tinggi makin mendesak.
   * Setiap komponen dikembalikan terpisah agar UI bisa menjelaskan
   * alasannya kepada pengguna (PRD §7.6 Transparent Calculation).
   */
  riskScore(debt, opts) {
    const d = debt || {};
    const today = (opts && opts.today) || H.today();
    const rincian = [];
    let skor = 0;

    // (2) Risiko kehilangan aset penting — bobot tertinggi.
    const agunan = String(d.collateral || '').trim();
    if (agunan) {
      const berat = FinanceEngine.AGUNAN_BERAT.test(agunan);
      const poin = berat ? 35 : 20;
      skor += poin;
      rincian.push({ faktor: 'agunan', poin, alasan: berat
        ? `Dijamin ${agunan} — aset ini bisa disita bila menunggak`
        : `Ada agunan (${agunan}) yang berisiko hilang` });
    }

    // (3) Risiko hukum — bunga di atas batas legal menandakan pemberi
    // pinjaman ilegal, yang biasanya tidak punya jalur restrukturisasi
    // resmi dan penagihannya paling agresif.
    const bunga = Number(d.interestMonthly) || 0;
    if (bunga > FinanceEngine.BATAS_BUNGA_LEGAL_BULANAN) {
      const poin = Math.min(25, 15 + Math.round(bunga - FinanceEngine.BATAS_BUNGA_LEGAL_BULANAN));
      skor += poin;
      rincian.push({ faktor: 'risiko_hukum', poin,
        alasan: `Bunga ${bunga}%/bln melampaui batas wajar — periksa legalitas pemberi pinjaman` });
    }
    if (d.riskLevel === 'HIGH') {
      skor += 10;
      rincian.push({ faktor: 'risiko_ditandai', poin: 10, alasan: 'Ditandai berisiko tinggi' });
    }

    // (4) Jatuh tempo.
    if (d.dueDate) {
      const sisa = H.daysBetween(today, d.dueDate);
      let poin = 0;
      let alasan = '';
      if (sisa < 0) { poin = 25; alasan = `Sudah lewat jatuh tempo ${Math.abs(sisa)} hari`; }
      else if (sisa <= 3) { poin = 20; alasan = `Jatuh tempo ${sisa} hari lagi`; }
      else if (sisa <= 7) { poin = 15; alasan = `Jatuh tempo dalam sepekan`; }
      else if (sisa <= 30) { poin = 8; alasan = `Jatuh tempo bulan ini`; }
      if (poin > 0) { skor += poin; rincian.push({ faktor: 'jatuh_tempo', poin, alasan }); }
    }

    // (5) Beban bunga yang masih dalam batas legal tetap menambah bobot,
    // tetapi jauh lebih kecil daripada risiko penyitaan.
    if (bunga > 0 && bunga <= FinanceEngine.BATAS_BUNGA_LEGAL_BULANAN) {
      const poin = Math.round(bunga * 2);
      skor += poin;
      rincian.push({ faktor: 'bunga', poin, alasan: `Bunga berjalan ${bunga}%/bln` });
    }

    // (7) Kemampuan negosiasi — utang yang sudah ada kesepakatan
    // tertulis menurun urgensinya karena sudah terkendali.
    const negs = Array.isArray(d.negotiations) ? d.negotiations : [];
    const terakhir = negs.length > 0 ? negs[negs.length - 1] : null;
    if (terakhir && terakhir.status === 'AGREED') {
      skor -= 15;
      rincian.push({ faktor: 'negosiasi', poin: -15, alasan: 'Sudah ada kesepakatan restrukturisasi' });
    } else if (terakhir && terakhir.status === 'NEGOTIATING') {
      skor -= 5;
      rincian.push({ faktor: 'negosiasi', poin: -5, alasan: 'Sedang dalam proses negosiasi' });
    }

    // Utang lunas tidak lagi mendesak.
    if (H.parseRp(d.remaining) === 0) {
      return { skor: 0, rincian: [{ faktor: 'lunas', poin: 0, alasan: 'Sudah lunas' }] };
    }

    return { skor: Math.max(0, Math.min(100, skor)), rincian };
  },

  /**
   * Urutkan utang menurut strategi terpilih.
   * Mengembalikan array baru; array asli tidak diubah.
   */
  sortDebts(debts, strategy, opts) {
    const list = Array.isArray(debts) ? [...debts] : [];
    const today = (opts && opts.today) || H.today();

    // Utang lunas selalu turun ke bawah, apa pun strateginya.
    const belumLunas = list.filter(d => H.parseRp(d.remaining) > 0);
    const lunas = list.filter(d => H.parseRp(d.remaining) === 0);

    let terurut;
    switch (strategy) {
      case 'avalanche':
        terurut = belumLunas.sort((a, b) =>
          (Number(b.interestMonthly) || 0) - (Number(a.interestMonthly) || 0)
          || H.parseRp(a.remaining) - H.parseRp(b.remaining));
        break;

      case 'snowball':
        terurut = belumLunas.sort((a, b) =>
          H.parseRp(a.remaining) - H.parseRp(b.remaining));
        break;

      case 'custom':
        // Urutan manual yang ditentukan pengguna, disimpan pada
        // `customOrder`. Utang yang belum pernah diurutkan diletakkan
        // di belakang mengikuti urutan penambahan, bukan diacak.
        terurut = belumLunas.sort((a, b) => {
          const oa = Number.isFinite(a.customOrder) ? a.customOrder : Number.MAX_SAFE_INTEGER;
          const ob = Number.isFinite(b.customOrder) ? b.customOrder : Number.MAX_SAFE_INTEGER;
          if (oa !== ob) return oa - ob;
          return list.indexOf(a) - list.indexOf(b);
        });
        break;

      case 'risk_first':
      default:
        terurut = belumLunas.sort((a, b) => {
          const sa = FinanceEngine.riskScore(a, { today }).skor;
          const sb = FinanceEngine.riskScore(b, { today }).skor;
          if (sb !== sa) return sb - sa;
          // Skor sama: dahulukan yang jatuh temponya lebih dekat,
          // lalu nominal lebih kecil agar cepat tuntas.
          const da = a.dueDate ? H.daysBetween(today, a.dueDate) : 99999;
          const db = b.dueDate ? H.daysBetween(today, b.dueDate) : 99999;
          if (da !== db) return da - db;
          return H.parseRp(a.remaining) - H.parseRp(b.remaining);
        });
        break;
    }

    return terurut.concat(lunas);
  },

  /** Penjelasan singkat mengapa sebuah utang berada di urutan teratas. */
  explainPriority(debt, strategy, opts) {
    if (strategy === 'snowball') {
      return 'Saldo terkecil — melunasinya lebih cepat memberi momentum psikologis.';
    }
    if (strategy === 'avalanche') {
      return `Bunga tertinggi (${Number(debt.interestMonthly) || 0}%/bln) — paling hemat secara matematis.`;
    }
    if (strategy === 'custom') {
      return 'Kamu sendiri yang menempatkan utang ini di urutan teratas.';
    }
    const { rincian } = FinanceEngine.riskScore(debt, opts);
    const utama = rincian.filter(r => r.poin > 0).sort((a, b) => b.poin - a.poin)[0];
    return utama ? utama.alasan : 'Tidak ada faktor risiko menonjol saat ini.';
  },

  STRATEGY_LABEL: {
    risk_first: 'Risk First (Risiko Tertinggi)',
    avalanche: 'Avalanche (Bunga Tertinggi)',
    snowball: 'Snowball (Saldo Terkecil)',
    custom: 'Custom (Urutan Sendiri)',
  },

  // ==========================================================
  // 3. LAPORAN BULANAN — PRD §26
  // ==========================================================

  /**
   * Rekap satu bulan kalender. `bulanKey` berformat "YYYY-MM";
   * bila kosong memakai bulan berjalan.
   */
  monthlyReport(state, bulanKey) {
    const s = state || {};
    const kunci = bulanKey || H.today().slice(0, 7);
    const awal = `${kunci}-01`;
    const [y, m] = kunci.split('-').map(Number);
    const akhirEksklusif = H.toKey(new Date(y, m, 1)); // tanggal 1 bulan berikutnya

    const dalamBulan = (tgl) => !!tgl && tgl >= awal && tgl < akhirEksklusif;

    const incomes = (s.incomes || []).filter(i => dalamBulan(i.date));
    const records = (s.expenses || {}).records || [];
    const pengeluaran = records.filter(e => dalamBulan(e.date));

    const totalIncome = incomes.reduce((a, i) => a + H.parseRp(i.amount), 0);
    const incomeRecurring = incomes.filter(i => i.recurring).reduce((a, i) => a + H.parseRp(i.amount), 0);

    const essentialBudget = Object.values((s.expenses || {}).essential || {})
      .reduce((a, v) => a + H.parseRp(v), 0);
    const pengeluaranEsensial = pengeluaran.filter(e => e.essential).reduce((a, e) => a + H.parseRp(e.amount), 0);
    const pengeluaranNonEsensial = pengeluaran.filter(e => !e.essential).reduce((a, e) => a + H.parseRp(e.amount), 0);

    // Pembayaran utang pada bulan tersebut.
    let debtPokok = 0, debtBunga = 0, jumlahPembayaran = 0;
    for (const d of (s.debts || [])) {
      for (const p of (d.payments || [])) {
        if (!dalamBulan(p.date)) continue;
        jumlahPembayaran++;
        const bunga = H.parseRp(p.interest);
        debtBunga += bunga;
        debtPokok += Math.max(0, H.parseRp(p.amount) - bunga);
      }
    }

    // Peluang baru & misi selesai.
    const peluangBaru = (s.opportunities || []).filter(o => dalamBulan(o.dateApplied)).length;
    const peluangMenang = (s.opportunities || []).filter(o => o.status === 'WON' && dalamBulan(o.dateApplied)).length;

    let misiSelesai = 0, misiTotal = 0, misiDilewati = 0, hariAktif = 0;
    for (const [tgl, daftar] of Object.entries(s.missions || {})) {
      if (!dalamBulan(tgl)) continue;
      const arr = Array.isArray(daftar) ? daftar : [];
      misiTotal += arr.length;
      const selesai = arr.filter(m => m && m.completed).length;
      misiSelesai += selesai;
      misiDilewati += arr.filter(m => m && m.skipped).length;
      if (selesai > 0) hariAktif++;
    }

    // Pengeluaran per kategori, terbesar lebih dulu.
    const perKategori = {};
    for (const e of pengeluaran) {
      const k = e.category || 'other';
      perKategori[k] = (perKategori[k] || 0) + H.parseRp(e.amount);
    }
    const kategoriTerurut = Object.entries(perKategori).sort((a, b) => b[1] - a[1]);

    const sisaUtang = (s.debts || []).reduce((a, d) => a + H.parseRp(d.remaining), 0);

    return {
      bulanKey: kunci,
      label: new Date(y, m - 1, 1).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
      totalIncome, incomeRecurring, jumlahTransaksiIncome: incomes.length,
      essentialBudget, pengeluaranEsensial, pengeluaranNonEsensial,
      totalPengeluaran: pengeluaranEsensial + pengeluaranNonEsensial,
      debtPokok, debtBunga, jumlahPembayaran, sisaUtang,
      peluangBaru, peluangMenang,
      misiSelesai, misiTotal, misiDilewati, hariAktif,
      kategoriTerurut,
      arusKasBersih: totalIncome - (pengeluaranEsensial + pengeluaranNonEsensial) - debtPokok - debtBunga,
    };
  },

  /** Daftar bulan yang punya data, terbaru lebih dulu. */
  availableMonths(state) {
    const s = state || {};
    const set = new Set();
    const tambah = (tgl) => { if (tgl && /^\d{4}-\d{2}/.test(tgl)) set.add(tgl.slice(0, 7)); };

    (s.incomes || []).forEach(i => tambah(i.date));
    (((s.expenses || {}).records) || []).forEach(e => tambah(e.date));
    (s.debts || []).forEach(d => (d.payments || []).forEach(p => tambah(p.date)));
    Object.keys(s.missions || {}).forEach(tambah);
    tambah(H.today());

    return [...set].sort().reverse();
  },

  // ==========================================================
  // 4. WEEKLY REVIEW — PRD §9
  // ==========================================================

  /** Hari-hari saat review mingguan ditawarkan. */
  REVIEW_DAYS: [7, 14, 21, 28],

  /** Apakah hari ini adalah titik review yang belum dituntaskan? */
  pendingReview(state) {
    const s = state || {};
    const day = H.currentDay((s.meta || {}).startDate);
    const selesai = ((s.meta || {}).reviewsDone) || [];
    // Titik review terakhir yang sudah terlewati dan belum dikerjakan.
    const jatuh = FinanceEngine.REVIEW_DAYS.filter(d => day >= d && selesai.indexOf(d) === -1);
    return jatuh.length > 0 ? jatuh[jatuh.length - 1] : null;
  },

  /** Data ringkas untuk layar review mingguan pekan ke-n. */
  weeklyReview(state, reviewDay) {
    const s = state || {};
    const start = (s.meta || {}).startDate;
    const hariAwal = Math.max(1, reviewDay - 6);
    const tglAwal = H.addDays(start, hariAwal - 1);
    const tglAkhir = H.addDays(start, reviewDay - 1);

    const dalamPekan = (tgl) => !!tgl && tgl >= tglAwal && tgl <= tglAkhir;

    const incomes = (s.incomes || []).filter(i => dalamPekan(i.date));
    const totalIncome = incomes.reduce((a, i) => a + H.parseRp(i.amount), 0);

    const pengeluaran = (((s.expenses || {}).records) || []).filter(e => dalamPekan(e.date));
    const totalPengeluaran = pengeluaran.reduce((a, e) => a + H.parseRp(e.amount), 0);

    let bayarUtang = 0;
    for (const d of (s.debts || [])) {
      for (const p of (d.payments || [])) if (dalamPekan(p.date)) bayarUtang += H.parseRp(p.amount);
    }

    let misiSelesai = 0, misiTotal = 0;
    for (let h = hariAwal; h <= reviewDay; h++) {
      const tgl = H.addDays(start, h - 1);
      const arr = (s.missions || {})[tgl] || [];
      misiTotal += arr.length;
      misiSelesai += arr.filter(m => m && m.completed).length;
    }

    const peluangBaru = (s.opportunities || []).filter(o => dalamPekan(o.dateApplied)).length;
    const persenMisi = misiTotal > 0 ? Math.round((misiSelesai / misiTotal) * 100) : 0;

    // Apresiasi berbasis perilaku, bukan kekayaan (PRD §28).
    let catatan;
    if (misiTotal === 0) {
      catatan = 'Pekan ini belum ada misi tercatat. Tidak apa-apa — mulai lagi hari ini dari satu tindakan terkecil.';
    } else if (persenMisi >= 70) {
      catatan = `Kamu menuntaskan ${persenMisi}% misi pekan ini. Konsistensi seperti inilah yang membangun pemulihan, bukan satu langkah besar sekali waktu.`;
    } else if (persenMisi >= 30) {
      catatan = `Kamu menyelesaikan ${misiSelesai} dari ${misiTotal} misi. Setengah jalan tetap jalan — pekan depan cukup tambah satu misi lagi per hari.`;
    } else {
      catatan = 'Pekan ini berat dan itu wajar. Yang penting kamu kembali membuka aplikasi ini. Pilih satu misi termudah hari ini.';
    }

    return {
      reviewDay, hariAwal, tglAwal, tglAkhir,
      totalIncome, totalPengeluaran, bayarUtang,
      misiSelesai, misiTotal, persenMisi,
      peluangBaru, jumlahTransaksiIncome: incomes.length,
      catatan,
    };
  },

  // ==========================================================
  // 5. RENCANA 90 HARI — PRD §24
  // ==========================================================

  /**
   * Rencana lanjutan setelah program 30 hari, disusun dari kondisi
   * nyata pengguna sehingga targetnya realistis, bukan angka generik.
   */
  plan90(state) {
    const a = FinanceEngine.assess(state);
    const s = state || {};
    const day = H.currentDay((s.meta || {}).startDate);
    const custom = ((s.meta || {}).plan90Targets) || {};

    // Target default diturunkan dari posisi sekarang.
    const targetRecurring = custom.recurring != null ? H.parseRp(custom.recurring)
      : Math.max(a.essentialBurn, Math.round(a.recurringMonthly * 1.5) || a.essentialBurn);
    const targetDebtCut = custom.debtCut != null ? H.parseRp(custom.debtCut)
      : Math.round(a.totalDebt * 0.20);
    const targetDanaDarurat = custom.emergency != null ? H.parseRp(custom.emergency)
      : a.essentialBurn; // satu bulan biaya hidup

    return {
      mulaiHari: day,
      months: [
        {
          no: 1, nama: 'Bulan 1 — Recovery',
          fokus: 'Menstabilkan arus kas harian dan menuntaskan pemetaan',
          target: targetRecurring > 0
            ? `Pemasukan rutin menyentuh ${H.formatRp(Math.round(targetRecurring * 0.5))}/bulan`
            : 'Mendapatkan pemasukan pertama yang berulang',
          langkah: [
            'Pertahankan pencatatan harian tanpa jeda — angka yang terlihat lebih mudah dikendalikan.',
            'Kunci pengeluaran pokok pada level yang sudah terbukti cukup selama 30 hari terakhir.',
            'Ubah minimal satu klien atau pekerjaan lepas menjadi pesanan berulang.',
            a.totalDebt > 0
              ? 'Selesaikan komunikasi tertulis dengan seluruh kreditur yang belum dihubungi.'
              : 'Mulai sisihkan surplus ke pos dana darurat.',
          ],
        },
        {
          no: 2, nama: 'Bulan 2 — Income Stabilization',
          fokus: 'Membuat pemasukan bisa diperkirakan, bukan sekadar ada',
          target: `Pemasukan rutin mencapai ${H.formatRp(targetRecurring)}/bulan (menutup biaya pokok)`,
          langkah: [
            'Naikkan porsi pemasukan berulang hingga menutupi seluruh biaya hidup pokok.',
            'Kurangi pekerjaan yang menguras waktu tetapi kecil imbalannya.',
            'Bangun jadwal kerja tetap agar pemasukan tidak bergantung pada suasana hati.',
            'Sisihkan dana darurat bertahap hingga ' + H.formatRp(targetDanaDarurat) + '.',
          ],
        },
        {
          no: 3, nama: 'Bulan 3 — Debt Attack',
          fokus: 'Menyerang pokok utang dengan surplus yang sudah stabil',
          target: a.totalDebt > 0
            ? `Menurunkan pokok utang sebesar ${H.formatRp(targetDebtCut)} (±20% dari sisa sekarang)`
            : 'Menambah dana darurat menjadi 3 bulan biaya hidup',
          langkah: a.totalDebt > 0 ? [
            'Alokasikan seluruh surplus bulanan ke utang prioritas teratas.',
            'Tinjau ulang kesepakatan restrukturisasi yang sudah berjalan.',
            'Hindari menambah kewajiban baru sampai rasio cicilan turun di bawah 30%.',
            'Rayakan setiap satu utang yang tuntas — momentum itu nyata.',
          ] : [
            'Perbesar dana darurat sampai setara 3 bulan biaya hidup.',
            'Mulai pisahkan rekening operasional dan tabungan.',
            'Tetapkan satu tujuan finansial baru berjangka 6 bulan.',
            'Pertahankan kebiasaan pencatatan yang sudah terbentuk.',
          ],
        },
      ],
      targets: { recurring: targetRecurring, debtCut: targetDebtCut, emergency: targetDanaDarurat },
      posisi: a,
    };
  },
};

if (typeof module !== 'undefined' && module.exports) { module.exports = { FinanceEngine }; }
