'use strict';

// ============================================================
// SCREENS — Modul Antarmuka Tambahan
// ============================================================
// Berkas ini memperluas objek App dengan modul-modul yang diminta PRD
// tetapi belum pernah dibangun:
//
//   App.notifications  Pusat pengingat in-app          (PRD §27)
//   App.review         Review mingguan hari 7/14/21/28 (PRD §9)
//   App.plan90         Rencana 90 hari pasca-program   (PRD §24)
//   App.emergency      Mode darurat terstruktur        (PRD §29)
//   App.monthly        Laporan bulanan                 (PRD §26)
//   App.a11y           Focus trap & bantuan navigasi   (PRD §47)
//   App.pwa            Tombol pasang aplikasi
//   App.missionSkip    Lewati misi disertai alasan     (PRD §14)
//
// Dimuat SETELAH app.js. Karena seluruh <script> bersifat sinkron dan
// App.init() baru berjalan pada DOMContentLoaded, seluruh modul di sini
// sudah terpasang sebelum aplikasi dijalankan.
// ============================================================

Object.assign(App, {

  // ==========================================================
  // PEMBARUAN APLIKASI
  // ==========================================================
  // Pengguna tidak seharusnya perlu tahu cara membersihkan cache browser
  // untuk mendapatkan versi terbaru. Modul ini memantau service worker,
  // dan begitu versi baru siap, menawarkan tombol muat ulang.
  sw: {
    _reg: null,
    versi: null,

    pantau(reg) {
      App.sw._reg = reg;
      App.sw.bacaVersi();

      // Versi baru sudah terpasang dan menunggu giliran.
      if (reg.waiting && navigator.serviceWorker.controller) {
        App.sw.tawarkan();
      }

      reg.addEventListener('updatefound', function () {
        const baru = reg.installing;
        if (!baru) return;
        baru.addEventListener('statechange', function () {
          // `controller` yang sudah ada menandakan ini pembaruan, bukan
          // pemasangan pertama. Pemasangan pertama tidak perlu ditawari
          // muat ulang karena pengguna baru saja membuka halamannya.
          if (baru.state === 'installed' && navigator.serviceWorker.controller) {
            App.sw.tawarkan();
          }
        });
      });
    },

    /** Ambil nomor versi dari service worker untuk ditampilkan di Pengaturan. */
    bacaVersi() {
      const aktif = navigator.serviceWorker && navigator.serviceWorker.controller;
      if (!aktif || typeof MessageChannel === 'undefined') return;
      try {
        const ch = new MessageChannel();
        ch.port1.onmessage = function (e) {
          App.sw.versi = (e.data && e.data.version) || null;
          const el = document.getElementById('app-version-text');
          if (el && App.sw.versi) el.textContent = 'Versi ' + App.sw.versi;
        };
        aktif.postMessage({ type: 'GET_VERSION' }, [ch.port2]);
      } catch (e) { /* tidak kritis */ }
    },

    tawarkan() {
      if (document.getElementById('update-banner')) return;

      const bar = document.createElement('div');
      bar.id = 'update-banner';
      bar.setAttribute('data-update-banner', '');
      bar.setAttribute('role', 'status');
      bar.innerHTML = `
        <div class="update-banner-teks">
          <strong>Versi baru tersedia</strong>
          <span>Muat ulang untuk memakai perbaikan terbaru. Datamu tidak terpengaruh.</span>
        </div>
        <div class="update-banner-aksi">
          <button class="btn btn-primary btn-sm" onclick="App.sw.terapkan()">Muat Ulang</button>
          <button class="btn btn-ghost btn-sm" onclick="App.sw.tunda()">Nanti</button>
        </div>`;
      document.body.appendChild(bar);
      requestAnimationFrame(() => bar.classList.add('tampil'));
      App.a11y && App.a11y.announce('Versi baru aplikasi tersedia');
    },

    terapkan() {
      const reg = App.sw._reg;
      const btn = document.querySelector('#update-banner .btn-primary');
      if (btn) { btn.disabled = true; btn.textContent = 'Memuat…'; }

      if (reg && reg.waiting) {
        // Service worker baru akan mengambil alih, lalu pendengar
        // `controllerchange` di app.js memuat ulang halaman satu kali.
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        // Jaring pengaman bila pergantian tidak terjadi.
        setTimeout(function () { window.location.reload(); }, 2500);
      } else {
        window.location.reload();
      }
    },

    tunda() {
      const bar = document.getElementById('update-banner');
      if (bar) { bar.classList.remove('tampil'); setTimeout(() => bar.remove(), 250); }
    },
  },

  // ==========================================================
  // PUSAT PENGINGAT (PRD §27)
  // ==========================================================
  notifications: {
    render() {
      const wadah = document.getElementById('notif-container');
      if (!wadah) return;

      const daftar = NotifyCenter.build(App.state);
      if (daftar.length === 0) { wadah.innerHTML = ''; App.notifications.updateBadge(0); return; }

      wadah.innerHTML = daftar.map(n => `
        <div class="notif-card notif-${n.severity.toLowerCase()}" role="${n.severity === 'CRITICAL' ? 'alert' : 'status'}">
          <div class="notif-icon" aria-hidden="true">${Icons[n.icon] || Icons.bell}</div>
          <div class="notif-body">
            <div class="notif-title">${H.escHtml(n.judul)}</div>
            <div class="notif-text">${H.escHtml(n.pesan)}</div>
          </div>
          <div class="notif-actions">
            <button class="btn btn-primary btn-sm" onclick="${n.aksi}">${H.escHtml(n.aksiLabel)}</button>
            ${n.dismissible ? `
              <button class="notif-dismiss" onclick="App.notifications.dismiss('${n.id}')"
                      aria-label="Tutup pengingat: ${H.escHtml(n.judul)}" title="Tutup untuk hari ini">&times;</button>` : ''}
          </div>
        </div>
      `).join('');

      App.notifications.updateBadge(daftar.length);
      App.refreshIcons && App.refreshIcons();
    },

    updateBadge(jumlah) {
      const n = jumlah != null ? jumlah : NotifyCenter.count(App.state);
      const mendesak = NotifyCenter.urgentCount(App.state);
      document.querySelectorAll('[data-notif-badge]').forEach(el => {
        if (n > 0) {
          el.textContent = n > 9 ? '9+' : String(n);
          el.style.display = '';
          el.classList.toggle('badge-urgent', mendesak > 0);
          el.setAttribute('aria-label', `${n} pengingat menunggu`);
        } else {
          el.style.display = 'none';
          el.removeAttribute('aria-label');
        }
      });
    },

    dismiss(id) {
      NotifyCenter.dismiss(App.state, id);
      App.save();
      App.notifications.render();
    },

    refresh() { App.notifications.render(); },
  },

  // ==========================================================
  // REVIEW MINGGUAN (PRD §9)
  // ==========================================================
  review: {
    open(reviewDay) {
      const hari = reviewDay || FinanceEngine.pendingReview(App.state);
      if (!hari) {
        App.alert({
          title: 'Belum Ada Review Tertunda',
          message: 'Review mingguan terbuka otomatis di hari ke-7, 14, 21, dan 28.',
          type: 'info'
        });
        return;
      }

      const r = FinanceEngine.weeklyReview(App.state, hari);
      const pekan = Math.ceil(hari / 7);

      const baris = (label, nilai, warna) => `
        <div class="review-row">
          <span class="review-row-label">${label}</span>
          <span class="review-row-value" ${warna ? `style="color:${warna}"` : ''}>${nilai}</span>
        </div>`;

      App.openModal(`
        <div class="modal-title">Review Pekan ${pekan}</div>
        <div class="modal-sub">Hari ${r.hariAwal}–${r.reviewDay} · ${H.formatDate(r.tglAwal)} s.d. ${H.formatDate(r.tglAkhir)}</div>

        <div class="review-progress" role="img" aria-label="${r.persenMisi} persen misi pekan ini selesai">
          <div class="review-progress-bar"><div class="review-progress-fill" style="width:${r.persenMisi}%"></div></div>
          <div class="review-progress-text">${r.misiSelesai} dari ${r.misiTotal} misi selesai (${r.persenMisi}%)</div>
        </div>

        <div class="review-card">
          ${baris('Pemasukan pekan ini', H.formatRp(r.totalIncome), 'var(--green-600)')}
          ${baris('Pengeluaran pekan ini', H.formatRp(r.totalPengeluaran))}
          ${baris('Dibayarkan ke utang', H.formatRp(r.bayarUtang), 'var(--teal-700)')}
          ${baris('Transaksi pemasukan', `${r.jumlahTransaksiIncome} kali`)}
          ${baris('Peluang baru dicatat', `${r.peluangBaru}`)}
        </div>

        <div class="review-note">${H.escHtml(r.catatan)}</div>

        <div class="form-group" style="margin-top:var(--space-4)">
          <label class="form-label" for="review-reflection">Satu hal yang ingin kamu ubah pekan depan (opsional)</label>
          <textarea class="form-input form-textarea" id="review-reflection"
                    placeholder="mis. Mulai outreach sebelum jam 10 pagi"></textarea>
        </div>

        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Nanti Saja</button>
          <button class="btn btn-primary flex-1" onclick="App.review.complete(${hari})">Selesai Review</button>
        </div>
      `);
    },

    complete(hari) {
      const s = App.state;
      if (!s.meta.reviewsDone) s.meta.reviewsDone = [];
      if (s.meta.reviewsDone.indexOf(hari) === -1) s.meta.reviewsDone.push(hari);

      const el = document.getElementById('review-reflection');
      const catatan = el ? String(el.value || '').trim() : '';
      if (catatan) {
        if (!s.meta.reviewNotes) s.meta.reviewNotes = {};
        s.meta.reviewNotes[hari] = { text: catatan, date: H.today() };
      }

      App.save();
      App.closeModal();
      App.notifications.refresh();
      App.toast(`Review Pekan ${Math.ceil(hari / 7)} tersimpan ✓`, 'success');
    },
  },

  // ==========================================================
  // RENCANA 90 HARI (PRD §24)
  // ==========================================================
  plan90: {
    render() {
      const wadah = document.getElementById('plan90-container');
      if (!wadah) return;

      const p = FinanceEngine.plan90(App.state);
      const day = p.mulaiHari;
      const terbuka = day >= 22; // ditawarkan sejak fase Debt Attack

      if (!terbuka) {
        wadah.innerHTML = `
          <div class="plan90-locked">
            <div class="plan90-locked-icon" aria-hidden="true">${Icons['calendar-range']}</div>
            <div class="plan90-locked-title">Rencana 90 Hari terbuka di Hari ke-22</div>
            <div class="plan90-locked-text">
              Rencana lanjutan disusun dari angka nyata perjalananmu, bukan target karangan.
              Sekarang kamu di Hari ${day} — teruskan dulu, datanya sedang terkumpul.
            </div>
          </div>`;
        return;
      }

      wadah.innerHTML = `
        <div class="plan90-intro">
          <div class="plan90-intro-title">Setelah Hari ke-30, perjalanan belum selesai</div>
          <div class="plan90-intro-text">
            Tiga puluh hari cukup untuk memetakan kondisi dan menyalakan arus kas.
            Membangun stabilitas butuh lebih panjang. Target di bawah dihitung dari posisimu sekarang.
          </div>
        </div>

        <div class="plan90-targets">
          <div class="plan90-target">
            <div class="plan90-target-label">Target pemasukan rutin</div>
            <div class="plan90-target-value">${H.formatRp(p.targets.recurring)}<span>/bln</span></div>
            <div class="plan90-target-sub">Sekarang: ${H.formatRp(p.posisi.recurringMonthly)}/bln</div>
          </div>
          <div class="plan90-target">
            <div class="plan90-target-label">Target penurunan utang</div>
            <div class="plan90-target-value">${H.formatRp(p.targets.debtCut)}</div>
            <div class="plan90-target-sub">Sisa sekarang: ${H.formatRp(p.posisi.totalDebt)}</div>
          </div>
          <div class="plan90-target">
            <div class="plan90-target-label">Target dana darurat</div>
            <div class="plan90-target-value">${H.formatRp(p.targets.emergency)}</div>
            <div class="plan90-target-sub">Setara 1 bulan biaya pokok</div>
          </div>
        </div>

        <div class="plan90-months">
          ${p.months.map(m => `
            <div class="plan90-month">
              <div class="plan90-month-head">
                <span class="plan90-month-no">${m.no}</span>
                <div>
                  <div class="plan90-month-name">${H.escHtml(m.nama)}</div>
                  <div class="plan90-month-focus">${H.escHtml(m.fokus)}</div>
                </div>
              </div>
              <div class="plan90-month-target">Target: ${H.escHtml(m.target)}</div>
              <ul class="plan90-steps">
                ${m.langkah.map(l => `<li>${H.escHtml(l)}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;margin-top:var(--space-4)">
          <button class="btn btn-outline btn-sm" onclick="App.plan90.editTargets()">Sesuaikan Target Sendiri</button>
          <button class="btn btn-ghost btn-sm" onclick="App.plan90.resetTargets()">Kembalikan Target Otomatis</button>
        </div>
      `;
      App.refreshIcons && App.refreshIcons();

      // Tandai sudah dilihat agar pengingat "hari ke-30" berhenti muncul.
      if (day >= 30 && !App.state.meta.plan90Seen) {
        App.state.meta.plan90Seen = true;
        App.save();
      }
    },

    editTargets() {
      const p = FinanceEngine.plan90(App.state);
      App.openModal(`
        <div class="modal-title">Sesuaikan Target 90 Hari</div>
        <div class="modal-sub">Kamu paling tahu kondisimu. Target boleh berbeda dari hitungan otomatis.</div>

        <div class="form-group">
          <label class="form-label" for="p90-recurring">Target pemasukan rutin per bulan</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
            <input type="number" class="form-input" id="p90-recurring" value="${p.targets.recurring}" min="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label" for="p90-debtcut">Target penurunan pokok utang</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
            <input type="number" class="form-input" id="p90-debtcut" value="${p.targets.debtCut}" min="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label" for="p90-emergency">Target dana darurat</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
            <input type="number" class="form-input" id="p90-emergency" value="${p.targets.emergency}" min="0"></div>
        </div>

        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.plan90.saveTargets()">Simpan Target</button>
        </div>
      `);
    },

    saveTargets() {
      App.state.meta.plan90Targets = {
        recurring: H.parseRp(document.getElementById('p90-recurring').value),
        debtCut: H.parseRp(document.getElementById('p90-debtcut').value),
        emergency: H.parseRp(document.getElementById('p90-emergency').value),
      };
      App.save();
      App.closeModal();
      App.plan90.render();
      App.toast('Target 90 hari diperbarui ✓', 'success');
    },

    async resetTargets() {
      const ok = await App.confirm({
        title: 'Kembalikan Target Otomatis?',
        message: 'Target yang kamu tetapkan sendiri akan diganti dengan hitungan berdasarkan kondisi keuanganmu saat ini.',
        confirmText: 'Kembalikan',
        type: 'warning'
      });
      if (!ok) return;
      delete App.state.meta.plan90Targets;
      App.save();
      App.plan90.render();
      App.toast('Target dikembalikan ke hitungan otomatis', 'info');
    },

    scrollTo() {
      App.navigate('plan');
      setTimeout(() => {
        const el = document.getElementById('plan90-container');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250);
    },
  },

  // ==========================================================
  // MODE DARURAT (PRD §29)
  // ==========================================================
  emergency: {
    /**
     * Checklist bertahan hidup. Urutannya mengikuti hierarki PRD §7.2:
     * kebutuhan dasar dan kemampuan mencari nafkah dilindungi lebih dulu,
     * baru pembayaran utang. Tidak ada saran yang berisiko atau ilegal.
     */
    LANGKAH: [
      {
        id: 'pangan',
        judul: 'Amankan makan untuk 3 hari ke depan',
        detail: 'Hitung kebutuhan makan paling sederhana untuk seluruh anggota keluarga selama tiga hari. Ini didahulukan sebelum kewajiban apa pun.',
      },
      {
        id: 'tempat',
        judul: 'Pastikan tempat tinggal aman pekan ini',
        detail: 'Bila sewa menunggak, bicarakan langsung dengan pemilik sebelum jatuh tempo. Kesepakatan lisan yang jujur biasanya lebih mudah didapat sebelum menunggak.',
      },
      {
        id: 'kerja',
        judul: 'Lindungi alat cari nafkah',
        detail: 'Jangan jual barang yang kamu pakai untuk bekerja — motor untuk ojek, laptop untuk desain, alat servis. Menjualnya menutup jalan pemasukan berikutnya.',
      },
      {
        id: 'orang',
        judul: 'Hubungi satu orang yang bisa dipercaya',
        detail: 'Ceritakan kondisimu apa adanya kepada satu orang: keluarga, teman dekat, atau tokoh yang kamu percayai. Menanggung sendirian membuat keputusan makin buruk.',
      },
      {
        id: 'stop',
        judul: 'Berhenti menambah utang baru',
        detail: 'Pinjaman baru untuk menutup pinjaman lama memperbesar masalah, bukan menyelesaikannya. Tahan dulu sampai arus kas bergerak.',
      },
      {
        id: 'cair',
        judul: 'Tandai barang yang aman dijual',
        detail: 'Barang bernilai yang tidak dipakai bekerja: perhiasan, elektronik cadangan, perabot berlebih. Jual yang paling cepat laku lebih dulu.',
      },
      {
        id: 'uang',
        judul: 'Cari satu pemasukan dalam 48 jam',
        detail: 'Kerja harian, ojek, kurir, bantu jualan tetangga, jasa bersih-bersih. Tidak perlu ideal — yang penting uang masuk dan momentum kembali.',
      },
      {
        id: 'kreditur',
        judul: 'Beri tahu kreditur sebelum ditagih',
        detail: 'Menghubungi lebih dulu adalah arahan resmi OJK dan dinilai sebagai itikad baik. Menghilang justru mempersulit negosiasi nanti.',
      },
    ],

    open() {
      const s = App.state;
      const ceklis = (s.meta && s.meta.emergencyChecklist) || {};
      const a = FinanceEngine.assess(s);

      App.openModal(`
        <div class="emergency-head">
          <div class="emergency-icon" aria-hidden="true">${Icons['life-buoy']}</div>
          <div>
            <div class="modal-title" style="margin:0">Mode Darurat</div>
            <div class="modal-sub" style="margin:0">Bertahan dulu. Sisanya bisa menyusul.</div>
          </div>
        </div>

        <div class="emergency-status">
          ${a.runwayDays !== null
            ? `Kas tersisa untuk sekitar <strong>${a.runwayDays} hari</strong> dengan biaya pokok ${H.formatRp(a.essentialBurn)}/bulan.`
            : 'Biaya hidup pokok belum kamu isi, jadi sisa hari bertahan belum bisa dihitung.'}
        </div>

        <div class="emergency-list" role="list">
          ${App.emergency.LANGKAH.map((l, i) => `
            <label class="emergency-item ${ceklis[l.id] ? 'done' : ''}" role="listitem" for="em-${l.id}">
              <input type="checkbox" id="em-${l.id}" ${ceklis[l.id] ? 'checked' : ''}
                     onchange="App.emergency.toggle('${l.id}', this.checked)">
              <div>
                <div class="emergency-item-title"><span class="emergency-no">${i + 1}</span> ${H.escHtml(l.judul)}</div>
                <div class="emergency-item-detail">${H.escHtml(l.detail)}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="emergency-help">
          <div class="emergency-help-title">Bila penagihan sudah tidak wajar</div>
          <div class="emergency-help-text">
            Ancaman, kekerasan, penyebaran data, atau menghubungi kontakmu tanpa izin adalah pelanggaran.
            Laporkan ke <strong>OJK 157</strong> atau WhatsApp <strong>081-157-157-157</strong>, dan untuk
            teror digital ke <strong>patrolisiber.id</strong>.
          </div>
        </div>

        <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;margin-top:var(--space-4)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal();App.sos.open('breathing')">Tenangkan Diri Dulu</button>
          <button class="btn btn-primary flex-1" onclick="App.closeModal();App.navigate('missions')">Lihat Misi Hari Ini</button>
        </div>
      `);
      App.refreshIcons && App.refreshIcons();
    },

    toggle(id, nilai) {
      const s = App.state;
      if (!s.meta.emergencyChecklist) s.meta.emergencyChecklist = {};
      if (nilai) s.meta.emergencyChecklist[id] = H.today();
      else delete s.meta.emergencyChecklist[id];
      App.save();

      const el = document.getElementById('em-' + id);
      if (el && el.closest('.emergency-item')) {
        el.closest('.emergency-item').classList.toggle('done', !!nilai);
      }
    },
  },

  // ==========================================================
  // LAPORAN BULANAN (PRD §26)
  // ==========================================================
  monthly: {
    render(bulanKey) {
      const wadah = document.getElementById('monthly-report');
      if (!wadah) return;

      const bulanTersedia = FinanceEngine.availableMonths(App.state);
      const dipilih = bulanKey || App.monthly._current || bulanTersedia[0];
      App.monthly._current = dipilih;

      const r = FinanceEngine.monthlyReport(App.state, dipilih);
      const labelKat = {
        food: 'Makan', housing: 'Tempat tinggal', utilities: 'Listrik & air',
        transport: 'Transportasi', comm: 'Komunikasi', eating_out: 'Makan di luar',
        entertainment: 'Hiburan', shopping: 'Belanja', health: 'Kesehatan',
        debt_interest: 'Bunga utang', other: 'Lainnya',
      };
      const maks = r.kategoriTerurut.length ? r.kategoriTerurut[0][1] : 1;

      const baris = (label, nilai, warna, tebal) => `
        <div class="mr-row">
          <span class="mr-label">${label}</span>
          <span class="mr-value" style="${warna ? `color:${warna};` : ''}${tebal ? 'font-weight:800;' : ''}">${nilai}</span>
        </div>`;

      wadah.innerHTML = `
        <div class="mr-toolbar">
          <label class="mr-select-label" for="monthly-select">Bulan</label>
          <select class="form-input form-select" id="monthly-select" onchange="App.monthly.render(this.value)">
            ${bulanTersedia.map(b => {
              const [y, m] = b.split('-').map(Number);
              const nama = new Date(y, m - 1, 1).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
              return `<option value="${b}" ${b === dipilih ? 'selected' : ''}>${nama}</option>`;
            }).join('')}
          </select>
          <button class="btn btn-outline btn-sm" onclick="App.monthly.print()">Cetak / PDF</button>
        </div>

        <div class="mr-grid">
          <div class="mr-card">
            <div class="mr-card-title">Arus Kas</div>
            ${baris('Total pemasukan', H.formatRp(r.totalIncome), 'var(--green-600)')}
            ${baris('— berulang', H.formatRp(r.incomeRecurring))}
            ${baris('Pengeluaran pokok', H.formatRp(r.pengeluaranEsensial))}
            ${baris('Pengeluaran non-pokok', H.formatRp(r.pengeluaranNonEsensial))}
            ${baris('Pokok utang dibayar', H.formatRp(r.debtPokok), 'var(--teal-700)')}
            ${baris('Beban bunga', H.formatRp(r.debtBunga), 'var(--red-600)')}
            <div class="mr-divider"></div>
            ${baris('Arus kas bersih', H.formatRp(r.arusKasBersih),
              r.arusKasBersih >= 0 ? 'var(--green-600)' : 'var(--red-600)', true)}
          </div>

          <div class="mr-card">
            <div class="mr-card-title">Aktivitas Pemulihan</div>
            ${baris('Misi diselesaikan', `${r.misiSelesai} / ${r.misiTotal}`)}
            ${baris('Misi dilewati', `${r.misiDilewati}`)}
            ${baris('Hari dengan misi tuntas', `${r.hariAktif} hari`)}
            ${baris('Peluang baru', `${r.peluangBaru}`)}
            ${baris('Peluang berhasil', `${r.peluangMenang}`, 'var(--green-600)')}
            ${baris('Transaksi pemasukan', `${r.jumlahTransaksiIncome} kali`)}
            <div class="mr-divider"></div>
            ${baris('Sisa utang', H.formatRp(r.sisaUtang), r.sisaUtang === 0 ? 'var(--green-600)' : '', true)}
          </div>
        </div>

        ${r.kategoriTerurut.length ? `
          <div class="mr-card" style="margin-top:var(--space-4)">
            <div class="mr-card-title">Ke Mana Uang Pergi Bulan Ini</div>
            ${r.kategoriTerurut.map(([k, v]) => `
              <div class="mr-bar-row">
                <div class="mr-bar-label">${labelKat[k] || k}</div>
                <div class="mr-bar-track"><div class="mr-bar-fill" style="width:${Math.round((v / maks) * 100)}%"></div></div>
                <div class="mr-bar-value">${H.formatRp(v)}</div>
              </div>`).join('')}
            <div class="mr-hint">Ini bukan penilaian benar atau salah — hanya gambaran agar kamu bisa memilih mana yang masih sepadan.</div>
          </div>` : `
          <div class="mr-card" style="margin-top:var(--space-4)">
            <div class="mr-empty">Belum ada pengeluaran tercatat pada ${r.label}.</div>
          </div>`}
      `;
    },

    print() {
      Exporter.printReport(App.state, 'bulanan', App.monthly._current);
    },
  },

  // ==========================================================
  // AKSESIBILITAS (PRD §47)
  // ==========================================================
  a11y: {
    _lastFocus: null,

    /**
     * Kurung fokus keyboard di dalam sebuah dialog. Tanpa ini, pengguna
     * keyboard dan pembaca layar bisa "keluar" dari modal ke konten di
     * belakangnya yang seharusnya tidak dapat diakses.
     */
    trap(container) {
      if (!container) return;
      App.a11y._lastFocus = document.activeElement;

      const bisaFokus = () => Array.from(container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(el => el.offsetParent !== null || el === document.activeElement);

      const pertama = bisaFokus()[0];
      if (pertama) setTimeout(() => pertama.focus(), 60);

      container._trapHandler = (e) => {
        if (e.key !== 'Tab') return;
        const items = bisaFokus();
        if (items.length === 0) return;
        const awal = items[0], akhir = items[items.length - 1];
        if (e.shiftKey && document.activeElement === awal) { e.preventDefault(); akhir.focus(); }
        else if (!e.shiftKey && document.activeElement === akhir) { e.preventDefault(); awal.focus(); }
      };
      container.addEventListener('keydown', container._trapHandler);
    },

    release(container) {
      if (container && container._trapHandler) {
        container.removeEventListener('keydown', container._trapHandler);
        delete container._trapHandler;
      }
      const kembali = App.a11y._lastFocus;
      App.a11y._lastFocus = null;
      if (kembali && typeof kembali.focus === 'function' && document.contains(kembali)) {
        setTimeout(() => kembali.focus(), 30);
      }
    },

    /** Umumkan perubahan penting ke pembaca layar. */
    announce(pesan) {
      let live = document.getElementById('a11y-live');
      if (!live) {
        live = document.createElement('div');
        live.id = 'a11y-live';
        live.className = 'sr-only';
        live.setAttribute('aria-live', 'polite');
        live.setAttribute('aria-atomic', 'true');
        document.body.appendChild(live);
      }
      live.textContent = '';
      setTimeout(() => { live.textContent = pesan; }, 60);
    },
  },

  // ==========================================================
  // PASANG APLIKASI (PWA)
  // ==========================================================
  pwa: {
    _prompt: null,

    init() {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        App.pwa._prompt = e;
        App.pwa.toggleButton(true);
      });
      window.addEventListener('appinstalled', () => {
        App.pwa._prompt = null;
        App.pwa.toggleButton(false);
        App.toast('Aplikasi berhasil dipasang di perangkatmu ✓', 'success');
      });
      // Sudah berjalan sebagai aplikasi terpasang.
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        App.pwa.toggleButton(false);
      }
    },

    toggleButton(tampil) {
      document.querySelectorAll('[data-pwa-install]').forEach(el => {
        el.style.display = tampil ? '' : 'none';
      });
    },

    async install() {
      if (!App.pwa._prompt) {
        App.alert({
          title: 'Pasang Lewat Menu Browser',
          message: 'Browser ini belum menawarkan pemasangan otomatis.\n\nAndroid (Chrome): menu ⋮ → "Tambahkan ke layar utama".\niPhone (Safari): tombol Bagikan → "Add to Home Screen".',
          type: 'info'
        });
        return;
      }
      App.pwa._prompt.prompt();
      const hasil = await App.pwa._prompt.userChoice;
      App.pwa._prompt = null;
      if (hasil && hasil.outcome === 'accepted') App.pwa.toggleButton(false);
    },
  },

  // ==========================================================
  // LEWATI MISI (PRD §14 & §41)
  // ==========================================================
  missionSkip: {
    ALASAN: [
      { id: 'tidak_relevan', label: 'Tidak relevan dengan situasiku' },
      { id: 'sudah_dilakukan', label: 'Sudah kulakukan di luar aplikasi' },
      { id: 'tidak_sempat', label: 'Tidak sempat hari ini' },
      { id: 'sakit', label: 'Sedang sakit / berhalangan' },
      { id: 'tidak_mampu', label: 'Belum sanggup secara biaya atau tenaga' },
      { id: 'lainnya', label: 'Alasan lain' },
    ],

    open(id) {
      const misi = (App.state.missions[H.today()] || []).find(m => m.id === id);
      if (!misi) return;

      App.openModal(`
        <div class="modal-title">Lewati Misi Ini</div>
        <div class="modal-sub">"${H.escHtml(misi.title)}"</div>

        <div class="skip-note">
          Melewati misi tidak mengurangi progres dan tidak me-reset harimu.
          Alasannya dipakai untuk menyesuaikan misi berikutnya, bukan untuk menilaimu.
        </div>

        <div class="form-group" style="margin-top:var(--space-4)">
          <label class="form-label" for="skip-reason">Alasan</label>
          <select class="form-input form-select" id="skip-reason">
            ${App.missionSkip.ALASAN.map(a => `<option value="${a.id}">${a.label}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="skip-note">Catatan (opsional)</label>
          <input class="form-input" id="skip-note" placeholder="mis. Kantor kreditur tutup hari ini">
        </div>

        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.missionSkip.confirm('${id}')">Lewati Misi</button>
        </div>
      `);
    },

    confirm(id) {
      const misi = (App.state.missions[H.today()] || []).find(m => m.id === id);
      if (!misi) return;

      const sel = document.getElementById('skip-reason');
      const note = document.getElementById('skip-note');
      const alasanId = sel ? sel.value : 'lainnya';
      const label = (App.missionSkip.ALASAN.find(a => a.id === alasanId) || {}).label || alasanId;

      misi.skipped = true;
      misi.completed = false;
      misi.skipReason = label;
      misi.skipNote = note ? String(note.value || '').trim() : '';
      misi.skippedAt = H.today();

      App.save();
      App.closeModal();
      App.renderMissions();
      App.notifications.refresh();
      App.a11y.announce(`Misi ${misi.title} dilewati`);
      App.toast('Misi dilewati — tidak apa-apa, lanjutkan yang lain', 'info');
    },

    undo(id) {
      const misi = (App.state.missions[H.today()] || []).find(m => m.id === id);
      if (!misi) return;
      misi.skipped = false;
      delete misi.skipReason;
      delete misi.skipNote;
      delete misi.skippedAt;
      App.save();
      App.renderMissions();
      App.toast('Misi dikembalikan ke daftar aktif', 'info');
    },
  },
});
