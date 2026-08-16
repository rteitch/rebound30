// ============================================================
// REBOUND 30 — KISAH BANGKIT (SCALABLE EDITORIAL ENGINE)
// Data-Driven Master-Detail Magazine Reader
// ============================================================

const Stories = {
  activeId: 'shao',
  searchQuery: '',
  selectedCategory: 'all',

  DATA: [
    {
      id: 'shao',
      category: 'global',
      name: 'Shao Baoling (邵宝玲)',
      title: 'Dari Reruntuhan, Ia Tumbuh Kembali',
      subtitle: 'Mantan "Ratu Koper" Asal Yiwu, Tiongkok',
      tag: 'Kisah #1 · Yiwu, Tiongkok',
      badge: 'Aktif Membuka 3 Cabang',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>',
      summary: 'Ratu Koper berutang Rp 220 Miliar & didiagnosis kanker, bangkit di usia 61 tahun dengan warung bakpao 5 Yuan.',
      stats: {
        debt: '> 100 Juta Yuan (~Rp 220 M)',
        cause: 'Penjaminan Kredit Silang & Krisis 2014',
        lowest: 'Usia 61 Thn (Bangkrut & Vonis Kanker)',
        firstStep: 'Jual Bakpao 5 Yuan (Rp 11.000)'
      },
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
      ]
    },

    {
      id: 'tang',
      category: 'global',
      name: 'Tang Jian (唐健)',
      title: 'Dari Raja Kuliner Menuju Om Sosis Panggang',
      subtitle: 'Mantan Pengusaha Restoran Mewah Qingdao, Tiongkok',
      tag: 'Kisah #2 · Qingdao, Tiongkok',
      badge: 'Target Lunas Total 2027',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FFFBEB',
      borderLight: '#FEF3C7',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
      summary: 'Raja Kuliner terlilit utang Rp 100 Miliar karena ekspansi, bangkit di usia 57 tahun dengan kios sosis 25 m².',
      stats: {
        debt: '46 Juta Yuan (~Rp 100 Miliar)',
        cause: 'Ekspansi Berlebihan & Jeratan Rentenir',
        lowest: 'Usia 57 Thn (Rumah Disita & Cerai)',
        firstStep: 'Kios Sosis Panggang 25 m² di Trotoar'
      },
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
      ]
    },

    {
      id: 'hendra',
      category: 'indonesia',
      name: 'M. Taufik Hendradinata (Hendra)',
      title: 'Gelandangan yang Kini Punya Pabrik',
      subtitle: 'Owner Salina Herbal — Indonesia',
      tag: 'Kisah #3 · Indonesia',
      badge: 'Utang Lunas 100%',
      theme: 'indigo',
      accentColor: '#4F46E5',
      bgLight: '#EEF2FF',
      borderLight: '#E0E7FF',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
      summary: 'Mantan Raja Laundry terlilit utang Rp 2,2 Miliar & menggelandang di teras masjid, kini pemilik pabrik skincare.',
      stats: {
        debt: 'Rp 2,2 Miliar',
        cause: 'Penipuan Waralaba Rp 800 Jt & Gali Lubang',
        lowest: 'Sisa Rp 700rb, Tinggal di Teras Masjid',
        firstStep: 'Rintis Skincare Salina Herbal dari Titik Nol'
      },
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
      ]
    },

    {
      id: 'suryo',
      category: 'indonesia',
      name: 'Suryo Hadi Pranoto (Kacunk Motor)',
      title: 'Dari Nol di Taiwan Menuju Seribu Mobil',
      subtitle: 'Pendiri Kacunk Motor — Bisnis Mobil Bekas Terbesar',
      tag: 'Kisah #4 · Indonesia / Taiwan',
      badge: '1.000 Armada Mobil',
      theme: 'rose',
      accentColor: '#E11D48',
      bgLight: '#FFF1F2',
      borderLight: '#FFE4E6',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.8 2 11 2 11.2V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
      summary: 'Bangkrut total, aset lenyap, dan ditinggal pasangan, nekat jadi TKI di Taiwan untuk lunasi utang, kini punya 1.000 mobil.',
      stats: {
        debt: 'Utang Bank & Bisnis Menumpuk',
        cause: 'Kurang Pengalaman & Tekanan Utang Bank',
        lowest: 'Kehilangan Semua Aset & Ditinggal Pasangan',
        firstStep: 'Nekat Jadi TKI Taiwan & Jual Mobil Timor Rp 33 Jt'
      },
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
      ]
    },

    {
      id: 'suprianto',
      category: 'indonesia',
      name: 'Suprianto (Siomay Wondes)',
      title: 'Dari Meja Kantor ke Pinggir Jalan',
      subtitle: 'Pendiri Siomay Wondes — Indonesia',
      tag: 'Kisah #5 · Indonesia',
      badge: 'Dapur Produksi Mesin & Lunas 100%',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-7.54 16.58L3 22l3.42-1.46A10 10 0 1 0 12 2z"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
      summary: 'Mantan karyawan kantoran terjerat utang ratusan juta akibat biaya medis kartu kredit, bangkit jualan siomay di pinggir jalan hingga punya dapur mesin sendiri.',
      stats: {
        debt: 'Ratusan Juta Rupiah (Bunga Kartu Kredit)',
        cause: 'Biaya Rawat RS Rp 40 Jt & Bisnis Gagal',
        lowest: 'Tekanan Keluarga & Tak Sanggup Bayar Cicilan',
        firstStep: 'Resign Kantor & Jual Siomay di Depan Gereja Tiap Minggu'
      },
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
      ]
    }
  ],

  init() {
    this.render();
  },

  setCategory(cat) {
    this.selectedCategory = cat;
    this.render();
  },

  setSearch(query) {
    this.searchQuery = (query || '').toLowerCase().trim();
    this.render();
  },

  selectStory(storyId) {
    this.activeId = storyId;
    this.render();
    
    // Smooth scroll to top of story reader
    const readerEl = document.getElementById('story-reader-anchor');
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  getFilteredData() {
    return this.DATA.filter(item => {
      const matchCat = (this.selectedCategory === 'all') || (item.category === this.selectedCategory);
      const matchSearch = !this.searchQuery || 
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.title.toLowerCase().includes(this.searchQuery) ||
        item.subtitle.toLowerCase().includes(this.searchQuery) ||
        item.summary.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSearch;
    });
  },

  render() {
    const container = document.getElementById('stories-root');
    if (!container) return;

    const filtered = this.getFilteredData();
    const activeStory = this.DATA.find(s => s.id === this.activeId) || this.DATA[0];
    const currentIndex = this.DATA.findIndex(s => s.id === activeStory.id);
    const prevStory = currentIndex > 0 ? this.DATA[currentIndex - 1] : null;
    const nextStory = currentIndex < this.DATA.length - 1 ? this.DATA[currentIndex + 1] : null;

    // 1. Shelf Cards HTML
    const cardsHtml = filtered.map(item => {
      const isActive = item.id === activeStory.id;
      return `
        <div class="story-shelf-card ${isActive ? 'active' : ''} theme-${item.theme}" onclick="Stories.selectStory('${item.id}')">
          <div class="shelf-card-top">
            <div class="shelf-card-avatar" style="background:${item.bgLight};color:${item.accentColor};">
              ${item.iconSvg}
            </div>
            <div style="flex:1;min-width:0;">
              <span class="story-tag" style="background:${item.bgLight};color:${item.accentColor};font-size:10px;padding:2px 6px;">${H.escHtml(item.tag)}</span>
              <div class="shelf-card-name">${H.escHtml(item.name)}</div>
            </div>
          </div>
          <div class="shelf-card-summary">${H.escHtml(item.summary)}</div>
          <div class="shelf-card-badge">
            <strong>Fakta:</strong> ${H.escHtml(item.badge)}
          </div>
        </div>
      `;
    }).join('') || '<div style="padding:var(--space-6);color:var(--color-text-muted);text-align:center;grid-column:1/-1;">Tidak ada kisah yang cocok dengan pencarian.</div>';

    // 2. Active Reader HTML
    const chaptersHtml = activeStory.chapters.map(ch => `
      <div class="chapter-block">
        <div class="chapter-header">
          <div class="chapter-badge" style="background:${activeStory.bgLight};color:${activeStory.accentColor};">${ch.num}</div>
          <h3 class="chapter-title">${H.escHtml(ch.title)}</h3>
        </div>
        <div class="chapter-body">
          ${ch.paragraphs.map(p => `<p>${H.escHtml(p)}</p>`).join('')}
        </div>
      </div>
    `).join('');

    const takeawaysHtml = activeStory.takeaways.map(t => `
      <div class="takeaway-item">
        <div class="takeaway-num" style="background:${activeStory.accentColor};color:#fff;">${t.num}</div>
        <div class="takeaway-text">${t.text}</div>
      </div>
    `).join('');

    const paginationHtml = `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:var(--space-6);padding-top:var(--space-5);border-top:1px solid var(--color-border);flex-wrap:wrap;">
        ${prevStory ? `
          <button class="btn btn-outline btn-sm" onclick="Stories.selectStory('${prevStory.id}')" style="font-size:12px;">
            ← ${H.escHtml(prevStory.name)}
          </button>
        ` : '<div></div>'}
        
        <div style="font-size:12px;color:var(--color-text-muted);">
          Kisah ${currentIndex + 1} dari ${this.DATA.length} Tokoh
        </div>

        ${nextStory ? `
          <button class="btn btn-primary btn-sm" onclick="Stories.selectStory('${nextStory.id}')" style="font-size:12px;">
            ${H.escHtml(nextStory.name)} →
          </button>
        ` : '<div></div>'}
      </div>
    `;

    container.innerHTML = `
      <!-- Page Header -->
      <div class="page-header" style="margin-bottom:var(--space-5);">
        <div style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;background:var(--teal-50);border:1px solid var(--teal-200);border-radius:20px;color:var(--teal-800);font-size:12px;font-weight:700;margin-bottom:var(--space-2);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          Ruang Inspirasi & Refleksi (${this.DATA.length} Tokoh Nyata)
        </div>
        <h1 class="page-title">Kisah Nyata: Dari Titik Nol Menuju Bangkit</h1>
        <div class="page-subtitle">Pelajaran nyata bahwa sebesar apa pun badai utang, selalu ada jalan keluar bagi mereka yang berani melangkah hari ini.</div>
      </div>

      <!-- Controls: Category & Search -->
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:var(--space-4);">
        <!-- Category Filter Tabs -->
        <div class="tabs" style="margin-bottom:0;display:flex;gap:6px;">
          <button class="tab-btn ${this.selectedCategory === 'all' ? 'active' : ''}" onclick="Stories.setCategory('all')" style="padding:6px 14px;font-size:12.5px;">Semua Tokoh (${this.DATA.length})</button>
          <button class="tab-btn ${this.selectedCategory === 'indonesia' ? 'active' : ''}" onclick="Stories.setCategory('indonesia')" style="padding:6px 14px;font-size:12.5px;">🇮🇩 Indonesia</button>
          <button class="tab-btn ${this.selectedCategory === 'global' ? 'active' : ''}" onclick="Stories.setCategory('global')" style="padding:6px 14px;font-size:12.5px;">🌏 Global / Asia</button>
        </div>

        <!-- Search input -->
        <div style="position:relative;width:220px;">
          <input type="text" class="form-input" placeholder="Cari nama tokoh..." value="${H.escHtml(this.searchQuery)}" oninput="Stories.setSearch(this.value)" style="padding:6px 12px;font-size:12.5px;border-radius:20px;">
        </div>
      </div>

      <!-- Scalable Story Shelf Grid -->
      <div class="story-shelf-grid" style="margin-bottom:var(--space-6);">
        ${cardsHtml}
      </div>

      <div id="story-reader-anchor"></div>

      <!-- Active Story Reader -->
      <div class="story-reader-wrap fade-in">
        <!-- Hero Card -->
        <div class="story-hero-card" style="border-top:4px solid ${activeStory.accentColor};">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
            <div>
              <div style="font-size:12px;font-weight:700;color:${activeStory.accentColor};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Laporan Fakta & Narasi Inspiratif</div>
              <h2 style="font-size:1.6rem;font-weight:800;color:var(--color-text-primary);margin:0 0 4px 0;">${H.escHtml(activeStory.title)}</h2>
              <div style="font-size:13.5px;color:var(--color-text-secondary);">Perjalanan Nyata ${H.escHtml(activeStory.name)} — ${H.escHtml(activeStory.subtitle)}</div>
            </div>
            <span class="badge" style="padding:6px 12px;font-size:12px;border-radius:20px;background:${activeStory.bgLight};color:${activeStory.accentColor};border:1px solid ${activeStory.borderLight};font-weight:700;">
              ${H.escHtml(activeStory.badge)}
            </span>
          </div>

          <!-- Quick Stats Grid -->
          <div class="story-stats-grid">
            <div class="story-stat-box">
              <div class="stat-box-label">Beban Utang Awal</div>
              <div class="stat-box-val" style="color:var(--red-600);">${H.escHtml(activeStory.stats.debt)}</div>
            </div>
            <div class="story-stat-box">
              <div class="stat-box-label">Penyebab Kejatuhan</div>
              <div class="stat-box-val">${H.escHtml(activeStory.stats.cause)}</div>
            </div>
            <div class="story-stat-box">
              <div class="stat-box-label">Titik Terendah</div>
              <div class="stat-box-val">${H.escHtml(activeStory.stats.lowest)}</div>
            </div>
            <div class="story-stat-box">
              <div class="stat-box-label">Langkah Rebound</div>
              <div class="stat-box-val">${H.escHtml(activeStory.stats.firstStep)}</div>
            </div>
          </div>

          <!-- Golden Quote -->
          <div class="story-quote-box" style="background:${activeStory.bgLight};border-color:${activeStory.accentColor};">
            <div class="story-quote-text" style="color:var(--slate-900);">
              "${H.escHtml(activeStory.quote)}"
            </div>
            <div class="story-quote-author" style="color:${activeStory.accentColor};">
              — ${H.escHtml(activeStory.quoteAuthor)}
            </div>
          </div>
        </div>

        <!-- Narrative Chapters -->
        <div class="story-narrative-card">
          ${chaptersHtml}

          <!-- Blueprint Takeaways -->
          <div class="takeaways-box" style="border-top:3px solid ${activeStory.accentColor};">
            <div class="takeaways-title" style="color:${activeStory.accentColor === '#0F766E' ? 'var(--teal-400)' : activeStory.accentColor};">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              Pelajaran Finansial Rebound 30 dari ${H.escHtml(activeStory.name)}:
            </div>
            ${takeawaysHtml}
          </div>

          <!-- Next / Prev Pagination -->
          ${paginationHtml}
        </div>
      </div>
    `;
  }
};
