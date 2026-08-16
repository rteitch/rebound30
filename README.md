# 🚀 Rebound 30 — Aplikasi Pendamping Pemulihan Finansial 30 Hari

Aplikasi web pendamping pemulihan finansial mandiri (*offline-first* PWA) yang dirancang berdasarkan riset perilaku finansial, regulasi OJK (POJK 19/2023 & SEOJK 2026), serta metodologi pemulihan krisis cashflow & utang.

---

## 🌟 Fitur Utama

- **🛡️ 100% Privasi & Offline-First (PWA)**: Seluruh data keuangan tersimpan lokal di browser (`localStorage`), tanpa server backend.
- **🧭 4 Fase Pemulihan Terarah**:
  - **Fase 1 (Hari 1–7): SURVIVE** — Hentikan kebocoran kas & prioritaskan kebutuhan hidup dasar.
  - **Fase 2 (Hari 8–14): CREATE CASH** — Monetisasi aset menganggur & peluang *quick cash* halal.
  - **Fase 3 (Hari 15–21): STABILIZE** — Restrukturisasi kewajiban, negosiasi utang, & stabilkan arus kas.
  - **Fase 4 (Hari 22–30): ATTACK** — Eksekusi strategi pelunasan (Risk First / Avalanche / Snowball).
- **📊 Rebound Score (0–100)**: Indikator kesehatan progres pemulihan harian.
- **🎯 Daily Mission Engine**: 3–5 tindakan konkret harian yang disesuaikan secara adaptif.
- **⚖️ Debt & Legal Tracker**:
  - Deteksi otomatis bunga di atas batas OJK (0.1%/hari / 3%/bulan).
  - Penghitungan total bunga tersedot per bulan.
  - Template surat negosiasi & panduan hak debitur (UU PDP, AFPI, Kontak OJK 157).
- **💡 Income & Opportunity Tracker**: Integrasi daftar kanal kerja lepas (Projects.co.id, Fastwork, Upwork, Sribulancer, Affiliate).
- **🚨 Emergency Mode**: Panduan de-eskalasi stres & protokol darurat ancaman penagihan.
- **📦 Backup & Restore**: Ekspor/impor file JSON & pengingat backup berkala.

---

## 📁 Struktur Folder

```text
├── index.html         # Aplikasi utama Rebound 30 (SPA Single File)
├── manifest.json      # Konfigurasi PWA (Installable di Android/iOS)
├── sw.js              # Service Worker untuk dukungan 100% Offline
├── vercel.json        # Konfigurasi deploy Vercel
├── README.md          # Dokumentasi proyek
└── docs/              # Dokumen spesifikasi (PRD, riset faktual, catatan metode)
```

---

## 🚀 Cara Deploy

### Deploy ke Vercel (Paling Mudah)
```bash
npx vercel
```
Atau hubungkan repositori GitHub ini langsung ke [Vercel](https://vercel.com).

### Jalankan Lokal di Browser
Buka file `index.html` langsung di browser Chrome / Firefox / Edge.

---

## 📱 Cara Install di Android (PWA)
1. Buka URL aplikasi di Google Chrome HP.
2. Klik tombol **"Install Aplikasi"** atau titik tiga `⋮` → **"Tambahkan ke Layar Utama"**.
3. Aplikasi akan tampil layaknya aplikasi native Android (fullscreen tanpa address bar) dan dapat dibuka tanpa koneksi internet.
