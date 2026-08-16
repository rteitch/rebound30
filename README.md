# 🚀 Rebound 30 — Aplikasi Pendamping Pemulihan Finansial 30 Hari

[![Live App](https://img.shields.io/badge/Live-rebound30.vercel.app-teal?style=for-the-badge&logo=vercel)](https://rebound30.vercel.app/)
[![Buttons Functional](https://img.shields.io/badge/Buttons%20Audit-104%2F104%20(100%25)-blue?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![ISTQB Certified](https://img.shields.io/badge/ISTQB%20Testing-23%2F23%20PASSED-emerald?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![Financial Sync](https://img.shields.io/badge/Financial%20Sync-5--Pillar%20Real--Time-success?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25%20Local%20Storage-emerald?style=for-the-badge)](https://github.com/rteitch/rebound30)

> **Rebound 30** adalah aplikasi web pendamping pemulihan finansial mandiri (*offline-first* PWA) yang memadukan **5 Pilar Arus Kas Real-Time**, **perlindungan hukum konsumen (POJK 22/2023 & UU HAM)**, **pendampingan psikologis anti-panik**, **peta jalan 30 hari interaktif**, dan **arsip inspirasi 20 kisah nyata tokoh yang bangkit dari titik nol**.

---

## 👨‍💻 Developer & Legal Attribution
- **Developer**: `RTH Nexus Rebound 30`
- **Live Production URL**: [https://rebound30.vercel.app/](https://rebound30.vercel.app/)
- **Repository GitHub**: [https://github.com/rteitch/rebound30.git](https://github.com/rteitch/rebound30.git)

---

## 🌟 Fitur Utama & Keunggulan Arsitektur Sistem

### 1. 💎 5 Pilar Finansial & Dashboard 2-Tier Real-Time (*Cross-Module Live Sync*)
Aplikasi mengintegrasikan 5 pilar finansial utama dalam tata letak **2-Tier Balanced Overview** yang lega dan proporsional:
- **Baris 1 — Pilar Arus Kas Bulanan (*Cashflow*)**:
  - 💵 **Uang Tunai (Kas)**: Menampilkan kas likuid (dompet, rekening, e-wallet) yang otomatis bertambah saat mencatat pemasukan dan berkurang saat pengeluaran/cicilan utang dibayar.
  - 📈 **Pemasukan / Bulan**: Menjumlahkan gaji pokok rutin + seluruh pemasukan harian & freelance bulan berjalan.
  - 📉 **Pengeluaran / Bulan**: Menjumlahkan anggaran pokok esensial + pengeluaran harian, dengan indikator warna pintar (kuning = aman, merah = defisit).
- **Baris 2 — Pilar Neraca & Ketahanan (*Balance Sheet*)**:
  - 💳 **Total Sisa Utang Aktif**: Sisa utang riil yang berkurang seketika setiap mencatat pembayaran pokok, lengkap dengan indikator *Runway Kas* atau badge **`Bebas Utang Total 🎉`**.
  - 💎 **Total Estimasi Aset**: Total kekayaan barang berharga dengan subtext pintar nilai barang yang **bisa dijual darurat** tanpa mengorbankan alat kerja.

### 2. 🚨 Pusat Pertolongan Pertama Mental & Hukum (*SOS First-Aid 100% SVG*)
- **Modal Popup Terpusat (*Strictly Centered Modal*)**: Tampil tepat di tengah layar pada semua perangkat (HP, Tablet, Desktop) dengan *backdrop blur* elegan dan animasi *pop-in*.
- **100% Ikon Vektor SVG Monokrom**: Bebas dari emotikon/emoji, menyajikan antarmuka yang bersih, profesional, dan tajam.
- **Latihan Pernapasan Anti-Panik (*Box Breathing 4-4-4-4*)**: Animasi visual lingkaran (*Tarik 4s $\to$ Tahan 4s $\to$ Hembuskan 4s $\to$ Tahan 4s*) untuk meredakan stres dan mengembalikan ketenangan akal sehat.
- **Skrip Hukum Lawan Teror Penagih (POJK No. 22/POJK.04/2023)**: Draf pesan WhatsApp resmi siap salin (*1-Click Copy*) untuk menghadapi penagihan tidak beretika berdasarkan regulasi OJK & Pasal 19 Ayat 2 UU HAM.
- **Protokol Darurat Keuangan Minus (*Survival Triage*)**: Hierarki mutlak bertahan hidup (1. Pangan & Tempat Tinggal $\to$ 2. Kesehatan & Energi Kerja $\to$ 3. Pokok Utang).

### 3. ⚙️ Rekonfigurasi Profil & Target di Tengah Perjalanan (*Mid-Journey Settings*)
Pengguna dapat mengubah data dan strategi di tengah program 30 hari tanpa kehilangan riwayat atau mereset progres:
- **Ubah Status Pekerjaan**: Menyesuaikan bobot misi harian dari pencarian kerja ke pengembangan usaha/freelance.
- **Ubah Target Utama 30 Hari**: Mengalihkan fokus prioritas misi (`CRITICAL` / `HIGH`).
- **Penyesuaian Saldo Kas & Pemasukan Bulanan**: Mengoreksi saldo uang tunai kapan saja langsung di menu Pengaturan.
- **Atur Anggaran Pokok (Esensial)**: Tombol modal di menu Pengeluaran untuk menyesuaikan jatah pangan, sewa, listrik, dan transportasi bulanan.

### 4. 📝 Operasi CRUD Lengkap di Seluruh Entitas (*Full Edit & Delete Support*)
Seluruh entitas data di dalam aplikasi memiliki fitur **Tambah (+)**, **Edit (Ubah Data)**, dan **Hapus (dengan Konfirmasi Modal Aman)**:
- **Utang**: Tambah utang, catat pembayaran cicilan/pokok, catat log negosiasi, edit data bunga/tenor, dan hapus utang.
- **Pemasukan**: Catat pemasukan harian, edit nominal/kategori, dan hapus catatan.
- **Pengeluaran**: Catat pengeluaran tambahan, atur budget esensial, edit catatan, dan hapus catatan.
- **Aset**: Tambah aset baru, tandai likuiditas darurat, edit nilai taksiran, dan hapus aset.
- **Peluang / Lamaran**: Tambah prospek, ubah status pipa (*Pipeline*), dan hapus peluang.

### 5. 🗺️ Roadmap 30 Hari Interaktif & Mitigasi Krisis Tak Terduga (*Menu Rencana*)
- **Peta Jalan 30 Hari Lengkap**: Memuat rincian fokus dan sub-tugas untuk masing-masing hari dari Hari ke-1 hingga Hari ke-30 terbagi dalam 4 fase:
  - **Fase 1 (Hari 1–4): Survive** — Pemetaan total, kunci kebutuhan pokok, stop gali lubang.
  - **Fase 2 (Hari 5–14): Create Cash** — Kecepatan perputaran kas 24–48 jam, outreach 3 prospek harian, monetisasi aset tidur.
  - **Fase 3 (Hari 15–21): Stabilize** — Konversi klien rutin, pangkas bocor halus, restrukturisasi pokok ke kreditur.
  - **Fase 4 (Hari 22–30): Debt Attack** — Eksekusi pelunasan bola salju (*Snowball / Avalanche*).
- **Status Pelaksanaan Harian**: Penanda badge dinamis (`Telah Dilalui`, `Hari Ini`, `Mendatang`).
- **4 Protokol Mitigasi Kejadian Tak Terduga**:
  1. *Teror Penagih*: Tombol SOS siaga 24/7.
  2. *Uang Menipis (<7 Hari)*: Rebound Engine otomatis menyuntikkan misi darurat *Pemasukan Cepat*.
  3. *Sakit / Berhalangan*: **Zero Penalty System** — Tidak ada reset progres ke Hari 1.
  4. *Pendapatan Drop*: Modul restrukturisasi dan draf negosiasi keringanan cicilan.

### 6. 🧠 Matriks Keputusan Adaptif Multi-Variabel (*Adaptive Decision Engine*)
Sistem mengolah 3 keputusan profil awal secara terpadu tanpa *gap* logika melalui 960 permutasi pengujian:
- **Status Pekerjaan (*Employment Baseline*)**:
  - *Tidak Bekerja / PHK*: Memacu misi `JOB_APPLICATION` dan `CLIENT_OUTREACH` kilat, mengunci pangan keluarga (`CUT_EXPENSE`).
  - *Freelance / Usaha Kecil*: Memacu penawaran 3 prospek harian dan program langganan bulanan (`BUILD_RECURRING`).
  - *Pekerja Harian*: Mendorong pesanan harian dan peningkatan keterampilan (`SKILL_BUILDING`).
  - *Bekerja Kurang*: Mendorong *side-income* lepas dan restrukturisasi tenor cicilan (`NEGOTIATION`).
- **Keahlian (*Skills Intangible Assets*)**:
  - Menyuntikkan nama keahlian (Desain, Programming, Servis, Kuliner, dll.) langsung ke dalam draf instruksi tugas harian dan template chat WhatsApp siap salin.
  - Memberikan bobot **+15 Poin Visibility** pada Rebound Score.
- **Target Utama 30 Hari (*Primary Goal Driver*)**:
  - Mengarahkan prioritas `CRITICAL` ke misi yang sesuai target (`Pemasukan Pertama`, `Dapat Kerja`, `Kurangi Utang`, `Pemasukan Rutin`, atau `Bantu Keluarga`).

### 7. 📚 Perpustakaan 20 Kisah Nyata Bangkit dari Utang (*20 Real-Life Recovery Stories*)
Arsip kurasi 20 tokoh nyata dengan antarmuka majalah digital (*Dedicated Magazine Reader*), garis waktu kejatuhan & kebangkitan, fakta finansial, kutipan emas, dan jembatan aksi misi harian:
1. **Shao Baoling (邵宝玲)** — Ratu Koper Yiwu $\to$ Pemilik 3 Toko Bakpao (Utang > Rp 220 M)
2. **Tang Jian (唐健)** — Raja Restoran Qingdao $\to$ Kios Sosis Panggang 25 m² (Utang Rp 100 M)
3. **M. Taufik Hendradinata** — Mantan Raja Laundry $\to$ Pabrik Skincare Salina Herbal (Utang Rp 2,2 M)
4. **Suryo Hadi Pranoto** — TKI Taiwan $\to$ Showroom 1.000 Unit Mobil Kacunk Motor
5. **Suprianto** — Karyawan Kantoran $\to$ Dapur Produksi Semi-Modern Siomay Wondes
6. **Mat Yasin** — Penjual Kue Bapel $\to$ Miliarder Besi Tua & Pembangun Jalan Aspal 10 KM Sampang Madura (Utang Rp 3 M)
7. **Genta Gantara** — Mahasiswa Terjebak Investasi Bodong Usia 23 Thn $\to$ Bos Developer Properti & Konstruksi Cimahi (Utang Rp 500 Jt)
8. **Rini Sudarwanti** — Usaha Makanan Sepi & Terjerat Rentenir Harian $\to$ Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur 2026
9. **Dian Agustin** — 350 Cabang Pizza Runtuh & Bedeng Modal Rp 100 Ribu $\to$ Kerajaan Sambal Alu 150 Karyawan
10. **Eko Susanto & Dwi Rizky Setiawan** — Kontraktor Tambang Minus Rp 2 Miliar & Makan Nasi Garam $\to$ Bakso Sritikah Ekspor Hong Kong & Pabrik 27 Staf
11. **Sirivat Voravetvuthikun** — CEO Asia Securities Utang Rp 500 Miliar Krisis Asia 1997 $\to$ "The Sandwich Man" Bangkok & Jaringan Gerai
12. **Amber & Ryan Duncan** — Bangkrut 40 Properti Hilang Krisis Subprime 2008 $\to$ "Life After Debt" Berharta Rp 814 Miliar (US$ 50 Juta)
13. **Wang Peng (王鹏)** — Mewarisi Utang Ayah Rp 580 Miliar $\to$ Pelopor Terminal Satelit Beidou & Gelar Hengyang Good People 2023
14. **Donanto** — Bangkrut Menjual Rumah & Menyewa Rumah Sendiri $\to$ Eksportir Sidat Jepang, Duta Unagi & Pemilik 5 Perusahaan
15. **Heppy Trenggono** — Utang Bank Niaga Rp 63 Miliar & Sedekah di Masa Kritis $\to$ United Balimuda Group 80.000 Ha Sawit (Rp 7 Triliun)
16. **Yosep** — Mewarisi Usaha Orang Tua Utang Rp 700 Juta Usia 24 Thn $\to$ Pemilik 3 Pabrik Kerupuk Sehati Omset Miliaran/Bulan
17. **Kia Raya (Siti Khoiriah)** — Kasir Indomaret Usia 15 Thn Bayar Utang Ortu & Modal Rp 100 Ribu $\to$ Pabrik Mie Lidi Si Umang & Owner Indomaret
18. **Steve Sonnenberg** — Pailit Gugatan Hukum FTC & 4 Anak Balita $\to$ Modal Domain $5.000 Kartu Kredit ke Unicorn Awardco ($1 Miliar / Rp 16 T)
19. **Arif Sanyoto (Kang Arif)** — Bangkrut Kerugian Rp 1,5 Miliar & Modal Terakhir Rp 108.000 $\to$ Lumpia Sortalok 5.000 Pcs/Hari & Penulis Buku 27 Hari Bebas Utang
20. **Bonzor** — Utang Rp 15 Miliar & Selamat dari Racun Serangga $\to$ Makelar Besi, Sedekah Rp 2,5 M, Lunas 40 Hari & Pengasuh 37 Anak Yatim

### 8. 🛡️ 100% Privasi & Offline-First (PWA Service Worker v4 & Self-Hosted Fonts)
- Seluruh data transaksi, utang, pengeluaran, dan jurnal tersimpan secara lokal di browser masing-masing (`localStorage`) tanpa server pusat.
- Font `Plus Jakarta Sans` di-host secara lokal di direktori `/fonts/` untuk memastikan independensi 100% dari jaringan luar.
- Tersedia fitur Ekspor/Impor JSON dengan validasi skema untuk pencadangan manual.

---

## 🏛️ Arsitektur Kode Modular

```text
d:\Project\ui\
├── index.html              # Antarmuka utama SPA, drawer mobile, 5-Pillar dashboard, & modal SOS
├── manifest.json           # Konfigurasi PWA (Installable di Android/iOS/Desktop)
├── sw.js                   # Service Worker v4 dengan caching offline dan self-hosted fonts
├── vercel.json             # Konfigurasi deploy hosting Vercel
├── README.md               # Dokumentasi lengkap proyek
├── css/
│   ├── fonts.css           # Konfigurasi self-hosted Plus Jakarta Sans font-face
│   └── styles.css          # Sistem Desain CSS murni (Color tokens, 2-Tier Stats, SOS, Reader, Cards)
├── fonts/                  # Berkas font lokal woff2 (Plus Jakarta Sans Regular, SemiBold, Bold)
├── js/
│   ├── icons.js            # Kamus 20+ ikon SVG inline mandiri (Zero-CDN)
│   ├── helpers.js          # Utilitas format mata uang Rupiah, kalkulasi hari, sanitasi HTML
│   ├── store.js            # Engine persistensi reaktif localStorage & snapshot harian
│   ├── engine.js           # ScoreEngine, MindsetEngine, ReboundEngine, & Achievements
│   ├── stories.js          # Controller Perpustakaan Kisah & Reader Interaktif (20 Tokoh)
│   └── app.js              # Router utama, lifecycle controller, 5-Pillar Sync, CRUD & modal SOS
└── tests/
    ├── istqb_test_suite.js        # Formal ISTQB Test Suite (EP, BVA, STT, Integration)
    ├── test_simulation_30days.js  # Simulasi otomatis siklus perjalanan Hari 1 s.d. 30
    ├── audit_all_buttons.js       # Audit otomatis 104 tombol & handler interaktif
    └── deep_gap_audit.js          # Pengujian 960 permutasi matriks keputusan tanpa gap
```

---

## 🧪 Validasi & Pengujian Otomatis (*Automated Testing Suite*)

Seluruh logika perhitungan finansial, alur fase pemulihan, dan antarmuka aplikasi telah melalui pengujian otomatis menyeluruh:

| Modul Pengujian | Cakupan Pengujian | Status Hasil |
| :--- | :--- | :--- |
| **Financial Engine & Logic** | Pengujian partisi cashflow, pembagian fase, batasan threshold runway, dan ketahanan data. | **23/23 PASSED (100%)** |
| **30-Day Lifecycle Simulation** | Simulasi otomatis transisi Hari 1 hingga Hari 30, perhitungan Rebound Score, dan pembukaan achievement. | **23/23 PASSED (100%)** |
| **Interactive Buttons Audit** | Verifikasi integritas seluruh 104 atribut aksi tombol dan fungsi callback antarmuka. | **104/104 VALID (100%)** |
| **Decision Matrix Gap Audit** | Audit komprehensif 960 permutasi variabel (Pekerjaan x Skill x Target x Fase). | **0 GAP / 100% COVERED** |
| **30-Day Daily Mindset Audit** | Verifikasi ketersediaan jangkar mindset harian, kutipan tokoh, dan prinsip stoik di 30 hari penuh. | **30/30 HARI LENGKAP (100%)** |

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
