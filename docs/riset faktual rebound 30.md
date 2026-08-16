# Riset Faktual — Rebound 30

> **Companion Document untuk PRD v1.0.0**
>
> **Tujuan:** Menguji asumsi produk dengan data, regulasi, dan riset akademik
> **Status:** Riset v1.0 — input untuk revisi PRD
> **Tanggal:** 2026-08-16
> **Metode:** 13 pencarian terpisah ke sumber resmi (OJK, BPS), jurnal peer-reviewed, dan media/regulasi terkini. PRD asli discan penuh — nol rujukan riset ditemukan di dalamnya (produk sudah solid, tapi belum punya fondasi fakta).

---

## 0. Ringkasan Eksekutif

PRD Rebound 30 secara struktur produk sudah sangat matang — persona, fase recovery, mission engine, data model, semuanya jelas. Yang belum ada: bukti bahwa asumsi-asumsi di baliknya benar, dan konteks Indonesia yang membuat rekomendasi di dalam app relevan secara hukum dan realistis secara ekonomi.

**Lima temuan paling material:**

| # | Temuan | Implikasi |
|---|---|---|
| 1 | Strategi debt (Avalanche/Snowball/Risk First) di Section 17.3 **persis cocok dengan konsensus akademik** — bukan hanya cocok, tapi ada mekanisme psikologis spesifik yang bisa dieksploitasi untuk desain UI | Validasi kuat, plus satu penambahan konkret yang murah untuk diimplementasikan |
| 2 | Section 62 (Legal & Compliance) hanya berisi checklist generik. **UU PDP secara eksplisit mengklasifikasikan data keuangan pribadi sebagai "data spesifik"** yang butuh consent eksplisit, bukan consent umum | Ini gap kepatuhan paling berisiko di seluruh PRD — app ini justru mengumpulkan hampir semua kategori data spesifik yang disebutkan UU |
| 3 | Prinsip "No Shame", "Small Wins", "Action Over Anxiety" (Section 7) **punya dasar neurosains yang sangat kuat** (scarcity theory) — bukan sekadar filosofi produk yang enak didengar | Validasi kuat; beri tim alasan untuk tidak mengkompromikan prinsip ini demi growth hack yang menghakimi |
| 4 | Krisis yang jadi konteks app ini **nyata dan memburuk**: TWP90 fintech lending naik dari ~2,8% (2025) ke ~4,4–4,6% (2026), mendekati batas aman OJK 5% | Target market bukan asumsi — ini tren yang terverifikasi dan sedang berjalan |
| 5 | Pengguna punya **hak hukum konkret** (restrukturisasi, jam tagih terbatas, jalur komplain) yang sama sekali belum masuk ke Negotiation Tracker (Section 18) atau Content Strategy (Section 60) | Ini fitur "gratis" — bukan pekerjaan riset baru, tinggal dimasukkan sebagai template/konten |

Detail dan sumber untuk masing-masing ada di bagian berikut. Bagian 8 merangkum semua rekomendasi dalam satu tabel yang bisa langsung dipetakan ke nomor section PRD.

**Cara membaca tingkat keyakinan:** 🟢 = data resmi pemerintah/regulator atau jurnal peer-reviewed (tinggi). 🟡 = laporan media kredibel atau sumber industri, angka tunggal yang belum tertriangulasi (sedang — cek ulang sebelum dipakai di materi pemasaran/klaim publik).

---

## 1. Psikologi & Perilaku Pelunasan Utang

Ini yang paling penting untuk Section 17.3 (Debt Strategy) dan Section 7 (Product Principles) — karena keduanya adalah *taruhan desain*, bukan sekadar fitur.

### 1.1 Avalanche vs Snowball: apa kata riset 🟢

PRD sudah menawarkan Avalanche, Snowball, Risk First, dan Custom sebagai pilihan user. Ini ternyata bukan cuma "memberi pilihan supaya user senang" — ada tiga penelitian yang saling menguatkan:

