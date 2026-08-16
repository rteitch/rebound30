# 🚀 Rebound 30 — Aplikasi Pendamping Pemulihan Finansial 30 Hari

[![Live App](https://img.shields.io/badge/Live-rebound30.vercel.app-teal?style=for-the-badge&logo=vercel)](https://rebound30.vercel.app/)
[![Buttons Functional](https://img.shields.io/badge/Buttons%20Audit-110%2F110%20(100%25)-blue?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![Tests](https://img.shields.io/badge/Automated%20Tests-425%2F425%20PASSED-emerald?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![Gap Audit](https://img.shields.io/badge/Decision%20Matrix-1440%20Permutasi%20%C2%B7%200%20Gap-blueviolet?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![Financial Sync](https://img.shields.io/badge/Financial%20Sync-5--Pillar%20Real--Time-success?style=for-the-badge)](https://github.com/rteitch/rebound30)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25%20Local%20Storage-emerald?style=for-the-badge)](https://github.com/rteitch/rebound30)

> **Rebound 30** adalah aplikasi web pendamping pemulihan finansial mandiri (*offline-first* PWA) yang memadukan **5 Pilar Arus Kas Real-Time**, **perlindungan hukum konsumen (POJK 22/2023 & UU HAM)**, **pendampingan psikologis anti-panik**, **peta jalan 30 hari interaktif**, dan **arsip inspirasi 52 kisah nyata tokoh yang bangkit dari titik nol**.

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
Sistem mengolah keputusan profil awal secara terpadu tanpa *gap* logika, diverifikasi lewat sapuan 1.440 permutasi pengujian:
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

### 7. 📚 Perpustakaan 52 Kisah Nyata Bangkit dari Utang (*52 Real-Life Recovery Stories*)
Arsip kurasi 52 tokoh nyata dengan antarmuka majalah digital (*Dedicated Magazine Reader*), garis waktu kejatuhan & kebangkitan, fakta finansial, kutipan emas, dan jembatan aksi misi harian:

1. **Shao Baoling (邵宝玲)** — Ratu Koper Yiwu $\to$ Pemilik 3 Toko Bakpao (Utang > Rp 220 M)
2. **Tang Jian (唐健)** — Raja Restoran Qingdao $\to$ Kios Sosis Panggang 25 m² (Utang Rp 100 M)
3. **M. Taufik Hendradinata (Hendra)** — Mantan Raja Laundry Ditipu Rp 800 Jt $\to$ Tidur Teras Masjid $\to$ Pabrik Skincare Salina Herbal CPKB BPOM (Utang Rp 2,2 M)
4. **Suryo Hadi Pranoto** — Mantan TKI Taiwan & Bangkrut $\to$ Showroom 1.000 Unit Mobil Kacunk Motor Tulungagung
5. **Suprianto** — Terlilit Utang Kartu Kredit $\to$ Dapur Produksi Semi-Modern Siomay Wondes
6. **Mat Yasin** — Penjual Kue Bapel $\to$ Miliarder Besi Tua & Pembangun Jalan Aspal 10 KM Sampang Madura (Utang Rp 3 M)
7. **Genta Gantara** — Mahasiswa Terjebak Investasi Bodong Usia 23 Thn $\to$ Bos Developer Properti & Konstruksi Cimahi (Utang Rp 500 Jt)
8. **Bonzor** — Utang Rp 15 Miliar & Selamat dari Racun Serangga $\to$ Makelar Besi, Sedekah Rp 2,5 M, Lunas 40 Hari & Pengasuh 37 Anak Yatim
9. **Arif Sanyoto (Kang Arif)** — Bangkrut Kerugian Rp 1,5 Miliar & Modal Terakhir Rp 108.000 $\to$ Lumpia Sortalok 5.000 Pcs/Hari & Penulis Buku 27 Hari Bebas Utang
10. **Steve Sonnenberg** — Pailit Gugatan Hukum FTC & 4 Anak Balita $\to$ Modal Kartu Kredit ke Unicorn Awardco ($1 Miliar / Rp 16 T)
11. **Kia Raya (Siti Khoiriah)** — Kasir Indomaret Usia 15 Thn Bayar Utang Ortu & Modal Rp 100 Ribu $\to$ Pabrik Mie Lidi Si Umang & Owner Indomaret
12. **Yosep** — Mewarisi Usaha Kerupuk Orang Tua Utang Rp 700 Juta Usia 24 Thn $\to$ Inovasi Mesin Oven & Pemilik 3 Pabrik Kerupuk Sehati Ciamis
13. **Heppy Trenggono** — Utang Bank Niaga Rp 63 Miliar & Gerakan Beli Indonesia $\to$ United Balimuda Group 80.000 Ha Sawit (Rp 7 Triliun)
14. **Donanto** — Bangkrut Menjual Rumah & Menyewa Rumah Sendiri $\to$ Eksportir Sidat Jepang, Duta Unagi & Pemilik 5 Perusahaan
15. **Wang Peng (王鹏)** — Mewarisi Utang Ayah Rp 580 Miliar $\to$ Pelopor Terminal Satelit Beidou & Gelar Hengyang Good People 2023
16. **Amber & Ryan Duncan** — Bangkrut 40 Properti Hilang Krisis Subprime 2008 $\to$ Platform "Life After Debt" Berharta Rp 814 Miliar (US$ 50 Juta)
17. **Sirivat Voravetvuthikun** — CEO Asia Securities Utang Rp 500 Miliar Krisis Asia 1997 $\to$ "The Sandwich Man" Bangkok & Jaringan Gerai
18. **Eko Susanto & Dwi Rizky Setiawan** — Kontraktor Tambang Minus Rp 2 Miliar & Modal Rp 120 Ribu $\to$ Bakso Sritikah Ekspor Hong Kong & Pabrik 27 Staf
19. **Dian Agustin** — 350 Cabang Pizza Runtuh & Bedeng Modal Rp 100 Ribu $\to$ Kerajaan Sambal Alu 150 Karyawan
20. **Rini Sudarwanti** — Usaha Makanan Sepi & Terjerat Rentenir Harian $\to$ Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur 2026
21. **Muhammad Catur Gunandi (Mister Catur)** — Terlilit Utang Rp 2,5 Miliar $\to$ Bangkit Bangun Brand Keripik & Pembina Komunitas Bisnis Anti-Riba
22. **Nani Kurniasari** — Terjerat Utang Rp 2 Miliar & Diteror Debt Collector $\to$ Bangkit Lewat Sambal Kemasan & Berdayakan Ibu-Ibu
23. **Syaikhul Hadi** — Terjerat 800 Cek Kosong & Utang Bank Miliaran $\to$ Bangkit Jadi Produsen Pupuk PT Keraton Agri Ponorogo
24. **Baim Wong (Muhammad Ibrahim)** — Restoran Pablo Kolaps & Utang Rp 1,5 Miliar $\to$ Berjuang Melunasi Sendiri & Bangkit Membangun Ekosistem Digital-F&B
25. **Krisna Mukti** — Gagal Pileg 2019, Tabungan Habis & Terjerat Utang Rp 2 Miliar $\to$ Bangkit Jual Barang Antik & Keluar dari Depresi
26. **Chen Zhao (陈兆)** — Utang Keluarga 20 Juta Yuan (Rp 44 Miliar) di Usia 24 Thn $\to$ Lunas 7 Tahun Murni dari Karya Seni & Kursus Kaligrafi Wuhan
27. **Syakir Daulay** — Terlilit Utang Produksi Film Rp 5 Miliar di Usia 20 Thn $\to$ Pasrah, Dibimbing Guru & Melunasi Seluruh Kewajiban
28. **Pasek Reksa (Gede Pasek Reksa Saputra)** — Pandemi COVID-19, PHK, Ortu Cerai & Utang Rp 500 Jt $\to$ Transformasi Mindset, Ketua WMS & Pengusaha Madu-Properti Bali
29. **Maimun** — Bencana Banjir Bandang Situ Gintung 2009 Rugi Rp 1 M + Utang Rp 250 Jt $\to$ Bangkit Bangun Pabrik Furnitur "Bangket Sejati"
30. **Fauzi Priambodo** — Adiksi Utang Bank Rp 140 Miliar $\to$ Jual 20 Toko, Hijrah SyaREA World & Bangun PT Inspirasi Prima Nusantara Bebas Utang
31. **Susilowati (Ibu Susi)** — Kontrak Kendang Jimbe Ekspor Macet & Utang Bank Rp 300 Jt $\to$ Olah Limbah Kayu via TikTok, Ekspor & Berangkat Haji 2023
32. **Feby Eki Prasetyo (Fepto)** — Runtuh Bisnis Kripto Usia 20 Thn Utang Rp 2 M $\to$ Lunas 3 Bulan, Bangun Fepto Group & Ekspansi AI/Payment Gateway Asia
33. **Ican Suherlan (Coach Ican)** — Kehilangan Ibu dalam Perampokan, Sakit Langka 1 Thn di RS & Utang Rp 10 M $\to$ Bangkit Cariilmu 200k+ Peserta & IBJ Group
34. **Menlu** — Anak Nelayan, Distributor Semen Bangkrut Utang Miliaran $\to$ Modal 5 Cetakan Beton Jadi "Raja Beton Banyuwangi" (Rabanton) & Dermaga Apung
35. **Tri Dawang** — Mitos Utang Wajib, Utang Rp 350 M & 800 Cek Kosong $\to$ Disiplin Finansial Dawang Group Tumbuh Sehat Tanpa Utang
36. **Mulyono (Pak Mul)** — 17 Tahun Bergantung Utang Rp 40 Miliar $\to$ Hijrah SyaREA World, Riset Rp 2 M Gratis ke Afrika, Panen Padi Kamerun Naik 40%
37. **Tommy Wong** — Anak Jalanan, Ditipu Mitra Puluhan Miliar Nyaris Dipenjara $\to$ Berserah Diri, Lunas 2 Tahun Jadi CEO Victorindo Group & Pengajar Anak Jalanan
38. **Deni Lukman** — Sales Garuda Food Pacitan, Utang Rp 1 Miliar ke Supplier $\to$ Pengorbanan Emas Istri, Negosiasi & Digitalisasi Toko Tenang Tanpa Riba
39. **Suyono** — Pernah Tinggal di Kolong Jembatan, 3x Gagal Panen Tebu & Utang Bank Rp 40 Jt $\to$ Toko Dinding Terpal ke 2.000 Toko se-Indonesia (Rp 10 Jt/Hari)
40. **Ridwan Ghany** — Pandemi COVID-19, Bisnis Ibu Kolaps & Utang Rp 5 Miliar $\to$ Ikhlas Jual Rumah Impian & Mobil, Bangkit dari Nol Didampingi Istri
41. **Ahmad Nasa'i** — Dicap Gelandangan & Sulit Beli Beras Pasca Bangkrut $\to$ Bangun Mitraku Toko Sembako & Bahan Kue Terbesar Ciamis (800 Pelanggan/Hari)
42. **Devy Anastasia** — Tertekan Utang Rp 1 Miliar Saat Kompetisi MasterChef S9 $\to$ Ubah Mindset, Negosiasi Jujur & Endorse Gratis, Lunas 1 Tahun Jadi Miliarder
43. **Eka Nugraha** — Ekspansi Telekomunikasi Bogor Terlalu Agresif Utang Rp 350 Miliar $\to$ SyaREA World, Pangkas 50% Utang 1 Tahun & Tumbuh Mandiri
44. **Yasa Singgih** — Bangkrut Kedai Kopi Rp 150 Jt, Utang Rp 1,5 M Men's Republic $\to$ Forbes 30 Under 30 Asia di Usia 20 Thn, Lunas 2020 & Rebranding Republic
45. **Bambang Mustari Sadino (Bob Sadino)** — Warisan Habis, Rental Mobil Hancur Tabrakan & Kuli Bangunan Rp 100/Hari $\to$ Pelopor Ayam Negeri & Pendiri Kem Chicks / KemFood
46. **Mohammad Jusuf Hamka (Babah Alun)** — Rugi Ratusan Juta Dolar AS Dalam 3 Jam Krismon 1998 & 2 Minggu Tak Bisa Makan $\to$ Doa Sajadah & Ikhlas, Bangkit Jadi Pemilik PT CMNP Tbk ("Raja Jalan Tol")
47. **Ir. Ciputra (Tjie Tjin Hoan)** — Krismon 1998 Utang Membengkak Rp 1 Triliun & 3 Perusahaan Ditutup $\to$ Prinsip Integritas IPE & Restrukturisasi Tuntas 2004, Kerajaan Properti Aset Rp 84,5 Triliun
48. **Johan Sunjoto (Johnny Andrean)** — 75 Cabang Salon Runtuh Tersisa 13 di Krismon 1998 $\to$ Pivot Lisensi Kemitraan & Formulasi Rambut Jerman Jadi Raja Perawatan Rambut Nasional
49. **Tomy Winata (Tjoet Tjwan Ling)** — Anak Yatim Piatu Jual Es Loli & Bangkrut 5 Kali (Papua, Kalbar, NTT, 2x Jakarta) $\to$ Bangkit Dirikan Artha Graha Group & Pemilik Kawasan SCBD
50. **Mulyoko** — Ternak Mati, Pindah Kandang 3 Kali & Utang Rp 500 Juta Usia 25 $\to$ Belajar ke Bogor/Surabaya, Riset Formula Pakan, Lunas 2 Tahun & Jual Ribuan Ternak
51. **Iwan Septianus** — Peternakan Ayam Musnah Wabah Penyakit & Aset Terjual 2015 $\to$ Modal KUR Rp 5 Jt Beli 35 Liter Bensin Jadi Pangkalan Resmi 720 Tabung LPG Malinau Kaltara
52. **Siti Sofia** — Toko Elektronik Suami Bangkrut & Utang di Mana-Mana $\to$ Reseller Nol Modal, Budidaya Teras Rumah, Ribuan Bibit (40 Varian Mangga) & Omzet Ratusan Juta



### 8. 📊 Penilaian Kondisi & Prioritas Utang Berbasis Risiko Nyata
- **Rasio Cicilan terhadap Pemasukan (DTI)** dan **status `NO_INCOME`** sesuai PRD §12, ditampilkan langsung di beranda bersama **kekayaan bersih** dan **sisa hari bertahan**.
- **Prioritas utang multi-faktor (PRD §17.2)**: bukan sekadar bunga atau jatuh tempo. Skor risiko menimbang **agunan yang bisa disita** (BPKB, sertifikat), **indikasi pemberi pinjaman ilegal** (bunga di atas batas wajar), tunggakan, bunga berjalan, dan **kesepakatan restrukturisasi** yang sudah tercapai.
- **Empat strategi berfungsi penuh**: Risk First, Avalanche, Snowball, dan **Custom** dengan pengaturan urutan manual.
- **Alasan prioritas ditampilkan terbuka** pada utang teratas — setiap rekomendasi bisa dijelaskan (PRD §7.6).

### 9. 🔔 Pengingat In-App & Sistem Follow-up (PRD §27)
Berjalan 100% offline tanpa meminta izin notifikasi apa pun. Dihitung ulang setiap aplikasi dibuka:
- Utang **jatuh tempo atau sudah menunggak**, lengkap dengan nominal cicilan minimum.
- **Follow-up peluang kerja** dan **negosiasi kreditur yang belum dijawab**, disertai jalur eskalasi resmi OJK.
- **Kas kritis** (runway di bawah 7 hari) yang membuka Mode Darurat — pengingat ini sengaja tidak bisa ditutup.
- **Review mingguan**, lonjakan pengeluaran non-pokok, dan pengingat pencadangan data.
- Setiap pengingat bisa ditutup untuk hari itu saja, agar tidak berubah jadi spam.

### 10. 🗓️ Review Mingguan, Rencana 90 Hari & Laporan Bulanan
- **Review Mingguan (PRD §9)** di hari ke-7, 14, 21, dan 28: rekap pemasukan, pengeluaran, pembayaran utang, dan persentase misi — dengan catatan refleksi yang bisa kamu tulis sendiri.
- **Rencana 90 Hari (PRD §24)**: Recovery → Income Stabilization → Debt Attack, dengan target **dihitung dari angka nyata perjalananmu**, bukan angka karangan. Target bisa kamu sesuaikan sendiri.
- **Laporan Bulanan (PRD §26)**: arus kas, pemisahan pokok vs bunga utang, aktivitas pemulihan, dan rincian ke mana uang pergi per kategori — bisa dibuka untuk bulan-bulan sebelumnya.

### 11. 🆘 Mode Darurat Terstruktur (PRD §29)
Checklist delapan langkah bertahan hidup yang urutannya mengikuti prinsip **Survival Before Aggressive Debt Payment**: amankan pangan dan tempat tinggal lebih dulu, **lindungi alat cari nafkah** (jangan jual laptop atau motor kerja), hubungi orang yang dipercaya, hentikan utang baru, baru bicara ke kreditur. Progres checklist tersimpan.

### 12. ♿ Aksesibilitas & Ekspor (PRD §42 & §47)
- **Focus-trap pada seluruh dialog**, label ARIA, navigasi keyboard penuh (Enter/Spasi pada kartu misi & utang), indikator fokus yang jelas, serta dukungan `prefers-reduced-motion`.
- **Export CSV** untuk diolah di Excel/Google Sheets, dan **laporan cetak/PDF** lewat dialog cetak bawaan browser — tanpa pustaka eksternal, tetap Zero-CDN dan berfungsi offline.
- **Lewati misi disertai alasan** tanpa penalti apa pun terhadap progres.
- **Tombol pasang aplikasi (PWA)** dengan penanganan `beforeinstallprompt`.

### 13. 🛡️ 100% Privasi & Offline-First (PWA Service Worker v4 & Self-Hosted Fonts)
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
│   ├── icons.js            # Kamus 30+ ikon SVG inline mandiri (Zero-CDN)
│   ├── helpers.js          # Tanggal lokal (bukan UTC), format Rupiah penuh, validasi nominal
│   ├── store.js            # Persistensi localStorage, versioning skema, migrasi & validasi import
│   ├── engine.js           # ScoreEngine, MindsetEngine, ReboundEngine, & Achievements
│   ├── finance.js          # Assessment (DTI, runway), prioritas utang, laporan bulanan, rencana 90 hari
│   ├── notify.js           # Pusat pengingat in-app (jatuh tempo, follow-up, kas kritis)
│   ├── exporter.js         # Ekspor CSV & laporan cetak/PDF tanpa pustaka eksternal
│   ├── stories.js          # Controller Perpustakaan Kisah & Reader Interaktif (52 Tokoh)
│   ├── app.js              # Router utama, lifecycle controller, 5-Pillar Sync, CRUD & modal SOS
│   └── screens.js          # Modul layar tambahan: pengingat, review mingguan, rencana 90 hari,
│                           #   mode darurat, laporan bulanan, aksesibilitas, install PWA
└── tests/
    ├── run_all.js                 # Runner terpadu seluruh suite (exit code untuk CI)
    ├── istqb_test_suite.js        # Formal ISTQB Test Suite (EP, BVA, STT, Integration)
    ├── test_simulation_30days.js  # Simulasi otomatis siklus perjalanan Hari 1 s.d. 30
    ├── audit_all_buttons.js       # Audit otomatis 110 tombol & handler interaktif
    ├── data_integrity.js          # Migrasi skema, validasi import, kuota storage, presisi uang
    ├── timezone_integrity.js      # Regresi tanggal lintas zona waktu (WIB/WITA/WIT + kontrol)
    ├── features_test.js           # Prioritas utang, DTI, pengingat, laporan bulanan, review, 90 hari
    ├── search_test.js             # Pencarian Kisah: kontrak DOM (fokus input), cakupan, padanan kata
    ├── layout_test.js             # Target sentuh 44px, urutan cascade, grid, lebar dropdown, label
    ├── pwa_update_test.js         # Strategi cache, tawaran muat ulang, ketahanan pemasangan luring
    └── deep_gap_audit.js          # Sapuan 1.440 permutasi matriks keputusan tanpa gap
```

---

## 🧪 Validasi & Pengujian Otomatis (*Automated Testing Suite*)

Seluruh logika perhitungan finansial, alur fase pemulihan, dan antarmuka aplikasi telah melalui pengujian otomatis menyeluruh:

| Modul Pengujian | Cakupan Pengujian | Status Hasil |
| :--- | :--- | :--- |
| **Financial Engine & Logic** | Pengujian partisi cashflow, pembagian fase, batasan threshold runway, dan ketahanan data. | **23/23 PASSED (100%)** |
| **30-Day Lifecycle Simulation** | Simulasi otomatis transisi Hari 1 hingga Hari 30, perhitungan Rebound Score, dan pembukaan achievement. | **23/23 PASSED (100%)** |
| **Interactive Buttons Audit** | Verifikasi integritas seluruh 110 atribut aksi tombol, plus pemeriksaan bahwa setiap berkas skrip yang dimuat halaman ikut diaudit. | **110/110 VALID (100%)** |
| **Data Integrity & Storage** | Migrasi skema dari backup versi lama, penolakan berkas import asing, pelaporan kuota `localStorage` penuh, presisi nominal & nilai ekstrem. | **58/58 PASSED (100%)** |
| **Timezone Integrity** | Regresi tanggal pada 6 zona waktu (WIB, WITA, WIT, UTC+14, UTC-8, UTC+5:45) di 7 jam rawan per zona. | **132/132 PASSED (100%)** |
| **Fitur Pemulihan Lanjutan** | Prioritas utang berbasis agunan & risiko hukum, rasio DTI, status `NO_INCOME`, pengingat follow-up, laporan bulanan, review mingguan, rencana 90 hari, integritas ekspor CSV. | **82/82 PASSED (100%)** |
| **Pencarian Kisah Bangkit** | Kontrak DOM (mengetik tidak boleh membangun ulang kotak pencarian), cakupan field termasuk kota, pencocokan banyak kata (AND), dan padanan kosakata sehari-hari. | **39/39 PASSED (100%)** |
| **Tata Letak & Target Sentuh** | Minimum 44px pada perangkat sentuh beserta urutan cascade-nya, grid statistik bebas pemaksaan `!important`, lebar dropdown, panjang label opsi, dan label kategori berbahasa Indonesia. | **32/32 PASSED (100%)** |
| **Pembaruan PWA & Luring** | Strategi jaringan-dulu untuk kode aplikasi, cache-dulu untuk font, ketahanan pemasangan terhadap berkas gagal, tawaran muat ulang, dan header hosting `sw.js`. | **30/30 PASSED (100%)** |
| **Decision Matrix Gap Audit** | Sapuan 1.440 permutasi variabel (Pekerjaan × Target × Keahlian × Hari × Kondisi Keuangan), 11 kaidah per permutasi. | **0 GAP / 100% COVERED** |

Untuk menjalankan seluruh pengujian sekaligus:
```bash
node tests/run_all.js
```

Atau per modul:
```bash
node tests/istqb_test_suite.js
node tests/test_simulation_30days.js
node tests/audit_all_buttons.js
node tests/data_integrity.js
node tests/timezone_integrity.js
node tests/features_test.js
node tests/search_test.js
node tests/layout_test.js
node tests/pwa_update_test.js
node tests/deep_gap_audit.js
```

### 🛡️ Kaidah Rekayasa yang Dijaga Suite Ini

Tiga aturan berikut mudah dilanggar kembali tanpa disadari, sehingga masing-masing dikunci oleh pengujian otomatis:

1. **Tanggal selalu memakai kalender lokal, bukan UTC.** `new Date().toISOString().split('T')[0]` menghasilkan tanggal KEMARIN antara pukul 00:00–06:59 WIB. Gunakan `H.today()`, `H.toKey()`, dan `H.addDays()`. Dijaga oleh `timezone_integrity.js`.
2. **Nominal ditampilkan penuh, tidak disingkat.** `H.formatRp()` selalu mencetak `Rp 18.547.300`. Singkatan `Rp 18,5jt` hanya boleh lewat `H.formatRpShort()` untuk ruang sempit — pengguna harus dapat memverifikasi setiap rupiah (PRD §7.6). Dijaga oleh `data_integrity.js`.
3. **Misi jangkar tiap fase tidak boleh terpangkas.** Daftar misi harian dipotong maksimal 5; tanpa jaminan jangkar, `DEBT_PAYMENT` justru hilang di Fase Debt Attack bagi pengguna yang paling membutuhkannya. Lihat `ReboundEngine.PHASE_ANCHOR`. Dijaga oleh `deep_gap_audit.js`.
4. **Prioritas utang tidak boleh disederhanakan jadi satu faktor.** PRD §17.2 melarangnya secara eksplisit. `FinanceEngine.riskScore()` wajib tetap menimbang agunan dan risiko hukum, bukan hanya jatuh tempo atau bunga. Dijaga oleh `features_test.js`.
5. **Bahasa aplikasi tidak menghakimi.** Peringatan pengeluaran dan catatan review mingguan diuji otomatis agar bebas dari kata seperti "boros", "gagal", atau "buruk" (PRD §7.4 No Shame). Dijaga oleh `features_test.js`.
6. **Setiap berkas skrip baru wajib ikut diaudit.** `audit_all_buttons.js` membandingkan daftar `<script>` di `index.html` dengan daftar yang dimuatnya dan gagal bila ada yang terlewat.
7. **Handler input tidak boleh membangun ulang elemen input itu sendiri.** Menulis ulang `innerHTML` induk saat pengguna mengetik akan menghancurkan node input dan membuang fokus keyboard — pengguna hanya bisa mengetik satu huruf. Perbarui hanya bagian yang berubah. Dijaga oleh `search_test.js`.
8. **Nilai dasar CSS ditulis sebelum blok media query yang menimpanya.** Kekhususan selektor yang sama membuat aturan terakhir menang; menaruh `.btn-sm { min-height: 38px }` setelah blok `pointer: coarse` diam-diam mengembalikan tombol ponsel ke ukuran kecil. Dijaga oleh `layout_test.js`.
9. **`!important` tidak dipakai untuk memaksa jumlah kolom grid.** `!important` mengalahkan style inline, sehingga halaman yang sengaja memakai dua kartu ikut diperas mengikuti tata letak halaman lain. Dijaga oleh `layout_test.js`.

---

## 🚀 Panduan Menjalankan & Instalasi

### 1. Jalankan di Browser Lokal
Cukup buka file `index.html` langsung di browser modern (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### 2. Pasang di Android / iOS (PWA)
1. Buka tautan [https://rebound30.vercel.app/](https://rebound30.vercel.app/) di browser HP.
2. Klik tombol **"Install Aplikasi"** atau menu browser `⋮` $\to$ **"Tambahkan ke Layar Utama" / "Add to Home Screen"**.
3. Aplikasi akan terpasang di menu utama HP dan dapat digunakan 100% tanpa internet.

---

## 🔄 Cara Merilis Pembaruan (Penting)

Aplikasi ini adalah PWA dengan service worker, jadi pembaruan tidak otomatis terlihat seperti situs biasa.

### Yang perlu dilakukan saat rilis
1. Naikkan `APP_VERSION` di **`sw.js`** — satu tempat saja, `CACHE_NAME` mengikuti otomatis.
2. Bila ada berkas JS/CSS **baru**, tambahkan ke `ASSETS_TO_CACHE` di `sw.js` agar mode luring tetap lengkap.
3. Jalankan `node tests/run_all.js` sebelum deploy. `pwa_update_test.js` akan menolak bila ada berkas skrip halaman yang lupa didaftarkan.

### Apa yang dialami pengguna
Sejak versi 2.1.0, kode aplikasi memakai strategi **jaringan lebih dulu, cache sebagai cadangan**:

- Saat **daring**, pengguna mendapat kode terbaru pada pembukaan berikutnya — bahkan bila `APP_VERSION` lupa dinaikkan.
- Saat **luring**, aplikasi tetap berjalan penuh dari cache.
- Ketika versi baru siap, muncul tawaran **"Versi baru tersedia — Muat Ulang"**. Pengguna tidak perlu tahu apa pun soal cache browser.

Sebelum perubahan ini, pengujian di browser sungguhan dengan latensi seluler menunjukkan pengguna harus membuka aplikasi **empat kali** sebelum melihat versi baru — dan **tidak pernah** melihatnya bila `CACHE_NAME` lupa dinaikkan.

### Bila pengguna tetap terlihat memakai versi lama
Minta mereka membuka **Pengaturan → Info Aplikasi** dan menyebutkan nomor versinya. Urutan langkah dari yang paling ringan:

| Perangkat | Langkah |
| :--- | :--- |
| **Semua** | Tutup penuh aplikasi/tab, lalu buka kembali. Biasanya sudah cukup. |
| **Chrome Android** | Menu ⋮ → **Setelan** → **Setelan situs** → **Data tersimpan** → pilih situsnya → **Hapus & setel ulang** |
| **Safari iOS** | **Pengaturan** iOS → **Safari** → **Lanjutan** → **Data Situs Web** → pilih situs → **Hapus** |
| **PWA terpasang di layar utama** | Hapus ikonnya, buka lagi lewat browser, lalu pasang ulang |

> ⚠️ **Peringatan penting:** seluruh data keuangan pengguna tersimpan di `localStorage` pada origin yang sama dengan cache. Langkah "Hapus & setel ulang" pada tabel di atas **akan ikut menghapus catatan keuangan mereka**. Selalu minta pengguna melakukan **Pengaturan → Export Data (JSON)** lebih dulu, lalu Import kembali setelahnya.

---

## 📄 Lisensi & Hak Cipta
Hak Cipta © 2026 **RTH Nexus Rebound 30**. Seluruh hak dilindungi undang-undang.  
Dibuat untuk membantu masyarakat bangkit dari keterpurukan finansial dengan martabat, integritas, dan strategi yang terbukti.
