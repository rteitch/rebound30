# 🚀 Rebound 30 — Aplikasi Pendamping Pemulihan Finansial 30 Hari

[![Live App](https://img.shields.io/badge/Live-rebound30.vercel.app-teal?style=for-the-badge&logo=vercel)](https://rebound30.vercel.app/)
[![Buttons Functional](https://img.shields.io/badge/Buttons%20Audit-80%2F80%20(100%25)-blue?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25%20Local%20Storage-emerald?style=for-the-badge)](https://github.com/rteitch/rebound30)

> **Rebound 30** adalah aplikasi web pendamping pemulihan finansial mandiri (*offline-first* PWA) yang memadukan **manajemen keuangan taktis**, **perlindungan hukum konsumen (POJK 22/2023)**, **pendampingan psikologis anti-panik**, dan **arsip inspirasi 7 kisah nyata tokoh yang bangkit dari titik nol**.

---

## 👨‍💻 Developer & Legal Attribution
- **Developer**: `RTH Nexus Rebound 30`
- **Live URL**: [https://rebound30.vercel.app/](https://rebound30.vercel.app/)
- **Repository**: [https://github.com/rteitch/rebound30.git](https://github.com/rteitch/rebound30.git)

---

## 🌟 Fitur Utama & Keunggulan Sistem

### 1. 🚨 Pusat Pertolongan Pertama Mental & Hukum (*SOS First-Aid*)
- **Latihan Pernapasan Anti-Panik (*Box Breathing 4-4-4-4*)**: Animasi interaktif (*Tarik 4d $\to$ Tahan 4d $\to$ Hembuskan 4d $\to$ Tahan 4d*) yang terbukti secara klinis menurunkan hormon stres saat krisis utang.
- **Skrip Hukum Lawan Teror Penagih (POJK No. 22/POJK.04/2023)**: Template balasan WhatsApp resmi siap salin (*1-Click Copy*) untuk menghadapi debt collector ilegal dengan dasar hukum perlindungan konsumen OJK & Pasal 19 Ayat 2 UU HAM.
- **Protokol Darurat Keuangan Minus (*Survival Triage*)**: Hierarki kelangsungan hidup (1. Pangan & Tempat Tinggal $\to$ 2. Kesehatan $\to$ 3. Pokok Utang).

### 2. 🧠 Jangkar Mental & Mindset Harian (*30-Day Mindset Engine*)
- Setiap hari (Hari 1–30) dilengkapi **prinsip stoik & spiritual**, **kutipan aksi tokoh nyata**, dan **fokus mental harian** yang disesuaikan secara adaptif dengan fase pemulihan.
- *Anti-Shame Coaching System* pada `ScoreEngine` yang memvalidasi keberanian pengguna sekecil apa pun tanpa penghakiman.

### 3. 📚 Perpustakaan Kisah Bangkit (*Real-Life Recovery Library*)
Arsip kurasi 9 tokoh nyata dengan antarmuka majalah digital (*Dedicated Magazine Reader*), garis waktu kejatuhan & kebangkitan, fakta finansial, kutipan emas, dan jembatan aksi misi harian:
1. **Shao Baoling (邵宝玲)** — Ratu Koper Yiwu $\to$ Pemilik 3 Toko Bakpao (Utang > Rp 220 M)
2. **Tang Jian (唐健)** — Raja Restoran Qingdao $\to$ Kios Sosis Panggang 25 m² (Utang Rp 100 M)
3. **M. Taufik Hendradinata** — Mantan Raja Laundry $\to$ Pabrik Skincare Salina Herbal (Utang Rp 2,2 M)
4. **Suryo Hadi Pranoto** — TKI Taiwan $\to$ Showroom 1.000 Unit Mobil Kacunk Motor
5. **Suprianto** — Karyawan Kantoran $\to$ Dapur Produksi Semi-Modern Siomay Wondes
6. **Mat Yasin** — Penjual Kue Bapel $\to$ Miliarder Besi Tua & Pembangun Jalan Aspal 10 KM Sampang Madura (Utang Rp 3 M)
7. **Genta Gantara** — Mahasiswa Terjebak Investasi Bodong Usia 23 Thn $\to$ Bos Developer Properti & Konstruksi Cimahi (Utang Rp 500 Jt)
8. **Rini Sudarwanti** — Usaha Makanan Sepi & Terjerat Rentenir Harian $\to$ Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur 2026
9. **Dian Agustin** — 350 Cabang Pizza Runtuh & Bedeng Modal Rp 100 Ribu $\to$ Kerajaan Sambal Alu 150 Karyawan

### 4. 📋 30-Day Daily Mission Engine (100% Zero-Confusion)
- Menghasilkan 3–5 misi harian dinamis berdasarkan 4 Fase:
  - **Fase 0 (Hari 1–4): Survive** — Amankan pangan, tempat tinggal, dan hentikan gali lubang.
  - **Fase 1 (Hari 5–14): Create Cash** — Outreach 3 prospek harian, lamaran kerja kilat, monetisasi aset.
  - **Fase 2 (Hari 15–21): Stabilize** — Bangun langganan rutin (*retainer*), pangkas bocor halus, restrukturisasi pokok.
  - **Fase 3 (Hari 22–30): Debt Attack** — Eksekusi pelunasan bola salju (*Snowball/Avalanche*).
- 100% dari 14 template misi dilengkapi **Alasan (*Why*)**, **Langkah Panduan (*Steps 1, 2, 3*)**, dan **Template WhatsApp/Email Siap Salin**.

### 5. 🛡️ 100% Privasi & Offline-First (PWA)
- Seluruh data transaksi, utang, pengeluaran, dan jurnal tersimpan secara lokal di browser (`localStorage`).
- Tidak ada data yang dikirim ke server luar. Tersedia fitur Ekspor/Impor JSON untuk pencadangan manual.

---

## 🏛️ Arsitektur Kode Modular

```text
d:\Project\ui\
├── index.html              # Antarmuka utama & penampung modul SPA
├── manifest.json           # Konfigurasi PWA (Installable di Android/iOS/Desktop)
├── sw.js                   # Service Worker untuk dukungan 100% Offline
├── vercel.json             # Konfigurasi deploy hosting Vercel
├── README.md               # Dokumentasi lengkap proyek
├── css/
│   └── styles.css          # Sistem Desain CSS murni (Color tokens, SOS, Reader, Cards)
├── js/
│   ├── icons.js            # Kamus 20+ ikon SVG inline mandiri (Zero-CDN)
│   ├── helpers.js          # Utilitas format mata uang Rupiah, kalkulasi hari, sanitasi HTML
│   ├── store.js            # Engine persistensi reaktif localStorage & snapshot harian
│   ├── engine.js           # ScoreEngine, MindsetEngine, ReboundEngine, & Achievements
│   ├── stories.js          # Controller Perpustakaan Kisah & Reader Interaktif (7 Tokoh)
│   └── app.js              # Router utama, lifecycle controller, & modal SOS First-Aid
└── tests/
    ├── istqb_test_suite.js        # Formal ISTQB Test Suite (EP, BVA, STT, Integration)
    ├── test_simulation_30days.js  # Simulasi otomatis siklus perjalanan Hari 1 s.d. 30
    └── audit_all_buttons.js       # Audit otomatis 80 tombol & handler interaktif
```

---

## 🧪 Validasi & Pengujian Otomatis (Automated Testing Suite)

Seluruh logika perhitungan finansial, alur fase pemulihan, dan antarmuka aplikasi telah melalui pengujian otomatis menyeluruh:

| Modul Pengujian | Cakupan Pengujian | Status Hasil |
| :--- | :--- | :--- |
| **Financial Engine & Logic** | Pengujian partisi cashflow, pembagian fase, batasan threshold runway, dan ketahanan data. | **23/23 PASSED (100%)** |
| **30-Day Lifecycle Simulation** | Simulasi otomatis transisi Hari 1 hingga Hari 30, perhitungan Rebound Score, dan pembukaan achievement. | **23/23 PASSED (100%)** |
| **Interactive Buttons Audit** | Verifikasi integritas seluruh 80 atribut aksi tombol dan fungsi callback antarmuka. | **80/80 VALID (100%)** |
| **30-Day Daily Mission Audit** | Verifikasi ketersediaan misi harian, panduan langkah, dan template pesan di 30 hari penuh. | **130/130 MISI VALID** |

Untuk menjalankan pengujian secara lokal:
```bash
node tests/istqb_test_suite.js
node tests/test_simulation_30days.js
node tests/audit_all_buttons.js
```

---

## 🚀 Panduan Menjalankan & Instalasi

### 1. Jalankan di Browser Lokal
Cukup buka file `index.html` langsung di browser modern (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### 2. Pasang di Android / iOS (PWA)
1. Buka tautan [https://rebound30.vercel.app/](https://rebound30.vercel.app/) di browser HP.
2. Klik tombol **"Install Aplikasi"** atau menu browser `⋮` $\to$ **"Tambahkan ke Layar Utama" / "Add to Home Screen"**.
3. Aplikasi akan terpasang di menu utama HP dan dapat digunakan 100% tanpa internet.

---

## 📄 Lisensi & Hak Cipta
Hak Cipta © 2026 **RTH Nexus Rebound 30**. Seluruh hak dilindungi undang-undang.
Dibuat untuk membantu masyarakat bangkit dari keterpurukan finansial dengan martabat, integritas, dan strategi yang terbukti.