| Studi | Metode | Temuan |
|---|---|---|
| Amar, Ariely, Ayal, Cryder & Rick (2011), *Journal of Marketing Research* | 4 eksperimen lab dengan "debt management game" | Orang secara konsisten membayar utang terkecil dulu meski bunga bukan yang tertinggi — fenomena ini mereka namakan **"debt account aversion"**. Progres nyata (akun tertutup) terasa lebih memotivasi daripada progres abstrak (bunga berkurang) |
| Gal & McShane (2012), *Journal of Marketing Research* | Data lapangan dari perusahaan debt settlement (bukan lab) | Proporsi akun yang **ditutup** adalah prediktor lebih kuat untuk pelunasan total dibanding proporsi nominal utang yang berkurang. Ini mengkonfirmasi temuan lab di dunia nyata |
| Hamilton (2023), *Southern Economic Journal* | Data Survey of Consumer Finances 2016 | Snowball memang menghasilkan biaya bunga riil yang lebih tinggi dibanding avalanche — tapi untuk rumah tangga yang berisiko berhenti di tengah jalan, biaya itu bisa lebih murah daripada rencana optimal yang ditinggalkan |

**Kesimpulan untuk Rebound 30:** Avalanche menang secara matematis, tapi hanya kalau user benar-benar menyelesaikannya. Snowball menang secara *completion rate* karena "menutup akun" terasa seperti kemenangan meski secara matematis kurang efisien. Empat pilihan yang sudah ada di Section 17.3 sudah tepat — jangan disederhanakan jadi satu strategi "terbaik".

**Satu penambahan konkret, murah untuk diimplementasikan:** Amar et al. (2011) juga menemukan bahwa membatasi kemampuan user melunasi penuh utang terkecil, DAN menampilkan total bunga yang sudah terakumulasi, membuat perilaku pembayaran jadi lebih optimal — user tetap termotivasi tapi tidak sepenuhnya mengabaikan bunga. Untuk Rebound 30: di layar Debt List (17.1) atau Dashboard (25), tampilkan **"Total bunga yang sudah terbayar bulan ini"** sebagai angka yang selalu terlihat, apa pun strategi yang dipilih user. Ini nudge murah yang punya dasar eksperimen langsung.

### 1.2 Kenapa "Action Over Anxiety" dan "No Shame" bukan cuma jargon 🟢

Section 7.1, 7.4, dan 7.5 PRD (Action Over Anxiety, No Shame, Small Wins) punya dasar riset yang jauh lebih kuat dari yang mungkin disadari tim produk — ini bukan filosofi UX generik, ini temuan neurosains yang direplikasi.

Mullainathan & Shafir (2013) dalam buku *Scarcity: Why Having Too Little Means So Much* (Henry Holt) mengusulkan bahwa kelangkaan (uang, waktu) menghabiskan "bandwidth kognitif" — kapasitas otak untuk fokus, mengambil keputusan, dan merencanakan ke depan. Temuan paling konkret ada di Mani, Mullainathan, Shafir & Zhao (2013), dipublikasikan di jurnal *Science*: saat orang berpenghasilan rendah diminta memikirkan masalah finansial hipotetis (misalnya biaya servis mobil), performa kognitif mereka di tes yang tidak berhubungan **turun setara ~13–14 poin IQ** — penurunan yang lebih besar dari efek begadang semalaman penuh. Yang penting: petani tebu yang sama, diuji sebelum panen (saat uang menipis) vs sesudah panen (saat uang cukup), menunjukkan pola yang sama persis. Artinya ini bukan soal karakter atau kecerdasan orangnya — ini efek situasional dari tekanan finansial itu sendiri, dan hilang begitu tekanannya hilang.

**Implikasi langsung untuk desain:**
- Memecah masalah jadi 3–5 mission harian (Section 14) sejalan dengan temuan bahwa di bawah scarcity, kapasitas untuk merencanakan hal kompleks berkurang — task kecil dan konkret adalah yang bisa dieksekusi otak yang sedang "penuh"
- "No Shame" (7.4) bukan sekadar tone yang sopan — bahasa yang menyalahkan menambah beban kognitif/emosional yang justru mempersempit bandwidth lebih jauh, membuat user makin sulit membuat keputusan baik. ini siklus yang app **secara sadar** harus memutus, bukan menghindari secara kebetulan
- Rekomendasi tambahan: pertimbangkan encode prinsip ini secara eksplisit di Section 44 (AI Assistant Requirements) sebagai constraint — respons AI Coach di masa depan tidak boleh meminta user melakukan perencanaan multi-langkah yang rumit dalam satu momen, terutama saat skor Cashflow atau Emergency Mode aktif

---

## 2. Siapa yang Akan Memakai Rebound 30: Konteks Makro Indonesia

Ini menguji apakah tiga persona di Section 6 benar-benar mewakili proporsi populasi yang realistis.

### 2.1 Pasar tenaga kerja 🟢 (BPS, rilis Mei & Agustus 2026)

