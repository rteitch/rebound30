'use strict';

// ============================================================
// EXPORTER — CSV & PDF (PRD §42)
// ============================================================
// JSON sudah ada untuk pencadangan/pemulihan. Yang ditambahkan di sini
// adalah dua format untuk kebutuhan berbeda:
//
//   CSV  — dibuka di Excel/Google Sheets, dipakai pengguna yang ingin
//          mengolah angkanya sendiri atau menyerahkan rekap ke pihak lain.
//   PDF  — dicetak lewat dialog cetak bawaan browser (tanpa pustaka
//          eksternal, tetap Zero-CDN dan berfungsi offline). Berguna
//          sebagai lampiran saat mengajukan restrukturisasi ke kreditur.
// ============================================================

const Exporter = {

  // ----------------------------------------------------------
  // CSV
  // ----------------------------------------------------------

  /**
   * Bungkus satu sel CSV. Selalu diapit tanda kutip agar koma dan
   * baris baru di dalam catatan pengguna tidak merusak struktur.
   */
  cell(v) {
    if (v === null || v === undefined) return '""';
    return '"' + String(v).replace(/"/g, '""') + '"';
  },

  rows2csv(rows) {
    return rows.map(r => r.map(Exporter.cell).join(',')).join('\r\n');
  },

  /**
   * Seluruh data pengguna sebagai satu berkas CSV bersekat bagian.
   * Excel Indonesia memakai koma sebagai pemisah desimal, jadi nominal
   * ditulis sebagai bilangan bulat polos tanpa titik ribuan agar tetap
   * terbaca sebagai angka.
   */
  buildCSV(state) {
    const s = state || {};
    const rows = [];
    const kosong = () => rows.push([]);
    const judul = (t) => { rows.push([t]); };

    rows.push(['REBOUND 30 — EKSPOR DATA']);
    rows.push(['Tanggal ekspor', H.formatDate(H.today())]);
    rows.push(['Hari program', `${H.currentDay((s.meta || {}).startDate)} dari 30`]);
    rows.push(['Tanggal mulai', H.formatDate((s.meta || {}).startDate)]);
    kosong();

    // --- Ringkasan ---
    const a = FinanceEngine.assess(s);
    judul('RINGKASAN KONDISI');
    rows.push(['Keterangan', 'Nilai (Rp)']);
    rows.push(['Uang tunai (kas)', a.cash]);
    rows.push(['Pemasukan bulan ini', a.totalIncome]);
    rows.push(['Biaya pokok per bulan', a.essentialBurn]);
    rows.push(['Cicilan utang per bulan', a.debtPayments]);
    rows.push(['Arus kas bulanan', a.monthlyCashflow]);
    rows.push(['Total sisa utang', a.totalDebt]);
    rows.push(['Total estimasi aset', a.totalAssets]);
    rows.push(['Kekayaan bersih', a.netPosition]);
    rows.push(['Sisa hari bertahan (runway)', a.runwayDays === null ? 'belum bisa dihitung' : a.runwayDays]);
    rows.push(['Rasio cicilan terhadap pemasukan', a.dtiRatio === null ? 'belum bisa dihitung' : `${Math.round(a.dtiRatio * 100)}%`]);
    kosong();

    // --- Utang ---
    judul('DAFTAR UTANG');
    rows.push(['Nama', 'Kreditur', 'Pokok Awal', 'Sisa', 'Bunga %/bln', 'Cicilan Min', 'Jatuh Tempo', 'Agunan', 'Status Negosiasi', 'Catatan']);
    for (const d of (s.debts || [])) {
      const negs = d.negotiations || [];
      const st = negs.length ? negs[negs.length - 1].status : 'NOT_CONTACTED';
      rows.push([d.name, d.creditor || '', H.parseRp(d.original), H.parseRp(d.remaining),
        Number(d.interestMonthly) || 0, H.parseRp(d.minPayment),
        d.dueDate ? H.formatDate(d.dueDate) : '', d.collateral || '', st, d.notes || '']);
    }
    kosong();

    // --- Pembayaran utang ---
    judul('RIWAYAT PEMBAYARAN UTANG');
    rows.push(['Tanggal', 'Utang', 'Total Bayar', 'Porsi Bunga', 'Porsi Pokok', 'Catatan']);
    for (const d of (s.debts || [])) {
      for (const p of (d.payments || [])) {
        const bunga = H.parseRp(p.interest);
        rows.push([H.formatDate(p.date), d.name, H.parseRp(p.amount), bunga,
          Math.max(0, H.parseRp(p.amount) - bunga), p.notes || '']);
      }
    }
    kosong();

    // --- Negosiasi ---
    judul('RIWAYAT NEGOSIASI KREDITUR');
    rows.push(['Tanggal', 'Utang', 'Narahubung', 'Kanal', 'Status', 'Tawaran', 'Tanggal Follow-up', 'Bukti/Lampiran', 'Catatan']);
    for (const d of (s.debts || [])) {
      for (const n of (d.negotiations || [])) {
        rows.push([H.formatDate(n.date), d.name, n.contactPerson || '', n.channel || '',
          n.status, n.offer || '', n.followUp ? H.formatDate(n.followUp) : '',
          n.attachment || '', n.notes || '']);
      }
    }
    kosong();

    // --- Pemasukan ---
    judul('CATATAN PEMASUKAN');
    rows.push(['Tanggal', 'Sumber', 'Kategori', 'Jumlah', 'Berulang', 'Catatan']);
    for (const i of (s.incomes || [])) {
      rows.push([H.formatDate(i.date), i.source || '', i.category || '',
        H.parseRp(i.amount), i.recurring ? 'Ya' : 'Tidak', i.notes || '']);
    }
    kosong();

    // --- Pengeluaran ---
    judul('CATATAN PENGELUARAN');
    rows.push(['Tanggal', 'Keterangan', 'Kategori', 'Jumlah', 'Esensial']);
    for (const e of (((s.expenses || {}).records) || [])) {
      rows.push([H.formatDate(e.date), e.description || '', e.category || '',
        H.parseRp(e.amount), e.essential ? 'Ya' : 'Tidak']);
    }
    kosong();

    // --- Anggaran pokok ---
    judul('ANGGARAN POKOK BULANAN');
    rows.push(['Kategori', 'Jumlah']);
    const labelEss = { food: 'Makan', housing: 'Tempat tinggal', utilities: 'Listrik & air',
      transport: 'Transportasi', comm: 'Komunikasi', other: 'Lainnya' };
    for (const [k, v] of Object.entries(((s.expenses || {}).essential) || {})) {
      rows.push([labelEss[k] || k, H.parseRp(v)]);
    }
    kosong();

    // --- Aset ---
    judul('DAFTAR ASET');
    rows.push(['Nama', 'Kategori', 'Nilai Taksiran', 'Bisa Dijual Darurat', 'Alat Kerja (Jangan Dijual)', 'Catatan']);
    for (const x of (s.assets || [])) {
      rows.push([x.name, x.category || '', H.parseRp(x.value),
        x.liquidatable ? 'Ya' : 'Tidak', x.keepForWork ? 'Ya' : 'Tidak', x.notes || '']);
    }
    kosong();

    // --- Peluang ---
    judul('PIPELINE PELUANG');
    rows.push(['Judul', 'Klien/Perusahaan', 'Jenis', 'Estimasi Nilai', 'Status', 'Tanggal Dilamar', 'Follow-up', 'Catatan']);
    for (const o of (s.opportunities || [])) {
      rows.push([o.title, o.company || '', o.type || '', H.parseRp(o.expectedIncome),
        o.status, o.dateApplied ? H.formatDate(o.dateApplied) : '',
        o.followUpDate ? H.formatDate(o.followUpDate) : '', o.notes || '']);
    }
    kosong();

    // --- Riwayat misi ---
    judul('RIWAYAT MISI HARIAN');
    rows.push(['Tanggal', 'Misi', 'Prioritas', 'Status', 'Alasan Dilewati']);
    const tanggalMisi = Object.keys(s.missions || {}).sort();
    for (const tgl of tanggalMisi) {
      for (const m of (s.missions[tgl] || [])) {
        const st = m.completed ? 'Selesai' : (m.skipped ? 'Dilewati' : 'Belum');
        rows.push([H.formatDate(tgl), m.title || m.type, m.priority || '', st, m.skipReason || '']);
      }
    }

    return Exporter.rows2csv(rows);
  },

  /** Unduh seluruh data sebagai CSV. */
  downloadCSV(state) {
    const csv = Exporter.buildCSV(state);
    // BOM UTF-8 agar Excel di Windows membaca huruf beraksen dengan benar.
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    Exporter._download(blob, `rebound30-data-${H.today()}.csv`);
  },

  _download(blob, nama) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nama;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },

  // ----------------------------------------------------------
  // PDF (lewat dialog cetak browser — tanpa pustaka eksternal)
  // ----------------------------------------------------------

  /**
   * Bangun laporan siap cetak, lalu buka dialog cetak. Pengguna memilih
   * "Simpan sebagai PDF" pada dialog bawaan. Pendekatan ini menjaga
   * aplikasi tetap bebas CDN dan tetap berfungsi tanpa internet.
   *
   * `jenis`: 'rebound' (Hari 1 vs sekarang) atau 'bulanan'.
   */
  printReport(state, jenis, bulanKey) {
    const s = state || {};
    const html = jenis === 'bulanan'
      ? Exporter._htmlBulanan(s, bulanKey)
      : Exporter._htmlRebound(s);

    const frame = document.createElement('iframe');
    frame.setAttribute('aria-hidden', 'true');
    frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;';
    document.body.appendChild(frame);

    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    // Beri jeda agar tata letak selesai dihitung sebelum dialog muncul.
    setTimeout(() => {
      try {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      } catch (e) {
        console.error('Gagal membuka dialog cetak:', e);
      }
      setTimeout(() => { if (frame.parentNode) frame.parentNode.removeChild(frame); }, 60000);
    }, 350);
  },

  _shellCSS() {
    return `
      @page { size: A4; margin: 16mm 14mm; }
      * { box-sizing: border-box; }
      body { font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
             color: #0F172A; font-size: 11pt; line-height: 1.5; margin: 0; }
      h1 { font-size: 18pt; margin: 0 0 2mm; }
      h2 { font-size: 12pt; margin: 8mm 0 2mm; padding-bottom: 1.5mm;
           border-bottom: 1.5pt solid #0F766E; color: #0F766E; }
      .sub { color: #475569; font-size: 9.5pt; margin-bottom: 6mm; }
      table { width: 100%; border-collapse: collapse; margin-bottom: 4mm; }
      th, td { text-align: left; padding: 2mm 2.5mm; border-bottom: 0.5pt solid #CBD5E1;
               font-size: 9.5pt; vertical-align: top; }
      th { background: #F1F5F9; font-weight: 700; }
      td.num, th.num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
      .pos { color: #047857; font-weight: 700; }
      .neg { color: #B91C1C; font-weight: 700; }
      .kotak { border: 1pt solid #CBD5E1; border-radius: 2mm; padding: 3mm 4mm; margin-bottom: 4mm; }
      .catatan { font-size: 8.5pt; color: #64748B; margin-top: 6mm;
                 border-top: 0.5pt solid #CBD5E1; padding-top: 2mm; }
      tr, table { page-break-inside: avoid; }
      h2 { page-break-after: avoid; }
    `;
  },

  _rp(n) { return H.formatRp(n); },

  _htmlRebound(s) {
    const a = FinanceEngine.assess(s);
    const snap = (s.meta || {}).snapshotDay1 || {};
    const day = H.currentDay((s.meta || {}).startDate);
    const skor = ScoreEngine.calculate(s);

    const b = {
      cash: snap.cash !== undefined ? snap.cash : a.cash,
      income: snap.income !== undefined ? snap.income : a.totalIncome,
      expenses: snap.expenses !== undefined ? snap.expenses : a.essentialBurn,
      debt: snap.debt !== undefined ? snap.debt : a.totalDebt,
      assets: snap.assets !== undefined ? snap.assets : a.totalAssets,
      score: snap.score !== undefined ? snap.score : 20,
    };
    const netAwal = (b.cash + b.assets) - b.debt;

    const baris = (label, awal, kini, balikArah) => {
      const delta = kini - awal;
      const baik = balikArah ? delta < 0 : delta > 0;
      const cls = delta === 0 ? '' : (baik ? 'pos' : 'neg');
      const tanda = delta > 0 ? '+' : '';
      return `<tr><td>${label}</td><td class="num">${H.formatRp(awal)}</td>
        <td class="num">${H.formatRp(kini)}</td>
        <td class="num ${cls}">${delta === 0 ? '—' : tanda + H.formatRp(delta)}</td></tr>`;
    };

    return `<!DOCTYPE html><html lang="id"><head><meta charset="utf-8">
      <title>Laporan Rebound — Hari 1 vs Hari ${day}</title>
      <style>${Exporter._shellCSS()}</style></head><body>
      <h1>Laporan Pemulihan Finansial</h1>
      <div class="sub">Rebound 30 · Hari ke-${day} dari 30 · Dicetak ${H.formatDate(H.today())}</div>

      <h2>Perbandingan Hari 1 dengan Posisi Sekarang</h2>
      <table>
        <thead><tr><th>Pos</th><th class="num">Hari 1</th><th class="num">Sekarang</th><th class="num">Perubahan</th></tr></thead>
        <tbody>
          ${baris('Uang tunai (kas)', b.cash, a.cash, false)}
          ${baris('Pemasukan per bulan', b.income, a.totalIncome, false)}
          ${baris('Biaya pokok per bulan', b.expenses, a.essentialBurn, true)}
          ${baris('Total sisa utang', b.debt, a.totalDebt, true)}
          ${baris('Total estimasi aset', b.assets, a.totalAssets, false)}
          ${baris('Kekayaan bersih', netAwal, a.netPosition, false)}
          <tr><td>Rebound Score</td><td class="num">${b.score}/100</td>
              <td class="num">${skor.score}/100</td>
              <td class="num ${skor.score >= b.score ? 'pos' : 'neg'}">${skor.score - b.score >= 0 ? '+' : ''}${skor.score - b.score}</td></tr>
        </tbody>
      </table>

      <h2>Kondisi Saat Ini</h2>
      <div class="kotak">
        <table>
          <tr><td>Arus kas bulanan</td><td class="num ${a.monthlyCashflow >= 0 ? 'pos' : 'neg'}">${H.formatRp(a.monthlyCashflow)}</td></tr>
          <tr><td>Sisa hari bertahan (runway)</td><td class="num">${a.runwayDays === null ? 'Belum bisa dihitung' : a.runwayDays + ' hari'}</td></tr>
          <tr><td>Rasio cicilan terhadap pemasukan</td><td class="num">${a.dtiRatio === null ? 'Belum bisa dihitung' : Math.round(a.dtiRatio * 100) + '%'}</td></tr>
          <tr><td>Pemasukan berulang per bulan</td><td class="num">${H.formatRp(a.recurringMonthly)}</td></tr>
        </table>
      </div>

      ${(s.debts || []).length ? `
      <h2>Rincian Utang</h2>
      <table>
        <thead><tr><th>Utang</th><th>Kreditur</th><th class="num">Sisa</th><th class="num">Bunga/bln</th><th>Jatuh Tempo</th><th>Agunan</th></tr></thead>
        <tbody>${FinanceEngine.sortDebts(s.debts, (s.settings || {}).debtStrategy || 'risk_first').map(d => `
          <tr><td>${H.escHtml(d.name)}</td><td>${H.escHtml(d.creditor || '—')}</td>
          <td class="num">${H.formatRp(d.remaining)}</td>
          <td class="num">${Number(d.interestMonthly) || 0}%</td>
          <td>${d.dueDate ? H.formatDate(d.dueDate) : '—'}</td>
          <td>${H.escHtml(d.collateral || '—')}</td></tr>`).join('')}
        </tbody>
      </table>` : ''}

      <div class="catatan">
        Laporan ini dihasilkan otomatis oleh aplikasi Rebound 30 dari data yang kamu catat sendiri.
        Seluruh data tersimpan hanya di perangkatmu. Dokumen ini bukan laporan keuangan teraudit
        dan bukan nasihat hukum atau keuangan profesional.
      </div>
      </body></html>`;
  },

  _htmlBulanan(s, bulanKey) {
    const r = FinanceEngine.monthlyReport(s, bulanKey);
    const labelKat = {
      food: 'Makan', housing: 'Tempat tinggal', utilities: 'Listrik & air',
      transport: 'Transportasi', comm: 'Komunikasi', eating_out: 'Makan di luar',
      entertainment: 'Hiburan', shopping: 'Belanja', health: 'Kesehatan',
      debt_interest: 'Bunga utang', other: 'Lainnya',
    };

    return `<!DOCTYPE html><html lang="id"><head><meta charset="utf-8">
      <title>Laporan Bulanan ${r.label}</title>
      <style>${Exporter._shellCSS()}</style></head><body>
      <h1>Laporan Bulanan</h1>
      <div class="sub">${r.label} · Rebound 30 · Dicetak ${H.formatDate(H.today())}</div>

      <h2>Arus Kas</h2>
      <table>
        <tr><td>Total pemasukan</td><td class="num pos">${H.formatRp(r.totalIncome)}</td></tr>
        <tr><td>— di antaranya berulang</td><td class="num">${H.formatRp(r.incomeRecurring)}</td></tr>
        <tr><td>Pengeluaran pokok</td><td class="num">${H.formatRp(r.pengeluaranEsensial)}</td></tr>
        <tr><td>Pengeluaran non-pokok</td><td class="num">${H.formatRp(r.pengeluaranNonEsensial)}</td></tr>
        <tr><td>Pembayaran pokok utang</td><td class="num">${H.formatRp(r.debtPokok)}</td></tr>
        <tr><td>Beban bunga utang</td><td class="num neg">${H.formatRp(r.debtBunga)}</td></tr>
        <tr><td><strong>Arus kas bersih</strong></td>
            <td class="num ${r.arusKasBersih >= 0 ? 'pos' : 'neg'}">${H.formatRp(r.arusKasBersih)}</td></tr>
      </table>

      <h2>Posisi Utang</h2>
      <table>
        <tr><td>Sisa utang akhir bulan</td><td class="num">${H.formatRp(r.sisaUtang)}</td></tr>
        <tr><td>Jumlah pembayaran tercatat</td><td class="num">${r.jumlahPembayaran} kali</td></tr>
      </table>

      ${r.kategoriTerurut.length ? `
      <h2>Pengeluaran per Kategori</h2>
      <table>
        <thead><tr><th>Kategori</th><th class="num">Jumlah</th></tr></thead>
        <tbody>${r.kategoriTerurut.map(([k, v]) =>
          `<tr><td>${labelKat[k] || k}</td><td class="num">${H.formatRp(v)}</td></tr>`).join('')}
        </tbody>
      </table>` : ''}

      <h2>Aktivitas Pemulihan</h2>
      <table>
        <tr><td>Misi diselesaikan</td><td class="num">${r.misiSelesai} dari ${r.misiTotal}</td></tr>
        <tr><td>Misi dilewati</td><td class="num">${r.misiDilewati}</td></tr>
        <tr><td>Hari dengan minimal satu misi tuntas</td><td class="num">${r.hariAktif} hari</td></tr>
        <tr><td>Peluang baru dicatat</td><td class="num">${r.peluangBaru}</td></tr>
        <tr><td>Peluang berhasil (menang)</td><td class="num pos">${r.peluangMenang}</td></tr>
      </table>

      <div class="catatan">
        Laporan ini dihasilkan otomatis oleh aplikasi Rebound 30 dari data yang kamu catat sendiri.
        Bukan laporan keuangan teraudit, dan bukan nasihat hukum atau keuangan profesional.
      </div>
      </body></html>`;
  },
};

if (typeof module !== 'undefined' && module.exports) { module.exports = { Exporter }; }
