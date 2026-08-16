// ============================================================================
// REBOUND 30 — KISAH BANGKIT (MODERN STORY LIBRARY & DEDICATED READER)
// Architecture: Catalog Shelf -> Dedicated Fullscreen Editorial Reader
// Includes: Problem Categories, Search, Bookmarks, Journey Timeline, & Mission Bridge
// ============================================================================

const Stories = {
  viewMode: 'library', // 'library' | 'reader'
  activeId: 'shao',
  searchQuery: '',
  selectedCategory: 'all',
  bookmarks: [],

  DATA: [
    {
      id: 'shao',
      featured: true,
      name: 'Shao Baoling (邵宝玲)',
      tagline: 'Dari Ratu Koper Rp 220 Miliar Menjadi Pemilik 3 Toko Bakpao',
      title: 'Dari Reruntuhan, Ia Tumbuh Kembali',
      subtitle: 'Mantan "Ratu Koper" Asal Yiwu, Tiongkok',
      origin: '🇨🇳 Yiwu, Tiongkok',
      ageAtRebound: '61 Tahun',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'global'],
      categoryLabel: 'Bangkit dari Utang Besar',
      badge: 'Aktif Membuka 3 Cabang',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: '> Rp 220 Miliar (100 Juta Yuan)',
        age: '61 Tahun',
        lowest: 'Bangkrut & Vonis Kanker',
        action: 'Jual Bakpao 5 Yuan (Rp 11.000)',
        result: 'Omset 3 Juta Yuan/thn (12 Karyawan)'
      },
      timeline: [
        { year: 'Puncak Kejayaan', text: 'Memimpin pabrik koper ekspor Yiwu bernilai miliaran rupiah dengan ratusan karyawan.' },
        { year: '2014 — Krisis', text: 'Terjebak penjaminan kredit silang usaha rekan bisnis. Pabrik berhenti, utang membengkak 100 juta Yuan.' },
        { year: 'Titik Terendah', text: 'Didiagnosis kanker, kehilangan seluruh tabungan dan aset, duduk terdiam dalam keputusasaan.' },
        { year: 'Usia 61 Tahun', text: 'Menolak menyerah. Mulai bangun jam 3 pagi mengulen adonan dan membuka warung bakpao 5 Yuan.' },
        { year: 'Hari Ini — Rebound', text: 'Berkembang menjadi 3 cabang toko dengan omset 3 juta Yuan per tahun dan 12 karyawan.' }
      ],
      quote: 'Kalau masih bisa berpikir jernih, buatlah bakpao. Kalau sudah tak kuasa berpikir, loncatlah dari sini.',
      quoteAuthor: 'Shao Baoling, saat kerabat mencibir keputusannya memulai usaha di usia senja',
      chapters: [
        {
          num: 1,
          title: 'Kejatuhan Sang Ratu',
          paragraphs: [
            'Pada puncak kejayaannya, nama Shao Baoling adalah gemuruh yang mengguncang pasar ekspor Yiwu. Pabrik kopernya meroket dengan omzet miliaran rupiah, produknya menyeberangi lautan, dan ia duduk di kursi empuk sebagai "Ratu Koper" yang disegani. Setiap pagi, ia melangkah di antara deru mesin dan hiruk-pikuk ratusan buruh pabrik, seolah dunia berada di genggamannya. Namun, takdir berkata lain.',
            'Tahun 2014 menjadi titik balik yang menghancurkan. Jeratan utang akibat penjaminan kredit usaha untuk relasi bisnis merambat seperti retakan di dinding istananya. Satu per satu pintu tertutup. Pabrik-pabrik berhenti berdenyut. Bangkrut. Dalam sekejap, deretan angka nol di rekeningnya lenyap, digantikan oleh deretan utang yang menggunung lebih dari 100 juta Yuan (sekitar Rp 220 miliar).',
            'Pukulan keras itu belum usai. Kabar buruk berikutnya datang dari dokter—sebuah diagnosis kanker yang dingin dan membekukan. Di rumahnya yang sunyi, Shao Baoling menatap cermin. Yang ia lihat bukan lagi perempuan berpakaian sutra itu, melainkan seorang tua renta dengan uban bertebaran dan mata yang kehilangan cahaya. Air matanya habis. "Aku sudah kehilangan segalanya," bisiknya pada angin malam yang dingin.'
          ]
        },
        {
          num: 2,
          title: 'Titik Balik di Balik Kukusan Uap',
          paragraphs: [
            'Hari-hari gelap itu terasa tak berujung, sampai suatu siang seorang sahabat lamanya datang. Tanpa banyak bicara, teman itu masuk ke dapur, mengulen adonan, dan mengukus bakpao—sebuah hidangan sederhana yang dulu sering mereka santap di masa muda.',
            'Aroma kukusan itu merambat ke ruang tamu. Shao Baoling menghirupnya, dan tiba-tiba pikirannya terbang ke masa lalu. Ia teringat pesan mendiang ibunya: "Nak, di zaman sesulit apa pun, selama tangan masih mau bekerja dan dagangan itu jujur, rezeki tak akan pernah kabur."',
            'Malam itu, dua suara bertempur di kepalanya. Suara pertama mengejek: Kau sudah tua, kau sakit, apa lagi yang bisa kau perbuat? Suara kedua, lebih pelan namun gigih, berbisik: Tidakkah kau ingat bagaimana kau memulai dari nol dulu? Pada usia 61 tahun, Shao Baoling mengambil keputusan yang membuat semua orang tercengang: ia membuka warung bakpao kecil.'
          ]
        },
        {
          num: 3,
          title: 'Bangkit dengan Tangan dan Adonan',
          paragraphs: [
            'Tepat pukul tiga dini hari, ia sudah berdiri di dapur sempitnya. Tangannya yang dulu biasa menandatangani kontrak bernilai miliaran rupiah, kini mengulen adonan dengan sabar. Ia meremas, menepuk, membulatkan, lalu mengisi daging cincang ke dalam cengkeraman kulit tipis—semua dilakukannya sendirian. Dalam sehari, ia bisa menghasilkan ratusan, bahkan hingga seribu bakpao.',
            'Ia tidak lagi memimpin ratusan karyawan, tetapi ia belajar mendengar lagi—mendengar keluhan buruh pabrik sekitar yang butuh sarapan cepat dan kenyang dengan harga ramah (5 Yuan / Rp 11.000). Ketika teman-teman lama menawari modal cuma-cuma, ia menolak: "Saya tidak sedang mengemis, saya sedang berdagang."',
            'Penghasilannya awalnya tak seberapa. Namun, bagi Shao Baoling, setiap koin yang jatuh ke dalam laci kasir adalah sebuah kemenangan. Itu adalah keringatnya, itu adalah darahnya, dan bukti bahwa ia masih hidup.'
          ]
        },
        {
          num: 4,
          title: 'Hidup, Lagi',
          paragraphs: [
            'Kini usaha bakpaonya telah berkembang menjadi 3 cabang toko di Yiwu dengan omset tahunan mencapai lebih dari 3 juta Yuan (sekitar Rp 6,6 miliar) dan membuka lapangan kerja bagi 12 orang. Meski utang 100 juta Yuan belum sepenuhnya lunas dan kanker masih bersarang di tubuhnya, Shao Baoling telah menemukan kembali kedamaian jiwanya.',
            '"Masa lalu biarlah berlalu," ujarnya sambil tersenyum di balik kepulan uap putih kukusan. "Saya tidak ingin dikenang sebagai ratu yang jatuh. Saya ingin dikenang sebagai perempuan tua yang masih punya nyali untuk memulai dari awal."'
          ]
        }
      ],
      takeaways: [
        { num: 1, text: '<strong>Buang Ego & Romantisme Masa Lalu:</strong> Kejayaan lama tidak akan membayar cicilan hari ini. Akui kejatuhan tanpa rasa malu dan mulailah dari pekerjaan paling mendasar yang menghasilkan uang nyata.' },
        { num: 2, text: '<strong>Kekuatan Arus Kas Harian:</strong> Setiap pemasukan kecil (5 Yuan / Rp 10.000) adalah setetes air yang akan menghentikan kepanikan finansial dan membangun kembali martabat hidup.' },
        { num: 3, text: '<strong>Tindakan Mengalahkan Rasa Takut:</strong> Bangun jam 3 pagi dan mengeksekusi misi harian tanpa menunda adalah satu-satunya obat penawar dari depresi utang.' }
      ],
      missionBridge: {
        lesson: 'Shao Baoling mulai dari adonan 1 bakpao jam 3 pagi untuk menghasilkan uang tunai pertama.',
        actionText: 'Cari 1 sumber pemasukan kecil atau tawarkan keahlianmu hari ini.',
        targetScreen: 'income',
        buttonText: 'Mulai Cari Pemasukan Hari Ini →'
      }
    },

    {
      id: 'tang',
      featured: false,
      name: 'Tang Jian (唐健)',
      tagline: 'Dari Raja Restoran Mewah Rp 100 Miliar Menjadi Om Sosis Panggang',
      title: 'Dari Raja Kuliner Menuju Om Sosis Panggang',
      subtitle: 'Mantan Pengusaha Restoran Mewah Qingdao, Tiongkok',
      origin: '🇨🇳 Qingdao, Tiongkok',
      ageAtRebound: '57 Tahun',
      categories: ['debt', 'bankrupt', 'business', 'global'],
      categoryLabel: 'Bangkit dari Utang Agresif',
      badge: 'Target Lunas Total 2027',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FFFBEB',
      borderLight: '#FEF3C7',
      stats: {
        debt: 'Rp 100 Miliar (46 Juta Yuan)',
        age: '57 Tahun',
        lowest: 'Rumah & Mobil Disita, Dicerai',
        action: 'Kios Sosis Panggang 25 m² di Trotoar',
        result: 'Pabrik Sosis Sendiri (Target Lunas 2027)'
      },
      timeline: [
        { year: 'Puncak Kejayaan', text: 'Mantan pengawas ATC yang mendirikan 3 restoran mewah beromset > 30 juta Yuan/tahun.' },
        { year: 'Kejatuhan Fatal', text: 'Nafsu ekspansi berlebihan dengan utang berbunga tinggi dan rentenir. Restoran kolaps total.' },
        { year: 'Titik Terendah', text: 'Utang 46 juta Yuan, digugat cerai, aset disita, mengasingkan diri di Gunung Laoshan hampir bunuh diri.' },
        { year: 'Usia 57 Tahun', text: 'Bangkit dan melepas gengsi: membuka gerobak sosis panggang pinggir jalan dengan faktur daging jujur.' },
        { year: 'Hari Ini — Rebound', text: 'Viral 400 juta tayangan, memiliki pabrik sosis sendiri, perputaran kas kios 25 m² kalahkan resto 1.300 m² miliknya dulu.' }
      ],
      quote: 'Penyesalan tidak mengubah apa-apa. Yang mengubah segalanya adalah tindakan. Setiap hari, aku bangun pagi, menyalakan panggangan, dan mulai bekerja. Itu saja.',
      quoteAuthor: 'Tang Jian ("Om Sosis Panggang Qingdao")',
      chapters: [
        {
          num: 1,
          title: 'Sang Raja Kuliner',
          paragraphs: [
            'Pagi itu di Qingdao, aroma rempah dari restoran bergengsi memenuhi jalanan. Itu adalah restoran paling ternama di kota, milik Tang Jian—seorang mantan pengawas lalu lintas udara yang kini mengendalikan lidah ribuan pelanggan elit.',
            'Tiga cabang restoran mewah. Pendapatan kotor lebih dari 30 juta Yuan per tahun. Hidupnya tampak sempurna. Namun, di balik gemerlap lampu-lampu restoran, ada nafsu berbahaya: keinginan untuk ekspansi tanpa batas dengan utang agresif.'
          ]
        },
        {
          num: 2,
          title: 'Kejatuhan di Jurang Gunung Laoshan',
          paragraphs: [
            'Keserakahan dan leverage berlebih adalah jurang yang tak berdasar. Tang Jian mulai meminjam ke mana-mana—bank, rekan usaha, hingga terperangkap rentenir berbunga mencekik. Ketika siklus ekonomi berbalik, gelembung itu meletus seketika.',
            '46 juta Yuan utang (sekitar Rp 100 miliar). Istri menggugat cerai. Rumah dan mobil disita kurator. Restoran mewah yang dulu penuh tawa berubah menjadi sunyi bagai kuburan.',
            'Tang Jian melarikan diri ke Gunung Laoshan. Tiga hari tiga malam ia bersembunyi dalam kegelapan, menangis histeris, dan beberapa kali berdiri di tepi tebing jurang hampir mengakhiri hidupnya. Yang menyelamatkannya adalah suara ibunya yang sudah renta: "Nak, selama kau masih bernapas, kau bisa memulai dari awal."'
          ]
        },
        {
          num: 3,
          title: 'Sebatang Sosis di Pinggir Jalan',
          paragraphs: [
            'Tahun 2017, pada usia 57 tahun, Tang Jian berdiri di jalan pejalan kaki Qingdao. Di depannya bukan lagi ruang VIP mewah, melainkan panggangan arang sederhana. Di tangannya, sebatang sosis.',
            'Awalnya ia merasa malu. Mantan pengusaha terpandang kini harus berteriak menawarkan sosis di pinggir jalan. Namun, ia segera melepas topeng gengsinya. Ia berfokus pada kualitas daging dan kejujuran: membeli daging dari supermarket resmi ternama dan memajang faktur pembelian di depan kiosnya.'
          ]
        },
        {
          num: 4,
          title: 'Teriakan yang Menggema & Jalan Menuju 2027',
          paragraphs: [
            'Pada 2022, video tentang perjuangannya menjadi viral dan ditonton lebih dari 400 juta kali. Alih-alih terbuai ketenaran instan media sosial, Tang Jian tetap berdisiplin membangun rantai pasok dan pabrik sosisnya sendiri di Qingdao.',
            'Hari ini, kios kecilnya yang hanya berukuran 25 m² bersama 7 karyawan justru mencatatkan perputaran uang yang lebih sehat dan menguntungkan daripada restoran 1.300 m² miliknya dulu. Dengan disiplin arus kas ketat, Tang Jian menargetkan melunasi seluruh sisa utang 46 juta Yuan pada tahun 2027.'
          ]
        }
      ],
      takeaways: [
        { num: 1, text: '<strong>Jangan Gandakan Risiko Saat Terpuruk:</strong> Jauhi rentenir, pinjaman gali lubang tutup lubang, atau perjudian saat sedang jatuh. Itu adalah jurang yang mempercepat kehancuran.' },
        { num: 2, text: '<strong>Ukuran Fisik Bukan Penentu Keberhasilan:</strong> Kios 25 m² yang efisien dan fokus pada margin bersih jauh lebih menyelamatkan daripada bisnis mewah 1.300 m² yang digerogoti utang operasional.' },
        { num: 3, text: '<strong>Miliki Rencana Pelunasan yang Jelas:</strong> Menghadapi utang puluhan miliar membutuhkan rencana realistis multi-tahun (seperti roadmap 2027 milik Tang Jian), dimulai dari disiplin 30 hari pertama.' }
      ],
      missionBridge: {
        lesson: 'Tang Jian berhenti gali lubang tutup lubang dan memetakan rencana pelunasan realistis.',
        actionText: 'Evaluasi daftar utang dan susun strategi pelunasan di menu Utang.',
        targetScreen: 'debts',
        buttonText: 'Petakan Prioritas Utang Sekarang →'
      }
    },

    {
      id: 'hendra',
      featured: false,
      name: 'M. Taufik Hendradinata (Hendra)',
      tagline: 'Dari Gelandangan di Teras Masjid Menuju Pemilik Pabrik Skincare Sendiri',
      title: 'Gelandangan yang Kini Punya Pabrik',
      subtitle: 'Owner Salina Herbal — Indonesia',
      origin: '🇮🇩 Indonesia',
      ageAtRebound: 'Usia Dewasa',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkit dari Titik Nol Mutlak',
      badge: 'Utang Lunas 100%',
      theme: 'indigo',
      accentColor: '#4F46E5',
      bgLight: '#EEF2FF',
      borderLight: '#E0E7FF',
      stats: {
        debt: 'Rp 2,2 Miliar',
        age: 'Usia Produktif',
        lowest: 'Sisa Uang Rp 700rb & Tidur di Masjid',
        action: 'Rintis Skincare Salina Herbal dari Nol',
        result: 'Pabrik Sendiri & Utang Lunas 100%'
      },
      timeline: [
        { year: '2007 — Sukses Awal', text: 'Memiliki 3 cabang usaha laundry dan 15 agen aktif dengan arus kas lancar.' },
        { year: '2010 — Tertipu Investor', text: 'Investasi Rp 800 juta pada waralaba pendidikan lenyap dibawa kabur investor.' },
        { year: 'Titik Terendah', text: 'Terjebak gali lubang hingga utang Rp 2,2 M. Jual rumah dan mobil, tidur menggelandang di teras masjid.' },
        { year: 'Merintis dari Nol', text: 'Memulai formulasi skincare skala mikro, mengantar pesanan sendiri, dan menabung setiap rupiah keuntungan.' },
        { year: 'Hari Ini — Rebound', text: 'Memiliki pabrik manufaktur Salina Herbal sendiri, mempekerjakan puluhan staf, dan utang Rp 2,2 M lunas total.' }
      ],
      quote: 'Kalau dengan dipenjarakan utangnya lunas, silakan penjarakan saya. Yang ada tinggal tubuh ini saja. Selama napas masih ada, selama tangan masih mau bekerja, tidak ada yang benar-benar hilang.',
      quoteAuthor: 'M. Taufik Hendradinata, saat menghadapi intimidasi debt collector',
      chapters: [
        {
          num: 1,
          title: 'Raja Laundry',
          paragraphs: [
            'Tahun 2007. Hendra tersenyum puas melihat tiga cabang usaha laundry miliknya beroperasi penuh setiap hari. Lima belas agen tersebar di berbagai titik strategis. Bisnisnya berjalan mulus, arus kas mengalir deras, dan ia duduk sebagai sosok pengusaha muda yang mapan, dihormati keluarga, dan penuh harapan cerah.',
            'Lalu datanglah seorang investor dengan tawaran manis: membuka jaringan waralaba di bidang pendidikan. "Investasi Rp 800 juta, hasilnya berlipat ganda," janjinya. Terpikat oleh prospek ekspansi, Hendra menaruh seluruh modal likuidnya ke dalam proyek tersebut.'
          ]
        },
        {
          num: 2,
          title: 'Lelaki Tanpa Rumah di Teras Masjid',
          paragraphs: [
            'Investor itu tiba-tiba menghilang tanpa jejak. Uang Rp 800 juta lenyap ditelan bumi, sementara bisnis waralaba pendidikan tak pernah terealisasi. Seperti efek domino yang mengerikan, usaha laundry yang ia rintis bertahun-tahun ikut terseret macet. Demi mempertahankan operasional, Hendra terjebak dalam perangkap gali lubang tutup lubang hingga total utangnya menggunung mencapai Rp 2,2 miliar.',
            'Hendra menjual seluruh aset yang ia miliki—mobil, rumah, perabotan, bahkan perkakas makan di dapurnya. Mertuanya menjual 75 persen rumah untuk membantu, namun itu masih belum cukup menutup pokok utang. Debt collector datang silih berganti setiap hari.',
            'Dengan sisa uang Rp 700.000 terakhir di sakunya, Hendra menyewa kamar kos kecil untuk tempat berteduh istri dan ketiga anaknya. Karena tidak memiliki uang lagi untuk menyewa tempat sendiri, Hendra memilih tidur menggelandang di teras masjid selama berbulan-bulan.'
          ]
        },
        {
          num: 3,
          title: 'Bangkit dari Teras Masjid',
          paragraphs: [
            'Di titik nadir itulah, di saat perut lapar dan harga diri remuk, Hendra membulatkan tekad: Aku tidak akan menyerah. Yang tersisa hanyalah tubuh ini, dan tubuh ini masih bisa bekerja.',
            'Ia mulai merintis kembali dari titik nol mutlak. Ia mempelajari industri formulasi perawatan kulit (skincare) dan produk herbal. Tanpa modal besar, ia memulai dari produksi skala mikro, mengantarkan pesanan sendiri, dan menabung setiap rupiah keuntungan murni tanpa gaya hidup berlebihan.',
            'Setiap botol produk yang ia jual adalah wujud keringat, air mata, dan doa panjang dari malam-malam dinginnya di teras masjid.'
          ]
        },
        {
          num: 4,
          title: 'Lunas 100% dan Berdiri Tegak',
          paragraphs: [
            'Tahun demi tahun berganti. Usaha skincare yang ia rintis (Salina Herbal) bertumbuh pesat dan kini telah memiliki pabrik manufaktur sendiri dengan puluhan karyawan yang menggantungkan hidup padanya.',
            'Utang Rp 2,2 miliar—gunung raksasa yang dulu terasa mustahil dipindahkan—kini telah LUNAS 100% tanpa sisa. Hendra membuktikan bahwa tidak ada kejatuhan yang permanen bagi orang yang menolak menyerah.'
          ]
        }
      ],
      takeaways: [
        { num: 1, text: '<strong>Waspadai Tawaran Investasi Tanpa Kendali:</strong> Menaruh dana besar pada pihak ketiga tanpa kontrol operasional adalah jalan tercepat menuju kerugian fatal. Lindungi bisnis inti Anda.' },
        { num: 2, text: '<strong>Hentikan Gali Lubang Tutup Lubang Seketika:</strong> Pinjaman baru untuk menutup cicilan lama hanya mempercepat kehancuran. Hadapi kenyataan dan restrukturisasi pokoknya.' },
        { num: 3, text: '<strong>Aset Terhebat Adalah Daya Juang Sendiri:</strong> Ketika rumah, kendaraan, dan tabungan habis, kesehatan fisik dan tekad untuk bekerja keras dari nol adalah modal utama untuk mencapai status LUNAS.' }
      ],
      missionBridge: {
        lesson: 'Hendra bertahan hidup saat uang tersisa Rp 700.000 dengan memotong semua pos non-esensial.',
        actionText: 'Audit pengeluaran bocor halus dan kendalikan anggaran hari ini.',
        targetScreen: 'expenses',
        buttonText: 'Pangkas Pengeluaran Non-Esensial →'
      }
    },

    {
      id: 'suryo',
      featured: false,
      name: 'Suryo Hadi Pranoto (Kacunk Motor)',
      tagline: 'Dari TKI Pabrik di Taiwan Menuju Pemilik Showroom 1.000 Mobil Bekas',
      title: 'Dari Nol di Taiwan Menuju Seribu Mobil',
      subtitle: 'Pendiri Kacunk Motor — Bisnis Mobil Bekas Terbesar',
      origin: '🇮🇩 Indonesia / 🇹🇼 Taiwan',
      ageAtRebound: 'Usia Dewasa',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkit dari Kebangkrutan & Ditinggalkan',
      badge: '1.000 Armada Mobil',
      theme: 'rose',
      accentColor: '#E11D48',
      bgLight: '#FFF1F2',
      borderLight: '#FFE4E6',
      stats: {
        debt: 'Utang Bank Menumpuk (Bangkrut Total)',
        age: 'Usia Produktif',
        lowest: 'Semua Aset Habis & Ditinggal Pasangan',
        action: 'TKI Pabrik di Taiwan & Modal Mobil Timor Rp 33 Jt',
        result: 'Showroom 1.000 Mobil Tanpa Utang Bank'
      },
      timeline: [
        { year: '2010 — Runtuh Total', text: 'Usaha komoditas dan motor bangkrut akibat kurang pengalaman dan utang bank. Kehilangan semua aset dan ditinggalkan pasangan.' },
        { year: 'Nekat ke Taiwan', text: 'Meminjam Rp 25 juta untuk bekal berangkat menjadi buruh pabrik di Taiwan demi melunasi seluruh utang.' },
        { year: '1 Tahun Lebih', text: 'Bekerja keras dan hidup hemat ekstrem. Gaji dikirim ke Indonesia hingga seluruh utang bank lunas tanpa sisa.' },
        { year: 'Modal Rp 70 Juta', text: 'Pulang membawa tabungan Rp 70 juta. Beli sedan Timor bekas Rp 33 juta, dipoles, dijual dengan laba Rp 4 juta.' },
        { year: 'Hari Ini — Rebound', text: 'Mendirikan Kacunk Motor yang kini memiliki armada lebih dari 1.000 unit mobil bekas tanpa bergantung utang bank.' }
      ],
      quote: 'Di negeri orang, aku hanya punya satu pilihan: terus bergerak dan melunasi utang. Jangan biarkan rasa malu membunuh masa depanmu.',
      quoteAuthor: 'Suryo Hadi Pranoto, saat mengenang masa-masa awal berjuang di Taiwan',
      chapters: [
        {
          num: 1,
          title: 'Runtuhnya Segalanya',
          paragraphs: [
            'Tahun 2010. Suryo Hadi Pranoto berdiri di tengah kehampaan hidup.',
            'Usahanya yang dulu ia bangun dengan susah payah—berdagang hasil bumi, menjadi pemasok tenaga kerja, hingga jual-beli sepeda motor—kini tinggal kenangan. Kurangnya pengalaman manajemen risiko dan tekanan cicilan utang bank menggulung semua impiannya seketika. Ia bangkrut total. Tidak punya aset tersisa. Tidak punya motor. Tidak punya modal.',
            'Dan pukulan yang paling menyakitkan menusuk hatinya: pasangannya pergi meninggalkannya di saat ia terpuruk paling bawah. Utang menumpuk di mana-mana. Malam-malam ia habiskan dalam kegelapan, merenung: "Masih adakah jalan keluar untukku?"'
          ]
        },
        {
          num: 2,
          title: 'Nekat ke Taiwan Demi Melunasi Utang',
          paragraphs: [
            'Dalam keterpurukan yang pekat, Suryo mengambil keputusan berani: merantau ke Taiwan. Ia meminjam uang dari keluarga dan kerabat sebesar Rp 25 juta—hanya cukup untuk ongkos tiket dan bekal awal pemberangkatan.',
            'Di negeri orang, ia bekerja sebagai buruh pabrik. Hari-harinya diisi dengan kerja keras tiada henti dan penghematan ekstrem. Setiap rupiah gaji yang ia peroleh langsung ia kirimkan ke tanah air untuk mencicil dan melunasi utang pokoknya.',
            'Ia tidak pernah mengeluh. Dalam waktu sekitar satu tahun lebih, satu per satu beban utangnya LUNAS total. Beban raksasa yang selama bertahun-tahun menghimpit pundaknya akhirnya terlepas.'
          ]
        },
        {
          num: 3,
          title: 'Kembali dengan Modal Rp 70 Juta & Mobil Timor',
          paragraphs: [
            'Setelah seluruh utang lunas, Suryo tidak langsung berpuas diri. Ia terus bekerja, menabung, dan giat mempelajari seluk-beluk bisnis otomotif—kondisi mesin mobil, selera pasar, hingga strategi pemasaran online.',
            'Ketika kembali ke Indonesia, ia membawa tabungan modal sebesar Rp 70 juta. Mobil pertama yang ia beli untuk diputar adalah sebuah mobil sedan Timor bekas seharga Rp 33 juta. Ia poles, ia rawat, lalu ia jual kembali dengan keuntungan bersih Rp 4 juta.',
            'Angka Rp 4 juta itu tampak kecil, namun itulah percikan api pertama dari kebangkitan imperium bisnisnya.'
          ]
        },
        {
          num: 4,
          title: 'Kacunk Motor dan Armada 1.000 Mobil',
          paragraphs: [
            'Dari satu unit mobil Timor tersebut, perputaran uang ia gulung secara disiplin tanpa gaya hidup konsumtif. Ia mendirikan Kacunk Motor—showroom jual-beli mobil bekas yang kini berkembang pesat hingga memiliki armada lebih dari 1.000 unit mobil.',
            'Ia tidak lagi bergantung pada utang bank berbunga tinggi. Setiap mobil yang ia jual adalah buah dari ketahanan mental di Taiwan, malam-malam tanpa tidur, dan disiplin finansial sejati.',
            'Dari puing-puing kebangkrutan dan ditinggalkan, Suryo Hadi Pranoto mendirikan kembali mimpinya lebih megah dari sebelumnya.'
          ]
        }
      ],
      takeaways: [
        { num: 1, text: '<strong>Kesiapan Bekerja Apa Saja Demi Melunasi Utang:</strong> Suryo tidak gengsi menjadi TKI pabrik di luar negeri demi menunaikan kewajiban utangnya sampai tuntas.' },
        { num: 2, text: '<strong>Mulai Kembali dari Unit Terkecil (Modal Rp 33 Juta):</strong> Rebound tidak butuh modal ratusan juta sekaligus. Mobil bekas Timor seharga Rp 33 juta dengan laba Rp 4 juta sudah cukup menjadi batu pijakan pertama.' },
        { num: 3, text: '<strong>Disiplin Menggulung Arus Kas:</strong> Keuntungan bisnis tidak langsung dipakai untuk foya-foya, melainkan diputar kembali menjadi stok mobil hingga mencapai 1.000 unit.' }
      ],
      missionBridge: {
        lesson: 'Suryo menjual dan memutar aset aman untuk melunasi utang dan membangun modal usaha.',
        actionText: 'Inventarisir barang atau aset yang bisa dicairkan di menu Aset.',
        targetScreen: 'assets',
        buttonText: 'Cek Daftar Aset Aman Dijual →'
      }
    },

    {
      id: 'suprianto',
      featured: false,
      name: 'Suprianto (Siomay Wondes)',
      tagline: 'Dari Kursi Bos Kantor ke Gerobak Pinggir Jalan Menuju Dapur Mesin Modern',
      title: 'Dari Meja Kantor ke Pinggir Jalan',
      subtitle: 'Pendiri Siomay Wondes — Indonesia',
      origin: '🇮🇩 Indonesia',
      ageAtRebound: 'Usia Dewasa',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkit dari Utang Medis & Kartu Kredit',
      badge: 'Dapur Mesin Semi-Modern & Lunas',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Ratusan Juta Rupiah (Bunga Kartu Kredit)',
        age: 'Usia Produktif',
        lowest: 'Tekanan Keluarga & Bisnis Gagal',
        action: 'Resign & Jual Siomay di Depan Gereja Tiap Minggu',
        result: 'Dapur Produksi Mesin & Brand Dikenal Luas'
      },
      timeline: [
        { year: 'Masa Mapan', text: 'Karyawan kantoran tertib finansial yang tidak pernah berutang dan memimpin banyak staf.' },
        { year: 'Musibah Medis', text: 'Jatuh sakit parah dengan biaya RS Rp 40 juta. Digesek kartu kredit $\to$ bunga menumpuk jadi ratusan juta.' },
        { year: 'Titik Terendah', text: 'Buka usaha sampingan untuk tutup lubang tapi gagal. Tekanan keluarga besar dan cicilan macet.' },
        { year: 'Doa & Pasrah', text: 'Shalat malam rutin. Piutang lama tak terduga cair, gaji tertunda dibayarkan, utang ratusan juta lunas.' },
        { year: 'Hari Ini — Rebound', text: 'Resign dari kantor, jualan siomay gerobak tiap Minggu pagi, kini punya dapur produksi semi-modern dengan mesin penggiling ikan & mixer.' }
      ],
      quote: 'Dulu saya kerja kantoran, suruh-suruh anak buah. Sekarang saya sendiri yang dagang di pinggir jalan. Selama produk kita jujur dan berkualitas, tidak ada yang perlu dimalukan.',
      quoteAuthor: 'Suprianto, saat memulai usaha gerobak siomay di pinggir jalan',
      chapters: [
        {
          num: 1,
          title: 'Pria yang Tak Pernah Berutang',
          paragraphs: [
            'Suprianto adalah tipe orang yang sangat berhati-hati. Sepanjang hidupnya, ia tidak pernah punya utang. Bahkan kartu kredit pun tidak pernah ia sentuh. Setiap rupiah ia kelola dengan tertib. Ia bekerja di kantor, punya posisi manajerial, dan memimpin anak buah. Hidupnya stabil, teratur, dan aman.',
            'Ia tidak pernah menyangka bahwa rasa aman tersebut bisa runtuh dalam sekejap mata oleh sebuah musibah tak terduga.'
          ]
        },
        {
          num: 2,
          title: 'Rp 40 Juta yang Mengubah Segalanya',
          paragraphs: [
            'Musibah datang tanpa permisi. Suprianto jatuh sakit parah dan harus dirawat intensif di rumah sakit dengan total tagihan mencapai Rp 40 juta. Karena tidak memegang uang tunai likuid sebanyak itu, dalam kepanikan ia menggesek kartu kredit.',
            '"Saya bayar pakai kartu kredit karena enggak punya uang tunai saat itu," kenangnya.',
            'Dari situlah bola salju masalah menggelinding. Bunga kartu kredit yang tinggi menumpuk tagihan demi tagihan. Utang Rp 40 juta membengkak menjadi ratusan juta rupiah. Demi menutup lubang, ia mencoba membuka usaha sampingan namun bisnisnya ikut gagal. Tekanan dari keluarga dan penagih datang silih berganti. Suprianto terjebak dalam kegelapan pekat di mana untuk membayar cicilan minimum pun ia sudah tak sanggup.'
          ]
        },
        {
          num: 3,
          title: 'Doa di Tengah Malam & Titik Balik',
          paragraphs: [
            'Di titik nadir itulah, ketika segala logika manusia sudah buntu, Suprianto melakukan satu hal: berserah total. Ia rutin bangun di sepertiga malam terakhir, shalat, dan memohon petunjuk jalan keluar.',
            'Perlahan, rentetan keajaiban ikhtiar mulai berdatangan. Orang yang memiliki piutang lama kepadanya—yang sudah ia ikhlaskan—tiba-tiba datang melunasi. Gaji kantornya yang tertunda berbulan-bulan akhirnya dibayarkan oleh perusahaan. Satu per satu, beban utang ratusan juta itu terbayar lunas.',
            'Beban berat yang selama bertahun-tahun menghimpit dadanya akhirnya terangkat lepas.'
          ]
        },
        {
          num: 4,
          title: 'Resign dan Memulai dari Nol di Pinggir Jalan',
          paragraphs: [
            'Setelah utang lunas, Suprianto mengambil keputusan besar yang mengejutkan: ia mengundurkan diri (resign) dari pekerjaan kantorannya yang mapan.',
            '"Dulu saya kerja kantoran, biasa menyuruh anak buah. Sekarang saya sendiri yang berdiri dagang di pinggir jalan," ujarnya mantap.',
            'Ia memulai dari nol berjualan siomay di tempat sangat sederhana: di depan gereja setiap hari Minggu pagi. Ia menggelar gerobak kecil, menyalakan kukusan, dan melayani para jemaat yang baru selesai beribadah.',
            'Awalnya berjalan pelan, namun racikan siomaynya yang kenyal, gurih, dan bersih dengan cepat memikat lidah pelanggan setia.'
          ]
        },
        {
          num: 5,
          title: 'Siomay Wondes & Dapur Produksi Mesin',
          paragraphs: [
            'Dari gerobak kecil Minggu pagi, Suprianto membesarkan brand Siomay Wondes. Kini usahanya telah memiliki dapur produksi sendiri yang semi-modern dengan mesin pemarut labu siam, penggiling ikan tenggiri asli, hingga mixer adonan otomatis.',
            'Rahasia kelezatannya konsisten: menggunakan labu siam muda agar tekstur kenyal alami tanpa serat kasar, 100% daging ikan tenggiri asli, serta bumbu rempah pilihan (kemiri, bawang putih, lada murni).',
            'Suprianto membuktikan bahwa membuang gengsi dan fokus pada mutu produk adalah kunci sejati untuk bangkit mandiri menjadi pemilik bisnis yang bermartabat.'
          ]
        }
      ],
      takeaways: [
        { num: 1, text: '<strong>Waspadai Gesek Kartu Kredit untuk Dana Darurat:</strong> Membayar biaya medis besar dengan kartu kredit berbunga tinggi tanpa mitigasi darurat adalah jebakan utang ratusan juta. Siapkan pos dana darurat cair.' },
        { num: 2, text: '<strong>Buang Gengsi Status Pekerjaan:</strong> Pindah dari bos kantoran menjadi penjual gerobak pinggir jalan bukanlah kemunduran, melainkan langkah awal membangun kebebasan finansial sejati.' },
        { num: 3, text: '<strong>Kualitas Produk Adalah Pemasaran Terbaik:</strong> Siomay dengan bahan baku jujur (ikan tenggiri asli & labu siam muda) akan menciptakan pelanggan setia yang mengembangkan bisnis secara organik.' }
      ],
      missionBridge: {
        lesson: 'Suprianto memulai usaha baru dengan kualitas produk terbaik dan fokus pada tindakan nyata.',
        actionText: 'Buka panduan misi harian hari ini dan selesaikan 1 tindakan nyata.',
        targetScreen: 'missions',
        buttonText: 'Buka Misi Harian Hari Ini →'
      }
    }