| Indikator | Angka | Periode |
|---|---|---|
| Tingkat Pengangguran Terbuka (TPT) | 4,65% (7,22 juta orang) | Mei 2026 — **terendah sejak 1994** |
| Angkatan kerja | 155,41 juta orang | Mei 2026 |
| Bekerja formal | 60,31 juta orang (40,70%) | Mei 2026 |
| **Bekerja informal** | **87,88 juta orang** | Mei 2026 |
| Setengah pengangguran (1–34 jam/minggu, masih mencari kerja) | 7,27% dari yang bekerja | Feb 2026 |
| Pekerja paruh waktu | 25,97% dari yang bekerja | Feb 2026 |
| Rata-rata upah buruh | Rp 3,29–3,39 juta/bulan | Feb–Mei 2026 |

**Temuan paling penting:** pekerja informal (87,88 juta) jumlahnya **hampir 1,5x lipat** pekerja formal (60,31 juta). Ditambah 7,27% setengah-pengangguran dan 25,97% paruh waktu, mayoritas riil angkatan kerja Indonesia berada di kondisi pemasukan tidak stabil — bukan pengecualian.

**Implikasi untuk PRD:** Section 6.2 ("Persona — Irregular Income") saat ini diposisikan sebagai persona kedua, setelah "Unemployed Debtor" (6.1). Data ini menunjukkan irregular income kemungkinan besar adalah kondisi *default* bagi mayoritas pengguna potensial, bukan sub-kasus. Onboarding (11.2, Employment Status) sudah mengakomodasi ini dengan baik ("Freelance", "Pekerja harian", "Usaha kecil") — cukup pastikan copy dan mission engine (Section 16) tidak diam-diam mengasumsikan target akhirnya adalah "pekerjaan tetap", karena untuk mayoritas populasi ini, itu bukan hasil yang realistis maupun yang diinginkan.

### 2.2 Kesenjangan literasi vs inklusi keuangan 🟢 (SNLIK 2025, OJK + BPS)

| Indeks | 2024 | 2025 | Target 2029 |
|---|---|---|---|
| Literasi keuangan | 65,43% | 66,46% | 69,35% |
| Inklusi keuangan | 75,02% | 80,51% | 93% |
| **Selisih (gap)** | 9,59 poin | **14,05 poin** | — |

Gap-nya melebar, bukan menyempit. Ini secara harfiah adalah mekanisme di balik krisis yang jadi konteks Rebound 30: makin banyak orang **punya akses** ke produk keuangan (pinjol, paylater, kartu kredit) dibanding yang benar-benar **paham** cara memakainya dengan aman. Survei ini melibatkan 10.800 responden usia 15–79 di 34 provinsi, dan UU P2SK (UU No. 4/2023) secara eksplisit mewajibkan pelaku sektor keuangan menyediakan edukasi literasi — artinya Rebound 30 secara tidak langsung mengisi mandat yang sudah diakui negara sebagai kebutuhan, bukan sekadar ide produk yang berdiri sendiri.

---

## 3. Lanskap Pinjaman Online (Pinjol) & Regulasi OJK

Ini krusial untuk Debt Management (Section 17), khususnya kolom "risk level" yang sudah ada di 17.1 tapi belum punya definisi konkret.

### 3.1 Skala krisis, per data terbaru 🟢

| Bulan 2026 | TWP90 (kredit macet 90 hari) | TWP90 bulan sama 2025 | Outstanding pembiayaan |
|---|---|---|---|
| Januari | 4,38% | — | — |
| Februari | 4,54% | 2,78% | Rp 100,69 T |
| Maret | 4,52% | 2,77% | — |
| April | 4,62% | 2,93% | Rp 102,07 T |
| Mei | 4,42% (membaik) | — | Rp 103,73 T (+25,6% YoY) |

Batas aman yang ditetapkan OJK adalah **5%** — angka April 2026 (4,62%) sudah cukup dekat. OJK menjatuhkan sanksi ke 18 penyelenggara P2P lending (Feb 2026) dan 16 penyelenggara (Mar 2026) karena TWP90 individual mereka melebihi 5%, didominasi segmen pembiayaan produktif UMKM. Secara geografis, per Mei 2026, DKI Jakarta punya TWP90 tertinggi di **11,23%** — jauh di atas rata-rata nasional — diikuti Jawa Timur (4,85%) dan NTB (3,87%).

