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
      origin: 'Yiwu, Tiongkok',
      ageAtRebound: '61 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'global'],
      categoryLabel: 'Utang Rp 220 M',
      badge: 'Aktif Membuka 3 Cabang',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: '> Rp 220 M (100 Jt Yuan)',
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
            'Tiga tahun ia habiskan dalam kegelapan yang pekat. Tubuhnya digerogoti sel-sel sakit, sementara jiwanya digerogoti rasa malu dan penyesalan. Namun, di dalam dada wanita berusia 61 tahun ini, bara api kecil menolak untuk padam. "Kalau aku mati sekarang," pikirnya di suatu dini hari yang beku, "aku mati sebagai seorang pengecut yang lari dari utang."',
            'Ia teringat resep bakpao tradisional yang diajarkan mendiang neneknya di Hangzhou. Roti kukus bertekstur lembut dengan isian daging gurih dan sayur sawi segar yang aromanya selalu menghangatkan hati siapapun yang menyantapnya. Tanpa modal tersisa, ia mengumpulkan kepingan uang receh terakhir, meminjam sebuah dandang kukusan tua, dan menyewa sudut trotoar sempit berukuran 8 meter persegi.',
            'Tepat pukul tiga pagi, ketika seluruh kota Yiwu masih terlelap dalam mimpi indah, suara decit kayu penggilas adonan mulai terdengar ritmis dari bilik kecil itu. Tepung putih berterbangan, membalut tangan keriputnya yang kini berlumuran adonan lengket.'
          ]
        },
        {
          num: 3,
          title: 'Bakpao 5 Yuan yang Mengubah Takdir',
          paragraphs: [
            'Hari pertama berjualan, cibiran datang lebih cepat daripada pembeli. Beberapa mantan relasi bisnisnya yang lewat melirik sinis. "Lihat, mantan Ratu Koper sekarang mengemis rezeki dari recehan bakpao!" Shao Baoling mendengar semuanya, namun tangannya tak pernah berhenti membungkus isian adonan. Ia hanya tersenyum tipis dan menyeka keringat di pelipisnya.',
            'Satu bakpao ia jual seharga 5 Yuan (sekitar Rp 11.000). Tidak ada yang menyangka, kelezatan rasa autentik dan kelembutan adonan buatannya memikat lidah para supir truk dan pekerja pasar yang lewat di waktu subuh. Dari 50 buah bakpao di hari pertama, melonjak menjadi 300 buah di minggu kedua, dan 1.000 buah di bulan ketiga.',
            'Antrean mulai mengular panjang. Asap putih mengepul tinggi dari tumpukan klakat bambu, membawa aroma gurih yang kini menjadi simbol kebangkitan. Pelanggan tidak hanya membeli bakpao, mereka membeli inspirasi dari seorang wanita tua yang menolak ditundukkan oleh usia dan badai kehidupan.'
          ]
        },
        {
          num: 4,
          title: 'Membangun Kembali Kemandirian',
          paragraphs: [
            'Tahun demi tahun berganti. Kini, Shao Baoling bukan lagi pedagang kaki lima pinggir jalan. Ia telah berhasil mendirikan 3 cabang gerai bakpao modern di pusat kota Yiwu dengan omzet menembus lebih dari 3 juta Yuan per tahun.',
            'Dua belas orang karyawan yang sebagian besar adalah ibu-ibu paruh baya dan mantan pengangguran kini menggantungkan hidup padanya. Ia membayar cicilan utang-utangnya secara konsisten setiap bulan dengan kepala tegak, membuktikan bahwa kehormatan sejati tidak diukur dari seberapa megah kita pernah berdiri, melainkan seberapa tangguh kita sanggup bangkit dari lumpur kejatuhan.'
          ]
        }
      ],
      takeaways: [
        'Singkirkan Gengsi: Kejayaan masa lalu tidak akan memberi makan hari ini. Bertindaklah dari hal paling sederhana.',
        'Mulai dari Modal Terkecil: Uang receh yang dikelola dengan disiplin dan ketekunan mampu meruntuhkan gunung utang.',
        'Bangun Pagi & Bekerja Nyata: Tindakan fisik dan keringat adalah obat penawar paling ampuh dari depresi dan keputusasaan.'
      ]
    },
    {
      id: 'tang',
      featured: false,
      name: 'Tang Jian (唐健)',
      tagline: 'Dari Raja Restoran Rp 100 Miliar Menjadi Penjual Sosis Panggang 25 m²',
      title: 'Bara Api di Kios Sosis Panggang',
      subtitle: 'Mantan Pengusaha Restoran Mewah Qingdao, Tiongkok',
      origin: 'Qingdao, Tiongkok',
      ageAtRebound: '52 Thn',
      categories: ['debt', 'bankrupt', 'business', 'global'],
      categoryLabel: 'Utang Rp 100 M',
      badge: 'Target Bebas Utang 2027',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Rp 102 M (46 Jt Yuan)',
        age: '52 Tahun',
        lowest: 'Restoran Mewah Disita',
        action: 'Kios Sosis 25 m² & Live Streaming',
        result: 'Roadmap Lunas Total 2027'
      },
      timeline: [
        { year: 'Usia 36 Tahun', text: 'Mendirikan jaringan restoran mewah terkemuka di Qingdao dengan ratusan meja dan ruang VIP eksklusif.' },
        { year: 'Ekspansi Agresif', text: 'Mengambil pinjaman bank masif untuk merambah bisnis teknik lanskap berskala besar.' },
        { year: '2015 — Kehancuran', text: 'Arus kas putus, proyek mangkrak. Seluruh jaringan restoran kolaps dengan total utang 46 juta Yuan.' },
        { year: 'Gunung Laoshan', text: 'Menatap jurang dalam keputusasaan, namun teringat tanggung jawab kepada keluarga dan kreditur.' },
        { year: 'Kios 25 m²', text: 'Membuka kios sosis panggang kecil di Hangzhou, berjualan dengan jujur dan menyiarkannya secara transparan.' }
      ],
      quote: 'Keserakahan dan leverage berlebih adalah jurang. Penyesalan tidak mengubah apa-apa, tindakan yang mengubah segalanya.',
      quoteAuthor: 'Tang Jian, di hadapan pemirsa siaran langsung kios sosisnya',
      chapters: [
        {
          num: 1,
          title: 'Runtuhnya Mahkota Raja Restoran',
          paragraphs: [
            'Di usianya yang baru menginjak 36 tahun, Tang Jian telah menjadi legenda hidup di industri kuliner kota pelabuhan Qingdao. Jaringan restorannya yang megah dipenuhi lampu kristal gantung, karpet beludru merah, dan deretan mobil mewah yang memadati halaman parkir setiap malam. Ia adalah simbol kesuksesan yang dipuja para pengusaha muda.',
            'Namun, racun paling mematikan dalam bisnis adalah ilusi bahwa kesuksesan hari ini akan berlangsung selamanya. Terlena oleh pujian dan arus kas yang deras, Tang Jian tergoda untuk melompat ke industri yang tidak ia kuasai: konstruksi teknik dan lanskap berskala masif. Ia meminjam dana bank hingga puluhan juta Yuan dengan jaminan seluruh aset restorannya.',
            'Ketika krisis likuiditas menghantam pada tahun 2015, domino kebangkrutan tumbang seketika. Seluruh jaringan restorannya disita oleh juru sita pengadilan. Tang Jian terlempar dari singgasananya dengan membawa beban utang tak terbayangkan: 46 juta Yuan, atau setara lebih dari Rp 102 miliar.'
          ]
        },
        {
          num: 2,
          title: 'Di Tepi Jurang Gunung Laoshan',
          paragraphs: [
            'Malam itu, di tengah dinginnya kabut Gunung Laoshan, Tang Jian berdiri di bibir tebing yang gelap. Angin menderu kencang, menggoyangkan mantel kusutnya. Di dalam kepalanya, suara dering telepon dari puluhan penagih utang, ancaman sita, dan tatapan hampa istrinya berdengung tanpa henti. Satu langkah ke depan, dan semua penderitaan ini akan sirna dalam hitungan detik.',
            'Ia memejamkan mata. Namun di detik-detik paling sunyi itu, bayangan wajah ibunya yang sudah sepuh dan anaknya yang masih bersekolah melintas tajam di benaknya. "Jika aku melompat," gumamnya dengan air mata menetes, "aku meninggalkan kutukan utang ini kepada darah dagingku. Aku tidak boleh menjadi pengecut."',
            'Tang Jian berbalik melangkah menjauhi bibir jurang. Malam itu, ia berjanji kepada dirinya sendiri: ia akan bekerja sampai tetes darah terakhir untuk melunasi seluruh kewajibannya secara terhormat.'
          ]
        },
        {
          num: 3,
          title: 'Aroma Sosis Panggang dan Kejujuran',
          paragraphs: [
            'Meninggalkan kota Qingdao, Tang Jian memulai lembaran baru di kota Hangzhou. Tanpa modal besar, ia hanya mampu menyewa kios sempit seluas 25 meter persegi di sebuah sudut gang pasar malam. Produk yang ia pilih sangat sederhana: sosis panggang daging sapi dan babi buatan tangan.',
            'Setiap hari, mantan pemilik restoran berbintang ini berdiri di depan panggangan arang selama 14 jam. Panasnya bara memanggang kulit wajahnya hingga memerah legam. Tang Jian tidak menyembunyikan identitasnya. Di dinding kios kecilnya, ia memajang papan tulis transparan yang mencatat perkembangan pembayaran utangnya setiap bulan.',
            'Ia mulai memanfaatkan media sosial untuk menyiarkan kegiatannya memanggang sosis sambil berbagi pelajaran hidup tentang bahaya utang berlebih dan pentingnya itikad baik. Kisahnya viral. Ribuan orang datang ke kiosnya bukan karena rasa kasihan, melainkan karena menghormati integritas seorang pria yang berani bertanggung jawab atas kesalahannya.'
          ]
        },
        {
          num: 4,
          title: 'Roadmap Menuju Kemerdekaan 2027',
          paragraphs: [
            'Berkat ketekunan dan transparansi, pesanan sosis Tang Jian merambah ke seluruh negeri melalui jalur online. Jutaan paket sosis beku dikirim setiap tahunnya.',
            'Hingga awal tahun ini, ia telah berhasil melunasi lebih dari setengah total utangnya. Dengan disiplin arus kas yang ketat, Tang Jian telah menyusun roadmap pelunasan yang akan menuntaskan seluruh sisa utang Rp 102 miliar tersebut pada tahun 2027 mendatang. "Setiap batang sosis yang terjual," tuturnya tersenyum, "adalah satu langkah kecil menuju kebebasan sejati."'
          ]
        }
      ],
      takeaways: [
        'Tanggung Jawab Penuh: Jangan lari dari kreditur. Hadapi mereka dengan transparansi dan rencana pembayaran yang realistis.',
        'Sederhanakan Model Bisnis: Bisnis kecil dengan margin sehat dan kas cepat jauh lebih aman daripada bisnis besar berleverage tinggi.',
        'Transparansi Membangun Kepercayaan: Kejujuran atas kejatuhan masa lalu justru akan menjadi magnet simpati dan dukungan publik.'
      ]
    },
    {
      id: 'hendra',
      featured: false,
      name: 'M. Taufik Hendradinata (Hendra)',
      tagline: 'Dari Raja Laundry & Utang Rp 2,2 Miliar Menjadi Owner Pabrik Skincare Salina Herbal',
      title: 'Menembus Badai Riba Menuju Berkah Herbal',
      subtitle: 'Owner Pabrik Skincare & Herbal CV Salina Herbal Mandiri, Sleman',
      origin: 'Sleman, D.I. Yogyakarta',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 2,2 M',
      badge: 'Lunas 100% & Omset Ratusan Juta',
      theme: 'indigo',
      accentColor: '#4F46E5',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 2,2 Miliar (9 Bank & Rentenir)',
        age: '40-an Tahun',
        lowest: 'Tidur di Teras Masjid & Diteror DC',
        action: 'Jual Makaroni & Riset Sabun Herbal',
        result: 'Pabrik Skincare CPKB & Lunas Total'
      },
      timeline: [
        { year: '2005–2010', text: 'Membangun bisnis laundry kiloan hingga memiliki 12 cabang di Yogyakarta dan Jawa Tengah.' },
        { year: '2011 — Jebakan Utang', text: 'Tergiur ekspansi dengan pinjaman perbankan dan leasing mesin. Total utang menggunung Rp 2,2 miliar.' },
        { year: '2012 — Titik Nadir', text: 'Seluruh aset disita, mobil ditarik leasing, rumah dijual. Hendra tidur di teras masjid demi anak istri di kos sempit.' },
        { year: '2014 — Bangkit dari Dapur', text: 'Mulai jualan makaroni pedas keliling, lalu meracik sabun herbal di dapur kontrakan.' },
        { year: 'Hari Ini — Salina Herbal', text: 'Memiliki pabrik kosmetik berstandar CPKB BPOM, melunasi seluruh utang Rp 2,2 M, dan menampung puluhan karyawan.' }
      ],
      quote: 'Kalau dengan dipenjarakan utangnya lunas, silakan penjarakan saya. Yang ada tinggal tubuh ini yang siap bekerja melunasinya.',
      quoteAuthor: 'M. Taufik Hendradinata, saat menghadapi ancaman debt collector',
      chapters: [
        {
          num: 1,
          title: 'Ilusi Sukses di Balik 12 Cabang Laundry',
          paragraphs: [
            'Nama Hendra sempat berkibar di Yogyakarta sebagai pionir usaha laundry kiloan modern. Dari satu outlet kecil, bisnisnya menggurita hingga memiliki 12 cabang di lokasi-lokasi strategis. Ratusan mesin cuci berputar tanpa henti menghasilkan omset puluhan juta setiap hari.',
            'Namun di balik tampilan mentereng itu, fondasi keuangannya rapuh. Untuk membuka setiap cabang baru, Hendra menggunakan pinjaman bank dengan agunan sertifikat tanah keluarga dan leasing mesin berbunga tinggi. Gali lubang tutup lubang menjadi rutinitas harian.',
            'Ketika persaingan harga kian berdarah dan biaya operasional membengkak pada tahun 2011, arus kasnya lumpuh total. Sembilan bank dan belasan pihak ketiga melayangkan surat peringatan. Total tagihan membengkak hingga Rp 2,2 miliar.'
          ]
        },
        {
          num: 2,
          title: 'Kehilangan Segalanya hingga Teras Masjid',
          paragraphs: [
            'Kehancuran datang bagai gelombang pasang. Rumah tinggal keluarga, tanah warisan, hingga mobil operasional disita dan dilelang dengan harga jatuh. Uang tabungan yang tersisa di dompetnya hanya Rp 700.000.',
            'Dengan uang itu, ia menyewa sebuah kamar kos sempit berukuran 3x3 meter untuk istri dan anak-anaknya. Karena tidak muat dan merasa gagal sebagai kepala keluarga, Hendra sering menghabiskan malam dengan tidur beralaskan sajadah tipis di teras sebuah masjid di pinggiran Sleman.',
            'Di tengah dinginnya lantai marmer masjid, air matanya tumpah dalam sujud sepertiga malam. "Ya Allah, jika Engkau masih izinkan aku hidup, bimbinglah langkahku untuk melunasi hak orang lain tanpa riba lagi," pintanya dalam kepasrahan total.'
          ]
        },
        {
          num: 3,
          title: 'Dari Makaroni Pedas ke Dapur Sabun Herbal',
          paragraphs: [
            'Membuang rasa gengsi mantan pengusaha sukses, Hendra mulai berjualan makaroni pedas bungkus kecil yang ia titipkan di warung-warung kelontong. Keuntungan Rp 500 per bungkus ia kumpulkan untuk membeli beras harian keluarga.',
            'Berbekal latar belakang pendidikannya di bidang kimia, Hendra melihat peluang baru: sabun pembersih berbahan alami herbal yang aman bagi kulit sensitif. Di dapur kontrakan sempitnya, ia bereksperimen mengaduk minyak kelapa, zaitun, dan ekstrak rempah menggunakan wadah plastik bekas.',
            'Sabun buatannya mulai diminati tetangga dan teman komunitas pengajian karena kualitasnya yang lembut di kulit. Hendra menjaga komitmennya: seluruh transaksi dilakukan secara tunai, tanpa pinjaman berbunga sepeser pun.'
          ]
        },
        {
          num: 4,
          title: 'Salina Herbal dan Mahkota Kemerdekaan',
          paragraphs: [
            'Pesanan sabun herbal meledak seiring tren kecantikan alami. Usaha kecil rumahan itu bermetamorfosis menjadi CV Salina Herbal Mandiri, produsen kosmetik dan perawatan kulit bersertifikasi CPKB (Cara Pembuatan Kosmetika yang Baik) dari BPOM RI.',
            'Sedikit demi sedikit, seluruh sisa utang Rp 2,2 miliar di 9 bank berhasil dilunasi 100%. Hari ini, pabrik Salina Herbal di Sleman mempekerjakan puluhan karyawan lokal dan melayani maklon kosmetik dari berbagai penjuru Nusantara.',
            'Hendra membuktikan bahwa badai utang terparah sekalipun dapat ditaklukkan ketika seseorang berani bertaubat dari pola gali lubang, merendahkan hati untuk memulai dari nol, dan menjaga itikad baik pelunasan.'
          ]
        }
      ],
      takeaways: [
        'Hentikan Jebakan Leverage Berlebih: Ekspansi berbasis utang berbunga tanpa cadangan kas darurat adalah bom waktu bisnis.',
        'Kembali ke Keahlian Inti (Core Skill): Temukan keahlian teknis unikmu (formulasi, produksi, atau pemasaran) untuk menciptakan nilai tambah nyata.',
        'Spiritualitas & Tawakal Aktif: Ketenangan batin dan doa di titik nadir mengembalikan akal sehat untuk berpikir jernih mencari solusi.'
      ]
    },
    {
      id: 'suryo',
      featured: false,
      name: 'Suryo Hadi Pranoto',
      tagline: 'Dari TKI Taiwan & Bangkrut Ditinggal Pasangan Menjadi Pemilik Showroom 1.000 Unit Mobil Kacunk Motor',
      title: 'Kemudi Takdir Sang Mantan TKI',
      subtitle: 'Pendiri Kacunk Motor, Showroom Mobil Bekas Terbesar di Jawa Timur',
      origin: 'Tulungagung, Jawa Timur',
      ageAtRebound: '30-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkrut & Ditinggal',
      badge: 'Armada 1.000 Unit Mobil',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Utang Bank Menumpuk (Total Aset Lenyap)',
        age: '30-an Tahun',
        lowest: 'Kehilangan Semua Aset & Ditinggal Pasangan',
        action: 'Merantau TKI Taiwan & Makelar 1 Unit Mobil',
        result: 'Showroom 1.000 Unit Mobil (Kacunk Motor)'
      },
      timeline: [
        { year: '2010 — Kolaps Total', text: 'Usaha pertama bangkrut akibat minimnya pengalaman dan tekanan utang bank. Seluruh aset dan motor hilang.' },
        { year: 'Titik Nadir', text: 'Ditinggalkan pasangan di tengah keterpurukan ekonomi, tidak memiliki tempat berpijak di kampung halaman.' },
        { year: 'Merantau ke Taiwan', text: 'Nekat mendaftar menjadi TKI di Taiwan, bekerja keras mengumpulkan modal awal rupiah demi rupiah.' },
        { year: '2015 — Kacunk Motor', text: 'Pulang ke Tulungagung, membeli 1 unit mobil bekas pertama seharga Rp 33 juta dan menjualnya dengan laba Rp 4 juta.' },
        { year: 'Hari Ini — Rebound', text: 'Memimpin showroom Kacunk Motor dengan stok lebih dari 1.000 unit mobil bekas dan puluhan staf penjualan.' }
      ],
      quote: 'Di negeri orang, aku hanya punya satu pilihan: bekerja keras, mengumpulkan modal, dan membuktikan bahwa kegagalan masa lalu bukan akhir hidupku.',
      quoteAuthor: 'Suryo Hadi Pranoto, mengenang masa-masa menjadi TKI di Taiwan',
      chapters: [
        {
          num: 1,
          title: 'Hancur Total di Tahun 2010',
          paragraphs: [
            'Tahun 2010 adalah tahun kelam yang nyaris mengubur seluruh mimpi Suryo Hadi Pranoto. Usaha rintisannya gulung tikar akibat kesalahan manajemen dan beban utang bank yang terus menumpuk di luar kendali.',
            'Dalam sekejap, semua yang ia miliki lenyap disita dan dijual untuk menutup kerugian. Rumah, tabungan, bahkan sepeda motor satu-satunya hilang tak bersisa. Yang lebih menyakitkan dari sekadar kehilangan harta: di tengah jurang kemiskinan itu, pasangan hidupnya memilih pergi meninggalkannya sendirian.',
            'Suryo terduduk di sudut teras rumah kerabatnya tanpa memiliki uang sepeser pun untuk membeli makan esok hari. Dunia terasa begitu sempit dan menghakimi.'
          ]
        },
        {
          num: 2,
          title: 'Keringat Dingin di Negeri Formosa',
          paragraphs: [
            'Menyadari bahwa meratapi nasib di kampung halaman tidak akan mengubah keadaan, Suryo mengambil keputusan paling nekat dalam hidupnya: mendaftar sebagai Tenaga Kerja Indonesia (TKI) ke Taiwan.',
            'Di negeri asing yang berhawa dingin dan asing bahasanya, Suryo bekerja di pabrik manufaktur dengan jam kerja panjang dan beban fisik yang berat. Seluruh rasa lelah ia telan bulat-bulat. Setiap keping dolar Taiwan yang ia terima, sebagian besar ia kirim untuk mencicil sisa utang di tanah air dan menyisihkan sisanya sebagai tabungan modal masa depan.',
            'Selama bertahun-tahun merantau, tekadnya hanya satu: ia harus pulang ke Tulungagung dengan kepala tegak sebagai seorang pemenang.'
          ]
        },
        {
          num: 3,
          title: 'Mobil Pertama Seharga Rp 33 Juta',
          paragraphs: [
            'Sekembalinya ke tanah air, berbekal modal tabungan TKI yang ia kumpulkan dengan darah dan keringat, Suryo melihat potensi besar di pasar jual beli kendaraan roda empat bekas di kawasan Jawa Timur.',
            'Tahun 2015, ia membeli unit mobil pertamanya: sebuah sedan tua seharga Rp 33 juta. Dengan telaten ia membersihkan mesin, memoles bodi, dan menawarkannya secara jujur kepada pembeli. Mobil itu laku terjual seharga Rp 37 juta. Laba bersih Rp 4 juta pertama itu terasa lebih berharga daripada emas permata.',
            'Ia tidak menghamburkan keuntungan tersebut untuk gaya hidup. Seluruh laba digulung kembali untuk membeli unit kedua, ketiga, dan seterusnya.'
          ]
        },
        {
          num: 4,
          title: 'Imperium Kacunk Motor',
          paragraphs: [
            'Dengan mengusung nama "Kacunk Motor" dan memanfaatkan pemasaran media sosial secara agresif serta transparan mengenai kondisi unit, bisnis jual beli mobil bekas Suryo melesat bak roket.',
            'Dari lapang parkir seadanya berkapasitas 2 mobil, kini showroom Kacunk Motor di Tulungagung menguasai lahan luas dengan perputaran stok lebih dari 1.000 unit mobil bekas berbagai tipe dan merk. Ratusan calon pembeli dari seluruh pelosok Nusantara datang silih berganti setiap hari.',
            'Pria yang dulu dihina dan ditinggalkan saat bangkrut itu kini menjadi salah satu figur pengusaha paling berpengaruh di industri otomotif Jawa Timur, membuktikan bahwa roda kehidupan selalu berputar bagi mereka yang pantang menyerah.'
          ]
        }
      ],
      takeaways: [
        'Keberanian Merantau & Pivot: Jangan ragu keluar dari lingkungan lama untuk mengumpulkan modal dan membangun fondasi baru.',
        'Disiplin Menggulung Laba Kas: Tahan konsumsi pribadi. Putar kembali seluruh keuntungan kecil untuk memperbesar modal kerja.',
        'Jadikan Rasa Sakit Sebagai Bahan Bakar: Luka ditinggalkan dan dihina adalah energi pendorong terkuat untuk bangkit berdiri tegak.'
      ]
    },
    {
      id: 'suprianto',
      featured: false,
      name: 'Suprianto',
      tagline: 'Dari Karyawan Kantoran & Bunga Kartu Kredit Medis Menjadi Juragan Siomay Wondes',
      title: 'Resep Keikhlasan di Gerobak Siomay',
      subtitle: 'Pendiri & Pemilik Dapur Produksi Siomay Wondes',
      origin: 'Indonesia',
      ageAtRebound: 'Mantan Karyawan',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Kartu Kredit',
      badge: 'Dapur Mesin Semi-Modern',
      theme: 'teal',
      accentColor: '#0D9488',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: 'Ratusan Juta (Biaya Medis & Bisnis Gagal)',
        age: 'Mantan Karyawan',
        lowest: 'Bunga Kartu Kredit Menggunung & Ditekan Keluarga',
        action: 'Jual Siomay Pinggir Jalan 50 Butir/hari',
        result: 'Dapur Produksi Mesin Siomay Wondes'
      },
      timeline: [
        { year: 'Awal Karier', text: 'Bekerja sebagai karyawan kantoran mapan dengan penghasilan stabil dan fasilitas kartu kredit.' },
        { year: 'Krisis Medis Rp 40 Jt', text: 'Jatuh sakit parah dan harus dirawat dengan biaya Rp 40 juta. Karena tidak ada dana tunai, ia gesek kartu kredit.' },
        { year: 'Bunga Bergulung', text: 'Bunga kartu kredit bergulung ratusan juta, bisnis sampingan ikut gagal, dan tekanan keluarga datang silih berganti.' },
        { year: 'Titik Balik Doa', text: 'Rutin shalat malam, berpasrah, dan mendapat keajaiban pembayaran piutang lama sebagai modal gerobak.' },
        { year: 'Hari Ini — Siomay Wondes', text: 'Dari 50 butir di pinggir jalan berkembang memiliki dapur produksi mesin semi-modern dan puluhan mitra.' }
      ],
      quote: 'Dalam keterpurukan, akal kita sering buntu. Tapi ketika kita berserah penuh dalam doa malam, pintu-pintu rezeki yang tak disangka akan terbuka.',
      quoteAuthor: 'Suprianto, pendiri Siomay Wondes',
      chapters: [
        {
          num: 1,
          title: 'Petaka di Balik Kartu Plastik',
          paragraphs: [
            'Bagi seorang karyawan kantoran dengan gaji tetap, kartu kredit kerap dianggap sebagai penyelamat praktis. Hal itu pula yang dirasakan Suprianto, sampai sebuah musibah besar datang menguji hidupnya.',
            'Suprianto mendadak jatuh sakit parah dan harus menjalani perawatan intensif di rumah sakit dengan total biaya mencapai Rp 40 juta. Karena tidak memiliki tabungan dana darurat dalam bentuk tunai, ia terpaksa menggesek kartu kreditnya.',
            'Musibah itu menjadi pintu masuk jeratan finansial. Bunga berbunga khas kartu kredit yang tinggi, ditambah kegagalan usaha sampingan yang ia coba rintis, membuat total utangnya membengkak hingga ratusan juta rupiah. Dunia terasa gelap seketika saat penghasilan bulanannya habis hanya untuk membayar bunga minimum.'
          ]
        },
        {
          num: 2,
          title: 'Tekanan Mental dan Sujud Malam',
          paragraphs: [
            'Tekanan datang bertubi-tubi tanpa henti. Tidak hanya dari surat peringatan pihak penagih, namun juga dari keluarga terdekat yang mencemaskan kondisi keuangannya. Suprianto mengalami depresi berat; untuk sekadar membayar cicilan pokok pun ia sudah tidak berdaya.',
            'Di titik nadir tersebut, Suprianto menyadari bahwa mengandalkan logika manusia yang panik hanya akan memperkeruh suasana. Ia mulai memperbaiki hubungannya dengan Sang Pencipta. Di keheningan sepertiga malam, ia rutin bersujud, menangis memohon ampun, dan memohon petunjuk jalan keluar.',
            'Ketenangan batin mulai merayap masuk ke dalam jiwanya. Perlahan keajaiban datang: seseorang yang pernah memiliki utang lama kepadanya mendadak datang mengembalikan sejumlah uang tunai. Dana itulah yang ia jadikan modal awal untuk bertindak.'
          ]
        },
        {
          num: 3,
          title: 'Dari 50 Butir Siomay di Pinggir Jalan',
          paragraphs: [
            'Membuang status mantan karyawan kantoran berdasi, Suprianto mulai meracik resep siomay ikan tenggiri di dapur rumahnya. Dengan gerobak sederhana, ia mangkal di pinggir jalan dari siang hingga malam.',
            'Hari-hari awal sangatlah berat. Produksi pertamanya hanya 50 butir siomay per hari, dan sering kali tersisa. Namun ia memegang teguh satu prinsip: kejujuran rasa dan bahan baku berkualitas tanpa campuran bahan pengawet kimia.',
            'Rasa siomaynya yang lezat dan gurih mulai memikat lidah pelanggan dari mulut ke mulut. Penjualan merangkak naik menjadi ratusan butir per hari, dan gerobaknya tak pernah sepi pembeli.'
          ]
        },
        {
          num: 4,
          title: 'Dapur Produksi Mesin Siomay Wondes',
          paragraphs: [
            'Permintaan yang terus melonjak mendorong Suprianto untuk melangkah ke tahap industrialisasi UMKM. Ia mendirikan brand "Siomay Wondes" dan menginvestasikan keuntungannya untuk membeli mesin pencampur dan pengukus semi-modern.',
            'Hari ini, Siomay Wondes mampu memproduksi ribuan butir siomay setiap hari, memasok ke berbagai katering, restoran, dan mitra agen beku di berbagai kota. Seluruh utang ratusan juta akibat kartu kredit medis telah lunas terbayar tuntas.',
            'Suprianto membuktikan bahwa kejatuhan finansial karena musibah kesehatan bukanlah akhir segalanya, melainkan awal penemuan jalan hidup baru yang jauh lebih berkah dan mandiri.'
          ]
        }
      ],
      takeaways: [
        'Waspadai Bunga Bergulung Kartu Kredit: Gunakan kartu kredit dengan disiplin ketat atau beralihlah ke transaksi tunai.',
        'Pentingnya Membangun Dana Darurat Medis: Lindungi keluarga dengan proteksi kesehatan agar tidak perlu berutang saat sakit.',
        'Kekuatan Doa & Kejujuran Produk: Kualitas produk yang tulus dan integritas moral adalah fondasi bisnis yang paling tahan badai.'
      ]
    },
    {
      id: 'matyasin',
      featured: false,
      name: 'Mat Yasin',
      tagline: 'Dari Penjual Kue Bapel & Utang Kayu Rp 3 Miliar Menjadi Miliarder Besi Tua & Pembangun Jalan 10 KM',
      title: 'Miliarder Besi Tua yang Membangun Jalan Kampung',
      subtitle: 'Pengusaha Besi Tua & Tokoh Inspiratif Sampang, Madura',
      origin: 'Sampang, Madura',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 3 Miliar',
      badge: 'Bangun Jalan Aspal 10 KM',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rp 3 Miliar (Gagal Usaha Kayu)',
        age: '40-an Tahun',
        lowest: 'Terpuruk Bingung Bayar Utang (2021-2022)',
        action: 'Merantau ke Sumba Barat Dagang Besi Tua',
        result: 'Miliarder Besi Tua & Aspal Jalan 10 KM'
      },
      timeline: [
        { year: 'Awal Perjuangan', text: 'Merantau dari Madura, berjualan kue bapel keliling dan berdagang kayu bekas.' },
        { year: '2020 — Bangkrut Total', text: 'Usaha dagang kayu bekasnya gagal total. Utang menumpuk hingga mencapai angka fantastis Rp 3 miliar.' },
        { year: '2021–2022 — Masa Kelam', text: 'Terpuruk dalam kebingungan mencari cara melunasi utang miliaran rupiah di tengah ketiadaan aset.' },
        { year: 'Akhir 2022 — Titik Balik Sumba', text: 'Diajak teman merantau ke Sumba Barat (NTT) untuk berdagang besi tua dan bertemu investor terpercaya.' },
        { year: 'Hari Ini — Rebound & Berkah', text: 'Lunas seluruh utang Rp 3 M, menjadi miliarder besi tua, dan membangun jalan aspal 10 KM untuk desanya.' }
      ],
      quote: 'Kalau suatu hari nanti aku punya uang banyak, aku ingin membangun desaku agar warga dan anak-anak tidak kesulitan jalan lagi.',
      quoteAuthor: 'Mat Yasin, nazar mulia saat berjuang melunasi utang Rp 3 miliar',
      chapters: [
        {
          num: 1,
          title: 'Dari Kue Bapel Menuju Jeratan Utang Rp 3 Miliar',
          paragraphs: [
            'Berasal dari Desa Madulang, Sampang, Madura, Mat Yasin adalah potret pejuang hidup sejati yang terbiasa hidup prihatin. Di masa mudanya, ia merantau menjajakan kue bapel (kue tradisional khas Madura) dengan berjalan kaki berkilo-kilo meter.',
            'Ingin mengubah nasib keluarganya, ia kemudian beralih menjadi pedagang kayu bekas. Namun minimnya proteksi kontrak dan fluktuasi pasar menghantam usahanya secara telak pada tahun 2020. Bisnis kayunya kolaps total, meninggalkan tumpukan utang yang menggunung hingga mencapai Rp 3 miliar.',
            'Tahun 2021 hingga 2022 adalah periode paling kelam dalam hidupnya. Dengan utang sebesar itu, ia benar-benar buntu dan bingung bagaimana caranya melunasi kewajiban tersebut tanpa ada aset berharga yang tersisa.'
          ]
        },
        {
          num: 2,
          title: 'Panggilan Takdir di Tanah Sumba',
          paragraphs: [
            'Di tengah kebuntuan itu, pada akhir tahun 2022, seorang sahabat lamanya mengajak Mat Yasin untuk melihat peluang perdagangan limbah logam dan besi tua di Sumba Barat, Nusa Tenggara Timur (NTT).',
            'Tanpa ragu dan berbekal doa restu sang ibunda, Mat Yasin memberanikan diri terbang ke tanah Sumba. Di sana, karakter Mat Yasin yang jujur, ulet, dan pekerja keras menarik perhatian seorang pemilik modal besar lokal yang bersedia memberinya kepercayaan konsinyasi pengumpulan besi tua skala besar.',
            'Mat Yasin terjun langsung ke lapangan, menyusuri pelosok daerah, mengidentifikasi besi-besi tua dari bekas proyek dan kapal karam, lalu mengapalkannya ke pabrik peleburan baja di Surabaya.'
          ]
        },
        {
          num: 3,
          title: 'Mengikis Utang Sedikit demi Sedikit',
          paragraphs: [
            'Perputaran bisnis besi tua di wilayah timur Indonesia bergerak sangat cepat dan memberikan margin yang sehat. Setiap kali menerima pembayaran dari pabrik peleburan, Mat Yasin tidak pernah lupa pada janjinya.',
            'Ia secara konsisten mentransfer dana untuk mencicil utang Rp 3 miliarnya satu per satu kepada para kreditur di Jawa Timur. Sikapnya yang tidak pernah lari dari kewajiban membuat orang-orang semakin menaruh rasa hormat dan kepercayaan penuh padanya.',
            'Dalam kurun waktu kurang dari dua tahun, seluruh utang Rp 3 miliar itu berhasil ia lunasi hingga lunas tuntas tanpa ada satu rupiah pun yang tersisa.'
          ]
        },
        {
          num: 4,
          title: 'Membangun Jalan Aspal 10 KM untuk Desa Kelahiran',
          paragraphs: [
            'Kini, Mat Yasin telah menjelma menjadi seorang pengusaha miliarder besi tua yang disegani. Namun kekayaan tidak membuatnya sombong atau lupa daratan.',
            'Teringat pada nazar lamanya saat terpuruk, Mat Yasin secara pribadi mendanai proyek pembangunan jalan aspal hotmix sepanjang 10 kilometer yang menghubungkan desanya di Sampang, Madura. Jalan rusak yang puluhan tahun menyulitkan mobilitas warga dan anak-anak sekolah kini mulus terbentang berkat kebaikan hatinya.',
            'Kisah Mat Yasin membuktikan bahwa ketika niat seseorang tulus untuk melunasi utang dan bermanfaat bagi orang banyak, pintu-pintu kemudahan akan dibukakan dari arah yang tak terduga.'
          ]
        }
      ],
      takeaways: [
        'Jangan Takut Mencoba Bidang Baru: Ketika satu pintu industri tertutup (kayu), peluang emas di industri lain (besi tua) bisa menjadi jalan keluar.',
        'Kejujuran Membuka Pintu Modal: Reputasi jujur dan kerja keras adalah modal tak ternilai yang mengundang kepercayaan mitra besar.',
        'Nazar Kebaikan & Berbagi: Niatkan rezekimu untuk membantu sesama. Berkah doa orang banyak akan melipatgandakan kelancaran usahamu.'
      ]
    },
    {
      id: 'genta',
      featured: false,
      name: 'Genta Gantara',
      tagline: 'Dari Utang Investasi Bodong Rp 500 Juta Usia 23 Tahun Menjadi Bos Developer & Konstruksi Properti Cimahi',
      title: 'Membangun Pondasi dari Titik Nol',
      subtitle: 'Owner & Founder Bisnis Properti & Jasa Konstruksi, Cimahi',
      origin: 'Cimahi, Jawa Barat',
      ageAtRebound: 'Usia 23 Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Investasi Bodong',
      badge: 'Omset Miliaran & Lunas 100%',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: 'Rp 500 Juta (Investasi Bodong)',
        age: 'Usia 23 Tahun',
        lowest: 'Tinggal di Kontrakan Toilet Luar & Nol Aset',
        action: 'Ketenangan Batin, Desain & Modal DP Klien',
        result: 'Developer Properti & Bisnis Konstruksi Miliaran'
      },
      timeline: [
        { year: 'Latar Belakang', text: 'Lahir dari keluarga berkecukupan di kawasan elit. Namun kebangkrutan keluarga memaksanya pindah ke kontrakan sempit.' },
        { year: '2013 — Awal Kerja Keras', text: 'Saat kuliah, berjualan keripik & brownies. Masuk freelance marketing properti dan mendapat komisi Rp 7 juta pertama.' },
        { year: 'Usia 23 Thn — Terjerat Rp 500 Jt', text: 'Terjebak investasi bodong skema titip dana. Menanggung utang Rp 500 juta dan dikejar-kejar penagih setiap hari.' },
        { year: 'Titik Balik Ketenangan', text: 'Menenangkan batin lewat doa, lalu memulai proyek bangun rumah bermodal keahlian desain & uang muka (DP) klien.' },
        { year: 'Usia 32 Thn — Rebound Total', text: 'Lunas seluruh utang Rp 500 Jt, memimpin developer properti & jasa arsitektur beromset miliaran rupiah.' }
      ],
      quote: 'Dalam membangun usaha, mental baja, ilmu, strategi, dan doa harus berjalan beriringan. Jatuh bukanlah akhir, yang terpenting adalah bagaimana kita bangkit.',
      quoteAuthor: 'Genta Gantara, di hadapan komunitas pengusaha muda',
      chapters: [
        {
          num: 1,
          title: 'Jatuh dari Singgasana',
          paragraphs: [
            'Lahir dan tumbuh dalam keluarga berkecukupan di kawasan elit Cimahi, Genta Gantara kecil tidak pernah membayangkan rasa getirnya kemiskinan. Namun badai ekonomi keluarga meruntuhkan segalanya dalam sekejap saat usianya menginjak masa remaja.',
            'Rumah megah mereka terpaksa dijual untuk melunasi kewajiban orang tua. Genta bersama keluarganya harus pindah ke sebuah rumah kontrakan sempit dan pengap dengan fasilitas toilet di luar rumah. Perubahan 180 derajat itu sempat mengguncang mentalnya.',
            'Namun alih-alih meratapi nasib, saat masuk bangku kuliah di tahun 2013, Genta mulai membuang gengsi. Ia berkeliling kampus menjajakan keripik singkong dan kue brownies demi membayar uang semester dan makan hariannya sendiri.'
          ]
        },
        {
          num: 2,
          title: 'Terjun ke Dunia Properti',
          paragraphs: [
            'Dunia properti mulai ia kenal saat ia mendaftar sebagai marketing freelance di sebuah kantor developer perumahan lokal. Dengan komunikasi yang ramah dan kegigihan menyebar brosur di lampu merah, Genta berhasil menutup transaksi penjualan rumah pertamanya.',
            'Komisi sebesar Rp 7 juta pertama yang ia terima bagaikan embun di padang pasir. Uang itu cukup untuk melunasi biaya kuliahnya selama dua semester sekaligus membuktikan bahwa industri properti menyimpan potensi arus kas yang luar biasa.',
            'Rasa percaya dirinya tumbuh pesat. Namun di usianya yang masih sangat muda, minimnya literasi risiko investasi membawanya pada malapetaka baru.'
          ]
        },
        {
          num: 3,
          title: 'Rp 500 Juta yang Menghantui di Usia 23 Tahun',
          paragraphs: [
            'Tergoda oleh iming-iming imbal hasil kilat, Genta mempercayakan uang tabungan dan menghimpun dana rekanan untuk dimasukkan ke dalam skema investasi titip dana. Belakangan terbukti, investasi tersebut adalah skema bodong yang pengelolanya kabur membawa lari uang para investor.',
            'Di usianya yang baru menginjak 23 tahun, Genta mendadak harus memikul beban utang yang menumpuk hingga Rp 500 juta. Rumah kontrakannya didatangi orang-orang yang menagih uang mereka setiap hari dengan nada ancaman.',
            'Tekanan mental itu nyaris membuatnya putus asa. "Rasanya seperti membawa beban gunung di pundak yang bisa meremukkan tubuhku setiap detik," kenangnya.'
          ]
        },
        {
          num: 4,
          title: 'Titik Balik di Tengah Kegelapan',
          paragraphs: [
            'Menyadari kepanikan tidak akan melunasi utang, Genta memutuskan untuk mencari ketenangan spiritual terlebih dahulu. Ia mendalami program pelatihan ketenangan batin, rutin mendirikan shalat tahajud, dan berpasrah penuh kepada Tuhan.',
            'Ketenangan hati itu mengembalikan akal sehatnya. Dengan pikiran jernih, ia mendatangi para kreditur secara jujur dan mengajukan permohonan waktu. Genta kemudian memanfaatkan keahliannya merancang desain arsitektur rumah untuk menawarkan jasa bangun rumah sistem borongan.',
            'Bermodalkan gambar kerja 3D yang rapi dan kepercayaan calon pemilik rumah, ia menerima uang muka (DP) pembangunan. Arus kas DP tersebut ia kelola dengan disiplin besi untuk membeli material dan membayar tukang secara presisi.'
          ]
        },
        {
          num: 5,
          title: 'Bos Properti di Usia 32 Tahun',
          paragraphs: [
            'Keberhasilan proyek bangun rumah pertamanya membuka pintu pesanan proyek-proyek berikutnya. Reputasinya yang amanah dan transparan membuat klien-klien besar mempercayakan proyek perumahan dan konstruksi komersial kepadanya.',
            'Sedikit demi sedikit, utang Rp 500 juta itu terkikis hingga akhirnya lunas 100% tanpa sisa. Hari ini, di usianya yang menginjak 32 tahun, Genta Gantara memimpin perusahaan developer properti dan jasa konstruksi terkemuka di Cimahi dengan omset miliaran rupiah.',
            'Genta membuktikan bahwa kesalahan finansial di usia muda bukanlah vonis mati, melainkan batu asahan terbaik untuk membentuk karakter seorang pemimpin tangguh.'
          ]
        }
      ],
      takeaways: [
        'Hindari Skema Investasi Titip Dana & Untung Kilat: Jauhi iming-iming investasi instan tanpa legalitas dan underlying riil.',
        'Ketenangan Batin Mengembalikan Akal Sehat: Kepanikan tidak menyelesaikan utang; tenangkan diri agar pikiran jernih melihat jalan keluar.',
        'Bisnis Jasa dengan Modal Kepercayaan & DP: Memulai usaha dari nol bisa dilakukan dengan menjual keahlian (desain arsitektur) dan mengunci arus kas aman lewat sistem DP.'
      ]
    },
    {
      id: 'bonzor',
      featured: false,
      name: 'Bonzor',
      tagline: 'Dari Utang Rp 15 Miliar & Nyaris Tewas Minum Racun Menjadi Makelar Besi, Lunas 40 Hari & Pengasuh 37 Anak Yatim',
      title: 'Dari Racun dan Utang Rp 15 Miliar, Kini Pengasuh 37 Anak Yatim',
      subtitle: 'Pendiri Komunitas Rezeki Jalur Langit, Kalimantan Barat',
      origin: 'Kalimantan Barat',
      ageAtRebound: 'Lahir 1984',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 15 M & Jalur Langit',
      badge: 'Lunas 40 Hari & 37 Anak Yatim',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rp 15 Miliar (Gagal Usaha 2020)',
        age: 'Pria Kelahiran 1984',
        lowest: 'Minum Racun Serangga & Kritis di Rumah Sakit',
        action: 'Makelar Besi Modal Rp 50 Jt & Sedekah Rp 2,5 M',
        result: 'Lunas 40 Hari, Komunitas Jalur Langit & 37 Anak Yatim'
      },
      timeline: [
        { year: '2020 — Keruntuhan Rp 15 Miliar', text: 'Bisnis hancur menyisakan utang Rp 15 miliar, dijauhi keluarga, dan difitnah rekan bisnis.' },
        { year: 'Titik Terendah Menenggak Racun', text: 'Putus asa hebat hingga mencoba mengakhiri hidup dengan racun serangga; nyawanya terselamatkan di rumah sakit.' },
        { year: 'Taubat & Perintah Sedekah', text: 'Mengubah arah hidup total, bertaubat nasuha, dan berpegang teguh pada amalan sedekah di masa sempit.' },
        { year: 'Makelar Besi Modal Rp 50 Juta', text: 'Kenalan tak terduga memberi modal Rp 50 juta; ia bertindak sebagai perantara transaksi besi dan meraih komisi Rp 3,5 miliar.' },
        { year: 'Sedekah Rp 2,5 M & Lunas 40 Hari', text: 'Menyedekahkan Rp 2,5 miliar dari komisi pertamanya; gelombang rezeki terbuka hingga utang Rp 15 miliar lunas dalam 40 hari.' },
        { year: 'Hari Ini — Pengasuh 37 Anak Yatim', text: 'Memimpin gerakan spiritual Rezeki Jalur Langit dan menafkahi puluhan anak yatim secara penuh.' }
      ],
      quote: 'Di balik gelapnya keputusasaan, selalu ada cahaya pertolongan Tuhan jika kita memilih berdoa, berikhtiar tanpa gengsi, dan bersedekah secara ekstrem. Jangan pelit berbagi di masa sempit.',
      quoteAuthor: 'Bonzor, pendiri komunitas Rezeki Jalur Langit',
      chapters: [
        {
          num: 1,
          title: 'Pria yang Terpuruk di Tahun 2020',
          paragraphs: [
            'Tahun 2020 menjadi periode paling kelam dalam hidup Bonzor, pria kelahiran Kalimantan Barat tahun 1984. Usaha yang telah ia bangun dengan cucuran keringat bertahun-tahun mengalami kegagalan total.',
            'Keruntuhan itu tidak hanya menyisakan rasa malu, melainkan jeratan utang bernilai fantastis: Rp 15 miliar. Tekanan datang bertubi-tubi tanpa jeda; para penagih utang mengejar, kerabat menjauh, dan ia menjadi sasaran fitnah dari orang-orang yang dulu ia bantu.',
            '"Bayangkan, di tengah kondisi terlilit utang belasan miliar dan dikucilkan semua orang, saya merasa dunia sudah runtuh sepenuhnya. Tidak ada jalan keluar yang terlihat," kenang Bonzor dengan mata berkaca-kaca.'
          ]
        },
        {
          num: 2,
          title: 'Kritis dan Kesempatan Kedua',
          paragraphs: [
            'Di puncak keputusasaan yang menghimpit batinnya pada suatu malam yang sunyi, Bonzor mengambil keputusan paling fatal: ia menenggak racun serangga untuk mengakhiri hidupnya.',
            'Ia terkapar tak sadarkan diri selama berjam-jam dengan kondisi fisik yang kritis. Namun takdir Tuhan berkehendak lain; paramedis rumah sakit berhasil memompa lambungnya dan menyelamatkan nyawanya tepat di ambang batas kematian.',
            'Ketika membuka mata di ruang perawatan, kesadaran mendalam merasuk ke dalam jiwanya: ini adalah kesempatan hidup kedua. Tuhan masih menginginkannya untuk hidup dan membayar lunas segala tanggung jawabnya di dunia.'
          ]
        },
        {
          num: 3,
          title: 'Titik Balik Spiritual dan Perintah Bersedekah',
          paragraphs: [
            'Dari ranjang rumah sakit, Bonzor melakukan transformasi batin 180 derajat. Ia menunaikan salat taubat nasuha, menumpahkan air mata penyesalan, dan berserah diri secara mutlak kepada Sang Pencipta.',
            'Dalam perenungan spiritualnya, sebuah keyakinan kuat tertanam dalam dadanya untuk mengamalkan sedekah secara ekstrem sebagai pembuka pintu pertolongan ilahi.',
            'Walau tidak memiliki uang tunai, Bonzor mulai berbagi apa saja yang dimilikinya—tenaga, waktu, senyuman, hingga makanan terakhir—kepada orang-orang yang lebih membutuhkan di sekitarnya.'
          ]
        },
        {
          num: 4,
          title: 'Keajaiban Modal Rp 50 Juta dan Makelar Besi',
          paragraphs: [
            'Keajaiban takdir mulai bergerak dari arah yang sama sekali tak terduga. Seorang kenalan lama yang ia duga akan datang untuk menagih utang, justru datang menghampirinya dengan membawa uang tunai Rp 50 juta.',
            '"Pakailah modal ini untuk memulai kembali usahamu. Saya percaya kamu orang baik yang sedang diuji," ujar sang kenalan.',
            'Dengan modal kepercayaan tersebut, Bonzor bertindak sebagai perantara dagang (makelar) besi bekas dan material konstruksi proyek skala besar. Keberanian negosiasi dan kejujurannya membuahkan kesepakatan raksasa: dari transaksi pertamanya sebagai perantara besi, ia mengantongi komisi bersih sebesar Rp 3,5 miliar!'
          ]
        },
        {
          num: 5,
          title: 'Sedekah Rp 2,5 Miliar di Tengah Krisis',
          paragraphs: [
            'Bagi kebanyakan orang yang sedang terlilit utang Rp 15 miliar, uang Rp 3,5 miliar pasti akan langsung dipakai untuk mencicil utang bank. Namun Bonzor memilih jalur yang berbeda.',
            'Mengingat janji sucinya kepada Tuhan, Bonzor segera mengeluarkan Rp 2,5 miliar dari komisi tersebut untuk disedekahkan kepada fakir miskin, anak yatim, dan pembangunan sarana ibadah.',
            '"Kalau mau mendapatkan pertolongan besar dari Allah, jangan pelit bersedekah. Jangan hanya 2,5%, bila perlu keluarkan 30% hingga 70% dari rezeki yang kita dapatkan," tegasnya.'
          ]
        },
        {
          num: 6,
          title: '40 Hari yang Mengubah Takdir Finansial',
          paragraphs: [
            'Keputusan sedekah ekstrem itu menjadi pemantik gelombang keberlimpahan yang di luar nalar logika manusia. Rantai proyek-proyek perantara komoditas lainnya mengalir deras bertubi-tubi ke tangan Bonzor.',
            'Setiap keuntungan yang masuk dikelola dengan amanah untuk melunasi kreditur. Dan sebuah mukjizat nyata terjadi: dalam kurun waktu hanya 40 hari sejak ia bangkit, seluruh utang Rp 15 miliar lunas 100% tanpa sisa!',
            'Hari di mana surat pelunasan terakhir ditandatangani, Bonzor bersujud syukur di atas lantai dengan linangan air mata haru.'
          ]
        },
        {
          num: 7,
          title: 'Menghidupi 37 Anak Yatim',
          paragraphs: [
            'Hari ini, Bonzor mendedikasikan sisa hidupnya sebagai motivator spiritual dan pendiri komunitas "Rezeki Jalur Langit" untuk membantu ribuan orang keluar dari keputusasaan utang.',
            'Sebagai wujud rasa syukur atas kehidupan keduanya, Bonzor kini mengasuh dan menanggung seluruh biaya hidup serta pendidikan dari 37 anak yatim piatu.',
            'Kisah hidupnya menjadi monumen abadi bahwa tidak peduli seberapa pekat kegelapan malam dan racun keputusasaan yang pernah kita teguk, fajar kemenangan selalu siap menyambut mereka yang mau bersujud, bertindak, dan memuliakan sesama.'
          ]
        }
      ],
      takeaways: [
        'Harapan Selalu Ada di Balik Titik Nadir: Jangan pernah mengakhiri hidup; kesempatan kedua selalu tersedia bagi jiwa yang tulus bertaubat dan berani bertanggung jawab.',
        'Kekuatan Sedekah Ekstrem (*Jalur Langit*): Mengeluarkan porsi sedekah dalam jumlah besar di masa krisis membalikkan energi ketakutan menjadi keberkahan berlipat ganda.',
        'Bisnis Perantara (*Brokerage*) Minim Aset Tetap: Menjadi makelar transaksi komoditas bernilai tinggi mampu menghasilkan arus kas miliaran rupiah tanpa beban investasi pabrik.',
        'Mendedikasikan Hidup Memuliakan Anak Yatim: Kekayaan finansial sejati adalah ketika hidup kita bertransformasi menjadi payung pelindung bagi anak-anak yatim dan dhuafa.'
      ]
    },
    {
      id: 'kangarif',
      featured: false,
      name: 'Arif Sanyoto (Kang Arif)',
      tagline: 'Dari Bangkrut Rp 1,5 Miliar & Modal Terakhir Rp 108.000 Menjadi Juragan Ribuan Lumpia & Penulis 27 Hari Bebas Utang',
      title: 'Dari Bangkrut Rp 1,5 Miliar, Kini Jual Ribuan Lumpia Sehari',
      subtitle: 'Pendiri Lumpia Sortalok & Penulis Buku 27 Hari Bebas Utang, Karanganyar',
      origin: 'Karanganyar, Jawa Tengah',
      ageAtRebound: 'Pengusaha Karanganyar',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkrut Rp 1,5 M & Modal Rp 108 Rb',
      badge: 'Lumpia Sortalok & 5.000 Pcs/Hari',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Rp 1,5 Miliar (Kerugian Usaha Masa Lalu)',
        age: 'Pengusaha Karanganyar',
        lowest: 'Bangkrut Nol & Sisa Uang Rp 108.000',
        action: 'Modal Rp 108.000, Lumpia Sortalok & Viral TikTok',
        result: '3.000–5.000 Pcs/Hari, Lunas & Buku 27 Hari Bebas Utang'
      },
      timeline: [
        { year: 'Keruntuhan Rp 1,5 Miliar', text: 'Usaha sebelumnya hancur total, menyisakan tumpukan kewajiban utang Rp 1,5 miliar di Karanganyar.' },
        { year: 'Titik Terendah Rp 108.000', text: 'Berada di titik nol tanpa modal besar; hanya memegang uang tunai Rp 108.000 di dalam dompet.' },
        { year: 'Mulai Lumpia Sortalok', text: 'Membelanjakan modal Rp 108.000 untuk bahan baku rebung/kulit lumpia dan promosi digital mandiri.' },
        { year: 'Viral TikTok Storytelling', text: 'Membuat konten video edukasi dan pembuatan lumpia yang menggugah selera di TikTok, pesanan membeludak.' },
        { year: 'Skala 3.000–5.000 Pcs/Hari', text: 'Membangun SOP produksi terstandarisasi dan sistem komunitas reseller, melunasi utang miliaran rupiah.' },
        { year: 'Hari Ini — Buku Bebas Utang', text: 'Membagikan cetak biru kebangkitan finansial melalui buku "27 Hari Bebas Utang" dan membina ribuan UMKM.' }
      ],
      quote: 'Modal awal kami hanya Rp 108.000. Mulailah dari apa yang ada di tangan dan apa yang kita kuasai hari ini, bukan meratapi apa yang tidak ada. Selama kita terus bergerak dan membangun sistem, jalan keluar selalu terbuka.',
      quoteAuthor: 'Arif Sanyoto (Kang Arif), pemilik Lumpia Sortalok',
      chapters: [
        {
          num: 1,
          title: 'Jatuhnya Seorang Pebisnis',
          paragraphs: [
            'Di sebuah sudut ruangan di Karanganyar, Jawa Tengah, Arif Sanyoto—yang akrab disapa Kang Arif—duduk termangu memandangi tumpukan berkas tagihan yang menggunung di atas meja kerjanya.',
            'Bisnis yang telah ia rintis dan perjuangkan dengan segenap tenaga hancur lebur tanpa ampun. Total kerugian finansial dan jeratan liabilitas mencapai angka fantastis: sekitar Rp 1,5 miliar.',
            'Kepanikan, rasa malu, dan tekanan mental dari berbagai pihak sempat membuatnya merasa berada di lorong gelap tanpa ujung. "Bagaimana mungkin saya bisa melunasi utang sebesar ini dari kondisi bangkrut tanpa sepeser pun harta tersisa?" tanyanya dalam hati.'
          ]
        },
        {
          num: 2,
          title: 'Rp 108.000 dan Sebuah Gerakan',
          paragraphs: [
            'Di titik nadir tersebut, Kang Arif menyadari bahwa meratapi kerugian miliaran rupiah tidak akan mendatangkan satu rupiah pun ke dalam dompetnya. Ia menolak untuk menyerah pada rasa putus asa.',
            'Ia merogoh sakunya dan menemukan sisa uang terakhir: hanya Rp 108.000. Uang tersebut mungkin tampak tak berarti di mata banyak orang, namun bagi Kang Arif, itu adalah amunisi terakhir untuk menyalakan kembali api perjuangannya.',
            'Dengan modal Rp 108.000, ia membeli bahan baku rebung segar, bumbu dapur, dan lembaran kulit lumpia. Ia memutuskan untuk merintis produk kuliner tradisional yang ia beri nama "Lumpia Sortalok".'
          ]
        },
        {
          num: 3,
          title: 'Gelombang Viral TikTok dan Ribuan Pelanggan',
          paragraphs: [
            'Kang Arif menyadari bahwa modal kecil menuntut kreativitas pemasaran yang luar biasa. Alih-alih menyewa ruko mahal, ia memaksimalkan gawai pribadinya untuk membuat konten video di platform media sosial TikTok.',
            'Ia menyajikan proses pembuatan lumpia secara transparan, bercerita tentang perjuangannya dari titik nol, dan menunjukkan kebersihan serta kelezatan isian lumpia renyah buatannya.',
            'Ketulusan konten dan cita rasa gurih autentik Lumpia Sortalok meledak viral di jagat maya. Penonton terkesima, dan pesanan mulai berdatangan dari berbagai penjuru Solo Raya hingga luar kota dalam jumlah yang mencengangkan.'
          ]
        },
        {
          num: 4,
          title: 'Membangun Sistem Kerja dan Komunitas',
          paragraphs: [
            'Lonjakan pesanan tidak membuat Kang Arif terlena. Ia segera merancang Standar Operasional Prosedur (SOP) produksi yang rapi, memastikan konsistensi rasa, dan membangun sistem kemitraan komunitas reseller yang solid.',
            'Penjualan Lumpia Sortalok meroket stabil ke angka 3.000 hingga 5.000 pcs lumpia per hari. Dapur produksinya memberdayakan warga sekitar dan menyerap tenaga kerja lokal.',
            'Dengan kedisiplinan arus kas yang ketat, keuntungan harian dialokasikan secara tertib untuk mencicil seluruh kewajiban masa lalu. Satu per satu surat utang diselesaikan hingga kerugian Rp 1,5 miliar berhasil dilunasi 100% tuntas.'
          ]
        },
        {
          num: 5,
          title: '27 Hari Bebas Utang',
          paragraphs: [
            'Keberhasilan melunasi utang miliaran rupiah dari modal Rp 108.000 menggerakkan hati Kang Arif untuk menolong masyarakat yang sedang mengalami keterpurukan serupa.',
            'Ia membukukan seluruh strategi restrukturisasi mental, negosiasi kreditur, dan percepatan arus kasnya ke dalam sebuah buku panduan praktis bertajuk "27 Hari Bebas Utang". Buku ini menjadi pegangan wajib bagi ribuan pelaku UMKM di seluruh Indonesia untuk bangkit dari jerat utang.',
            '"Jika saya yang pernah terpuruk Rp 1,5 miliar bisa bangkit hanya dengan modal Rp 108.000, maka tidak ada alasan bagi siapapun untuk berputus asa," tegas Kang Arif dengan penuh optimisme.'
          ]
        }
      ],
      takeaways: [
        'Mulai dari Apa yang Dimiliki (Modal Rp 108.000): Jangan menunggu modal miliaran untuk bergerak; gunakan uang sekecil apa pun untuk menciptakan transaksi pertama.',
        'Pemasaran Digital Organik (TikTok Storytelling): Bagikan kisah perjuangan dan kualitas produk secara autentik di media sosial untuk membangun basis pelanggan loyal.',
        'Standardisasi Sistem & Komunitas Reseller: Bangun SOP kerja yang kokoh agar bisnis mampu menangani lonjakan produksi hingga ribuan pcs per hari.',
        'Edukasi & Memberi Manfaat (Buku Bebas Utang): Menjadikan pengalaman kepahitan masa lalu sebagai sarana menuntun orang lain keluar dari krisis finansial.'
      ]
    },
    {
      id: 'sonnenberg',
      featured: false,
      name: 'Steve Sonnenberg',
      tagline: 'Dari Bangkrut Gugatan Hukum FTC & 4 Balita Menjadi Pendiri Unicorn Awardco Bernilai $1 Miliar (Rp 16 Triliun)',
      title: 'Dari Kartu Kredit $5.000 Menuju Unicorn $1 Miliar',
      subtitle: 'Pendiri & CEO Awardco, Utah, Amerika Serikat',
      origin: 'Utah, Amerika Serikat',
      ageAtRebound: 'Ayah 4 Balita',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'global'],
      categoryLabel: 'Bangkrut FTC & Unicorn $1B',
      badge: 'Unicorn Awardco & Valuasi $1 Miliar',
      theme: 'blue',
      accentColor: '#2563EB',
      bgLight: '#EFF6FF',
      borderLight: '#BFDBFE',
      stats: {
        debt: 'Jutaan Dolar (Gugatan Hukum FTC 2011)',
        age: 'Ayah 4 Anak Balita',
        lowest: 'Aset Dibekukan & Pailit Bersama 4 Balita',
        action: 'Gesek $5.000 Kartu Kredit, Beli Domain & Kemitraan Amazon',
        result: '6 Juta Pengguna, Klien AT&T & Valuasi $1 Miliar (Rp 16 T)'
      },
      timeline: [
        { year: '2000-an — Puncak WholesaleMatch', text: 'Membangun platform e-commerce dengan 200 karyawan dan omzet jutaan dolar per tahun di Utah.' },
        { year: '2011 — Gugatan FTC & Pailit', text: 'Tersangkut kasus regulasi FTC, seluruh aset dibekukan seketika, menanggung utang jutaan dolar bersama 4 anak balita.' },
        { year: 'Titik Balik Jalur Setapak', text: 'Mendapat pencerahan saat mendaki: "Jika kau terus melawan masa lalu, kau akan kehilangan keluargamu. Mulai saja dari nol."' },
        { year: 'Modal $5.000 Kartu Kredit', text: 'Menggesek kartu kredit $5.000 untuk membeli domain Awardco.com, bekerja sambilan dari jam 7 pagi hingga tengah malam.' },
        { year: '2015 — Kemitraan Amazon', text: 'Mempresentasikan sistem penghargaan di hadapan tim eksekutif Amazon di Seattle dan memenangkan kontrak kemitraan resmi.' },
        { year: 'Hari Ini — Unicorn $1 Miliar', text: 'Awardco melayani 6 juta pengguna korporat global (AT&T, Hertz) dengan valuasi pasar mencapai $1 Miliar (Rp 16 Triliun).' }
      ],
      quote: 'Kemampuan untuk sekadar memulai dari awal adalah kekuatan terbesar manusia. Jangan buang energimu melawan masa lalu; mulailah kembali dengan apa pun yang tersisa di tanganmu.',
      quoteAuthor: 'Steve Sonnenberg, pendiri & CEO Awardco',
      chapters: [
        {
          num: 1,
          title: 'Kerajaan yang Runtuh dalam Semalam',
          paragraphs: [
            'Awal dekade 2000-an di Utah, Amerika Serikat. Steve Sonnenberg adalah potret wirausahawan muda yang menikmati puncak kejayaan. Perusahaan rintisannya, WholesaleMatch, berkembang menjadi raksasa e-commerce dengan 200 karyawan dan perputaran omzet jutaan dolar per tahun.',
            'Namun dunia bisnis modern menyimpan risiko tak terduga. Perusahaannya mendadak terseret dalam investigasi dan gugatan hukum ketat Federal Trade Commission (FTC) terkait aktivitas transaksi klien pihak ketiga. Meskipun Steve bukanlah pelaku kejahatan, putusan regulasi tersebut menghancurkan perusahaannya seketika.',
            'Seluruh rekening operasional dibekukan oleh otoritas. Dalam hitungan minggu, perusahaan bangkrut total dan meninggalkan tumpukan utang bernilai jutaan dolar. Di rumahnya yang sunyi, Steve menatap cemas keempat anaknya yang semuanya masih berusia di bawah lima tahun.'
          ]
        },
        {
          num: 2,
          title: 'Saat Berjalan di Jalur Setapak',
          paragraphs: [
            'Tahun 2011, proses pengajuan pailit resmi diketok palu di pengadilan kebangkrutan. Hidup Steve Sonnenberg terasa bagai mimpi buruk tanpa akhir. Berbulan-bulan ia diliputi kepedihan, amarah atas ketidakadilan, dan kecemasan akan masa depan keluarganya.',
            'Suatu sore yang dingin saat berjalan sendirian di sebuah jalur setapak perbukitan Utah, sebuah bisikan nurani yang teramat jernih menghantam pikirannya: "Jika kau terus menghabiskan energimu untuk marah dan melawan masa lalu ini, kau akan kehilangan keluargamu. Lepaskan semuanya, dan mulailah kembali dari nol."',
            'Steve berhenti melangkah, menarik napas panjang, dan membuat keputusan terbesar dalam hidupnya: berhenti menyesali keruntuhan masa lalu dan mengarahkan 100% fokusnya untuk membangun kapal baru.'
          ]
        },
        {
          num: 3,
          title: '$5.000 di Kartu Kredit dan Sebuah Domain',
          paragraphs: [
            'Tanpa modal uang tunai sepeser pun, Steve nekat menggesek sisa limit kartu kreditnya sebesar $5.000 (sekitar Rp 80 juta) untuk membeli sebuah nama domain di internet: Awardco.com.',
            'Visinya adalah mendisrupsi industri apresiasi karyawan konvensional yang kaku dengan membangun platform piranti lunak (SaaS) penghargaan loyalitas kerja yang terintegrasi langsung dengan katalog belanja Amazon Business.',
            'Demi menyambung hidup keluarganya dan membiayai pengembangan kode awal, Steve bekerja sebagai web developer lepas di malam hari sembari memegang pekerjaan tetap di Qualtrics. Jadwal kerjanya dimulai dari pukul 07.00 pagi hingga larut lewat tengah malam, sementara sang istri dengan setia membantu membungkus pesanan hadiah secara manual dari meja makan rumah.'
          ]
        },
        {
          num: 4,
          title: 'Menolak Menyerah di LinkedIn',
          paragraphs: [
            'Membangun Awardco dari nol menuntut ketahanan mental baja. Steve melakukan ratusan panggilan dingin (cold calls) dan mengirim pesan langsung ke para direktur HR di LinkedIn. Sebagian besar menolak dengan dingin atau menganggap remeh idenya.',
            'Namun Steve menolak berhenti. "Orang-orang acak yang saya temui di internet menolak ide saya, tapi saya terus menulis kode dan memperbaiki sistem," kenangnya.',
            'Kerja keras tanpa henti itu berbuah tiket emas pada tahun 2015. Tim eksekutif Amazon Business mengundangnya terbang ke kantor pusat di Seattle. Di ruang rapat tersebut, Steve mempresentasikan visinya dengan penuh keyakinan dan berhasil menyepakati kemitraan integrasi resmi dengan Amazon.'
          ]
        },
        {
          num: 5,
          title: 'Unicorn Bernilai $1 Miliar',
          paragraphs: [
            'Kemitraan Amazon melambungkan pertumbuhan Awardco secara eksponensial. Sistem otomatisasi pemberian hadiah karyawan berbasis poin Amazon yang dirancang Steve diadopsi oleh ribuan korporasi multinasional, termasuk raksasa telekomunikasi AT&T dan perusahaan rental global Hertz.',
            'Pada tahun 2021, setelah mengantongi pendanaan Seri A sebesar $165 juta, valuasi pasar Awardco resmi melampaui $1 Miliar (sekitar Rp 16 Triliun) dan melayani lebih dari 6 juta pengguna aktif di berbagai belahan dunia.',
            'Seluruh tumpukan liabilitas jutaan dolar dari masa pailit masa lalu telah lunas terbayar tuntas, mengubah status Steve Sonnenberg dari seorang ayah pailit menjadi pendiri perusahaan teknologi Unicorn paling disegani di Utah.'
          ]
        },
        {
          num: 6,
          title: 'Filosofi Seorang Pemenang',
          paragraphs: [
            'Ketika diwawancarai mengenai kunci keberhasilannya mengubah $5.000 limit kartu kredit menjadi perusahaan $1 miliar, Steve menjawab dengan penuh kerendahan hati: "Kekuatan terbesar saya hanyalah keberanian untuk sekadar memulai dari awal."',
            'Ia bahkan memandang kebangkrutan masa lalunya sebagai berkah terselubung yang memaksanya merenung, membuang kesombongan materi, dan membangun bisnis dengan fondasi yang jauh lebih kokoh.',
            'Steve Sonnenberg membuktikan bahwa modal terbesar seorang manusia bukanlah saldo rekeningnya, melainkan keberanian mental untuk berdiri kembali saat segala sesuatunya hancur berkeping-keping.'
          ]
        }
      ],
      takeaways: [
        'Hentikan Membuang Energi Melawan Masa Lalu: Mengikhlaskan kerugian masa lalu membebaskan kapasitas mental untuk menciptakan inovasi baru yang jauh lebih besar.',
        'Keberanian Sekadar Memulai (*The Power of Starting*): Satu langkah kecil (membeli domain dengan sisa limit kartu kredit) adalah pemantik lahirnya terobosan bernilai triliunan.',
        'Disiplin Kerja Keras & Pengorbanan: Menjalani dua pekerjaan sekaligus (7 AM hingga tengah malam) demi menjaga komitmen finansial keluarga di masa perintisan.',
        'Menggandeng Mitra Strategis Global: Membangun relasi saling menguntungkan dengan pemain raksasa (Amazon) mempercepat skalabilitas bisnis ke level internasional.'
      ]
    },
    {
      id: 'kiaraya',
      featured: false,
      name: 'Kia Raya (Siti Khoiriah)',
      tagline: 'Dari Kasir Indomaret Usia 15 Tahun Bayar Utang Ortu & Modal Rp 100 Ribu Menjadi Bos Pabrik Mie Lidi & Pemilik Franchise Indomaret',
      title: 'Dari Kasir Indomaret, Kini Bos Pemilik Indomaret',
      subtitle: 'Pendiri Mie Lidi Si Umang & Ikon Generasi Sandwich, Jakarta',
      origin: 'Jakarta & Bogor',
      ageAtRebound: 'Kasir Usia 15 Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Ortu & Modal Rp 100 Rb',
      badge: 'Pabrik 2.000 m² & Owner Indomaret',
      theme: 'rose',
      accentColor: '#E11D48',
      bgLight: '#FFF1F2',
      borderLight: '#FECDD3',
      stats: {
        debt: 'Utang Keluarga Sejak SMP',
        age: 'Kasir Usia 15 Tahun',
        lowest: 'Gaji Kasir Pas-pasan & Usaha Angkringan Gagal',
        action: 'Modal Rp 100.000 & Racik Mie Lidi Si Umang',
        result: '16.000 Bungkus/Hari, Pabrik 2.000 m² & Beli Franchise Indomaret'
      },
      timeline: [
        { year: '2012 — Seragam Biru Kasir', text: 'Ayah meninggal dan ibu terlilit utang; di usia 15 tahun bekerja sebagai kasir Indomaret Kemang demi melunasi utang keluarga.' },
        { year: 'Pertemuan & Resign', text: 'Bertemu Bari (rekan kerja toko), menikah, dan nekat resign untuk wirausaha meski sempat gagal di baju online dan angkringan.' },
        { year: 'Modal Rp 100.000 Mie Lidi', text: 'Memulai camilan masa kecil "Lidi Si Umang" dengan modal Rp 100.000 di dapur rumah, mengemas manual dan jualan online.' },
        { year: 'Meledak 16.000 Bungkus/Hari', text: 'Inovasi rasa gurih dan kemasan modern membuat produk viral di media sosial, permintaan melonjak belasan ribu bungkus per hari.' },
        { year: 'Pabrik 2.000 m² & Bebas Utang', text: 'Membangun pabrik modern di Gunung Sindur Bogor dengan ratusan staf, seluruh sisa utang orang tua lunas tuntas.' },
        { year: 'Hari Ini — Pemilik Franchise', text: 'Membeli waralaba Indomaret tempat ia dulu menjadi kasir, menjadi inspirasi nyata bagi pembebasan Generasi Sandwich.' }
      ],
      quote: 'Cerita kasir Indomaret bisa punya Indomaret bukan lagi mimpi. Kemiskinan dan utang masa lalu bukan takdir permanen; dengan modal Rp 100.000 dan tekad pantang menyerah, kita bisa mengubah jalan hidup.',
      quoteAuthor: 'Kia Raya (Siti Khoiriah), pendiri Lidi Si Umang',
      chapters: [
        {
          num: 1,
          title: 'Seragam Biru dan Beban yang Tak Terbayangkan',
          paragraphs: [
            'Tahun 2012 di Kemang, Jakarta Selatan. Seorang gadis muda bernama Siti Khoiriah berdiri tegak berjam-jam di balik mesin kasir sebuah gerai minimarket Indomaret.',
            'Ia mengenakan seragam biru bergaris dengan senyum ramah menyapa setiap pelanggan. Namun di balik keceriaannya melayani transaksi belanjaan, tersimpan beban hidup yang teramat berat di pundaknya yang masih belia.',
            'Kia—sapaan akrabnya—harus memikul predikat tulang punggung keluarga sejak usia 15 tahun. Sang ayah meninggal dunia mendadak saat ia masih duduk di bangku SMP, meninggalkan sang ibu yang terjerat utang kebutuhan hidup. Dari gaji kasir yang serba terbatas itulah Kia menyisihkan setiap rupiah untuk menyicil utang orang tua dan membiayai adik-adiknya.'
          ]
        },
        {
          num: 2,
          title: 'Bertemu di Balik Mesin Kasir',
          paragraphs: [
            'Di sela-sela rutinitas minimarket yang padat, takdir mempertemukan Kia dengan Bari—seorang pemuda pramusaji di gerai yang sama. Keduanya memiliki latar belakang serupa: anak muda yang bertekad memutus rantai kemiskinan keluarga.',
            'Cinta mereka bertumbuh dalam balutan perjuangan hidup. Setelah melangsungkan pernikahan sederhana, Kia dan Bari mengambil keputusan berani: mengundurkan diri dari pekerjaan kasir untuk merintis usaha sendiri.',
            'Namun jalan wirausaha tidak langsung mulus. Percobaan jualan pakaian online hingga membuka warung angkringan pinggir jalan berkali-kali menemui kegagalan dan menguras tabungan mereka hingga titik nol.'
          ]
        },
        {
          num: 3,
          title: 'Rp 100.000 dan Sebungkus Mie Lidi',
          paragraphs: [
            'Di tengah kebuntuan ekonomi, ingatan masa kecil membawa Kia pada kenangan jajanan tradisional sekolah: mie lidi yang renyah dan gurih pedas.',
            'Dengan sisa uang terakhir sebesar Rp 100.000 di dompet, Kia dan sang suami membeli tepung dan bumbu dasar. Di dapur kontrakan sempit, mereka meracik sendiri bumbu tabur pedas khas dan menggoreng mie lidi berbentuk unik menyerupai lidi sapu sepanjang 30 cm.',
            'Mereka menamai produknya "Lidi Si Umang". Dengan ketelatenan tinggi, mereka mengemasnya satu per satu menggunakan plastik klip rapi dan mulai memasarkannya secara gigih melalui media sosial dan forum komunitas daring.'
          ]
        },
        {
          num: 4,
          title: '16.000 Bungkus Sehari',
          paragraphs: [
            'Keajaiban cita rasa dan kekuatan pemasaran digital berpadu manis. Renyahnya mie lidi Si Umang dengan kepedasan bertingkat meledak viral di kalangan anak muda dan pecinta camilan Nusantara.',
            'Pesanan yang semula hanya puluhan bungkus meroket dahsyat menjadi ratusan, ribuan, hingga menembus rekor penjualan 16.000 bungkus per hari! Sistem keagenan dan reseller Si Umang menjamur di puluhan kota di seluruh Indonesia.',
            'Arus kas yang melimpah dikelola dengan sangat bijak. Seluruh sisa utang keluarga masa lalu dilunasi tanpa sisa, membebaskan sang ibu dari kepedihan jeratan kreditur bertahun-tahun.'
          ]
        },
        {
          num: 5,
          title: 'Dari Kasir Menjadi Bos Pemilik Franchise',
          paragraphs: [
            'Kapasitas produksi dapur kontrakan yang kewalahan mendorong Kia dan Bari membangun fasilitas pabrik modern mandiri seluas 2.000 meter persegi di kawasan Gunung Sindur, Bogor, yang mempekerjakan ratusan warga lokal.',
            'Puncak pembuktian takdir terjadi ketika pasangan ini memutuskan untuk berinvestasi membeli waralaba resmi gerai Indomaret lengkap dengan area komersial di sebelahnya.',
            'Tempat di mana Kia dulu hanyalah seorang gadis kasir remaja bergaji pas-pasan yang memindai belanjaan orang lain, kini berdiri megah di bawah kepemilikan bisnisnya sendiri.'
          ]
        },
        {
          num: 6,
          title: 'Inspirasi Pembebasan Generasi Sandwich',
          paragraphs: [
            'Perjalanan hidup Kia Raya kini menjadi mercusuar harapan bagi jutaan anak muda Indonesia yang sedang berjuang menanggung beban ekonomi keluarga (Sandwich Generation).',
            'Kia membuktikan bahwa lahir dalam keterbatasan dan terjerat utang bukanlah vonis permanen. Dengan kemauan memulai dari modal Rp 100.000, inovasi rasa yang dicintai konsumen, dan kesetiaan mendampingi pasangan di masa susah, siapapun berhak meraih kemerdekaan finansial sejati.',
            '"Jangan pernah malu pada pekerjaan halal apa pun hari ini. Teruslah bermimpi besar, karena seragam kasirmu hari ini bisa menjadi pintu gerbang kerajaan bisnismu esok hari," pungkas Kia Raya penuh senyum kemenangan.'
          ]
        }
      ],
      takeaways: [
        'Mulai dari Modal Terkecil (Rp 100.000): Ketiadaan uang miliaran bukan alasan menunda usaha; manfaatkan sisa modal kecil untuk memvalidasi ide jajanan yang disukai pasar.',
        'Inovasi Produk Nostalgia: Mengemas camilan masa kecil (mie lidi) dengan diferensiasi bentuk (30 cm) dan bumbu premium menciptakan pasar massal yang loyal.',
        'Bangkit dari Kegagalan Beruntun: Jangan patah arang saat bisnis pertama atau kedua bangkrut; jadikan setiap kegagalan sebagai batu asahan insting bisnis.',
        'Memutus Rantai Kemiskinan Keluarga: Berjuang bersama pasangan dengan saling menguatkan adalah kunci terhebat keluar dari beban himpitan Sandwich Generation.'
      ]
    },
    {
      id: 'yosep',
      featured: false,
      name: 'Yosep',
      tagline: 'Dari Utang Modal Rp 700 Juta Usia 24 Tahun & Kerupuk Hancur Kehujanan Menjadi Bos 3 Pabrik Omset Miliaran',
      title: 'Dari Utang Rp 700 Juta di Usia 24 Tahun, Kini Punya Tiga Pabrik',
      subtitle: 'Pemilik Pabrik Kerupuk Sehati, Ciamis, Jawa Barat',
      origin: 'Ciamis, Jawa Barat',
      ageAtRebound: 'Pemuda Usia 24 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 700 Jt & 3 Pabrik',
      badge: '3 Pabrik Kerupuk & 65 Karyawan',
      theme: 'amber',
      accentColor: '#EA580C',
      bgLight: '#FFF7ED',
      borderLight: '#FFEDD5',
      stats: {
        debt: 'Rp 700 Juta (Pinjaman Modal Pabrik)',
        age: 'Usia 24 Tahun (Kini 29 Tahun)',
        lowest: 'Ditinggal Pacar & Setengah Ton Kerupuk Kehujanan',
        action: 'Jual Desain 99Designs, Oven Pengering & Door-to-Door',
        result: 'Lunas 100%, 3 Pabrik & Omset Miliaran/Bulan'
      },
      timeline: [
        { year: 'Usia 24 Tahun — Beban Usaha', text: 'Mengambil alih usaha kerupuk orang tua yang sepuh di Ciamis dan meminjam Rp 700 juta untuk beli tanah dan mesin.' },
        { year: 'Cobaan Bertubi-tubi', text: 'Ditinggal pacar, HP jatuh ke sawah, dan setengah ton adonan kerupuk hancur basah tersiram hujan malam tahun baru.' },
        { year: 'Kejujuran & Desain 99Designs', text: 'Pemasok memberi pinjaman bahan tanpa jaminan karena jujur; ia tidak mengambil gaji pabrik dan hidup dari freelance desain grafis.' },
        { year: 'Inovasi Oven & Door-to-Door', text: 'Mengganti jemur matahari dengan mesin oven agar kebal cuaca, serta menjajakan kerupuk dari pasar ke pasar hingga luar kota.' },
        { year: 'Pelunasan Utang Rp 700 Juta', text: 'Brand kerupuk "Sehati" meledak di pasar Jawa Barat & Jawa Tengah; seluruh utang keluarga lunas terbayar tuntas.' },
        { year: 'Hari Ini — 3 Pabrik di Usia 29 Thn', text: 'Memiliki 3 pabrik kerupuk dengan 65 karyawan, mencetak omset miliaran rupiah per bulan, dan tetap hidup bersahaja.' }
      ],
      quote: 'Di usia 24 tahun punya utang Rp 700 juta rasanya seperti mimpi buruk. Tapi modal kejujuran, kerja keras pintu ke pintu, dan inovasi mesin oven membuktikan bahwa anak muda tidak boleh menyerah pada keadaan.',
      quoteAuthor: 'Yosep, pemilik Pabrik Kerupuk Sehati Ciamis',
      chapters: [
        {
          num: 1,
          title: 'Periuk Nasi yang Tak Terduga',
          paragraphs: [
            'Yosep tidak pernah bermimpi menjadi juragan kerupuk. Pemuda asal Ciamis ini mulanya ingin menikmati masa mudanya dengan kuliah dan berkarier modern selayaknya rekan-rekan sebayanya.',
            'Namun garis takdir keluarga menuntut pengorbanan besar. Orang tuanya yang dulu berjualan kerupuk di Blitar dengan hasil serba pas-pasan telah pindah ke Ciamis dalam kondisi fisik yang kian renta. Dari tiga bersaudara, hanya Yosep anak kedua yang bisa diandalkan untuk menopang dapur keluarga.',
            '"Anak bapak saya ada tiga. Yang pertama di Purwokerto, anak bungsu masih kuliah. Jadi yang diminta pegang usaha kerupuk ya cuma saya saja," tutur Yosep mengingat awal mula tanggung jawab berat itu mampir di pundaknya.'
          ]
        },
        {
          num: 2,
          title: 'Rp 700 Juta yang Menghantui',
          paragraphs: [
            'Akhir tahun 2017, di usianya yang baru menginjak 24 tahun, Yosep memutuskan merintis pabrik kerupuk dari nol. Membangun fondasi pabrik, membeli tanah, dan mendatangkan mesin produksi menuntut modal yang tidak sedikit.',
            'Dengan mempertaruhkan nama baik keluarga, Yosep meminjam uang dari kerabat senilai Rp 700 juta. "Di usia 24 tahun menanggung utang Rp 700 juta rasanya seperti mimpi buruk. Tiap malam saya memandang atap kamar sambil bingung: bagaimana cara memulangkan uang sebanyak itu?" kenangnya.',
            'Ujian mental belum berhenti di situ. Di tengah tekanan utang yang menumpuk, kekasihnya memilih pergi meninggalkannya, telepon genggam satu-satunya jatuh ke lumpur sawah, dan puncaknya saat malam tahun baru: hampir setengah ton adonan kerupuk yang sedang dijemur hancur lebur tersiram hujan badai. Di tengah tumpukan adonan basah yang tak bernilai, Yosep menahan tangis dan bersumpah pantang menyerah.'
          ]
        },
        {
          num: 3,
          title: 'Modal Kejujuran & Desain 99Designs',
          paragraphs: [
            'Di titik nadir tersebut, Yosep menyadari bahwa modal terhebat seorang wirausahawan adalah integritas. Sikapnya yang santun, jujur, dan bertanggung jawab membuat salah seorang pemasok bahan baku tepung percaya penuh padanya—memberinya suplai bahan baku bernilai puluhan juta rupiah secara kredit tanpa jaminan sepeser pun.',
            'Demi menjaga kelangsungan arus kas pabrik yang masih rapuh, Yosep mengambil keputusan disiplin: ia tidak mengambil gaji sepeser pun dari pabrik kerupuk.',
            'Untuk memenuhi biaya makan harian dan operasional pribadinya, pemuda kreatif ini bekerja paruh waktu menjual karya desain grafis dan logo di situs internasional 99Designs. Dari pundi-pundi dolar desain itulah ia bertahan hidup tanpa membebani keuangan pabrik.'
          ]
        },
        {
          num: 4,
          title: 'Inovasi Mesin Oven dan Penjualan Pintu ke Pintu',
          paragraphs: [
            'Trauma atas kerupuk yang hancur kehujanan mendorong Yosep berinovasi. Ia mendesain dan membangun ruang mesin pengering (oven) mandiri, sehingga proses produksi kerupuknya tidak lagi bergantung pada terik sinar matahari dan kebal terhadap musim penghujan.',
            'Setiap subuh, Yosep mengangkut sendiri kerupuk produksinya, menjajakannya dari pintu ke pintu ke pasar-pasar tradisional di Tasikmalaya, Ciamis, hingga ke luar kota di Jawa Barat dan Jawa Tengah.',
            'Rasa kerupuknya yang renyah, gurih konsisten, dan ketersediaan stok yang stabil sepanjang musim membuat pesanan melesat dahsyat. Pabrik yang ia beri nama "Sehati" mulai kebanjiran permintaan agen grosir.'
          ]
        },
        {
          num: 5,
          title: 'Miliarder Muda yang Tetap Bersahaja',
          paragraphs: [
            'Hasil dari keringat dan kedisiplinan itu membuahkan pemulihan spektakuler. Dalam kurun waktu singkat, seluruh beban utang Rp 700 juta di masa lalu berhasil dilunasi 100% tuntas.',
            'Alih-alih berfoya-foya membeli barang mewah, Yosep memutar seluruh laba bersih untuk memperluas ekspansi. Hari ini, di usianya yang menginjak 29 tahun, Yosep telah memiliki 3 pabrik kerupuk modern di Ciamis dengan mempekerjakan 65 orang karyawan dan menghasilkan omzet miliaran rupiah per bulan.',
            'Yosep membuktikan bahwa usia muda bukanlah halangan untuk menanggung amanah besar; dengan modal kejujuran, inovasi tanpa henti, dan kedisiplinan hidup, siapapun mampu mengubah beban utang menjadi mahakarya kejayaan.'
          ]
        }
      ],
      takeaways: [
        'Disiplin Memisahkan Keuangan Pribadi & Bisnis: Bertahan hidup dari keahlian sampingan (freelance desain) mencegah kebocoran kas modal usaha yang sedang bertumbuh.',
        'Integritas Kejujuran Sebagai Modal Pokok: Reputasi pribadi yang amanah membuka kepercayaan pasokan bahan baku dari mitra tanpa perlu jaminan fisik.',
        'Inovasi Tepat Guna Mengatasi Risiko Cuaca: Mengganti metode jemur matahari tradisional dengan mesin oven menjamin kapasitas produksi stabil sepanjang tahun.',
        'Re-Investasi Laba untuk Pertumbuhan: Jangan terjebak gaya hidup konsumtif dini; putar keuntungan untuk memperluas pabrik dan membuka lapangan kerja bagi sesama.'
      ]
    },
    {
      id: 'heppy',
      featured: false,
      name: 'Heppy Trenggono',
      tagline: 'Dari Utang Rp 63 Miliar & Sedekah di Masa Kritis Menjadi Pemilik Kerajaan Bisnis Sawit Rp 7 Triliun',
      title: 'Dari Utang Rp 63 Miliar dan Sedekah Terakhir, Kini Kerajaan Rp 7 Triliun',
      subtitle: 'Pendiri United Balimuda Group & Gerakan Beli Indonesia, Batang',
      origin: 'Batang, Jawa Tengah',
      ageAtRebound: 'Pengusaha Batang',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 63 M & Sedekah',
      badge: 'United Balimuda Group & Rp 7 Triliun',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Rp 63 Miliar (Bank Niaga 2005)',
        age: 'Mantan Direktur Teknik',
        lowest: 'Sisa Tabungan Rp 1 M & Dianggap Gila Karena Sedekah',
        action: 'Pivot Brokerage Sawit & Sedekah Ekstrem',
        result: 'Lunas 3 Thn, 80.000 Ha Sawit & Valuasi Rp 7 Triliun'
      },
      timeline: [
        { year: '2002 — Modal Satu Buldoser', text: 'Mendirikan PT Balimuda Persada bermodal 1 buldoser Rp 500 juta untuk kontraktor land clearing perkebunan sawit.' },
        { year: '2005 — Utang Rp 63 Miliar', text: 'Ekspansi agresif berujung krisis likuiditas akibat pembayaran macet, terjerat utang Rp 63 miliar di Bank Niaga.' },
        { year: 'Titik Terendah Sedekah', text: 'Sisa kas hanya Rp 1 miliar; alih-alih panik, ia memilih melipatgandakan sedekah hingga dianggap gila oleh karyawan.' },
        { year: 'Pivot Brokerage Sawit', text: 'Banting setir dari kontraktor padat modal menjadi broker strategis penghubung korporasi masuk ke bisnis kelapa sawit.' },
        { year: 'Lunas dalam 3 Tahun', text: 'Arus kas berbalik melimpah, seluruh utang pokok dan bunga Rp 63 miliar terbayar lunas dalam tempo 3 tahun.' },
        { year: 'Hari Ini — Rp 7 Triliun', text: 'Memimpin United Balimuda Group (12 anak usaha, 3.000 staf, 80.000 ha lahan sawit, pabrik HeppyFoods, dan Gerakan Beli Indonesia).' }
      ],
      quote: 'Sedekah merupakan salah satu mentalitas, karakter, dan cara bermain yang harus dimiliki semua pengusaha. Orang yang bersedekah tidak akan miskin; tutupi kesulitanmu dengan kebaikan sebanyak-banyaknya.',
      quoteAuthor: 'Heppy Trenggono, pendiri United Balimuda Group',
      chapters: [
        {
          num: 1,
          title: 'Anak Desa yang Bermimpi Besar',
          paragraphs: [
            'Heppy Trenggono lahir di Batang, Jawa Tengah pada 20 April 1967. Lahir dari keluarga sederhana—sang ayah seorang PNS di bidang pendidikan dan sang ibu berjualan di pasar tradisional—pemuda ini tumbuh dengan cita-cita besar di dadanya.',
            'Dengan tekun ia menempuh pendidikan tinggi hingga meraih gelar S1 Teknik Informatika di Universitas Gunadarma dan S2 Ilmu Komputer di Universitas Indonesia. Karier profesionalnya melesat dari System Analyst di United Tractors, Asisten Manajer di Indomobil, hingga menduduki kursi Direktur Teknik di stasiun televisi nasional LaTivi (sekarang TVOne).',
            'Namun pencapaian karier mapan sebagai eksekutif tidak memadamkan hasrat wirausahanya. Heppy ingin menciptakan lapangan kerja mandiri yang bermanfaat bagi ribuan orang.'
          ]
        },
        {
          num: 2,
          title: 'Satu Buldoser, Sebuah Mimpi',
          paragraphs: [
            'Tahun 2002, Heppy bersama rekan-rekannya mendirikan PT Balimuda Persada. Modal awal yang mereka miliki hanyalah satu unit buldoser seharga Rp 500 juta.',
            'Mereka terjun sebagai kontraktor pembukaan lahan perkebunan kelapa sawit (land clearing) di pedalaman Sumatera dan Kalimantan. Dengan kerja keras siang dan malam di tengah belantara, bisnis kecil itu berkembang pesat dan mulai diperhitungkan oleh korporasi perkebunan besar.',
            'Keberhasilan awal yang diraih dalam waktu relatif singkat memicu rasa percaya diri berlebih. Heppy memutuskan untuk mengambil langkah ekspansi berskala raksasa.'
          ]
        },
        {
          num: 3,
          title: 'Rp 63 Miliar yang Menggantung',
          paragraphs: [
            'Tahun 2005 menjadi tahun petaka. Demi mendanai pembelian puluhan alat berat baru dan ekspansi besar-besaran, Heppy mengajukan pinjaman kredit perbankan dalam jumlah masif ke Bank Niaga.',
            'Namun krisis likuiditas mendadak menghantam industri perkebunan. Pembayaran tagihan proyek dari klien-klien besar macet total, sementara bunga dan pokok cicilan bank terus berjalan tanpa ampun. PT Balimuda Persada terjerembap dalam kubangan utang sebesar Rp 63 miliar.',
            'Karyawan mulai resah, tagihan bank menumpuk di meja kerja, dan para penasihat finansial mendesaknya untuk segera melelang seluruh aset perusahaan demi menghindari kebangkrutan total.'
          ]
        },
        {
          num: 4,
          title: 'Keputusan di Tengah Badai',
          paragraphs: [
            'Di titik terendah tersebut, dengan sisa tabungan kas yang hanya tersisa sekitar Rp 1 miliar, Heppy mengambil keputusan spiritual yang mengejutkan banyak pihak: ia memilih untuk melipatgandakan sedekah.',
            'Bagi orang awam, keputusan itu tampak seperti tindakan bunuh diri finansial. Beberapa karyawan menganggap langkahnya tidak rasional dan memilih mengundurkan diri. Namun Heppy berpegang teguh pada keyakinan batinnya: "Orang yang bersedekah tidak akan pernah miskin. Jika kamu tertimpa kesulitan besar, tutuplah dengan kebaikan sebanyak-banyaknya sebagai asuransi ilahi."',
            'Ketenangan spiritual yang hadir menyingkirkan kepanikan dan mengembalikan ketajaman logika bisnisnya.'
          ]
        },
        {
          num: 5,
          title: 'Banting Setir Menjadi Broker',
          paragraphs: [
            'Heppy melakukan restrukturisasi radikal atas model bisnisnya. Ia menyadari bahwa mempertahankan armada kontraktor alat berat membutuhkan modal kerja yang terlalu besar di masa krisis.',
            'Ia banting setir menjadi perantara strategis (broker/konsultan) yang menjembatani para investor dan korporasi besar yang hendak mengakuisisi lahan dan masuk ke industri perkebunan kelapa sawit.',
            'Strategi baru yang minim aset tetap (asset-light) ini menghasilkan margin komisi yang luar biasa besar tanpa risiko beban utang baru. Dalam kurun waktu hanya 3 tahun, seluruh kewajiban utang pokok dan bunga Rp 63 miliar di Bank Niaga berhasil dilunasi 100% tuntas.'
          ]
        },
        {
          num: 6,
          title: 'Kerajaan Bisnis Rp 7 Triliun',
          paragraphs: [
            'Hari ini, Heppy Trenggono memimpin United Balimuda Group—sebuah konglomerasi perkebunan dan industri dengan 12 anak perusahaan, sekitar 3.000 karyawan, dan estimasi valuasi mencapai Rp 7 triliun.',
            'Konsesi perkebunan sawitnya terbentang seluas 80.000 hektar di Sumatera dan Kalimantan dengan nilai investasi lebih dari Rp 4 triliun. Ia juga membangun pabrik makanan olahan modern HeppyFoods di BSD City Tangerang dan memelopori gerakan nasional "Beli Indonesia" untuk membangkitkan kemandirian ekonomi bangsa.',
            'Di kediamannya di kawasan Mampang Prapatan Jakarta, setiap pagi Heppy rutin membagikan sarapan gratis untuk kaum dhuafa, membuktikan bahwa tangan yang gemar memberi akan selalu dilapangkan rezekinya oleh Sang Mahakuasa.'
          ]
        }
      ],
      takeaways: [
        'Mentalitas Berbagi di Masa Kritis: Sedekah di tengah kesempitan adalah bukti ketundukan batin yang menghalau kepanikan dan membuka pintu solusi tak terduga.',
        'Pivot Model Bisnis Asset-Light: Mengubah operasional padat modal menjadi jasa perantara/konsultan strategis membebaskan arus kas dari beban utang operasional.',
        'Komitmen Melunasi Utang Bank: Hadapi institusi perbankan dengan itikad baik dan disiplin mengalokasikan hasil usaha hingga lunas tuntas.',
        'Gerakan Ekonomi Berkelanjutan: Menggunakan kesuksesan finansial untuk membangun kemandirian ekonomi bangsa (Gerakan Beli Indonesia) dan memuliakan sesama.'
      ]
    },
    {
      id: 'donanto',
      featured: false,
      name: 'Donanto',
      tagline: 'Dari Bangkrut Total & Menyewa Rumah Sendiri Menjadi Eksportir Sidat ke Jepang & Pemilik 5 Perusahaan',
      title: 'Dari Menyewa Rumah Sendiri, Kini Memimpin 5 Perusahaan',
      subtitle: 'Pendiri Duta Unagi & 5 Lini Bisnis Ekspor, Kediri',
      origin: 'Kediri, Jawa Timur',
      ageAtRebound: 'Pengusaha Kediri',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia', 'global'],
      categoryLabel: 'Jual Rumah & 5 Perusahaan',
      badge: 'Ekspor Sidat Jepang & Duta Unagi',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: 'Utang Bank & Seluruh Aset Terjual',
        age: 'Pengusaha Kediri',
        lowest: 'Mengontrak di Rumah yang Dulu Miliknya Sendiri',
        action: 'Pasrah Total, Pesantren & Ekspor Sidat 2016',
        result: '5 Perusahaan Mandiri & Omset Puluhan Juta/Hari'
      },
      timeline: [
        { year: 'Prahara & Utang Bank', text: 'Usaha bangkrut total, terjerat utang bank, dan terpaksa melelang/menjual seluruh aset termasuk rumah tinggal keluarga.' },
        { year: 'Titik Terendah Rumah Sewa', text: 'Tinggal sebagai penyewa di rumah yang dulu ia bangun dan miliki sendiri, merasakan getirnya kehilangan segalanya.' },
        { year: 'Pasrah Total & Pengabdian', text: 'Berserah penuh kepada Tuhan, mendirikan pesantren di Kediri, dan terus bergerak mencari peluang baru tanpa gengsi.' },
        { year: '2016 — Ekspor Sidat Jepang', text: 'Membaca peluang kelangkaan unagi di Jepang, menyempurnakan kualitas budidaya, dan sukses menembus ekspor ke Jepang.' },
        { year: 'Ekspansi 5 Gurita Bisnis', text: 'Mendirikan LPK magang Jepang (2018), Restoran Duta Unagi (2020), pabrik gazebo kayu Sragen, dan teknologi pemetaan geologi.' },
        { year: 'Hari Ini — Pemberdayaan SDM', text: 'Memimpin 5 korporasi dengan omset puluhan juta per hari dan membuka lapangan kerja bagi ratusan pemuda serta keluarga prasejahtera.' }
      ],
      quote: 'Saat paling berat adalah berjuang melunasi utang bank dan menyewa rumah sendiri. Namun ketika kita pasrah total dan fokus memberdayakan manusia, Tuhan akan membukakan jalan keluar dari arah yang tak disangka-sangka.',
      quoteAuthor: 'Donanto, pendiri Duta Unagi & eksportir sidat',
      chapters: [
        {
          num: 1,
          title: 'Pria yang Kehilangan Segalanya',
          paragraphs: [
            'Donanto duduk termenung di teras sebuah rumah kontrakan di Kediri. Bangunan itu bukanlah tempat asing baginya; setiap sudut ruangan, dinding yang dicat rapi, hingga taman kecil di halaman depan adalah hasil jerih payahnya sendiri beberapa tahun silam.',
            'Namun kini statusnya telah berbalik 180 derajat: ia bukan lagi pemilik, melainkan penyewa bulanan yang membayar sewa kepada orang lain atas rumah yang dulu adalah miliknya sendiri.',
            'Kehancuran bisnis sebelumnya telah menyeret Donanto ke jurang utang bank yang menumpuk. Demi menjaga kehormatan dan melunasi kewajiban perbankan, ia mengambil keputusan paling pedih: menjual seluruh aset yang dimilikinya tanpa terkecuali, termasuk rumah tempat tinggal keluarganya.'
          ]
        },
        {
          num: 2,
          title: 'Pasrah di Titik Nol',
          paragraphs: [
            'Di titik nadir tersebut, ketika semua pintu materi seakan tertutup rapat, Donanto memilih untuk berserah diri secara total kepada Sang Pencipta. "Saat paling berat itu, saya benar-benar pasrah kepada Allah. Saya lepaskan semua ego, ketakutan, dan rasa malu," kenangnya.',
            'Kepasrahan itu bukan berarti berpangku tangan. Sembari merintis usaha-usaha kecil harian, Donanto mengabdikan dirinya dengan mendirikan sebuah pesantren di Kediri bukan untuk mencari keuntungan materi, melainkan sebagai sarana berbakti dan mendidik generasi muda.',
            'Ketulusan niat dan ketenangan batin membuatnya kembali memiliki kejernihan pikiran untuk membaca peluang-peluang bisnis strategis yang luput dari pandangan orang lain.'
          ]
        },
        {
          num: 3,
          title: 'Sidat yang Mengubah Takdir',
          paragraphs: [
            'Tahun 2016 menjadi gerbang kebangkitan besar Donanto. Mendengar informasi mengenai fenomena kelangkaan pasokan ikan sidat (unagi) di pasar kuliner Jepang, ia mencium potensi emas ekspor komoditas perikanan air tawar Indonesia.',
            'Meski sebelumnya pernah mengalami kegagalan bertahun-tahun dalam menembus pasar luar negeri, Donanto menolak menyerah. Ia memperbaiki teknologi kolam budidaya, memperketat kontrol kualitas pakan, dan memenuhi standar higienitas karantina internasional Jepang yang teramat ketat.',
            'Perjuangannya berbuah manis. Kontainer sidat hidup asal Kediri berhasil lolos uji laboratorium dan mendarat di pasar Tokyo dengan apresiasi tinggi. Pintu ekspor terbuka lebar dan arus kas bernilai miliaran rupiah kembali mengalir deras.'
          ]
        },
        {
          num: 4,
          title: 'Lima Perusahaan yang Tumbuh Subur',
          paragraphs: [
            'Keberhasilan ekspor sidat menjadi batu loncatan Donanto untuk membangun ekosistem bisnis terintegrasi. Pada tahun 2018, ia mendirikan Lembaga Pelatihan Kerja (LPK) yang berhasil memberangkatkan ratusan tenaga kerja magang ke Jepang, khususnya di sektor perawatan medis dan lansia.',
            'Tahun 2020, ia meresmikan restoran kuliner Jepang "Duta Unagi". Restoran ini difungsikan ganda: sebagai etalase olahan sidat premium sekaligus pusat pelatihan kerja bagi pemuda prasejahtera.',
            'Tak berhenti di situ, Donanto memperluas gurita usahanya ke manufaktur pembuatan gazebo dan rumah kayu etnik di Sragen (yang memasok resort-resort mewah di Bali) serta mendirikan perusahaan teknologi pemetaan geologi. Kini ia memimpin 5 perusahaan mandiri dengan omset puluhan juta rupiah per hari.'
          ]
        },
        {
          num: 5,
          title: 'Filosofi Pemberdayaan Manusia',
          paragraphs: [
            'Bagi Donanto, kekayaan materi masa kini bukanlah tujuan akhir. Rumah yang dulu pernah terpaksa ia sewakan telah menjadi prasasti pengingat bahwa roda kehidupan selalu berputar bagi mereka yang mau berikhtiar.',
            'Ia memegang teguh filosofi hidup: "Pemberdayaan sumber daya manusia adalah kunci utama kesuksesan sejati. Ketika kita membuka jalan rezeki bagi orang lain yang membutuhkan, jalan rezeki kita pun akan dilapangkan oleh Tuhan."',
            'Donanto membuktikan bahwa kehilangan seluruh harta benda bukanlah akhir cerita, melainkan permulaan dari sebuah lompatan kebangkitan yang jauh lebih kokoh dan bermanfaat bagi masyarakat luas.'
          ]
        }
      ],
      takeaways: [
        'Ikhlas Melepaskan Aset Demi Kehormatan: Berani menjual aset demi melunasi utang bank adalah tindakan ksatria yang membersihkan beban mental dan membuka pintu berkah baru.',
        'Kekuatan Spiritual & Pengabdian: Pasrah total kepada Tuhan dan membangun sarana sosial (pesantren) mengembalikan ketenangan batin untuk berpikir jernih.',
        'Peka Menangkap Peluang Global: Ketekunan memperbaiki kualitas produk mampu menembus pasar ekspor dengan standar tertinggi di dunia.',
        'Fokus pada Pemberdayaan Sesama: Kesuksesan bisnis yang berkelanjutan adalah bisnis yang mampu mengangkat harkat hidup karyawan dan lingkungan sekitar.'
      ]
    },
    {
      id: 'wangpeng',
      featured: false,
      name: 'Wang Peng (王鹏)',
      tagline: 'Dari Mantan Polisi Mengambil Alih Utang Ayah Rp 580 Miliar Menjadi Pelopor Terminal Satelit Beidou & Lunas 7 Tahun',
      title: 'Anak yang Menepati Janji di Atas Kertas Utang',
      subtitle: 'Pendiri Layanan Terminal Satelit Beidou, Hengyang, Hunan',
      origin: 'Hengyang, Tiongkok',
      ageAtRebound: 'Mantan Polisi Usia 28 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'global'],
      categoryLabel: 'Utang Ayah Rp 580 M & Beidou',
      badge: 'Penghargaan Hengyang Good People',
      theme: 'sky',
      accentColor: '#0284C7',
      bgLight: '#F0F9FF',
      borderLight: '#BAE6FD',
      stats: {
        debt: '264 Juta Yuan (~Rp 580 Miliar)',
        age: 'Usia 28 Tahun (Ex-Polisi/Militer)',
        lowest: 'Gaji Hanya Mampu Bayar Setelah 20 Tahun',
        action: 'Tanda Tangan Surat Utang Atas Nama Sendiri',
        result: 'Lunas 27 Sept 2022 & Gelar Hengyang Good People'
      },
      timeline: [
        { year: '2016 — Telepon Kehancuran', text: 'Ayahnya menelepon putus asa karena usaha bangkrut dan menanggung beban utang 264 juta Yuan.' },
        { year: 'Tanggung Jawab Pribadi', text: 'Resign dari Beijing, pulang ke Hengyang, menemui kreditur, dan mengganti nama di seluruh surat utang menjadi namanya sendiri.' },
        { year: 'Kantor Papan Bergerak', text: 'Mendirikan layanan terminal satelit navigasi Beidou dari kontainer papan bergerak bersama rekan purnawirawan militer.' },
        { year: 'Layanan Ekstrem Tanpa Syarat', text: 'Sempat gagal jawab 4 pertanyaan teknis klien, belajar 3 hari tanpa tidur, lalu memberikan garansi servis gratis seumur hidup.' },
        { year: '27 September 2022 — Lunas', text: 'Setelah 7 tahun menyisihkan laba secara disiplin, cek utang terakhir diserahkan dan dinyatakan lunas 100% tuntas.' },
        { year: '2023 — Hengyang Good People', text: 'Dianugerahi penghargaan kehormatan resmi "Hengyang Good People" atas integritas moral dan baktinya kepada orang tua.' }
      ],
      quote: 'Ayah saya pernah jatuh, tapi saya tidak akan membiarkan nama kehormatan keluarga terpuruk selamanya. Saya hanya berpikir: ini orang tua saya, tidak ada pilihan lain selain menepati janji.',
      quoteAuthor: 'Wang Peng, penerima penghargaan Hengyang Good People 2023',
      chapters: [
        {
          num: 1,
          title: 'Telepon yang Mengubah Segalanya',
          paragraphs: [
            'Oktober 2016 di Beijing. Wang Peng—seorang pemuda lulusan Akademi Kepolisian Hunan angkatan 2010 yang baru saja menyelesaikan masa dinas militer—sedang fokus merintis kariernya di ibu kota ketika ponselnya berdering.',
            'Di ujung sambungan telepon, suara ayahnya terdengar parau, terisak, dan gemetar: "Nak... Ayah sudah tidak kuat lagi. Usaha ayah hancur dan ayah benar-benar sudah tidak punya jalan keluar. Ayah hanya bisa meninggalkan ibu dan adik-adikmu, maafkan ayah..."',
            'Pria panutan yang selama ini ia kagumi telah hancur oleh kebangkrutan bisnis yang meninggalkan lubang utang raksasa sebesar 264 juta Yuan (sekitar Rp 580 miliar). Tangis keputusasaan sang ayah menyentak sanubari terdalam Wang Peng.'
          ]
        },
        {
          num: 2,
          title: 'Keputusan Seorang Anak',
          paragraphs: [
            'Malam itu di kamar sewa sempitnya di Beijing, Wang Peng menghitung realitas finansialnya. Dengan gajinya kala itu sebesar 10.000 Yuan per bulan, ia membutuhkan waktu puluhan tahun tanpa makan sepeser pun untuk melunasi utang sang ayah.',
            'Namun darah prajurit yang mengalir di tubuhnya menolak untuk lari. "Ayah dan ibu membesarkanku dengan segenap jiwa. Sekarang saat keluarga di jurang kehancuran, giliran saya yang berdiri di garis depan," tekadnya.',
            'Wang Peng mengundurkan diri dari pekerjaannya di Beijing dan pulang ke Hengyang. Ia mendatangi satu per satu kreditur ayahnya yang marah. Alih-alih membela diri, Wang Peng mengeluarkan pena dan menulis ulang setiap surat pengakuan utang: mencoret nama ayahnya dan menggantinya dengan tanda tangan atas namanya sendiri sebagai penanggung jawab mutlak.'
          ]
        },
        {
          num: 3,
          title: 'Kantor Papan Bergerak dan 3 Hari Belajar',
          paragraphs: [
            'Bersama beberapa rekan purnawirawan militer, Wang Peng mendirikan perusahaan penyedia layanan sistem terminal Beidou (satelit navigasi nasional). Karena modal yang nyaris nol, mereka berkantor di sebuah bilik kantor papan bergerak (bedeng kontainer proyek).',
            'Wang Peng merangkap sebagai manajer, teknisi lapangan, hingga tenaga pemasar keliling. Suatu hari, saat mempresentasikan sistem navigasinya kepada seorang pemilik armada logistik besar, sang calon klien melontarkan 4 pertanyaan teknis yang sangat rumit mengenai frekuensi satelit.',
            'Wang Peng tidak bisa menjawab satu pun. Namun dengan tatapan jujur, ia membungkuk hormat: "Maaf Pak, saya belum menguasai hal tersebut. Beri saya waktu 3 hari, saya akan kembali dengan jawaban lengkap." Tiga hari tiga malam tanpa tidur ia membedah buku manual teknik, kembali tepat waktu, dan menjawab seluruh pertanyaan dengan presisi sempurna hingga memenangkan kontrak perdana.'
          ]
        },
        {
          num: 4,
          title: '7 Tahun Menuntaskan Janji',
          paragraphs: [
            'Wang Peng menerapkan filosofi pelayanan ekstrem: seluruh perbaikan dan pemeliharaan alat terminal Beidou diberikan 100% GRATIS kepada klien tanpa memandang penyebab kerusakannya. Kepercayaan pasar meledak dan armadanya dipercaya oleh ribuan armada transportasi komersial.',
            'Selama 7 tahun penuh pengorbanan, Wang Peng hidup sangat sederhana. Setiap tetes keuntungan perusahaan dialirkan secara teratur ke rekening para kreditur ayahnya satu demi satu.',
            'Hingga tibalah tanggal bersejarah: 27 September 2022. Wang Peng duduk di hadapan berkas utang terakhir ayahnya. Dengan senyum haru dan tangan mantap, ia menyerahkan pembayaran pamungkas. Utang 264 juta Yuan dinyatakan LUNAS 100% tuntas.'
          ]
        },
        {
          num: 5,
          title: '"Kau Mengembalikan Kehormatan Ayahmu"',
          paragraphs: [
            'Pada tahun 2023, Pemerintah Kota Hengyang secara resmi menganugerahi Wang Peng gelar kehormatan "Hengyang Good People" (衡阳好人)—sebuah penghargaan sipil tertinggi atas teladan integritas, kejujuran, dan bakti anak kepada orang tua.',
            'Saat ditanya wartawan apa hal yang paling membahagiakannya, Wang Peng tersenyum dengan mata berkaca-kaca: "Ayah saya pernah tersandung dan jatuh. Namun saya tidak pernah membiarkan nama baik ayah saya terkubur dalam aib kebangkrutan."',
            'Wang Peng membuktikan kepada generasi muda bahwa keberanian menanggung beban keluarga dan memegang teguh kejujuran adalah jalan sejati menuju kehormatan hidup yang abadi.'
          ]
        }
      ],
      takeaways: [
        'Keberanian Mengambil Tanggung Jawab: Hadapi kreditur secara terbuka dan ikat janji atas nama sendiri untuk membangun kembali martabat dan kepercayaan.',
        'Komitmen Belajar Tanpa Henti (Agile Learning): Ketidaktahuan teknis bukan alasan menyerah; belajarlah siang dan malam untuk menguasai industri barumu.',
        'Layanan Konsumen Berintegritas Tinggi: Memberikan nilai lebih di atas ekspektasi klien adalah strategi pemasaran terkuat untuk memenangkan pasar.',
        'Bakti Tanpa Syarat: Kebahagiaan dan pemulihan nama baik orang tua adalah motivasi tanpa batas yang mampu menembus kemustahilan finansial.'
      ]
    },
    {
      id: 'duncan',
      featured: false,
      name: 'Amber & Ryan Duncan',
      tagline: 'Dari Bangkrut 40 Properti Hilang Krisis 2008 Menjadi Pendiri "Life After Debt" Berharta Rp 814 Miliar',
      title: 'Dari Bangkrut di Pengadilan, Kini Jutawan Penyelesaian Utang',
      subtitle: 'Pendiri Life After Debt, Florida, Amerika Serikat',
      origin: 'Florida, Amerika Serikat',
      ageAtRebound: 'Pasutri Hipotek',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'global'],
      categoryLabel: 'Krisis 2008 & Rp 814 Miliar',
      badge: 'Jutawan 2 Tahun & Net Worth US$ 50 Juta',
      theme: 'indigo',
      accentColor: '#4F46E5',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Bangkrut Total (40 Properti Runtuh)',
        age: 'Pasangan Suami Istri',
        lowest: 'Dihina Pengacara di Sidang Pailit 2008',
        action: 'Mendirikan "Life After Debt" & Negosiasi Utang',
        result: 'Jutawan 2 Thn & Net Worth Rp 814 Miliar (US$ 50 Jt)'
      },
      timeline: [
        { year: '2007 — Puncak Hipotek', text: 'Memiliki 40 properti sewaan, mobil mewah, dan pendapatan melimpah dari industri kredit perumahan Florida.' },
        { year: '2008 — Krisis Subprime', text: 'Bank membekukan kredit hipotek, penyewa gagal bayar, arus kas lenyap seketika, dan terpaksa mengajukan pailit di pengadilan.' },
        { year: 'Titik Terendah Sidang', text: 'Pengacara lawan mencibir dingin "Saya akan bertemu Anda lagi di sini", membakar amarah dan tekad perlawanan Amber.' },
        { year: 'Lahirnya Life After Debt', text: 'Menyewa rumah kecil dan merintis jasa penyelesaian utang (negosiasi pelunasan 67% pokok) untuk membantu sesama korban utang.' },
        { year: 'Jutawan dalam 2 Tahun', text: 'Bisnis meledak pesat; dalam setahun membeli rumah kontrakan secara tunai dan mencetak status jutawan dalam tempo 2 tahun.' },
        { year: 'Hari Ini — Rp 814 Miliar', text: 'Akumulasi kekayaan mencapai US$ 50 juta (Rp 814 Miliar), hidup hemat bebas utang (cash-only), dan Amber lulus sarjana pada 2022.' }
      ],
      quote: 'Saya memulai setiap hari seolah-olah saya tidak memiliki apa-apa. Anda bisa bangkit dari keterpurukan tanpa rasa malu dan tidak pernah ada kata terlambat untuk mengejar impian.',
      quoteAuthor: 'Amber Duncan, pendiri Life After Debt',
      chapters: [
        {
          num: 1,
          title: 'Kehidupan yang Tampak Sempurna',
          paragraphs: [
            'Florida pada tahun 2007 adalah panggung kejayaan bagi pasangan suami istri Amber dan Ryan Duncan. Keduanya berkarier di industri hipotek perumahan—sebuah sektor yang kala itu sedang mengalami pertumbuhan eksplosif di Amerika Serikat.',
            'Dari hasil kerja kerasnya, mereka berhasil mengumpulkan 40 unit properti sewaan yang mengalirkan pendapatan pasif melimpah setiap bulan. Deretan mobil mewah berjejer di garasi, rumah-rumah megah menjadi aset kebanggaan, dan anak-anak mereka menempuh pendidikan di sekolah swasta terbaik.',
            'Bagi Amber dan Ryan, mereka adalah perwujudan sempurna dari "American Dream". Tidak pernah terlintas dalam benak mereka bahwa seluruh kemewahan itu berdiri di atas pasir hisap ekonomi makro yang rapuh.'
          ]
        },
        {
          num: 2,
          title: 'Ketika Badai Subprime Menghantam',
          paragraphs: [
            'Tahun 2008, badai Krisis Subprime Mortgage meledak mengguncang seluruh sistem perbankan global. Bank-bank raksasa Amerika Serikat mendadak membekukan seluruh penyaluran kredit hipotek baru.',
            'Bagi Amber dan Ryan, yang 100% perputaran keuangannya bergantung pada industri kredit perumahan, dampaknya bagai kiamat finansial seketika. Pendapatan utama mereka lenyap dalam hitungan hari. Di saat bersamaan, para penyewa 40 properti mereka kehilangan pekerjaan dan gagal membayar uang sewa.',
            'Cicilan bank atas puluhan rumah yang mereka miliki menumpuk tak terbayar. Satu per satu aset disita, rekening bank terkuras habis, dan pasangan ini akhirnya harus menempuh jalan paling memalukan dalam hukum perdata Amerika: menyatakan diri bangkrut total di pengadilan.'
          ]
        },
        {
          num: 3,
          title: '"Saya Akan Bertemu Anda Lagi"',
          paragraphs: [
            'Di ruang sidang pengadilan kebangkrutan yang dingin dan mencekam, Amber dan Ryan duduk dengan kepala tertunduk menatap kehancuran hidup mereka. Seluruh reputasi, tabungan, dan rumah yang dibangun bertahun-tahun dihapus oleh palu hakim.',
            'Saat proses persidangan usai, seorang pengacara kreditur mendekati Amber dan melontarkan kalimat sinis bernada meremehkan: "Saya yakin saya akan bertemu Anda lagi di kursi pesakitan ini."',
            'Kata-kata dingin itu bagai minyak yang disiramkan ke kobaran api di dada Amber. Alih-alih meratap, air matanya berubah menjadi tekad baja. "Saya menangis penuh amarah dan bersumpah akan membuktikan bahwa orang itu salah besar," kenang Amber.'
          ]
        },
        {
          num: 4,
          title: 'Dari Kontrakan ke "Life After Debt"',
          paragraphs: [
            'Setelah seluruh harta bendanya disita, Amber dan Ryan menyewa sebuah rumah kontrakan kecil yang sangat sederhana. Di tangan mereka tidak ada lagi modal uang, tetapi mereka masih memiliki modal terbesar yang tak bisa disita siapa pun: keahlian mendalam di bidang negosiasi keuangan.',
            'Bersama mantan atasan mereka, pasangan ini mendirikan perusahaan rintisan bernama "Life After Debt" (Kehidupan Setelah Utang). Model bisnisnya dirancang khusus untuk memecahkan kepedihan sesama korban krisis: membantu masyarakat berutang menegosiasikan pelunasan diskon hingga hanya membayar sekitar 67% dari total pokok utang ke bank.',
            'Karena Amber dan Ryan pernah merasakan langsung kepedihan dikejar kreditur, mereka melayani setiap klien dengan empati mendalam dan strategi negosiasi hukum yang tangguh. Permintaan atas jasa mereka meledak di seluruh penjuru negeri.'
          ]
        },
        {
          num: 5,
          title: 'Jutawan dalam Dua Tahun',
          paragraphs: [
            'Pertumbuhan Life After Debt melesat luar biasa. Dalam kurun waktu hanya satu tahun, ketika pemilik rumah kontrakan mereka berniat menjual rumah yang mereka sewa, Amber dan Ryan sanggup membelinya secara TUNAI tanpa cicilan bank.',
            'Hanya dalam waktu dua tahun sejak duduk di ruang sidang kebangkrutan, pasangan ini telah berhasil mencetak status jutawan (millionaire) baru. Bisnis penyelesaian utang mereka berkembang menjadi korporasi finansial multi-layanan.',
            'Hari ini, setelah lebih dari satu dekade berlalu, nilai total kekayaan bersih pasangan ini ditaksir mencapai lebih dari US$ 50 juta atau sekitar Rp 814 miliar.'
          ]
        },
        {
          num: 6,
          title: 'Hidup Seolah Tidak Memiliki Apa-Apa',
          paragraphs: [
            'Kendati telah bergelimang harta ratusan miliar, pengalaman pahit kebangkrutan masa lalu menanamkan filosofi hidup baru yang sangat membumi pada diri Amber. "Saya memulai setiap hari seolah-olah saya tidak memiliki apa-apa," tuturnya.',
            'Keluarga Duncan memilih gaya hidup di bawah kemampuan finansial mereka: membayar hampir seluruh kebutuhan dengan uang tunai, menolak utang konsumtif, dan mengutamakan ketenangan batin. Pada tahun 2022, Amber bahkan berhasil menuntaskan kuliah sarjananya yang sempat terputus puluhan tahun lalu.',
            'Amber dan Ryan Duncan membuktikan kepada dunia bahwa kebangkrutan bukanlah garis akhir, melainkan ruang kelas terhebat untuk melahirkan seorang pemenang sejati.'
          ]
        }
      ],
      takeaways: [
        'Ubah Cibiran Menjadi Bahan Bakar Kebangkitan: Rasa sakit akibat diremehkan di titik terendah adalah dorongan terkuat untuk membuktikan kemampuan diri.',
        'Kemas Pengalaman Pahit Menjadi Solusi Berharga: Pengetahuanmu saat melewati krisis keuangan dapat dikembangkan menjadi bisnis jasa yang menolong ribuan orang lain.',
        'Filosofi Hidup Cash-Only & Rendah Hati: Kekayaan hakiki dipertahankan dengan menanggalkan kesombongan konsumtif dan menghindari jeratan utang baru.',
        'Tak Ada Kata Terlambat untuk Menyelesaikan Impian: Kesuksesan finansial harus dibarengi dengan pengembangan diri dan pemenuhan janji pada diri sendiri.'
      ]
    },
    {
      id: 'sirivat',
      featured: false,
      name: 'Sirivat Voravetvuthikun',
      tagline: 'Dari Miliarder CEO Pasar Modal Utang Rp 500 Miliar Menjadi Ikon "The Sandwich Man" Bangkok',
      title: 'Dari Miliarder ke Pedagang Sandwich, dan Kembali Lagi',
      subtitle: 'Mantan CEO Asia Securities & Pendiri Sirivat Sandwich, Bangkok',
      origin: 'Bangkok, Thailand',
      ageAtRebound: 'Mantan CEO 28 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'global'],
      categoryLabel: 'Utang Rp 500 M & Krisis 1997',
      badge: 'Ikon Kebangkitan Krisis Asia 1997',
      theme: 'blue',
      accentColor: '#2563EB',
      bgLight: '#EFF6FF',
      borderLight: '#BFDBFE',
      stats: {
        debt: 'US$ 30,4 Juta (Rp 500 Miliar)',
        age: 'Mantan CEO Asia Securities',
        lowest: 'Hari Pertama Jualan Sandwich US$ 14 (Rp 200 Rb)',
        action: 'Menelan Gengsi, Jualan Sandwich Jalanan Bangkok',
        result: 'Lunas 100%, Jaringan Gerai & Ikon Ketangguhan Asia'
      },
      timeline: [
        { year: '1990-an — Raja Finansial', text: 'Menjabat CEO Asia Securities di usia 28 tahun, mengelola jutaan dolar bursa saham, mobil mewah, dan resor Khao Yai.' },
        { year: '1997 — Krisis Moneter Asia', text: 'Nilai tukar Baht anjlok, bursa saham kolaps, dan proyek properti macet total meninggalkan utang US$ 30,4 juta (Rp 500 miliar).' },
        { year: 'Titik Terendah & Gugatan', text: 'Dinyatakan bangkrut total tahun 2003, aset disita, digugat kreditur di pengadilan, dan kehilangan seluruh kemewahan hidup.' },
        { year: 'Hari Pertama US$ 14', text: 'Menelan rasa gengsi dan turun ke trotoar jalanan Bangkok menjual sandwich dengan hasil hari pertama hanya US$ 14 (Rp 200.000).' },
        { year: '10 Tahun Perjuangan', text: 'Didampingi sang istri (Vilailuk), konsisten bangun jam 3 pagi membuat sandwich, membuka kios satu per satu, dan merambah rumah sakit.' },
        { year: 'Hari Ini — Lunas & Abadi', text: 'Seluruh utang Rp 500 miliar lunas, mendirikan jaringan Sirivat Sandwich dengan logo dolar-baht-IMF sebagai simbol ketangguhan mental.' }
      ],
      quote: 'Hidup saya berubah total dari miliarder menjadi pedagang jalanan. Tapi jika kita menelan rasa gengsi dan menolak untuk menyerah, tidak ada lubang utang yang terlalu dalam untuk dipanjat kembali.',
      quoteAuthor: 'Sirivat Voravetvuthikun, "The Sandwich Man" Bangkok',
      chapters: [
        {
          num: 1,
          title: 'Raja di Atas Panggung Finansial',
          paragraphs: [
            'Pada awal tahun 1990-an, nama Sirivat Voravetvuthikun adalah simbol kejayaan pasar modal Thailand. Di usia yang baru menginjak 28 tahun, ia telah dipercaya menduduki kursi Chief Executive Officer (CEO) Asia Securities.',
            'Ia adalah pialang saham papan atas yang pergerakan jarinya menentukan alur jutaan dolar setiap hari. Gaya hidupnya bergelimang kemewahan: deretan mobil sport Eropa, rumah mewah di kawasan elit, hingga proyek ambisius pembangunan kondominium dan resor golf di kawasan Taman Nasional Khao Yai.',
            'Bagi Sirivat kala itu, langit adalah batasnya. Ia merasa sebagai raja yang tak terkalahkan dan tidak pernah membayangkan bahwa takhta kemegahan itu bisa runtuh dalam sekejap mata.'
          ]
        },
        {
          num: 2,
          title: 'Badai Krisis Moneter 1997',
          paragraphs: [
            'Tahun 1994, riak-riak ketidakstabilan mulai mengguncang bursa efek Bangkok. Namun kepercayaan diri Sirivat yang tinggi membuatnya terus menambah pinjaman leverage perbankan untuk mendanai proyek propertinya.',
            'Puncaknya meletus pada pertengahan 1997 ketika Krisis Finansial Asia (Krisis Moneter Tom Yum Goong) menghantam dengan kekuatan tsunami. Nilai tukar Baht Thailand anjlok bebas, indeks saham terjun bebas, dan pasar properti membeku seketika.',
            'Seluruh investasi Sirivat menguap tanpa sisa. Yang tertinggal di pundaknya adalah tumpukan liabilitas yang mencengangkan: US$ 30,4 juta atau hampir Rp 500 miliar. Kreditur dan bank mengejarnya, menyita seluruh aset pribadinya, dan menyeretnya ke meja pengadilan dengan status pailit total.'
          ]
        },
        {
          num: 3,
          title: 'Hari Pertama yang Hanya US$ 14',
          paragraphs: [
            'Di ruang tamu kontrakannya yang sepi, Sirivat menatap tangannya. Dari seorang eksekutif berdasi sutra yang mengelola ratusan staf, kini ia tidak memiliki uang sepeser pun untuk membeli makan keluarga.',
            'Namun alih-alih meratapi nasib atau lari dari tanggung jawab, Sirivat mengambil keputusan yang menuntut keberanian luar biasa: menelan habis seluruh rasa gengsinya dan turun mengais rezeki di jalanan.',
            'Ia mengalungkan boks styrofoam berisi roti sandwich buatan rumah dan berdiri di trotoar jalanan Bangkok yang berdebu di bawah terik matahari. Pada hari pertamanya berjualan, dari pagi hingga petang, ia hanya berhasil mengumpulkan US$ 14 (sekitar Rp 200.000). Nominal yang begitu kecil dibandingkan tumpukan utang ratusan miliarnya, namun bernilai tak terhingga bagi harga dirinya.'
          ]
        },
        {
          num: 4,
          title: 'Sang Istri yang Menjadi Tiang Keteguhan',
          paragraphs: [
            'Di balik ketabahan Sirivat, ada sosok sang istri, Vilailuk, yang memilih untuk tidak berpaling. Melihat suaminya yang dulu dielu-elukan kini harus berteriak menjajakan roti di pinggir jalan, hatinya kerap tersayat.',
            'Namun Vilailuk selalu menepis rasa putus asa dengan prinsip baja: "Jika kami menyerah, tidak akan ada orang lain yang datang menolong. Apa pun yang terjadi, kami harus bergandengan tangan dan terus melangkah."',
            'Setiap malam usai anak-anak tertidur, pasangan suami istri ini berdiri berjam-jam di dapur sempit, mengiris tomat, selada, dan memanggang roti untuk disiapkan bagi pertempuran esok hari.'
          ]
        },
        {
          num: 5,
          title: '10 Tahun Menembus Fajar',
          paragraphs: [
            'Pemulihan finansial itu bukanlah cerita sulap semalam; Sirivat membutuhkan waktu 10 tahun penuh kesabaran dan keringat.',
            'Sepuluh tahun ia bangun sebelum fajar jam 3 pagi. Sepuluh tahun ia menahan tatapan iba maupun cibiran dari mantan rekan-rekan pialang saham yang melewatinya. Perlahan tapi pasti, integritas dan kelezatan sandwich buatannya memikat hati para dokter dan perawat di berbagai rumah sakit besar Bangkok.',
            'Dari satu boks gantung di leher, ia membuka kios kecil pertama. Dari kios, berkembang menjadi gerai-gerai di stasiun dan pusat perbelanjaan hingga lahir brand nasional "Sirivat Sandwich". Publik Thailand dengan bangga menjulukinya "Sirivat the Sandwich Man".'
          ]
        },
        {
          num: 6,
          title: 'Logo Dolar-Baht-IMF',
          paragraphs: [
            'Hari ini, seluruh beban utang US$ 30,4 juta (Rp 500 miliar) dari masa krisis moneter telah berhasil dilunasi 100% tuntas. Sirivat kembali berdiri tegak sebagai pengusaha kuliner yang sukses dan dihormati.',
            'Logo resmi perusahaannya dirancang dengan simbol yang sangat mendalam: memuat tanda Dolar Amerika ($), lambang mata uang Baht (฿), dan logo IMF. Bagi Sirivat, logo itu adalah pengingat abadi bahwa kesombongan materi bisa hancur seketika oleh krisis makro, tetapi keteguhan mental dan ketiadaan rasa gengsi akan selalu mampu membangun kembali martabat manusia.',
            'Sirivat Voravetvuthikun membuktikan kepada dunia bahwa kebangkrutan terparah sekalipun tidak pernah sanggup mematikan masa depan orang yang berani memulai kembali dari langkah paling sederhana.'
          ]
        }
      ],
      takeaways: [
        'Tanggalkan Gengsi Demi Bertahan Hidup: Menghapus rasa malu adalah langkah pertama untuk bangkit. Martabat sejati terletak pada kejujuran berusaha, bukan pada jabatan masa lalu.',
        'Ketabahan Jangka Panjang (10 Years Marathon): Menyelesaikan utang bernilai fantastis menuntut konsistensi harian tanpa henti, dimulai dari pencapaian US$ 14 per hari.',
        'Saling Mendukung Bersama Pasangan: Kekuatan mental pasangan adalah pilar terpenting yang mencegah keputusasaan saat seluruh aset dan relasi menghilang.',
        'Belajar dari Badai Finansial: Kelola risiko dengan bijak, hindari over-leverage yang spekulatif, dan selalu miliki rasa syukur yang membumi.'
      ]
    },
    {
      id: 'sritikah',
      featured: false,
      name: 'Eko Susanto & Dwi Rizky Setiawan',
      tagline: 'Dari Kontraktor Tambang Utang Rp 2 Miliar & Makan Nasi Garam Menjadi Eksportir Bakso Frozen ke Hong Kong',
      title: 'Dari Nasi Garam, Kini Ekspor ke Hong Kong',
      subtitle: 'Pendiri & Co-Founder Bakso Sritikah, Malang',
      origin: 'Malang, Jawa Timur',
      ageAtRebound: 'Dua Bersaudara',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia', 'global'],
      categoryLabel: 'Utang Rp 2 M & Modal Rp 120 Rb',
      badge: 'Ekspor Hong Kong & Pabrik 27 Karyawan',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rp 2 Miliar (Kontraktor Tambang)',
        age: 'Dua Bersaudara',
        lowest: 'Makan Nasi Goreng Garam Tanpa Lauk',
        action: 'Modal Rp 120.000 & Inovasi Bakso Frozen',
        result: 'Lunas 100%, Pabrik 27 Karyawan & Ekspor Hong Kong'
      },
      timeline: [
        { year: '2016 — Krisis Tambang', text: 'Usaha kontraktor tambang bangkrut total, meninggalkan beban utang minus hampir Rp 2 miliar dan cemoohan relasi.' },
        { year: 'Titik Terendah Nasi Garam', text: 'Berminggu-minggu hanya mampu makan nasi goreng dengan garam dan bawang karena ketiadaan uang beli lauk.' },
        { year: '2017 — Modal Rp 120 Ribu', text: 'Memulai dari dapur rumah membuat adonan bakso seharga Rp 120.000 dan berguru resep khas Malang ke sang paman.' },
        { year: 'Ujian & Pivot Frozen', text: 'Warung pertama bangkrut dalam 2 bulan; beralih fokus ke adonan mentah dan inovasi Bakso Frozen via online & Facebook.' },
        { year: 'Pelunasan Utang Rp 2 Miliar', text: 'Bisnis berkembang pesat, pesanan lintas pulau melonjak, dan seluruh utang Rp 2 miliar berhasil dilunasi 100% tuntas.' },
        { year: 'Hari Ini — Ekspor ke Hong Kong', text: 'Membangun pabrik modern berizin BPOM dengan 27 staf, rutin ekspor ke Hong Kong, dan tetap menjual porsi rakyat mulai Rp 2.000.' }
      ],
      quote: 'Jualan bakso berpuluh-puluh tahun pun kamu tidak akan pernah bisa melunasi utangmu. Tapi kami membuktikan, dengan tekad tidak menyerah dan modal Rp 120.000, jalan keluar selalu ada.',
      quoteAuthor: 'Eko Susanto & Dwi Rizky Setiawan, pendiri Bakso Sritikah',
      chapters: [
        {
          num: 1,
          title: 'Dua Bersaudara di Ujung Tanduk',
          paragraphs: [
            'Tahun 2016 menjadi masa paling kelam bagi Eko Susanto dan adik kandungnya, Dwi Rizky Setiawan. Di sebuah rumah kontrakan sederhana di Malang, keduanya duduk termenung menatap meja makan yang kosong.',
            'Di hadapan mereka hanya ada sepiring nasi goreng tanpa telur, tanpa daging, dan tanpa lauk—hanya nasi putih berbalut tumisan bawang dan taburan garam dapur. Itulah menu makanan mereka selama berminggu-minggu bukan karena selera, melainkan karena uang di saku benar-benar telah habis tak bersisa.',
            'Usaha pertama mereka sebagai kontraktor alat berat tambang mengalami kehancuran total. Kerugian operasional menumpuk hingga meninggalkan lubang utang minus hampir Rp 2 miliar. Teman dan rekan bisnis mencemooh di belakang, mencap mereka tidak akan pernah sanggup melunasi beban utang sebesar itu seumur hidup. Namun di mata Eko, api perjuangan menolak padam.'
          ]
        },
        {
          num: 2,
          title: 'Rp 120.000 dan Sebuah Adonan',
          paragraphs: [
            'Pertengahan 2017, Eko dan istrinya mengambil langkah nekat. Dengan sisa uang terakhir sebesar Rp 120.000 di dompet, mereka memutuskan untuk mencoba berjualan bakso dari dapur kontrakan.',
            'Karena modal yang teramat minim, mereka tidak langsung membuka warung matang. Eko membeli bahan dan menggiling satu adonan bakso saja untuk dijual mentah kepada orang lain. Niatnya sangat sederhana: jika adonannya laku, mereka bisa membeli beras; jika tersisa, adonan itu bisa dimasak sendiri agar tidak lagi makan nasi garam setiap hari.',
            'Untuk menyempurnakan kualitas, mereka menemui paman mereka yang telah berpengalaman sebagai pedagang bakso keliling untuk mempelajari formula bumbu dan tekstur bakso khas Malang yang kenyal alami. Mereka menamai usaha tersebut "Bakso Sritikah"—sebuah gabungan nama dari ibu kandung dan ibu mertua sebagai wujud doa restu orang tua.'
          ]
        },
        {
          num: 3,
          title: 'Jatuh, Bangun, Jatuh, Bangun',
          paragraphs: [
            'Jalan menuju pemulihan penuh liku terjal. Warung bakso fisik pertama yang mereka coba buka terpaksa gulung tikar dalam kurun waktu kurang dari dua bulan akibat sepinya pengunjung dan biaya sewa yang menekan.',
            'Alih-alih menyerah, kedua bersaudara ini melakukan evaluasi radikal. Mereka kembali fokus memproduksi adonan bakso berkualitas dan mulai menjajaki penjualan daring lewat grup-grup komunitas Facebook dan media sosial.',
            'Dari sanalah lahir inovasi penentu: "Bakso Frozen". Dengan mengemas bakso beku bersama bumbu kuah kaldu, bawang goreng, mie kering, dan sambal dalam kemasan higienis, produk mereka mampu dikirim ke berbagai kota tanpa risiko basi. Pesanan pun mulai membanjir dari berbagai pelosok Nusantara.'
          ]
        },
        {
          num: 4,
          title: 'Lunas Rp 2 Miliar',
          paragraphs: [
            'Kerja keras tanpa henti siang dan malam mulai membuahkan hasil manis. Permintaan pasar terhadap Bakso Sritikah Frozen melonjak eksponensial. Dari produksi manual di dapur rumah, kapasitas produksi merangkak naik hingga ratusan kilogram per hari.',
            'Arus kas yang sehat dialokasikan secara disiplin untuk membayar cicilan pokok para kreditur satu per satu. Hingga suatu hari yang mengharukan, seluruh tumpukan utang Rp 2 miliar dari masa lalu kontraktor tambang dinyatakan LUNAS 100%.',
            'Eko dan Dwi tersenyum mengingat cemoohan orang-orang di masa lalu. Mereka membuktikan bahwa kehormatan yang hilang akibat kebangkrutan bisa direbut kembali lewat keringat, ketekunan, dan kejujuran.'
          ]
        },
        {
          num: 5,
          title: 'Dari Malang Melintasi Samudra ke Hong Kong',
          paragraphs: [
            'Hari ini, Bakso Sritikah telah berdiri kokoh dengan pabrik pengolahan modern sendiri di Malang dan mempekerjakan 27 orang karyawan. Seluruh lini produk telah mengantongi izin edar BPOM dan sertifikasi halal resmi.',
            'Kelezatan bakso khas Malang racikan dua bersaudara ini kini melintasi samudra, menjadi komoditas ekspor rutin yang digemari para pekerja migran dan konsumen di Hong Kong.',
            'Meski telah menjadi eksportir sukses, Eko dan Dwi tidak pernah melupakan getirnya masa-masa makan nasi garam. Di gerai lokalnya, mereka tetap menyediakan porsi bakso dengan harga mulai Rp 2.000 agar siapa pun yang sedang berada di titik terendah tetap bisa menikmati semangkuk bakso hangat dengan harga yang manusiawi.'
          ]
        }
      ],
      takeaways: [
        'Mulai dari Skala Mikro (Rp 120 Ribu): Jangan menunggu modal besar untuk bangkit. Satu adonan terkecil yang dieksekusi hari ini jauh lebih bernilai dari rencana besar yang tertunda.',
        'Inovasi Daya Tahan (Bakso Frozen): Mentransformasikan produk makanan matang harian menjadi produk beku higienis memperluas jangkauan pasar hingga skala ekspor lintas negara.',
        'Rendah Hati Menimba Ilmu (Mentorship): Meminta bimbingan dari praktisi yang lebih berpengalaman menghemat waktu dan mencegah kegagalan formula produk.',
        'Tetap Membumi dan Peduli: Mengingat masa sulit membuat bisnis memiliki jiwa, salah satunya dengan tetap menyediakan produk yang terjangkau bagi masyarakat kecil.'
      ]
    },
    {
      id: 'dian',
      featured: false,
      name: 'Dian Agustin',
      tagline: 'Dari 350 Cabang Bisnis Bangkrut & Utang Rp 500 Juta Menjadi Pendiri Kerajaan Sambal Alu 150 Karyawan',
      title: 'Dari Bedeng Sederhana ke Kerajaan Sambal',
      subtitle: 'Pendiri & Owner Sambal Alu, Bandar Lampung',
      origin: 'Bandar Lampung, Lampung',
      ageAtRebound: 'Ibu 2 Anak',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 500 Jt & Bedeng',
      badge: '150 Karyawan & Sukses Berkah',
      theme: 'amber',
      accentColor: '#EA580C',
      bgLight: '#FFF7ED',
      borderLight: '#FFEDD5',
      stats: {
        debt: 'Rp 500 Juta (Bisnis Runtuh)',
        age: 'Ibu 2 Anak',
        lowest: 'Tinggal di Bedeng dengan Modal Rp 100.000',
        action: 'Uji Ngangenin & Peluncuran Sambal Alu 2017',
        result: '150 Karyawan & Fasilitas Umrah Berkah'
      },
      timeline: [
        { year: 'Awal Perjuangan', text: 'Merantau ke Solo, bekerja sebagai kapster salon dan asisten rumah tangga demi membiayai kuliah.' },
        { year: 'Puncak Kejayaan Awal', text: 'Membangun 12 merek kuliner berbeda, termasuk waralaba pizza yang meroket hingga 350 cabang di seluruh Indonesia.' },
        { year: 'Prahara & Kehancuran', text: 'Prahara rumah tangga berujung kebangkrutan total. Seluruh 350 cabang runtuh seketika dengan sisa utang Rp 500 juta.' },
        { year: 'Titik Terendah Bedeng', text: 'Tinggal di bedeng sederhana bersama 2 anaknya dengan sisa uang Rp 100.000, depresi berat hingga terbersit ingin mengakhiri hidup.' },
        { year: '2017 — Lahirnya Sambal Alu', text: 'Bangkit berserah kepada Tuhan, meramu saripati ilmu bisnisnya, melakukan "Uji Ngangenin", dan meluncurkan Sambal Alu di Lampung.' },
        { year: 'Hari Ini — Sukses Berkah', text: 'Memimpin kerajaan kuliner Sambal Alu dengan 150 karyawan, melunasi seluruh utang, dan memberi fasilitas umrah serta beasiswa anak karyawan.' }
      ],
      quote: 'Kita terlalu fokus dengan hati manusia tapi lupa dengan siapa yang membuat hati. Saya hanya ingin mencari sukses berkah—sukses yang mendatangkan ketenangan, kebahagiaan, serta kebermanfaatan dunia dan akhirat.',
      quoteAuthor: 'Dian Agustin, pendiri Sambal Alu',
      chapters: [
        {
          num: 1,
          title: 'Perempuan dari Tanah Sederhana',
          paragraphs: [
            'Dian Agustin lahir dari keluarga yang sangat sederhana. Ia tumbuh dengan tekad baja untuk mengangkat harkat dan martabat orang tuanya melalui jalur pendidikan.',
            'Masa kecilnya penuh dengan keterbatasan. Ia pernah hidup menumpang di rumah kerabat tanpa memiliki fasilitas toilet pribadi. Namun kondisi serba kekurangan itu tidak mematahkan semangatnya, melainkan menjadi cambuk motivasi terbesar dalam hidupnya.',
            'Dengan tekad mandiri, ia merantau ke Solo. Demi membiayai kuliahnya sendiri, Dian bekerja membanting tulang sebagai kapster salon hingga asisten rumah tangga. Tangannya yang dulu telaten memijat kepala dan menyapu lantai orang lain, kelak akan memegang ulekan cobek untuk membangun kerajaan bisnis sambalnya sendiri.'
          ]
        },
        {
          num: 2,
          title: '350 Cabang yang Runtuh dalam Sekejap',
          paragraphs: [
            'Setelah lulus kuliah dan sempat berkarier sebagai penyiar radio, Dian memberanikan diri terjun total ke dunia wirausaha kuliner. Naluri bisnisnya terbukti tajam.',
            'Ia berhasil meluncurkan 12 merek kuliner berbeda. Salah satu mahakaryanya adalah waralaba pizza lokal yang meroket dahsyat hingga memiliki 350 cabang di berbagai kota di seluruh Indonesia. Dari seorang gadis desa yang serba kekurangan, namanya melambung sebagai pengusaha wanita yang diperhitungkan.',
            'Namun badai kehidupan datang tanpa permisi. Prahara dalam kehidupan rumah tangganya memicu perpecahan manajemen yang menghancurkan fondasi bisnisnya seketika. 350 cabang yang dulu ramai mendadak gulung tikar satu per satu. Bangkrut total tanpa sisa.'
          ]
        },
        {
          num: 3,
          title: 'Rp 100.000 di Sebuah Bedeng Sederhana',
          paragraphs: [
            'Kejatuhan itu melempar Dian ke titik paling kelam dalam hidupnya. Ia mendapati dirinya tinggal di sebuah bedeng sempit dan sederhana bersama kedua anaknya yang masih kecil.',
            'Di dalam sakunya, uang yang tersisa hanya selembar uang Rp 100.000 untuk membeli makan esok hari, sementara di pundaknya membayangi tumpukan utang bisnis sebesar Rp 500 juta yang terus ditagih.',
            'Depresi berat merenggut ketenangan harinya. Dalam keputusasaan yang sunyi menatap masa depan kedua anaknya, untuk pertama kali dalam hidupnya, terbersit bisikan gelap untuk mengakhiri hidup karena merasa tidak tahu lagi harus melangkah ke mana.'
          ]
        },
        {
          num: 4,
          title: 'Tamparan yang Menyadarkan',
          paragraphs: [
            'Di tengah kegelapan yang mencekam itu, seorang sahabat datang dan memberinya sebuah tamparan kata-kata yang menusuk sanubari: "Kamu sampai kapan mau menangis? Yang kamu tangisi sedang bersenang-senang di luar sana, sementara kamu menghancurkan dirimu dan masa depan anak-anakmu!"',
            'Kata-kata keras itu bagai kilat yang menyambar kesadarannya. Dian tersentak menangis tersedu-sedu. Ia menyadari kesalahannya selama ini: ia terlalu bergantung pada sanjungan dan cinta manusia, hingga lupa pada Sang Pencipta yang memegang kendali atas segala takdir.',
            'Dian bersujud memasrahkan seluruh hidup dan air matanya. Ketenangan batin yang luar biasa merayap ke dalam jiwanya. Dengan hati yang lapang dan kepala dingin, ia memutuskan untuk bangkit bertarung sekali lagi.'
          ]
        },
        {
          num: 5,
          title: 'Sambal Alu dan "Uji Ngangenin"',
          paragraphs: [
            'Dian tidak memulai dari nol; ia memulai dari saripati ilmu dan pengalaman mahal dari 12 brand yang pernah ia bangun sebelumnya. Pada tahun 2017 di Bandar Lampung, lahirlah brand "Sambal Alu".',
            'Ia mempopulerkan konsep nasi liwet hangat dengan sambal ulek segar makan sepuasnya via penjualan daring dan gerai makan. Sebelum peluncuran besar, Dian menerapkan metode "Uji Ngangenin"—ia membagikan ratusan porsi sambal gratis kepada masyarakat untuk memvalidasi tingkat kepuasan dan daya beli ulang (repeat order).',
            'Respons pasar meledak. Cita rasa sambalnya yang gurih, pedas pas, dan bikin rindu membuat antrean pembeli mengular panjang setiap hari. Sambal Alu menjadi fenomena kuliner baru di Lampung.'
          ]
        },
        {
          num: 6,
          title: 'Sukses Berkah',
          paragraphs: [
            'Hari ini, Sambal Alu telah bertransformasi menjadi kerajaan kuliner megah dengan mempekerjakan sekitar 150 orang karyawan. Seluruh sisa utang Rp 500 juta di masa lalu telah lunas terbayar tuntas.',
            'Namun kebanggaan terbesar Dian adalah pergeseran visinya: bukan lagi sekadar mengejar profit duniawi, melainkan mewujudkan "Sukses Berkah". Dian menyediakan program kemudahan umrah bagi para stafnya, standar gaji di atas rata-rata industri, hingga fasilitas beasiswa pendidikan bagi anak-anak karyawan.',
            'Dian Agustin membuktikan bahwa dari bedeng tersempit dengan sisa Rp 100.000 sekalipun, seorang ibu yang berserah pada Tuhan dan pantang menyerah mampu membangun kembali peradaban bisnis yang memuliakan ratusan keluarga.'
          ]
        }
      ],
      takeaways: [
        'Modal Pengalaman Lebih Berharga dari Uang: Bangkrutnya bisnis lama tidak menghapus ilmu strategimu. Jadikan kegagalan sebagai saripati fondasi bisnis baru.',
        'Validasi Produk ("Uji Ngangenin"): Bagikan sampel gratis ke ratusan calon pelanggan untuk memastikan produkmu benar-benar dicintai pasar sebelum ekspansi.',
        'Berserah Diri Mengusir Depresi: Ketenangan batin dari Sang Pencipta adalah kunci pemulihan akal sehat dari jeratan utang dan trauma kegagalan.',
        'Visi Sukses Berkah: Keberhasilan tertinggi dalam bisnis adalah seberapa banyak keberkahan dan kesejahteraan yang kita bagikan kepada karyawan dan sesama.'
      ]
    },
    {
      id: 'rini',
      featured: false,
      name: 'Rini Sudarwanti',
      tagline: 'Dari Jeratan Rentenir Harian Menjadi Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur',
      title: 'Gitar yang Bersuara Harapan',
      subtitle: 'Ibu Rumah Tangga & Pengrajin Gitar Asal Indonesia (Binaan PNM Mekaar)',
      origin: 'Indonesia',
      ageAtRebound: 'Ibu Rumah Tangga',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Jeratan Rentenir',
      badge: '50 Besar Mekaarpreneur & Beasiswa Anak',
      theme: 'rose',
      accentColor: '#BE123C',
      bgLight: '#FFF1F2',
      borderLight: '#FECDD3',
      stats: {
        debt: 'Utang Rentenir Harian (Bunga Menggunung)',
        age: 'Ibu Rumah Tangga',
        lowest: 'Dapur Makanan Sepi & Teror Tagihan Tiap Hari',
        action: 'Pelatihan PNM Mekaar & Produksi Gitar Handmade',
        result: '50 Besar Mekaarpreneur & Beasiswa Pendidikan Anak'
      },
      timeline: [
        { year: '2021 — Krisis Usaha Makanan', text: 'Usaha makanan matang sepi pembeli drastis. Kebutuhan keluarga mendesak hingga terpaksa meminjam uang dari rentenir harian.' },
        { year: 'Titik Terendah', text: 'Bunga rentenir menggunung tak terkendali. Tagihan datang setiap hari diiringi ketakutan luar biasa atas masa depan anak-anak.' },
        { year: '2023 — Titik Balik PNM', text: 'Mendapat pembiayaan modal dan pelatihan pemberdayaan usaha dari PNM Mekaar, lalu beralih ke kerajinan gitar handmade.' },
        { year: '2024–2025 — Diversifikasi', text: 'Memproduksi gitar kayu pilihan dengan ketelitian tinggi dan mengembangkan layanan menjadi AgenBRILink Mekaar.' },
        { year: '2026 — Rebound & Harapan', text: 'Masuk 50 besar Mekaarpreneur 2026 dan anak tercinta meraih Beasiswa Pendidikan PNM untuk masa depan yang cerah.' }
      ],
      quote: 'Saat itu saya benar-benar merasa berat. Usaha sedang sepi, sementara tagihan terus datang. Saya hanya ingin anak saya punya masa depan yang lebih baik dari saya.',
      quoteAuthor: 'Rini Sudarwanti, pengrajin gitar handmade & 50 besar Mekaarpreneur 2026',
      chapters: [
        {
          num: 1,
          title: 'Ibu yang Berjuang Sendiri',
          paragraphs: [
            'Rini Sudarwanti bukanlah perempuan kaya. Ia hanyalah seorang ibu rumah tangga biasa yang bertekad menghidupi keluarganya dengan keringat dan tangannya sendiri.',
            'Setiap pagi buta sebelum matahari terbit, ia sudah sibuk di dapur menyiapkan dagangan makanan matang, berharap hari itu akan membawa rezeki berkah untuk anak-anaknya. Usaha kuliner kecilnya itu adalah satu-satunya urat nadi penghidupan keluarga.',
            'Namun tahun 2021 datang dengan ujian yang begitu keras. Pembeli sepi drastis. Meja dagangannya yang dulu ramai mendadak lengang, sementara kebutuhan dapur dan biaya sekolah anak-anak tidak pernah bisa ditunda. Dalam kepanikan dan keterdesakan, Rini mengambil langkah yang berisiko.'
          ]
        },
        {
          num: 2,
          title: 'Jeratan Rentenir yang Mencekam',
          paragraphs: [
            'Di tengah keputusasaan, Rini terjerat dalam lingkaran setan pinjaman rentenir harian. Awalnya ia hanya meminjam nominal kecil untuk menutup belanja kebutuhan sehari-hari.',
            'Namun bunga harian yang mencekik membuat tagihannya menggunung dalam hitungan bulan. Satu tagihan menumpuk di atas tagihan lainnya. Setiap hari, para penagih rentenir datang silih berganti mengetuk pintu rumahnya, membuat Rini hidup dalam teror dan ketakutan yang mendalam.',
            'Malam-malam panjang dihabiskan dengan rasa gelisah. Menatap wajah anak-anaknya yang terlelap tenang, air matanya menetes di atas bantal: "Bagaimana caraku memberimu masa depan yang layak, Nak?"'
          ]
        },
        {
          num: 3,
          title: 'Tangan yang Tak Pernah Berhenti Bekerja',
          paragraphs: [
            'Rini tahu, menyerah dan larut dalam ratapan bukanlah pilihan bagi seorang ibu. Di tengah keterpurukan itu, seberkas cahaya harapan datang melalui program pembiayaan dan pendampingan kelompok PNM Mekaar.',
            'Bukan hanya modal usaha terjangkau yang ia dapatkan, melainkan juga pelatihan keterampilan dan manajemen usaha. Didorong oleh tekad bangkit, Rini melihat peluang baru yang bernilai tambah tinggi: kerajinan gitar handmade dari kayu pilihan.',
            'Ia mulai belajar memegang pahat, mengukir kayu, menghaluskan lekukan bodi gitar dengan ampelas, hingga menyetel senar agar menghasilkan nada yang merdu. Tangannya yang dulu memegang wajan penggorengan kini berlumuran serbuk kayu, namun satu hal tidak pernah berubah: tangannya tidak pernah berhenti bekerja.'
          ]
        },
        {
          num: 4,
          title: 'Gitar yang Bersuara Harapan & AgenBRILink',
          paragraphs: [
            'Dari satu unit gitar pertama yang laku terjual, pesanan mulai mengalir dari para pecinta musik lokal. Gitar buatannya dikenal memiliki sentuhan artistik yang rapi dan suara yang jernih.',
            'Tak berhenti di situ, untuk memperkuat arus kas hariannya, Rini juga mengembangkan usahanya dengan menjadi AgenBRILink Mekaar. Melalui layanan transfer dan pembayaran perbankan bagi warga sekitar, ia tidak hanya membantu ekonomi keluarganya, tapi juga memudahkan transaksi di lingkungannya.',
            'Kerja keras dan ketulusan Rini membuahkan apresiasi bergengsi: pada tahun 2026, namanya resmi terpilih masuk dalam jajaran 50 Besar Mekaarpreneur 2026 sebagai inspirasi pelaku UMKM perempuan tangguh.'
          ]
        },
        {
          num: 5,
          title: 'Beasiswa Pendidikan untuk Sang Buah Hati',
          paragraphs: [
            'Namun puncak kebahagiaan terbesar Rini bukanlah piala atau piagam penghargaan. Pada tahun 2026, anaknya berhasil lolos dan menerima Beasiswa Pendidikan PNM—sebuah anugerah yang selama ini hanya berani ia impikan dalam doa-doa malamnya.',
            'Rini menangis haru saat menerima pengumuman beasiswa tersebut. Rasa takut dan kepedihan akibat jeratan rentenir di masa lalu kini telah terbayar lunas dengan masa depan pendidikan anak yang terjamin.',
            'Satu senar demi satu senar, satu gitar demi satu gitar, Rini Sudarwanti membuktikan bahwa seorang ibu tidak akan pernah benar-benar jatuh—selama ada cinta untuk anak yang menunggunya di rumah.'
          ]
        }
      ],
      takeaways: [
        'Hentikan Pinjaman Rentenir Harian & Cari Pembiayaan Terbina: Bunga harian rentenir merusak arus kas; carilah pembiayaan resmi mikro terbina (seperti PNM Mekaar / KUR).',
        'Keterampilan Bernilai Tinggi Mengubah Nasib: Mempelajari keahlian baru (membuat instrumen gitar) menciptakan produk bernilai tambah tinggi dengan margin lebih sehat.',
        'Diversifikasi Arus Kas di Komunitas: Menggabungkan produksi kerajinan dengan keagenan transaksi (AgenBRILink) memperkuat stabilitas kas harian.',
        'Kekuatan Niat Tulus Orang Tua demi Pendidikan Anak: Keteguhan hati seorang ibu untuk tidak menyerah menjadi bahan bakar tak terbatas untuk bangkit dari titik terendah.'
      ]
    },
    {
      id: 'catur',
      featured: false,
      name: 'Muhammad Catur Gunandi (Mister Catur)',
      tagline: 'Dari Utang Rp 2,5 Miliar & Tidur di Masjid Menjadi Pemilik CG Corporation — 20 Unit Bisnis, Omzet Triliunan',
      title: 'Cireng di Tangan Lulusan ITB yang Tidur di Masjid',
      subtitle: 'Pendiri & Pemilik CG Corporation, Bandung — Lulusan Teknik Penerbangan ITB 2006',
      origin: 'Bandung, Jawa Barat',
      ageAtRebound: '25 Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 2,5 M',
      badge: 'CG Corporation — 20+ Unit Bisnis',
      theme: 'indigo',
      accentColor: '#4338CA',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 2,5 Miliar (Usia 25 Thn)',
        age: '25 Tahun',
        lowest: 'Tidur di Masjid & Berpuasa karena Tak Ada Uang Makan',
        action: 'Cireng Bumbu Rujak < Rp 1 Juta',
        result: 'CG Corporation — 20+ Unit Bisnis, Omzet Triliunan'
      },
      timeline: [
        { year: 'SD–SMA', text: 'Jiwa bisnis tumbuh sejak kecil — menjual kelereng hasil kemenangan, berjualan fotokopi saat SMP dan SMA.' },
        { year: '2006 — ITB', text: 'Lulus dari Teknik Penerbangan ITB. Sebelum wisuda, sudah diterima bekerja di Astra untuk belajar langsung dunia bisnis.' },
        { year: 'Usia 25 Thn — Kejatuhan', text: 'Rekan bisnis tidak amanah, kabur meninggalkan utang Rp 2,5 miliar. Rumah, mobil, tabungan — semua habis terjual.' },
        { year: 'Titik Terendah', text: 'Tidur di masjid karena tidak punya tempat tinggal. Berpuasa bukan karena ibadah, tapi karena tidak punya uang untuk makan.' },
        { year: 'Bangkit — Cireng < Rp 1 Juta', text: 'Bersama teman lama, memulai usaha cireng bumbu rujak dengan modal kurang dari Rp 1 juta. Konsistensi dan sedekah menjadi prinsip utama.' },
        { year: 'Hari Ini — Rebound', text: 'Memimpin CG Corporation dengan lebih dari 20 unit bisnis lintas sektor — dari konsultan syariah, migas, hingga LNG mini pertama di Indonesia. Omzet triliunan rupiah.' }
      ],
      quote: 'Saya selalu bilang ke tim, bisnis ini bukan hanya untuk kita, tapi untuk umat. Kalau rezeki kita titipkan lewat sedekah, maka manfaatnya lebih luas.',
      quoteAuthor: 'Muhammad Catur Gunandi, pendiri CG Corporation',
      chapters: [
        {
          num: 1,
          title: 'Anak Bandung yang Berjualan Sejak SD',
          paragraphs: [
            'Bandung, 1984. Muhammad Catur Gunandi lahir dari keluarga kelas menengah. Sejak kecil, ia sudah memiliki jiwa bisnis yang menggeliat. Di bangku Sekolah Dasar, setiap kali ia menang bermain kelereng, ia menjual hasil kemenangannya kepada teman-teman. Saat SMP dan SMA, ia mulai berjualan fotokopi materi pelajaran.',
            '"Saya memang senang cari tambahan uang. Dari SD sampai kuliah selalu ada yang saya jual," kenangnya kemudian.',
            'Setelah lulus dari Teknik Penerbangan ITB pada 2006, Catur hijrah ke Jakarta. Bahkan sebelum resmi menyelesaikan studinya, ia sudah diterima bekerja di perusahaan ternama, Astra. Di sana ia belajar banyak tentang dunia bisnis — dari pengembangan produk hingga manajemen pemasok. Tapi Catur tidak ingin menjadi karyawan selamanya. "Saya sengaja kerja, bukan karena ingin jadi karyawan, tapi untuk belajar. Karena ilmu itu tidak bisa kita dapat hanya dari membaca buku, tapi dari pengalaman langsung," ujarnya.'
          ]
        },
        {
          num: 2,
          title: 'Rp 2,5 Miliar di Usia 25 Tahun',
          paragraphs: [
            'Sambil bekerja, Catur merintis bisnis. Salah satunya adalah perusahaan konstruksi. Perusahaan itu berkembang. Catur merasa berada di jalur yang benar. Tapi nasib berkata lain.',
            'Rekan bisnisnya tidak amanah. Uang yang seharusnya dibayarkan ke supplier, dipakai untuk trading. Lalu rekannya kabur — meninggalkan Catur dengan beban yang tak terbayangkan: Rp 2,5 miliar utang.',
            '"Saat itu usia saya 25 tahun, anak baru lahir, untung istri mendukung saya. Jadi jual apa pun yang bisa dijual untuk menutup utang," kenangnya. Ia menjual rumah, menjual mobil, menjual tabungan, menjual semua yang ia miliki. Tapi tetap tidak cukup. "Bayangkan, saya punya utang Rp 2,5 miliar, sementara uang di tangan tidak ada. Anak baru lahir, istri butuh biaya, tapi saya tidak bisa apa-apa. Rasanya seperti dunia runtuh," ujarnya dengan suara berat.'
          ]
        },
        {
          num: 3,
          title: 'Tidur di Masjid, Berpuasa Tanpa Makan',
          paragraphs: [
            'Catur kehilangan segalanya. Termasuk tempat tinggal. Ia tidur di masjid — bukan karena ingin mendekatkan diri, tapi karena tidak punya tempat lain.',
            'Untuk makan, ia bergantung pada belas kasih orang lain. Bahkan, ada kalanya ia berpuasa bukan karena ibadah, tapi karena tak punya uang untuk makan. Kadang berbuka hanya dengan air putih. "Itu masa yang paling berat dalam hidup saya," ujarnya.',
            'Di titik terendah itu, ia sempat merasa putus asa. Tapi istrinya selalu berada di sisinya. "Istri saya selalu bilang, jangan menyerah, kita masih punya Allah. Kalimat itu yang membuat saya tetap kuat," kenang Catur. Dalam kegelapan itu, ia memilih untuk tidak lari. Ia memilih untuk bertahan dan mencari celah sekecil apa pun untuk bangkit.'
          ]
        },
        {
          num: 4,
          title: 'Cireng Bumbu Rujak dan Modal Kurang dari Rp 1 Juta',
          paragraphs: [
            'Kebangkitan Mister Catur dimulai dari langkah yang sangat sederhana. Ia menggandeng teman lamanya untuk memulai usaha cireng bumbu rujak. Modal awalnya? Kurang dari Rp 1 juta.',
            '"Tapi saya jalani dengan serius, tidak main-main. Dari situlah saya belajar bahwa rezeki bisa datang dari pintu yang tidak kita sangka," jelasnya. Ia juga menerapkan prinsip yang menjadi kunci bangkitnya: konsistensi, berbagi rezeki lewat sedekah, dan menjalankan bisnis sesuai syariat Islam.',
            '"Saya belajar, setiap kali saya sisihkan minimal 10% dari omzet untuk sedekah, justru Allah lipatgandakan rezeki saya. Jadi saya jadikan itu prinsip hidup," katanya. Usaha cirengnya berkembang pesat. Dari sekadar jualan makanan ringan, ia mulai merambah sektor lain — satu demi satu, dengan modal yang terus berputar dan kepercayaan yang dibangun dari nol.'
          ]
        },
        {
          num: 5,
          title: 'CG Corporation dan Omzet Triliunan',
          paragraphs: [
            'Hari ini, Mister Catur bukan lagi pemuda yang tidur di masjid dengan utang Rp 2,5 miliar. Ia memimpin CG Corporation — sebuah perusahaan yang menaungi lebih dari 20 unit bisnis. Mulai dari konsultan syariah, distribusi bahan bakar, material komposit, retail, pertambangan, migas, logistik, hingga memiliki LNG mini pertama di Indonesia.',
            'Jaringan usahanya sudah menembus pasar internasional. Omzetnya mencapai triliunan rupiah. "Alhamdulillah, saya tidak pernah menyangka bisa sampai di titik ini. Dulu saya hanya ingin bisa makan tiga kali sehari. Sekarang Allah titipkan bisnis besar. Itu semua bukan karena saya hebat, tapi karena pertolongan Allah," ungkapnya dengan rendah hati.',
            'Meski sukses besar, Mister Catur tidak melupakan pengalaman pahit di masa lalu. Ia menjadikannya pengingat untuk tetap rendah hati dan tidak serakah. Bahkan, sebagian unit usahanya ia serahkan sepenuhnya untuk kegiatan sosial. "Saya ingin pengalaman saya menjadi pelajaran. Bahwa jatuh itu biasa, tapi bangkit dan bermanfaat, itu yang luar biasa," tutupnya.'
          ]
        }
      ],
      takeaways: [
        'Pilih Mitra Bisnis dengan Amanah: Pengkhianatan rekan bisnis adalah jebakan paling mahal. Uji karakter calon mitra sebelum mempercayakan uang dan nama baikmu.',
        'Modal Kecil & Mulai Sekarang: Cireng di bawah Rp 1 juta membuktikan bahwa bukan besarnya modal yang menentukan, melainkan kecepatan eksekusi dan konsistensi harian.',
        'Sedekah Minimal 10% dari Omzet sebagai Sistem: Menjadikan sedekah bukan opsi tapi kewajiban tetap membuat bisnis terasa lebih ringan dan rezeki lebih terbuka.',
        'Dukungan Keluarga adalah Bahan Bakar Bertahan: Di titik paling gelap, satu kalimat penguatan dari orang terdekat bisa menjadi sumber tenaga untuk bangkit.'
      ]
    },
    {
      id: 'nani',
      featured: false,
      name: 'Nani Kurniasari',
      tagline: 'Dari Utang Rp 2 Miliar & Perceraian Menjadi Pengusaha Selai Caramel Omzet Rp 4 Juta Per Hari',
      title: 'Selai Caramel Rp 200 Ribu yang Melunasi Utang Rp 2 Miliar',
      subtitle: 'Pengusaha Selai Caramel, Jakarta — Bangkit dari Nol Setelah Katering Bangkrut & Perceraian',
      origin: 'Jakarta',
      ageAtRebound: '30-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 2 M',
      badge: 'Omzet Rp 4 Juta / Hari',
      theme: 'amber',
      accentColor: '#B45309',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Hampir Rp 2 Miliar',
        age: '30-an Tahun',
        lowest: 'Katering Bangkrut, Cerai, 3 Tahun Tanpa Pekerjaan',
        action: 'Selai Caramel — Modal Rp 200 Ribu',
        result: '300 Toples/Hari, Omzet Rp 4 Juta/Hari, Lunas'
      },
      timeline: [
        { year: '2003', text: 'Merintis usaha katering di Jakarta. Tujuh tahun berjuang penuh keringat dan kerja keras membangun bisnis.' },
        { year: '2010 — Kejatuhan', text: 'Usaha katering bangkrut meninggalkan utang hampir Rp 2 miliar. Bersamaan, suaminya meninggalkannya.' },
        { year: '2010–2013', text: 'Tiga tahun tanpa pekerjaan — mengandalkan bantuan keluarga untuk bertahan hidup.' },
        { year: '2014 — Titik Balik', text: 'Mengikuti program life coach untuk self healing. Mendapat tugas "menghasilkan sebuah karya" yang mengubah arah hidupnya.' },
        { year: 'Modal Rp 200 Ribu', text: 'Membuat 4 sampel selai caramel. Hanya 1 yang lolos. Awal hanya 10 toples seminggu, sering tidak habis.' },
        { year: 'Hari Ini — Rebound', text: 'Produksi 300 toples per hari. Omzet Rp 4 juta per hari. Utang Rp 2 miliar telah lunas. Bermimpi membangun "Rumah Selai".' }
      ],
      quote: 'Fokus untuk kerjakan satu. Walaupun hasilnya kecil, tapi harus ditekuni.',
      quoteAuthor: 'Pesan life coach Nani Kurniasari yang mengubah cara pandangnya',
      chapters: [
        {
          num: 1,
          title: 'Wanita yang Kehilangan Segalanya',
          paragraphs: [
            'Tahun 2010. Nani Kurniasari duduk di ruang tamu rumahnya yang mulai sepi. Usaha katering yang telah ia rintis sejak 2003 — tujuh tahun penuh keringat dan kerja keras — kini tinggal kenangan. Bangkrut. Dan yang tersisa hanyalah utang hampir Rp 2 miliar.',
            'Tapi pukulan terberat belum selesai. Di saat ia paling membutuhkan sandaran, suaminya pergi meninggalkannya. Nani terjatuh ke jurang yang paling dalam. Dari 2010 hingga 2013, ia tidak memiliki pekerjaan sama sekali. Hari-harinya dihabiskan dalam kehampaan, mengandalkan pemberian keluarga untuk sekadar bisa bertahan hidup.',
            'Di momen-momen paling sunyi itu, Nani merasakan bukan hanya kehilangan materi — tapi juga kehilangan identitas dirinya sebagai pengusaha, sebagai istri, sebagai orang yang mandiri. Namun di dalam dirinya, ada keyakinan kecil yang menolak untuk padam: bahwa ini bukan akhir dari segalanya.'
          ]
        },
        {
          num: 2,
          title: 'Self Healing dan Sebuah Tugas',
          paragraphs: [
            'Tahun 2014. Nani mulai mencoba bangkit dengan berjualan hijab. Tapi itu belum cukup. Ia masih membawa luka dan beban yang terlalu berat. Kemudian, ia mengikuti program life coach untuk self healing. Di sanalah ia mendapat sebuah tugas yang mengubah hidupnya: menghasilkan sebuah karya.',
            'Nani berpikir. Ia suka memasak. Tapi katering — yang dulu menjadi sumber kejatuhannya — terlalu ribet dengan peralatan yang banyak, modal yang besar, dan risiko operasional yang tinggi. Ia tidak mau kembali ke jalan yang sama.',
            'Lalu ia teringat pada sesuatu yang sederhana: selai caramel. "Ini mudah. Bisa dikerjakan sendiri," pikirnya. Tidak butuh dapur besar. Tidak butuh tim yang banyak. Hanya butuh gula, susu, wajan, dan ketekunan.'
          ]
        },
        {
          num: 3,
          title: '4 Sampel dan Hanya 1 yang Lolos',
          paragraphs: [
            'Dengan modal hanya Rp 200 ribu untuk bahan baku dan toples, Nani memulai percobaannya. Ia membuat 4 sampel selai. Tapi hasilnya mengecewakan — hanya 1 yang layak dijual. Sisanya pahit, teksturnya salah, rasanya jauh dari yang diharapkan.',
            'Di sinilah pesan sang life coach menjadi kompas: "Fokus untuk kerjakan satu. Walaupun hasilnya kecil, tapi harus ditekuni." Nani tidak terburu-buru. Ia tidak menyerah karena 3 dari 4 sampelnya gagal. Ia justru memeluk satu yang berhasil itu dengan sepenuh hati.',
            'Ia fokus pada satu rasa: selai caramel. Awalnya, usahanya berjalan sangat lambat. Seminggu hanya bisa menjual 10 toples — itu pun tidak selalu habis. Kadang ia hanya menatap toples-toples berisi selai itu dengan harap-harap cemas, menunggu ada yang mau membeli.'
          ]
        },
        {
          num: 4,
          title: 'Dari 10 Toples Seminggu Menjadi 300 Toples Sehari',
          paragraphs: [
            'Perlahan, pelanggan mulai berdatangan. Dari mulut ke mulut. Dari unggahan di Facebook, Instagram, dan Twitter. Satu toples berpindah tangan, lalu dua, lalu sepuluh, lalu seratus. Rasa yang konsisten dan kemasan yang rapi membuat selai caramel Nani semakin dikenal.',
            'Nani tidak lagi sendirian. Dua orang teman membantunya mengerjakan pesanan yang terus meningkat. Jam kerja bertambah, kapasitas produksi naik, dan pesanan online mengalir dari berbagai penjuru kota.',
            'Dan kemudian, angka yang dulu hanya bisa ia impikan menjadi kenyataan. Kini Nani bisa memproduksi hingga 300 toples per hari dengan omzet mencapai Rp 4 juta per hari. Dari Rp 200 ribu, ia membangun usaha yang kini menghasilkan jutaan rupiah setiap hari — bukan karena keberuntungan, tapi karena ketekunan, fokus, dan keberanian untuk memulai dari yang paling kecil.'
          ]
        },
        {
          num: 5,
          title: 'Lunas dan Mimpi ke Depan',
          paragraphs: [
            'Utang hampir Rp 2 miliar yang dulu menghantuinya, kini telah lunas. Setiap rupiah dari toples selai caramel yang terjual membawa Nani satu langkah lebih dekat ke kebebasan — dan akhirnya ia meraihnya.',
            'Nani Kurniasari bukan lagi wanita yang kehilangan segalanya — usaha, suami, dan harga diri. Ia adalah pengusaha selai caramel yang namanya mulai dikenal, yang tahu persis rasanya jatuh ke titik paling bawah dan memilih untuk memanjat kembali.',
            'Dan ia tidak berhenti di situ. Cita-citanya kini lebih besar: membangun "Rumah Selai" — sebuah tempat yang bisa dimanfaatkan sebagai pusat penjualan selai dan produk-produk turunannya. Dari seorang wanita yang terpuruk dengan utang Rp 2 miliar dan perceraian, dari seorang ibu yang sempat tidak punya pekerjaan selama tiga tahun, Nani berdiri sebagai bukti bahwa dari titik terendah sekalipun, seseorang bisa bangkit — dengan modal kecil, dengan fokus, dan dengan keyakinan bahwa setiap kegagalan adalah bagian dari proses belajar.'
          ]
        }
      ],
      takeaways: [
        'Satu Produk Satu Fokus: Jangan tersebar ke banyak lini produk saat modal dan energi terbatas. Kuasai satu produk lebih dulu, baru ekspansi.',
        'Modal Rp 200 Ribu Cukup untuk Memulai: Ketiadaan modal besar bukan alasan untuk tidak mulai — itu adalah latihan untuk efisien dan kreatif dari awal.',
        'Self Healing Sebelum Re-Start Bisnis: Luka psikologis dari kegagalan dan perceraian yang belum sembuh akan terus menyabotase langkah selanjutnya. Pulihkan diri dulu.',
        'Pemasaran Digital Tanpa Biaya: Facebook, Instagram, dan Twitter bisa menjadi mesin penjualan gratis jika konten konsisten dan produk memiliki kualitas yang bisa direkomendasikan dari mulut ke mulut.'
      ]
    },
    {
      id: 'syaikhul',
      featured: false,
      name: 'Syaikhul Hadi',
      tagline: 'Dari 800 Cek Kosong & Utang Miliaran Menjadi Pemilik Pabrik Benih dan Pupuk PT Keraton Agri Ponorogo',
      title: 'Berhenti Berutang adalah Keberanian Terbesar',
      subtitle: 'CEO PT Keraton Agri Ponorogo — Distributor Benih & Pupuk yang Bangkit sebagai Produsen',
      origin: 'Ponorogo, Jawa Timur',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'bankrupt', 'business', 'indonesia'],
      categoryLabel: 'Utang Miliaran + 800 Cek Kosong',
      badge: 'Pemilik Pabrik Benih & Pupuk Sendiri',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: 'Miliaran Rupiah + 800 Cek Kosong',
        age: '40-an Tahun',
        lowest: 'Ekspansi 55 Perusahaan, Pikiran Tidak Tenang, Tagihan Menumpuk',
        action: 'Berhenti Berutang 2018 — Jual Stok & Aset',
        result: 'Pabrik Benih & Pupuk Sendiri, Utang Lunas'
      },
      timeline: [
        { year: 'Awal Usaha', text: 'Merintis sebagai distributor benih dan pupuk pertanian di Ponorogo, Jawa Timur.' },
        { year: 'Ekspansi Agresif', text: 'Mendistribusikan produk dari sekitar 55 perusahaan, membuka cabang di berbagai daerah, meminjam dana perbankan dalam jumlah miliaran.' },
        { year: 'Titik Kritis', text: '800 cek kosong beredar di pasaran. Utang miliaran rupiah menghantui. Pikiran tidak pernah tenang antara ingin ekspansi dan kewajiban membayar.' },
        { year: '2018 — Titik Balik', text: 'Bergabung dengan komunitas syariah (kini SyaREA World). Memutuskan berhenti berutang, menjual stok dan aset, membayar semua tagihan bertahap.' },
        { year: 'Hari Ini — Rebound', text: 'Tidak lagi sekadar agen — kini pemilik pabrik benih dan pupuk pertanian sendiri. Utang lunas. Bisnis lebih sehat dan terstruktur.' }
      ],
      quote: 'Dan saat itu, saya berhenti untuk utang. Dan membayar semua tagihan bertahap.',
      quoteAuthor: 'Syaikhul Hadi, CEO PT Keraton Agri Ponorogo',
      chapters: [
        {
          num: 1,
          title: 'Pengusaha yang Terlalu Cepat',
          paragraphs: [
            'Ponorogo, Jawa Timur. Syaikhul Hadi adalah seorang distributor benih dan pupuk pertanian yang sedang berada di puncak karirnya. Ia memiliki mimpi besar: mengembangkan usahanya ke seluruh penjuru tanah air. Dengan semangat membara, ia berekspansi tanpa henti.',
            'Ia mendistribusikan produk dari sekitar 55 perusahaan dan membuka cabang di berbagai daerah. Setiap hari, ia menandatangani kontrak baru. Setiap minggu, ia membuka cabang baru. Setiap bulan, ia meminjam dana baru dari perbankan. "Aku sedang membangun kerajaan," pikirnya.',
            'Tapi di balik gemerlap ekspansi itu, ada sesuatu yang mulai rapuh. Bukan karena produknya buruk atau pasarnya sempit — tapi karena arus kas yang tidak mampu mengimbangi kecepatan pertumbuhannya. Ia berlari terlalu cepat, jauh melampaui fondasi yang ia bangun.'
          ]
        },
        {
          num: 2,
          title: '800 Cek Kosong yang Menghantui',
          paragraphs: [
            'Ekspansi yang terlalu agresif mulai menunjukkan dampaknya. Pinjaman dari perbankan menumpuk. Bunga berbunga. Satu tagihan menyusul tagihan lainnya. Dan yang paling mengkhawatirkan — ia memiliki 800 cek kosong yang beredar di pasaran.',
            '"800 cek kosong," bisiknya dalam hati. Angka itu menghantuinya setiap malam. Pikirannya tidak pernah tenang. Di satu sisi, ia ingin terus mengembangkan usaha. Di sisi lain, kewajiban utang yang menggunung tak kunjung usai.',
            'Syaikhul duduk di ruang kerjanya, memandangi tumpukan tagihan. Sebagai distributor 55 perusahaan, namanya dikenal luas — tapi di balik reputasi itu, ia menyembunyikan kecemasan yang semakin dalam. "Bagaimana caraku keluar dari sini?" tanya batinnya setiap malam.'
          ]
        },
        {
          num: 3,
          title: 'Keputusan di Tahun 2018',
          paragraphs: [
            'Tahun 2018 menjadi titik balik dalam hidup Syaikhul Hadi. Ia bergabung dengan komunitas syariah yang kini bernama SyaREA World. Di sanalah ia mendapatkan pencerahan — bahwa utang bukanlah satu-satunya jalan menuju kesuksesan, dan bahwa terus menumpuk kewajiban sambil berharap keadaan membaik sendiri adalah jebakan yang akan menghancurkan semuanya.',
            '"Dan saat itu, saya berhenti untuk utang," katanya tegas. Ia mengambil keputusan yang menyakitkan namun perlu: menjual stok dan aset. Ia merelakan apa yang telah ia bangun selama bertahun-tahun demi membebaskan diri dari jeratan utang.',
            '"Saya membayar semua tagihan bertahap," ujarnya. Bukan sekaligus, bukan ajaib — tapi dengan disiplin, satu cicilan demi satu cicilan, satu kreditur demi satu kreditur. Ia menghadapi mereka satu per satu dengan kepala tegak dan niat yang jelas.'
          ]
        },
        {
          num: 4,
          title: 'Bangkit dari Reruntuhan — Dari Agen Menjadi Produsen',
          paragraphs: [
            'Setelah seluruh kewajibannya lunas, Syaikhul tidak berhenti. Ia memulai kembali dari nol. Tapi kali ini, ia membangun dengan fondasi yang jauh lebih kuat — tanpa utang perbankan yang mengimpit, tanpa cek kosong yang beredar, dan tanpa beban pikiran yang tidak pernah tenang.',
            'Ia tidak lagi menjadi agen yang mendistribusikan produk orang lain dari 55 perusahaan berbeda. Ia menjadi produsen — pemilik pabrik benih dan pupuk pertanian sendiri. PT Keraton Agri Ponorogo tumbuh bukan dari pinjaman agresif, tapi dari kepercayaan yang dibangun kembali satu demi satu.',
            'Dari seorang pengusaha yang nyaris tenggelam dalam utang dan 800 cek kosong, kini ia adalah pemilik pabrik yang produknya dipercaya oleh para petani. Bukan agen lagi — tapi sang produsen.'
          ]
        },
        {
          num: 5,
          title: 'Pelajaran dari Sebuah Keberanian untuk Berhenti',
          paragraphs: [
            'Kisah Syaikhul Hadi mengajarkan satu hal yang sederhana namun dalam: kadang, kita harus berhenti berlari untuk bisa melangkah lebih jauh. Ekspansi boleh jadi penting. Tapi tanpa pengelolaan arus kas yang bijak, ekspansi bisa menjadi bumerang yang menghancurkan.',
            'Syaikhul memilih untuk mengerem — di saat banyak orang justru terus menggeber gas. Ia memilih untuk berhenti berutang, menjual aset, dan membangun kembali dari nol. Bukan karena ia menyerah, tapi karena ia cukup bijak untuk mengenali batas antara keberanian dan keserakahan.',
            'Dan kini, ia berdiri sebagai bukti bahwa keberanian untuk berhenti terkadang adalah langkah terpenting menuju kesuksesan sejati. Berhenti bukan tanda lemah — berhenti pada waktu yang tepat adalah tanda kebijaksanaan seorang pemimpin bisnis yang matang.'
          ]
        }
      ],
      takeaways: [
        'Ekspansi Tanpa Arus Kas Kuat adalah Bunuh Diri Pelan-Pelan: Mendistribusikan 55 produk dan membuka cabang di mana-mana terdengar heroik, tapi tanpa kas yang cukup, itu hanya mempercepat keruntuhan.',
        'Cek Kosong adalah Tanda Bahaya Merah: Jika sudah ada cek kosong beredar, itu bukan sekadar masalah teknis keuangan — itu sinyal darurat bahwa arus kas sudah kritis dan harus segera ditangani.',
        'Keberanian Terbesar adalah Berhenti Berutang: Ketika utang sudah di luar kendali, keputusan paling berani bukan meminjam lagi untuk menambal — melainkan berhenti, menjual aset, dan membayar bertahap.',
        'Naik Kelas dari Agen ke Produsen: Setelah bebas utang, jangan kembali ke model bisnis yang sama. Gunakan pengalaman pahit itu sebagai modal membangun usaha yang lebih mandiri dan bernilai lebih tinggi.'
      ]
    },
    {
      id: 'baim',
      featured: false,
      name: 'Baim Wong (Muhammad Ibrahim)',
      tagline: 'Dari Restoran Bangkrut & Utang Rp 1,5 Miliar, Dua Kali Jatuh — Tidak Pernah Berhenti Bangkit',
      title: 'Dua Kali Jatuh, Dua Kali Bangkit',
      subtitle: 'Aktor, Presenter & Pengusaha Indonesia — Pemilik Pablo Restaurant yang Bangkit dari Utang Rp 1,5 Miliar',
      origin: 'Jakarta',
      ageAtRebound: '30-an Thn',
      categories: ['debt', 'bankrupt', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 1,5 M',
      badge: 'Bangkit 2x dari Titik Terendah',
      theme: 'indigo',
      accentColor: '#4338CA',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 1,5 Miliar (Sendirian)',
        age: '30-an Tahun',
        lowest: 'Pablo Restaurant Bangkrut 2012 + Keluar Sinemart 2018',
        action: 'Lunasi Utang Mandiri, Tidak Menyerah',
        result: 'Bangkit Dua Kali — Aktor, Kreator, & Pengusaha'
      },
      timeline: [
        { year: '2007–2013', text: 'Bisnis kuliner berulang kali bangkrut. Orang tuanya melarang. Tapi Baim tidak bisa berhenti — ia mencintai dunia desain dan makanan.' },
        { year: '2012 — Titik Terendah #1', text: 'Pablo Restaurant di Kemang bangkrut. Utang Rp 1,5 miliar harus dilunasi seorang diri, tanpa bantuan siapa pun.' },
        { year: 'Bangkit #1', text: 'Melunasi seluruh utang secara mandiri sambil terus berkarir sebagai aktor dan publik figur.' },
        { year: '2018 — Titik Terendah #2', text: 'Keluar dari rumah produksi Sinemart. Titik terendah kedua dalam hidupnya.' },
        { year: 'Bangkit #2', text: 'Kembali bangkit, beradaptasi, dan terus berkarya. Keputusan salah bukan akhir — melainkan pelajaran untuk bangkit lagi.' }
      ],
      quote: 'Keputusan itu pasti banyak salah, cuma gimana kita melihat sisi positifnya, bangkit lagi, bangkit lagi.',
      quoteAuthor: 'Baim Wong, aktor dan pengusaha Indonesia',
      chapters: [
        {
          num: 1,
          title: 'Restoran di Kemang dan Mimpi yang Runtuh',
          paragraphs: [
            'Tahun 2012. Baim Wong berdiri di depan Pablo Restaurant di Kemang, Jakarta Selatan — restoran yang ia bangun dengan segenap hati dan harapan. Dulu tempat ini ramai. Dulu ia percaya bahwa bisnis kuliner adalah jalan hidupnya. Tapi kini, pintu-pintunya tertutup. Meja-meja kosong. Dapur tak lagi mengepulkan asap.',
            'Restorannya bangkrut. Dan yang tersisa hanyalah utang Rp 1,5 miliar yang menggunung di pundaknya. "Saya ada di titik terendah itu dua kali, 2012 sama 2018," kenangnya kemudian.',
            'Tahun 2012 adalah yang pertama. Dan yang paling menyakitkan: ia harus melunasi utang itu seorang diri. Tidak ada yang membantunya. Tidak ada rekan bisnis yang berbagi beban. Tidak ada keluarga yang turun tangan. Ia sendiri yang bertanggung jawab penuh atas setiap rupiahnya.'
          ]
        },
        {
          num: 2,
          title: 'Gila dan Coba Lagi — Tujuh Tahun Gagal Berturut-turut',
          paragraphs: [
            'Tapi kegagalan di 2012 bukanlah yang pertama. Antara tahun 2007 hingga 2013, restoran-restoran yang ia kelola selalu bangkrut. Ia mencoba. Gagal. Mencoba lagi. Gagal lagi. Dan mencoba lagi. "Gue tuh gila sih, coba lagi, lagi," ujarnya.',
            'Orang tuanya bahkan sampai melarangnya. "Im, jangan restoran lagi ya," kata mereka. Mereka khawatir melihat anaknya terus menerus jatuh dalam lubang yang sama. Tapi Baim tidak bisa berhenti. Ia mencintai dunia kuliner. Ia suka desain. Ia suka makanan.',
            'Namun di tengah semua kecintaan itu, ia akhirnya mengenali kelemahan terbesarnya dengan jujur. "Yang gue nggak bisa itu finance," akunya terus terang. Bukan produknya yang buruk. Bukan konsepnya yang salah. Melainkan pengelolaan keuangan yang tidak ia kuasai — dan itu yang menghancurkan semuanya.'
          ]
        },
        {
          num: 3,
          title: '2018 — Jatuh untuk Kedua Kalinya',
          paragraphs: [
            'Setelah berhasil bangkit dari utang Rp 1,5 miliar dan melunasi seluruhnya secara mandiri, Baim kembali terjatuh. Tahun 2018, ia memutuskan keluar dari sebuah rumah produksi besar — Sinemart. Keputusan itu menghadirkan konsekuensi yang tidak ringan.',
            'Itu adalah titik terendah kedua dalam hidupnya. Dua kali ia berada di jurang. Dua kali ia merasakan pahitnya kegagalan — pertama sebagai pengusaha kuliner, kedua sebagai orang yang harus meninggalkan zona nyaman karirnya.',
            'Bagi banyak orang, satu kejatuhan saja cukup untuk mematahkan semangat. Tapi Baim telah membuktikan bahwa ia bukan orang kebanyakan. Ia tidak pernah benar-benar berhenti — hanya berhenti sebentar untuk mengambil napas, lalu melanjutkan perjalanan.'
          ]
        },
        {
          num: 4,
          title: 'Filosofi Seorang Pejuang yang Tidak Kenal Bosan Kalah',
          paragraphs: [
            '"Keputusan itu pasti banyak salah, cuma gimana kita melihat sisi positifnya, bangkit lagi, bangkit lagi," katanya. Ia tidak pernah bosan kalah. Ia selalu mencoba lagi dan lagi. Baginya, kegagalan bukanlah akhir — melainkan bagian dari proses belajar yang tidak bisa dilewati dengan jalan pintas.',
            'Dari pengalaman pahitnya, Baim belajar bahwa kesuksesan tidak hanya tentang bakat atau ide bagus. Ia juga tentang pengelolaan keuangan yang bijak — tentang mengetahui kelemahan diri dan mencari orang yang bisa menutupinya. Ia pandai di desain dan rasa, tapi ia butuh seseorang yang kuat di angka.',
            'Pelajaran itu mahal harganya — Rp 1,5 miliar dan bertahun-tahun kegagalan. Tapi pelajaran itulah yang membentuknya menjadi pengusaha yang lebih bijak, lebih sadar diri, dan lebih tangguh dari sebelumnya.'
          ]
        },
        {
          num: 5,
          title: 'Jatuh Berkali-kali, Berdiri Lebih Tegak',
          paragraphs: [
            'Kisah Baim Wong mengajarkan satu hal yang sederhana namun dalam: kadang, kita harus jatuh berkali-kali sebelum benar-benar bisa berdiri tegak. Bukan karena kita bodoh atau tidak berbakat — tapi karena ada pelajaran tertentu yang hanya bisa dipahami setelah mengalaminya sendiri.',
            'Dari restoran yang bangkrut berturut-turut, dari utang Rp 1,5 miliar yang harus ia lunasi sendiri, dari dua titik terendah dalam hidupnya — Baim Wong tidak pernah berhenti. Ia terus melangkah, terus mencoba, terus belajar.',
            'Dan itulah yang membuatnya tetap berdiri sampai hari ini. Bukan karena ia tidak pernah jatuh, tapi karena setiap kali jatuh, ia memilih untuk bangkit. Lagi. Dan lagi.'
          ]
        }
      ],
      takeaways: [
        'Kenali Kelemahan Finansialmu Sebelum Terlambat: Baim pandai di desain dan makanan, tapi lemah di finance. Kenali di mana lubangnya dan tambal dengan orang yang tepat sebelum bisnis tenggelam.',
        'Melunasi Utang Sendiri adalah Kehormatan: Tidak ada yang membantu Baim melunasi Rp 1,5 miliar — dan itu justru membangun karakter dan integritas yang tidak bisa dibeli dengan cara lain.',
        'Jatuh Dua Kali Bukan Aib — Tidak Bangkit Itulah Aibnya: Titik terendah pertama dan kedua adalah bagian dari perjalanan, bukan tanda kelemahan permanen.',
        'Cintai Prosesnya, Bukan Hanya Hasilnya: Baim tidak bisa berhenti dari kuliner meski terus gagal — karena ia benar-benar mencintainya. Gairah yang tulus akan membuat seseorang terus mencoba sampai menemukan formula yang tepat.'
      ]
    },
    {
      id: 'krisna',
      featured: false,
      name: 'Krisna Mukti',
      tagline: 'Dari Utang Rp 2 Miliar & Depresi Pasca Gagal Pileg 2019, Bangkit Berkat Koleksi Antik yang Diselamatkan',
      title: 'Hobi yang Menjadi Penyelamat di Saat Paling Gelap',
      subtitle: 'Aktor, Presenter & Mantan Anggota DPR RI 2014–2019 — Bangkit dari Utang Rp 2 Miliar dan Depresi',
      origin: 'Jakarta',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'zero', 'indonesia'],
      categoryLabel: 'Utang Rp 2 M',
      badge: 'Lunas — Koleksi Antik sebagai Jalan Keluar',
      theme: 'amber',
      accentColor: '#92400E',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Rp 2 Miliar',
        age: '40-an Tahun',
        lowest: 'Gagal Pileg 2019, Pandemi COVID, Depresi, Tabungan Nol Minus',
        action: 'Jual Koleksi Antik (Rugi, Tapi Ikhlas)',
        result: 'Utang Rp 2 M Lunas, Hidup Berlanjut dengan Syukur'
      },
      timeline: [
        { year: '2014–2019', text: 'Menjabat sebagai anggota DPR RI. Karir politik berjalan berdampingan dengan karir hiburan sebagai aktor dan presenter.' },
        { year: '2019 — Gagal Pileg', text: 'Habiskan seluruh tabungan, aset, dan berutang demi kampanye. Tidak terpilih kembali. Utang Rp 2 miliar tersisa.' },
        { year: '2020 — Pandemi COVID', text: 'Dunia hiburan berhenti. Pendapatan lenyap. Tabungan nol bahkan minus. Depresi berat melanda.' },
        { year: 'Titik Balik — Hidayah', text: 'Mendapat dorongan untuk menjual koleksi barang antik yang dikumpulkan bertahun-tahun — meski harus rela rugi besar.' },
        { year: 'Hari Ini — Lunas', text: 'Seluruh utang Rp 2 miliar lunas dari hasil menjual koleksi antik. "Alhamdulillah, Allah tidak hanya memberi ujian, tapi juga solusinya."' }
      ],
      quote: 'Allah tidak hanya memberikan ujian, tapi juga memberikan solusinya.',
      quoteAuthor: 'Krisna Mukti, aktor dan mantan anggota DPR RI',
      chapters: [
        {
          num: 1,
          title: 'Panggung yang Mulai Meredup',
          paragraphs: [
            'Tahun 2019. Krisna Mukti, seorang aktor dan presenter yang namanya sudah dikenal luas, sedang berada di persimpangan jalan. Ia telah menjabat sebagai anggota DPR RI periode 2014–2019. Kini, ia maju lagi dalam Pemilu Legislatif 2019. Ia mengerahkan segalanya — tabungan pribadi, seluruh aset yang dimiliki, bahkan sampai berutang — demi bisa kembali ke Senayan.',
            'Tapi hasil akhir berkata lain. Ia gagal. Kursi yang dulu ia duduki, kini berpindah tangan. "Ya pas itu kan karena sudah jarang tampil di TV. Jadi berasa banget itu biaya yang dikeluarkan dan pandemi," kenangnya kemudian.',
            'Dua dunia yang selama ini menopang hidupnya — panggung politik dan panggung hiburan — runtuh hampir bersamaan. Dan yang tertinggal hanyalah tumpukan tagihan yang semakin hari semakin berat.'
          ]
        },
        {
          num: 2,
          title: 'Rp 2 Miliar, Pandemi, dan Depresi',
          paragraphs: [
            'Kegagalan politik meninggalkan luka yang dalam. Tapi luka terbesar datang dari beban finansial yang menggunung: utang Rp 2 miliar. Dan di saat yang bersamaan, pandemi COVID-19 melanda. Dunia hiburan berhenti berputar. Panggung-panggung yang dulu ramai, kini sepi. Krisna Mukti kehilangan pekerjaannya sebagai aktor dan presenter.',
            '"Uang di tabungan nol bahkan minus, utang masih numpuk," ucapnya. Ia berada di titik terendah. Setiap malam, ia terbaring di ranjang, memandang langit-langit, bertanya pada dirinya sendiri bagaimana caranya keluar dari sini.',
            'Tekanan itu terasa begitu berat hingga ia jatuh dalam depresi. "Depresi? Pasti dong, utang numpuk, tabungan nol sampai minus malahan," tuturnya jujur. Tidak ada jalan yang terlihat. Tidak ada cahaya di ujung terowongan — atau setidaknya, begitulah rasanya.'
          ]
        },
        {
          num: 3,
          title: 'Hidayah di Tengah Gelap — Koleksi Antik yang Terlupakan',
          paragraphs: [
            'Di tengah keputusasaan itulah, sebuah pemikiran muncul di benaknya — seperti bisikan yang tak terduga: kamu kan masih punya barang antik yang bisa dijual.',
            'Krisna Mukti memang dikenal sebagai penggemar barang-barang antik. Selama bertahun-tahun, ia telah mengumpulkan koleksi yang berharga — dari berbagai daerah, dari berbagai era. Selama ini ia hanya menyimpannya sebagai hobi, sebagai kenangan, sebagai kecintaan yang ia rawat dalam diam.',
            'Kini, hobi itu menjadi penyelamat. "Kayak dapat hidayah, akhirnya gue jual-jualin (barang antik)," ungkapnya. Bukan sesuatu yang ia rencanakan. Bukan strategi bisnis yang matang. Tapi sebuah dorongan yang datang di saat paling gelap — dan ia memilih untuk mengikutinya.'
          ]
        },
        {
          num: 4,
          title: 'Menjual dengan Hati Rela — Beli Rp 10 Juta, Jual Rp 1 Juta',
          paragraphs: [
            'Ia mulai menjual koleksinya satu per satu. Tapi ia tidak bisa berharap banyak. Kondisi ekonomi sedang sulit. Pembeli sulit dicari. Daya beli masyarakat sedang lesu di tengah pandemi. Ia harus rela menjual dengan harga jauh di bawah nilai beli.',
            '"Misalnya beli Rp 10 juta, saya jual Rp 1 juta atau Rp 2 juta. Yang penting bisa bertahan hidup," jelasnya. Setiap kali ia melepas sebuah barang, ada rasa sakit di hatinya — kenangan yang ikut pergi bersama benda-benda itu. Tapi ia tahu, ini adalah jalan yang harus ia tempuh.',
            '"Dan bener, ternyata pas pandemik itu laku walaupun jual murah," lanjut Krisna. Perlahan, dari satu penjualan ke penjualan berikutnya, utang Rp 2 miliar yang dulu terasa seperti gunung, mulai terkikis. Sedikit demi sedikit. Dengan pengorbanan demi pengorbanan.'
          ]
        },
        {
          num: 5,
          title: 'Lunas dan Hikmah dari Setiap Kegagalan',
          paragraphs: [
            '"Udah selesai, (karena) jualan barang antik," kata Krisna Mukti. Utang Rp 2 miliar yang selama bertahun-tahun membebaninya, akhirnya lunas. Ia menarik napas panjang. Beban yang menggantung di pundaknya, akhirnya terlepas. "Alhamdulillah, Allah tidak hanya memberikan ujian, tapi juga memberikan solusinya," ujarnya.',
            'Dari pengalaman pahitnya, ia belajar satu hal yang sederhana namun dalam. "Pelajaran dan hikmah dari kegagalan menjadi anggota dewan itu yang paling penting buat saya," pungkasnya. Ia juga menyadari bahwa hobinya mengoleksi barang antik — yang dulu mungkin dianggap sekadar kesenangan — ternyata menjadi jalan keluar di saat yang paling sulit.',
            'Kini, Krisna Mukti melanjutkan hidup dengan semangat baru. Dari seorang aktor yang kehilangan panggung, dari seorang politisi yang gagal kembali ke Senayan, dari seorang pria yang terjerat utang Rp 2 miliar dan depresi — kini ia berdiri sebagai bukti bahwa di balik setiap kegelapan, selalu ada cahaya. Dan terkadang, cahaya itu datang dari hal-hal yang selama ini kita anggap biasa — seperti sebuah koleksi antik yang kita simpan bertahun-tahun.'
          ]
        }
      ],
      takeaways: [
        'Aset Non-Likuid Bisa Menjadi Penyelamat Darurat: Koleksi antik, perhiasan, kendaraan, atau barang berharga lain adalah aset yang bisa dicairkan di situasi krisis — meskipun harganya jauh dari harapan.',
        'Jual Rugi Lebih Baik dari Tidak Bayar Utang: Menjual Rp 10 juta dengan harga Rp 1 juta terasa menyakitkan, tapi jauh lebih baik daripada membiarkan utang berbunga dan merusak reputasi.',
        'Depresi adalah Tanda — Bukan Akhir: Krisna mengakui depresinya secara terbuka. Mengenali dan menerima kondisi mental yang berat adalah langkah pertama untuk mulai mencari jalan keluar.',
        'Hobi Bisa Menjadi Aset Darurat: Apa yang kamu kumpulkan hari ini — entah barang, keahlian, atau jaringan — bisa menjadi penyelamat di hari yang tidak pernah kamu bayangkan.'
      ]
    },
    {
      id: 'chen',
      featured: false,
      name: 'Chen Zhao (陈兆)',
      tagline: 'Dari Utang Keluarga 20 Juta Yuan (Rp 44 M) di Usia 24, Lunas dalam 7 Tahun Hanya dengan Kuas Kaligrafi',
      title: 'Pena yang Melunasi Utang Rp 44 Miliar',
      subtitle: 'Kaligrafer & Guru Kaligrafi, Wuhan — Melunasi Utang Keluarga 20 Juta Yuan dalam 7 Tahun',
      origin: 'Wuhan, Tiongkok',
      ageAtRebound: '24 Thn',
      categories: ['debt', 'zero', 'global'],
      categoryLabel: 'Utang 20 Jt Yuan (Rp 44 M)',
      badge: 'Lunas 7 Tahun — 300+ Siswa Kaligrafi',
      theme: 'indigo',
      accentColor: '#3730A3',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: '20 Juta Yuan ≈ Rp 44 Miliar (Usia 24 Thn)',
        age: '24 Tahun',
        lowest: 'Bisnis Keluarga Kolaps, Ayah Sakit, Kaligrafi Diremehkan Orang Tua',
        action: 'Studio Kaligrafi + Les 8 Pagi–9 Malam + Jual Online + Ruang Teh',
        result: '300+ Siswa, Lunas 7 Tahun, Orang Tua: "Kami Bangga Padamu"'
      },
      timeline: [
        { year: 'Usia 5 Tahun', text: 'Jatuh cinta pada kaligrafi. Orang tua tidak mendukung — "kaligrafi tidak bisa jadi pekerjaan nyata."' },
        { year: 'Kuliah', text: 'Memilih jurusan kaligrafi di Hubei Institute of Fine Arts, menentang kehendak orang tua.' },
        { year: '2016 — Lulus', text: 'Membuka studio kaligrafi kecil sendiri. Murid pertama: anak kidal yang susah diajar — tapi Chen sabar.' },
        { year: '2017 — Kejatuhan', text: 'Bisnis keluarga di bidang pakaian kolaps total. Ayah jatuh sakit. Utang keluarga: 20 juta Yuan.' },
        { year: '7 Tahun Berjuang', text: 'Bekerja 8 pagi–9 malam setiap hari. Studio diperluas. Les dinaikkan. Jual perlengkapan online. Buka ruang teh. Hingga 300+ siswa.' },
        { year: 'September — Lunas', text: '20 juta Yuan lunas dalam 7 tahun. Hadiah terbesar bukan uang — tapi kalimat orang tuanya: "Kami bangga padamu."' }
      ],
      quote: 'Ketika orang lain meragukan jalanmu, jalanilah dengan tekad.',
      quoteAuthor: 'Chen Zhao (陈兆), kaligrafer Wuhan yang melunasi Rp 44 miliar utang keluarga dengan kuasnya',
      chapters: [
        {
          num: 1,
          title: 'Anak yang Memilih Kuas',
          paragraphs: [
            'Wuhan, tahun 1990-an. Seorang anak laki-laki bernama Chen Zhao baru berusia 5 tahun ketika ia pertama kali memegang kuas kaligrafi. Sementara anak-anak lain berlarian di luar, Chen justru terpikat pada ritme goresan kuas dan kedamaian seni tulis-menulis yang tampak hidup di atas kertas.',
            'Tapi orang tuanya tidak senang. "Kaligrafi tidak bisa menjadi pekerjaan nyata," kata mereka berulang kali. Chen mendengarkan. Tapi ia tidak menggubris. Ketika tiba waktunya memilih universitas, ia memilih jurusan kaligrafi di Hubei Institute of Fine Arts — bukan bisnis seperti yang diinginkan orang tuanya.',
            '"Aku akan membuktikan bahwa kaligrafi bisa menghidupi," bisiknya dalam hati. Bukan dengan kata-kata, bukan dengan perdebatan — tapi dengan hasil nyata dari setiap goresan kuasnya.'
          ]
        },
        {
          num: 2,
          title: '20 Juta Yuan yang Jatuh dalam Semalam',
          paragraphs: [
            'Tahun 2016. Chen lulus kuliah. Ia tidak bergabung dengan bisnis keluarga di bidang pakaian. Ia membuka studio kecilnya sendiri. Murid pertamanya? Seorang anak kidal yang tidak mudah diajar. Tapi Chen sabar. Anak itu akhirnya bisa menulis dengan indah, dan kabar mulai menyebar dari mulut ke mulut.',
            'Lalu tahun 2017 datang dan mengubah segalanya. Bisnis keluarga kolaps total. Ayahnya jatuh sakit. Dan dalam sekejap, keluarga Chen tenggelam dalam utang 20 juta Yuan — setara dengan sekitar Rp 44 miliar.',
            'Chen, di usia 24 tahun, menatap tumpukan tagihan yang tak terbayangkan besarnya. Orang tuanya yang dulu meragukan pilihannya kini menggantungkan harapan padanya. "Bagaimana caraku membayar semua ini?" tanya batinnya. Bukan dengan bisnis pakaian. Bukan dengan pekerjaan kantoran. Hanya dengan kuas dan tintanya.'
          ]
        },
        {
          num: 3,
          title: 'Dari Fajar hingga Larut Malam — All In',
          paragraphs: [
            'Chen tidak punya pilihan selain all in. Ia menggandakan ukuran studio kaligrafinya. Ia menaikkan biaya les. Dan ia mulai bekerja tanpa kenal lelah — dari jam 8 pagi hingga 9 malam, setiap hari, tanpa henti, tanpa hari libur.',
            'Ia mencoba merekrut guru lain untuk membantunya menanggung beban mengajar yang semakin berat. Tapi para orang tua murid bersikeras: mereka hanya ingin belajar langsung dari Chen. Nama dan reputasinya adalah produknya — tidak bisa didelegasikan.',
            'Ia tidak berhenti di situ. Ia mulai menjual perlengkapan kaligrafi secara online — kuas, tinta, kertas, batu tinta — semuanya. Ia bahkan membuka ruang teh di dalam studionya untuk membantu menutup biaya operasional. Teman-temannya khawatir melihat betapa lelahnya ia. Tapi Chen terus melangkah, satu goresan demi satu goresan.'
          ]
        },
        {
          num: 4,
          title: '300 Siswa dan Tujuh Tahun Kerja Keras',
          paragraphs: [
            'Perlahan, murid-muridnya bertambah. Dari satu, menjadi sepuluh, menjadi lima puluh, menjadi ratusan. Lebih dari 300 siswa datang belajar kaligrafi darinya — anak-anak, remaja, orang dewasa yang ingin menemukan ketenangan dalam seni tulis yang kuno namun abadi.',
            'Tujuh tahun berlalu. Tujuh tahun bekerja dari fajar hingga larut malam. Tujuh tahun menahan lelah dan mengorbankan waktu istirahat. Tujuh tahun membuktikan bahwa kaligrafi — yang dulu diremehkan orang tuanya — bisa menjadi senjata paling ampuh untuk melunasi utang puluhan miliar.',
            'Pada bulan September, Chen menarik napas panjang. 20 juta Yuan. Lunas. Setiap sen dari setiap les, dari setiap set perlengkapan kaligrafi yang terjual, dari setiap cangkir teh yang dihidangkan — semuanya telah berkontribusi pada momen pembebasan itu.'
          ]
        },
        {
          num: 5,
          title: 'Hadiah Terbesar: "Kami Bangga Padamu"',
          paragraphs: [
            'Bukan uang yang paling ia rasakan saat itu. Bukan beban yang terlepas dari pundaknya — meski itu terasa luar biasa. Tapi kata-kata dari orang tuanya: "Kami bangga padamu." Dan: "Kami akhirnya percaya pada senimu."',
            'Orang yang dulu paling meragukan jalannya, kini yang paling bangga pada apa yang telah ia capai. Bukan hanya karena ia melunasi utang — tapi karena ia melunasi utang itu dengan cara yang ia pilih sendiri, dengan keahlian yang selama ini mereka ragukan.',
            'Kisah Chen Zhao mengajarkan bahwa ketika orang lain meragukan jalanmu, jawaban terbaik bukan kata-kata — melainkan hasil. Seorang anak yang memilih kuas di atas buku bisnis. Seorang pemuda yang harus menanggung utang keluarga di usia 24 tahun. Seorang seniman yang bekerja 13 jam sehari selama 7 tahun — dan menang.'
          ]
        }
      ],
      takeaways: [
        'Keahlian Spesifik adalah Aset Terkuat: Chen tidak punya bisnis besar, tidak punya modal, tidak punya koneksi — hanya keahlian kaligrafi. Itu sudah cukup untuk melunasi Rp 44 miliar dalam 7 tahun.',
        'Reputasi Pribadi Tidak Bisa Didelegasikan: Para murid hanya mau belajar langsung dari Chen — ini menunjukkan bahwa membangun reputasi personal jauh lebih berharga daripada membangun brand anonim.',
        'Diversifikasi Sumber Pendapatan dari Satu Keahlian: Les, jual perlengkapan online, ruang teh — semuanya berakar dari satu keahlian kaligrafi. Satu keahlian bisa menghasilkan banyak arus pendapatan.',
        'Bukti adalah Jawaban Terbaik atas Keraguan: Chen tidak berdebat dengan orang tuanya tentang masa depan kaligrafi — ia membuktikannya dengan melunasi 20 juta Yuan. Hasil nyata mengakhiri semua perdebatan.'
      ]
    },
    {
      id: 'syakir',
      featured: false,
      name: 'Syakir Daulay',
      tagline: 'Di Usia 20 Tahun, Utang Rp 5 Miliar untuk Produksi Film — Nyaris Diviralkan, Lunas dalam Hitungan Jam',
      title: 'Di Usia 20 Tahun, Ia Harus Melunasi Rp 5 Miliar',
      subtitle: 'Aktor & Penyanyi Indonesia — Melunasi Utang Rp 5 Miliar di Usia 20 Tahun Berkat Kepercayaan Gurunya',
      origin: 'Indonesia',
      ageAtRebound: '20 Thn',
      categories: ['debt', 'zero', 'indonesia'],
      categoryLabel: 'Utang Rp 5 M (Usia 20 Thn)',
      badge: 'Lunas Tepat Waktu — Amanah Terpenuhi',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: 'Rp 5 Miliar (Usia 20 Tahun)',
        age: '20 Tahun',
        lowest: 'Nyaris Diviralkan, Pasrah, Hanya Bisa Berdoa',
        action: 'Investasi Rp 2M dari Habib Hasan + Amanah Dakwah',
        result: 'Lunas Selang Beberapa Jam Sebelum Diviralkan'
      },
      timeline: [
        { year: 'Usia 20 Tahun', text: 'Memberanikan diri memproduksi film sendiri. Meminjam dana besar untuk mewujudkan mimpinya.' },
        { year: 'Tekanan Tagihan', text: 'Utang Rp 5 miliar ditagih lebih cepat dari jadwal. Ancaman diviralkan di media sosial membayangi.' },
        { year: 'Titik Terendah', text: 'Pasrah sepenuhnya. Mendatangi Habib Hasan bin Ja\'far Assegaf — bukan minta uang, tapi minta doa dan solusi.' },
        { year: 'Bantuan Tak Terduga', text: 'Habib Hasan menyuntikkan investasi Rp 2 miliar dengan syarat: keuntungannya untuk dakwah dan kegiatan keagamaan.' },
        { year: 'Lunas — Beberapa Jam Sebelum Viral', text: 'Seluruh utang Rp 5 miliar lunas tepat waktu, selang beberapa jam sebelum ancaman viral menjadi kenyataan.' }
      ],
      quote: 'Namanya Syakir anggap beliau ayah, beliau juga anggap Syakir udah kayak anak sendiri.',
      quoteAuthor: 'Syakir Daulay, mengenang kepercayaan Habib Hasan bin Ja\'far Assegaf',
      chapters: [
        {
          num: 1,
          title: 'Mimpi Besar di Usia Muda',
          paragraphs: [
            'Syakir Daulay masih sangat muda. Di usianya yang baru menginjak 20 tahun, ia sudah berani bermimpi besar. Ia adalah seorang aktor dan penyanyi yang mulai dikenal. Tapi Syakir tidak puas hanya tampil di depan kamera. Ia ingin menciptakan karyanya sendiri — sebuah film yang ia produksi dari awal hingga akhir.',
            '"Ini adalah langkah besarku," pikirnya. Tapi langkah besar membutuhkan biaya besar. Dan Syakir, di usianya yang masih sangat belia, harus mengambil keputusan yang berisiko: berutang.',
            'Rp 5 miliar. Angka yang sangat besar untuk seorang pemuda seusianya. Bukan angka yang bisa ditanggung dengan tenang oleh siapa pun di usia 20 tahun. Tapi Syakir memilihnya — karena ia percaya pada mimpinya.'
          ]
        },
        {
          num: 2,
          title: 'Ketika Utang Menjadi Ancaman Viral',
          paragraphs: [
            'Produksi film berjalan. Tapi di balik layar, Syakir mulai merasakan beratnya beban yang ia pikul. Utang Rp 5 miliar bukanlah angka main-main. Tekanan mulai datang. Dan yang terburuk: ada pihak yang menagih lebih cepat dari jadwal yang disepakati.',
            'Syakir kebingungan. Ia tidak punya dana talangan sebesar itu dalam waktu singkat. Ancaman mulai menghantuinya — ia akan diviralkan di media sosial karena belum melunasi utangnya.',
            '"Sudah tinggal selang beberapa jam, akhirnya enggak jadi (diviralkan) karena terbayarkan," kenangnya kemudian. Bayangkan detik-detik menjelang kehancuran reputasi itu. Seorang pemuda berusia 20 tahun, yang seharusnya menikmati masa mudanya, justru harus bergulat dengan ancaman dan tekanan yang luar biasa.'
          ]
        },
        {
          num: 3,
          title: 'Pasrah dan Datang Meminta Doa',
          paragraphs: [
            'Di titik terendah itulah, Syakir melakukan satu hal yang mungkin selama ini ia abaikan: ia pasrah sepenuhnya. Ia mendatangi gurunya, almarhum Habib Hasan bin Ja\'far Assegaf. Bukan untuk meminta uang, tapi untuk meminta doa dan solusi.',
            '"Ya Allah, di situ kayak, \'Bib, Syakir minta doa aja, solusi dari Habib\'. Memang apa-apa cerita dan saat itu udah pasrah aja, curhat saja," tutur Syakir. Ia tidak datang dengan permintaan yang terstruktur. Ia tidak datang dengan proposal atau rencana bisnis.',
            'Ia datang dengan kerendahan hati seorang anak yang sedang dalam kesulitan — dan meletakkan segalanya di depan seorang guru yang ia percaya. Terkadang, itulah keberanian terbesar yang bisa dilakukan seseorang.'
          ]
        },
        {
          num: 4,
          title: 'Bantuan Tak Terduga — Investasi Berbalut Amanah',
          paragraphs: [
            'Dan kemudian, bantuan datang dari arah yang tak terduga. Habib Hasan memberikan dana sebesar Rp 2 miliar dalam bentuk investasi. Tapi ada syaratnya — dan syarat ini bukan tentang bunga atau jaminan aset.',
            'Syaratnya: keuntungan dari investasi itu harus digunakan untuk dakwah dan kegiatan keagamaan. "Gue inves kalau ada untungnya, lo pakai buat dakwah majelis. Kalaupun gue nggak ada, ya gue titip anak-anak gue," kenang Syakir menirukan kata-kata gurunya.',
            'Bukan sekadar uang. Itu adalah kepercayaan. Itu adalah amanah. Itu adalah kasih sayang seorang guru pada muridnya yang diperlakukan layaknya anak kandung. "Namanya Syakir anggap beliau ayah, beliau juga anggap Syakir udah kayak anak sendiri," kenangnya.'
          ]
        },
        {
          num: 5,
          title: 'Lunas dan Amanah yang Terus Dipegang',
          paragraphs: [
            'Dengan bantuan itu, Syakir berhasil melunasi seluruh utang Rp 5 miliar-nya tepat waktu — selang beberapa jam sebelum ancaman viral menjadi kenyataan. "Pernah (punya utang) tapi utang bisnis. Sekarang sudah beres, Alhamdulillah," ungkapnya.',
            'Film yang ia produksi pun berjalan lancar. Dan yang terpenting, ia mendapatkan pelajaran berharga yang tidak bisa dibeli di bangku mana pun tentang dunia bisnis, kepercayaan, dan amanah.',
            'Dari seorang pemuda yang hampir dihancurkan oleh utang di usia 20 tahun, kini ia berdiri sebagai bukti bahwa di tengah kesulitan, selalu ada jalan — terutama bagi mereka yang tidak pernah berhenti berdoa, tidak malu untuk meminta pertolongan, dan tidak melupakan amanah yang diberikan. Keuntungan dari investasi Habib Hasan ia gunakan untuk dakwah dan kegiatan keagamaan — sebuah komitmen yang ia pegang teguh.'
          ]
        }
      ],
      takeaways: [
        'Kalau Tidak Mampu Bayar, Jangan Diam — Komunikasikan: Syakir hampir diviralkan karena tagihan menumpuk tanpa komunikasi yang baik. Proaktif menghubungi kreditur dan negosiasi jadwal adalah langkah pertama yang wajib.',
        'Pasrah Bukan Lemah — Itu Titik Balik: Ketika Syakir berhenti berusaha sendiri dan memilih untuk pasrah dan meminta doa, itulah saat pertolongan tak terduga datang. Kadang ego yang terlalu besar menghalangi bantuan masuk.',
        'Bantuan Datang Bukan Selalu dalam Bentuk yang Kita Harapkan: Rp 2 miliar dari Habib Hasan bukan hibah — itu investasi dengan amanah dakwah. Bersedia menerima bantuan dalam bentuk apa pun, dengan syarat apa pun yang terhormat, adalah kematangan jiwa.',
        'Risiko Bisnis di Usia Muda Harus Disertai Pemahaman Arus Kas: Produksi film memang mahal, tapi tanpa manajemen pembayaran yang jelas kepada kreditur, mimpi besar bisa berakhir di media sosial sebagai berita viral yang memalukan.'
      ]
    },
    {
      id: 'pasek',
      featured: false,
      name: 'Pasek Reksa (Gede Pasek Reksa Saputra)',
      tagline: 'Pandemi, Utang Hampir Rp 500 Juta, Orang Tua Bercerai & Persiapan Pernikahan — Bangkit Lewat Kekuatan Mindset',
      title: 'Di Tengah Badai, Ia Memilih Melenting',
      subtitle: 'Pengusaha Muda Singaraja & Ketua WMS 2025–2027 — Properti, Pertanian Puluhan Hektare & Produk Madu',
      origin: 'Singaraja, Bali',
      ageAtRebound: '20-an Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Hampir Rp 500 Jt',
      badge: 'Ketua WMS Singaraja 2025–2027',
      theme: 'amber',
      accentColor: '#B45309',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Hampir Rp 500 Juta',
        age: '20-an Tahun',
        lowest: 'Pandemi COVID, Tidak Punya Kerja, Orang Tua Cerai, Persiapan Nikah',
        action: 'Ubah Mindset — "Seperti Bola, Ditekan Makin Melenting"',
        result: 'Properti + Pertanian Puluhan Hektare + Madu + Ketua WMS Singaraja'
      },
      timeline: [
        { year: '2020 — Pandemi', text: 'COVID-19 meluluhkan segalanya sekaligus: kehilangan kerja, utang hampir Rp 500 juta, orang tua bercerai, dan sedang mempersiapkan pernikahan.' },
        { year: 'Titik Terendah', text: '"Masa yang sangat berat" — empat tekanan berat menghantam dalam waktu bersamaan.' },
        { year: 'Titik Balik — Mindset', text: 'Memilih mengubah cara pandang: kesulitan bukan untuk dijatuhkan, tapi untuk melenting lebih tinggi seperti bola yang ditekan.' },
        { year: '1–3 Tahun Pemulihan', text: 'Membangun relasi, membuka peluang baru, keluar perlahan dari tekanan finansial satu per satu.' },
        { year: 'Hari Ini — Rebound', text: 'Mengembangkan properti, pertanian puluhan hektare, dan produk madu berbasis kemitraan. Terpilih sebagai Ketua WMS Singaraja 2025–2027.' }
      ],
      quote: 'Bisnis itu bukan soal uang semata, tapi soal mindset dan keyakinan. Dari situ mental dan kepercayaan diri akan terbentuk.',
      quoteAuthor: 'Pasek Reksa, pengusaha muda Singaraja & Ketua Wirausahawan Muda Singaraja 2025–2027',
      chapters: [
        {
          num: 1,
          title: 'Badai yang Datang Sekaligus',
          paragraphs: [
            'Singaraja, Bali. Tahun 2020. Pasek Reksa, seorang pengusaha muda di bidang properti, sedang berada di titik yang ia percaya sebagai awal dari kejayaannya. Tapi COVID-19 datang — dan segalanya runtuh dalam sekejap.',
            'Ia kehilangan pekerjaan. Proyek-proyek propertinya menguap. Dan yang lebih menyakitkan: orang tuanya bercerai. Di saat yang sama, ia sedang mempersiapkan pernikahannya sendiri.',
            '"Saat COVID, saya punya utang hampir setengah miliar, tidak punya pekerjaan, orang tua bercerai, dan sedang mempersiapkan pernikahan. Itu masa yang sangat berat," kenangnya kemudian. Empat tekanan berat — finansial, pekerjaan, keluarga, dan pernikahan — menghantam dalam waktu yang hampir bersamaan.'
          ]
        },
        {
          num: 2,
          title: 'Saat Bola Ditekan ke Bawah',
          paragraphs: [
            'Di titik terendah itulah, Pasek mengambil keputusan yang mengubah segalanya. Ia memilih untuk tidak tenggelam dalam keputusasaan. Ia memilih untuk mengubah cara pandangnya terhadap masalah yang sedang mengepungnya.',
            '"Saya memberi arti bahwa ini adalah proses untuk naik level. Seperti bola, semakin ditekan ke bawah, semakin tinggi dia akan melenting," katanya. Analogi sederhana, tapi mengubah cara ia memandang setiap beban yang menekannya.',
            'Ia mulai menjaga mindset-nya. Ia mulai membangun jaringan pertemanan yang positif dan mendukung — orang-orang yang tidak menghakimi situasinya, tapi yang membantu ia melihat peluang di tengah krisis. Ia percaya bahwa setiap kesulitan adalah peluang — bukan untuk jatuh, tapi untuk melenting lebih tinggi.'
          ]
        },
        {
          num: 3,
          title: 'Perlahan, Cahaya Mulai Muncul',
          paragraphs: [
            'Dengan mindset baru, Pasek mulai bergerak. Ia tidak menunggu kesempatan besar untuk datang sendiri. Ia memulai dari hal-hal kecil. Ia membangun relasi satu per satu. Ia membuka diri pada peluang-peluang baru yang mungkin sebelumnya tidak pernah ia pertimbangkan.',
            'Butuh waktu. Satu hingga tiga tahun. Tidak ada jalan pintas. Tidak ada mukjizat instan. Hanya konsistensi dan perubahan pola pikir yang dijalankan setiap hari, bahkan di hari-hari paling sulit sekalipun.',
            'Tapi perlahan, beban utang hampir setengah miliar yang dulu menghantuinya mulai terasa ringan. Satu per satu, ia keluar dari tekanan finansial. Satu per satu, ia membangun kembali usahanya dari nol.'
          ]
        },
        {
          num: 4,
          title: 'Dari Properti ke Puluhan Hektare Lahan dan Produk Madu',
          paragraphs: [
            'Hari ini, Pasek Reksa bukan lagi pemuda yang terpuruk dengan utang di masa pandemi. Ia tidak hanya bergerak di sektor properti. Ia juga mengembangkan usaha di bidang pertanian hingga puluhan hektare lahan, serta mengelola produk madu berbasis kemitraan.',
            'Model bisnis berbasis kemitraan yang ia bangun memungkinkan pertumbuhan yang lebih organik dan berkelanjutan — tidak bergantung pada satu sumber modal tunggal, tapi pada jaringan dan kepercayaan yang dibangun dengan teliti.',
            'Ia bahkan terpilih sebagai Ketua Umum Wirausahawan Muda Singaraja (WMS) periode 2025–2027. Sebuah pengakuan atas kepemimpinan, ketangguhan, dan semangatnya dalam mendorong pertumbuhan wirausaha muda di Buleleng. Dari pemuda yang hampir tenggelam dalam utang pandemi, kini ia memimpin komunitas pengusaha muda.'
          ]
        },
        {
          num: 5,
          title: 'Filosofi Melenting: Setiap Kejadian Tergantung Cara Kita Memberinya Arti',
          paragraphs: [
            '"Bisnis itu bukan soal uang semata, tapi soal mindset dan keyakinan. Dari situ mental dan kepercayaan diri akan terbentuk," ujarnya. Ia juga menekankan pentingnya konsistensi dan keberanian mencoba hal baru bagi generasi muda. Kegagalan, menurutnya, bukanlah akhir, melainkan bagian dari proses belajar.',
            '"Setiap kejadian tergantung bagaimana kita memberi arti. Kalau kita melihatnya sebagai pelajaran, maka itu akan menguatkan kita, bukan menjatuhkan," katanya. Filosofi ini bukan sekadar kata-kata indah — ia lahir dari pengalaman nyata seseorang yang pernah menghadapi empat krisis sekaligus di usia muda.',
            'Kisah Pasek Reksa mengajarkan bahwa sebelum strategi bisnis, sebelum modal, sebelum koneksi — ada satu hal yang lebih mendasar yang menentukan apakah seseorang akan tenggelam atau melenting: cara ia memberi makna pada apa yang ia alami.'
          ]
        }
      ],
      takeaways: [
        'Mindset adalah Modal Pertama: Sebelum cari investor atau pinjaman baru, perbaiki cara pandangmu terhadap masalah. Pasek tidak punya uang tapi ia punya keyakinan bahwa tekanan adalah bahan bakar untuk melenting.',
        'Empat Krisis Sekaligus Bisa Diatasi Satu per Satu: Utang, kehilangan kerja, keluarga, dan pernikahan — semuanya berat, tapi diselesaikan satu demi satu dengan konsistensi, bukan panik.',
        'Jaringan Positif adalah Aset yang Tidak Terlihat di Neraca: Komunitas orang-orang yang mendukung secara mental jauh lebih berharga daripada modal uang di saat krisis.',
        'Model Kemitraan Mengurangi Risiko Tunggal: Pertanian dan madu berbasis kemitraan yang dibangun Pasek menunjukkan bahwa bisnis yang tersebar risikonya jauh lebih tahan terhadap guncangan daripada yang bergantung pada satu sumber.'
      ]
    },
    {
      id: 'maimun',
      featured: false,
      name: 'Maimun',
      tagline: 'Banjir Situ Gintung 2009 Menghancurkan Segalanya — Dua Karyawan Tewas, Rugi Rp 1 M, Utang Rp 250 Jt, Bangkit dengan Nama "Bangket Sejati"',
      title: 'Banjir yang Menghancurkan, Nama yang Membangkitkan',
      subtitle: 'Pengusaha Furnitur, Tangerang Selatan — Bangkit dari Nol Pasca Banjir Bandang Situ Gintung 2009',
      origin: 'Ciputat, Tangerang Selatan',
      ageAtRebound: '47 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'indonesia'],
      categoryLabel: 'Rugi Rp 1 M + Utang Rp 250 Jt',
      badge: 'Bangket Sejati — Simbol Kebangkitan',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: 'Rp 250,6 Juta (Ganti Rugi Pesanan)',
        age: '47 Tahun',
        lowest: 'Banjir Bandang Situ Gintung — 2 Karyawan Tewas, Pabrik & Stok Rp 1 M Musnah',
        action: 'Modal Rp 30 Jt (Teman) + Pinjaman Rp 4,5 Jt (Rumah Zakat)',
        result: 'Bangket Sejati — Bangkit, Utang Lunas Sedikit Demi Sedikit'
      },
      timeline: [
        { year: 'Sebelum 2009', text: 'Membangun pabrik furnitur "Gunung Raya" di Kampung Gintung, Ciputat — tumbuh dengan kepercayaan pelanggan dan loyalitas karyawan.' },
        { year: '26 Maret 2009 — 05.00 Pagi', text: 'Banjir bandang Situ Gintung meluluhlantakkan segalanya. Pabrik, stok furnitur pesanan Rp 1 miliar, dan bahan baku musnah dalam hitungan detik.' },
        { year: 'Dua Karyawan Tewas', text: 'Dua orang kepercayaannya terseret banjir — salah satunya sedang hamil enam bulan. Luka yang tidak hanya finansial.' },
        { year: 'Utang Rp 250 Juta', text: 'Harus mengganti rugi pesanan pelanggan yang hancur. Utang bukan dari ekspansi, tapi dari tanggung jawab moral.' },
        { year: 'Tiga Bulan Kemudian', text: 'Mulai mencari modal. Mendapat Rp 30 juta dari teman-teman dan pinjaman tanpa bunga Rp 4,5 juta dari rumah zakat.' },
        { year: 'Bangket Sejati', text: 'Mengganti nama perusahaan dari "Gunung Raya" menjadi "Bangket Sejati" — simbol doa dan tekad bahwa kebangkitan sejati bisa lahir dari reruntuhan.' }
      ],
      quote: 'Untuk memaknai kebangkitan usaha.',
      quoteAuthor: 'Maimun, alasan di balik pergantian nama dari "Gunung Raya" menjadi "Bangket Sejati"',
      chapters: [
        {
          num: 1,
          title: 'Fajar Kelabu di Situ Gintung',
          paragraphs: [
            'Kampung Gintung, Tangerang Selatan. 26 Maret 2009. Pukul 05.00 pagi. Sebagian besar warga masih terlelap dalam mimpi. Maimun, pengusaha furnitur berusia 47 tahun, terbangun oleh suara gemuruh yang aneh. Sebelum ia sempat memahami apa yang terjadi, air datang — bukan sekadar genangan, tapi gelombang dahsyat yang menghancurkan segalanya.',
            'Banjir bandang Situ Gintung meluluhlantakkan permukiman dan tempat-tempat usaha dalam hitungan detik. Pabrik furnitur Maimun — yang ia bangun dengan susah payah selama bertahun-tahun — lenyap ditelan air. Puluhan furnitur pesanan yang sudah jadi dan sudah dibayar pelanggan, hanyut dan rusak total. Bahan baku dan material senilai sekitar Rp 1 miliar musnah dalam sekejap.',
            'Tapi kehilangan materi bukanlah yang paling menyakitkan. Dua karyawannya tewas terseret banjir. Salah satunya sedang hamil enam bulan. "Setiap kali benaknya kosong, bayangan dua karyawannya yang terseret banjir selalu melintas," kenangnya kemudian. Ada duka yang tidak bisa dihitung dengan angka.'
          ]
        },
        {
          num: 2,
          title: 'Rp 250 Juta yang Menghantui',
          paragraphs: [
            'Dari puing-puing usahanya, Maimun harus menghadapi kenyataan lain: utang Rp 250,6 juta. Ini bukan utang untuk ekspansi bisnis. Bukan utang karena kesalahan investasi atau spekulasi yang gagal.',
            'Ini adalah utang untuk mengganti rugi pesanan pelanggan yang hancur akibat bencana yang tidak ia pilih, yang tidak ia inginkan, yang datang tanpa peringatan. Ia harus bertanggung jawab atas sesuatu yang bukan kesalahannya — dan itulah beban yang paling berat.',
            'Ia kehilangan tempat usaha. Kehilangan stok. Kehilangan dua orang kepercayaan. Dan kini, ia harus memikirkan bagaimana menghidupi istri dan dua anaknya yang masih bersekolah, sambil melunasi utang yang menggunung. "Bagaimana caraku bangkit dari sini?" tanyanya pada dirinya sendiri setiap malam.'
          ]
        },
        {
          num: 3,
          title: 'Tiga Bulan dan Modal yang Dikumpulkan',
          paragraphs: [
            'Tiga bulan pascabanjir, Maimun mulai bergerak. Ia mencari modal dari mana pun yang bisa ia jangkau. Dari teman-teman yang bersimpati dengan kondisinya, ia mendapat bantuan Rp 30 juta. Dari rumah zakat, ia memperoleh pinjaman tanpa bunga Rp 4,5 juta.',
            'Total modal: Rp 34,5 juta. Angka yang sangat kecil dibandingkan kerugian Rp 1 miliar yang ia alami. Tapi Maimun tidak punya pilihan lain selain memulai dari sana. Ia tidak menyesali kecilnya modal — ia bersyukur bahwa masih ada yang mau membantu.',
            'Dengan modal seadanya itu, ia memulai kembali usahanya dari nol. Perlahan. Pelan tapi pasti. Meski omzetnya jauh tidak sebanding dengan sebelum banjir, Maimun bersyukur — usahanya mulai membaik. Sebagian besar penghasilannya ia gunakan untuk membayar utang, sedikit demi sedikit.'
          ]
        },
        {
          num: 4,
          title: 'Bangket Sejati — Nama yang Lahir dari Reruntuhan',
          paragraphs: [
            'Tapi Maimun melakukan sesuatu yang lebih dari sekadar membangun kembali usahanya. Ia melakukan sesuatu yang simbolis. Ia mengganti nama perusahaannya.',
            'Dari Gunung Raya — nama yang mungkin melambangkan kejayaan dan kemegahan masa lalu — menjadi Bangket Sejati. "Untuk memaknai kebangkitan usaha," katanya. Sebuah nama yang sarat makna. Bukan sekadar label bisnis, tapi doa dan tekad.',
            '"Bangket" — bangkit. "Sejati" — sungguh-sungguh, nyata, tulus. Ia ingin ingat setiap hari bahwa ia pernah hancur, dan bahwa kebangkitannya bukan kebetulan — tapi hasil dari perjuangan yang keras dan keinginan yang sejati. Nama itu menjadi pengingat abadi, terpahat di setiap lembar kayu yang ia ukir.'
          ]
        },
        {
          num: 5,
          title: 'Pelajaran dari Seseorang yang Kehilangan Segalanya karena Bencana',
          paragraphs: [
            'Kisah Maimun bukanlah kisah tentang pengusaha yang gagal karena kesalahan bisnis. Ini adalah kisah tentang seorang pria yang kehilangan segalanya akibat bencana yang tak terduga — dan memilih untuk tidak tenggelam dalam keputusasaan.',
            'Ia kehilangan dua karyawan yang ia percaya. Ia kehilangan tempat usaha dan stok senilai miliaran. Ia berutang ratusan juta bukan karena keserakahannya, tapi karena tanggung jawabnya kepada pelanggan. Tapi ia tidak berhenti.',
            'Ia mencari modal. Ia membangun kembali. Ia mengganti nama perusahaannya menjadi pengingat abadi bahwa dari keterpurukan, kebangkitan sejati bisa lahir. Karena terkadang, bencana bukan hanya menghancurkan — ia juga memberi kesempatan untuk membangun ulang dengan fondasi yang lebih kokoh, lebih tulus, lebih bermakna.'
          ]
        }
      ],
      takeaways: [
        'Bencana Bukan Kesalahan — Tapi Tanggung Jawab Tetap Ada: Maimun harus membayar ganti rugi pesanan pelanggan meski banjir bukan salahnya. Memiliki asuransi usaha dan dana darurat adalah perlindungan minimal yang wajib dimiliki setiap pengusaha.',
        'Modal Kecil Tidak Menghalangi Permulaan: Dari Rp 34,5 juta (Rp 30 juta + Rp 4,5 juta), Maimun memulai ulang. Besarnya modal bukan penentu — kesungguhan untuk memulailah yang menentukan.',
        'Nama Bisnis Bisa Menjadi Jangkar Mental: Mengganti nama dari "Gunung Raya" ke "Bangket Sejati" bukan sekadar rebranding — itu adalah ritual psikologis yang membantu Maimun menegaskan identitas barunya sebagai orang yang telah bangkit.',
        'Pinjaman Tanpa Bunga dari Lembaga Sosial adalah Opsi Nyata: Rp 4,5 juta dari rumah zakat tanpa bunga adalah contoh nyata bahwa lembaga zakat dan sosial bisa menjadi sumber modal mikro di saat darurat — sesuatu yang sering dilupakan oleh pengusaha kecil.'
      ]
    },
    {
      id: 'fauzi',
      featured: false,
      name: 'Fauzi Priambodo',
      tagline: 'Dari "Adiktif Utang" Rp 140 Miliar & Tender Proyek Macet 2020, Jual 20 Toko & Bergabung SyaREA World untuk Bangkit',
      title: 'Dari Kecanduan Utang Rp 140 Miliar, Kini Bebas dan Bangkit',
      subtitle: 'CEO PT Inspirasi Prima Nusantara — Melunasi Utang Rp 140 Miliar dengan Menjual 20 Toko',
      origin: 'Indonesia',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'bankrupt', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 140 M',
      badge: 'Lunas — 20 Toko Dilepas demi Kebebasan',
      theme: 'indigo',
      accentColor: '#4338CA',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 140 Miliar',
        age: '40-an Tahun',
        lowest: 'Tender Proyek Raksasa Macet 2020, Dana Mengalir Keluar Tanpa Pemasukan',
        action: 'Jual 20 Toko + Bergabung Komunitas SyaREA World',
        result: 'Lunas Rp 140 M — Bebas dari Lingkaran Kecanduan Utang'
      },
      timeline: [
        { year: 'Awal Ekspansi', text: 'Mulai meminjam Rp 1–2 miliar untuk ekspansi bisnis. Setiap pinjaman terasa seperti solusi — padahal sedang membangun gunung utang.' },
        { year: 'Adiktif Utang', text: 'Pinjaman terus bertambah tanpa perhitungan matang. Total utang membengkak hingga Rp 140 miliar.' },
        { year: '2020 — Tender Macet', text: 'Mendapat tender proyek besar yang tidak berjalan sesuai rencana. Dana keluar, pemasukan macet, keuangan perusahaan tertekan ekstrem.' },
        { year: 'Titik Balik — SyaREA World', text: 'Bergabung dengan komunitas SyaREA World. Mendapat pandangan baru: ada cara berkembang tanpa jebakan utang.' },
        { year: 'Jual 20 Toko', text: 'Mengambil keputusan menyakitkan: melepas 20 toko yang dibangun dengan susah payah untuk menutup seluruh utang.' },
        { year: 'Hari Ini — Lunas', text: 'Seluruh utang Rp 140 miliar berhasil dilunasi. Membangun bisnis baru dengan fondasi yang lebih hati-hati dan bijak.' }
      ],
      quote: 'Utang bisa menjadi bahan bakar pertumbuhan bisnis sekaligus jebakan yang mematikan.',
      quoteAuthor: 'Fauzi Priambodo, CEO PT Inspirasi Prima Nusantara',
      chapters: [
        {
          num: 1,
          title: 'Pengusaha yang Terlalu Cepat Berlari',
          paragraphs: [
            'Fauzi Priambodo adalah seorang pengusaha dengan ambisi besar. Perusahaannya, PT Inspirasi Prima Nusantara, bergerak cepat. Ekspansi demi ekspansi ia lakukan. Toko-toko baru dibuka. Proyek-proyek besar ia kejar. Setiap pertumbuhan terasa seperti bukti bahwa ia berada di jalur yang benar.',
            'Untuk membiayai semua itu, ia mulai meminjam. Awalnya hanya Rp 1 miliar. Lalu Rp 2 miliar. Lalu terus bertambah, karena setiap toko baru butuh modal, setiap proyek baru butuh dana talangan, dan setiap ekspansi butuh leverage.',
            '"Saya sudah adiktif utang," akunya kemudian. Ia tidak menyadari bahwa ia sedang berjalan di atas jurang. Setiap pinjaman baru terasa seperti solusi — padahal, itu hanya menambah beban yang suatu hari akan menghantamnya dengan kekuatan yang jauh lebih besar dari semua keuntungan yang pernah ia raih.'
          ]
        },
        {
          num: 2,
          title: '2020 — Tender yang Menjadi Bumerang',
          paragraphs: [
            'Tahun 2020 datang dengan mimpi besar. Fauzi mendapatkan tender proyek raksasa. Ia yakin ini adalah langkahnya menuju puncak. Ia mengeluarkan dana besar. Ia mempersiapkan segalanya dengan antusias.',
            'Tapi proyek itu tidak berjalan sesuai rencana. Dana yang sudah dikeluarkan mengalami kemacetan. Tidak ada pemasukan yang masuk untuk menutup arus kas yang terus keluar. Sementara utang-utang lama terus berbunga.',
            'Fauzi duduk di ruang kerjanya, memandangi tumpukan tagihan yang kini totalnya mencapai Rp 140 miliar. Sebuah angka yang dulu terasa seperti ukuran ambisi, kini terasa seperti rantai yang mengikat kedua tangannya. "Bagaimana caraku keluar dari sini?" tanya batinnya.'
          ]
        },
        {
          num: 3,
          title: 'Titik Balik di Komunitas SyaREA World',
          paragraphs: [
            'Di titik terendah itulah, Fauzi menemukan jalan. Ia bergabung dengan komunitas SyaREA World — sebuah wadah bagi para pengusaha yang ingin menjalankan bisnis sesuai prinsip syariah dan keluar dari jebakan utang konvensional.',
            'Di sana, ia mendapatkan pandangan baru. Ia belajar bahwa utang bukanlah satu-satunya jalan untuk berkembang. Bahwa ada cara lain — lebih lambat, mungkin, tapi jauh lebih kokoh dan bebas dari lingkaran setan yang selama ini memenjarakannya.',
            '"Saya berhenti untuk utang," katanya — sebuah keputusan yang terdengar sederhana, tapi membutuhkan keberanian luar biasa dari seseorang yang sudah puluhan miliar terjerat di dalamnya. Komunitas itu memberinya keberanian untuk mengambil langkah yang selama ini ia takuti.'
          ]
        },
        {
          num: 4,
          title: 'Menjual 20 Toko untuk Kebebasan',
          paragraphs: [
            'Fauzi mengambil keputusan yang menyakitkan namun perlu: menjual 20 tokonya. Dua puluh toko. Dua puluh tempat yang ia bangun dengan susah payah selama bertahun-tahun. Dua puluh bukti nyata dari ambisi dan kerja kerasnya.',
            'Ia harus melepaskan semuanya. Tapi ia tahu, ini adalah harga yang harus ia bayar untuk kebebasan. Satu per satu, toko-toko itu ia lepas. Uangnya ia gunakan untuk menutup utang — bukan untuk ekspansi baru, bukan untuk proyek baru, tapi untuk melunasi setiap kewajiban yang pernah ia buat.',
            'Perlahan, beban Rp 140 miliar yang dulu terasa seperti gunung yang mustahil didaki, mulai terkikis. Sedikit demi sedikit. Dengan setiap pelepasan aset, ia bukan hanya membayar utang — ia juga membayar tunai pelajaran paling mahal dalam hidupnya.'
          ]
        },
        {
          num: 5,
          title: 'Bebas dari Kecanduan, Membangun Ulang dengan Bijak',
          paragraphs: [
            'Hari ini, Fauzi Priambodo bukan lagi pengusaha yang terjerat utang Rp 140 miliar. Ia telah bangkit. Ia telah bebas. Dari pengalaman pahitnya, ia belajar satu hal yang sederhana namun dalam: ekspansi tanpa perhitungan adalah jalan menuju kehancuran.',
            '"Utang bisa menjadi bahan bakar pertumbuhan bisnis sekaligus jebakan yang mematikan," demikian pesan yang ia sampaikan kepada para pengusaha lain. Ia tidak lagi "adiktif utang". Ia membangun bisnisnya dengan lebih hati-hati, lebih bijak, dan lebih sesuai dengan prinsip yang ia yakini.',
            'Dari seorang pengusaha yang hampir tenggelam dalam utang Rp 140 miliar, kini ia berdiri sebagai bukti bahwa kadang, kita harus rela melepas untuk bisa bertahan — dan dari sana, kebangkitan sejati dimulai. Bukan dengan lebih banyak pinjaman. Bukan dengan lebih banyak toko. Tapi dengan lebih banyak kebijaksanaan.'
          ]
        }
      ],
      takeaways: [
        '"Adiktif Utang" adalah Jebakan Nyata — Bukan Metafora: Fauzi mengakui kecanduan pinjaman seperti mengakui adiksi. Setiap kali bisnis butuh modal, refleks pertama harus bukan "pinjam dari mana?" tapi "apakah ini benar-benar dibutuhkan sekarang?"',
        'Tender Besar Tanpa Analisis Risiko = Bom Waktu: Proyek besar yang tidak berjalan sesuai rencana menjadi pemicu krisis final. Selalu sisihkan dana cadangan minimum 20–30% dari nilai tender sebelum menerima proyek besar.',
        'Melepas Aset adalah Strategi, Bukan Kekalahan: Menjual 20 toko terasa seperti menyerah, tapi itu adalah strategi terbaik yang menyelamatkan nama baik dan kebebasan finansial Fauzi. Aset bisa dibangun ulang — reputasi lebih sulit diperbaiki.',
        'Komunitas yang Tepat Bisa Mengubah Cara Pandang: Bergabung dengan SyaREA World memberi Fauzi perspektif baru yang tidak bisa ia temukan sendiri. Di saat paling bingung, komunitas yang tepat adalah navigator terbaik.'
      ]
    },
    {
      id: 'susi',
      featured: false,
      name: 'Susilowati (Ibu Susi)',
      tagline: 'Dari Bakso Keliling & Utang Bank Rp 300 Juta Pasca Kolaps 2018, Bangkit Lewat Limbah Kayu & TikTok Hingga Ekspor & Haji 2023',
      title: 'Dari Penjual Bakso dan Utang Rp 300 Juta, Kini Tembus Pasar Ekspor',
      subtitle: 'Pemilik SR Handicraft, Blitar — Dari Limbah Kayu Kendang ke Pasar Dunia Lewat TikTok',
      origin: 'Blitar, Jawa Timur',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Bank Rp 300 Jt',
      badge: 'Ekspor + Haji 2023 — Berkat Limbah Kayu & TikTok',
      theme: 'amber',
      accentColor: '#92400E',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Lebih dari Rp 300 Juta (Bank)',
        age: '40-an Tahun',
        lowest: 'Kerajinan Kayu Kolaps 2018, Tanah & Mobil Terjual, Pembayaran China & Korea Macet',
        action: 'Limbah Kayu → Gelas Kayu + Belajar TikTok/Shopee/Facebook Otodidak',
        result: 'Rp 50–100 Jt/Bulan dari TikTok, Ekspor, 20 Karyawan, Haji 2023'
      },
      timeline: [
        { year: 'Awal — Bakso Keliling', text: 'Berjualan bakso dengan sepeda ontel warisan bersama suami. Modal Rp 5 juta untuk merintis kerajinan kayu pertama.' },
        { year: '2016 — Puncak', text: 'Kendang jimbe meledak — kontrak supplier China, omzet miliaran, satu kontainer dikirim tiap minggu.' },
        { year: '2018 — Kolaps', text: 'Bahan baku lokal menurun kualitas. Pembayaran China & Korea macet total. Utang bank menumpuk lebih dari Rp 300 juta.' },
        { year: 'Jual Aset', text: 'Tanah dan mobil terpaksa dijual untuk menutup utang. Masih belum cukup.' },
        { year: 'Pandemi — Limbah Kayu', text: 'Menemukan peluang di limbah kayu kendang. Otodidak berjualan di Shopee, Facebook, TikTok. Produk baru: gelas kayu.' },
        { year: 'Nekat Umrah', text: 'Di tengah kesulitan, menggunakan sisa uang untuk umrah — "aku ingin mengejar akhirat biar dunia mengikuti."' },
        { year: '2023 — Haji & Ekspor', text: 'TikTok menghasilkan Rp 50–100 juta/bulan. Produk tembus ekspor. 20 karyawan (80% saudara & tetangga). Dipanggil haji tanpa antre.' }
      ],
      quote: 'Segenap sesuatu kalau kita pasrahkan, pasti akan kembali kepada kita lebih baik. Di jalan Allah pasti nanti dikasih jalan.',
      quoteAuthor: 'Susilowati (Ibu Susi), pemilik SR Handicraft Blitar',
      chapters: [
        {
          num: 1,
          title: 'Bakso Keliling dan Sepeda Ontel',
          paragraphs: [
            'Blitar, tahun 2000-an. Susilowati — yang akrab disapa Ibu Susi — dan suaminya memulai hari sebelum matahari terbit. Mereka bukan pengusaha besar. Mereka hanya sepasang suami istri yang berjualan bakso keliling dengan sepeda ontel warisan. Setiap hari, kaki mereka mengayuh pedal, menembus panas dan hujan, menawarkan semangkuk bakso hangat kepada para pelanggan.',
            'Tapi di balik kesederhanaan itu, ada mimpi yang terus menyala. Suaminya memiliki keahlian di bidang pertukangan. Dengan modal Rp 5 juta, mereka memberanikan diri merintis usaha kerajinan kayu. Kecil. Sederhana. Tapi itu adalah awal dari segalanya.',
            'Tidak ada jalan pintas. Tidak ada investor. Hanya sepasang tangan yang terampil, sebuah tekad, dan modal yang nyaris tidak ada.'
          ]
        },
        {
          num: 2,
          title: 'Puncak yang Begitu Cepat — Satu Kontainer Tiap Minggu',
          paragraphs: [
            'Tahun 2016. Mimpi mereka mulai menjadi kenyataan. Produk andalan mereka — kendang jimbe — meledak di pasaran. Kontrak besar dari supplier China mengalir deras. Omzet mencapai miliaran rupiah. Setiap minggu, satu kontainer penuh kendang jimbe dikirim ke luar negeri.',
            'Ibu Susi berdiri di tengah pabriknya yang ramai. Mesin-mesin berbunyi. Puluhan tangan bekerja. Dari sepeda ontel dan bakso keliling, kini ia memimpin bisnis ekspor bernilai miliaran.',
            'Tapi ia tidak tahu bahwa badai sedang mengintai di balik cakrawala yang tampak cerah itu.'
          ]
        },
        {
          num: 3,
          title: '2018 — Ketika Segalanya Runtuh',
          paragraphs: [
            'Tahun 2018 datang dengan pukulan bertubi-tubi. Kualitas bahan baku dari supplier lokal menurun drastis. Sementara itu, pembayaran dari pembeli di China dan Korea macet total — uang yang seharusnya masuk tidak pernah datang.',
            'Produksi terhenti. Pesanan batal. Utang menumpuk. Ibu Susi duduk di sudut ruang kerjanya yang mulai sepi. Di depannya, tagihan bank yang menggunung lebih dari Rp 300 juta.',
            'Ia menjual tanah. Menjual mobil. Menjual hampir semua yang ia miliki untuk menutup lubang yang semakin dalam. "Bagaimana caraku keluar dari sini?" tanyanya, di malam-malam yang terasa sangat panjang.'
          ]
        },
        {
          num: 4,
          title: 'Limbah Kayu, TikTok, dan Sebuah Keberanian Otodidak',
          paragraphs: [
            'Di titik terendah itulah, di masa pandemi ketika semua orang berhenti, Ibu Susi justru mulai bergerak. Ia melihat tumpukan limbah kayu kendang yang selama ini terbuang begitu saja. "Kenapa tidak kuolah menjadi sesuatu yang baru?" pikirnya.',
            'Ia belajar berjualan secara otodidak di platform digital — Shopee, Facebook, dan TikTok. Tidak ada mentor. Tidak ada kursus mahal. Hanya tekad dan kemauan untuk belajar hal baru di usia yang tidak lagi muda. Dari limbah kayu itu, ia menciptakan produk baru: gelas kayu. Sederhana. Elegan. Dan ternyata, pasar menyukainya.',
            'Satu per satu video TikTok ia unggah. Satu per satu pesanan masuk. Perlahan, cahaya mulai tampak di ujung terowongan yang selama ini gelap.'
          ]
        },
        {
          num: 5,
          title: 'Nekat Umrah di Tengah Kesulitan',
          paragraphs: [
            'Yang membuat kisah Ibu Susi unik adalah sebuah keputusan yang dianggap "nekat" oleh banyak orang. Di tengah kesulitan ekonomi pasca-bangkrut, dengan utang yang belum sepenuhnya lunas, ia menggunakan sisa uang penjualan aset untuk berangkat umrah.',
            '"Aku mau umrah dulu saja, aku ingin mengejar akhirat biar dunia mengikuti," ujarnya. Bukan karena ia kaya. Bukan karena ia sudah punya segalanya. Tapi karena ia percaya — percaya bahwa ketika kita mendahulukan Tuhan, dunia akan mengikuti.',
            'Dan keyakinannya terbukti.'
          ]
        },
        {
          num: 6,
          title: 'Dari Rp 300 Juta Menuju Pasar Dunia — dan Haji 2023',
          paragraphs: [
            'Hari ini, Ibu Susi bukan lagi perempuan yang terpuruk dengan utang Rp 300 juta. Dari TikTok saja, omzetnya mencapai Rp 50 juta hingga Rp 100 juta per bulan. Produk gelas kayunya telah menembus pasar ekspor. Dan yang paling membanggakan: usahanya kini memberdayakan sekitar 20 orang, dengan 80 persen di antaranya adalah saudara dan tetangga yang juga butuh pekerjaan.',
            'Pada 2023, ia dan suami mendapat panggilan haji tanpa antre — sebuah keberkahan yang datang setelah mereka kembali sukses berbisnis. Dari bakso keliling, ke pabrik ekspor, lalu kolaps, lalu bangkit lagi dari limbah kayu dan TikTok, lalu ke Tanah Suci.',
            '"Segenap sesuatu kalau kita pasrahkan, pasti akan kembali kepada kita lebih baik. Di jalan Allah pasti nanti dikasih jalan," pesannya. Sebuah filosofi yang lahir bukan dari teori, tapi dari perjalanan panjang seorang perempuan Blitar yang tidak pernah berhenti mencoba.'
          ]
        }
      ],
      takeaways: [
        'Limbah adalah Peluang yang Belum Dilihat: Ibu Susi melihat tumpukan limbah kayu sebagai bahan baku produk baru, bukan sampah. Selalu tanya: "Apa yang masih bisa dimanfaatkan dari yang sudah tidak terpakai?"',
        'Belajar Platform Digital Otodidak itu Mungkin: Tanpa mentor, tanpa kursus, Ibu Susi berhasil menguasai TikTok, Shopee, dan Facebook hingga omzet Rp 50–100 juta/bulan. Usia dan latar belakang bukan penghalang.',
        'Diversifikasi Pembeli Mencegah Krisis Piutang Macet: Ketergantungan pada satu supplier China dan Korea menjadi penyebab kolaps. Jangan biarkan lebih dari 30% pendapatan bergantung pada satu pembeli.',
        'Mendahulukan Keyakinan Spiritual di Saat Sulit adalah Pilihan yang Sah: Keputusan umrah di tengah krisis finansial mungkin tidak masuk di akal bisnis konvensional, tapi bagi Ibu Susi itu adalah sumber kekuatan mental yang membuka jalan-jalan yang tidak terduga.'
      ]
    },
    {
      id: 'fepto',
      featured: false,
      name: 'Feby Eki Prasetyo (Fepto)',
      tagline: 'Usia 20 Tahun, Utang Miliaran Rupiah dari Bisnis Kripto — Lunas dalam 3 Bulan, Kini Pimpin Fepto Group Ekspansi ke Pasar Asia',
      title: 'Dari Utang Miliaran di Usia 20 Tahun, Kini Ekspansi ke Pasar Asia',
      subtitle: 'Pendiri & CEO Fepto Group, Lampung — Teknologi Pembayaran, Kripto, Gaming & AI',
      origin: 'Lampung',
      ageAtRebound: '20 Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Miliaran (Usia 20 Thn)',
      badge: 'Lunas 3 Bulan — Fepto Group Ekspansi Asia',
      theme: 'indigo',
      accentColor: '#3730A3',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Miliaran Rupiah ≈ Rp 2 Miliar (Usia 20 Tahun)',
        age: '20 Tahun',
        lowest: 'Portofolio Kripto Lenyap, Terpuruk Finansial di Usia Sangat Muda',
        action: 'Bangun Fepto Group — Payment Gateway, Kripto, Gaming, AI via Komunitas & Media Sosial',
        result: 'Lunas 3 Bulan, Ekspansi Jakarta–Bandung–Bali–Asia, Visi Cashless 2030'
      },
      timeline: [
        { year: '2020 — Titik Jatuh', text: 'Di usia 20 tahun, kerugian besar dari bisnis cryptocurrency meninggalkan utang miliaran rupiah.' },
        { year: 'Memilih Bangkit', text: 'Tidak tenggelam dalam keputusasaan. Membuka diri terhadap peluang baru dengan modal yang nyaris nol.' },
        { year: 'Bangun Fepto Group', text: 'Mendirikan perusahaan teknologi berfokus pada payment gateway, kripto, digital gaming, dan AI. Memanfaatkan komunitas dan media sosial sebagai mesin pertumbuhan.' },
        { year: '3 Bulan — Lunas', text: 'Utang miliaran rupiah berhasil dilunasi hanya dalam 3 bulan berkat keterbukaan terhadap setiap peluang.' },
        { year: 'Hari Ini — Ekspansi Asia', text: 'Fepto Group hadir di Jakarta, Bandung, Lampung, dan Bali. Ekspansi ke pasar Asia. Visi: sistem pembayaran inklusif di era cashless 2030.' }
      ],
      quote: 'Tak selamanya berbisnis dimulai dengan Rp 100 juta. Bahkan Rp 100 ribu pun bisa asal ada kemauan dan tekad.',
      quoteAuthor: 'Feby Eki Prasetyo (Fepto), pendiri & CEO Fepto Group',
      chapters: [
        {
          num: 1,
          title: 'Jatuh di Era Kripto',
          paragraphs: [
            'Lampung, 2020. Feby Eki Prasetyo — yang akrab disapa Fepto — masih sangat muda. Di usianya yang ke-20, ia sudah berani terjun ke dunia investasi yang sedang naik daun: cryptocurrency. Baginya, ini adalah jalan cepat menuju kesuksesan. Dunia digital menjanjikan keuntungan besar. Namun, ia belum cukup berpengalaman untuk melihat risiko di balik janji manis itu.',
            'Dan kemudian, segalanya runtuh. Kerugian besar melanda portofolionya. Investasi yang ia tumpukkan harapan lenyap dalam sekejap. Yang tersisa hanyalah utang miliaran rupiah.',
            '"Tahun 2020 menjadi titik balik ketika saya terlilit hutang miliaran rupiah," kenangnya kemudian. Fepto terjatuh. Dunia yang dulu terasa terbuka lebar, kini terasa sesak dan sempit. Ia harus memikirkan bagaimana caranya bangkit dari lubang yang ia gali sendiri — di usia yang seharusnya masih penuh eksplorasi tanpa beban.'
          ]
        },
        {
          num: 2,
          title: 'Peluang di Tengah Kegagalan — Membangun dari Nol',
          paragraphs: [
            'Di titik terendah itulah, Fepto memilih untuk tidak tenggelam dalam keputusasaan. Ia memilih untuk membuka diri terhadap peluang baru. Ia tidak memiliki modal besar untuk memulai. Tapi ia memiliki satu hal yang tak ternilai: kemauan untuk beradaptasi dan belajar dari kegagalan.',
            'Fepto mulai membangun Fepto Group — sebuah perusahaan teknologi yang berfokus pada solusi di era digital. Ia tidak lagi bermain-main dengan spekulasi semata. Ia membangun sistem, menciptakan nilai, dan fokus pada inovasi nyata: payment gateway, keamanan digital, digital gaming, dan kecerdasan buatan (AI).',
            '"Tak selamanya berbisnis dimulai dengan Rp 100 juta. Bahkan Rp 100 ribu pun bisa asal ada kemauan dan tekad," tegasnya. Ia memanfaatkan komunitas, forum, dan media sosial sebagai mesin pertumbuhan organik — tanpa modal besar, hanya dengan koneksi dan kepercayaan yang dibangun satu per satu.'
          ]
        },
        {
          num: 3,
          title: '3 Bulan yang Mengubah Hidup',
          paragraphs: [
            'Dan kemudian, sesuatu yang luar biasa terjadi. Dalam waktu yang sangat singkat — hanya 3 bulan — Fepto berhasil membalikkan keadaannya.',
            'Utang miliaran rupiah yang dulu menghantuinya, kini lunas. "Berkat keterbukaan terhadap setiap peluang yang ada," katanya. Bukan dari satu sumber pendapatan besar, tapi dari banyak peluang kecil yang ia sambut satu per satu.',
            'Fepto menarik napas panjang. Beban yang menggantung di pundaknya sejak usia 20 tahun, akhirnya terlepas. Ia tidak hanya bebas dari utang — ia juga memiliki bisnis yang sedang tumbuh, tim yang sedang dibangun, dan visi yang semakin jelas.'
          ]
        },
        {
          num: 4,
          title: 'Dari Lampung ke Asia — Fepto Group dan Visi 2030',
          paragraphs: [
            'Hari ini, Fepto bukan lagi pemuda yang terpuruk dengan utang di usia 20 tahun. Ia adalah pendiri dan CEO Fepto Group, sebuah perusahaan teknologi yang telah hadir di berbagai kota di Indonesia — Jakarta, Bandung, Lampung, dan Bali — dengan rencana ekspansi ke pasar Asia.',
            'Visi perusahaannya besar dan konkret: mengembangkan sistem pembayaran digital yang inklusif untuk mengantisipasi era tanpa uang tunai di tahun 2030. Sebuah visi yang lahir bukan dari mimpi tanpa dasar, tapi dari seseorang yang pernah merasakan sendiri bagaimana dunia digital bisa menghancurkan — dan kemudian membangun.',
            '"Visi kami adalah mengembangkan teknologi yang inklusif sambil mendukung inovasi anak muda Indonesia. Mereka butuh dukungan nyata, baik dalam bentuk dana maupun fasilitas," ujarnya. Dari anak muda Lampung yang terjerat kripto, kini ia ingin menjadi jembatan bagi generasi berikutnya.'
          ]
        }
      ],
      takeaways: [
        'Kripto adalah Investasi Berisiko Tinggi — Bukan Jalan Pintas: Fepto kehilangan miliaran di usia 20 karena masuk tanpa pemahaman risiko yang cukup. Investasi aset digital butuh edukasi mendalam, bukan sekadar ikut tren.',
        'Kegagalan di Satu Bidang Bisa Jadi Bekal di Bidang Lain: Pengalaman Fepto di kripto — meski berakhir buruk — memberinya pemahaman mendalam tentang teknologi finansial yang kemudian menjadi fondasi Fepto Group.',
        'Komunitas dan Media Sosial adalah Modal Gratis yang Sering Diabaikan: Tanpa modal besar, Fepto membangun bisnis lewat komunitas dan media sosial. Jangkauan organik yang dibangun dengan konsistensi bisa menggantikan iklan berbayar senilai ratusan juta.',
        'Usia Muda adalah Keuntungan, Bukan Hambatan: Terpuruk di usia 20 dan lunas dalam 3 bulan, lalu ekspansi ke Asia di usia yang masih sangat muda — Fepto membuktikan bahwa kesalahan di usia muda adalah investasi pengalaman terbaik jika direspons dengan benar.'
      ]
    },
    {
      id: 'ican',
      featured: false,
      name: 'Ican Suherlan (Coach Ican)',
      tagline: 'Kehilangan Ibu dalam Perampokan di Usia 24, Penyakit Langka + Utang Rp 10 M di Usia 34, Hampir Bunuh Diri — Bangkit dengan Cariilmu & IBJ Group',
      title: 'Dari Kehilangan Ibu dan Utang Rp 10 Miliar, Kini Membantu 200.000 Peserta',
      subtitle: 'Pendiri Cariilmu & IBJ Group, Bandung — Lulusan ITB yang Bangkit dari Titik Tergelap dengan Modal Rp 100 Juta',
      origin: 'Bandung, Jawa Barat',
      ageAtRebound: '34 Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 10 M (Sakit Setahun)',
      badge: 'Cariilmu 200.000+ Peserta — IBJ Group',
      theme: 'emerald',
      accentColor: '#065F46',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rp 10 Miliar (Tidak Ada Penghasilan 1 Tahun)',
        age: '34 Tahun',
        lowest: 'Penyakit Langka 1 Tahun di RS, Kehilangan Kerja & Penghasilan, Sempat Ingin Bunuh Diri',
        action: 'Cariilmu (Platform Training Online) + Modal Rp 100 Jt dari Pesangon & BPJS',
        result: '200.000+ Peserta Prakerja, SUAI Skincare, Buatizin.id, IBJ Group'
      },
      timeline: [
        { year: '2005 — Lulus ITB', text: 'Lulus dari ITB dan mulai membangun karir profesional.' },
        { year: '2007 — Tragedi', text: 'Di usia 24 tahun, ibunya menjadi korban perampokan dan meninggal di rumah sendiri. Pelaku tak pernah ditemukan.' },
        { year: '2018 — Penyakit Langka Kambuh', text: 'Periodic Paralysis Hypokalemia kambuh. Terbaring di rumah sakit selama 1 tahun. Kehilangan pekerjaan dan penghasilan.' },
        { year: 'Utang Rp 10 M & Krisis Mental', text: 'Utang menumpuk hingga Rp 10 miliar. Frustasi dan sempat ingin bunuh diri. Memutuskan konseling ke psikolog.' },
        { year: 'Titik Balik — Passion Mengajar', text: 'Seorang teman menyarankan untuk mengikuti passion mengajar. Modal dari pesangon & BPJS: Rp 100 juta.' },
        { year: 'Cariilmu & IBJ Group', text: 'Mendirikan Cariilmu — platform training online untuk Kartu Prakerja. Pernah jual mobil untuk bayar THR karyawan. Tidak pernah menyerah.' },
        { year: 'Hari Ini', text: '200.000+ peserta. SUAI Skincare, Buatizin.id. Semua di bawah PT Ican Berkah Jaya (IBJ Group).' }
      ],
      quote: 'Mengajar adalah passion-ku. Dan dari passion itu, aku membangun segalanya kembali.',
      quoteAuthor: 'Ican Suherlan (Coach Ican), pendiri Cariilmu & IBJ Group',
      chapters: [
        {
          num: 1,
          title: 'Malam yang Mengubah Segalanya',
          paragraphs: [
            'Bandung, 2007. Ican Suherlan baru berusia 24 tahun. Hidupnya masih terasa normal — seperti pemuda lulusan ITB yang baru saja mulai merintis karir. Tapi takdir berbicara lain pada suatu malam.',
            'Ia terbangun dari tidurnya karena suara gaduh yang berasal dari kamar orang tuanya. Dengan hati berdebar, ia bergegas ke sana. Dan apa yang ia lihat membuat dunianya runtuh dalam sekejap. Ibunya terbaring bersimbah darah. Tidak bernyawa. Korban perampokan yang terjadi di rumah mereka sendiri.',
            'Ican mengejar pelaku. Tapi ia tidak berhasil menangkapnya. Hingga hari ini, pelaku tak kunjung ditemukan dan polisi sudah menutup kasusnya. Luka itu tidak pernah benar-benar sembuh — hanya ia belajar untuk terus hidup meski membawanya setiap hari.'
          ]
        },
        {
          num: 2,
          title: '2018 — Penyakit Langka yang Merebut Segalanya',
          paragraphs: [
            'Bertahun-tahun berlalu. Ican berusaha melanjutkan hidup dan membangun kariernya. Tapi pada 2018, badai datang lagi — kali ini dari dalam tubuhnya sendiri. Penyakit langka masa kecilnya, Periodic Paralysis Hypokalemia, kambuh. Penyakit yang menyebabkan pelemahan otot rangka secara periodik ini memaksanya terbaring di rumah sakit.',
            'Bukan beberapa minggu. Bukan beberapa bulan. Satu tahun penuh. Ia kehilangan pekerjaan. Ia kehilangan penghasilan. Dan yang lebih parah, biaya rumah sakit dan kebutuhan hidup selama setahun membuat utang menumpuk hingga Rp 10 miliar.',
            'Ican frustasi. Pikirannya gelap. "Aku sudah kehilangan ibu. Aku kehilangan pekerjaan. Aku kehilangan segalanya. Masih adakah jalan untukku?" Di titik tergelap hidupnya, ia sempat ingin mengakhiri semuanya.'
          ]
        },
        {
          num: 3,
          title: 'Konseling dan Satu Saran yang Mengubah Hidup',
          paragraphs: [
            'Di titik terendah itulah, Ican mengambil keputusan yang menyelamatkan hidupnya. Ia memutuskan untuk melakukan konseling dan konsultasi ke psikolog. Bukan hal yang mudah — dibutuhkan keberanian untuk mengakui bahwa ia membutuhkan bantuan.',
            'Dari proses konseling itu, perlahan, ia mulai menemukan cahaya. Dan kemudian, seorang teman memberinya saran berharga yang sederhana namun mengubah arah hidupnya: ikuti passion-mu.',
            'Passion Ican adalah mengajar. Sejak lama ia sudah merasakannya — kesenangan ketika bisa menjelaskan sesuatu dengan jelas, kepuasan ketika orang lain memahami sesuatu yang baru. "Mengajar? Dengan utang Rp 10 miliar dan kondisi tubuh yang baru pulih?" Tapi ia memutuskan untuk mencoba. Karena tidak mencoba pun bukan pilihan.'
          ]
        },
        {
          num: 4,
          title: 'Modal Rp 100 Juta dan Platform Cariilmu',
          paragraphs: [
            'Ican memulai bisnisnya dengan modal dari pesangon dan BPJS sebesar Rp 100 juta. Ia mendirikan Cariilmu — sebuah platform training online interaktif dan berkualitas tinggi, di mana peserta bisa memilih materi untuk mendukung perjalanan mereka sebagai karyawan, freelancer, atau pengusaha.',
            'Perjalanan tidak mulus. Banyak yang meragukannya — rekan dan kerabat memandang sinis pada seorang yang baru keluar dari rumah sakit setelah setahun, dengan utang Rp 10 miliar, kini ingin mendirikan platform pendidikan online. Bahkan ia sampai harus menjual mobil pribadinya hanya untuk membayar THR karyawan.',
            'Tapi Ican tidak pernah menyerah. Setiap penolakan ia jadikan bahan bakar. Setiap keraguan ia jadikan motivasi untuk membuktikan yang sebaliknya.'
          ]
        },
        {
          num: 5,
          title: '200.000 Peserta, IBJ Group, dan Warisan untuk Indonesia',
          paragraphs: [
            'Kerja keras Ican membuahkan hasil yang melampaui ekspektasinya sendiri. Cariilmu berkembang pesat dan menjadi salah satu pelatihan terbaik di Program Kartu Prakerja — program pemerintah yang menjangkau jutaan masyarakat Indonesia. Hingga kini, ia telah membantu lebih dari 200.000 peserta di seluruh Indonesia.',
            'Ia tidak berhenti di situ. Ia menciptakan brand-brand lain: SUAI Skincare dan Buatizin.id — diversifikasi bisnis yang menunjukkan bahwa visinya bukan sekadar satu platform, tapi sebuah ekosistem. Semua brand dan programnya kini berada di bawah naungan PT Ican Berkah Jaya (IBJ Group).',
            'Dari seorang pemuda yang kehilangan ibunya dalam tragedi di usia 24, dari seorang pria yang terbaring di rumah sakit selama setahun dengan utang Rp 10 miliar, dari seseorang yang sempat ingin mengakhiri hidupnya — kini Ican berdiri sebagai pengusaha sukses yang telah mengubah hidup ratusan ribu orang Indonesia.'
          ]
        }
      ],
      takeaways: [
        'Kesehatan Mental adalah Investasi, Bukan Kelemahan: Keputusan Ican untuk konseling ke psikolog di titik tergelap hidupnya adalah yang menyelamatkan segalanya. Jangan tunda minta bantuan profesional saat pikiran mulai gelap.',
        'Passion Bisa Menjadi Bisnis — dengan Struktur yang Tepat: Dari sekadar hobi mengajar, Ican membangun platform yang membantu 200.000+ orang. Passion tanpa sistem hanya hobi — passion dengan sistem dan tekad bisa menjadi bisnis yang bermakna.',
        'Modal Kecil + Kreativitas + Ketekunan > Modal Besar + Tanpa Arah: Dari Rp 100 juta pesangon dan BPJS, Ican membangun IBJ Group. Jumlah modal awal bukan penentu — bagaimana modal itu digunakan yang menentukan.',
        'Diversifikasi Brand dari Satu Core Competency: Dari Cariilmu (edukasi), Ican berkembang ke SUAI Skincare dan Buatizin.id. Satu keahlian inti — dalam kasus Ican adalah memahami kebutuhan pasar — bisa melahirkan banyak brand yang saling menguatkan.'
      ]
    },
    {
      id: 'menlu',
      featured: false,
      name: 'Menlu',
      tagline: 'Dari Anak Nelayan & Distributor Semen Bangkrut Utang Miliaran, Bangkit dengan 5 Cetakan Beton — Kini Raja Beton Banyuwangi via Rabanton',
      title: 'Dari Utang Miliaran dan Bangkrut, Kini Raja Beton Banyuwangi',
      subtitle: 'Pendiri Rabanton (Rajanya Banyuwangi Beton) — Inovasi Dermaga Apung Beton & Franchise Tanpa Royalti',
      origin: 'Banyuwangi, Jawa Timur',
      ageAtRebound: '30-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Miliaran Rupiah',
      badge: 'Raja Beton Banyuwangi — Rabanton',
      theme: 'teal',
      accentColor: '#0F766E',
      bgLight: '#F0FDFA',
      borderLight: '#CCFBF1',
      stats: {
        debt: 'Miliaran Rupiah (Bisnis Semen Kolaps)',
        age: '30-an Tahun',
        lowest: 'Bangkrut Total — Tidak Punya Tabungan, Justru Berutang Miliaran',
        action: '5 Cetakan Beton + Produksi Sendiri + Doa & Dukungan Keluarga',
        result: 'Rabanton — Raja Beton Banyuwangi, Dermaga Apung, Franchise Tanpa Royalti'
      },
      timeline: [
        { year: 'Latar Belakang', text: 'Lahir di Situbondo dari keluarga nelayan. Pindah ke Banyuwangi dan memulai karir bisnis.' },
        { year: 'Distributor Semen', text: 'Menjadi distributor semen dari paman yang punya pabrik. Persaingan ketat, tempo pembayaran panjang, risiko besar tanpa jaminan.' },
        { year: 'Bangkrut & Utang Miliaran', text: 'Bisnis semen kolaps total. Bukan hanya tanpa tabungan — justru terjerat utang miliaran rupiah.' },
        { year: 'Titik Balik — 5 Cetakan', text: 'Dengan sisa dana seadanya, membeli 5 cetakan beton. "Kalau ini gagal, saya benar-benar tidak tahu harus apa lagi."' },
        { year: 'Lahirnya Rabanton', text: 'Produk-produk beton pracetak mulai diterima pasar. Proyek pemerintah daerah membuka peluang besar.' },
        { year: 'Hari Ini — Raja Beton', text: 'Rabanton dikenal luas. Dermaga apung beton — inovasi maritim tanpa pondasi. Franchise tanpa royalti untuk pengusaha lokal.' }
      ],
      quote: 'Saya ingin jadi semut yang ada di mana-mana, bukan gajah besar yang hanya berdiri di satu tempat.',
      quoteAuthor: 'Menlu, pendiri Rabanton — Raja Beton Banyuwangi',
      chapters: [
        {
          num: 1,
          title: 'Anak Nelayan yang Bermimpi Besar',
          paragraphs: [
            'Situbondo, Jawa Timur. Seorang anak laki-laki tumbuh di tengah keluarga sederhana. Ayahnya adalah nelayan yang setiap hari melaut, ibunya menunggu di rumah dengan penuh harap. Anak itu bernama Menlu.',
            'Sejak kecil, ia sudah terbiasa membantu keluarga. Hidup di pesisir mengajarkannya satu hal yang tidak ada di buku sekolah mana pun: laut bisa memberi, tapi laut juga bisa mengambil. Ia belajar tentang ketidakpastian sejak dini.',
            'Namun, Menlu tidak ingin selamanya menjadi anak nelayan. Ia ingin lebih. Ia ingin membangun sesuatu yang besar — sesuatu yang bisa ia wariskan, sesuatu yang bisa mengangkat tidak hanya dirinya tapi juga orang-orang di sekitarnya.'
          ]
        },
        {
          num: 2,
          title: 'Distributor Semen yang Terjerat Utang',
          paragraphs: [
            'Kesempatan datang ketika Menlu menjadi distributor semen dari pamannya yang memiliki pabrik. Ia merasa ini adalah jalan menuju kesuksesan — sebuah jembatan yang sudah dibangun untuknya, tinggal ia yang berjalan di atasnya.',
            'Tapi dunia bisnis semen ternyata tidak semudah yang ia bayangkan. Persaingan harga begitu ketat. Tempo pembayaran dari pelanggan sangat panjang. Risiko besar tanpa jaminan membuatnya terjepit di antara dua batu yang terus merapat.',
            'Dan kemudian, segalanya runtuh. Menlu bangkrut. Bukan hanya tanpa tabungan — ia justru terjerat utang miliaran rupiah. "Bukan hanya tanpa tabungan, saya justru terjerat utang miliaran," kenangnya kemudian. Jembatan yang ia kira kokoh, ternyata rapuh dari dalam.'
          ]
        },
        {
          num: 3,
          title: 'Lima Cetakan Beton dan Sebuah Doa',
          paragraphs: [
            'Di titik terendah itulah, Menlu mengambil keputusan yang mengubah segalanya. Dengan sisa dana seadanya — angka yang jauh dari cukup untuk memulai bisnis baru — ia membeli lima cetakan beton. Lima cetakan. Itu saja. Tidak lebih.',
            'Dari situlah lahir produk pertamanya: beton pracetak untuk saluran drainase dan pagar. Sederhana. Kecil. Tapi itu adalah awal dari segalanya. "Kalau ini gagal, saya benar-benar tidak tahu harus apa lagi," ujarnya — sebuah kejujuran yang menunjukkan betapa dalam ia telah terdesak.',
            'Ia memproduksi sendiri. Berbekal doa, semangat, dan dukungan keluarga, ia terus bergerak. Tidak ada yang mewah. Tidak ada yang instan. Hanya kerja keras dan keyakinan bahwa dari lima cetakan beton, ia bisa membangun kembali hidupnya.'
          ]
        },
        {
          num: 4,
          title: 'Rabanton — Rajanya Banyuwangi Beton',
          paragraphs: [
            'Perlahan, usaha betonnya mulai mendapat perhatian. Proyek pemerintah daerah memberi peluang baru. Kualitas produknya berbicara lebih keras dari iklan mana pun. Dan dari situlah Rabanton — singkatan dari "Rajanya Banyuwangi Beton" yang kemudian diplesetkan menjadi "Rajanya Barang Beton" — mulai dikenal.',
            'Produk-produk Rabanton semakin luas dan berani berinovasi. Bukan hanya saluran drainase dan pagar, tapi juga sesuatu yang belum pernah ada sebelumnya: dermaga apung beton. Sebuah inovasi yang bisa terapung tanpa pondasi, mudah dipindahkan, tapi tetap kokoh — dengan biaya yang jauh lebih murah dibanding dermaga konvensional.',
            '"Kita ini negara maritim. Dengan dermaga apung, akses laut bisa lebih murah dan efisien," kata Menlu penuh semangat. Seorang anak nelayan yang kini menciptakan solusi untuk nelayan-nelayan lain seperti ayahnya dulu.'
          ]
        },
        {
          num: 5,
          title: 'Filosofi Semut, Bukan Gajah — dan Franchise Tanpa Royalti',
          paragraphs: [
            'Menlu tidak pernah melupakan masa-masa kelamnya. Ia tidak pernah melupakan lima cetakan beton yang menjadi titik balik hidupnya. Dan itu membuatnya memiliki cara pandang yang berbeda tentang kesuksesan.',
            '"Saya ingin jadi semut yang ada di mana-mana, bukan gajah besar yang hanya berdiri di satu tempat," ujarnya. Itulah sebabnya Rabanton menerapkan model franchise tanpa royalti — memberi peluang pengusaha lokal memproduksi beton pracetak dengan standar yang sama tanpa harus membayar biaya franchise yang memberatkan.',
            'Bagi Menlu, ukuran keberhasilan bisnis bukan hanya dari laba, tapi juga kesejahteraan karyawan. Gaji minimal selalu sesuai UMR dan dibayarkan tepat waktu. Dari anak nelayan di Situbondo, dari distributor semen yang bangkrut, dari pria yang hanya punya lima cetakan beton — kini ia berdiri sebagai Raja Beton Banyuwangi yang memilih menjadi semut: hadir di mana-mana, bermanfaat bagi banyak orang.'
          ]
        }
      ],
      takeaways: [
        'Pivot ke Bisnis yang Relevan dengan Konteks Lokal: Menlu tidak pivot ke bisnis yang jauh dari hidupnya — ia pivot ke beton, material yang ia pahami dari lingkungan sekitarnya. Pivot yang paling berhasil adalah yang berangkat dari pemahaman konteks, bukan dari tren semata.',
        'Modal Minimal, Bukan Modal Nol — Ada Bedanya: Lima cetakan beton bukan nol modal, tapi jauh lebih kecil dari yang dibutuhkan untuk membangun bisnis beton skala besar. Identifikasi aset minimum yang bisa memulai siklus pendapatan pertama.',
        'Inovasi Produk dari Keunikan Geografis: Dermaga apung beton lahir dari kesadaran bahwa Indonesia adalah negara maritim. Inovasi terbaik sering lahir dari pertanyaan: "Apa yang dibutuhkan orang di sekitarku yang belum ada solusinya?"',
        'Franchise Tanpa Royalti sebagai Model Pertumbuhan Inklusif: Menlu tidak ingin besar sendirian. Model franchise tanpa royalti memungkinkan pertumbuhan ekosistem, bukan hanya pertumbuhan satu perusahaan — dan ini menciptakan loyalitas yang jauh lebih kuat dari sekadar kontrak bisnis.'
      ]
    }
  ],

  // SVG ICONS DICTIONARY FOR CATEGORIES & SYSTEM
  ICONS: {
    all: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    debt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    bankrupt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`,
    zero: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    business: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    indonesia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>`,
    global: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    bookmarks: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
    location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:3px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`
  },

  init() {
    try {
      const raw = localStorage.getItem('rebound30_bookmarks');
      if (raw) this.bookmarks = JSON.parse(raw);
    } catch(e) {
      this.bookmarks = [];
    }
  },

  saveBookmarks() {
    try {
      localStorage.setItem('rebound30_bookmarks', JSON.stringify(this.bookmarks));
    } catch(e) {}
  },

  isBookmarked(id) {
    return this.bookmarks.includes(id);
  },

  toggleBookmark(id, event) {
    if (event) event.stopPropagation();
    const idx = this.bookmarks.indexOf(id);
    if (idx > -1) {
      this.bookmarks.splice(idx, 1);
      if (window.App && window.App.toast) window.App.toast('Kisah dihapus dari bookmark', 'info');
    } else {
      this.bookmarks.push(id);
      if (window.App && window.App.toast) window.App.toast('Kisah disimpan ke bookmark ✓', 'success');
    }
    this.saveBookmarks();
    this.render();
  },

  setCategory(catId) {
    this.selectedCategory = catId;
    // Perbarui hanya bagian yang berubah, sama seperti pencarian —
    // kotak pencarian tidak boleh ikut dibangun ulang.
    this.refreshResults();
  },

  /**
   * Dipanggil pada setiap ketikan di kotak pencarian.
   *
   * BUG YANG DIPERBAIKI: versi lama memanggil this.render(), yang menulis
   * ulang innerHTML SELURUH pustaka — termasuk elemen <input> tempat
   * pengguna sedang mengetik. Node input lama dihancurkan dan diganti node
   * baru, sehingga fokus keyboard hilang setiap satu huruf. Akibatnya
   * pengguna harus mengklik kembali kotak pencarian untuk tiap huruf.
   *
   * Sekarang state diperbarui lalu HANYA daftar hasil yang digambar ulang;
   * elemen input tidak pernah disentuh, jadi fokus dan posisi kursor utuh.
   *
   * Query disimpan apa adanya (tanpa .trim()) agar pengguna bisa mengetik
   * spasi di tengah kata kunci. Pemangkasan hanya saat pencocokan.
   */
  setSearch(q) {
    this.searchQuery = String(q == null ? '' : q);
    this.refreshResults();
  },

  clearSearch() {
    this.searchQuery = '';
    const input = document.getElementById('story-search-input');
    if (input) { input.value = ''; input.focus(); }
    this.refreshResults();
  },

  /** Pakai kata kunci saran saat pencarian pengguna nihil hasil. */
  applySuggestion(kata) {
    this.searchQuery = kata;
    const input = document.getElementById('story-search-input');
    if (input) { input.value = kata; input.focus(); }
    this.refreshResults();
  },

  /**
   * Gambar ulang HANYA daftar hasil, jumlah hasil, tombol hapus, dan
   * status aktif chip kategori. Kotak pencarian tidak pernah disentuh.
   */
  refreshResults() {
    // Bila sedang di layar pembaca, tidak ada daftar untuk diperbarui.
    const grid = document.querySelector('#stories-root .story-catalog-grid');
    if (!grid) return;

    const filtered = this.getFilteredData();
    grid.innerHTML = this.buildCardsHtml(filtered);

    const info = document.getElementById('story-search-info');
    if (info) {
      const q = this.searchQuery.trim();
      if (q) {
        info.textContent = filtered.length > 0
          ? `${filtered.length} kisah cocok dengan "${q}"`
          : `Tidak ada kisah yang cocok dengan "${q}"`;
        info.style.display = '';
      } else {
        info.textContent = '';
        info.style.display = 'none';
      }
    }

    const clearBtn = document.getElementById('story-search-clear');
    if (clearBtn) clearBtn.style.display = this.searchQuery ? '' : 'none';

    document.querySelectorAll('#stories-root .story-category-chip').forEach(chip => {
      const aktif = chip.getAttribute('data-cat') === this.selectedCategory;
      chip.classList.toggle('active', aktif);
      chip.setAttribute('aria-pressed', aktif ? 'true' : 'false');
    });
  },

  openReader(id) {
    this.activeId = id;
    this.viewMode = 'reader';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  },

  closeReader() {
    this.viewMode = 'library';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  },

  /**
   * Gabungan teks yang bisa dicari untuk satu kisah, di-cache per id.
   *
   * Versi lama hanya mencari di name/title/tagline/subtitle, padahal
   * placeholder menjanjikan "nama tokoh, KOTA, atau kata kunci masalah".
   * Field `origin` (kota/negara) dan `categoryLabel` (besaran utang)
   * tidak pernah ikut dicari, sehingga mengetik "Madura", "Bangkok",
   * atau "rentenir" tidak menemukan apa pun meski datanya ada.
   */
  _haystack(item) {
    if (!this._haystackCache) this._haystackCache = {};
    if (this._haystackCache[item.id]) return this._haystackCache[item.id];

    const bagian = [
      item.name, item.title, item.tagline, item.subtitle,
      item.origin, item.categoryLabel, item.badge, item.ageAtRebound,
    ];

    const st = item.stats || {};
    bagian.push(st.debt, st.age, st.lowest, st.action, st.result);

    // Label kategori manusiawi agar "utang", "bangkrut", "indonesia" cocok.
    const labelKategori = {
      debt: 'terlilit utang', bankrupt: 'bangkrut pailit',
      zero: 'mulai dari nol', business: 'bangkit bisnis usaha',
      indonesia: 'indonesia lokal', global: 'global internasional luar negeri',
    };
    (item.categories || []).forEach(c => bagian.push(labelKategori[c] || c));

    // Isi perjalanan & pelajaran agar kata kunci masalah benar-benar tembus.
    (item.timeline || []).forEach(t => { bagian.push(t.year, t.text); });
    (item.lessons || []).forEach(l => bagian.push(typeof l === 'string' ? l : (l && l.text)));
    if (item.quote) bagian.push(typeof item.quote === 'string' ? item.quote : item.quote.text);

    const teks = bagian.filter(Boolean).join(' ').toLowerCase();
    this._haystackCache[item.id] = teks;
    return teks;
  },

  /**
   * Padanan kata sehari-hari yang dipakai pengguna aplikasi ini, tetapi
   * tidak muncul persis di naskah kisah. Pengguna yang sedang terlilit
   * utang mengetik dengan kosakata situasinya sendiri — "pinjol", "PHK",
   * "galbay" — sementara naskah memakai "rentenir", "bangkrut", "kredit".
   * Tanpa pemetaan ini, pencarian yang paling wajar justru nihil hasil.
   *
   * Sengaja dijaga sempit: hanya padanan yang benar-benar setara, supaya
   * hasil pencarian tidak melebar jadi tidak berguna.
   */
  SEARCH_SYNONYMS: {
    pinjol: ['rentenir', 'pinjaman', 'bunga'],
    'pinjaman online': ['rentenir', 'pinjaman'],
    galbay: ['gagal bayar', 'macet', 'menunggak'],
    phk: ['kehilangan pekerjaan', 'karyawan', 'bangkrut'],
    dipecat: ['kehilangan pekerjaan', 'karyawan'],
    nganggur: ['kehilangan pekerjaan', 'bangkrut'],
    menganggur: ['kehilangan pekerjaan', 'bangkrut'],
    dc: ['penagih'],
    'debt collector': ['penagih'],
    ditagih: ['penagih'],
    lintah: ['rentenir'],
    'lintah darat': ['rentenir'],
    riba: ['bunga', 'rentenir'],
    'kredit macet': ['macet', 'kredit'],
    'gagal bayar': ['macet', 'menunggak', 'kredit'],
    jatuh: ['bangkrut', 'pailit'],
    hancur: ['bangkrut', 'pailit'],
    'gulung tikar': ['bangkrut', 'pailit'],
    sita: ['disita', 'lelang'],
    disita: ['lelang'],
    modal: ['modal', 'usaha'],
    jualan: ['warung', 'usaha', 'kuliner'],
    dagang: ['usaha', 'warung'],
  },

  /** Kata kunci yang terbukti ada di korpus, untuk saran saat nihil hasil. */
  SEARCH_SUGGESTIONS: ['bangkrut', 'rentenir', 'kredit', 'bank', 'disita', 'kuliner', 'sedekah', 'karyawan'],

  /** Satu kata kunci cocok bila kata itu ATAU padanannya ada di teks. */
  _tokenMatch(teks, token) {
    if (teks.indexOf(token) !== -1) return true;
    const padanan = this.SEARCH_SYNONYMS[token];
    if (!padanan) return false;
    return padanan.some(p => teks.indexOf(p) !== -1);
  },

  getFilteredData() {
    // Pisah kata kunci; seluruh kata harus cocok (AND) sehingga
    // "yiwu bakpao" menyaring lebih tajam, bukan makin longgar.
    const mentah = this.searchQuery.toLowerCase().trim();
    const kata = mentah.split(/\s+/).filter(Boolean);

    // Frasa dua kata seperti "pinjaman online" atau "gagal bayar" dicek
    // utuh lebih dulu sebelum dipecah per kata.
    if (kata.length > 1 && this.SEARCH_SYNONYMS[mentah]) {
      return this.DATA.filter(item => {
        if (!this._matchCategory(item)) return false;
        return this._tokenMatch(this._haystack(item), mentah);
      });
    }

    return this.DATA.filter(item => {
      if (!this._matchCategory(item)) return false;
      if (kata.length === 0) return true;
      const teks = this._haystack(item);
      return kata.every(k => this._tokenMatch(teks, k));
    });
  },

  _matchCategory(item) {
    if (this.selectedCategory === 'bookmarks') return this.isBookmarked(item.id);
    if (this.selectedCategory === 'all') return true;
    return (item.categories || []).includes(this.selectedCategory);
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

  /**
   * Bangun HTML kartu katalog. Dipisahkan dari renderLibrary() supaya
   * hasil pencarian bisa diperbarui TANPA membangun ulang seluruh
   * pustaka — termasuk kotak pencarian itu sendiri.
   */
  buildCardsHtml(filtered) {
    return filtered.map(item => {
      const isSaved = this.isBookmarked(item.id);
      const v = {"shao":{"avatarText":"SB","profession":"Pengrajin Bakpao Yiwu · Mantan Eksportir Koper","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8z\"/><path d=\"M12 6v6l4 2\"/></svg>","gradient":"linear-gradient(135deg, #0F766E 0%, #134E4A 100%)"},"tang":{"avatarText":"TJ","profession":"Kios Sosis Panggang Hangzhou · Mantan Raja Restoran","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/></svg>","gradient":"linear-gradient(135deg, #B45309 0%, #78350F 100%)"},"hendra":{"avatarText":"TH","profession":"Owner Pabrik Salina Herbal · Formulator Kosmetik","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"/></svg>","gradient":"linear-gradient(135deg, #4338CA 0%, #312E81 100%)"},"suryo":{"avatarText":"SP","profession":"Owner Kacunk Motor · Showroom 1.000 Unit Mobil","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/></svg>","gradient":"linear-gradient(135deg, #047857 0%, #064E3B 100%)"},"suprianto":{"avatarText":"SW","profession":"Founder Siomay Wondes · Dapur Mesin Modern","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z\"/><line x1=\"6\" x2=\"18\" y1=\"17\" y2=\"17\"/></svg>","gradient":"linear-gradient(135deg, #0D9488 0%, #115E59 100%)"},"matyasin":{"avatarText":"MY","profession":"Miliarder Besi Tua Sumba & Pembangun Jalan 10 KM","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 14V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10\"/></svg>","gradient":"linear-gradient(135deg, #059669 0%, #065F46 100%)"},"genta":{"avatarText":"GG","profession":"Developer Properti & Bisnis Konstruksi Cimahi","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M3 21h18\"/><path d=\"M19 21v-4\"/><path d=\"M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4\"/><path d=\"M14 9V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4\"/><path d=\"M10 12h4\"/></svg>","gradient":"linear-gradient(135deg, #0284C7 0%, #075985 100%)"},"rini":{"avatarText":"RS","profession":"Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"m9 18 6-6\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><path d=\"m15 6 3 3\"/></svg>","gradient":"linear-gradient(135deg, #BE123C 0%, #881337 100%)"}}[item.id] || {
        avatarText: item.name.slice(0,2).toUpperCase(),
        profession: item.tagline,
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><circle cx="12" cy="12" r="10"/></svg>',
        gradient: 'linear-gradient(135deg, #0F766E 0%, #134E4A 100%)'
      };

      return `
        <div class="story-catalog-card" onclick="Stories.openReader('${item.id}')">
          <!-- Visual Illustration Header Banner -->
          <div class="catalog-card-visual" style="background:${v.gradient};">
            <div class="visual-avatar-badge">${v.avatarText}</div>
            <div class="visual-meta-col">
              <div class="visual-badge-pill">${item.badge}</div>
              <div class="visual-profession-text">${v.profession}</div>
            </div>
            <div class="visual-icon-wrap">${v.iconSvg}</div>
          </div>

          <div class="catalog-card-body">
            <div class="catalog-card-header">
              <div class="catalog-origin-tag">${this.ICONS.location} ${item.origin} · ${item.ageAtRebound}</div>
              <button class="bookmark-btn ${isSaved ? 'active' : ''}" onclick="Stories.toggleBookmark('${item.id}', event)" title="${isSaved ? 'Hapus bookmark' : 'Simpan kisah'}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
              </button>
            </div>

            <h3 class="catalog-card-name">${H.escHtml(item.name)}</h3>
            <p class="catalog-card-tagline">${H.escHtml(item.tagline)}</p>

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
              <span class="catalog-category-badge" style="background:${item.bgLight};color:${item.accentColor};border:1px solid ${item.borderLight};">
                ${H.escHtml(item.categoryLabel)}
              </span>
              <span class="read-more-link" style="color:${item.accentColor};">
                Baca Kisah →
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('') || `
      <div class="empty-state" style="grid-column: 1 / -1; padding: var(--space-8) var(--space-4);">
        <div class="empty-state-icon" style="color:var(--teal-600);">${this.ICONS.bookmarks}</div>
        <div class="empty-state-title">Tidak ada kisah yang cocok</div>
        <div class="empty-state-text">
          ${this.searchQuery.trim()
            ? 'Coba kata kunci lain, atau pilih salah satu di bawah ini.'
            : 'Coba ganti kategori filter atau kata kunci pencarian kamu.'}
        </div>
        ${this.searchQuery.trim() ? `
          <div class="story-suggest-row">
            ${this.SEARCH_SUGGESTIONS.map(k => `
              <button class="story-suggest-chip" onclick="Stories.applySuggestion('${k}')">${k}</button>
            `).join('')}
          </div>` : ''}
      </div>
    `;
  },

  renderLibrary(container) {
    const filtered = this.getFilteredData();
    const featuredStory = this.DATA.find(s => s.featured) || this.DATA[0];

    const categories = [
      { id: 'all', label: `Semua (${this.DATA.length})`, icon: this.ICONS.all },
      { id: 'debt', label: 'Terlilit Utang', icon: this.ICONS.debt },
      { id: 'bankrupt', label: 'Bangkrut', icon: this.ICONS.bankrupt },
      { id: 'zero', label: 'Mulai dari Nol', icon: this.ICONS.zero },
      { id: 'business', label: 'Bangkit Bisnis', icon: this.ICONS.business },
      { id: 'indonesia', label: 'Indonesia', icon: this.ICONS.indonesia },
      { id: 'global', label: 'Global', icon: this.ICONS.global },
      { id: 'bookmarks', label: `Tersimpan (${this.bookmarks.length})`, icon: this.ICONS.bookmarks },
    ];

    // data-cat dipakai refreshResults() untuk memperbarui status aktif chip
    // tanpa membangun ulang seluruh pustaka.
    const categoryChipsHtml = categories.map(cat => `
      <button class="story-category-chip ${this.selectedCategory === cat.id ? 'active' : ''}"
              data-cat="${cat.id}"
              aria-pressed="${this.selectedCategory === cat.id ? 'true' : 'false'}"
              onclick="Stories.setCategory('${cat.id}')">
        ${cat.icon}
        <span>${cat.label}</span>
      </button>
    `).join('');

    const cardsHtml = this.buildCardsHtml(filtered);

    container.innerHTML = `
      <div class="story-library-wrapper">
        <!-- Top Featured Banner -->
        <div class="featured-story-banner" onclick="Stories.openReader('${featuredStory.id}')">
          <div class="featured-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            KISAH INSPIRATIF MINGGU INI
          </div>
          <h2 class="featured-title">${H.escHtml(featuredStory.name)}</h2>
          <p class="featured-tagline">${H.escHtml(featuredStory.tagline)}</p>

          <div class="featured-metrics-row">
            <div class="featured-metric">
              <span class="metric-lbl">Utang Awal:</span>
              <span class="metric-val" style="color:#FECDD3;">${H.escHtml(featuredStory.stats.debt)}</span>
            </div>
            <div class="featured-metric">
              <span class="metric-lbl">Titik Balik:</span>
              <span class="metric-val">${H.escHtml(featuredStory.stats.action)}</span>
            </div>
            <div class="featured-metric">
              <span class="metric-lbl">Hasil Hari Ini:</span>
              <span class="metric-val" style="color:#A7F3D0;">${H.escHtml(featuredStory.stats.result)}</span>
            </div>
          </div>

          <div style="margin-top: var(--space-4); display: flex; align-items: center; justify-content: space-between;">
            <span class="badge" style="background:rgba(255,255,255,0.2);color:#fff;border:none;">${featuredStory.badge}</span>
            <span style="font-size: 13px; font-weight: 700; color: #CCFBF1; display: inline-flex; align-items: center; gap: 4px;">
              Buka Bacaan Lengkap →
            </span>
          </div>
        </div>

        <!-- Search Bar & Filter Controls -->
        <div class="story-search-wrap">
          <div class="story-search-box">
            <label class="sr-only" for="story-search-input">Cari kisah</label>
            <input
              type="search"
              id="story-search-input"
              class="form-input story-search-input"
              placeholder="Cari tokoh, kota, atau masalah…"
              value="${H.escHtml(this.searchQuery)}"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              enterkeyhint="search"
              aria-describedby="story-search-info"
              oninput="Stories.setSearch(this.value)"
              onsearch="Stories.setSearch(this.value)"
              onkeydown="if(event.key==='Escape'){event.stopPropagation();Stories.clearSearch();}"
            >
            <span class="story-search-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </span>
            <button
              type="button"
              id="story-search-clear"
              class="story-search-clear"
              onclick="Stories.clearSearch()"
              aria-label="Hapus kata kunci pencarian"
              style="${this.searchQuery ? '' : 'display:none'}"
            >&times;</button>
          </div>
          <div id="story-search-info" class="story-search-info" role="status" aria-live="polite"
               style="${this.searchQuery.trim() ? '' : 'display:none'}"></div>
        </div>

        <!-- Horizontal Problem Filter Chips with SVGs -->
        <div class="story-category-bar">
          ${categoryChipsHtml}
        </div>

        <!-- 2-Column Responsive Card Grid -->
        <div class="story-catalog-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  },

  renderReader(container) {
    const story = this.DATA.find(s => s.id === this.activeId) || this.DATA[0];
    const isSaved = this.isBookmarked(story.id);

    const timelineHtml = story.timeline.map((item, idx) => `
      <div class="timeline-step">
        <div class="timeline-dot"></div>
        <div class="timeline-year">${H.escHtml(item.year)}</div>
        <div class="timeline-text">${H.escHtml(item.text)}</div>
      </div>
    `).join('');

    const chaptersHtml = story.chapters.map(ch => `
      <div class="reader-chapter-box">
        <div class="chapter-num-badge">BAB ${ch.num}</div>
        <h3 class="chapter-title">${H.escHtml(ch.title)}</h3>
        <div class="chapter-body">
          ${ch.paragraphs.map(p => `<p>${H.escHtml(p)}</p>`).join('')}
        </div>
      </div>
    `).join('');

    const takeawaysHtml = story.takeaways.map((t, idx) => `
      <li class="takeaways-item">
        <span class="takeaways-num">${idx + 1}</span>
        <div class="takeaways-text">${H.escHtml(t)}</div>
      </li>
    `).join('');

    container.innerHTML = `
      <div class="story-reader-wrapper fade-in">
        <!-- Top Sticky Action Bar -->
        <div class="reader-top-bar">
          <button class="reader-back-btn" onclick="Stories.closeReader()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="m15 18-6-6 6-6"/></svg>
            Kembali ke Perpustakaan
          </button>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="btn btn-secondary btn-sm" onclick="Stories.toggleBookmark('${story.id}')" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
              ${isSaved ? 'Tersimpan' : 'Simpan Kisah'}
            </button>
          </div>
        </div>

        <!-- Hero Header with Editorial Visual Cover -->
        <div class="reader-hero-card" style="border-top-color: ${story.accentColor};">
          <div class="reader-hero-visual-banner" style="background:${(({"shao":{"avatarText":"SB","profession":"Pengrajin Bakpao Yiwu · Mantan Eksportir Koper","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8z\"/><path d=\"M12 6v6l4 2\"/></svg>","gradient":"linear-gradient(135deg, #0F766E 0%, #134E4A 100%)"},"tang":{"avatarText":"TJ","profession":"Kios Sosis Panggang Hangzhou · Mantan Raja Restoran","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/></svg>","gradient":"linear-gradient(135deg, #B45309 0%, #78350F 100%)"},"hendra":{"avatarText":"TH","profession":"Owner Pabrik Salina Herbal · Formulator Kosmetik","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"/></svg>","gradient":"linear-gradient(135deg, #4338CA 0%, #312E81 100%)"},"suryo":{"avatarText":"SP","profession":"Owner Kacunk Motor · Showroom 1.000 Unit Mobil","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/></svg>","gradient":"linear-gradient(135deg, #047857 0%, #064E3B 100%)"},"suprianto":{"avatarText":"SW","profession":"Founder Siomay Wondes · Dapur Mesin Modern","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z\"/><line x1=\"6\" x2=\"18\" y1=\"17\" y2=\"17\"/></svg>","gradient":"linear-gradient(135deg, #0D9488 0%, #115E59 100%)"},"matyasin":{"avatarText":"MY","profession":"Miliarder Besi Tua Sumba & Pembangun Jalan 10 KM","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 14V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10\"/></svg>","gradient":"linear-gradient(135deg, #059669 0%, #065F46 100%)"},"genta":{"avatarText":"GG","profession":"Developer Properti & Bisnis Konstruksi Cimahi","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M3 21h18\"/><path d=\"M19 21v-4\"/><path d=\"M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4\"/><path d=\"M14 9V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4\"/><path d=\"M10 12h4\"/></svg>","gradient":"linear-gradient(135deg, #0284C7 0%, #075985 100%)"},"rini":{"avatarText":"RS","profession":"Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"m9 18 6-6\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><path d=\"m15 6 3 3\"/></svg>","gradient":"linear-gradient(135deg, #BE123C 0%, #881337 100%)"}})[story.id] || {}).gradient || 'linear-gradient(135deg, #0F766E 0%, #134E4A 100%)'};">
            <div class="reader-hero-avatar-badge">${(({"shao":{"avatarText":"SB","profession":"Pengrajin Bakpao Yiwu · Mantan Eksportir Koper","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8z\"/><path d=\"M12 6v6l4 2\"/></svg>","gradient":"linear-gradient(135deg, #0F766E 0%, #134E4A 100%)"},"tang":{"avatarText":"TJ","profession":"Kios Sosis Panggang Hangzhou · Mantan Raja Restoran","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/></svg>","gradient":"linear-gradient(135deg, #B45309 0%, #78350F 100%)"},"hendra":{"avatarText":"TH","profession":"Owner Pabrik Salina Herbal · Formulator Kosmetik","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"/></svg>","gradient":"linear-gradient(135deg, #4338CA 0%, #312E81 100%)"},"suryo":{"avatarText":"SP","profession":"Owner Kacunk Motor · Showroom 1.000 Unit Mobil","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/></svg>","gradient":"linear-gradient(135deg, #047857 0%, #064E3B 100%)"},"suprianto":{"avatarText":"SW","profession":"Founder Siomay Wondes · Dapur Mesin Modern","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z\"/><line x1=\"6\" x2=\"18\" y1=\"17\" y2=\"17\"/></svg>","gradient":"linear-gradient(135deg, #0D9488 0%, #115E59 100%)"},"matyasin":{"avatarText":"MY","profession":"Miliarder Besi Tua Sumba & Pembangun Jalan 10 KM","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 14V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10\"/></svg>","gradient":"linear-gradient(135deg, #059669 0%, #065F46 100%)"},"genta":{"avatarText":"GG","profession":"Developer Properti & Bisnis Konstruksi Cimahi","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M3 21h18\"/><path d=\"M19 21v-4\"/><path d=\"M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4\"/><path d=\"M14 9V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4\"/><path d=\"M10 12h4\"/></svg>","gradient":"linear-gradient(135deg, #0284C7 0%, #075985 100%)"},"rini":{"avatarText":"RS","profession":"Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"m9 18 6-6\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><path d=\"m15 6 3 3\"/></svg>","gradient":"linear-gradient(135deg, #BE123C 0%, #881337 100%)"}})[story.id] || {}).avatarText || 'RB'}</div>
            <div style="flex:1;">
              <div class="reader-hero-badge-pill">${story.badge}</div>
              <div class="reader-hero-prof">${(({"shao":{"avatarText":"SB","profession":"Pengrajin Bakpao Yiwu · Mantan Eksportir Koper","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8z\"/><path d=\"M12 6v6l4 2\"/></svg>","gradient":"linear-gradient(135deg, #0F766E 0%, #134E4A 100%)"},"tang":{"avatarText":"TJ","profession":"Kios Sosis Panggang Hangzhou · Mantan Raja Restoran","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/></svg>","gradient":"linear-gradient(135deg, #B45309 0%, #78350F 100%)"},"hendra":{"avatarText":"TH","profession":"Owner Pabrik Salina Herbal · Formulator Kosmetik","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"/></svg>","gradient":"linear-gradient(135deg, #4338CA 0%, #312E81 100%)"},"suryo":{"avatarText":"SP","profession":"Owner Kacunk Motor · Showroom 1.000 Unit Mobil","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/></svg>","gradient":"linear-gradient(135deg, #047857 0%, #064E3B 100%)"},"suprianto":{"avatarText":"SW","profession":"Founder Siomay Wondes · Dapur Mesin Modern","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z\"/><line x1=\"6\" x2=\"18\" y1=\"17\" y2=\"17\"/></svg>","gradient":"linear-gradient(135deg, #0D9488 0%, #115E59 100%)"},"matyasin":{"avatarText":"MY","profession":"Miliarder Besi Tua Sumba & Pembangun Jalan 10 KM","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 14V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10\"/></svg>","gradient":"linear-gradient(135deg, #059669 0%, #065F46 100%)"},"genta":{"avatarText":"GG","profession":"Developer Properti & Bisnis Konstruksi Cimahi","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M3 21h18\"/><path d=\"M19 21v-4\"/><path d=\"M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4\"/><path d=\"M14 9V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4\"/><path d=\"M10 12h4\"/></svg>","gradient":"linear-gradient(135deg, #0284C7 0%, #075985 100%)"},"rini":{"avatarText":"RS","profession":"Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"m9 18 6-6\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><path d=\"m15 6 3 3\"/></svg>","gradient":"linear-gradient(135deg, #BE123C 0%, #881337 100%)"}})[story.id] || {}).profession || story.tagline}</div>
            </div>
            <div class="reader-hero-icon">${(({"shao":{"avatarText":"SB","profession":"Pengrajin Bakpao Yiwu · Mantan Eksportir Koper","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8z\"/><path d=\"M12 6v6l4 2\"/></svg>","gradient":"linear-gradient(135deg, #0F766E 0%, #134E4A 100%)"},"tang":{"avatarText":"TJ","profession":"Kios Sosis Panggang Hangzhou · Mantan Raja Restoran","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/></svg>","gradient":"linear-gradient(135deg, #B45309 0%, #78350F 100%)"},"hendra":{"avatarText":"TH","profession":"Owner Pabrik Salina Herbal · Formulator Kosmetik","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"/></svg>","gradient":"linear-gradient(135deg, #4338CA 0%, #312E81 100%)"},"suryo":{"avatarText":"SP","profession":"Owner Kacunk Motor · Showroom 1.000 Unit Mobil","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/></svg>","gradient":"linear-gradient(135deg, #047857 0%, #064E3B 100%)"},"suprianto":{"avatarText":"SW","profession":"Founder Siomay Wondes · Dapur Mesin Modern","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z\"/><line x1=\"6\" x2=\"18\" y1=\"17\" y2=\"17\"/></svg>","gradient":"linear-gradient(135deg, #0D9488 0%, #115E59 100%)"},"matyasin":{"avatarText":"MY","profession":"Miliarder Besi Tua Sumba & Pembangun Jalan 10 KM","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 14V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10\"/></svg>","gradient":"linear-gradient(135deg, #059669 0%, #065F46 100%)"},"genta":{"avatarText":"GG","profession":"Developer Properti & Bisnis Konstruksi Cimahi","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"M3 21h18\"/><path d=\"M19 21v-4\"/><path d=\"M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4\"/><path d=\"M14 9V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4\"/><path d=\"M10 12h4\"/></svg>","gradient":"linear-gradient(135deg, #0284C7 0%, #075985 100%)"},"rini":{"avatarText":"RS","profession":"Pengrajin Gitar Handmade & 50 Besar Mekaarpreneur","iconSvg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"width:20px;height:20px;\"><path d=\"m9 18 6-6\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><path d=\"m15 6 3 3\"/></svg>","gradient":"linear-gradient(135deg, #BE123C 0%, #881337 100%)"}})[story.id] || {}).iconSvg || ''}</div>
          </div>

          <div class="reader-origin-badge">
            ${this.ICONS.location} ${story.origin} · Kisah Nyata Pemulihan
          </div>
          <h1 class="reader-hero-title">${H.escHtml(story.title)}</h1>
          <div class="reader-hero-subtitle">${H.escHtml(story.subtitle)}</div>

          <!-- Financial Snapshot Factsheet -->
          <div class="factsheet-box">
            <div class="factsheet-title">Lembar Fakta Finansial Tokoh:</div>
            <div class="factsheet-grid">
              <div class="factsheet-item">
                <span class="factsheet-label">Beban Utang:</span>
                <span class="factsheet-val" style="color:var(--red-600);">${H.escHtml(story.stats.debt)}</span>
              </div>
              <div class="factsheet-item">
                <span class="factsheet-label">Kondisi Terendah:</span>
                <span class="factsheet-val">${H.escHtml(story.stats.lowest)}</span>
              </div>
              <div class="factsheet-item">
                <span class="factsheet-label">Tindakan Rebound:</span>
                <span class="factsheet-val">${H.escHtml(story.stats.action)}</span>
              </div>
              <div class="factsheet-item">
                <span class="factsheet-label">Hasil Akhir:</span>
                <span class="factsheet-val" style="color:var(--teal-700);">${H.escHtml(story.stats.result)}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Vertical Journey Timeline -->
        <div class="reader-timeline-card">
          <h3 class="timeline-card-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;color:var(--teal-600);"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Garis Waktu Perjalanan Kejatuhan & Kebangkitan
          </h3>
          <div class="vertical-timeline">
            ${timelineHtml}
          </div>
        </div>

        <!-- Golden Quote Box -->
        <div class="reader-quote-card" style="border-left-color: ${story.accentColor};">
          <p class="reader-quote-text">"${H.escHtml(story.quote)}"</p>
          <div class="reader-quote-author">— ${H.escHtml(story.quoteAuthor)}</div>
        </div>

        <!-- Main Narrative Novel Chapters -->
        <div class="reader-narrative-section">
          ${chaptersHtml}
        </div>

        <!-- Actionable Financial Takeaways -->
        <div class="takeaways-box">
          <h3 class="takeaways-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;color:var(--teal-600);"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Pelajaran Finansial & Blueprint Rebound
          </h3>
          <ul class="takeaways-list">
            ${takeawaysHtml}
          </ul>
        </div>

        <!-- Mission Bridge: Turning Reading into Action -->
        <div class="reader-mission-bridge-box">
          <div class="bridge-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:24px;height:24px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 10"/></svg>
          </div>
          <h3 class="bridge-title">Kini Giliranmu Mengambil Tindakan Nyata</h3>
          <p class="bridge-desc">
            Kisah ${H.escHtml(story.name)} membuktikan bahwa titik terendah adalah batu loncatan awal. 
            Jangan biarkan inspirasi ini hanya menjadi bacaan. Ambil langkah pertamamu hari ini di Misi Harian.
          </p>
          <button class="btn btn-primary" onclick="App.navigate('missions')" style="padding: 10px 24px; font-weight: 700; border-radius: 24px; box-shadow: 0 4px 12px rgba(15,118,110,0.3);">
            Kerjakan Misi Harian Sekarang →
          </button>
        </div>
      </div>
    `;
  }
};

Stories.init();
