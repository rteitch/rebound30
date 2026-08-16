// ============================================================
// MAIN APP
// ============================================================
const App = {
  refreshIcons() {
    // Pure inline SVGs are rendered natively by the browser at 0ms.
    // Safe no-op hook for backward compatibility.
  },
  state: null,
  currentScreen: 'dashboard',
  
  
  // SOS / Mental & Legal First Aid Controller
  sos: {
    breathingActive: false,
    breathingTimer: null,
    breathingStep: 0, // 0: Inhale (4s), 1: Hold (4s), 2: Exhale (4s), 3: Hold (4s)
    breathingSecondsLeft: 4,

    open(tab = 'breathing') {
      const modal = document.getElementById('modal-sos');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
      this.switchTab(tab);
    },

    closeOverlay(e) { if (e && e.target && e.target.id === 'modal-sos') this.close(); },

    close() {
      const modal = document.getElementById('modal-sos');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
      this.stopBreathing();
    },

    switchTab(tab) {
      const tabs = ['breathing', 'legal', 'triage'];
      tabs.forEach(t => {
        const btn = document.getElementById(`sos-tab-${t}`);
        const view = document.getElementById(`sos-view-${t}`);
        if (btn) btn.classList.toggle('active', t === tab);
        if (view) view.style.display = (t === tab) ? 'block' : 'none';
      });
      if (tab !== 'breathing') {
        this.stopBreathing();
      }
    },

    toggleBreathing() {
      if (this.breathingActive) {
        this.stopBreathing();
      } else {
        this.startBreathing();
      }
    },

    startBreathing() {
      this.breathingActive = true;
      this.breathingStep = 0;
      this.breathingSecondsLeft = 4;
      const label = document.getElementById('btn-toggle-breathing-label');
      if (label) label.textContent = 'Hentikan Latihan';
      else {
        const btn = document.getElementById('btn-toggle-breathing');
        if (btn) btn.textContent = 'Hentikan Latihan';
      }
      this.runBreathingStep();
    },

    stopBreathing() {
      this.breathingActive = false;
      if (this.breathingTimer) clearInterval(this.breathingTimer);
      const circle = document.getElementById('breathing-circle');
      if (circle) {
        circle.classList.remove('inhale', 'exhale');
      }
      const textEl = document.getElementById('breathing-instruction');
      const timerEl = document.getElementById('breathing-timer');
      const label = document.getElementById('btn-toggle-breathing-label');
      if (textEl) textEl.textContent = 'Tarik Napas...';
      if (timerEl) timerEl.textContent = '4s';
      if (label) label.textContent = 'Mulai Latihan (Box Breathing 4-4-4-4)';
      else {
        const btn = document.getElementById('btn-toggle-breathing');
        if (btn) btn.textContent = 'Mulai Latihan (Box Breathing 4-4-4-4)';
      }
    },

    runBreathingStep() {
      if (!this.breathingActive) return;
      const steps = [
        { text: 'Tarik Napas Perlahan...', class: 'inhale' },
        { text: 'Tahan Napas...', class: 'inhale' },
        { text: 'Hembuskan Perlahan...', class: 'exhale' },
        { text: 'Tahan Kosong...', class: 'exhale' }
      ];

      const current = steps[this.breathingStep];
      const circle = document.getElementById('breathing-circle');
      const textEl = document.getElementById('breathing-instruction');
      const timerEl = document.getElementById('breathing-timer');

      if (circle) {
        circle.classList.remove('inhale', 'exhale');
        circle.classList.add(current.class);
      }
      if (textEl) textEl.textContent = current.text;

      this.breathingSecondsLeft = 4;
      if (timerEl) timerEl.textContent = `${this.breathingSecondsLeft}s`;

      if (this.breathingTimer) clearInterval(this.breathingTimer);
      this.breathingTimer = setInterval(() => {
        this.breathingSecondsLeft--;
        if (timerEl) timerEl.textContent = `${this.breathingSecondsLeft}s`;

        if (this.breathingSecondsLeft <= 0) {
          clearInterval(this.breathingTimer);
          this.breathingStep = (this.breathingStep + 1) % 4;
          this.runBreathingStep();
        }
      }, 1000);
    }
  },

  init() {
    // Kegagalan menyimpan harus terlihat oleh pengguna. Tanpa ini,
    // localStorage yang penuh atau mode incognito membuat progres
    // hilang tanpa peringatan apa pun.
    Store.onError = (message) => {
      this.toast(message, 'error');
      const banner = document.getElementById('backup-banner-container');
      if (banner) {
        banner.innerHTML = `
          <div class="backup-banner" style="border-color:var(--red-300);background:var(--red-50)" role="alert">
            <div class="backup-banner-text" style="color:var(--red-800)">${H.escHtml(message)}</div>
            <button class="btn btn-primary btn-sm" onclick="App.settings.exportData()">Export Sekarang</button>
          </div>`;
      }
    };

    let stored = Store.get();
    this.state = stored ? stored : Store.defaultState();

    // Rotasi riwayat misi supaya localStorage tidak tumbuh tanpa batas
    // pada pemakaian jangka panjang (data lebih dari 400 hari dibuang).
    this.pruneMissionHistory();

    // Hide splash after short delay
    setTimeout(() => {
      document.getElementById('splash').classList.add('fade-out');
      setTimeout(() => document.getElementById('splash').remove(), 500);
    }, 1200);
    
    if (!this.state.meta.onboardingDone) {
      this.showOnboarding();
    } else {
      this.showApp();
    }

    // Tombol pasang aplikasi (PWA) — README menjanjikannya sejak awal
    // tetapi penanganan beforeinstallprompt belum pernah ada.
    this.pwa && this.pwa.init();

    // Smart Virtual Keyboard Focus Centering
    document.addEventListener('focusin', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        setTimeout(() => {
          e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 280);
      }
    });

    // Global Keyboard Shortcut: Escape to close active modals & drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const sos = document.getElementById('modal-sos');
        if (sos && sos.style.display !== 'none') {
          App.sos.close();
          return;
        }
        const backdrop = document.getElementById('modal-backdrop');
        if (backdrop && backdrop.classList.contains('open')) {
          App.closeModal();
          return;
        }
        const drawer = document.getElementById('mobile-drawer');
        if (drawer && drawer.classList.contains('open')) {
          App.closeMobileDrawer();
          return;
        }
        if (window.StoriesUI && typeof window.StoriesUI.closeReader === 'function') {
          window.StoriesUI.closeReader();
        }
      }
    });
  },
  
  /**
   * Buang riwayat misi yang lebih tua dari batas simpan. Tanpa ini,
   * objek `missions` bertambah satu entri setiap hari selamanya dan
   * pada akhirnya bisa memenuhi kuota localStorage.
   */
  MISSION_HISTORY_DAYS: 400,

  pruneMissionHistory() {
    const missions = this.state && this.state.missions;
    if (!missions || typeof missions !== 'object') return;
    const cutoff = H.addDays(H.today(), -this.MISSION_HISTORY_DAYS);
    for (const key of Object.keys(missions)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(key) && key < cutoff) delete missions[key];
    }
  },

  save() {
    // Check new achievements
    const newAch = Achievements.check(this.state);
    if (newAch.length > 0) {
      this.state.achievements = [...(this.state.achievements || []), ...newAch];
      newAch.forEach(id => {
        const def = Achievements.DEFINITIONS.find(d => d.id === id);
        if (def) this.toast(`Pencapaian Baru: ${def.name}`, 'success');
      });
    }
    return Store.save(this.state);
  },
  
  showOnboarding() {
    document.getElementById('screen-onboarding').classList.add('active');
    document.getElementById('app').style.display = 'none';
    document.getElementById('bottom-nav').style.display = 'none';
    this.ob.renderProgress();
    this.refreshIcons();
  },
  
  showApp() {
    document.getElementById('screen-onboarding').classList.remove('active');
    document.getElementById('app').style.display = '';
    document.getElementById('bottom-nav').style.display = '';
    this.navigate('dashboard');
    this.refreshIcons();
  },
  
  toggleMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (drawer && backdrop) {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        this.closeMobileDrawer();
      } else {
        drawer.classList.add('open');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
  },
  
  closeMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  },

  navigate(screen) {
    this.currentScreen = screen;
    this.closeMobileDrawer();
    
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const targetScreen = document.getElementById('screen-' + screen);
    if (targetScreen) targetScreen.classList.add('active');
    
    // Update nav in sidebar
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navEl = document.getElementById('nav-' + screen);
    if (navEl) navEl.classList.add('active');
    
    // Update nav in bottom bar
    document.querySelectorAll('.bottom-nav-item').forEach(n => n.classList.remove('active'));
    const bnavEl = document.getElementById('bnav-' + screen);
    if (bnavEl) bnavEl.classList.add('active');

    // Update nav in mobile drawer
    document.querySelectorAll('.drawer-nav-item').forEach(n => n.classList.remove('active'));
    const dnavEl = document.getElementById('dnav-' + screen);
    if (dnavEl) dnavEl.classList.add('active');
    
    const titles = {
      dashboard: 'Dashboard', missions: 'Misi Harian', debts: 'Audit Utang',
      income: 'Pemasukan', expenses: 'Pengeluaran', assets: 'Aset',
      plan: 'Rencana 30 Hari', reports: 'Laporan', stories: 'Kisah Bangkit', settings: 'Pengaturan',
    };
    const title = titles[screen] || screen;
    const el1 = document.getElementById('topbar-title');
    const el2 = document.getElementById('mobile-title');
    if (el1) el1.textContent = title;
    if (el2) el2.textContent = title;
    
    // Update day badges
    const day = H.currentDay(this.state.meta.startDate);
    const dayText = `Hari ${day} / 30`;
    const el3 = document.getElementById('sidebar-day');
    const el4 = document.getElementById('mobile-day-badge');
    const el5 = document.getElementById('topbar-day');
    const el6 = document.getElementById('drawer-day-badge');
    if (el3) el3.textContent = dayText;
    if (el4) el4.textContent = `Hari ${day}`;
    if (el5) el5.textContent = dayText;
    if (el6) el6.textContent = `Hari ${day} / 30 · ${this.state.meta.currentPhase || 'Pemulihan'}`;
    
    // Render the screen
    const renders = {
      dashboard: () => this.renderDashboard(),
      missions: () => this.renderMissions(),
      debts: () => this.debts.render(),
      income: () => this.income.render(),
      expenses: () => this.expenses.render(),
      assets: () => this.assets.render(),
      plan: () => this.renderPlan(),
      reports: () => this.renderReports(),
      stories: () => Stories.render(), settings: () => this.renderSettings(),
    };
    if (renders[screen]) renders[screen]();

    // Modul tambahan yang menempel pada layar tertentu.
    if (screen === 'plan' && this.plan90) this.plan90.render();
    if (screen === 'reports' && this.monthly) this.monthly.render();
    if (this.notifications) this.notifications.updateBadge();

    this.refreshIcons();

    // Pindah layar harus terasa seketika. Tanpa `behavior:'instant'`,
    // aturan global `html { scroll-behavior: smooth }` membuat halaman
    // panjang ikut beranimasi menggulir ke atas setiap kali menekan menu —
    // isi layar tampak berkelebat sebelum berhenti.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  },
  
  // ---- DASHBOARD ----
  renderDashboard() {
    const s = this.state;
    const day = H.currentDay(s.meta.startDate);
    const phase = H.getPhase(day);
    const { score, components } = ScoreEngine.calculate(s);
    
    // Header
    const today = new Date();
    const dateStr = today.toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
    document.getElementById('dash-date').textContent = dateStr;
    
    const greetings = ['Hari ke', 'Rebound'];
    document.getElementById('dash-greeting').innerHTML = `Hari ke-${day} dari 30 &nbsp;·&nbsp; <span style="font-size:15px;font-weight:600;color:#a7f3d0;">Fase ${phase.id}: ${phase.name}</span>`;
    
    // Score ring
    document.getElementById('dash-score').textContent = score;
    const circumference = 226.2;
    const offset = circumference - (score / 100) * circumference;
    document.getElementById('score-ring-fill').style.strokeDashoffset = offset;
    document.getElementById('dash-phase-badge').textContent = `Fase ${phase.id} · ${phase.name}`;
    document.getElementById('dash-focus').textContent = (components.coaching || ScoreEngine.getFocus(components));

    // Daily Mindset Anchor Banner
    const mindsetAnchor = MindsetEngine.getDailyAnchor(day);
    const mindsetContainer = document.getElementById('dash-mindset-anchor');
    if (mindsetContainer) {
      mindsetContainer.innerHTML = `
        <div class="daily-mindset-banner">
          <div class="mindset-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Jangkar Mental & Mindset Hari ke-${day} (${phase.name})
          </div>
          <h3 class="mindset-theme">${H.escHtml(mindsetAnchor.theme)}</h3>
          <p class="mindset-principle">${H.escHtml(mindsetAnchor.principle)}</p>
          <div class="mindset-quote-box">
            <p class="mindset-quote-text">"${H.escHtml(mindsetAnchor.quote)}"</p>
            <div class="mindset-quote-author">— ${H.escHtml(mindsetAnchor.author)}</div>
          </div>
        </div>
      `;
    }

    
    // Phase strip
    const phases = [
      { name: 'Survive', days: '1–4' },
      { name: 'Cash', days: '5–14' },
      { name: 'Stabilize', days: '15–21' },
      { name: 'Attack', days: '22–30' },
    ];
    document.getElementById('phase-strip').innerHTML = phases.map((p,i) => `
      <div class="phase-item ${i < phase.id ? 'done' : i === phase.id ? 'current' : ''}">
        ${i < phase.id ? '✓' : ''} ${p.name}<br>
        <span style="font-size:10px;font-weight:400">${p.days}</span>
      </div>
    `).join('');
    
    // Stats (Sinkronisasi Dinamis 100% Real-Time)
    const baseIncome = s.profile.monthlyIncome || 0;
    const extraIncome = s.incomes.filter(i=>H.isThisMonth(i.date)).reduce((a,i)=>a+i.amount, 0);
    const totalIncome = baseIncome + extraIncome;

    const essential = Object.values(s.expenses.essential || {}).reduce((a,v)=>a+v, 0);
    const nonEssential = (s.expenses.records || []).filter(e=>H.isThisMonth(e.date)).reduce((a,e)=>a+e.amount, 0);
    const totalExpenses = essential + nonEssential;

    const totalDebt = (s.debts || []).reduce((a,d)=>a+d.remaining, 0);
    const cash = s.profile.cash || 0;
    const monthlyBurn = totalExpenses > 0 ? totalExpenses : essential;
    const runway = monthlyBurn > 0 ? Math.round((cash / monthlyBurn) * 30) : 999;
    const netCashflow = totalIncome - totalExpenses;
    
    // 1. Kas Tunai
    const statCashEl = document.getElementById('stat-cash');
    if (statCashEl) statCashEl.textContent = H.formatRp(cash);
    
    // 2. Pemasukan
    const statIncomeEl = document.getElementById('stat-income');
    if (statIncomeEl) {
      statIncomeEl.textContent = H.formatRp(totalIncome);
    }
    
    // 3. Pengeluaran
    const expEl = document.getElementById('stat-expenses');
    if (expEl) {
      expEl.textContent = H.formatRp(totalExpenses);
      expEl.className = 'stat-value ' + (totalIncome > 0 && totalExpenses > totalIncome ? 'negative' : 'warning');
    }
    
    // 4. Total Utang & Runway Subtext
    const statDebtEl = document.getElementById('stat-debt');
    if (statDebtEl) {
      statDebtEl.textContent = totalDebt === 0 ? 'Rp 0 (Lunas)' : H.formatRp(totalDebt);
    }
    
    const runwayEl = document.getElementById('stat-runway');
    if (runwayEl) {
      if (totalDebt === 0) {
        runwayEl.innerHTML = '<span style="color:var(--green-600);font-weight:700;">Bebas Utang Total</span>';
      } else if (netCashflow < 0) {
        runwayEl.innerHTML = `<span style="color:var(--red-600);">Defisit ${H.formatRp(Math.abs(netCashflow))}/bln (Runway: ${runway} hr)</span>`;
      } else {
        runwayEl.innerHTML = `<span style="color:var(--green-600);">Surplus +${H.formatRp(netCashflow)}/bln</span>`;
      }
    }

    // 5. Total Aset & Aset Likuid
    const totalAssets = (s.assets || []).reduce((a,x)=>a+x.value, 0);
    const liquidAssets = (s.assets || []).filter(a=>a.liquidatable && !a.keepForWork).reduce((a,x)=>a+x.value, 0);
    const statAssetsEl = document.getElementById('stat-assets');
    if (statAssetsEl) statAssetsEl.textContent = H.formatRp(totalAssets);
    const statAssetsSub = document.getElementById('stat-assets-sub');
    if (statAssetsSub) {
      statAssetsSub.innerHTML = liquidAssets > 0
        ? `<span style="color:var(--green-600);font-weight:600;">Bisa dijual: ${H.formatRp(liquidAssets)}</span>`
        : `<span>Kelola Aset →</span>`;
    }

    // 6. Indikator kesehatan finansial (PRD §12): kekayaan bersih, rasio
    // cicilan terhadap pemasukan (DTI), dan status runway. Ketiganya
    // diminta PRD sejak awal tetapi belum pernah ditampilkan.
    const vitalEl = document.getElementById('dash-vitals');
    if (vitalEl) {
      const a = FinanceEngine.assess(s);
      const warnaDti = { SEHAT: 'var(--green-600)', WASPADA: 'var(--amber-600)',
        BERAT: 'var(--red-600)', UNDEFINED: 'var(--color-text-muted)' }[a.dtiStatus];
      const warnaRunway = { SAFE: 'var(--green-600)', WARNING: 'var(--amber-600)',
        CRITICAL: 'var(--red-600)', UNKNOWN: 'var(--color-text-muted)' }[a.runwayStatus];

      vitalEl.innerHTML = `
        <div class="vital" title="Total aset dan kas dikurangi seluruh sisa utang">
          <div class="vital-label">Kekayaan Bersih</div>
          <div class="vital-value" style="color:${a.netPosition >= 0 ? 'var(--green-600)' : 'var(--red-600)'}">
            ${a.netPosition >= 0 ? '+' : ''}${H.formatRp(a.netPosition)}
          </div>
        </div>
        <div class="vital">
          <div class="vital-label">Cicilan vs Pemasukan</div>
          <div class="vital-value" style="color:${warnaDti}">
            ${a.dtiRatio === null ? '—' : Math.round(a.dtiRatio * 100) + '%'}
          </div>
          <div class="vital-sub">${H.escHtml(FinanceEngine.dtiLabel(a.dtiStatus))}</div>
        </div>
        <div class="vital">
          <div class="vital-label">Sisa Hari Bertahan</div>
          <div class="vital-value" style="color:${warnaRunway}">
            ${a.runwayDays === null ? '—' : a.runwayDays + ' hari'}
          </div>
          <div class="vital-sub">${H.escHtml(FinanceEngine.runwayLabel(a.runwayStatus))}</div>
        </div>
      `;
    }

    // 7. Pengingat hari ini (PRD §27)
    this.notifications && this.notifications.render();

    // Missions preview
    const todayMissions = ReboundEngine.generate(s);
    this.save();
    const done = todayMissions.filter(m=>m.completed).length;
    document.getElementById('missions-progress-text').textContent = `${done} / ${todayMissions.length} selesai`;
    
    document.getElementById('dash-missions').innerHTML = todayMissions.slice(0,3).map(m => `
      <div class="mission-card ${m.completed?'completed':''} priority-${m.priority.toLowerCase()}" id="dash-m-${m.id}">
        <div class="mission-header">
          <div class="mission-check" onclick="App.toggleMission('${m.id}')">
            ${m.completed ? '✓' : ''}
          </div>
          <div class="mission-content" style="flex:1">
            <div class="mission-type-label">${this.missionTypeLabel(m.type)} · <span class="badge badge-${m.priority.toLowerCase()}">${m.priority}</span></div>
            <div class="mission-title">${H.escHtml(m.title)}</div>
            <div style="margin-top:6px;">
              <button class="btn btn-sm btn-outline" style="font-size:11px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px;" onclick="event.stopPropagation(); App.missions.showGuide('${m.type}', '${m.id}')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;display:inline-block;vertical-align:middle;margin-right:4px;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Panduan & Template
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('') || '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="empty-state-title">Semua misi selesai!</div></div>';
    
    // Achievements
    const earned = (s.achievements || []);
    const earnedDefs = Achievements.DEFINITIONS.filter(d=>earned.includes(d.id));
    document.getElementById('dash-achievements').innerHTML = earnedDefs.slice(0,5).map(d=>`
      <div class="card-sm" style="text-align:center;padding:var(--space-3);min-width:80px;">
        <div class="achievement-icon">${Icons[d.icon] || Icons.award}</div>
        <div style="font-size:10px;font-weight:600;color:var(--color-text-secondary);margin-top:4px">${d.name}</div>
      </div>
    `).join('') || '<div style="font-size:13px;color:var(--color-text-muted)">Selesaikan misi harian untuk membuka pencapaian</div>';
    
    // Backup banner
    this.checkBackupBanner();
  },
  
  checkBackupBanner() {
    const container = document.getElementById('backup-banner-container');
    if (!container) return;
    const s = this.state.settings;
    if (!s.backupReminderEnabled) { container.innerHTML = ''; return; }
    const lastExport = s.lastExport;
    const days = s.backupReminderDays || 7;
    const needsBanner = !lastExport || H.daysBetween(lastExport, H.today()) >= days;
    if (!needsBanner) { container.innerHTML = ''; return; }
    const daysSince = lastExport ? H.daysBetween(lastExport, H.today()) : null;
    const msg = daysSince ? `Terakhir backup ${daysSince} hari yang lalu.` : `Kamu belum pernah backup data.`;
    container.innerHTML = `
      <div class="backup-banner">
        <div class="backup-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg></div>
        <div class="backup-text">
          <strong>Saatnya backup data</strong>
          <span>${msg} Export sekarang agar data tidak hilang jika browser dibersihkan.</span>
        </div>
        <button class="btn btn-sm btn-primary" onclick="App.settings.exportData()">Export</button>
      </div>
    `;
  },
  
  missionTypeLabel(type) {
    const map = {
      CLIENT_OUTREACH:'Cari Klien', JOB_APPLICATION:'Lamaran', FOLLOW_UP:'Follow-up',
      CUT_EXPENSE:'Hemat', TRACK_EXPENSE:'Catat', DEBT_REVIEW:'Review Utang',
      DEBT_PAYMENT:'Bayar Utang', NEGOTIATION:'Negosiasi', INCOME_TASK:'Cari Income',
      SELL_ASSET:'Jual Aset', SKILL_BUILDING:'Tingkatkan Skill', BUILD_RECURRING:'Income Rutin',
      NO_NEW_DEBT:'Jangan Berutang', MAP_FINANCES:'Petakan Finansial',
    };
    return map[type] || type;
  },
  
  
  toggleYesterdayMission(id) {
    const yKey = H.addDays(H.today(), -1);
    const missions = this.state.missions[yKey] || [];
    const m = missions.find(x => x.id === id);
    if (m) {
      m.completed = !m.completed;
      this.save();
      this.toast(m.completed ? 'Misi kemarin ditandai selesai! ✓' : 'Status misi kemarin diperbarui', 'info');
      this.renderMissions();
    }
  },

  toggleMission(id) {
    const today = H.today();
    const missions = this.state.missions[today] || [];
    const m = missions.find(x=>x.id===id);
    if (m) {
      m.completed = !m.completed;
      // Menyelesaikan misi otomatis membatalkan status "dilewati" —
      // sebuah misi tidak boleh tercatat selesai sekaligus dilewati.
      if (m.completed && m.skipped) {
        m.skipped = false;
        delete m.skipReason;
        delete m.skipNote;
        delete m.skippedAt;
      }
      this.save();
      if (m.completed) this.toast('Misi selesai! ✓', 'success');
      this.a11y && this.a11y.announce(
        `${m.title} ${m.completed ? 'ditandai selesai' : 'dibatalkan'}`);
      if (this.currentScreen === 'dashboard') {
        this.renderDashboard();
      } else if (this.currentScreen === 'missions') {
        this.renderMissions();
      }
      this.notifications && this.notifications.refresh();
      this.refreshIcons();
    }
  },
  
  // ---- MISSIONS ----
  renderMissions() {
    const s = this.state;
    const day = H.currentDay(s.meta.startDate);
    const phase = H.getPhase(day);
    
    // 1. Render Mindset Anchor on Missions Screen
    const mindsetAnchor = MindsetEngine.getDailyAnchor(day);
    const missionsMindsetEl = document.getElementById('missions-mindset-anchor');
    if (missionsMindsetEl) {
      missionsMindsetEl.innerHTML = `
        <div class="daily-mindset-banner" style="margin-bottom:var(--space-5);">
          <div class="mindset-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Jangkar Mental & Mindset Hari ke-${day} (${phase.name})
          </div>
          <h3 class="mindset-theme">${H.escHtml(mindsetAnchor.theme)}</h3>
          <p class="mindset-principle">${H.escHtml(mindsetAnchor.principle)}</p>
          <div class="mindset-quote-box">
            <p class="mindset-quote-text">"${H.escHtml(mindsetAnchor.quote)}"</p>
            <div class="mindset-quote-author">— ${H.escHtml(mindsetAnchor.author)}</div>
          </div>
        </div>
      `;
    }

    // 2. Date Subtitle
    const today = H.today();
    const todayFmt = new Date().toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long' });
    const subEl = document.getElementById('missions-date-subtitle');
    if (subEl) subEl.textContent = `Hari ini: ${todayFmt} · Hari ke-${day} dari 30`;
    
    // 3. Generate & Render Missions
    const missions = ReboundEngine.generate(s);
    this.save();
    
    // Counter badge
    const doneCount = missions.filter(m => m.completed).length;
    const skipCount = missions.filter(m => m.skipped && !m.completed).length;
    const badgeEl = document.getElementById('missions-counter-badge');
    if (badgeEl) {
      badgeEl.textContent = skipCount > 0
        ? `${doneCount} / ${missions.length} Selesai · ${skipCount} dilewati`
        : `${doneCount} / ${missions.length} Selesai`;
    }

    // 4. Streak
    const streak = ScoreEngine.getStreak(s);
    const streakContainer = document.getElementById('streak-container');
    if (streakContainer) {
      if (streak > 0) {
        streakContainer.innerHTML = `
          <div class="streak-banner">
            <div class="streak-icon" style="color:#EF4444;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg></div>
            <div class="streak-text">
              <div class="streak-days">${streak} Hari Beruntun</div>
              <div class="streak-label">Teruskan konsistensimu!</div>
            </div>
          </div>
        `;
      } else {
        streakContainer.innerHTML = '';
      }
    }
    
    const listEl = document.getElementById('missions-list');
    if (listEl) {
      listEl.innerHTML = missions.map(m => `
        <div class="mission-card ${m.completed?'completed':''} ${m.skipped?'skipped':''} priority-${m.priority.toLowerCase()} fade-in" id="m-${m.id}">
          <div class="mission-header">
            <div class="mission-check" onclick="App.toggleMission('${m.id}')"
                 role="checkbox" tabindex="0" aria-checked="${m.completed ? 'true' : 'false'}"
                 aria-label="Tandai selesai: ${H.escHtml(m.title)}"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.toggleMission('${m.id}')}">
              ${m.completed ? '✓' : ''}
            </div>
            <div class="mission-content" style="flex:1">
              <div class="mission-type-label">${this.missionTypeLabel(m.type)} · <span class="badge badge-${m.priority.toLowerCase()}">${m.priority}</span></div>
              <div class="mission-title">${H.escHtml(m.title)}</div>
              <div class="mission-description">${H.escHtml(m.desc)}</div>
              ${m.skipped ? `
                <div class="mission-skipped-note">
                  Dilewati hari ini — ${H.escHtml(m.skipReason || 'tanpa alasan')}${m.skipNote ? ': ' + H.escHtml(m.skipNote) : ''}
                </div>` : ''}
              <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">
                <button class="btn btn-sm btn-outline" style="font-size:11px;padding:3px 8px;display:inline-flex;align-items:center;gap:4px;" onclick="event.stopPropagation(); App.missions.showGuide('${m.type}', '${m.id}')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  Panduan & Template Siap Pakai
                </button>
                ${m.completed ? '' : (m.skipped ? `
                  <button class="btn btn-sm btn-ghost" style="font-size:11px;padding:3px 8px;" onclick="event.stopPropagation(); App.missionSkip.undo('${m.id}')">
                    Batalkan Lewati
                  </button>` : `
                  <button class="btn btn-sm btn-ghost" style="font-size:11px;padding:3px 8px;color:var(--color-text-secondary)" onclick="event.stopPropagation(); App.missionSkip.open('${m.id}')" aria-label="Lewati misi: ${H.escHtml(m.title)}">
                    Lewati
                  </button>`)}
              </div>
            </div>
          </div>
        </div>
      `).join('') || '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="empty-state-title">Semua misi selesai hari ini!</div><div class="empty-state-text">Luar biasa! Kembali lagi besok untuk misi baru.</div></div>';
    }

    // 5. History (Yesterday) — Only display if day > 1 and has yesterday data!
    const histContainer = document.getElementById('missions-history-container');
    const histListEl = document.getElementById('missions-history');
    if (histContainer && histListEl) {
      if (day > 1) {
        const yKey = H.addDays(H.today(), -1);
        const yMissions = s.missions[yKey] || [];
        
        if (yMissions.length > 0) {
          histContainer.style.display = 'block';
          histListEl.innerHTML = yMissions.map(m => `
            <div class="mission-card ${m.completed?'completed':''}" style="opacity:0.85" id="ym-${m.id}">
              <div class="mission-header">
                <div class="mission-check" onclick="App.toggleYesterdayMission('${m.id}')" title="Klik untuk ubah status misi kemarin">
                  ${m.completed?'✓':''}
                </div>
                <div class="mission-content" style="flex:1">
                  <div class="mission-title" style="font-size:13px;">${H.escHtml(m.title)}</div>
                  <div style="font-size:11px;color:var(--color-text-muted);">Misi Kemarin · ${m.completed ? '<span style="color:var(--teal-600);font-weight:600;">Selesai ✓</span>' : '<span style="color:var(--amber-600);">Terlewat (bisa dicentang jika sudah dikerjakan)</span>'}</div>
                </div>
              </div>
            </div>
          `).join('');
        } else {
          histContainer.style.display = 'none';
        }
      } else {
        // Day 1: Hide history container entirely
        histContainer.style.display = 'none';
      }
    }

    // 6. Plan Link Card at bottom
    const planLinkEl = document.getElementById('missions-plan-link');
    if (planLinkEl) {
      planLinkEl.innerHTML = `
        <div style="margin-top:var(--space-5);padding:var(--space-4);background:var(--slate-50);border:1px dashed var(--slate-300);border-radius:var(--radius-lg);text-align:center;">
          <div style="font-size:12.5px;color:var(--slate-600);margin-bottom:8px;">Ingin melihat gambaran target misi di fase-fase berikutnya?</div>
          <button class="btn btn-secondary btn-sm" onclick="App.navigate('plan')" style="font-size:12px;display:inline-flex;align-items:center;gap:6px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Lihat Roadmap Lengkap 30 Hari di Menu Rencana →
          </button>
        </div>
      `;
    }
  },

  // ---- PLAN & INTERACTIVE ROADMAP ----
  renderPlan() {
    const s = this.state;
    const currentDay = H.currentDay(s.meta.startDate);
    
    const planPhases = [
      {
        phaseNum: 1,
        title: 'Fase 1: Survive & Pemetaan Total (Hari 1 - 4)',
        badgeColor: 'var(--rose-600)',
        bgColor: 'var(--rose-50)',
        days: [
          { day: 1, focus: 'Audit Utang Jujur & Buang Gengsi', tasks: ['Catat semua utang tanpa rasa malu', 'Klasifikasikan bunga legal vs ilegal', 'Amankan dokumen & kontak kreditur'] },
          { day: 2, focus: 'Kunci Pengeluaran Esensial Keluarga', tasks: ['Hitung biaya makan & tempat tinggal', 'Hentikan pengeluaran bocor halus', 'Amankan kebutuhan pangan keluarga'] },
          { day: 3, focus: 'Stop Gali Lubang Tutup Lubang', tasks: ['Tolak tawaran pinjaman baru', 'Pelajari hak debitur POJK 22/2023', 'Siapkan mental hadapi penagihan'] },
          { day: 4, focus: 'Inventarisasi Aset & Kalkulasi Cash Runway', tasks: ['Catat barang yang bisa dicairkan', 'Hitung sisa hari bertahan hidup', 'Tentukan prioritas darurat'] },
        ]
      },
      {
        phaseNum: 2,
        title: 'Fase 2: Create Cash & Pemasukan Cepat (Hari 5 - 14)',
        badgeColor: 'var(--teal-600)',
        bgColor: 'var(--teal-50)',
        days: [
          { day: 5, focus: 'Ciptakan Uang Tunai Pertama (Cash Velocity)', tasks: ['Cari peluang kas masuk dlm 24-48 jam', 'Tawarkan jasa cepat atau jual barang', 'Catat setiap rupiah pemasukan'] },
          { day: 6, focus: 'Hukum Probabilitas Penawaran (Outreach)', tasks: ['Kirim 3 pesan penawaran ke calon klien', 'Follow-up kontak lama yang membutuhkan jasa', 'Catat progres di pipeline peluang'] },
          { day: 7, focus: 'Monetisasi Aset Menganggur', tasks: ['Iklankan barang non-produktif di marketplace/medsos', 'Gunakan hasil penjualan murni sbg buffer kas', 'Hindari menjual alat kerja utama'] },
          { day: 8, focus: 'Kualitas & Kejujuran Penawaran', tasks: ['Pastikan layanan/produk bernilai tinggi', 'Minta testimoni dari klien yang puas', 'Cari pelanggan berulang (repeat order)'] },
          { day: 9, focus: 'Disiplin Waktu & Kerja Produktif', tasks: ['Mulai aktivitas produktif lebih pagi', 'Fokus 80% waktu pada aktivitas menghasilkan uang', 'Hindari scroll medsos tanpa tujuan'] },
          { day: 10, focus: 'Ekspansi Kanal Pendapatan Tambahan', tasks: ['Daftar platform freelance / pekerjaan sampingan', 'Cari pekerjaan harian atau gig delivery', 'Jaga momentum arus kas masuk'] },
          { day: 11, focus: 'Follow-up Prospek yang Menunda', tasks: ['Kirim pesan follow-up ramah ke klien lama', 'Tawarkan promo atau diskon pembayaran cepat', 'Tutup kesepakatan tertunda'] },
          { day: 12, focus: 'Evaluasi Arus Kas Mingguan', tasks: ['Hitung total kas masuk vs biaya hidup minggu ini', 'Sesuaikan strategi jika target belum tercapai', 'Perpanjang napas runway keuangan'] },
          { day: 13, focus: 'Optimalkan Margin Keuntungan', tasks: ['Kurangi biaya produksi atau operasional', 'Fokus pada jasa/produk dengan margin terbesar', 'Simpan surplus kas di pos aman'] },
          { day: 14, focus: 'Evaluasi & Refleksi 2 Minggu Pertama', tasks: ['Review seluruh transaksi 14 hari terakhir', 'Rayakan kemenangan kecil & lencana tercapai', 'Persiapkan fase stabilisasi kas'] },
        ]
      },
      {
        phaseNum: 3,
        title: 'Fase 3: Stabilize & Pola Rutin (Hari 15 - 21)',
        badgeColor: 'var(--amber-600)',
        bgColor: 'var(--amber-50)',
        days: [
          { day: 15, focus: 'Pangkas Bocor Halus & Kunci Margin', tasks: ['Cek rekening koran/e-wallet untuk biaya tersembunyi', 'Matikan langganan yang tidak esensial', 'Kunci margin surplus kas minimal 20%'] },
          { day: 16, focus: 'Konversi Klien Insidental Jadi Klien Rutin', tasks: ['Tawarkan paket retainer / langganan bulanan', 'Bangun hubungan profesional jangka panjang', 'Amankan kepastian pemasukan bulan depan'] },
          { day: 17, focus: 'Hubungi Kreditur & Negosiasi Pokok Utang', tasks: ['Ajukan perpanjangan tenor / restrukturisasi', 'Minta penghapusan denda & bunga membengkak', 'Gunakan draf surat resmi Rebound 30'] },
          { day: 18, focus: 'Susun Jadwal Kerja Produktif Harian', tasks: ['Jadwalkan blok waktu pencarian nafkah', 'Hindari distraksi yang membuang energi mental', 'Pertahankan jam tidur & kesehatan fisik'] },
          { day: 19, focus: 'Bangun Dana Cadangan Darurat Mini', tasks: ['Sisihkan 10% pemasukan ke dana darurat likuid', 'Jangan gunakan uang ini kecuali kondisi medis', 'Tingkatkan ketenangan batin'] },
          { day: 20, focus: 'Uji Ketahanan Arus Kas Bulanan', tasks: ['Simulasikan skenario jika pemasukan telat 1 minggu', 'Pastikan stok pangan dan sewa tempat aman', 'Kuatkan pondasi sebelum bayar utang'] },
          { day: 21, focus: 'Kunci Rencana Serangan Pelunasan Utang', tasks: ['Pilih strategi pelunasan: Risk First / Avalanche / Snowball', 'Hitung alokasi dana peluru bulanan', 'Siapkan eksekusi fase terakhir'] },
        ]
      },
      {
        phaseNum: 4,
        title: 'Fase 4: Debt Attack & Kebebasan (Hari 22 - 30)',
        badgeColor: 'var(--indigo-600)',
        bgColor: 'var(--indigo-50)',
        days: [
          { day: 22, focus: 'Serang Utang Target Pertama', tasks: ['Alokasikan surplus kas ke target utang terpilih', 'Bayar hanya cicilan minimum pada utang lain', 'Simpan bukti transfer resmi'] },
          { day: 23, focus: 'Dokumentasikan Pengurangan Pokok Utang', tasks: ['Catat pembayaran di menu Audit Utang', 'Lihat penurunan total kewajiban', 'Rayakan milestone pengurangan utang'] },
          { day: 24, focus: 'Tingkatkan Kapasitas Peluru Kas', tasks: ['Cari peluang tambahan untuk memperbesar cicilan pokok', 'Lakukan negosiasi diskon lunas sekaligus (*haircut*)', 'Percepat tempo penyelesaian'] },
          { day: 25, focus: 'Metode Bola Salju (Fokus 1 Musuh)', tasks: ['Hancurkan utang target sampai lunas tuntas', 'Alihkan alokasi dana ke utang berikutnya', 'Bangun efek bola salju mental'] },
          { day: 26, focus: 'Cegah Kambuhnya Jebakan Utang', tasks: ['Tutup kartu kredit atau akun pinjol yang lunas', 'Hindari godaan konsumtif gaya hidup', 'Jaga pola hidup sederhana yang tangguh'] },
          { day: 27, focus: 'Susun Anggaran Keuangan Pasca-30 Hari', tasks: ['Buat proyeksi keuangan untuk 90 hari ke depan', 'Tetapkan target bebas utang total', 'Jaga disiplin pencatatan setiap hari'] },
          { day: 28, focus: 'Perkuat Jaringan & Hubungan Sosial', tasks: ['Perbaiki hubungan keluarga yang sempat tegang', 'Bantu sesama yang sedang mengalami kesulitan', 'Bangun reputasi dan integritas baru'] },
          { day: 29, focus: 'Audit Komparasi Sebelum vs Sesudah', tasks: ['Buka menu Laporan: Hari 1 vs Hari 29', 'Lihat lonjakan Rebound Score & ketahanan kas', 'Klaim lencana pencapaian akhir'] },
          { day: 30, focus: 'Rebound Menjadi Manusia Merdeka & Berbagi', tasks: ['Rayakan keberhasilan menyelesaikan 30 hari penuh', 'Tengok ke belakang dengan rasa syukur mendalam', 'Teruskan kebiasaan finansial tangguh selamanya'] },
        ]
      }
    ];

    let html = '';
    planPhases.forEach(phase => {
      html += `
        <div style="margin-bottom:var(--space-5);">
          <div style="font-size:13.5px;font-weight:800;color:var(--slate-800);margin-bottom:8px;display:flex;align-items:center;gap:8px;">
            <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${phase.badgeColor};"></span>
            <span>${phase.title}</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
      `;

      phase.days.forEach(item => {
        const d = item.day;
        const isToday = d === currentDay;
        const isDone = d < currentDay;
        const statusBadge = isDone 
          ? `<span class="badge badge-success" style="font-size:11px;white-space:nowrap;flex-shrink:0;padding:3px 9px;display:inline-flex;align-items:center;gap:4px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Telah Dilalui</span>
            </span>`
          : isToday 
            ? `<span class="badge badge-primary" style="font-size:11px;white-space:nowrap;flex-shrink:0;padding:3px 9px;display:inline-flex;align-items:center;gap:4px;animation:pulse 2s infinite;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Hari Ini</span>
              </span>`
            : `<span class="badge badge-secondary" style="font-size:11px;white-space:nowrap;flex-shrink:0;padding:3px 9px;display:inline-flex;align-items:center;gap:4px;color:var(--slate-600);background:var(--slate-100);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Mendatang</span>
              </span>`;

        html += `
          <div class="card" style="padding:14px 16px;border:1.5px solid ${isToday ? 'var(--teal-500)' : 'var(--slate-200)'};background:${isToday ? 'var(--teal-50)' : '#fff'};border-radius:var(--radius-xl);transition:all 0.2s ease;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px;">
              <div style="display:flex;align-items:flex-start;gap:10px;flex:1;min-width:0;">
                <div style="width:26px;height:26px;border-radius:50%;background:${isDone ? 'var(--green-600)' : isToday ? 'var(--teal-600)' : 'var(--slate-200)'};color:${isDone||isToday?'#fff':'var(--slate-600)'};font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">
                  ${isDone ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><polyline points="20 6 9 17 4 12"/></svg>' : d}
                </div>
                <div style="font-size:13px;font-weight:800;color:var(--color-text-primary);line-height:1.45;flex:1;">
                  Hari ke-${d}: ${item.focus}
                </div>
              </div>
              ${statusBadge}
            </div>

            <!-- Rincian Tugas Harian -->
            <div style="margin-left:36px;font-size:12px;color:var(--slate-600);line-height:1.55;">
              <ul style="margin:0;padding-left:16px;">
                ${item.tasks.map(t => `<li style="margin-bottom:3px;">${t}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    document.getElementById('plan-list').innerHTML = html;
  },
  
  // ---- REPORTS (LAPORAN FINANSIAL MENYELURUH 100% SINKRON) ----
  renderReports() {
    const s = this.state;
    const { score, components } = ScoreEngine.calculate(s);
    const snap = s.meta.snapshotDay1 || {};
    
    // 1. Data Sekarang
    const totalDebt = (s.debts || []).reduce((a,d)=>a+d.remaining,0);
    const origDebt = (s.debts || []).reduce((a,d)=>a+d.original,0);
    const income = (s.profile.monthlyIncome || 0) + (s.incomes || []).filter(i=>H.isThisMonth(i.date)).reduce((a,i)=>a+i.amount,0);
    
    const essExpenses = Object.values(s.expenses?.essential || {}).reduce((a,v)=>a+v,0);
    const nonEssExpenses = (s.expenses?.records || []).filter(e=>H.isThisMonth(e.date)).reduce((a,e)=>a+e.amount,0);
    const totalExpenses = essExpenses + nonEssExpenses;

    const totalAssets = (s.assets || []).reduce((a,x)=>a+x.value,0);
    const cash = s.profile.cash || 0;
    const netWorth = (cash + totalAssets) - totalDebt;
    const netCashflow = income - totalExpenses;

    // 2. Data Hari 1
    const snapIncome = snap.income !== undefined ? snap.income : s.profile.monthlyIncome || 0;
    const snapExpenses = snap.expenses !== undefined ? snap.expenses : essExpenses;
    const snapDebt = snap.debt !== undefined ? snap.debt : origDebt;
    const snapAssets = snap.assets !== undefined ? snap.assets : totalAssets;
    const snapCash = snap.cash !== undefined ? snap.cash : cash;
    const snapNetWorth = (snapCash + snapAssets) - snapDebt;
    const snapScore = snap.score !== undefined ? snap.score : 20;
    
    document.getElementById('report-compare').innerHTML = `
      <div class="report-before">
        <div class="report-label">Hari 1 (Baseline)</div>
        <div class="report-row">
          <div class="report-row-label">Uang Tunai (Kas)</div>
          <div class="report-row-value">${H.formatRp(snapCash)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Pemasukan / Bulan</div>
          <div class="report-row-value">${H.formatRp(snapIncome)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Pengeluaran / Bulan</div>
          <div class="report-row-value">${H.formatRp(snapExpenses)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Total Sisa Utang</div>
          <div class="report-row-value">${H.formatRp(snapDebt)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Total Estimasi Aset</div>
          <div class="report-row-value">${H.formatRp(snapAssets)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Kekayaan Bersih</div>
          <div class="report-row-value" style="color:${snapNetWorth >= 0 ? 'var(--green-700)' : 'var(--red-700)'}">${snapNetWorth >= 0 ? '+' : ''}${H.formatRp(snapNetWorth)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Rebound Score</div>
          <div class="report-row-value">${snapScore}/100</div>
        </div>
      </div>

      <div class="report-after">
        <div class="report-label" style="color:var(--teal-700)">Posisi Saat Ini</div>
        <div class="report-row">
          <div class="report-row-label">Uang Tunai (Kas)</div>
          <div class="report-row-value" style="font-weight:700;color:var(--teal-700)">${H.formatRp(cash)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Pemasukan / Bulan</div>
          <div class="report-row-value" style="font-weight:700;color:var(--green-600)">${H.formatRp(income)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Pengeluaran / Bulan</div>
          <div class="report-row-value" style="font-weight:700;color:${netCashflow >= 0 ? 'var(--color-text-primary)' : 'var(--red-600)'}">${H.formatRp(totalExpenses)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Total Sisa Utang</div>
          <div class="report-row-value" style="font-weight:700;color:${totalDebt === 0 ? 'var(--green-600)' : 'var(--red-600)'}">${totalDebt === 0 ? 'Lunas (Rp 0)' : H.formatRp(totalDebt)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Total Estimasi Aset</div>
          <div class="report-row-value" style="font-weight:700;color:var(--indigo-600)">${H.formatRp(totalAssets)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Kekayaan Bersih</div>
          <div class="report-row-value" style="font-weight:800;color:${netWorth >= 0 ? 'var(--green-600)' : 'var(--red-600)'}">${netWorth >= 0 ? '+' : ''}${H.formatRp(netWorth)}</div>
        </div>
        <div class="report-row">
          <div class="report-row-label">Rebound Score</div>
          <div class="report-row-value" style="color:var(--teal-700);font-size:1.3rem;font-weight:800">${score}/100</div>
        </div>
      </div>
    `;
    
    // Score breakdown
    const labels = { visibility:'Peta Finansial', cashflow:'Cashflow', income_activity:'Aktivitas Income', debt_control:'Kontrol Utang', expense_control:'Kontrol Pengeluaran', consistency:'Konsistensi' };
    document.getElementById('score-breakdown').innerHTML = Object.entries(components).map(([k,v])=>`
      <div class="score-bar-row">
        <div class="score-bar-label">${labels[k]||k}</div>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${v}%"></div></div>
        <div class="score-bar-value">${Math.round(v)}</div>
      </div>
    `).join('');
    
    // Achievements
    const earned = new Set(s.achievements || []);
    document.getElementById('achievements-grid').innerHTML = Achievements.DEFINITIONS.map(d=>`
      <div class="achievement-card ${earned.has(d.id)?'earned':'locked'}">
        <div class="achievement-icon">${Icons[d.icon] || Icons.award}</div>
        <div class="achievement-name">${d.name}</div>
      </div>
    `).join('');
  },
  
  
  // Catatan: controller `App.stories.switchTab` yang lama sudah dihapus.
  // Fungsi itu masih menunjuk elemen `story-content-shao` / `-tang`
  // dari versi 2-kisah, padahal layar Kisah kini sepenuhnya dirender
  // oleh modul Stories (js/stories.js) ke dalam #stories-root.

  copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        this.toast('Template berhasil disalin ke clipboard! ', 'success');
      }).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      this.fallbackCopy(text);
    }
  },
  
  fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-999999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      this.toast('Template berhasil disalin ke clipboard! ', 'success');
    } catch (e) {
      this.toast('Gagal menyalin otomatis. Silakan salin manual.', 'error');
    }
    document.body.removeChild(ta);
  },

  // ---- MISSIONS CONTROLLER ----
  missions: {
    showGuide(type, id) {
      const tmpl = ReboundEngine.MISSION_TEMPLATES[type];
      if (!tmpl) return;

      const stepsHtml = (tmpl.steps || []).map((s, idx) => `
        <div style="display:flex;gap:10px;margin-bottom:8px;font-size:13px;color:var(--slate-700);">
          <div style="width:22px;height:22px;border-radius:50%;background:var(--teal-100);color:var(--teal-800);font-weight:800;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${idx+1}</div>
          <div style="line-height:1.5;">${H.escHtml(s)}</div>
        </div>
      `).join('');

      const templateBlock = tmpl.templateText ? `
        <div style="margin-top:var(--space-4);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <div style="font-size:11.5px;font-weight:700;color:var(--teal-800);text-transform:uppercase;">${H.escHtml(tmpl.templateTitle || 'Template Siap Pakai')}</div>
            <button class="btn btn-sm btn-primary" onclick="App.copyText(decodeURIComponent('${encodeURIComponent(tmpl.templateText)}'))" style="font-size:11px;padding:3px 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;display:inline-block;vertical-align:middle;margin-right:4px;"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> Salin Template
            </button>
          </div>
          <textarea readonly class="form-input" style="width:100%;height:140px;font-size:12px;font-family:monospace;line-height:1.5;background:var(--slate-50);border:1px solid var(--slate-300);resize:none;">${H.escHtml(tmpl.templateText)}</textarea>
        </div>
      ` : '';

      const actionBtn = tmpl.actionTarget ? `
        <button class="btn btn-secondary flex-1" onclick="App.closeModal(); App.navigate('${tmpl.actionTarget}');">
          ${H.escHtml(tmpl.actionLabel || 'Buka Menu Terkait')} →
        </button>
      ` : '';

      App.openModal(`
        <div class="modal-title" style="margin-bottom:4px;font-size:1.15rem;">${H.escHtml(tmpl.title)}</div>
        <div style="font-size:12px;color:var(--color-text-muted);margin-bottom:var(--space-3);">
          Kategori: <strong>${App.missionTypeLabel(type)}</strong>
        </div>

        <!-- Why Box -->
        <div style="background:var(--teal-50);border-left:4px solid var(--teal-600);padding:var(--space-3) var(--space-4);border-radius:var(--radius-md);margin-bottom:var(--space-4);font-size:13px;color:var(--teal-950);line-height:1.5;">
          <strong>Mengapa Misi Ini Penting:</strong><br>
          ${H.escHtml(tmpl.why || tmpl.desc)}
        </div>

        <!-- Steps -->
        <div style="margin-bottom:var(--space-4);">
          <div style="font-size:11.5px;font-weight:700;color:var(--slate-500);text-transform:uppercase;margin-bottom:8px;">Langkah Praktis:</div>
          ${stepsHtml}
        </div>

        <!-- Template -->
        ${templateBlock}

        <!-- Actions -->
        <div style="display:flex;gap:var(--space-2);margin-top:var(--space-5);">
          ${actionBtn}
          <button class="btn btn-primary" onclick="App.toggleMission('${id}'); App.closeModal();">
            Tandai Selesai ✓
          </button>
        </div>
      `);
    }
  },

  // ---- SETTINGS ----
  renderSettings() {
    const s = this.state.settings;
    document.getElementById('backup-reminder-toggle').checked = s.backupReminderEnabled;
    document.getElementById('backup-days-select').value = String(s.backupReminderDays || 7);
    document.getElementById('last-export-text').textContent = s.lastExport 
      ? `Terakhir export: ${H.formatDate(s.lastExport)}`
      : 'Belum pernah di-export';
  },
  
  // ---- MODALS ----
  openModal(html) {
    const backdrop = document.getElementById('modal-backdrop');
    const body = document.getElementById('modal-body');
    body.innerHTML = html;
    setTimeout(() => this.refreshIcons(), 0);
    backdrop.classList.add('open');

    // Aksesibilitas (PRD §47): kunci fokus keyboard di dalam dialog agar
    // pengguna keyboard dan pembaca layar tidak "bocor" ke konten latar
    // yang sedang tidak dapat diakses.
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    document.body.classList.add('modal-open');
    this.a11y && this.a11y.trap(body);
  },

  closeModal(e) {
    const backdrop = document.getElementById('modal-backdrop');
    if (!e || e.target === backdrop) {
      backdrop.classList.remove('open');
      backdrop.removeAttribute('aria-modal');
      document.body.classList.remove('modal-open');
      this.a11y && this.a11y.release(document.getElementById('modal-body'));
    }
  },
  
  // ---- TOAST (WITH CRISP SVG ICONS & SMOOTH ANIMATION) ----
  toast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const el = document.createElement('div');
    el.className = `toast ${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><polyline points="20 6 9 17 4 12"/></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
    } else {
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }

    el.innerHTML = `
      <span class="toast-icon">${iconSvg}</span>
      <span style="flex:1;">${H.escHtml(msg)}</span>
    `;

    container.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(-10px) scale(0.95)';
      el.style.transition = 'all 0.25s ease';
      setTimeout(() => el.remove(), 260);
    }, 3200);
  },

  // ---- CUSTOM STYLED CONFIRM DIALOG (REPLACES NATIVE CONFIRM) ----
  confirm({ title = 'Konfirmasi', message = 'Apakah Anda yakin?', confirmText = 'Lanjutkan', cancelText = 'Batal', type = 'warning' } = {}) {
    return new Promise((resolve) => {
      const existing = document.getElementById('custom-confirm-modal');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'custom-confirm-modal';
      overlay.className = 'custom-dialog-overlay';

      let iconSvg = '';
      if (type === 'danger') {
        iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
      } else if (type === 'warning') {
        iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
      } else {
        iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
      }

      overlay.innerHTML = `
        <div class="custom-dialog-card">
          <div class="custom-dialog-icon-wrap ${type}">
            ${iconSvg}
          </div>
          <div class="custom-dialog-title">${H.escHtml(title)}</div>
          <div class="custom-dialog-message">${H.escHtml(message)}</div>
          <div class="custom-dialog-actions">
            <button id="dialog-btn-cancel" class="btn btn-secondary" style="flex:1;">${H.escHtml(cancelText)}</button>
            <button id="dialog-btn-confirm" class="btn ${type === 'danger' ? 'btn-danger' : 'btn-primary'}" style="flex:1;">${H.escHtml(confirmText)}</button>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      const cleanup = (result) => {
        overlay.remove();
        resolve(result);
      };

      document.getElementById('dialog-btn-cancel').onclick = () => cleanup(false);
      document.getElementById('dialog-btn-confirm').onclick = () => cleanup(true);
      overlay.onclick = (e) => { if (e.target === overlay) cleanup(false); };
    });
  },

  // ---- CUSTOM STYLED ALERT DIALOG (REPLACES NATIVE ALERT) ----
  alert({ title = 'Informasi', message = '', buttonText = 'Mengerti', type = 'info' } = {}) {
    return new Promise((resolve) => {
      const existing = document.getElementById('custom-alert-modal');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'custom-alert-modal';
      overlay.className = 'custom-dialog-overlay';

      let iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
      if (type === 'success') {
        iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><polyline points="20 6 9 17 4 12"/></svg>';
      }

      overlay.innerHTML = `
        <div class="custom-dialog-card">
          <div class="custom-dialog-icon-wrap ${type}">
            ${iconSvg}
          </div>
          <div class="custom-dialog-title">${H.escHtml(title)}</div>
          <div class="custom-dialog-message">${H.escHtml(message)}</div>
          <div class="custom-dialog-actions">
            <button id="dialog-btn-ok" class="btn btn-primary btn-full">${H.escHtml(buttonText)}</button>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      const cleanup = () => {
        overlay.remove();
        resolve(true);
      };

      document.getElementById('dialog-btn-ok').onclick = cleanup;
      overlay.onclick = (e) => { if (e.target === overlay) cleanup(); };
    });
  },
  
  // ---- FULLSCREEN ----
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(()=>{});
    } else {
      document.exitFullscreen().catch(()=>{});
    }
  },
  
  // ============================================================
  // ONBOARDING
  // ============================================================
  ob: {
    step: 0,
    totalSteps: 8,
    tempDebt: null,
    pendingDebts: [],
    selectedSkills: [],
    selectedEmployment: null,
    selectedGoal: null,
    
    renderProgress() {
      const el = document.getElementById('ob-progress');
      let html = '';
      for (let i = 0; i < this.totalSteps; i++) {
        const cls = i < this.step ? 'done' : i === this.step ? 'current' : '';
        html += `<div class="progress-dot ${cls}"></div>`;
      }
      el.innerHTML = html;
    },
    
    showStep(n) {
      document.querySelectorAll('.onboarding-step').forEach(s => s.classList.remove('active'));
      const el = document.getElementById('ob-step-' + n);
      if (el) el.classList.add('active');
      this.step = n;
      this.renderProgress();
    },
    
    next() {
      this.saveCurrentStep();
      if (this.step < this.totalSteps - 1) this.showStep(this.step + 1);
    },
    
    prev() {
      if (this.step > 0) this.showStep(this.step - 1);
    },
    
    saveCurrentStep() {
      const s = App.state;
      if (this.step === 1 && this.selectedEmployment) s.profile.employment = this.selectedEmployment;
      if (this.step === 2) {
        s.profile.monthlyIncome = H.parseRp(document.getElementById('ob-income').value);
        s.profile.incomeFrequency = document.getElementById('ob-income-freq').value;
      }
      if (this.step === 3) {
        s.expenses.essential = {
          food: H.parseRp(document.getElementById('ob-exp-food').value),
          housing: H.parseRp(document.getElementById('ob-exp-housing').value),
          utilities: H.parseRp(document.getElementById('ob-exp-utilities').value),
          transport: H.parseRp(document.getElementById('ob-exp-transport').value),
          comm: H.parseRp(document.getElementById('ob-exp-comm').value),
          other: H.parseRp(document.getElementById('ob-exp-other').value),
        };
      }
      if (this.step === 5) {
        s.profile.cash = H.parseRp(document.getElementById('ob-cash').value);
        const assetVal = H.parseRp(document.getElementById('ob-assets-value').value);
        if (assetVal > 0 && !s.assets.find(a=>a.name==='Aset Lainnya (estimasi)')) {
          s.assets.push({ id: H.uid(), name: 'Aset Lainnya (estimasi)', category: 'other', value: assetVal, liquidatable: true, keepForWork: false, notes: '' });
        }
      }
      if (this.step === 6) s.profile.skills = [...this.selectedSkills];
      if (this.step === 7 && this.selectedGoal) s.profile.goal = this.selectedGoal;
      App.save();
    },
    
    selectOption(field, value, el) {
      el.closest('.option-grid').querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
      if (field === 'employment') this.selectedEmployment = value;
      if (field === 'goal') this.selectedGoal = value;
    },
    
    toggleSkill(skill, el) {
      el.classList.toggle('selected');
      if (this.selectedSkills.includes(skill)) {
        this.selectedSkills = this.selectedSkills.filter(s=>s!==skill);
      } else {
        this.selectedSkills.push(skill);
      }
    },
    
    showAddDebt() {
      App.openModal(`
        <div class="modal-title">+ Tambah Utang</div>
        <div class="form-group">
          <label class="form-label">Nama / Label Utang</label>
          <input class="form-input" id="ob-debt-name" placeholder="mis. KPR BCA, Pinjol Kredivo, KTA Mandiri">
        </div>
        <div class="form-group">
          <label class="form-label">Nama Kreditur</label>
          <input class="form-input" id="ob-debt-creditor" placeholder="mis. Bank BCA">
        </div>
        <div class="form-group">
          <label class="form-label">Sisa Utang Sekarang</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ob-debt-remaining" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Cicilan/Pembayaran Minimum/Bulan</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ob-debt-minpay" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Bunga (% per bulan)</label>
          <input type="number" step="0.01" class="form-input" id="ob-debt-interest" placeholder="mis. 2.5">
          <div class="form-hint">Batas legal OJK 2026: maks 3%/bulan (konsumtif) atau 2%/bulan (produktif)</div>
        </div>
        <div class="form-group">
          <label class="form-label">Jatuh Tempo Berikutnya</label>
          <input type="date" class="form-input" id="ob-debt-due">
        </div>
        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.ob.saveDebt()">Simpan</button>
        </div>
      `);
    },
    
    saveDebt() {
      const name = document.getElementById('ob-debt-name').value.trim();
      if (!name) { App.toast('Nama utang wajib diisi', 'error'); return; }
      const remaining = H.parseRp(document.getElementById('ob-debt-remaining').value);
      if (remaining <= 0) { App.toast('Masukkan sisa utang yang valid (> Rp 0)', 'error'); return; }
      const debt = {
        id: H.uid(),
        name,
        creditor: document.getElementById('ob-debt-creditor').value.trim(),
        original: remaining,
        remaining: remaining,
        interestMonthly: H.parsePercent(document.getElementById('ob-debt-interest').value),
        dueDate: document.getElementById('ob-debt-due').value,
        minPayment: H.parseRp(document.getElementById('ob-debt-minpay').value),
        collateral: '',
        status: 'ACTIVE',
        notes: '',
        payments: [],
        negotiations: [],
        riskLevel: 'MEDIUM',
      };
      App.state.debts.push(debt);
      App.save();
      App.closeModal();
      this.renderDebtList();
      App.toast('Utang berhasil ditambahkan ✓', 'success');
    },
    
    renderDebtList() {
      const debts = App.state.debts;
      document.getElementById('ob-debts-list').innerHTML = debts.map(d=>`
        <div class="card-sm" style="margin-bottom:var(--space-2);display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-weight:600;font-size:14px">${H.escHtml(d.name)}</div>
            <div style="font-size:12px;color:var(--color-text-secondary)">${H.formatRp(d.remaining)}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="App.removeDebt('${d.id}')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
      `).join('');
    },
    
    finish() {
      this.saveCurrentStep();
      App.state.meta.onboardingDone = true;
      // Snapshot Day 1 (Lengkap 5 Pilar Finansial)
      const { score } = ScoreEngine.calculate(App.state);
      const essentialExpenses = Object.values(App.state.expenses.essential || {}).reduce((a,v)=>a+v,0);
      const totalAssets = (App.state.assets || []).reduce((a,x)=>a+x.value,0);
      App.state.meta.snapshotDay1 = {
        income: App.state.profile.monthlyIncome || 0,
        expenses: essentialExpenses,
        debt: App.state.debts.reduce((a,d)=>a+d.remaining,0),
        assets: totalAssets,
        cash: App.state.profile.cash || 0,
        score,
        date: H.today(),
      };
      // Generate today's missions
      ReboundEngine.generate(App.state);
      App.save();
      App.showApp();
      App.toast('Selamat datang di Rebound 30!', 'success');
    }
  },
  
  removeDebt(id) {
    this.state.debts = this.state.debts.filter(d=>d.id!==id);
    this.save();
    this.ob.renderDebtList();
    if (this.currentScreen === 'debts') this.debts.render();
  },
  
  // ============================================================
  // DEBT MANAGEMENT
  // ============================================================
  // ============================================================
  // DEBTS MODULE
  // ============================================================
  debts: {
    render() {
      const s = App.state;
      const total = s.debts.reduce((a,d)=>a+d.remaining, 0);
      const minPay = s.debts.reduce((a,d)=>a+d.minPayment, 0);
      const inc = s.profile.monthlyIncome || 0;
      const dsr = inc > 0 ? Math.round((minPay / inc) * 100) : (minPay > 0 ? 100 : 0);
      
      const debtTotalVal = document.getElementById('debt-total-value');
      if (debtTotalVal) debtTotalVal.textContent = H.formatRp(total);
      
      const debtCountTxt = document.getElementById('debt-count-text');
      if (debtCountTxt) debtCountTxt.textContent = `${s.debts.length} utang aktif`;
      
      const strategySelect = document.getElementById('debt-strategy-select');
      const strategy = s.settings.debtStrategy || 'risk_first';
      if (strategySelect) strategySelect.value = strategy;
      
      // Interest widget
      const thisMonthInterest = s.expenses.records
        .filter(e => e.isInterest && H.isThisMonth(e.date))
        .reduce((a,e)=>a+e.amount,0);
      const widget = document.getElementById('debt-interest-widget');
      if (widget) {
        if (thisMonthInterest > 0) {
          widget.innerHTML = `
            <div class="interest-widget">
              <div class="interest-widget-title">Total Beban Bunga Bulan Ini</div>
              <div class="interest-widget-amount">${H.formatRp(thisMonthInterest)}</div>
              <div class="interest-widget-sub">Ini biaya "waktu" untuk menyelesaikan utang — bukan pokok.</div>
            </div>
          `;
        } else { widget.innerHTML = ''; }
      }
      
      const sorted = this.sortDebts(s.debts, strategy);
      const listEl = document.getElementById('debts-list');
      if (!listEl) return;
      
      if (sorted.length === 0) {
        listEl.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <div class="empty-state-title">Belum ada utang tercatat</div>
            <div class="empty-state-text">Tambahkan utangmu untuk mulai memetakan kewajiban.</div>
            <button class="btn btn-primary btn-sm" style="margin-top:var(--space-4)" onclick="App.debts.showAdd()">+ Tambah Utang Pertama</button>
          </div>
        `;
        return;
      }
      
      listEl.innerHTML = sorted.map((d,i) => {
        const paidPct = d.original > 0 ? Math.round((1 - d.remaining/d.original)*100) : 0;
        const interestPerDay = d.interestMonthly / 30;
        const isIllegal = interestPerDay > 0.1 || d.isIllegal || (d.interestMonthly > 3);
        const daysUntilDue = d.dueDate ? H.daysBetween(H.today(), d.dueDate) : null;
        const negStatus = d.negotiations && d.negotiations.length > 0
          ? d.negotiations[d.negotiations.length-1].status : 'NOT_CONTACTED';
        
        const lunas = H.parseRp(d.remaining) === 0;
        const isCustom = strategy === 'custom';
        // Alasan prioritas dibuat terlihat: setiap rekomendasi harus bisa
        // dijelaskan kepada pengguna (PRD §7.6 Transparent Calculation).
        const alasan = (i === 0 && !lunas)
          ? FinanceEngine.explainPriority(d, strategy) : '';

        return `
          <div class="debt-card ${i === 0 && !lunas ? 'priority-target' : ''} ${lunas ? 'debt-lunas' : ''}" id="debt-card-${d.id}">
            <div class="debt-card-header" onclick="App.debts.toggleCard('${d.id}')"
                 role="button" tabindex="0" aria-expanded="false"
                 aria-label="Rincian utang ${H.escHtml(d.name)}, sisa ${H.formatRp(d.remaining)}"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.debts.toggleCard('${d.id}')}">
              <div>
                <div class="debt-name">${H.escHtml(d.name)} <span style="font-size:11px;background:var(--slate-100);padding:2px 6px;border-radius:10px;color:var(--slate-600)">#${i+1}</span></div>
                <div class="debt-creditor">${H.escHtml(d.creditorType || d.creditor || 'Kreditur')} · <span class="negotiation-status neg-${negStatus}">${this.negLabel(negStatus)}</span></div>
              </div>
              <div style="text-align:right">
                <div class="debt-amount">${H.formatRp(d.remaining)}</div>
                <div class="debt-progress-text">Sisa dari ${H.formatRp(d.original || d.remaining)} (${paidPct}% terbayar)</div>
              </div>
            </div>
            ${alasan ? `
              <div class="debt-why" role="note">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <span><strong>Kenapa ini didahulukan:</strong> ${H.escHtml(alasan)}</span>
              </div>` : ''}
            ${isCustom && !lunas ? `
              <div class="debt-reorder" role="group" aria-label="Atur urutan ${H.escHtml(d.name)}">
                <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();App.debts.moveCustom('${d.id}',-1)"
                        ${i === 0 ? 'disabled' : ''} aria-label="Naikkan ${H.escHtml(d.name)} satu posisi">↑ Naik</button>
                <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();App.debts.moveCustom('${d.id}',1)"
                        aria-label="Turunkan ${H.escHtml(d.name)} satu posisi">↓ Turun</button>
              </div>` : ''}
            <div class="debt-progress-bar"><div class="debt-progress-fill" style="width:${paidPct}%"></div></div>
            <div class="debt-card-body">
              <div class="debt-meta-grid">
                <div class="debt-meta-item">
                  <div class="debt-meta-label">Cicilan Min/Bln</div>
                  <div class="debt-meta-value">${H.formatRp(d.minPayment)}</div>
                </div>
                <div class="debt-meta-item">
                  <div class="debt-meta-label">Bunga/Bln</div>
                  <div class="debt-meta-value ${isIllegal?'interest-illegal':'interest-legal'}">${d.interestMonthly}%</div>
                </div>
                <div class="debt-meta-item">
                  <div class="debt-meta-label">Jatuh Tempo</div>
                  <div class="debt-meta-value">${d.dueDate ? H.formatDate(d.dueDate) : '—'}</div>
                </div>
              </div>
              <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;margin-top:var(--space-3);">
                <button class="btn btn-sm btn-outline" onclick="App.debts.showPayment('${d.id}')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  Catat Pembayaran
                </button>
                <button class="btn btn-sm btn-secondary" onclick="App.debts.showNegotiation('${d.id}')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  Ajukan Negosiasi
                </button>
                <button class="btn btn-sm btn-ghost" onclick="App.debts.showEdit('${d.id}')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                  Edit
                </button>
                <button class="btn btn-sm btn-ghost" style="color:var(--red-600);" onclick="App.debts.remove('${d.id}')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Hapus
                </button>
              </div>
              ${d.negotiations && d.negotiations.length > 0 ? `
                <div style="margin-top:var(--space-3);padding-top:var(--space-3);border-top:1px solid var(--color-border)">
                  <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);margin-bottom:var(--space-2)">Riwayat Negosiasi</div>
                  ${d.negotiations.map(n=>{
                    const telat = n.followUp && H.daysBetween(H.today(), n.followUp) < 0
                      && ['AGREED','REJECTED'].indexOf(n.status) === -1;
                    return `
                    <div style="font-size:12px;padding:var(--space-2);background:var(--slate-50);border-radius:var(--radius-md);margin-bottom:4px">
                      <span class="negotiation-status neg-${n.status}">${this.negLabel(n.status)}</span>
                      ${H.escHtml(n.offer||'')} — ${H.formatDate(n.date)}
                      ${n.contactPerson || n.channel ? `<div style="color:var(--color-text-secondary);margin-top:3px">
                        ${n.contactPerson ? 'Narahubung: ' + H.escHtml(n.contactPerson) : ''}${n.contactPerson && n.channel ? ' · ' : ''}${n.channel ? 'via ' + H.escHtml(App.debts.channelLabel(n.channel)) : ''}
                      </div>` : ''}
                      ${n.attachment ? `<div style="color:var(--color-text-secondary);margin-top:2px">Bukti: ${H.escHtml(n.attachment)}</div>` : ''}
                      ${n.followUp ? `<div style="color:var(--${telat ? 'red' : 'amber'}-600);margin-top:2px;font-weight:600">
                        ${telat ? 'Follow-up terlewat: ' : 'Follow-up: '}${H.formatDate(n.followUp)}
                      </div>` : ''}
                    </div>`;
                  }).join('')}
                </div>
              ` : ''}
              ${d.payments && d.payments.length > 0 ? `
                <div style="margin-top:var(--space-3);padding-top:var(--space-3);border-top:1px solid var(--color-border)">
                  <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);margin-bottom:var(--space-2)">Pembayaran Terakhir</div>
                  ${d.payments.slice(-2).map(p=>`
                    <div style="font-size:12px;color:var(--green-700);font-weight:600">${H.formatRp(p.amount)} — ${H.formatDate(p.date)}</div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    },
    
    /**
     * Pengurutan didelegasikan ke FinanceEngine agar logika prioritas
     * bisa diuji tanpa DOM. Versi lama di sini mengabaikan agunan dan
     * risiko hukum (melanggar PRD §17.2) dan tidak menangani strategi
     * 'custom' sama sekali — opsi itu ada di dropdown tetapi diam-diam
     * tidak mengurutkan apa pun.
     */
    sortDebts(debts, strategy) {
      return FinanceEngine.sortDebts(debts, strategy);
    },

    /** Naikkan/turunkan posisi utang pada mode urutan Custom. */
    moveCustom(id, arah) {
      const s = App.state;
      if ((s.settings.debtStrategy || '') !== 'custom') return;

      const urut = FinanceEngine.sortDebts(s.debts, 'custom');
      const i = urut.findIndex(d => d.id === id);
      const j = i + arah;
      if (i === -1 || j < 0 || j >= urut.length) return;

      const tmp = urut[i];
      urut[i] = urut[j];
      urut[j] = tmp;

      // Tulis ulang seluruh nomor urut supaya rapat dan stabil.
      urut.forEach((d, idx) => { d.customOrder = idx; });

      App.save();
      this.render();
      App.toast(`"${tmp.name}" dipindahkan ke urutan ${j + 1}`, 'info');
    },
    
    negLabel(status) {
      const map = { NOT_CONTACTED:'Belum dihubungi', CONTACTED:'Sudah dihubungi', NEGOTIATING:'Negosiasi', AGREED:'Setuju', REJECTED:'Ditolak', FOLLOW_UP:'Follow-up' };
      return map[status] || status;
    },

    channelLabel(ch) {
      const map = { email:'Email', whatsapp:'WhatsApp', telepon:'Telepon',
        surat:'Surat resmi', datang:'Datang langsung', aplikasi:'Chat aplikasi' };
      return map[ch] || ch;
    },
    
    toggleCard(id) {
      const el = document.getElementById('debt-card-'+id);
      if (el) el.classList.toggle('expanded');
    },
    
    setStrategy(val) {
      App.state.settings.debtStrategy = val;

      // Saat pertama kali beralih ke Custom, ambil urutan yang sedang
      // tampil sebagai titik awal — supaya daftar tidak "melompat"
      // menjadi urutan penambahan yang terasa acak bagi pengguna.
      if (val === 'custom' && App.state.debts.some(d => !Number.isFinite(d.customOrder))) {
        const sebelumnya = FinanceEngine.sortDebts(App.state.debts, 'risk_first');
        sebelumnya.forEach((d, idx) => {
          if (!Number.isFinite(d.customOrder)) d.customOrder = idx;
        });
      }

      App.save();
      this.render();

      if (val === 'custom') {
        App.toast('Mode Custom aktif — atur urutan dengan tombol ↑ ↓ pada tiap kartu utang', 'info');
      }
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Catat Utang Baru</div>
        <div class="form-group">
          <label class="form-label">Nama Utang / Kreditur *</label>
          <input class="form-input" id="d-name" placeholder="mis. Pinjol AdaModal, Kartu Kredit BCA, Teman">
        </div>
        <div class="form-group">
          <label class="form-label">Jenis Kreditur</label>
          <select class="form-input form-select" id="d-type">
            <option value="Pinjol Legal (OJK)">Pinjol Legal (OJK)</option>
            <option value="Pinjol Ilegal">Pinjol Ilegal</option>
            <option value="Bank / KTA">Bank / KTA</option>
            <option value="Kartu Kredit">Kartu Kredit</option>
            <option value="Paylater">Paylater</option>
            <option value="Keluarga / Teman">Keluarga / Teman</option>
            <option value="Koperasi / BPR">Koperasi / BPR</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Total Sisa Pokok Utang Saat Ini *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="d-remaining" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Estimasi Bunga per Bulan (%)</label>
          <input type="number" step="0.01" class="form-input" id="d-interest" placeholder="mis. 0.3 atau 2.5">
        </div>
        <div class="form-group">
          <label class="form-label">Cicilan Minimum per Bulan</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="d-minpay" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Jatuh Tempo Berikutnya</label>
          <input type="date" class="form-input" id="d-due">
        </div>
        <div class="form-group">
          <label class="form-label">Agunan / Jaminan</label>
          <input class="form-input" id="d-collateral" placeholder="mis. BPKB Motor, KTP">
        </div>
        <div class="form-group">
          <label class="form-label">Catatan</label>
          <textarea class="form-input form-textarea" id="d-notes"></textarea>
        </div>
        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-2)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.debts.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const name = document.getElementById('d-name').value.trim();
      const remaining = H.parseRp(document.getElementById('d-remaining').value);
      if (!name) { App.toast('Nama utang wajib diisi', 'error'); return; }
      if (remaining <= 0) { App.toast('Sisa utang harus lebih besar dari Rp 0', 'error'); return; }
      
      const creditorType = document.getElementById('d-type').value;
      const isIllegal = creditorType === 'Pinjol Ilegal';
      
      App.state.debts.push({
        id: H.uid(),
        name,
        creditorType,
        original: remaining,
        remaining,
        interestMonthly: H.parsePercent(document.getElementById('d-interest').value),
        minPayment: H.parseRp(document.getElementById('d-minpay').value) || 0,
        dueDate: document.getElementById('d-due').value,
        collateral: document.getElementById('d-collateral').value.trim(),
        notes: document.getElementById('d-notes').value.trim(),
        isIllegal,
        riskLevel: isIllegal ? 'HIGH' : 'MEDIUM',
        status: 'ACTIVE',
        payments: [],
        negotiations: [],
      });
      App.save();
      App.closeModal();
      this.render();
      App.toast('Utang berhasil dicatat ✓', 'success');
    },
    
    showPayment(id) {
      const d = App.state.debts.find(x=>x.id===id);
      if (!d) return;
      App.openModal(`
        <div class="modal-title">Catat Pembayaran: ${H.escHtml(d.name)}</div>
        <div class="form-group">
          <label class="form-label">Jumlah Pembayaran *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="pay-amount" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="pay-date" value="${H.today()}">
        </div>
        <div class="form-group">
          <label class="form-label">Dari jumlah itu, berapa bunga?</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="pay-interest" placeholder="0"></div>
          <div class="form-hint">Digunakan untuk menghitung total bunga terbayar</div>
        </div>
        <div class="form-group">
          <label class="form-label">Catatan</label>
          <input class="form-input" id="pay-notes">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.debts.savePayment('${id}')">Simpan</button>
        </div>
      `);
    },
    
    savePayment(id) {
      const amount = H.parseRp(document.getElementById('pay-amount').value);
      if (!amount || amount <= 0) { App.toast('Masukkan jumlah pembayaran yang valid', 'error'); return; }
      const interest = H.parseRp(document.getElementById('pay-interest').value) || 0;
      const date = document.getElementById('pay-date').value;
      const debt = App.state.debts.find(d=>d.id===id);
      if (!debt) return;
      const principal = Math.max(0, amount - interest);
      debt.remaining = Math.max(0, debt.remaining - principal);
      debt.payments = debt.payments || [];
      debt.payments.push({ id: H.uid(), amount, interest, date, notes: document.getElementById('pay-notes').value });
      if (interest > 0) {
        App.state.expenses.records.push({ id: H.uid(), description: `Bunga utang: ${debt.name}`, amount: interest, date, category: 'debt_interest', essential: true, isInterest: true });
      }
      App.state.profile.cash = Math.max(0, (App.state.profile.cash || 0) - amount);
      App.save();
      App.closeModal();
      this.render();
      App.renderDashboard && App.renderDashboard();
      App.toast(`Pembayaran ${H.formatRp(amount)} dicatat & saldo kas terpotong ✓`, 'success');
    },
    
    showNegotiation(id) {
      App.openModal(`
        <div class="modal-title">Catat Negosiasi</div>
        <div class="form-group">
          <label class="form-label">Status</label>
          <select class="form-input form-select" id="neg-status">
            <option value="CONTACTED">Sudah dihubungi</option>
            <option value="NEGOTIATING">Sedang negosiasi</option>
            <option value="AGREED">Setuju/Deal</option>
            <option value="REJECTED">Ditolak</option>
            <option value="FOLLOW_UP">Perlu follow-up</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tawaran / Permintaan Restrukturisasi</label>
          <select class="form-input form-select" id="neg-offer-select" onchange="App.debts.fillOffer(this.value)">
            <option value="">— Pilih template —</option>
            <option value="Permohonan perpanjangan tenor">Perpanjangan tenor</option>
            <option value="Permohonan penurunan bunga">Penurunan bunga</option>
            <option value="Permohonan penghapusan denda keterlambatan">Hapus denda keterlambatan</option>
            <option value="Permohonan penundaan pokok 3 bulan">Tunda pokok 3 bulan</option>
            <option value="Permohonan penundaan pokok 6 bulan">Tunda pokok 6 bulan</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="neg-offer">Detail</label>
          <textarea class="form-input form-textarea" id="neg-offer" placeholder="Jelaskan situasimu secara jujur..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label" for="neg-contact">Nama Petugas / Narahubung</label>
          <input class="form-input" id="neg-contact" placeholder="mis. Ibu Rina (bagian penagihan)">
          <div class="form-hint">Catat namanya. Bila janji lisan tidak ditepati, kamu punya rujukan konkret.</div>
        </div>
        <div class="form-group">
          <label class="form-label" for="neg-channel">Kanal Komunikasi</label>
          <select class="form-input form-select" id="neg-channel">
            <option value="email">Email (paling kuat sebagai bukti)</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telepon">Telepon</option>
            <option value="surat">Surat resmi</option>
            <option value="datang">Datang langsung ke kantor</option>
            <option value="aplikasi">Chat di aplikasi kreditur</option>
          </select>
          <div class="form-hint">Ajukan secara tertulis bila memungkinkan — jejak tertulis yang dipakai OJK bila perlu eskalasi.</div>
        </div>
        <div class="form-group">
          <label class="form-label" for="neg-attachment">Bukti yang Disimpan</label>
          <input class="form-input" id="neg-attachment" placeholder="mis. Screenshot chat 12 Agu, balasan email di folder Utang">
          <div class="form-hint">Aplikasi tidak menyimpan berkasnya (semua data hanya di perangkatmu). Tulis di mana kamu menyimpannya.</div>
        </div>
        <div class="form-group">
          <label class="form-label" for="neg-date">Tanggal Kontak</label>
          <input type="date" class="form-input" id="neg-date" value="${H.today()}" max="${H.today()}">
        </div>
        <div class="form-group">
          <label class="form-label" for="neg-followup">Tanggal Follow-up Berikutnya</label>
          <input type="date" class="form-input" id="neg-followup" value="${H.addDays(H.today(), 7)}" min="${H.today()}">
          <div class="form-hint">Kamu akan diingatkan otomatis di beranda saat tanggal ini tiba.</div>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.debts.saveNegotiation('${id}')">Simpan</button>
        </div>
      `);
    },
    
    fillOffer(val) {
      if (val) document.getElementById('neg-offer').value = val;
    },
    
    saveNegotiation(id) {
      const debt = App.state.debts.find(d=>d.id===id);
      if (!debt) return;
      const val = (elId) => {
        const el = document.getElementById(elId);
        return el ? String(el.value || '').trim() : '';
      };

      const followUp = val('neg-followup');
      debt.negotiations = debt.negotiations || [];
      debt.negotiations.push({
        id: H.uid(),
        status: val('neg-status'),
        offer: val('neg-offer'),
        date: val('neg-date') || H.today(),
        followUp,
        // Field PRD §18 yang sebelumnya tidak pernah dicatat.
        contactPerson: val('neg-contact'),
        channel: val('neg-channel'),
        attachment: val('neg-attachment'),
      });
      App.save();
      App.closeModal();
      this.render();
      App.notifications && App.notifications.refresh();
      App.toast(followUp
        ? `Negosiasi dicatat ✓ Kamu akan diingatkan pada ${H.formatDate(followUp)}`
        : 'Negosiasi dicatat ✓', 'success');
    },
    
    showEdit(id) {
      const d = App.state.debts.find(x=>x.id===id);
      if (!d) return;
      App.openModal(`
        <div class="modal-title">Edit Utang</div>
        <div class="form-group">
          <label class="form-label">Nama Utang</label>
          <input class="form-input" id="ed-name" value="${H.escHtml(d.name)}">
        </div>
        <div class="form-group">
          <label class="form-label">Sisa Utang Sekarang</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ed-remaining" value="${d.remaining}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Bunga %/bln</label>
          <input type="number" step="0.01" class="form-input" id="ed-interest" value="${d.interestMonthly}">
        </div>
        <div class="form-group">
          <label class="form-label">Cicilan Min/Bln</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ed-minpay" value="${d.minPayment}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Jatuh Tempo</label>
          <input type="date" class="form-input" id="ed-due" value="${d.dueDate||''}">
        </div>
        <div style="display:flex;gap:var(--space-2);margin-top:var(--space-4);">
          <button class="btn btn-danger btn-sm" onclick="App.debts.remove('${id}')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            Hapus Utang
          </button>
          <div style="flex:1;"></div>
          <button class="btn btn-secondary btn-sm" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary btn-sm" onclick="App.debts.saveEdit('${id}')">Simpan</button>
        </div>
      `);
    },
    
    saveEdit(id) {
      const d = App.state.debts.find(x=>x.id===id);
      if (!d) return;
      d.name = document.getElementById('ed-name').value.trim() || d.name;
      d.remaining = H.parseRp(document.getElementById('ed-remaining').value) || d.remaining;
      d.interestMonthly = H.parsePercent(document.getElementById('ed-interest').value);
      d.minPayment = H.parseRp(document.getElementById('ed-minpay').value) || 0;
      d.dueDate = document.getElementById('ed-due').value;
      App.save();
      App.closeModal();
      this.render();
      App.toast('Utang diperbarui ✓', 'success');
    },

    async remove(id) {
      const debt = App.state.debts.find(d => d.id === id);
      const name = debt ? debt.name : 'utang ini';
      const ok = await App.confirm({
        title: 'Hapus Data Utang?',
        message: `Apakah Anda yakin ingin menghapus data "${name}"?\n\nData ini akan dihapus dari daftar perhitungan utang aktif.`,
        confirmText: 'Ya, Hapus Utang',
        cancelText: 'Batal',
        type: 'danger'
      });
      if (ok) {
        App.state.debts = App.state.debts.filter(d => d.id !== id);
        App.save();
        App.closeModal();
        this.render();
        App.toast('Data utang berhasil dihapus', 'info');
      }
    },
  },

  // ============================================================
  // INCOME TRACKER
  // ============================================================
  income: {
    render() {
      const s = App.state;
      const totalThisMonth = s.incomes
        .filter(i => H.isThisMonth(i.date))
        .reduce((a,i) => a + i.amount, 0);
      const recurringTotal = s.incomes
        .filter(i => i.recurring)
        .reduce((a,i) => a + i.amount, 0);
      const oppCount = s.opportunities.filter(o => o.status === 'APPLIED' || o.status === 'INTERVIEW').length;
      
      document.getElementById('income-month-total').textContent = H.formatRp(totalThisMonth + (s.profile.monthlyIncome || 0));
      document.getElementById('income-recurring-total').textContent = H.formatRp(recurringTotal);
      document.getElementById('income-opp-count').textContent = oppCount;
      
      // Incomes List
      const sorted = [...s.incomes].sort((a,b)=>b.date.localeCompare(a.date));
      document.getElementById('income-list').innerHTML = sorted.length ? sorted.map(i => `
        <div class="income-card">
          <div class="income-icon-bg">${this.catIcon(i.category)}</div>
          <div class="income-info">
            <div class="income-source">${H.escHtml(i.source)}</div>
            <div class="income-meta">${H.formatDate(i.date)} · ${H.escHtml(H.catLabel(i.category))}</div>
            ${i.recurring ? '<div class="recurring-badge">Rutin</div>' : ''}
          </div>
          <div style="text-align:right">
            <div class="income-amount">${H.formatRp(i.amount)}</div>
            <div style="display:flex;gap:4px;justify-content:flex-end;margin-top:4px;">
              <button class="btn btn-ghost btn-sm" style="padding:4px 8px;font-size:11px;" onclick="App.income.showEdit('${i.id}')" title="Edit Pemasukan">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                <span>Edit</span>
              </button>
              <button class="btn btn-ghost btn-sm" style="padding:4px 8px;font-size:11px;color:var(--red-600);" onclick="App.income.remove('${i.id}')" title="Hapus Pemasukan">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span>Hapus</span>
              </button>
            </div>
          </div>
        </div>
      `).join('') : '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><div class="empty-state-title">Belum ada pemasukan tercatat</div><div class="empty-state-text">Catat setiap pemasukan harian, proyek, atau komisi di sini.</div></div>';
      
      // Opportunities List
      const opps = [...s.opportunities].sort((a,b)=>b.dateApplied?.localeCompare(a.dateApplied||''));
      document.getElementById('opportunities-list').innerHTML = opps.length ? opps.map(o=>`
        <div class="opportunity-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <div style="font-weight:700;color:var(--slate-900);">${H.escHtml(o.title)}</div>
              <div style="font-size:12px;color:var(--color-text-secondary);margin-top:2px;">${H.escHtml(o.company||'')} · ${H.escHtml(H.catLabel(o.type))}</div>
            </div>
            <div style="text-align:right">
              <div class="opp-${o.status}" style="font-size:12px;font-weight:700">${this.oppStatusLabel(o.status)}</div>
              ${o.expectedIncome ? `<div style="font-size:12px;color:var(--green-600);font-weight:600">${H.formatRp(o.expectedIncome)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex;gap:var(--space-2);margin-top:var(--space-3);align-items:center;">
            <select class="form-input form-select" style="font-size:12px;padding:6px 24px 6px 8px;flex:1" onchange="App.income.updateOppStatus('${o.id}',this.value)">
              ${['SAVED','APPLIED','INTERVIEW','NEGOTIATION','WON','LOST','CANCELLED'].map(st=>`<option value="${st}" ${o.status===st?'selected':''}>${this.oppStatusLabel(st)}</option>`).join('')}
            </select>
            <button class="btn btn-ghost btn-sm" style="padding:6px 8px;color:var(--red-600);" onclick="App.income.removeOpp('${o.id}')" title="Hapus Peluang">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          ${o.followUpDate ? `<div style="font-size:11px;color:var(--amber-600);margin-top:6px;font-weight:600;">⏰ Follow-up: ${H.formatDate(o.followUpDate)}</div>` : ''}
        </div>
      `).join('') : '<div style="font-size:13px;color:var(--color-text-muted);padding:var(--space-4)">Catat lamaran kerja atau calon klien di sini.</div>';
    },
    
    catIcon(cat) {
      const map = {
        job: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
        freelance: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>',
        client: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        business: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>',
        daily: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
        commission: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
        asset_sale: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
        other: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>'
      };
      return map[cat] || map.other;
    },
    
    oppStatusLabel(st) {
      const map = { SAVED:'Tersimpan', APPLIED:'Dilamar', INTERVIEW:'Interview', NEGOTIATION:'Negosiasi', WON:'Berhasil ✓', LOST:'Tidak jadi', CANCELLED:'Dibatalkan' };
      return map[st] || st;
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Catat Pemasukan</div>
        <div class="form-group">
          <label class="form-label">Sumber Pemasukan *</label>
          <input class="form-input" id="inc-source" placeholder="mis. Desain Logo Klien A, Gaji, Jual Blender">
        </div>
        <div class="form-group">
          <label class="form-label">Jumlah (Rp) *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="inc-amount" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="inc-cat">
            <option value="freelance">Freelance / Proyek</option>
            <option value="client">Klien Baru</option>
            <option value="job">Gaji / Pekerjaan</option>
            <option value="business">Bisnis / Usaha</option>
            <option value="daily">Kerja Harian</option>
            <option value="commission">Komisi</option>
            <option value="asset_sale">Jual Aset</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="inc-date" value="${H.today()}">
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-4)">
          <div><div class="settings-item-label">Pemasukan Rutin / Berulang?</div><div class="settings-item-sub">Langganan bulanan atau gaji tetap</div></div>
          <label class="toggle"><input type="checkbox" id="inc-recurring"><span class="toggle-slider"></span></label>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.income.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const source = document.getElementById('inc-source').value.trim();
      const amount = H.parseRp(document.getElementById('inc-amount').value);
      if (!source) { App.toast('Sumber pemasukan wajib diisi', 'error'); return; }
      if (!amount || amount <= 0) { App.toast('Masukkan nominal pemasukan yang valid (> Rp 0)', 'error'); return; }
      
      App.state.incomes.push({
        id: H.uid(),
        source,
        amount,
        category: document.getElementById('inc-cat').value,
        date: document.getElementById('inc-date').value || H.today(),
        recurring: document.getElementById('inc-recurring').checked,
        notes: '',
      });
      App.state.profile.cash = (App.state.profile.cash || 0) + amount;
      App.save();
      App.closeModal();
      this.render();
      App.renderDashboard && App.renderDashboard();
      App.toast(`Pemasukan ${H.formatRp(amount)} dicatat & kas bertambah ✓`, 'success');
    },

    showEdit(id) {
      const inc = App.state.incomes.find(i => i.id === id);
      if (!inc) return;

      App.openModal(`
        <div class="modal-title">Edit Pemasukan</div>
        <div class="form-group">
          <label class="form-label">Sumber Pemasukan *</label>
          <input class="form-input" id="ed-inc-source" value="${H.escHtml(inc.source)}">
        </div>
        <div class="form-group">
          <label class="form-label">Jumlah (Rp) *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ed-inc-amount" value="${inc.amount}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="ed-inc-cat">
            <option value="job" ${inc.category==='job'?'selected':''}>Gaji / Pekerjaan</option>
            <option value="freelance" ${inc.category==='freelance'?'selected':''}>Freelance / Proyek</option>
            <option value="client" ${inc.category==='client'?'selected':''}>Klien Baru</option>
            <option value="business" ${inc.category==='business'?'selected':''}>Bisnis / Jualan</option>
            <option value="daily" ${inc.category==='daily'?'selected':''}>Kerja Harian</option>
            <option value="commission" ${inc.category==='commission'?'selected':''}>Komisi</option>
            <option value="asset_sale" ${inc.category==='asset_sale'?'selected':''}>Jual Aset</option>
            <option value="other" ${inc.category==='other'?'selected':''}>Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="ed-inc-date" value="${inc.date || H.today()}">
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-4)">
          <div><div class="settings-item-label">Pemasukan Rutin / Berulang?</div></div>
          <label class="toggle"><input type="checkbox" id="ed-inc-recurring" ${inc.recurring?'checked':''}><span class="toggle-slider"></span></label>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.income.saveEdit('${id}')">Simpan Perubahan</button>
        </div>
      `);
    },

    saveEdit(id) {
      const inc = App.state.incomes.find(i => i.id === id);
      if (!inc) return;
      const source = document.getElementById('ed-inc-source').value.trim();
      const amount = H.parseRp(document.getElementById('ed-inc-amount').value);
      if (!source) { App.toast('Sumber pemasukan wajib diisi', 'error'); return; }
      if (!amount || amount <= 0) { App.toast('Masukkan nominal pemasukan valid (> Rp 0)', 'error'); return; }

      const diff = amount - inc.amount;
      inc.source = source;
      inc.amount = amount;
      inc.category = document.getElementById('ed-inc-cat').value;
      inc.date = document.getElementById('ed-inc-date').value || H.today();
      inc.recurring = document.getElementById('ed-inc-recurring').checked;
      App.state.profile.cash = Math.max(0, (App.state.profile.cash || 0) + diff);

      App.save();
      App.closeModal();
      this.render();
      App.renderDashboard && App.renderDashboard();
      App.toast('Pemasukan berhasil diperbarui ✓', 'success');
    },
    
    async remove(id) {
      const inc = App.state.incomes.find(i => i.id === id);
      const name = inc ? inc.source : 'pemasukan ini';
      const ok = await App.confirm({
        title: 'Hapus Catatan Pemasukan?',
        message: `Apakah Anda yakin ingin menghapus catatan pemasukan "${name}" (${H.formatRp(inc?.amount)})?`,
        confirmText: 'Ya, Hapus',
        cancelText: 'Batal',
        type: 'danger'
      });
      if (ok) {
        if (inc) App.state.profile.cash = Math.max(0, (App.state.profile.cash || 0) - inc.amount);
        App.state.incomes = App.state.incomes.filter(i=>i.id!==id);
        App.save();
        this.render();
        App.renderDashboard && App.renderDashboard();
        App.toast('Pemasukan dihapus & saldo kas disesuaikan', 'info');
      }
    },
    
    showAddOpp() {
      App.openModal(`
        <div class="modal-title">+ Tambah Peluang / Lamaran</div>
        <div class="form-group">
          <label class="form-label">Nama Proyek / Posisi *</label>
          <input class="form-input" id="opp-title" placeholder="mis. Redesain Web Toko X, Lowongan Admin PT Y">
        </div>
        <div class="form-group">
          <label class="form-label">Klien / Perusahaan</label>
          <input class="form-input" id="opp-company" placeholder="mis. PT Maju Bersama, Pak Budi">
        </div>
        <div class="form-group">
          <label class="form-label">Jenis</label>
          <select class="form-input form-select" id="opp-type">
            <option value="freelance">Freelance</option>
            <option value="job">Pekerjaan Penuh Waktu</option>
            <option value="part_time">Paruh Waktu</option>
            <option value="client">Klien</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Estimasi Nilai / Gaji (Rp)</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="opp-income" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Status Saat Ini</label>
          <select class="form-input form-select" id="opp-status">
            <option value="SAVED">Tersimpan (Belum dikontak)</option>
            <option value="APPLIED" selected>Sudah Dikontak / Dilamar</option>
            <option value="INTERVIEW">Interview / Diskusi</option>
            <option value="NEGOTIATION">Negosiasi Harga</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal Follow-up Berikutnya</label>
          <input type="date" class="form-input" id="opp-followup">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.income.saveNewOpp()">Simpan</button>
        </div>
      `);
    },
    
    saveNewOpp() {
      const title = document.getElementById('opp-title').value.trim();
      if (!title) { App.toast('Isi nama posisi/proyek', 'error'); return; }
      
      App.state.opportunities.push({
        id: H.uid(),
        title,
        company: document.getElementById('opp-company').value.trim(),
        type: document.getElementById('opp-type').value,
        expectedIncome: H.parseRp(document.getElementById('opp-income').value) || 0,
        status: document.getElementById('opp-status').value,
        followUpDate: document.getElementById('opp-followup').value,
        dateApplied: H.today(),
        notes: '',
      });
      App.save();
      App.closeModal();
      this.render();
      App.toast('Peluang ditambahkan ✓', 'success');
    },
    
    updateOppStatus(id, status) {
      const opp = App.state.opportunities.find(o=>o.id===id);
      if (!opp) return;
      opp.status = status;
      App.save();
      this.render();
      App.toast(`Status diperbarui: ${this.oppStatusLabel(status)}`, 'info');
    },
    
    async removeOpp(id) {
      const opp = App.state.opportunities.find(o => o.id === id);
      const name = opp ? opp.title : 'peluang ini';
      const ok = await App.confirm({
        title: 'Hapus Peluang / Lamaran?',
        message: `Apakah Anda yakin ingin menghapus peluang "${name}"?`,
        confirmText: 'Ya, Hapus',
        cancelText: 'Batal',
        type: 'danger'
      });
      if (ok) {
        App.state.opportunities = App.state.opportunities.filter(o=>o.id!==id);
        App.save();
        this.render();
        App.toast('Peluang dihapus', 'info');
      }
    },
  },

  // ============================================================
  // EXPENSES MODULE
  // ============================================================
  expenses: {
    render() {
      const s = App.state;
      const ess = s.expenses.essential;
      const essTotal = Object.values(ess).reduce((a,v)=>a+v,0);
      const recordsThisMonth = s.expenses.records.filter(e=>H.isThisMonth(e.date));
      const nonEssTotal = recordsThisMonth.filter(e=>!e.essential).reduce((a,e)=>a+e.amount,0);
      const allTotal = essTotal + nonEssTotal;
      const cash = s.profile.cash;
      const runwayDays = essTotal > 0 ? Math.round(cash / essTotal * 30) : 999;
      
      const elEss = document.getElementById('exp-essential-total') || document.getElementById('expense-essential-total');
      if (elEss) elEss.textContent = H.formatRp(essTotal);
      const elNonEss = document.getElementById('exp-nonessential-total') || document.getElementById('expense-all-total');
      if (elNonEss) elNonEss.textContent = H.formatRp(nonEssTotal);
      
      const warnBanner = document.getElementById('exp-warning-banner');
      if (warnBanner) {
        warnBanner.style.display = nonEssTotal > (essTotal * 0.4) && nonEssTotal > 0 ? 'flex' : 'none';
      }
      
      // Non-essential records list
      const sorted = [...s.expenses.records].sort((a,b)=>b.date.localeCompare(a.date));
      document.getElementById('expenses-list').innerHTML = sorted.length ? sorted.map(e => `
        <div class="income-card">
          <div class="income-icon-bg" style="background:#fee2e2;color:#dc2626;">${this.catIcon(e.category)}</div>
          <div class="income-info">
            <div class="income-source">${H.escHtml(e.description)}</div>
            <div class="income-meta">${H.formatDate(e.date)} · ${H.escHtml(H.catLabel(e.category))}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:700;color:var(--red-600)">-${H.formatRp(e.amount)}</div>
            <div style="display:flex;gap:4px;justify-content:flex-end;margin-top:4px;">
              <button class="btn btn-ghost btn-sm" style="padding:4px 8px;font-size:11px;" onclick="App.expenses.showEdit('${e.id}')" title="Edit Pengeluaran">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                <span>Edit</span>
              </button>
              <button class="btn btn-ghost btn-sm" style="padding:4px 8px;font-size:11px;color:var(--red-600);" onclick="App.expenses.remove('${e.id}')" title="Hapus Pengeluaran">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span>Hapus</span>
              </button>
            </div>
          </div>
        </div>
      `).join('') : '<div style="font-size:13px;color:var(--color-text-muted);padding:var(--space-4)">Belum ada pengeluaran non-esensial tercatat.</div>';
    },
    
    catIcon(cat) {
      const map = {
        food: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg>',
        housing: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        utilities: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        transport: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
        comm: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
        health: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
        debt_interest: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
        entertainment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
        shopping: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
        eating_out: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg>',
        other: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>'
      };
      return map[cat] || map.other;
    },
    
    showEditEssential() {
      const ess = App.state.expenses.essential || {};
      App.openModal(`
        <div class="modal-title">Atur Anggaran Pokok / Esensial Bulanan</div>
        <div class="form-group">
          <label class="form-label">Makanan & Minuman Pokok</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="modal-exp-food" value="${ess.food || 0}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Tempat Tinggal (Sewa / Kos / KPR)</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="modal-exp-housing" value="${ess.housing || 0}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Listrik & Air</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="modal-exp-utilities" value="${ess.utilities || 0}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Transportasi Kerja / Esensial</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="modal-exp-transport" value="${ess.transport || 0}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Komunikasi (Pulsa & Internet Kerja)</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="modal-exp-comm" value="${ess.comm || 0}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggungan Keluarga / Esensial Lain</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="modal-exp-other" value="${ess.other || 0}"></div>
        </div>
        <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4);">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.expenses.saveEssentialModal()">Simpan Anggaran</button>
        </div>
      `);
    },

    saveEssentialModal() {
      App.state.expenses.essential = {
        food: H.parseRp(document.getElementById('modal-exp-food')?.value),
        housing: H.parseRp(document.getElementById('modal-exp-housing')?.value),
        utilities: H.parseRp(document.getElementById('modal-exp-utilities')?.value),
        transport: H.parseRp(document.getElementById('modal-exp-transport')?.value),
        comm: H.parseRp(document.getElementById('modal-exp-comm')?.value),
        other: H.parseRp(document.getElementById('modal-exp-other')?.value),
      };
      App.save();
      App.closeModal();
      this.render();
      App.renderDashboard && App.renderDashboard();
      App.toast('Anggaran pokok esensial berhasil diperbarui ✓', 'success');
    },

    saveEssential() {
      this.saveEssentialModal();
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Catat Pengeluaran</div>
        <div class="form-group">
          <label class="form-label">Deskripsi *</label>
          <input class="form-input" id="exp-desc" placeholder="mis. Kopi, Makan di luar, Beli pulsa darurat">
        </div>
        <div class="form-group">
          <label class="form-label">Jumlah (Rp) *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="exp-amount" placeholder="0"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="exp-cat">
            <option value="eating_out">Makan di Luar / Jajan</option>
            <option value="entertainment">Hiburan / Langganan</option>
            <option value="shopping">Belanja Non-Esensial</option>
            <option value="transport">Transportasi Tambahan</option>
            <option value="health">Kesehatan</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="exp-date" value="${H.today()}">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.expenses.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const desc = document.getElementById('exp-desc').value.trim();
      const amount = H.parseRp(document.getElementById('exp-amount').value);
      if (!desc) { App.toast('Deskripsi pengeluaran wajib diisi', 'error'); return; }
      if (!amount || amount <= 0) { App.toast('Masukkan nominal pengeluaran yang valid (> Rp 0)', 'error'); return; }
      
      App.state.expenses.records.push({
        id: H.uid(),
        description: desc,
        amount,
        category: document.getElementById('exp-cat').value,
        date: document.getElementById('exp-date').value || H.today(),
        essential: false,
      });
      App.state.profile.cash = Math.max(0, (App.state.profile.cash || 0) - amount);
      App.save();
      App.closeModal();
      this.render();
      App.renderDashboard && App.renderDashboard();
      App.toast(`Pengeluaran ${H.formatRp(amount)} dicatat & saldo kas terpotong ✓`, 'success');
    },

    showEdit(id) {
      const exp = App.state.expenses.records.find(e => e.id === id);
      if (!exp) return;

      App.openModal(`
        <div class="modal-title">Edit Pengeluaran</div>
        <div class="form-group">
          <label class="form-label">Deskripsi *</label>
          <input class="form-input" id="ed-exp-desc" value="${H.escHtml(exp.description)}">
        </div>
        <div class="form-group">
          <label class="form-label">Jumlah (Rp) *</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ed-exp-amount" value="${exp.amount}"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="ed-exp-cat">
            <option value="eating_out" ${exp.category==='eating_out'?'selected':''}>Makan di Luar / Jajan</option>
            <option value="entertainment" ${exp.category==='entertainment'?'selected':''}>Hiburan / Langganan</option>
            <option value="shopping" ${exp.category==='shopping'?'selected':''}>Belanja Non-Esensial</option>
            <option value="transport" ${exp.category==='transport'?'selected':''}>Transportasi Tambahan</option>
            <option value="health" ${exp.category==='health'?'selected':''}>Kesehatan</option>
            <option value="other" ${exp.category==='other'?'selected':''}>Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tanggal</label>
          <input type="date" class="form-input" id="ed-exp-date" value="${exp.date || H.today()}">
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.expenses.saveEdit('${id}')">Simpan Perubahan</button>
        </div>
      `);
    },

    saveEdit(id) {
      const exp = App.state.expenses.records.find(e => e.id === id);
      if (!exp) return;
      const desc = document.getElementById('ed-exp-desc').value.trim();
      const amount = H.parseRp(document.getElementById('ed-exp-amount').value);
      if (!desc) { App.toast('Deskripsi pengeluaran wajib diisi', 'error'); return; }
      if (!amount || amount <= 0) { App.toast('Masukkan nominal pengeluaran valid (> Rp 0)', 'error'); return; }

      const diff = amount - exp.amount;
      exp.description = desc;
      exp.amount = amount;
      exp.category = document.getElementById('ed-exp-cat').value;
      exp.date = document.getElementById('ed-exp-date').value || H.today();
      App.state.profile.cash = Math.max(0, (App.state.profile.cash || 0) - diff);

      App.save();
      App.closeModal();
      this.render();
      App.renderDashboard && App.renderDashboard();
      App.toast('Pengeluaran berhasil diperbarui ✓', 'success');
    },
    
    async remove(id) {
      const exp = App.state.expenses.records.find(e => e.id === id);
      const name = exp ? exp.description : 'pengeluaran ini';
      const ok = await App.confirm({
        title: 'Hapus Catatan Pengeluaran?',
        message: `Apakah Anda yakin ingin menghapus catatan pengeluaran "${name}" (${H.formatRp(exp?.amount)})?`,
        confirmText: 'Ya, Hapus',
        cancelText: 'Batal',
        type: 'danger'
      });
      if (ok) {
        if (exp) App.state.profile.cash = (App.state.profile.cash || 0) + exp.amount;
        App.state.expenses.records = App.state.expenses.records.filter(e=>e.id!==id);
        App.save();
        this.render();
        App.renderDashboard && App.renderDashboard();
        App.toast('Pengeluaran dihapus & saldo kas dikembalikan', 'info');
      }
    },
  },

  // ============================================================
  // ASSETS MODULE
  // ============================================================
  assets: {
    render() {
      const s = App.state;
      const assets = s.assets;
      const total = assets.reduce((a,x)=>a+x.value,0);
      const liquid = assets.filter(a=>a.liquidatable && !a.keepForWork).reduce((a,x)=>a+x.value,0);
      
      document.getElementById('asset-total-value').textContent = H.formatRp(total);
      document.getElementById('asset-liquid-value').textContent = H.formatRp(liquid);
      
      document.getElementById('assets-list').innerHTML = assets.length ? assets.map(a=>`
        <div class="income-card">
          <div class="income-icon-bg">${this.catIcon(a.category)}</div>
          <div class="income-info">
            <div class="income-source">${H.escHtml(a.name)}</div>
            <div class="income-meta">${H.escHtml(H.catLabel(a.category))}${a.keepForWork ? ' · Alat kerja' : ''}</div>
          </div>
          <div style="text-align:right">
            <div style="font-weight:700">${H.formatRp(a.value)}</div>
            <div style="font-size:11px;color:${a.liquidatable && !a.keepForWork ? 'var(--green-600)' : 'var(--slate-400)'}">${a.liquidatable && !a.keepForWork ? 'Bisa dijual' : '—'}</div>
            <div style="display:flex;gap:4px;justify-content:flex-end;margin-top:4px;">
              <button class="btn btn-ghost btn-sm" style="padding:4px 8px;font-size:11px;" onclick="App.assets.showEdit('${a.id}')" title="Edit Aset">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                <span>Edit</span>
              </button>
              <button class="btn btn-ghost btn-sm" style="padding:4px 8px;font-size:11px;color:var(--red-600);" onclick="App.assets.remove('${a.id}')" title="Hapus Aset">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span>Hapus</span>
              </button>
            </div>
          </div>
        </div>
      `).join('') : '<div class="empty-state"><div class="empty-state-icon" style="color:var(--teal-600);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg></div><div class="empty-state-title">Belum ada aset</div><div class="empty-state-text">Catat aset untuk mengetahui apa yang bisa dijual saat darurat.</div></div>';
    },
    
    catIcon(cat) {
      const m = {
        cash: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>',
        bank: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
        vehicle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
        electronics: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
        property: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        business: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
        jewelry: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>',
        other: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>'
      };
      return m[cat] || m.other;
    },
    
    showAdd() {
      App.openModal(`
        <div class="modal-title">+ Tambah Aset</div>
        <div class="form-group">
          <label class="form-label">Nama Aset *</label>
          <input class="form-input" id="a-name" placeholder="mis. HP Samsung A54, Motor Beat 2019">
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="a-cat">
            <option value="electronics">Elektronik</option>
            <option value="vehicle">Kendaraan</option>
            <option value="property">Properti</option>
            <option value="cash">Uang Tunai</option>
            <option value="jewelry">Perhiasan</option>
            <option value="business">Peralatan Usaha</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Estimasi Nilai</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="a-value" placeholder="0"></div>
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-2)">
          <div><div class="settings-item-label">Bisa dijual jika darurat?</div></div>
          <label class="toggle"><input type="checkbox" id="a-liquid" checked><span class="toggle-slider"></span></label>
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-4)">
          <div><div class="settings-item-label">Alat kerja utama (Jangan dijual)</div><div class="settings-item-sub">Laptop kerja, motor ojol, dll.</div></div>
          <label class="toggle"><input type="checkbox" id="a-work"><span class="toggle-slider"></span></label>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.assets.saveNew()">Simpan</button>
        </div>
      `);
    },
    
    saveNew() {
      const name = document.getElementById('a-name').value.trim();
      const val = H.parseRp(document.getElementById('a-value').value);
      if (!name) { App.toast('Nama aset wajib diisi', 'error'); return; }
      if (!val || val <= 0) { App.toast('Masukkan estimasi nilai aset yang valid (> Rp 0)', 'error'); return; }
      
      App.state.assets.push({
        id: H.uid(),
        name,
        category: document.getElementById('a-cat').value,
        value: val,
        liquidatable: document.getElementById('a-liquid').checked,
        keepForWork: document.getElementById('a-work').checked,
        notes: '',
      });
      App.save();
      App.closeModal();
      this.render();
      App.toast('Aset berhasil dicatat ✓', 'success');
    },

    showEdit(id) {
      const ast = App.state.assets.find(a => a.id === id);
      if (!ast) return;

      App.openModal(`
        <div class="modal-title">Edit Aset</div>
        <div class="form-group">
          <label class="form-label">Nama Aset *</label>
          <input class="form-input" id="ed-a-name" value="${H.escHtml(ast.name)}">
        </div>
        <div class="form-group">
          <label class="form-label">Kategori</label>
          <select class="form-input form-select" id="ed-a-cat">
            <option value="electronics" ${ast.category==='electronics'?'selected':''}>Elektronik</option>
            <option value="vehicle" ${ast.category==='vehicle'?'selected':''}>Kendaraan</option>
            <option value="property" ${ast.category==='property'?'selected':''}>Properti</option>
            <option value="cash" ${ast.category==='cash'?'selected':''}>Uang Tunai</option>
            <option value="jewelry" ${ast.category==='jewelry'?'selected':''}>Perhiasan</option>
            <option value="business" ${ast.category==='business'?'selected':''}>Peralatan Usaha</option>
            <option value="other" ${ast.category==='other'?'selected':''}>Lainnya</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Estimasi Nilai</label>
          <div class="input-prefix-group"><span class="input-prefix">Rp</span>
          <input type="number" class="form-input" id="ed-a-value" value="${ast.value}"></div>
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-2)">
          <div><div class="settings-item-label">Bisa dijual jika darurat?</div></div>
          <label class="toggle"><input type="checkbox" id="ed-a-liquid" ${ast.liquidatable?'checked':''}><span class="toggle-slider"></span></label>
        </div>
        <div class="settings-item" style="margin-bottom:var(--space-4)">
          <div><div class="settings-item-label">Alat kerja utama (Jangan dijual)</div></div>
          <label class="toggle"><input type="checkbox" id="ed-a-work" ${ast.keepForWork?'checked':''}><span class="toggle-slider"></span></label>
        </div>
        <div style="display:flex;gap:var(--space-3)">
          <button class="btn btn-secondary flex-1" onclick="App.closeModal()">Batal</button>
          <button class="btn btn-primary flex-1" onclick="App.assets.saveEdit('${id}')">Simpan Perubahan</button>
        </div>
      `);
    },

    saveEdit(id) {
      const ast = App.state.assets.find(a => a.id === id);
      if (!ast) return;
      const name = document.getElementById('ed-a-name').value.trim();
      const val = H.parseRp(document.getElementById('ed-a-value').value);
      if (!name) { App.toast('Nama aset wajib diisi', 'error'); return; }
      if (!val || val <= 0) { App.toast('Masukkan estimasi nilai aset yang valid (> Rp 0)', 'error'); return; }

      ast.name = name;
      ast.category = document.getElementById('ed-a-cat').value;
      ast.value = val;
      ast.liquidatable = document.getElementById('ed-a-liquid').checked;
      ast.keepForWork = document.getElementById('ed-a-work').checked;

      App.save();
      App.closeModal();
      this.render();
      App.toast('Aset berhasil diperbarui ✓', 'success');
    },
    
    async remove(id) {
      const ast = App.state.assets.find(a => a.id === id);
      const name = ast ? ast.name : 'aset ini';
      const ok = await App.confirm({
        title: 'Hapus Catatan Aset?',
        message: `Apakah Anda yakin ingin menghapus catatan aset "${name}" (${H.formatRp(ast?.value)})?`,
        confirmText: 'Ya, Hapus',
        cancelText: 'Batal',
        type: 'danger'
      });
      if (ok) {
        App.state.assets = App.state.assets.filter(a=>a.id!==id);
        App.save();
        this.render();
        App.toast('Aset dihapus', 'info');
      }
    },
  },

  // ============================================================
    settings: {
    render() {
      const p = App.state.profile || {};
      const empSelect = document.getElementById('settings-profile-employment');
      const goalSelect = document.getElementById('settings-profile-goal');
      const incInput = document.getElementById('settings-profile-income');
      
      const cashInput = document.getElementById('settings-profile-cash');
      if (empSelect && p.employment) empSelect.value = p.employment;
      if (goalSelect && p.goal) goalSelect.value = p.goal;
      if (incInput) incInput.value = p.monthlyIncome || 0;
      if (cashInput) cashInput.value = p.cash || 0;
      
      const lastExp = App.state.settings.lastExport;
      const lastExpEl = document.getElementById('last-export-text');
      if (lastExpEl) {
        lastExpEl.textContent = lastExp ? `Terakhir export: ${H.formatDate(lastExp)}` : 'Belum pernah di-export';
      }
      
      const remToggle = document.getElementById('backup-reminder-toggle');
      if (remToggle) remToggle.checked = App.state.settings.backupReminderEnabled !== false;
      
      const daysSelect = document.getElementById('backup-days-select');
      if (daysSelect) daysSelect.value = String(App.state.settings.backupReminderDays || 7);
    },

    saveProfileChanges() {
      const emp = document.getElementById('settings-profile-employment')?.value;
      const goal = document.getElementById('settings-profile-goal')?.value;
      const inc = H.parseRp(document.getElementById('settings-profile-income')?.value);
      const cash = H.parseRp(document.getElementById('settings-profile-cash')?.value);

      if (emp) App.state.profile.employment = emp;
      if (goal) App.state.profile.goal = goal;
      App.state.profile.monthlyIncome = Math.max(0, inc);
      App.state.profile.cash = Math.max(0, cash);

      // Re-generate today's missions with the new profile strategy
      delete App.state.missions[H.today()];
      ReboundEngine.generate(App.state);

      App.save();
      App.toast('Profil & target berhasil diperbarui! Misi telah disinkronkan.', 'success');
      App.renderDashboard && App.renderDashboard();
    },

    exportData() {
      const data = JSON.stringify(App.state, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rebound30-backup-${H.today()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      App.state.settings.lastExport = H.today();
      App.save();
      document.getElementById('last-export-text').textContent = `Terakhir export: ${H.formatDate(H.today())}`;
      App.toast('Data berhasil di-export ✓', 'success');
      App.checkBackupBanner && App.checkBackupBanner();
    },
    
    importData() {
      document.getElementById('import-file-input').click();
    },
    
    handleImport(event) {
      const file = event.target.files[0];
      event.target.value = ''; // reset lebih dulu agar file yang sama bisa dipilih ulang
      if (!file) return;

      if (file.size > 25 * 1024 * 1024) {
        App.toast('Berkas terlalu besar untuk backup Rebound 30 (maks 25 MB).', 'error');
        return;
      }

      const reader = new FileReader();

      reader.onerror = () => App.toast('Berkas gagal dibaca. Coba salin ulang file backup-nya.', 'error');

      reader.onload = async (e) => {
        let parsed;
        try {
          parsed = JSON.parse(e.target.result);
        } catch {
          App.toast('Berkas bukan JSON yang sah. Gunakan file backup Rebound 30.', 'error');
          return;
        }

        // Validasi struktural — bukan sekadar cek dua kunci seperti versi lama.
        const check = Store.validateImport(parsed);
        if (!check.ok) {
          App.alert({
            title: 'Berkas Backup Tidak Valid',
            message: `${check.reason}\n\nData kamu saat ini tidak diubah sama sekali.`,
            type: 'danger',
            buttonText: 'Mengerti'
          });
          return;
        }

        const incoming = check.state;
        const ringkasan = [
          `${incoming.debts.length} utang`,
          `${incoming.incomes.length} catatan pemasukan`,
          `${incoming.expenses.records.length} catatan pengeluaran`,
          `${incoming.assets.length} aset`,
          `${incoming.opportunities.length} peluang`,
        ].join(', ');

        const ok = await App.confirm({
          title: 'Ganti Semua Data dengan Backup Ini?',
          message: `Berkas berisi: ${ringkasan}.\nTanggal mulai program: ${H.formatDate(incoming.meta.startDate)}.\n\nSELURUH data yang ada di perangkat ini akan ditimpa dan tidak bisa dikembalikan. Pastikan kamu sudah meng-export data saat ini bila masih dibutuhkan.`,
          confirmText: 'Ya, Timpa Data',
          cancelText: 'Batalkan',
          type: 'danger'
        });
        if (!ok) return;

        App.state = incoming;
        if (!App.save()) return; // Store.onError sudah memberi tahu pengguna
        App.showApp();
        App.navigate('dashboard');
        App.toast('Data berhasil di-import ✓', 'success');
      };

      reader.readAsText(file);
    },
    
    toggleBackupReminder(val) {
      App.state.settings.backupReminderEnabled = val;
      App.save();
    },
    
    setBackupDays(val) {
      App.state.settings.backupReminderDays = parseInt(val);
      App.save();
    },
    
    showRights() {
      App.openModal(`
        <div class="modal-title">Hak-hak Resmi Debitur</div>
        <div class="rights-card" style="margin-bottom:0">
          <h4>Aturan Penagihan (POJK 22/2023 & SEOJK 19/2023)</h4>
          <div class="rights-list">
            <div class="rights-item">Penagihan hanya boleh antara <strong>08.00 – 20.00</strong> waktu setempat</div>
            <div class="rights-item">Penagih wajib bersertifikasi AFPI dan membawa surat tugas resmi</div>
            <div class="rights-item">Tidak boleh menghubungi orang lain (kontak HP, keluarga) tanpa persetujuanmu</div>
            <div class="rights-item">Dilarang: ancaman, kekerasan, kata kasar, penyebaran data, cyberbullying</div>
            <div class="rights-item">Bunga + biaya total tidak boleh melebihi 100% dari pokok pinjaman</div>
            <div class="rights-item">Kamu berhak mengajukan restrukturisasi: perpanjang tenor, kurangi bunga, tunda pokok</div>
            <div class="rights-item">Ajukan secara tertulis (email) sebelum benar-benar macet bayar</div>
          </div>
          <div class="rights-contact">
            Layanan OJK: 157 atau WhatsApp 081-157-157-157<br>
            AFPI: afpi.or.id<br>
            Laporan Siber: patrolisiber.id
          </div>
        </div>
        <div style="margin-top:var(--space-4);padding:var(--space-3);background:var(--slate-50);border-radius:var(--radius-md);font-size:12px;color:var(--color-text-secondary)">
          Info ini bersumber dari OJK dan peraturan yang berlaku. Ini bukan nasihat hukum profesional.
        </div>
        <button class="btn btn-primary btn-full" style="margin-top:var(--space-4)" onclick="App.closeModal()">Mengerti</button>
      `);
    },
    
    async resetData() {
      const ok = await App.confirm({
        title: 'Hapus Semua Data Permanen?',
        message: 'Tindakan ini akan MENGHAPUS SEMUA DATA progres 30 hari, utang, dan transaksi Anda secara permanen.\n\nPastikan Anda sudah mengekspor cadangan file JSON terlebih dahulu jika ingin menyimpan riwayat.',
        confirmText: 'Hapus & Mulai Ulang',
        cancelText: 'Batalkan',
        type: 'danger'
      });
      if (ok) {
        localStorage.removeItem(Store.KEY);
        App.toast('Semua data berhasil direset', 'info');
        setTimeout(() => location.reload(), 400);
      }
    },
  },
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
// ============================================================
// SERVICE WORKER — PENDAFTARAN & PEMBARUAN
// ============================================================
// Sebelumnya pendaftaran dilakukan tanpa memantau pembaruan sama sekali.
// Ketika versi baru dirilis, pengguna harus menutup dan membuka aplikasi
// berulang kali sampai kebetulan mendapat versi terbaru — tanpa satu pun
// petunjuk di layar bahwa pembaruan tersedia.
//
// Sekarang: begitu service worker baru selesai terpasang dan menunggu,
// aplikasi menampilkan tawaran "Muat Ulang". Pengguna tidak perlu tahu
// apa pun soal cache browser.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
      App.sw.pantau(reg);

      // Periksa pembaruan saat aplikasi kembali difokuskan. Tanpa ini,
      // aplikasi yang dibiarkan terbuka berhari-hari di HP tidak pernah
      // memeriksa versi baru.
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') reg.update().catch(function () {});
      });
      window.addEventListener('online', function () { reg.update().catch(function () {}); });
      setInterval(function () { reg.update().catch(function () {}); }, 60 * 60 * 1000);
    }).catch(function (err) {
      console.warn('Pendaftaran service worker gagal:', err);
    });

    // Saat service worker baru mengambil alih, muat ulang SATU kali agar
    // seluruh halaman memakai kode versi yang sama, tidak campur aduk.
    var sudahMuatUlang = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (sudahMuatUlang) return;
      sudahMuatUlang = true;
      window.location.reload();
    });
  });
}