Penindakan pinjol ilegal: **951 entitas** diblokir OJK hanya dalam Januari–26 Februari 2026 saja; total sejak 2018 sudah lebih dari **3.193 aplikasi/situs**. Jumlah penyelenggara pinjol legal per pertengahan 2026 ada di kisaran **95–97 perusahaan**.

### 3.2 Batas bunga legal — angka yang harus dipakai app untuk deteksi risiko 🟢

Ini fakta paling actionable di seluruh riset ini untuk fitur risk scoring:

| Sektor | 2024 | 2025 | 2026 |
|---|---|---|---|
| Konsumtif (tenor >6 bulan) | 0,3%/hari | 0,2%/hari | **0,1%/hari** (~3%/bulan) |
| Produktif/UMKM | 0,1%/hari | 0,1%/hari | **0,067%/hari** |

Dasar hukum: SEOJK No. 19/SEOJK.05/2023. Dua proteksi tambahan yang berlaku sepanjang 2026:

- **Batas total biaya**: bunga + biaya admin + denda, gabungan, tidak boleh melebihi **100% dari pokok pinjaman** — proteksi "gali lubang tutup lubang" yang keras
- **Batas rasio cicilan terhadap pendapatan 30%** (SEOJK 19/2025, turunan POJK 40/2024) — diberlakukan bertahap sepanjang 2026, membatasi penyelenggara pinjol legal memberi pinjaman baru yang cicilannya melebihi 30% penghasilan peminjam
- Sejak **31 Juli 2025** (POJK No. 11/2024), seluruh pinjol legal wajib lapor ke **SLIK OJK** (dulu BI Checking) — gagal bayar di pinjol sekarang memengaruhi riwayat kredit untuk KPR, kartu kredit, dan pinjaman bank di masa depan, bukan cuma masalah lokal di satu platform

**Implikasi untuk Section 17.1/17.2:** field "interest" dan "risk level" di Debt List bisa dibuat semi-otomatis — jika bunga yang diinput user melebihi batas legal di atas jauh (indikasi umum pinjol ilegal sering mematok bunga tanpa batas jelas, potong admin 30–40% di muka, dan minta akses kontak/galeri), app bisa menampilkan flag informasional (bukan penilaian hukum) bahwa pinjaman ini kemungkinan berasal dari penyelenggara ilegal — dengan pointer ke cara verifikasi resmi di OJK, bukan klaim pasti.

---

## 4. Regulasi Penagihan Utang & Hak Pengguna

Ini seharusnya jadi konten langsung di Negotiation Tracker (Section 18), Content Strategy (Section 60), dan Emergency Mode (Section 29) — bukan riset abstrak, tapi hak konkret yang bisa langsung jadi copy di aplikasi.

### 4.1 Aturan penagihan yang berlaku 🟢

Dasar hukum: POJK No. 22/2023 (Pelindungan Konsumen dan Masyarakat di Sektor Jasa Keuangan), SEOJK No. 19/SEOJK.05/2023, dan Kode Etik AFPI.

| Aturan | Ketentuan |
|---|---|
| Jam penagihan | Hanya 08.00–20.00 waktu setempat |
| Siapa yang boleh menagih | Internal resmi platform, atau pihak ketiga bersertifikat AFPI dengan surat tugas |
| Kontak pasangan | Hanya jika disetujui/disepakati oleh pasangan yang bersangkutan |
| Dilarang keras | Ancaman, kekerasan, mempermalukan di depan umum, menyebar data ke kontak/pihak tidak berhak, kata kasar/SARA, penyitaan paksa (untuk pinjaman tanpa agunan), cyberbullying di media sosial |
| Sanksi pelanggar | Pidana 2–10 tahun + denda Rp25–250 miliar (Pasal 306 UU No. 4/2023 tentang P2SK); institusi bisa kena denda administratif hingga Rp15 miliar dan pencabutan izin |
| Jalur komplain | OJK: telepon 157 / WhatsApp 081-157-157-157 · AFPI: afpi.or.id · Kepolisian (ancaman/pemerasan): patrolisiber.id |

### 4.2 Hak restrukturisasi — ini fitur "gratis" untuk Negotiation Tracker 🟡🟢

Kepala Eksekutif Pengawas Perilaku OJK, Frederica Widyasari Dewi, secara terbuka menyatakan pesan yang relevan langsung untuk desain app: **jangan kabur, jangan pindah alamat/kota saat tidak mampu bayar** — itu dianggap itikad buruk dan justru mempersulit negosiasi. Yang direkomendasikan OJK adalah mengajukan restrukturisasi secara proaktif.

