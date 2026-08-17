# 📖 Panduan Penambahan Kisah Baru (Rebound 30)

Dokumen ini adalah **panduan standar operasional (SOP)** ketika Anda ingin menambahkan tokoh kisah nyata baru ke dalam aplikasi **Rebound 30**. Panduan ini mencakup struktur data, checklist berkas yang perlu diperbarui, pemetaan analitik *Helicopter View*, dan langkah pengujian otomatis.

---

## 1. 📋 Struktur Objek Data Tokoh (`Stories.DATA`)

Setiap tokoh baru didefinisikan sebagai sebuah objek JavaScript di dalam array `DATA` pada berkas [`js/stories.js`](file:///d:/Project/ui/js/stories.js).

### Template Lengkap Objek Tokoh:

```javascript
{
  id: 'namatokoh', // Huruf kecil semua, tanpa spasi/simbol (contoh: 'ramidi', 'yudiyanto')
  name: 'Nama Lengkap Tokoh',
  tagline: 'Profesi / Usaha Penyelamat saat Bangkit',
  badge: 'Label Singkat', // Contoh: 'Pengepul Matoa', 'Peternak Finch', 'Pedagang Ayam'
  origin: 'Kota, Provinsi / Negara', // Contoh: 'Tayu, Pati, Jawa Tengah'
  ageAtRebound: 'Usia saat Titik Balik', // Contoh: '43 Tahun', 'Usia 34 Thn'
  categoryLabel: 'Label Kategori Utama', // Contoh: 'Kuliner & Pangan', 'Hobi & Komoditas', 'Jasa & Keagenan'
  categories: ['kategori1', 'kategori2'], // Pilihan: 'kuliner', 'hobi', 'jasa', 'restrukturisasi', 'likuidasi', 'gagal_bisnis', 'penipuan', 'phk', 'kartu_kredit', 'krisis_makro', 'ponzi'
  bgLight: '#ECFDF5', // Warna latar badge (hex)
  accentColor: '#059669', // Warna aksen utama (hex)
  borderLight: '#A7F3D0', // Warna border badge (hex)

  // Statistik Inti untuk Helicopter View & Explorer Card
  stats: {
    debt: 'Rp X Miliar / Ratusan Juta (Penyebab Singkat)', // Contoh: 'Rp 1,3 Miliar (Investasi Bodong)'
    lowestPoint: 'Ringkasan kondisi di titik nadir / terendah',
    turningPoint: 'Momen kesadaran / pemicu perubahan arah',
    action: 'Tindakan konkret pembuka jalan kas harian', // Contoh: 'Olah jamur sisa jadi keripik & jualan via medsos'
    outcome: 'Hasil pemulihan finansial setelah lunas',
    timeline: 'Estimasi durasi pelunasan' // Contoh: '2 Tahun', '3,5 Tahun', '4 Tahun'
  },

  // 5 Pelajaran Empiris untuk Majalah Digital Tokoh
  takeaways: [
    'Pelajaran 1: Fokus pada tindakan pemulihan kas harian.',
    'Pelajaran 2: Menghadapi kreditur secara terbuka tanpa menghindar.',
    'Pelajaran 3: Memangkas gengsi sosial dan pengeluaran konsumtif.',
    'Pelajaran 4: Mengembangkan ceruk pasar / nilai tambah produk.',
    'Pelajaran 5: Disiplin mengalokasikan surplus keuntungan untuk pelunasan pokok.'
  ],

  // Bab Narasi Majalah Digital (4-5 Bab Terstruktur)
  sections: [
    {
      title: '1. Awal Mula & Titik Terendah',
      content: 'Paragraf narasi detail mengenai latar belakang, profesi awal, dan peristiwa kejatuhan/kebangkrutan...'
    },
    {
      title: '2. Momen Titik Balik (Turning Point)',
      content: 'Paragraf narasi mengenai kesadaran moral, ide bisnis baru, atau bantuan tak terduga...'
    },
    {
      title: '3. Aksi Nyata & Strategi Bertahan',
      content: 'Langkah-langkah praktis harian: modal awal, proses produksi, cara memasarkan, dan pengelolaan arus kas...'
    },
    {
      title: '4. Hasil Pemulihan & Dampak',
      content: 'Pencapaian akhir: waktu lunas total, skala usaha saat ini, aset yang terbangun, dan kemandirian finansial...'
    }
  ]
}
```

---

## 2. 🗂️ Daftar Berkas yang Wajib Ditinjau / Diperbarui

Ketika menambahkan satu atau beberapa kisah baru, Anda wajib meninjau dan memperbarui **3 berkas** berikut:

```text
d:\Project\ui\
├── js/stories.js          ← [WAJIB] Basis data, pemetaan analitik, & filter explorer
├── README.md              ← [WAJIB] Daftar nomor tokoh & rekap badge pengujian
└── tests/patterns_test.js ← [WAJIB] Validasi integritas ID data & testing assertion
```

---

### A. Berkas 1: [`js/stories.js`](file:///d:/Project/ui/js/stories.js)

1. **Tambahkan Objek ke Array `Stories.DATA`**:
   Masukkan objek kisah baru di akhir array `DATA` (sebelum metode penutup).
2. **Daftarkan `id` Tokoh ke Klaster Akar Masalah (`ANALYTICS_DATA.PROBLEM_CLUSTERS`)**:
   Pilih salah satu klaster yang sesuai dan masukkan `id` ke dalam array `ids`:
   - `business_failure`: Gagal Bisnis, Over-Ekspansi & Arus Kas
   - `fraud_scam`: Penipuan Rekanan, Supplier Fiktif & Arisan Bodong
   - `jobless_zero`: Kehilangan Pekerjaan (PHK) & Modal Nol
   - `credit_card_bank`: Kartu Kredit Macet & Blacklist Bank
   - `macro_crisis`: Krisis Moneter, Pandemi & Resesi Makro
   - `ponzi_speculation`: Investasi Bodong & Skema Ponzi
   *Catatan: Naikkan angka `count` pada klaster terkait.*
3. **Daftarkan `id` Tokoh ke Strategi Titik Balik (`ANALYTICS_DATA.RESOLUTION_STRATEGIES`)**:
   Pilih salah satu model bisnis penyelamat dan masukkan `id` ke dalam array `ids`:
   - `value_added_food`: Pengolahan Nilai Tambah & Kuliner Putaran Cepat
   - `niche_commodity`: Ceruk Pasar Hobi Eksotis & Komoditas Khusus
   - `agency_asset_light`: Keagenan Jasa, Reseller & Perantara Tanpa Beban Aset
   - `debt_restructure`: Restrukturisasi Proaktif & Diskon Pokok Bank
   - `asset_liquidation`: Likuidasi Aset Konsumtif Mandiri
   *Catatan: Naikkan angka `count` pada strategi terkait.*
4. **Perbarui Filter Skala Utang di `buildPatternCardsHtml(filterId)`**:
   Tambahkan `id` tokoh baru ke array filter skala utang yang sesuai:
   - `debt_micro`: Utang < Rp 50 Juta
   - `debt_low_mid`: Utang Rp 50 Jt – Rp 250 Juta
   - `debt_mid_high`: Utang Rp 250 Jt – Rp 1 Miliar
   - `debt_billion`: Utang Rp 1 Miliar – Rp 10 Miliar
   - `debt_corp`: Utang > Rp 10 Miliar (Korporasi)
5. **Perbarui Total Count di `HELICOPTER_SUMMARY` & Filter Options**:
   - `HELICOPTER_SUMMARY.totalStories`: Ubah sesuai total jumlah tokoh.
   - `filterOptions[0].label`: `Semua Tokoh (${this.DATA.length})` (otomatis dinamis).

---

### B. Berkas 2: [`README.md`](file:///d:/Project/ui/README.md)

1. **Tambahkan Tokoh ke Daftar Bernomor**:
   Di bagian **§7. Arsip Kisah Inspirasi 77+ Tokoh**, tambahkan entri baru:
   ```markdown
   78. **Nama Tokoh** — Titik Terendah / Penyebab Utang $\to$ Aksi Titik Balik & Hasil Pemulihan
   ```
2. **Perbarui Badge & Tabel Testing (Jika Ada Penambahan Test)**:
   Perbarui angka test yang lulus pada badge header dan tabel pengujian otomatis.

---

### C. Berkas 3: [`tests/patterns_test.js`](file:///d:/Project/ui/tests/patterns_test.js)

1. **Perbarui Assertion Jumlah Tokoh**:
   Ubah angka total di baris pengujian integritas:
   ```javascript
   assert(Stories.DATA.length === 78, `Basis data tokoh berjumlah 78 kisah...`);
   assert(totalProblemIds === 78, `Total pemetaan akar masalah adalah 78 tokoh...`);
   assert(totalResolutionIds === 78, `Total pemetaan strategi penyelesaian adalah 78 tokoh...`);
   ```

---

## 3. ⚠️ Aturan Rekayasa & Pantangan Penting (*Engineering Rules*)

| No | Aturan | Alasan & Dampak |
| :-: | :--- | :--- |
| 1 | **ID Unik Huruf Kecil** | `id` wajib huruf kecil alfabet tanpa spasi/tanda baca (contoh: `'kiswanto'`, bukan `'Kiswanto (Cik One)'`) agar routing URL dan callback reader tidak error. |
| 2 | **Pantangan Kata Reserved Search** | Jangan menulis kata literal `'pinjol'`, `'phk'`, atau `'galbay'` di dalam narasi mentah. Gunakan padanan formal: `'pinjaman daring'`, `'kehilangan pekerjaan'`, `'gagal bayar'`. Mekanisme sinonim mesin pencari (`SEARCH_SYNONYMS`) yang menangani query pengguna. |
| 3 | **Bebas Emotikon/Emoji di UI & Data** | Gunakan ikon vektor SVG monokromatik (`viewBox="0 0 24 24" fill="none" stroke="currentColor"`). Dilarang menyisipkan emoji grafis (seperti 🚀, 💡, 💰) pada string data atau kartu. |
| 4 | **Nominal Riil & Proporsional** | Cantumkan nominal utang dan waktu pelunasan yang faktual dari catatan narasumber untuk menjaga kredibilitas analitik empiris. |
| 5 | **100% Terpetakan (Zero Orphan ID)** | Setiap `id` baru **wajib** terdaftar di salah satu `PROBLEM_CLUSTERS` dan salah satu `RESOLUTION_STRATEGIES` agar grafik tidak timpang. |

---

## 4. 🧪 Langkah Pengujian Otomatis & Rilis

Setelah berkas di atas diperbarui, jalankan verifikasi langkah demi langkah di terminal:

```bash
# 1. Periksa validitas sintaks JavaScript
node --check js/stories.js
node --check js/app.js

# 2. Jalankan pengujian suite pola & analitik
node tests/patterns_test.js

# 3. Jalankan SELURUH 11 suite pengujian aplikasi
node tests/run_all.js
```

### ✅ Indikator Keberhasilan:
- Output: `11/11 SUITES PASSED (0 failures)`
- `audit_all_buttons.js`: `110/110 VALID & FUNCTIONAL`

### 🚀 Deploy ke Produksi (GitHub & Vercel):
```bash
git add js/stories.js README.md tests/patterns_test.js panduan.md
git commit -m "feat: add new recovery story [Nama Tokoh] and update pattern analytics"
git push origin main
```
Aplikasi di [https://rebound30.vercel.app/](https://rebound30.vercel.app/) akan otomatis ter-update dan siap diakses pengguna!
