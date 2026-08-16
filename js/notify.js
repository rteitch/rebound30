'use strict';

// ============================================================
// NOTIFY CENTER — Pengingat In-App (PRD §27)
// ============================================================
// Aplikasi ini tidak punya server, jadi tidak ada push notification
// yang bisa membangunkan HP saat aplikasi tertutup. Yang dibangun di
// sini adalah pengingat yang dihitung ulang setiap kali aplikasi
// dibuka — jalan 100% offline, tanpa meminta izin apa pun.
//
// PRD §27 menuntut jenis pengingat berikut, dan menegaskan
// "Default notification must be limited. Avoid notification spam."
// Karena itu setiap pengingat bisa ditutup (dismiss) per hari, dan
// hanya yang benar-benar perlu tindakan hari ini yang ditampilkan.
// ============================================================

const NotifyCenter = {

  SEVERITY_ORDER: { CRITICAL: 0, WARNING: 1, INFO: 2 },

  /**
   * Susun seluruh pengingat yang relevan hari ini.
   * Murni fungsi baca — tidak mengubah state.
   */
  build(state) {
    const s = state || {};
    const today = H.today();
    const items = [];
    const push = (o) => items.push(Object.assign({ severity: 'INFO', dismissible: true }, o));

    const a = (typeof FinanceEngine !== 'undefined') ? FinanceEngine.assess(s) : null;

    // --- 1. Kas kritis (PRD §29 pemicu Emergency Mode) ----------------
    if (a && a.runwayStatus === 'CRITICAL') {
      push({
        id: 'runway_critical',
        severity: 'CRITICAL',
        dismissible: false, // kondisi bertahan hidup — tidak boleh disembunyikan
        icon: 'alert-triangle',
        judul: `Kas tersisa untuk sekitar ${a.runwayDays} hari`,
        pesan: 'Prioritas hari ini adalah mengamankan kebutuhan pokok dan memasukkan uang secepatnya.',
        aksiLabel: 'Buka Mode Darurat',
        aksi: "App.emergency.open()",
      });
    }

    // --- 2. Utang jatuh tempo (PRD §27 debt due date) -----------------
    for (const d of (s.debts || [])) {
      if (H.parseRp(d.remaining) === 0 || !d.dueDate) continue;
      const sisa = H.daysBetween(today, d.dueDate);
      if (sisa > 7) continue;

      let severity = 'WARNING', judul, pesan;
      if (sisa < 0) {
        severity = 'CRITICAL';
        judul = `${d.name} lewat jatuh tempo ${Math.abs(sisa)} hari`;
        pesan = 'Menghubungi kreditur lebih dulu jauh lebih baik daripada menunggu ditagih. Ini juga arahan resmi OJK.';
      } else if (sisa === 0) {
        severity = 'CRITICAL';
        judul = `${d.name} jatuh tempo hari ini`;
        pesan = `Cicilan minimum ${H.formatRp(d.minPayment)}. Bila belum sanggup, ajukan keringanan tertulis hari ini juga.`;
      } else {
        judul = `${d.name} jatuh tempo ${sisa} hari lagi`;
        pesan = `Siapkan ${H.formatRp(d.minPayment)} atau ajukan restrukturisasi sebelum menunggak.`;
      }

      push({
        id: `debt_due_${d.id}`,
        severity, icon: 'calendar-clock', judul, pesan,
        aksiLabel: 'Buka Utang',
        aksi: "App.navigate('debts')",
      });
    }

    // --- 3. Follow-up peluang jatuh tempo hari ini --------------------
    // Inilah yang membuat kolom "Tanggal Follow-up" berguna. Sebelumnya
    // tanggal itu hanya tersimpan dan ditampilkan pasif.
    for (const o of (s.opportunities || [])) {
      if (!o.followUpDate) continue;
      if (['WON', 'LOST', 'CANCELLED'].indexOf(o.status) !== -1) continue;
      const sisa = H.daysBetween(today, o.followUpDate);
      if (sisa > 0) continue; // belum waktunya

      push({
        id: `opp_followup_${o.id}`,
        severity: sisa < -3 ? 'WARNING' : 'INFO',
        icon: 'phone-call',
        judul: sisa === 0
          ? `Waktunya follow-up: ${o.title}`
          : `Follow-up tertunda ${Math.abs(sisa)} hari: ${o.title}`,
        pesan: `${o.company ? o.company + ' · ' : ''}Satu pesan singkat hari ini sering menentukan tembus atau tidaknya peluang.`,
        aksiLabel: 'Buka Peluang',
        aksi: "App.navigate('income')",
      });
    }

    // --- 4. Follow-up negosiasi kreditur -----------------------------
    for (const d of (s.debts || [])) {
      const negs = Array.isArray(d.negotiations) ? d.negotiations : [];
      if (negs.length === 0) continue;
      const n = negs[negs.length - 1];
      if (!n.followUp) continue;
      if (['AGREED', 'REJECTED'].indexOf(n.status) !== -1) continue;
      const sisa = H.daysBetween(today, n.followUp);
      if (sisa > 0) continue;

      push({
        id: `neg_followup_${d.id}_${n.followUp}`,
        severity: 'WARNING',
        icon: 'scale',
        judul: sisa === 0
          ? `Waktunya menagih jawaban: ${d.name}`
          : `Negosiasi ${d.name} belum dijawab ${Math.abs(sisa)} hari`,
        pesan: 'Bila tetap tidak direspons, kamu berhak mengadu ke OJK di 157 atau WhatsApp 081-157-157-157.',
        aksiLabel: 'Buka Utang',
        aksi: "App.navigate('debts')",
      });
    }

    // --- 5. Misi harian belum disentuh --------------------------------
    const misiHariIni = (s.missions || {})[today] || [];
    const belum = misiHariIni.filter(m => !m.completed && !m.skipped).length;
    if (misiHariIni.length > 0 && belum === misiHariIni.length) {
      push({
        id: 'missions_untouched',
        severity: 'INFO', icon: 'target',
        judul: `${belum} misi menunggu hari ini`,
        pesan: 'Tidak perlu semuanya. Pilih satu yang paling mudah lebih dulu.',
        aksiLabel: 'Lihat Misi',
        aksi: "App.navigate('missions')",
      });
    }

    // --- 6. Review mingguan (PRD §9) ---------------------------------
    if (typeof FinanceEngine !== 'undefined') {
      const reviewDay = FinanceEngine.pendingReview(s);
      if (reviewDay) {
        push({
          id: `weekly_review_${reviewDay}`,
          severity: 'INFO', icon: 'clipboard-check',
          judul: `Review Pekan ${Math.ceil(reviewDay / 7)} sudah bisa dibuka`,
          pesan: 'Lihat apa yang berubah selama tujuh hari terakhir sebelum melanjutkan.',
          aksiLabel: 'Buka Review',
          aksi: `App.review.open(${reviewDay})`,
        });
      }
    }

    // --- 7. Pengeluaran non-esensial melebihi ambang (PRD §21) --------
    if (a && a.essentialBurn > 0 && a.nonEssential > a.essentialBurn * 0.5) {
      push({
        id: 'expense_spike',
        severity: 'INFO', icon: 'scissors',
        judul: 'Pengeluaran non-pokok bulan ini cukup besar',
        // Nada tidak menghakimi (PRD §7.4 & §21). Kalimat sengaja bebas dari
        // kata bermuatan penilaian — diuji otomatis oleh features_test.js.
        pesan: `Tercatat ${H.formatRp(a.nonEssential)} di luar kebutuhan pokok bulan ini. Silakan lihat sendiri mana yang masih sepadan dan mana yang bisa ditunda.`,
        aksiLabel: 'Tinjau Pengeluaran',
        aksi: "App.navigate('expenses')",
      });
    }

    // --- 8. Program 30 hari tuntas (PRD §24) --------------------------
    const day = H.currentDay((s.meta || {}).startDate);
    if (day >= 30 && !((s.meta || {}).plan90Seen)) {
      push({
        id: 'day30_complete',
        severity: 'INFO', icon: 'trophy',
        judul: 'Kamu sampai di hari ke-30',
        pesan: 'Saatnya menyusun rencana 90 hari agar momentum ini tidak berhenti di sini.',
        aksiLabel: 'Susun Rencana 90 Hari',
        aksi: "App.navigate('plan'); App.plan90.scrollTo();",
      });
    }

    // --- 9. Belum pernah backup (PRD §30 — data hanya di perangkat) ---
    const settings = s.settings || {};
    if (settings.backupReminderEnabled !== false) {
      const last = settings.lastExport;
      const jarak = settings.backupReminderDays || 7;
      const perlu = !last || H.daysBetween(last, today) >= jarak;
      const adaData = (s.debts || []).length > 0 || (s.incomes || []).length > 0;
      if (perlu && adaData) {
        push({
          id: 'backup_due',
          severity: 'WARNING', icon: 'save',
          judul: last ? 'Sudah waktunya backup lagi' : 'Data kamu belum pernah dicadangkan',
          pesan: 'Seluruh data hanya tersimpan di browser ini. Membersihkan riwayat browser akan menghapusnya.',
          aksiLabel: 'Export Sekarang',
          aksi: "App.settings.exportData()",
        });
      }
    }

    // Buang yang sudah ditutup pengguna hari ini.
    const dismissed = ((s.meta || {}).notifDismissed) || {};
    const hasil = items.filter(n => !(n.dismissible && dismissed[n.id] === today));

    hasil.sort((a1, b1) =>
      NotifyCenter.SEVERITY_ORDER[a1.severity] - NotifyCenter.SEVERITY_ORDER[b1.severity]);
    return hasil;
  },

  /** Jumlah pengingat yang perlu tindakan — untuk badge di navigasi. */
  count(state) { return NotifyCenter.build(state).length; },

  urgentCount(state) {
    return NotifyCenter.build(state).filter(n => n.severity === 'CRITICAL').length;
  },

  /** Tandai satu pengingat sebagai ditutup untuk hari ini saja. */
  dismiss(state, id) {
    if (!state.meta) state.meta = {};
    if (!state.meta.notifDismissed) state.meta.notifDismissed = {};
    state.meta.notifDismissed[id] = H.today();

    // Bersihkan catatan lama agar tidak menumpuk di localStorage.
    const batas = H.addDays(H.today(), -14);
    for (const [k, v] of Object.entries(state.meta.notifDismissed)) {
      if (v < batas) delete state.meta.notifDismissed[k];
    }
  },
};

if (typeof module !== 'undefined' && module.exports) { module.exports = { NotifyCenter }; }