Bentuk keringanan yang lazim ditawarkan (bukan otomatis disetujui — tergantung analisis risiko masing-masing penyelenggara):
- Perpanjangan tenor
- Penurunan atau penghapusan bunga
- Pengurangan/penghapusan denda keterlambatan
- Penundaan pembayaran pokok/bunga (umumnya 3, 6, 9, atau 12 bulan)

Dokumen pendukung yang biasa diminta: KTP, bukti penurunan pendapatan, surat PHK, atau surat keterangan sakit. Proses yang disarankan: ajukan **sebelum** benar-benar macet bayar (bukan sesudah), kirim permohonan tertulis (email, agar ada jejak bukti), jelaskan kondisi secara jujur, follow-up jika tidak direspons, eskalasi ke layanan konsumen OJK jika diabaikan. Penting untuk dicatat: **restrukturisasi tidak menghapus utang** — hanya mengubah skema pembayaran, dan riwayatnya bisa tercatat di SLIK.

**Rekomendasi konkret:** field `Offer` dan `Status` di Negotiation Tracker (Section 18) bisa diberi template siap-pakai berdasarkan poin-poin di atas ("Perpanjangan tenor", "Penurunan bunga", dst. sebagai pilihan dropdown), dan Content Strategy (60) bisa memuat mikro-konten yang menjelaskan hak ini secara langsung — ini selaras dengan Non-Goals (5) karena app tetap tidak menghubungi kreditur otomatis, hanya membekali user dengan informasi dan template sebelum mereka bertindak sendiri.

### 4.3 PKPU/Kepailitan — konteks, bukan fitur inti 🟢

Untuk kelengkapan risiko hukum (relevan ke faktor "risiko hukum" di 17.2): individu dengan utang ke lebih dari satu kreditur bisa mengajukan **PKPU** (Penundaan Kewajiban Pembayaran Utang, UU No. 37/2004) lewat Pengadilan Niaga — ini memberi masa tenang untuk merundingkan rencana perdamaian sebelum berpotensi jatuh ke kepailitan (sita umum seluruh aset, dikelola kurator). Prosesnya formal, berbayar (biaya kurator/pengurus ditanggung debitur), dan secara realistis relevan untuk kasus multi-kreditur berskala besar — bukan skenario khas pengguna Rebound 30 di fase awal. **Rekomendasi:** cukup disebut sebagai catatan edukasi di Content Strategy atau FAQ, bukan fitur yang dibangun di MVP.

---

## 5. Perlindungan Data Pribadi (UU PDP) — Gap Kritis

Ini bagian paling penting untuk direspons sebelum production launch, karena Section 62 PRD saat ini hanya berisi checklist umum ("privacy policy", "consent", "local regulatory review") tanpa menyebut UU yang sebenarnya berlaku.

### 5.1 Fakta inti 🟢

- **UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi**, disahkan 17 Oktober 2022, **berlaku penuh sejak Oktober 2024** (masa transisi 2 tahun sudah berakhir)
- Pasal 4 ayat (3) mengklasifikasikan **data keuangan pribadi sebagai "data spesifik"** — kategori yang sama dengan data kesehatan, biometrik, genetika, dan catatan kejahatan. Data spesifik butuh **consent eksplisit** dan tujuan pemrosesan yang dibatasi ketat — jauh lebih ketat dari data umum (nama, alamat)
- Rebound 30, berdasarkan data model di Section 33 (Debt, Income, Expense, Asset), **hampir seluruhnya** memproses data yang masuk kategori ini
- Kewajiban lain: penunjukan **DPO** (Data Protection Officer) untuk pemrosesan skala besar/data spesifik, notifikasi kebocoran data ke otoritas **dalam 14 hari kerja**, **Penilaian Dampak Perlindungan Data Pribadi (DPIA)** untuk pemrosesan berisiko tinggi, dan hak subjek data (akses, koreksi, hapus, portabilitas)
- Sanksi administratif hingga **2% dari pendapatan tahunan**, di luar teguran tertulis dan penghentian sementara pemrosesan
- **Status kelembagaan (per Mei 2026):** Badan Pelindungan Data Pribadi — badan independen yang diamanatkan UU ini — **belum resmi berdiri**. Pengawasan sementara dipegang Kementerian Komunikasi dan Digital (Kemkomdigi) selagi Perpres kelembagaan masih dalam proses harmonisasi di Kementerian Hukum. Ini bukan berarti kewajiban hukumnya lebih longgar — hanya berarti alamat pengaduan resminya masih berpindah tangan