,

    {
      id: 'matyasin',
      featured: false,
      name: 'Mat Yasin (Miliarder Besi Tua)',
      tagline: 'Dari Penjual Kue Bapel & Utang Rp 3 Miliar Menjadi Miliarder Besi Tua Sumba',
      title: 'Dari Penjual Kue Bapel hingga Miliarder Besi Tua',
      subtitle: 'Pengusaha Besi Tua Asal Desa Madulang, Sampang, Madura',
      origin: '🇮🇩 Sampang, Madura / Sumba Barat, NTT',
      ageAtRebound: 'Usia Dewasa',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkit dari Utang Rp 3 Miliar & Pengabdian Desa',
      badge: 'Bangun Jalan 10 KM & Lunas',
      theme: 'blue',
      accentColor: '#2563EB',
      bgLight: '#EFF6FF',
      borderLight: '#DBEAFE',
      stats: {
        debt: 'Rp 3 Miliar (Menumpuk 2020–2022)',
        age: 'Usia Produktif',
        lowest: 'Kayu Bekas Bangkrut, Bingung Bayar Utang',
        action: 'Nekat ke Sumba Barat Berdagang Besi Tua',
        result: 'Transaksi Puluhan Miliar & Bangun Jalan Aspal 10 KM'
      },
      timeline: [
        { year: 'Awal Perjuangan', text: 'Merantau dari Madura menjual kue bapel keliling dan merintis dagang kayu bekas.' },
        { year: '2020–2022 — Krisis', text: 'Bisnis kayu bekas bangkrut total. Utang menumpuk Rp 3 miliar dari bank, kerabat, dan rekan bisnis.' },
        { year: 'Titik Terendah', text: 'Terpuruk di sudut ruangan dan kebingungan mencari cara melunasi utang yang bagai gunung.' },
        { year: 'Akhir 2022 — Titik Balik', text: 'Berbekal doa ibu, pertama kali naik pesawat ke Sumba Barat, NTT untuk menjemput peluang bisnis besi tua.' },
        { year: 'Hari Ini — Rebound', text: 'Transaksi tembus puluhan miliar, utang Rp 3 M lunas total, dan membangun jalan aspal 10 km di desanya.' }
      ],
      quote: 'Bagi siapapun yang ditinggal orang tuanya, jangan putus asa. Jangan patah semangat dan terus berusaha. Allah pasti akan memberi rezeki.',
      quoteAuthor: 'Mat Yasin, saat mengenang perjuangan merantau ke Sumba Barat',
      chapters: [
        {
          num: 1,
          title: 'Anak Madura yang Nekat Merantau',
          paragraphs: [
            'Mat Yasin lahir di Desa Madulang, Sampang, Madura—sebuah desa kecil dengan jalanan tanah dan keterbatasan fasilitas di mana-mana. Sejak muda, ia tahu bahwa untuk mengubah nasib keluarga, ia harus berani melangkah keluar dari kampung halaman.',
            'Dengan keberanian khas anak Madura, ia merantau. Awalnya, ia berjualan kue bapel—kue tradisional khas Madura—di pinggir jalan. Setiap hari ia memikul dagangannya, berjalan kaki dari satu tempat ke tempat lain, menawarkan kue hangat buatan tangannya sendiri.',
            'Penghasilannya pas-pasan, namun ia menabung sedikit demi sedikit dan mencoba peruntungan di bisnis kayu bekas sebagai tangga menuju kehidupan yang lebih baik.'
          ]
        },
        {
          num: 2,
          title: 'Rp 3 Miliar yang Menggunung',
          paragraphs: [
            'Namun nasib berkata lain. Usaha kayu bekasnya mengalami kegagalan fatal dan bangkrut total. Dan yang lebih mengerikan, utang mulai menumpuk dari segala arah—bank, kerabat keluarga, hingga rekanan bisnis.',
            'Rp 3 miliar. Angka raksasa itu menghantuinya setiap malam. Tahun 2021 hingga 2022 adalah masa-masa tergelap dalam hidup Mat Yasin. Ia sering duduk termenung di sudut ruangan menatap langit-langit, bertanya pada dirinya sendiri: "Aku harus bayar utang ini dengan cara apa?"',
            'Beban itu terasa seperti gunung yang mustahil dipindahkan. Namun darah juang pantang menyerah dalam dirinya berbisik: "Jangan menyerah, Yasin. Jangan."'
          ]
        },
        {
          num: 3,
          title: 'Doa Ibu dan Tiket ke Sumba',
          paragraphs: [
            'Di titik nadir itulah, pintu harapan terbuka dari arah yang tak terduga. Seorang kawan lamanya menghubungi dan mengajaknya berdagang besi tua di Sumba Barat, Nusa Tenggara Timur (NTT). Jaraknya sangat jauh ke timur Indonesia, namun Mat Yasin tidak memiliki pilihan lain untuk mundur.',
            'Istrinya mengantar ke bandara. Di belakangnya, doa tulus sang ibu mengalir deras mengiringi setiap langkah kakinya.',
            '"Ini berkat doa ibu yang mengantarkanku bertemu orang-orang baik di tanah rantau saat itu," kenang Mat Yasin dengan mata berkaca-kaca.',
            'Ia menaiki pesawat terbang untuk pertama kalinya dalam hidupnya. Di dalam kabin, Mat Yasin menggenggam erat tiket penerbangannya dengan tekad bulat: ini adalah kesempatan terakhir untuk membalikkan takdir.'
          ]
        },
        {
          num: 4,
          title: 'Miliarder Besi Tua',
          paragraphs: [
            'Di Sumba Barat, Mat Yasin menemukan ekosistem bisnisnya. Ia bertemu dan bergaul dengan ratusan pebisnis besi tua berpengalaman. Dari sanalah ia tekun belajar: cara menaksir kualitas besi, teknik negosiasi partai besar, dan membangun rantai pasok pengiriman.',
            'Perlahan tapi pasti, skala bisnis besi tuanya melesat cepat. Nilai transaksi yang ia kelola meningkat dari puluhan juta, ratusan juta, hingga akhirnya menembus puluhan miliar rupiah.',
            'Utang Rp 3 miliar yang dulu terasa menghimpit lehernya, sedikit demi sedikit terbayar lunas tanpa sisa. Mat Yasin bertransformasi menjadi pengusaha besi tua yang disegani.'
          ]
        },
        {
          num: 5,
          title: 'Jalan Pulang Sepanjang 10 Kilometer',
          paragraphs: [
            'Namun kekayaan materi tidak membuatnya lupa pada tanah kelahirannya. Saat masih terpuruk dalam kubangan utang, Mat Yasin pernah berikrar pada dirinya sendiri: "Kalau suatu hari aku berhasil bangkit dan punya uang puluhan miliar, aku akan membangun desa kelahiranku."',
            'Janji itu ia tunaikan secara nyata. Mat Yasin kembali ke Desa Madulang, Sampang, Madura, lalu membiayai langsung pembangunan jalan aspal mulus sepanjang lebih dari 10 kilometer dengan dana pribadinya.',
            'Jalan desa yang puluhan tahun becek dan berlumpur kini telah mulus beraspal hitam. Anak-anak sekolah dapat melintas dengan ceria dan para petani desa dapat mengangkut hasil panen dengan mudah.',
            'Mat Yasin membuktikan bahwa ketika niat kita lurus untuk melunasi utang dan berbakti pada orang tua, jalan rezeki akan terbuka tanpa batas.'
          ]
        }
      ],
      takeaways: [
        { num: 1, text: '<strong>Keberanian Menjemput Peluang di Luar Zona Nyaman:</strong> Mat Yasin tidak ragu terbang ke Sumba Barat meski belum pernah naik pesawat demi mencari jalan keluar dari utang Rp 3 miliar.' },
        { num: 2, text: '<strong>Kekuatan Doa Orang Tua & Keteguhan Hati:</strong> Ridha dan doa ibu adalah energi pendorong terkuat saat semua pintu bantuan manusia terasa tertutup rapat.' },
        { num: 3, text: '<strong>Menepati Nazar & Berbagi Manfaat:</strong> Kesuksesan finansial tertinggi adalah saat kita mampu menepati janji untuk membawa manfaat nyata bagi masyarakat luas (membangun jalan aspal 10 km).' }
      ],
      missionBridge: {
        lesson: 'Mat Yasin tidak berhenti saat utang Rp 3 miliar menghimpit, ia berani mencari peluang pasar baru.',
        actionText: 'Catat prospek kerja atau peluang penghasilan baru di menu Income hari ini.',
        targetScreen: 'income',
        buttonText: 'Cari Peluang Pemasukan Baru →'
      }
    }  ],

  init() {
    // Load bookmarks from localStorage
    try {
      const saved = localStorage.getItem('rebound30_bookmarks');
      this.bookmarks = saved ? JSON.parse(saved) : [];
    } catch {
      this.bookmarks = [];
    }
    this.render();
  },

  toggleBookmark(storyId, e) {
    if (e) e.stopPropagation();
    const idx = this.bookmarks.indexOf(storyId);
    if (idx !== -1) {
      this.bookmarks.splice(idx, 1);
      if (typeof App !== 'undefined' && App.toast) App.toast('Dihapus dari kisah tersimpan', 'info');
    } else {
      this.bookmarks.push(storyId);
      if (typeof App !== 'undefined' && App.toast) App.toast('Kisah disimpan ke bookmark! 🔖', 'success');
    }
    try {
      localStorage.setItem('rebound30_bookmarks', JSON.stringify(this.bookmarks));
    } catch {}
    this.render();
  },

  isBookmarked(storyId) {
    return this.bookmarks.includes(storyId);
  },

  setCategory(cat) {
    this.selectedCategory = cat;
    this.render();
  },

  setSearch(query) {
    this.searchQuery = (query || '').toLowerCase().trim();
    this.render();
  },

  openReader(storyId) {
    this.activeId = storyId;
    this.viewMode = 'reader';
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  closeReader() {
    this.viewMode = 'library';
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  getFilteredData() {
    return this.DATA.filter(item => {
      let matchCat = true;
      if (this.selectedCategory === 'all') {
        matchCat = true;
      } else if (this.selectedCategory === 'bookmarks') {
        matchCat = this.isBookmarked(item.id);
      } else {
        matchCat = (item.categories || []).includes(this.selectedCategory);
      }

      const matchSearch = !this.searchQuery || 
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.title.toLowerCase().includes(this.searchQuery) ||
        item.tagline.toLowerCase().includes(this.searchQuery) ||
        item.subtitle.toLowerCase().includes(this.searchQuery);

      return matchCat && matchSearch;
    });
  },

  render() {
    const container = document.getElementById('stories-root');
    if (!container) return;

    if (this.viewMode === 'reader') {
      this.renderReader(container);
    } else {
      this.renderLibrary(container);
    }
  },

  renderLibrary(container) {
    const filtered = this.getFilteredData();
    const featuredStory = this.DATA.find(s => s.featured) || this.DATA[0];

    // Problem-based category chips
    const categories = [
      { id: 'all', label: `Semua (${this.DATA.length})` },
      { id: 'debt', label: '💸 Terlilit Utang' },
      { id: 'bankrupt', label: '💥 Bangkrut' },
      { id: 'zero', label: '🏚️ Mulai dari Nol' },
      { id: 'business', label: '🚀 Bangkit Bisnis' },
      { id: 'indonesia', label: '🇮🇩 Indonesia' },
      { id: 'global', label: '🌏 Global' },
      { id: 'bookmarks', label: `🔖 Tersimpan (${this.bookmarks.length})` },
    ];

    const categoryChipsHtml = categories.map(cat => `
      <button class="story-category-chip ${this.selectedCategory === cat.id ? 'active' : ''}" onclick="Stories.setCategory('${cat.id}')">
        ${cat.label}
      </button>
    `).join('');

    // Teaser Cards (2 columns on desktop, 1 on mobile)
    const cardsHtml = filtered.map(item => {
      const isSaved = this.isBookmarked(item.id);
      return `
        <div class="story-catalog-card" onclick="Stories.openReader('${item.id}')">
          <div class="catalog-card-header">
            <div class="catalog-origin-tag">${item.origin} · ${item.ageAtRebound}</div>
            <button class="bookmark-btn ${isSaved ? 'active' : ''}" onclick="Stories.toggleBookmark('${item.id}', event)" title="${isSaved ? 'Hapus bookmark' : 'Simpan kisah'}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
            </button>
          </div>

          <h3 class="catalog-card-name">${H.escHtml(item.name)}</h3>
          <p class="catalog-card-tagline">${H.escHtml(item.tagline)}</p>

          <!-- 3 Micro Metrics -->
          <div class="catalog-micro-stats">
            <div class="micro-stat-item">
              <span class="micro-stat-label">Beban Utang:</span>
              <span class="micro-stat-val" style="color:var(--red-600);">${H.escHtml(item.stats.debt)}</span>
            </div>
            <div class="micro-stat-item">
              <span class="micro-stat-label">Titik Terendah:</span>
              <span class="micro-stat-val">${H.escHtml(item.stats.lowest)}</span>
            </div>
          </div>

          <div class="catalog-card-footer">
            <span class="badge" style="background:${item.bgLight};color:${item.accentColor};border:1px solid ${item.borderLight};font-size:11px;padding:3px 8px;">
              ${H.escHtml(item.categoryLabel)}
            </span>
            <span class="read-more-link" style="color:${item.accentColor};">
              Baca Kisah →
            </span>
          </div>
        </div>
      `;
    }).join('') || `
      <div style="grid-column:1/-1;text-align:center;padding:var(--space-8);background:var(--color-surface);border-radius:var(--radius-xl);border:1px dashed var(--color-border);">
        <div style="font-size:32px;margin-bottom:8px;">📖</div>
        <div style="font-weight:700;color:var(--color-text-primary);margin-bottom:4px;">Tidak ada kisah yang cocok</div>
        <div style="font-size:13px;color:var(--color-text-muted);">Coba ubah kata kunci pencarian atau pilih kategori lain.</div>
      </div>
    `;

    container.innerHTML = `
      <div class="stories-library-view fade-in">
        <!-- Page Header -->
        <div class="page-header" style="margin-bottom:var(--space-5);">
          <div style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;background:var(--teal-50);border:1px solid var(--teal-200);border-radius:20px;color:var(--teal-800);font-size:12px;font-weight:700;margin-bottom:var(--space-2);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
            Perpustakaan Kisah Nyata (${this.DATA.length} Tokoh)
          </div>
          <h1 class="page-title">Kisah Bangkit: Dari Titik Nol Menuju Pulih</h1>
          <div class="page-subtitle">Belajar dari orang-orang nyata yang pernah berada di jurang utang terdalam dan menemukan jalan keluar melalui tindakan disiplin.</div>
        </div>

        <!-- Search Bar -->
        <div style="margin-bottom:var(--space-4);position:relative;">
          <input type="text" class="form-input" placeholder="🔍 Cari nama tokoh, nominal utang, atau kata kunci..." value="${H.escHtml(this.searchQuery)}" oninput="Stories.setSearch(this.value)" style="width:100%;padding:10px 16px;border-radius:var(--radius-lg);font-size:13.5px;">
        </div>

        <!-- Category Scrollable Filter Chips -->
        <div class="story-category-bar" style="margin-bottom:var(--space-6);">
          ${categoryChipsHtml}
        </div>

        <!-- Featured Story Banner (Only show if viewing 'all' and no search) -->
        ${(this.selectedCategory === 'all' && !this.searchQuery && featuredStory) ? `
          <div class="featured-story-banner" onclick="Stories.openReader('${featuredStory.id}')" style="border-left:5px solid ${featuredStory.accentColor};">
            <div class="featured-badge-pill">⭐ KISAH PILIHAN MINGGU INI</div>
            <div class="grid grid-2" style="gap:var(--space-4);align-items:center;">
              <div>
                <div style="font-size:12px;color:var(--teal-700);font-weight:700;text-transform:uppercase;margin-bottom:4px;">${featuredStory.origin} · ${featuredStory.ageAtRebound}</div>
                <h2 style="font-size:1.5rem;font-weight:800;color:var(--color-text-primary);margin-bottom:6px;">${H.escHtml(featuredStory.name)}</h2>
                <p style="font-size:13.5px;color:var(--color-text-secondary);line-height:1.5;margin-bottom:var(--space-3);">${H.escHtml(featuredStory.tagline)}</p>
                <div class="featured-stat-tags">
                  <span class="fstat-tag"><strong>Utang:</strong> ${H.escHtml(featuredStory.stats.debt)}</span>
                  <span class="fstat-tag"><strong>Modal Awal:</strong> ${H.escHtml(featuredStory.stats.action)}</span>
                </div>
              </div>
              <div style="text-align:right;">
                <button class="btn btn-primary" style="padding:10px 20px;font-size:13px;border-radius:var(--radius-md);">
                  Baca Kisah Lengkap →
                </button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Section Label -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-4);margin-top:var(--space-5);">
          <div style="font-size:14px;font-weight:800;color:var(--color-text-primary);">Daftar Kisah (${filtered.length})</div>
          <div style="font-size:12px;color:var(--color-text-muted);">Pilih salah satu kisah untuk membuka mode membaca</div>
        </div>

        <!-- 2-Column Catalog Grid (1 Col Mobile) -->
        <div class="story-catalog-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  },

  renderReader(container) {
    const story = this.DATA.find(s => s.id === this.activeId) || this.DATA[0];
    const currentIndex = this.DATA.findIndex(s => s.id === story.id);
    const prevStory = currentIndex > 0 ? this.DATA[currentIndex - 1] : null;
    const nextStory = currentIndex < this.DATA.length - 1 ? this.DATA[currentIndex + 1] : null;
    const isSaved = this.isBookmarked(story.id);

    // Render Timeline Items
    const timelineHtml = (story.timeline || []).map(tl => `
      <div class="story-timeline-item">
        <div class="story-timeline-dot" style="background:${story.accentColor};"></div>
        <div class="story-timeline-content">
          <div class="story-timeline-year" style="color:${story.accentColor};">${H.escHtml(tl.year)}</div>
          <div class="story-timeline-desc">${H.escHtml(tl.text)}</div>
        </div>
      </div>
    `).join('');

    // Render Narrative Chapters
    const chaptersHtml = (story.chapters || []).map(ch => `
      <div class="reader-chapter-box">
        <div class="reader-chapter-num" style="background:${story.bgLight};color:${story.accentColor};">
          BAB ${ch.num}
        </div>
        <h3 class="reader-chapter-title">${H.escHtml(ch.title)}</h3>
        <div class="reader-chapter-body">
          ${ch.paragraphs.map(p => `<p>${H.escHtml(p)}</p>`).join('')}
        </div>
      </div>
    `).join('');

    // Render Takeaways
    const takeawaysHtml = (story.takeaways || []).map(t => `
      <div class="takeaway-item">
        <div class="takeaway-num" style="background:${story.accentColor};color:#fff;">${t.num}</div>
        <div class="takeaway-text">${t.text}</div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="story-reader-view fade-in">
        <!-- Reader Top Nav -->
        <div class="reader-top-bar">
          <button class="btn btn-outline btn-sm" onclick="Stories.closeReader()" style="display:inline-flex;align-items:center;gap:6px;font-size:12.5px;">
            ← Kembali ke Semua Kisah
          </button>
          <div style="display:flex;align-items:center;gap:8px;">
            <button class="bookmark-btn ${isSaved ? 'active' : ''}" onclick="Stories.toggleBookmark('${story.id}', event)" style="padding:6px 12px;border-radius:20px;border:1px solid var(--color-border);display:inline-flex;align-items:center;gap:6px;font-size:12px;background:var(--color-surface);">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
              ${isSaved ? 'Tersimpan' : 'Simpan Kisah'}
            </button>
          </div>
        </div>

        <!-- Editorial Hero Card -->
        <div class="reader-hero-card" style="border-top:5px solid ${story.accentColor};">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:var(--space-3);">
            <div>
              <div style="font-size:12px;font-weight:700;color:${story.accentColor};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">${story.origin} · ${story.ageAtRebound}</div>
              <h1 class="reader-main-title">${H.escHtml(story.name)}</h1>
              <div class="reader-main-sub">${H.escHtml(story.tagline)}</div>
            </div>
            <span class="badge" style="background:${story.bgLight};color:${story.accentColor};border:1px solid ${story.borderLight};padding:6px 14px;font-size:12px;font-weight:700;border-radius:20px;">
              ${H.escHtml(story.badge)}
            </span>
          </div>

          <!-- 4 Fact Boxes -->
          <div class="reader-stats-grid">
            <div class="rstat-box">
              <div class="rstat-label">Beban Utang Awal</div>
              <div class="rstat-val" style="color:var(--red-600);">${H.escHtml(story.stats.debt)}</div>
            </div>
            <div class="rstat-box">
              <div class="rstat-label">Titik Terendah</div>
              <div class="rstat-val">${H.escHtml(story.stats.lowest)}</div>
            </div>
            <div class="rstat-box">
              <div class="rstat-label">Langkah Rebound</div>
              <div class="rstat-val">${H.escHtml(story.stats.action)}</div>
            </div>
            <div class="rstat-box">
              <div class="rstat-label">Pencapaian Hari Ini</div>
              <div class="rstat-val" style="color:var(--teal-700);">${H.escHtml(story.stats.result || story.badge)}</div>
            </div>
          </div>

          <!-- Golden Quote Box -->
          <div class="reader-quote-box" style="background:${story.bgLight};border-left:4px solid ${story.accentColor};">
            <div class="reader-quote-text" style="color:var(--slate-900);">
              "${H.escHtml(story.quote)}"
            </div>
            <div class="reader-quote-author" style="color:${story.accentColor};">
              — ${H.escHtml(story.quoteAuthor)}
            </div>
          </div>
        </div>

        <!-- Vertical Journey Timeline -->
        <div class="reader-timeline-card">
          <div class="reader-section-heading">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;color:${story.accentColor};"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Garis Waktu Perjalanan Rebound (${H.escHtml(story.name)})
          </div>
          <div class="story-timeline-wrap">
            ${timelineHtml}
          </div>
        </div>

        <!-- Narrative Reading Chapters -->
        <div class="reader-narrative-card">
          <div class="reader-section-heading" style="margin-bottom:var(--space-6);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;color:${story.accentColor};"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Narasi Lengkap Perjuangan
          </div>

          ${chaptersHtml}

          <!-- Blueprint Takeaways -->
          <div class="takeaways-box" style="border-top:3px solid ${story.accentColor};margin-top:var(--space-6);">
            <div class="takeaways-title" style="color:${story.accentColor === '#0F766E' ? 'var(--teal-400)' : story.accentColor};">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              Pelajaran Finansial Rebound 30 dari ${H.escHtml(story.name)}:
            </div>
            ${takeawaysHtml}
          </div>

          <!-- Mission Bridge Box (Direct Action for Reader) -->
          ${story.missionBridge ? `
            <div class="reader-mission-bridge-box">
              <div style="font-size:12px;font-weight:700;color:var(--teal-700);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">🎯 Ambil Pelajaran & Mulai Bertindak</div>
              <h3 style="font-size:1.15rem;font-weight:800;color:var(--color-text-primary);margin-bottom:6px;">Jangan Berhenti di Membaca — Ambil 1 Tindakan Nyata Hari Ini</h3>
              <p style="font-size:13.5px;color:var(--slate-600);line-height:1.5;margin-bottom:var(--space-4);">
                ${H.escHtml(story.missionBridge.lesson)} ${H.escHtml(story.missionBridge.actionText)}
              </p>
              <button class="btn btn-primary" onclick="App.navigate('${story.missionBridge.targetScreen}')" style="font-size:13px;padding:10px 18px;border-radius:var(--radius-md);">
                ${H.escHtml(story.missionBridge.buttonText)}
              </button>
            </div>
          ` : ''}

          <!-- Prev & Next Pagination -->
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:var(--space-8);padding-top:var(--space-5);border-top:1px solid var(--color-border);flex-wrap:wrap;">
            ${prevStory ? `
              <button class="btn btn-outline btn-sm" onclick="Stories.openReader('${prevStory.id}')" style="font-size:12.5px;">
                ← ${H.escHtml(prevStory.name)}
              </button>
            ` : '<div></div>'}

            <button class="btn btn-secondary btn-sm" onclick="Stories.closeReader()" style="font-size:12px;">
              Daftar Semua Kisah
            </button>

            ${nextStory ? `
              <button class="btn btn-primary btn-sm" onclick="Stories.openReader('${nextStory.id}')" style="font-size:12.5px;">
                ${H.escHtml(nextStory.name)} →
              </button>
            ` : '<div></div>'}
          </div>
        </div>
      </div>
    `;
  }
};
