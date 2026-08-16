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
    this.render();
  },

  setSearch(q) {
    this.searchQuery = (q || '').toLowerCase().trim();
    this.render();
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

  getFilteredData() {
    return this.DATA.filter(item => {
      let matchCat = true;
      if (this.selectedCategory === 'bookmarks') {
        matchCat = this.isBookmarked(item.id);
      } else if (this.selectedCategory !== 'all') {
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

    const categoryChipsHtml = categories.map(cat => `
      <button class="story-category-chip ${this.selectedCategory === cat.id ? 'active' : ''}" onclick="Stories.setCategory('${cat.id}')">
        ${cat.icon}
        <span>${cat.label}</span>
      </button>
    `).join('');

        const cardsHtml = filtered.map(item => {
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
        <div class="empty-state-text">Coba ganti kategori filter atau kata kunci pencarian kamu.</div>
      </div>
    `;

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
        <div style="display:flex;gap:var(--space-3);margin-bottom:var(--space-4);flex-wrap:wrap;">
          <div style="flex:1;min-width:240px;position:relative;">
            <input 
              type="text" 
              class="form-input" 
              placeholder="Cari nama tokoh, kota, atau kata kunci masalah..." 
              value="${H.escHtml(this.searchQuery)}"
              oninput="Stories.setSearch(this.value)"
              style="padding-left:36px;border-radius:24px;"
            >
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--color-text-muted);">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </span>
          </div>
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