### 5.2 Rekomendasi konkret ke Section 30, 62

| Yang sudah ada di PRD | Yang perlu ditambahkan |
|---|---|
| "Privacy First" (7.7), "Data finansial adalah data sensitif" | Kaitkan eksplisit ke Pasal 4(3) UU PDP — bukan cuma prinsip produk, tapi kewajiban hukum berkategori "data spesifik" |
| Section 30: HTTPS, enkripsi, Argon2id, dst. | Ini kontrol teknis yang bagus, tapi UU PDP juga menuntut kontrol *prosedural*: consent flow eksplisit saat onboarding (bukan checkbox tunggal "Setuju Syarat & Ketentuan"), mekanisme hapus/koreksi data yang bisa dieksekusi user sendiri (skema sudah cocok dengan Section 52 "Data persists after app restart" — tinggal ditambah hak hapus per-item) |
| Section 62: checklist generik | Tambahkan item eksplisit: (a) DPIA sebelum fitur apa pun yang memproses debt/income data di-deploy ke production, (b) evaluasi kebutuhan DPO begitu skala user bertambah, (c) prosedur notifikasi breach 14 hari kerja sebagai bagian dari incident response, bukan hanya "secure backups" |

**Catatan penting:** ini adalah riset faktual mengenai regulasi yang berlaku, bukan nasihat hukum. Sebelum production launch, poin ini layak dibawa ke konsultasi dengan praktisi hukum privasi data — terutama untuk memastikan interpretasi "skala besar" dan kebutuhan DPO sesuai kondisi riil user base Rebound 30 nantinya.

---

## 6. Strategi Peningkatan Income

Input langsung untuk fase "Create Cash" (Section 8, hari 5–14) dan Opportunity Tracker (Section 20).

### 6.1 Lanskap kerja lepas & gig di Indonesia 🟢🟡

| Kanal | Karakteristik |
|---|---|
| Platform freelance lokal (Projects.co.id, Sribulancer) | Transaksi Rupiah, komunikasi Bahasa Indonesia, klien lokal — lebih mudah untuk pemula tanpa portofolio internasional |
| Platform freelance global (Upwork, Fiverr) | Bayaran USD/EUR, komisi lebih tinggi di awal (Upwork: 20% untuk $0–500 pertama per klien, turun ke 10% lalu 5%; Fiverr: ~20%), butuh reputasi/portofolio untuk bersaing |
| Ojol/kurir/delivery | Regulasi pekerja baru: **Perpres No. 27/2026** tentang Perlindungan Pekerja Transportasi Online; Kementerian Perhubungan menyiapkan **batas komisi 8%** untuk layanan roda dua, berlaku mulai **1 Juli 2026** |
| 🟡 Jumlah freelancer nasional | Menurut laporan media (mengutip BPS), lebih dari 4 juta orang Indonesia bekerja sebagai freelancer, jumlah terus naik — angka ini belum saya verifikasi langsung ke rilis resmi BPS, perlakukan sebagai estimasi arah tren, bukan angka presisi |

**Peringatan penting yang harus masuk desain app, bukan cuma disebut:** laporan lapangan menunjukkan sebagian pekerja gig (terutama ojol) menempuh **12–14 jam kerja per hari** untuk mencapai penghasilan layak — fleksibilitas yang berubah jadi eksploitasi diri. Ini bukan argumen untuk menghindari gig work sebagai sumber Create Cash — tapi argumen kuat untuk **tidak** membiarkan mission engine (Section 16) mendorong target jam kerja yang tidak berkelanjutan. Ini justru memperkuat, bukan bertentangan dengan, prinsip 7.2 yang sudah ada ("Survival Before Aggressive Debt Payment") — prinsip yang sama berlaku untuk mencegah "aggressive income chasing" yang mengorbankan kesehatan.

Catatan tambahan: pekerja lepas tidak otomatis punya jaminan sosial (BPJS Kesehatan/Ketenagakerjaan) — ditanggung sendiri — dan penghasilan freelance tetap kena kewajiban pajak penghasilan di bawah UU HPP. Dua poin ini cocok jadi mikro-konten edukatif di Section 60, bukan bagian dari calculation engine.

**Rekomendasi untuk Section 20 (Opportunity Tracker):** tambahkan field `Channel` dengan pilihan preset (Projects.co.id, Sribulancer, Upwork, Fiverr, Ojol/Kurir, Direct client, Marketplace/reseller, Lainnya) — memudahkan user mencatat tanpa mengetik manual, dan memudahkan tim produk menganalisis kanal mana yang paling sering menghasilkan konversi.

---

## 7. Lanskap Kompetitor

| Produk | Fokus | Yang membedakan dari Rebound 30 |
|---|---|---|
| **Finansialku** | Budgeting + perencanaan finansial + konsultasi CFP berbayar | Berorientasi perencanaan jangka panjang (dana pensiun, pendidikan) — bukan untuk kondisi krisis akut/tanpa income |
| **Finku** | Pencatatan otomatis + daily check-in habit; lulus Regulatory Sandbox OJK (No. S-217/IK.01/2024) | Fokus habit-building keuangan umum, bukan spesifik debt+unemployment; juga punya lini B2B kesejahteraan finansial karyawan |
| **BukuWarung** | Pembukuan UMKM, dengan fitur pencatatan utang-piutang yang detail | Ditujukan untuk pencatatan bisnis kecil, bukan pemulihan finansial personal |
| **Money Lover** | Pengingat tagihan/utang, sinkronisasi kartu | Expense tracker dengan fitur utang sebagai tambahan, bukan inti produk |
| **FLIN** | **Konsultasi restrukturisasi utang berbayar** — menegosiasikan langsung ke kreditur atas nama klien, plus dana talangan | Kompetitor terdekat secara masalah yang diselesaikan, tapi modelnya manusia-ke-manusia (konsultan), berbayar, butuh kunjungan fisik ke kantor — bukan app self-serve |

**Kesimpulan positioning:** Tidak ada satu pun pemain di atas yang menggabungkan (a) daily action-mission bergaya coach, (b) "unemployed + berutang" sebagai persona utama — bukan sub-kasus dari budgeting umum, (c) filosofi "no shame" sebagai prinsip desain eksplisit, dan (d) coaching income-generation terintegrasi dengan debt tracking dalam satu alur. Keberadaan FLIN justru validasi yang baik: ada demand nyata (orang mau bayar untuk bantuan restrukturisasi utang) — ruang yang tersedia untuk Rebound 30 adalah versi gratis/self-serve dari kebutuhan yang sama, dengan lapisan coaching harian yang belum ada di pasar.

---

## 8. Rekomendasi Perubahan PRD — Ringkasan

| Section PRD | Status saat ini | Rekomendasi | Prioritas |
|---|---|---|---|
| 62. Legal & Compliance | Checklist generik, tanpa rujukan UU spesifik | Tambahkan UU PDP No. 27/2022 secara eksplisit, DPIA sebagai deliverable pra-launch, evaluasi kebutuhan DPO | **Tinggi** |
| 30. Privacy & Security | Kontrol teknis lengkap, tapi belum ada consent flow eksplisit untuk data spesifik | Tambahkan onboarding consent per-kategori data (bukan satu checkbox umum), hak hapus per-item | **Tinggi** |
| 18. Debt Negotiation Tracker | Field generik (Offer, Response, dst.) | Isi `Offer` dengan template restrukturisasi resmi (perpanjangan tenor, penurunan bunga, dst.) berdasar praktik OJK/AFPI | Sedang |
| 60. Content Strategy | Contoh konten masih generik | Isi dengan hak konkret user: jam tagih 08.00–20.00, larangan intimidasi, jalur komplain OJK 157/AFPI, hak restrukturisasi | Sedang |
| 17.1 Debt List | Field "risk level" tanpa definisi | Beri heuristik berbasis batas bunga legal 2026 (0,1%/hari konsumtif) untuk flag informasional dugaan pinjol ilegal | Sedang |
| 25. Dashboard / 17.1 Debt List | Belum ada tampilan bunga terakumulasi | Tambahkan "Total bunga terbayar bulan ini" — nudge berbasis Amar et al. (2011) | Rendah–Sedang |
| 20. Opportunity Tracker | Field `Type` tanpa preset kanal | Tambahkan dropdown Channel (Projects.co.id, Upwork, Ojol, dst.) | Rendah |
| 16. Rebound Engine | Belum ada guardrail jam kerja | Cegah mission INCOME_TASK mendorong target jam kerja tidak berkelanjutan (selaras 7.2) | Sedang |
| 6.2 Persona Irregular Income | Diposisikan sebagai persona kedua | Pertimbangkan reweight — data BPS menunjukkan ini kemungkinan kondisi mayoritas, bukan sekunder | Rendah |

---

## 9. Batasan Riset & Langkah Selanjutnya

Riset ini disusun dari sumber publik (situs resmi OJK/BPS, media kredibel, jurnal akademik) per Agustus 2026, dan **bukan pengganti nasihat hukum atau finansial profesional** — ini sejalan dengan Non-Goals (5) yang sudah ditetapkan PRD sendiri. Sebelum production launch, dua hal ini layak dikonsultasikan ke profesional:

1. **Kepatuhan UU PDP** — khususnya apakah skala pemrosesan data Rebound 30 di berbagai tahap pertumbuhan mewajibkan penunjukan DPO, dan bentuk konkret DPIA yang sesuai
2. **Batas perimeter regulasi OJK** — app ini secara desain bukan penyelenggara jasa keuangan (tidak memberi pinjaman, tidak menjadi marketplace pinjaman), tapi begitu ada fitur yang menyentuh agregasi data rekening bank atau saran finansial yang lebih personal/otomatis (relevan untuk "AI Coach" di Section 65/Future Direction), ada baiknya diperiksa apakah itu menyentuh perimeter pengawasan OJK (beberapa aplikasi pencatatan keuangan sejenis tercatat melalui Regulatory Sandbox OJK — lihat Finku di Bagian 7)

**Langkah lanjutan yang masuk akal:**
- Riset kualitatif langsung: wawancara 5–10 orang yang cocok dengan tiga persona di Section 6, untuk menguji apakah bahasa "No Shame" dan alur onboarding benar-benar terasa aman bagi mereka
- Draft awal DPIA sebelum Sprint 1 (Onboarding) dimulai, karena onboarding adalah titik pertama app mengumpulkan data spesifik
- Update PRD Section 62 dengan referensi UU yang sudah dikonfirmasi di riset ini

---

## Daftar Referensi

**Akademik (peer-reviewed):**
- Amar, M., Ariely, D., Ayal, S., Cryder, C.E., & Rick, S.I. (2011). "Winning the battle but losing the war: The psychology of debt management." *Journal of Marketing Research*, 48(SPEC ISSUE), S38–S50.
- Gal, D., & McShane, B. (2012). "Can Fighting Small Battles Help Win the War? Evidence from Consumer Debt Management." *Journal of Marketing Research*, 49(4), 487–501.
- Hamilton, B. (2023). "Two steps forward, one step back? Quantifying the pecuniary costs of debt account aversion and the debt snowball." *Southern Economic Journal*, 89(3), 830–859.
- Mani, A., Mullainathan, S., Shafir, E., & Zhao, J. (2013). "Poverty Impedes Cognitive Function." *Science*, 341(6149), 976–980.
- Mullainathan, S., & Shafir, E. (2013). *Scarcity: Why Having Too Little Means So Much*. Henry Holt & Co.

**Data & regulasi resmi:**
- OJK — Statistik P2P Lending, siaran pers TWP90 bulanan 2026 (ojk.go.id)
- OJK & BPS — Survei Nasional Literasi dan Inklusi Keuangan (SNLIK) 2025 (ojk.go.id)
- BPS — Rilis Tingkat Pengangguran Terbuka, Februari & Mei 2026 (bps.go.id)
- UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi
- UU No. 4 Tahun 2023 tentang Pengembangan dan Penguatan Sektor Keuangan (P2SK)
- UU No. 37 Tahun 2004 tentang Kepailitan dan Penundaan Kewajiban Pembayaran Utang
- POJK No. 22/2023, SEOJK No. 19/SEOJK.05/2023, POJK No. 11/2024, POJK No. 40/2024, SEOJK 19/2025

**Media & industri (dipakai untuk data terkini/konteks pasar):**
- Kontan, Antara News, CNN Indonesia, Kompas, Tempo — pemberitaan TWP90, pengangguran, dan regulasi pinjol sepanjang 2026
- AFPI (afpi.or.id) — kode etik dan data statistik fintech pendanaan bersama
- Situs produk kompetitor: Finansialku, Finku, BukuWarung, FLIN

---

*Dokumen ini adalah companion riset untuk PRD Rebound 30 v1.0.0, bukan revisi PRD itu sendiri. Rekomendasi di Bagian 8 siap dipetakan ke masing-masing section saat PRD direvisi ke v1.1.0.*