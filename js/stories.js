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
      tagline: 'Dari Laundry & Ditipu Waralaba Pendidikan Rp 800 Jt, Utang Rp 2,2 M Hingga Tidur di Teras Masjid — Bangkit Jadi Owner Pabrik Skincare Salina Herbal',
      title: 'Gelandangan yang Kini Punya Pabrik Skincare Sendiri',
      subtitle: 'Owner Pabrik Skincare CV Salina Herbal Mandiri, Sleman — Dari Teras Masjid ke Pabrik Kosmetik Mandiri',
      origin: 'Sleman, D.I. Yogyakarta',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 2,2 M & Tidur di Masjid',
      badge: 'Owner Pabrik Salina Herbal — Lunas Total',
      theme: 'indigo',
      accentColor: '#4F46E5',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 2,2 Miliar (Ditipu Waralaba Rp 800 Jt & Bunga Bank)',
        age: '40-an Tahun',
        lowest: 'Tidur di Teras Masjid, Sisa Rp 700rb untuk Kos Putri Anak Istri, Jual Sendok Garpu',
        action: 'Jual Makaroni Pedas Keliling + Riset Formulasi Sabun & Kosmetik Herbal',
        result: 'Pabrik Skincare CPKB BPOM Sendiri, Utang Rp 2,2 M Lunas Total'
      },
      timeline: [
        { year: '2007–2010 — Raja Laundry', text: 'Mengelola bisnis laundry dengan 3 cabang dan 15 agen yang beroperasi penuh dengan omzet lancar.' },
        { year: '2010 — Tertipu Rp 800 Juta', text: 'Diajak investor membuka waralaba pendidikan senilai Rp 800 juta. Investor menghilang, laundry macet, utang gali lubang tutup lubang.' },
        { year: 'Titik Nadir — Rp 2,2 Miliar', text: 'Jual mobil, rumah, hingga sendok garpu. Uang Rp 700.000 terakhir untuk kos putri anak istri; Hendra hidup menggelandang tidur di teras masjid.' },
        { year: 'Hadapi Debt Collector', text: '"Saya cuma punya diri ini. Kalau dengan dipenjarakan bisa lunas, silakan. Sisa tubuh ini yang siap bekerja."' },
        { year: 'Bangkit dari Dapur', text: 'Jualan makaroni pedas keliling Rp 500/bungkus, lalu meracik sabun dan kosmetik herbal di dapur kontrakan sempit.' },
        { year: 'Hari Ini — Pabrik Skincare', text: 'Memiliki pabrik kosmetik sendiri (Salina Herbal) bersertifikasi CPKB BPOM, seluruh utang Rp 2,2 miliar lunas tuntas.' }
      ],
      quote: 'Debt collector pernah datang ngamuk dan maki-maki. Saya cuma punya diri ini. Kalau dengan dipenjarakan bisa lunas, silakan. Yang ada tinggal sisa tubuh ini yang siap bekerja melunasinya.',
      quoteAuthor: 'M. Taufik Hendradinata, owner Salina Herbal',
      chapters: [
        {
          num: 1,
          title: 'Raja Laundry dan Jebakan Waralaba Rp 800 Juta',
          paragraphs: [
            'Tahun 2007. Hendra (M. Taufik Hendradinata) tersenyum puas melihat 3 cabang laundry miliknya beroperasi penuh, didukung oleh 15 agen yang tersebar di berbagai titik strategis. Bisnisnya berjalan mulus, rezeki mengalir deras, dan ia menikmati masa keemasan sebagai pengusaha muda yang dihormati.',
            'Lalu pada tahun 2010 datanglah seorang investor yang menawarkan kerja sama ekspansi waralaba di bidang pendidikan. Dengan janji keuntungan berlipat ganda, Hendra mempercayainya dan menyuntikkan dana investasi sebesar Rp 800 juta.',
            'Namun petaka terjadi: sang investor tiba-tiba menghilang tanpa jejak dan waralaba tersebut tak pernah direalisasikan. Uang Rp 800 juta lenyap ditelan bumi, sementara efek dominonya langsung menghancurkan arus kas bisnis laundry miliknya.'
          ]
        },
        {
          num: 2,
          title: 'Lelaki Tanpa Rumah dan Teras Masjid Dingin',
          paragraphs: [
            'Demi menutup lubang tagihan yang terus mengalir, Hendra terpaksa meminjam ke banyak pihak hingga total utang membengkak menjadi Rp 2,2 miliar.',
            'Satu per satu asetnya dilepas: mobil pribadi, rumah tinggal keluarga, perabotan rumah tangga, hingga sendok dan garpu di dapur ikut dijual. Mertuanya bahkan menjual 75% bagian rumah untuk membantu, namun angka utang tetap tak tertutup.',
            'Dengan sisa uang Rp 700.000 terakhir di saku, ia menyewa sebuah kamar kos putri sempit untuk tempat berteduh istri dan ketiga anaknya. Sementara Hendra sendiri, karena tak ada tempat lagi dan menolak membebani keluarga, memilih menggelandang dan tidur beralaskan sajadah di teras masjid pinggiran Sleman.'
          ]
        },
        {
          num: 3,
          title: 'Di Hadapan Amarah Debt Collector',
          paragraphs: [
            'Hari-harinya dipenuhi teror penagihan yang mencekam. Para penagih utang mendatangi, mengamuk, dan memaki-makinya tanpa henti.',
            'Di titik kepasrahan total itu, Hendra menatap mereka dengan tenang: "Debt collector pernah datang ngamuk, maki-maki. Saya enggak bisa jelasin, saya cuma punya diri ini. Kira-kira apa yang bisa buat utang bisa lunas? Kalau dengan penjarakan bisa lunas, silakan. Yang ada sisa tubuh ini doang, bahkan sendok-sendok sudah dijual."',
            'Keberanian untuk tidak lari dan menghadapi konsekuensi dengan tubuh yang siap bekerja menjadi benteng pertahanan moral terakhirnya.'
          ]
        },
        {
          num: 4,
          title: 'Bangkit dari Dapur Kontrakan ke Pabrik Skincare',
          paragraphs: [
            'Membuang rasa gengsi mantan bos laundry, Hendra mulai menitipkan makaroni pedas bungkus kecil di warung-warung kelontong demi membeli beras harian. Dari sana, berbekal riset mandiri tentang formulasi alami, ia merintis pembuatan sabun dan skincare herbal di dapur kontrakan sempit.',
            'Setiap botol dan batang sabun yang ia racik adalah wujud air mata, doa malam di teras masjid, dan tekad baja untuk melunasi hak orang lain secara halal tanpa pinjaman berbunga.',
            'Permintaan pasar meledak berkat khasiat produk yang terbukti lembut dan berkualitas. Usaha kecil itu bermetamorfosis menjadi CV Salina Herbal Mandiri.'
          ]
        },
        {
          num: 5,
          title: 'Lunas Total dan Memiliki Pabrik Sendiri',
          paragraphs: [
            'Bertahun-tahun kemudian, Hendra berdiri tegak di depan gedung pabrik kosmetik miliknya sendiri yang telah bersertifikasi CPKB dari BPOM RI. Karyawan-karyawannya sibuk memproduksi skincare yang didistribusikan ke seluruh Indonesia.',
            'Seluruh beban utang Rp 2,2 miliar yang dulu serasa mustahil dipindahkan, kini telah lunas 100% tuntas tanpa sisa.',
            'Dari seorang gelandangan yang tidur di lantai dingin teras masjid hingga menjadi pemilik pabrik skincare terkemuka, M. Taufik Hendradinata membuktikan: selama napas masih ada dan tangan masih mau bekerja, diri kita sendiri sudah lebih dari cukup untuk bangkit menjemput keajaiban.'
          ]
        }
      ],
      takeaways: [
        'Waspada Kemitraan Investasi Tanpa Legalitas Ketat: Kehilangan Rp 800 juta pada waralaba bodong mengajarkan pentingnya uji tuntas (due diligence) sebelum menyetor modal besar.',
        'Hadapi Kreditur Tanpa Lari: Iktikad baik Hendra menghadapi debt collector dengan jujur menunjukkan integritas yang membuka jalan penyelesaian.',
        'Harga Diri Bukan Pada Gengsi Masa Lalu: Dari bos laundry menjadi penjual makaroni pedas dan peracik sabun dapur — kerendahan hati untuk memulai dari bawah adalah kunci *rebound*.',
        'Fokus Pada Produk Nyata yang Menyelesaikan Masalah: Skincare Salina Herbal berkembang bukan karena iklan mahal, tapi karena kualitas formulasi herbal yang dicintai konsumen.'
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
    },
    {
      id: 'tridawang',
      featured: false,
      name: 'Tri Dawang',
      tagline: 'Dari Keyakinan Bahwa Utang Adalah Bensin Bisnis & 800 Cek Kosong Rp 350 Miliar, Bangkit Menumbuhkan Bisnis Sehat Tanpa Utang',
      title: 'Dari Jeratan Utang Ratusan Miliar, Kini Bisnisnya Tumbuh Sehat',
      subtitle: 'Pendiri Dawang Group — Pengusaha TI yang Lepas dari 800 Cek Kosong & Membangun Sistem Tanpa Utang',
      origin: 'Indonesia',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'business', 'indonesia'],
      categoryLabel: 'Utang Ratusan Miliar & 800 Cek Kosong',
      badge: 'Dawang Group — Tumbuh Sehat Tanpa Utang',
      theme: 'indigo',
      accentColor: '#4338CA',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 350 Miliar & 800 Cek Kosong',
        age: '40-an Tahun',
        lowest: 'Terlilit Utang Ratusan Miliar, 800 Cek Kosong, Reputasi TI Terancam Hancur',
        action: 'Disiplin Pengelolaan Finansial Ketat + Stop Utang + Pelunasan Menyeluruh',
        result: 'Lunas Penuh — Dawang Group Tumbuh Berkelanjutan Tanpa Ketergantungan Utang'
      },
      timeline: [
        { year: 'Awal Bisnis TI', text: 'Mendirikan Dawang Group di bidang sistem teknologi informasi dengan keyakinan kuat bahwa utang adalah bensin utama pertumbuhan.' },
        { year: 'Ekspansi Agresif', text: 'Meminjam dana besar untuk memacu ekspansi tanpa perhitungan arus kas yang matang.' },
        { year: '2021 — Titik Terendah', text: 'Terjebak utang ratusan miliar rupiah (hingga Rp 350 miliar) dan menerbitkan 800 cek kosong. Dikejar puluhan kreditur.' },
        { year: 'Titik Balik & Pelunasan', text: 'Melakukan pembenahan total, menghentikan penambahan utang baru, dan melunasi seluruh kewajiban secara disiplin.' },
        { year: 'Hari Ini — Tumbuh Sehat', text: 'Dawang Group terus berkembang pesat secara organik tanpa ketergantungan pada pinjaman utang.' }
      ],
      quote: 'Bisnis tetap dapat berkembang dengan pengelolaan yang lebih disiplin, tanpa harus terus menambah utang.',
      quoteAuthor: 'Tri Dawang, pendiri Dawang Group',
      chapters: [
        {
          num: 1,
          title: 'Keyakinan yang Menjadi Bumerang',
          paragraphs: [
            'Bagi Tri Dawang, utang selama bertahun-tahun dianggap sebagai bensin bagi mesin bisnis. Tanpanya, roda usaha diyakini akan berhenti berputar. Ini adalah doktrin umum yang ia telan mentah-mentah: bahwa untuk melipatgandakan valuasi dan skala perusahaan TI miliknya, seorang founder harus berani leverage pinjaman sebesar-besarnya.',
            'Keyakinan ini mendorongnya untuk terus membuka keran pembiayaan bank dan pinjaman institusional. Ia meminjam dari sana-sini demi mengejar pertumbuhan kilat, yakin bahwa proyeksi keuntungan di masa depan akan mampu menutup seluruh kewajiban.',
            'Namun, pertumbuhan yang ditopang oleh utang berbunga ibarat membangun gedung pencakar langit di atas rawa. Begitu arus kas meleset sedikit saja, seluruh struktur mulai retak.'
          ]
        },
        {
          num: 2,
          title: '800 Cek Kosong dan Beban Ratusan Miliar',
          paragraphs: [
            'Pada tahun 2021, realitas pahit tak lagi bisa ditutupi. Gelombang utang yang menggunung hingga mencapai angka ratusan miliar rupiah (ditaksir mencapai Rp 350 miliar) menghantam Dawang Group secara telak.',
            'Situasi likuiditas memburuk sedemikian rupa hingga ia terpaksa menerbitkan 800 cek kosong. Ini adalah titik nadir paling memalukan sekaligus menakutkan dalam sejarah bisnisnya. Cek demi cek yang ditolak bank bukan sekadar masalah administrasi, melainkan ancaman hukum pidana dan kehancuran reputasi di hadapan para kreditur.',
            'Setiap hari dipenuhi oleh dering telepon penagih, ancaman somasi, dan tekanan mental yang luar biasa. Di saat itulah ia sadar: apa yang selama ini ia anggap sebagai bensin kemajuan, ternyata adalah racun yang membakar perusahaannya sendiri.'
          ]
        },
        {
          num: 3,
          title: 'Titik Balik: Disiplin Melunasi dan Menolak Utang Baru',
          paragraphs: [
            'Di tengah kepungan krisis, Tri Dawang mengambil keputusan radikal: berhenti gali lubang tutup lubang. Ia menolak ilusi bahwa solusi dari utang adalah meminjam dana talangan baru.',
            'Ia melakukan restrukturisasi menyeluruh. Mengencangkan ikat pinggang perusahaan, menegosiasikan skema pelunasan realistis dengan para kreditur, dan mengalokasikan setiap tetes keuntungan operasional untuk melunasi kewajiban pokok.',
            'Proses itu membutuhkan disiplin baja dan kerendahan hati. Perlahan tapi pasti, ratusan cek kosong itu diselesaikan satu demi satu, hingga beban ratusan miliar tersebut lunas sepenuhnya.'
          ]
        },
        {
          num: 4,
          title: 'Tumbuh Sehat Tanpa Utang — Paradigma Baru Dawang Group',
          paragraphs: [
            'Dari kawah candradimuka tersebut, Tri Dawang menemukan pencerahan yang mengubah arah hidup dan bisnisnya selamanya: bisnis justru berkembang jauh lebih kokoh, tenang, dan lincah ketika dikelola tanpa beban utang.',
            'Hari ini, Dawang Group berdiri tegak sebagai entitas teknologi informasi yang mandiri dan menguntungkan secara murni dari perputaran kas internal (bootstrapped cashflow). Keuntungan yang didapat tidak lagi habis tersedot bunga bank, melainkan diinvestasikan kembali untuk riset produk dan kesejahteraan tim.',
            'Kisah Tri Dawang membuktikan bahwa terkadang rem paling pakem adalah penyelamat terbaik, dan kejayaan bisnis sejati tidak diukur dari seberapa besar plafon pinjaman yang berhasil didapat, melainkan seberapa sehat fondasi operasionalnya.'
          ]
        }
      ],
      takeaways: [
        'Mitos "Utang Wajib untuk Scale Up" adalah Jebakan: Banyak bisnis hancur bukan karena produknya jelek, tapi karena beban bunga utang mematikan likuiditas saat terjadi volatilitas pasar.',
        '800 Cek Kosong adalah Alarm Kegagalan Tata Kelola: Jangan pernah mengandalkan instrumen pembayaran tunda (cek/giro) tanpa kepastian dana masuk yang nyata.',
        'Pertumbuhan Organik Jauh Lebih Tahan Badai: Mengembangkan bisnis berbasis laba ditahan (retained earnings) mungkin terasa lebih lambat di awal, tapi memberikan ketenangan dan ketahanan mutlak.',
        'Disiplin Arus Kas Mengalahkan Ambisi Kosong: Bisnis yang sehat adalah bisnis yang bisa membayar kewajibannya tepat waktu tanpa perlu bergantung pada belas kasihan pinjaman baru.'
      ]
    },
    {
      id: 'mulyono',
      featured: false,
      name: 'Mulyono (Pak Mul)',
      tagline: '17 Tahun Terjebak Utang Rp 40 Miliar demi Menopang Bisnis Pupuk — Lunas Total & Kini Ekspor Pupuk Humic Acid ke Afrika',
      title: 'Dari 17 Tahun Terjebak Utang, Kini Ekspor ke Afrika',
      subtitle: 'Pemilik Turrima Agrobiotech, Gemolong, Sragen — Dari Bisnis Keropos Rp 40 Miliar ke Penghargaan Menteri Pertanian Kamerun',
      origin: 'Gemolong, Sragen, Jawa Tengah',
      ageAtRebound: '50-an Thn',
      categories: ['debt', 'business', 'indonesia'],
      categoryLabel: '17 Tahun Terlilit Utang Rp 40 M',
      badge: 'Turrima Agrobiotech — Ekspor Afrika & Timur Tengah',
      theme: 'emerald',
      accentColor: '#065F46',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rp 40 Miliar (Terakumulasi 17 Tahun)',
        age: '50-an Tahun',
        lowest: 'Bisnis Terlihat Besar Tapi Keropos, Nyaris 3 Dekade Bergantung Pada Utang',
        action: 'Gabung SyaREA World 2017 + Stop Utang + Uji Coba Riset 2 Tahun Rp 2 M Tanpa Bayaran',
        result: 'Lunas Total 2018, Panen Padi Kamerun Naik 40%, Penghargaan Menteri Pertanian'
      },
      timeline: [
        { year: '17 Tahun Terjebak', text: 'Menjalankan Turrima Agrobiotech di Gemolong, Sragen. Terlihat sukses dari luar, namun bergantung penuh pada utang yang menggunung hingga Rp 40 miliar.' },
        { year: '2017 — Titik Balik', text: 'Bergabung dengan SyaREA World. Mendapat coaching bisnis syariah dan mengambil komitmen radikal untuk berhenti berutang.' },
        { year: '2018 — Bebas Utang', text: 'Dalam waktu satu tahun, seluruh utang Rp 40 miliar berhasil dilunasi secara terstruktur.' },
        { year: 'Riset & Ekspansi Afrika', text: 'Mengirim pupuk uji coba senilai Rp 2 miliar selama 2 tahun tanpa bayaran ke Kamerun untuk membuktikan efektivitas humic acid.' },
        { year: 'Hari Ini — Pengakuan Dunia', text: 'Produksi padi di Kamerun meningkat 40%. Menerima penghargaan dari Menteri Pertanian Kamerun Gabriel Mbairobe dan memperluas ekspor ke Timur Tengah.' }
      ],
      quote: 'Bisnis yang sehat tidak harus dibangun di atas utang. Keputusan berhenti berutang adalah kado terindah dalam hidup.',
      quoteAuthor: 'Mulyono (Pak Mul), pendiri Turrima Agrobiotech Gemolong',
      chapters: [
        {
          num: 1,
          title: 'Pengusaha yang Terlihat Sukses dari Luar',
          paragraphs: [
            'Gemolong, Sragen. Selama 17 tahun, Mulyono — yang akrab disapa Pak Mul — menjalankan bisnis pupuk organiknya. Dari luar, ia tampak seperti prototipe pengusaha daerah yang sukses. Perusahaannya, Turrima Agrobiotech, terus beroperasi, pabriknya mengepulkan asap produksi, armada truknya berlalu-lalang, dan pelanggannya terus bertambah.',
            'Namun di balik gemerlap operasional tersebut, ada rahasia menggerogoti yang ia sembunyikan rapat-rapat: bisnisnya keropos dari dalam. Setiap kali ingin ekspansi pabrik, ia meminjam bank. Setiap kali ada pesanan besar, ia mengajukan kredit modal kerja.',
            'Siklus pinjaman demi pinjaman ini berlangsung selama hampir dua dekade, menciptakan ilusi pertumbuhan semu yang ditopang oleh tumpukan bunga utang yang kian menjerat.'
          ]
        },
        {
          num: 2,
          title: 'Rp 40 Miliar yang Menggantung Selama 17 Tahun',
          paragraphs: [
            'Puncak dari akumulasi utang selama 17 tahun itu adalah angka yang mencengangkan: Rp 40 miliar. Sebuah angka yang bukan hanya mengancam kelangsungan pabrik di Gemolong, tetapi juga merampas ketenangan batin Pak Mul setiap kali pergantian bulan tiba.',
            'Ia sadar bahwa perusahaannya bekerja bukan untuk dirinya atau karyawannya, melainkan untuk membayar tagihan bunga kreditur. Jika model bisnis ini diteruskan, kebangkrutan massal tinggal menunggu waktu.',
            'Di titik kejenuhan mental itulah, ia menyadari perlunya hijrah finansial total sebelum semuanya runtuh tak berbekas.'
          ]
        },
        {
          num: 3,
          title: 'Tahun 2017: Titik Balik di SyaREA World',
          paragraphs: [
            'Tahun 2017 menjadi tonggak perubahan arah hidup Mulyono. Ia bergabung dengan Keluarga Besar SyaREA World, sebuah komunitas pengusaha yang mengampanyekan tata kelola bisnis bebas utang dan berbasis syariah.',
            'Melalui program coaching intensif, matanya terbuka bahwa utang bukanlah bensin wajib bisnis, melainkan beban yang mengebiri fleksibilitas dan kejernihan strategi.',
            'Dengan tekad bulat, ia mengambil keputusan paling berani dalam hidupnya: mendeklarasikan penghentian penambahan utang baru dan menyusun rencana pelunasan agresif dari restrukturisasi aset serta efisiensi operasional.'
          ]
        },
        {
          num: 4,
          title: '2018: Lunas dan Berhenti Menggunakan Utang',
          paragraphs: [
            'Proses pelunasan Rp 40 miliar berjalan sangat intensif selama satu tahun penuh. Mengorbankan ego, menyederhanakan struktur biaya, dan mengalokasikan seluruh likuiditas untuk menutup utang pokok.',
            'Pada tahun 2018, keajaiban disiplin itu terwujud: seluruh utang Rp 40 miliar dinyatakan lunas total. Beban seberat gunung yang menekan pundaknya selama 17 tahun akhirnya lenyap.',
            'Pak Mul kini memegang kendali penuh atas perusahaannya tanpa ada lagi ancaman sita jaminan atau tagihan bulanan yang menghantui.'
          ]
        },
        {
          num: 5,
          title: 'Uji Coba Rp 2 Miliar Tanpa Bayaran dan Sukses di Afrika',
          paragraphs: [
            'Dengan pikiran yang jernih dan kas yang sehat tanpa potongan bunga, Pak Mul memfokuskan Turrima Agrobiotech pada keunggulan riset pupuk organik berbasis asam humat (Humic Acid).',
            'Ia membidik pasar internasional yang haus akan solusi pemulihan tanah kritis di Afrika dan Timur Tengah. Di Kamerun, ia mengambil langkah berani dengan mengirimkan produk pupuk senilai Rp 2 miliar untuk uji coba selama 2 tahun tanpa menerima pembayaran sepeser pun demi membuktikan khasiat produk secara ilmiah.',
            'Kesabaran itu berbuah manis: hasil panen padi petani Kamerun melonjak hingga 40 persen. Menteri Pertanian Kamerun, Gabriel Mbairobe, secara resmi memberikan penghargaan kepada Turrima Agrobiotech. Dari Gemolong, Sragen, pupuk karya anak bangsa kini menyuburkan lahan-lahan pertanian di benua Afrika secara mandiri tanpa sepeser pun utang.'
          ]
        }
      ],
      takeaways: [
        'Bisnis Besar Belum Tentu Sehat Jika Keropos oleh Utang: Omzet besar dan pabrik ramai tidak ada artinya jika seluruh laba habis hanya untuk membayar bunga pinjaman bank.',
        '17 Tahun Terjebak Bisa Diputus dengan Keputusan Radikal: Tidak ada kata terlambat untuk hijrah finansial. Mulyono membuktikan bahwa ketergantungan belasan tahun bisa diselesaikan dalam 1 tahun dengan komitmen mutlak.',
        'Investasi pada Validasi Produk Jauh Lebih Berharga (Riset Rp 2 M): Uji coba gratis 2 tahun di Kamerun adalah strategi pembuktian mutu produk (proof-of-concept) yang akhirnya membuka pasar ekspor bernilai ratusan kali lipat.',
        'Ketenangan Batin Menghasilkan Keputusan Bisnis yang Tajam: Begitu beban utang hilang, fokus dan energi pengusaha bisa dialihkan 100% untuk inovasi produk dan ekspansi pasar global.'
      ]
    },
    {
      id: 'tommywong',
      featured: false,
      name: 'Tommy Wong',
      tagline: 'Dari Anak Jalanan & Nyaris Dibunuh Rebutan Warisan, Ditipu Mitra Puluhan Miliar Hingga Nyaris Penjara — Bangkit Lunas 2 Tahun Jadi CEO Victorindo Group',
      title: 'Dari Anak Jalanan, Bangkrut Ditipu Mitra, Kini CEO Distributor Ponsel',
      subtitle: 'CEO Victorindo Group — Distributor Resmi Gawai Korsel yang Bangkit dari Utang Puluhan Miliar dalam 2 Tahun',
      origin: 'Surabaya / Jakarta',
      ageAtRebound: '30-an Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Puluhan Miliar Ditipu Mitra',
      badge: 'CEO Victorindo Group — Lunas 2 Tahun',
      theme: 'amber',
      accentColor: '#B45309',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Puluhan Miliar Rupiah (Aset Dilarikan Mitra)',
        age: '30-an Tahun',
        lowest: 'Nyaris Masuk Penjara, Berdiri Saja Ingin Jatuh, Sempat Berpikir Mati Jalan Terbaik',
        action: 'Berserah Penuh + Bantuan Ayah Angkat + Restrukturisasi & Mindset Baja',
        result: 'Lunas 2 Tahun, CEO Victorindo Group, Aktif Membantu Anak Jalanan via HIMTI'
      },
      timeline: [
        { year: 'Usia 7 Tahun — Jalanan', text: 'Ayah wafat, nyaris dibunuh paman akibat perebutan warisan. Lari ke jalanan Surabaya menjadi gelandangan sebelum merantau ke Jakarta.' },
        { year: 'Kerja Serabutan ke GM', text: 'Bekerja keras di gerai ponsel hingga dipromosikan menjadi Manajer dan General Manajer.' },
        { year: '1998 — Krisis Moneter', text: 'Kehilangan pekerjaan. Buka lapak ponsel di mall, ditolak berkali-kali sampai meyakinkan distributor besar lewat hukum 100 penawaran.' },
        { year: 'Kejatuhan: Dikhianati Mitra', text: 'Menyerahkan pengelolaan aset pada mitra bisnis yang kemudian membawa kabur seluruh aset. Ditinggalkan utang puluhan miliar dan ancaman penjara.' },
        { year: 'Titik Balik — Berserah', text: '"Saya bukan menyerah, tapi berserah." Pertolongan datang dari ayah angkat yang juga pelanggan setia menjelang dipenjarakan.' },
        { year: 'Hari Ini — CEO Victorindo', text: 'Melunasi seluruh utang puluhan miliar dalam 2 tahun. Memimpin Victorindo Group dan aktif mengajar anak jalanan Manggarai.' }
      ],
      quote: 'Saya bukan menyerah, tapi berserah. Setiap 100 langkah yang Anda lakukan, tidak mungkin Tuhan tidak berbelas kasih.',
      quoteAuthor: 'Tommy Wong, CEO Victorindo Group',
      chapters: [
        {
          num: 1,
          title: 'Anak Kecil yang Lari ke Jalanan',
          paragraphs: [
            'Surabaya, akhir 1980-an. Seorang anak laki-laki berusia tujuh tahun, Tommy Wong, kehilangan ayahnya. Kematian itu seharusnya menjadi momen berkabung, namun seketika berubah menjadi mimpi buruk ketika konflik perebutan warisan meletus ganas di dalam keluarganya.',
            '"Paman saya tak terima karena saya adalah pewaris dari harta kakek dan ayah, akhirnya saya sempat ingin dibunuh. Kemudian saya lari ke jalanan," kenang Tommy. Bocah 7 tahun itu terpaksa bertahan hidup sebagai gelandangan di jalanan keras Surabaya.',
            'Setelah ibunya pulih dari trauma, mereka merantau ke Jakarta dengan tangan hampa. Di ibu kota, Tommy bekerja serabutan apa saja, hingga kegigihannya meyakinkan seorang pemilik gerai ponsel untuk menerimanya. Dengan etos kerja tanpa tawar-menawar, ia melesat dari pramuniaga hingga menduduki kursi General Manager.'
          ]
        },
        {
          num: 2,
          title: 'Krisis 1998 dan Bangkit dari Nol dengan Hukum 100 Langkah',
          paragraphs: [
            'Badai kembali datang ketika krisis moneter 1998 meluluhlantakkan perekonomian nasional. Perusahaan tempatnya bekerja kolaps dan Tommy kembali kehilangan pegangan hidup.',
            'Alih-alih meratapi nasib, ia memberanikan diri menyewa lapak kecil ponsel di salah satu mall Jakarta. Awalnya terasa mustahil — selama berminggu-minggu tak satu pun ponsel berhasil terjual.',
            'Namun Tommy memegang prinsip baja: "Setiap 100 langkah yang Anda lakukan, kalau Anda sudah melakukan penawaran kepada 100 orang, tidak mungkin Tuhan tidak berbelas kasih." Konsistensi itu berbuah manis saat seorang distributor kakap mempercayainya mendistribusikan gawai global.'
          ]
        },
        {
          num: 3,
          title: 'Puncak Sukses yang Dirampas: Ditipu Mitra Puluhan Miliar',
          paragraphs: [
            'Bisnisnya berkembang pesat hingga ia memimpin Victorindo Group. Namun di tengah ambisi ekspansi, ia membuat satu kekeliruan fatal: memberikan kuasa mutlak pengelolaan aset kepada mitra bisnis tanpa pengawasan ketat.',
            'Kepercayaan itu dikhianati secara brutal. Sang mitra melarikan diri membawa kabur seluruh aset perusahaan, meninggalkan Tommy sendirian menanggung utang puluhan miliar rupiah kepada para supplier besar, lengkap dengan ancaman kurungan penjara.',
            '"Saya down luar biasa. Bahkan untuk berdiri saja saya seringkali seperti mau jatuh. Bagi saya sepertinya sudah tidak ada pilihan lain. Mungkin mati adalah jalan keluar terakhir yang paling baik," tuturnya mengenang masa paling gelap itu.'
          ]
        },
        {
          num: 4,
          title: 'Bukan Menyerah, Tapi Berserah — Pertolongan Tak Terduga',
          paragraphs: [
            'Menjelang detik-detik eksekusi hukum dan penahanan, Tommy melepaskan seluruh ego manusianya. Ia bersujud dan memasrahkan seluruh takdirnya kepada Sang Pencipta. "Saya bukan menyerah, tapi berserah," ujarnya.',
            'Di ambang batas itulah pertolongan ajaib datang melalui sosok ayah angkat yang sebelumnya merupakan pelanggan setianya. Sang ayah angkat turun tangan membantu melacak penipu dan memberikan dukungan mediasi dengan pihak berwajib serta para kreditur.',
            'Dengan kepastian hukum yang mulai terbuka dan mindset yang kembali jernih, Tommy menyusun restrukturisasi pembayaran utang secara bertahap.'
          ]
        },
        {
          num: 5,
          title: 'Lunas 2 Tahun dan Menjadi Terang Bagi Anak Jalanan',
          paragraphs: [
            'Hanya dalam waktu 2 tahun yang penuh kerja keras tanpa henti, seluruh utang puluhan miliar rupiah berhasil dilunasi tuntas tanpa sisa. Victorindo Group bangkit kembali menjadi distributor resmi terkemuka.',
            'Pengalaman hidup yang pernah berada di comberan jalanan membuat Tommy tak pernah lupa asal-usulnya. Melalui program HIMTI Mengajar, ia rutin turun langsung ke bawah kolong rel Manggarai untuk mengajar anak-anak jalanan membaca, menulis, dan berhitung.',
            'Dari anak jalanan yang nyaris dibunuh, dikhianati puluhan miliar, hingga berdiri sebagai CEO terhormat — Tommy Wong membuktikan bahwa kepercayaan dan kepasrahan mutlak kepada Tuhan adalah kompas terbaik melewati badai kehidupan.'
          ]
        }
      ],
      takeaways: [
        'Jangan Berikan Kuasa Penuh Aset Bisnis Tanpa Sistem Pengawasan (Check & Balance): Kesalahan terbesar Tommy adalah mempercayakan 100% aset tanpa mekanisme kontrol ganda.',
        'Hukum 100 Penawaran — Konsistensi Menembus Penolakan: Ketika penjualan macet, tingkatkan volume penawaran secara masif. Penolakan ke-99 bisa jadi pintu keajaiban ke-100.',
        '"Berserah" Berbeda dengan "Menyerah": Menyerah adalah berhenti berusaha; berserah adalah mengerahkan seluruh daya upaya lalu memasrahkan hasil akhir kepada Tuhan.',
        'Karakter Teruji Melahirkan Kepedulian Sosial Nyata: Rasa sakit masa lalu Tommy menjadi bahan bakar untuk membantu anak-anak jalanan di Manggarai agar memiliki masa depan.'
      ]
    },
    {
      id: 'denilukman',
      featured: false,
      name: 'Deni Lukman',
      tagline: 'Dari Sales Garuda Food & Utang Rp 1 Miliar ke Supplier, Bangkit Lewat Negosiasi, Pengorbanan Istri & Prinsip Syariah Jadi Bos Ritel Pacitan',
      title: 'Dari Sales dan Utang Rp 1 Miliar, Kini Bos Ritel di Pacitan',
      subtitle: 'Pendiri Madani Distribusi, Madani Grosir Snack & Toko Tenang, Pacitan — Dari Kolaps Rp 1 Miliar ke Omzet Ratusan Juta Tanpa Riba',
      origin: 'Pacitan, Jawa Timur',
      ageAtRebound: '30-an Thn',
      categories: ['debt', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 1 M ke Supplier',
      badge: 'Madani Distribusi & Toko Tenang Pacitan',
      theme: 'emerald',
      accentColor: '#065F46',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Hampir Rp 1 Miliar (Supplier FMCG)',
        age: '30-an Tahun',
        lowest: 'Ekspansi Agresif Tanpa Kontrol, Manajemen Stok Hancur, Keuangan Kritis Nyaris Kolaps',
        action: 'Negosiasi Kreditur + Jual Aset + Pengorbanan Tabungan & Emas Istri + Mudharabah Syariah',
        result: 'Lunas Total — CV Teman Den Bagus Berkah, Digitalisasi SOP, Omzet Ratusan Juta/Bulan'
      },
      timeline: [
        { year: '2012 — Awal Sales', text: 'Mengawali karir sebagai sales Garuda Food di Pacitan. Belajar rantai pasok dan membangun jaringan relasi toko.' },
        { year: 'Merintis Distribusi', text: 'Mendirikan Madani Distribusi, Madani Grosir Snack, dan Toko Tenang. Bisnis berkembang pesat.' },
        { year: 'Kejatuhan — Rp 1 Miliar', text: 'Ekspansi terlalu cepat tanpa perhitungan. Manajemen stok dan administrasi berantakan, menumpuk utang supplier hampir Rp 1 miliar.' },
        { year: 'Dukungan & Negosiasi', text: 'Istri menyerahkan tabungan & perhiasannya. Negosiasi kelonggaran waktu dengan supplier dan jual aset pribadi.' },
        { year: 'Hijrah & Digitalisasi', text: 'Menolak utang bank, beralih ke akad syariah mudharabah. Membentuk CV Teman Den Bagus Berkah & digitalisasi sistem Toko Tenang.' },
        { year: 'Hari Ini — Bos Ritel', text: 'Memiliki omzet stabil ratusan juta rupiah per bulan dengan jaringan distribusi FMCG kokoh di Pacitan.' }
      ],
      quote: 'Konsistensi pada prinsip syariah dan pengelolaan yang disiplin adalah kunci keberkahan bisnis.',
      quoteAuthor: 'Deni Lukman, pendiri Madani Distribusi & Toko Tenang Pacitan',
      chapters: [
        {
          num: 1,
          title: 'Sales yang Berani Bermimpi',
          paragraphs: [
            'Pacitan, 2012. Deni Lukman mengawali hari-harinya sebagai seorang sales lapangan di Garuda Food. Setiap hari ia memacu motor menyusuri pelosok Pacitan, membawa katalog produk, dan mencatat pesanan dari warung ke warung.',
            'Dari lapangan itulah Deni menyerap ilmu distribusi secara nyata: ia paham ritme perputaran barang cepat (FMCG), psikologi pemilik toko grosir, hingga titik-titik lemah rantai pasok.',
            '"Suatu hari nanti, aku akan punya jaringan distribusiku sendiri," tekadnya dalam hati. Bermodal pengalaman lapangan dan kepercayaan pasar, ia memberanikan diri mendirikan Madani Distribusi, Madani Grosir Snack, dan Toko Tenang.'
          ]
        },
        {
          num: 2,
          title: 'Ekspansi yang Menjadi Bumerang Rp 1 Miliar',
          paragraphs: [
            'Keberhasilan awal membuat roda bisnisnya melaju kencang. Namun, euforia pertumbuhan membuatnya berekspansi terlalu agresif tanpa diimbangi sistem pengendalian internal yang matang.',
            'Stok barang menumpuk tanpa rotasi jelas, pencatatan piutang pelanggan berantakan, dan tagihan supplier terus mengalir masuk. Dalam sekejap, struktur keuangannya mengalami kebocoran parah.',
            'Kenyataan pahit menghantam ketika total tagihan supplier macet mencapai angka hampir Rp 1 miliar. Kondisi likuiditas kritis, modal kerja terkunci pada piutang tak tertagih, dan bisnisnya berada di bibir jurang kebangkrutan total.'
          ]
        },
        {
          num: 3,
          title: 'Pengorbanan Istri dan Benteng Keluarga',
          paragraphs: [
            'Di tengah kepungan penagihan yang mencekam, Deni menemukan kekuatan terbesarnya di dalam rumah: sang istri dan kakaknya.',
            'Melihat suaminya berjuang mempertahankan kehormatan keluarga dan bisnis, sang istri tanpa ragu menyerahkan seluruh tabungan pribadi beserta perhiasan emasnya untuk dicairkan demi menambal pembayaran mendesak.',
            'Pengorbanan tulus itu menjadi cambuk moral yang membakar kembali semangat Deni. Ia bersumpah tidak akan menyia-nyiakan kepercayaan orang-orang tercinta yang rela berkorban di masa tergelapnya.'
          ]
        },
        {
          num: 4,
          title: 'Negosiasi, Pembenahan Stok, dan Prinsip Anti-Riba',
          paragraphs: [
            'Deni segera mengambil tindakan proaktif. Alih-alih menghindar, ia mendatangi satu per satu supplier principal untuk menegosiasikan restrukturisasi jadwal pembayaran secara transparan.',
            'Ia menjual aset non-produktif untuk mencicil pokok utang dan merombak total sistem pergudangan serta administrasi stok barang. Yang paling krusial, ia menolak opsi pinjaman bank berbunga dan memilih skema bagi hasil syariah (mudharabah) dengan investor lokal yang saling percaya.',
            '"Saya tidak ingin memadamkan api utang dengan bensin riba yang akan membakar lebih besar," tegasnya memegang prinsip hijrah.'
          ]
        },
        {
          num: 5,
          title: 'Digitalisasi Toko Tenang dan Kebangkitan Sejati',
          paragraphs: [
            'Setelah badai utang berhasil dilewati dan seluruh kewajiban supplier terselesaikan, Deni melancarkan transformasi digital melalui pembentukan payung hukum CV Teman Den Bagus Berkah.',
            'Toko Tenang yang semula dikelola secara tradisional oleh kakaknya dirombak dengan sistem POS terkomputerisasi, SOP pergudangan ketat, serta pemasaran digital yang mendominasi pasar Pacitan.',
            'Kini, usahanya mengantongi omzet stabil ratusan juta rupiah per bulan secara sehat dan mandiri. Keuntungan yang didapat diputar murni untuk reinvestasi infrastruktur dan peningkatan kesejahteraan tim, membuktikan bahwa bisnis berkah tanpa riba mampu tumbuh lebih kokoh dan menenangkan.'
          ]
        }
      ],
      takeaways: [
        'Ekspansi Tanpa Kontrol Stok = Bom Waktu FMCG: Di bisnis distribusi ritel, manajemen inventory dan piutang toko adalah nadi utama. Pertumbuhan omzet tanpa tata kelola stok yang rapi akan langsung menenggelamkan likuiditas.',
        'Hadapi Kreditur dengan Kejujuran dan Rencana Konkret: Deni tidak kabur saat utang Rp 1 Miliar jatuh tempo; ia bernegosiasi secara transparan dan menunjukkan iktikad baik lewat pencairan aset.',
        'Dukungan Keluarga adalah Jangkar Terkuat di Titik Nol: Pengorbanan tabungan dan emas istri menjadi katalisator kebangkitan moral yang tak ternilai harganya.',
        'Digitalisasi dan Reinvestasi Laba untuk Pertumbuhan Berkelanjutan: Mengganti sistem manual dengan komputerisasi dan memutar laba untuk scale-up (bukan gaya hidup) menjamin bisnis tetap lincah dan berdaya saing.'
      ]
    },
    {
      id: 'suyono',
      featured: false,
      name: 'Suyono',
      tagline: 'Dari Kolong Jembatan, 3x Gagal Panen Tebu & Utang Bank Rp 40 Juta — Bangkit dari Toko Terpal ke 2.000 Toko di Seluruh Indonesia',
      title: 'Dari Kolong Jembatan dan Utang Rp 40 Juta, Kini Jangkau 2.000 Toko',
      subtitle: 'Pengusaha Perlengkapan Toko, Nganjuk — Dari Toko Dinding Terpal ke Jaringan Nasional Omzet Rp 10 Juta/Hari',
      origin: 'Nganjuk, Jawa Timur',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Gagal Panen & Utang Rp 40 Jt',
      badge: '2.000 Toko se-Indonesia — Omzet Rp 10 Jt/Hari',
      theme: 'amber',
      accentColor: '#B45309',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Rp 40 Juta di Banyak Bank',
        age: '40-an Tahun',
        lowest: 'Tinggal di Kolong Jembatan, 3x Gagal Panen, Anak SD Berbohong Tutupi Penagih',
        action: 'Buka Usaha Perlengkapan Toko Modal Rak Sederhana & Dinding Terpal',
        result: 'Menjangkau 2.000+ Toko hingga Papua, Omzet Rp 10 Juta/Hari'
      },
      timeline: [
        { year: 'Masa Kecil — Kolong Jembatan', text: 'Tumbuh serba kekurangan di Nganjuk. Bertahun-tahun tinggal di kolong jembatan, membantu orang lewat demi secuil jagung atau tahu.' },
        { year: 'Petani Tebu', text: 'Bekerja keras bertani tebu, namun tertimpa musibah 3 kali berturut-turut gagal panen total akibat cuaca dan hama.' },
        { year: 'Titik Terendah — Rp 40 Juta', text: 'Terlilit utang Rp 40 juta di berbagai bank. Setiap minggu didatangi penagih; anak kelas 5 SD terpaksa berbohong menutupi keberadaan ayahnya.' },
        { year: 'Titik Balik — Toko Terpal', text: 'Menghentikan lingkaran utang. Membuka usaha perlengkapan toko bermodal rak kayu sederhana dan dinding terpal.' },
        { year: 'Hari Ini — Jangkau Papua', text: 'Menyuplai lebih dari 2.000 toko di seluruh Indonesia dengan omzet Rp 10 juta per hari.' }
      ],
      quote: 'Anak saya waktu itu masih kelas 5 SD, tapi sudah bisa menutupi saya dari penagih utang. Rasa nelongso itu yang membuat saya bersumpah harus bangkit.',
      quoteAuthor: 'Suyono, pengusaha perlengkapan toko asal Nganjuk',
      chapters: [
        {
          num: 1,
          title: 'Tiga Kali Gagal Panen dan Utang yang Menggunung',
          paragraphs: [
            'Nganjuk, Jawa Timur. Suyono adalah seorang petani tebu yang membanting tulang di ladang setiap hari. Panas terik matahari dan lumpur sawah adalah kawan akrabnya, berharap panen tebu yang manis dapat mencukupi kebutuhan keluarganya.',
            'Namun alam berkehendak lain: tiga musim berturut-turut tanamannya diserang hama dan anomali cuaca ekstrem, berujung pada gagal panen total.',
            'Untuk menutup biaya sewa lahan dan operasional pupuk, ia terpaksa meminjam ke banyak bank hingga terakumulasi sebesar Rp 40 juta. Di pedesaan, angka itu adalah gunung yang menindih leher, mendatangkan penagih utang bergantian setiap minggunya.'
          ]
        },
        {
          num: 2,
          title: 'Memori Kolong Jembatan dan Luka Hati Seorang Ayah',
          paragraphs: [
            'Kehidupan keras bukanlah hal baru bagi Suyono. Sejak belia ia pernah bertahun-tahun hidup terlunta-lunta di kolong jembatan, menengadahkan tangan dan membantu orang lewat hanya untuk diberi sepotong jagung bakar atau tahu.',
            'Namun kepedihan di kolong jembatan tidak ada apa-apanya dibanding saat ia menyaksikan anaknya sendiri yang masih duduk di kelas 5 SD harus berbohong di depan pintu rumah: "Bapak tidak ada di rumah," demi melindungi ayahnya dari amarah penagih utang.',
            '"Anak saya waktu itu masih kelas 5 SD, tapi sudah bisa menutupi saya dari penagih utang. Itu yang paling membuat saya nelongso dan menangis batin," kenang Suyono.'
          ]
        },
        {
          num: 3,
          title: 'Sebuah Rak Sederhana dan Toko Berdinding Terpal',
          paragraphs: [
            'Rasa nelongso itu memantik sumpah di dalam dada Suyono: ia harus memutus rantai kemiskinan dan jeratan utang ini sekarang juga. Dengan sisa uang terakhir hasil tebasan tebu yang tersisa, ia beralih haluan secara drastis.',
            'Ia melihat para pemilik warung dan toko kelontong di sekitarnya selalu kesulitan mencari display dan rak perlengkapan toko berkualitas dengan harga terjangkau.',
            'Bermodalkan satu rak kayu buatan tangan dan sebuah lapak berdinding terpal plastik seadanya di pinggir jalan, ia mulai memajang barang dagangannya. Dinginnya angin malam dan terpal yang berkibar ditiup badai tak menggoyahkan tekadnya.'
          ]
        },
        {
          num: 4,
          title: 'Dari Terpal Menuju 2.000 Toko hingga Pelosok Papua',
          paragraphs: [
            'Kejujuran harga dan keandalan produk perlengkapan toko Suyono menyebar dari mulut ke mulut antar-pedagang. Dari lapak terpal, usahanya berevolusi menjadi workshop pembuatan rak minimarket dan display ritel yang kokoh.',
            'Pesanan tidak lagi hanya datang dari Nganjuk atau Jawa Timur, melainkan meluas ke Jawa Tengah, Sumatera, Kalimantan, Sulawesi, hingga pelosok Papua.',
            'Kini, jaringannya telah memasok lebih dari 2.000 toko di seantero nusantara dengan omzet harian mencapai Rp 10 juta per hari (sekitar Rp 300 juta per bulan). Dari comberan kolong jembatan dan air mata anak yang menutupi utang ayahnya, Suyono membuktikan bahwa martabat keluarga bisa direbut kembali dengan kerja keras tanpa batas.'
          ]
        }
      ],
      takeaways: [
        'Rasa Malu dan Nelongso Bisa Diubah Menjadi Bahan Bakar Kebangkitan Terkuat: Titik balik Suyono bukan modal besar, melainkan luka batin melihat anaknya harus berbohong melindungi ayahnya.',
        'Mulai Dari Sarana Seadanya (Lapak Terpal & 1 Rak): Jangan menunggu punya ruko mewah untuk berbisnis. Mulailah dari apa yang ada di tangan hari ini.',
        'Peluang B2B Perlengkapan Usaha yang Resilien: Menyediakan infrastruktur bagi toko kelontong/minimarket (rak & display) adalah ceruk bisnis yang selalu dibutuhkan seiring tumbuhnya sektor ritel mikro.',
        'Kualitas dan Kejujuran Menembus Batas Geografis: Produk buatan tangan dari Nganjuk bisa menembus hingga ke Papua murni karena reputasi dan kepuasan pelanggan.'
      ]
    },
    {
      id: 'ridwanghany',
      featured: false,
      name: 'Ridwan Ghany',
      tagline: 'Dari Rumah Impian & Utang Rp 5 Miliar Akibat Pandemi COVID-19, Ikhlas Jual Seluruh Aset demi Memulai Kembali dari Titik Nol',
      title: 'Dari Rumah Impian dan Utang Rp 5 Miliar, Kini Memulai dari Nol',
      subtitle: 'Aktor & Presenter Indonesia — Melepas Rumah & Mobil demi Bebas Utang Rp 5 Miliar dengan Dukungan Istri',
      origin: 'Jakarta, Indonesia',
      ageAtRebound: '30-an Thn',
      categories: ['debt', 'zero', 'indonesia'],
      categoryLabel: 'Utang Rp 5 M Akibat Pandemi',
      badge: 'Bebas Utang — Mulai dari Nol',
      theme: 'amber',
      accentColor: '#B45309',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Kurang Lebih Rp 5 Miliar',
        age: '30-an Tahun',
        lowest: 'Bisnis Ibu Kolaps, Pensiun Macet, Menjual Rumah Impian & Mobil, Naik Mobil Sewa',
        action: 'Jual Rumah Hasil Kerja Keras + Jual Mobil + Ikhlas Total + Dukungan Setia Istri',
        result: 'Utang Rp 5 M Lunas — Memulai Hidup Baru dengan Ketenangan Jiwa'
      },
      timeline: [
        { year: 'Sebelum Pandemi', text: 'Karir aktor dan presenter gemilang. Membangun rumah impian, memiliki mobil keluarga, dan finansial stabil.' },
        { year: '2020 — Pandemi Datang', text: 'Bisnis keluarga ibunda bangkrut total, diperparah macetnya dana pensiun mertua. Utang menggunung sekitar Rp 5 miliar.' },
        { year: 'Keputusan Menyakitkan', text: 'Memilih melunasi seluruh kewajiban dengan menjual mobil dan menyewa kendaraan untuk operasional sehari-hari.' },
        { year: 'Rumah Impian Terjual', text: 'Rumah impian hasil keringat bertahun-tahun terjual tepat sepulang dari umrah. Air mata menetes saat tak sengaja melintas di depannya.' },
        { year: 'Hari Ini — Mulai dari Nol', text: 'Didampingi istri tercinta (Adithya Putri), hidup tenang bebas dari jeratan utang dan membangun kembali impian dari titik nol.' }
      ],
      quote: 'Mobil lepas, nggak pakai mobil kita sewa. Rumah impian terjual sepulang umrah. Pas ngelepas rasanya enteng, tapi saat lewat di depannya saya nangis di mobil sendirian. Namun hidup harus terus berjalan.',
      quoteAuthor: 'Ridwan Ghany, aktor dan presenter',
      chapters: [
        {
          num: 1,
          title: 'Kehidupan yang Tampak Sempurna',
          paragraphs: [
            'Di layar kaca, Ridwan Ghany dikenal luas sebagai sosok aktor dan presenter dengan senyum ramah dan karir gemilang. Hasil jerih payah bertahun-tahun di industri hiburan tanah air telah mewujud nyata: rumah impian yang nyaman, kendaraan pribadi, dan keluarga kecil yang harmonis.',
            'Semuanya tampak tertata rapi sesuai rencana masa depan. Namun tidak ada yang kebal dari gelombang krisis global.',
            'Ketika pandemi COVID-19 melanda tanpa aba-aba, industri hiburan berhenti berputar dan badai finansial menimpa keluarganya secara beruntun.'
          ]
        },
        {
          num: 2,
          title: 'Pandemi yang Menghancurkan Dua Pilar Keluarga',
          paragraphs: [
            'Pukulan telak datang bukan dari gaya hidup konsumtif, melainkan kolapsnya lini usaha penopang keluarga. Bisnis milik ibunda tercinta mengalami kebangkrutan parah akibat pembatasan sosial.',
            'Pada saat yang hampir bersamaan, dana pensiun dari pihak keluarga istri turut mengalami kemacetan total. Arus kas keluarga seketika terhenti, sementara beban kewajiban yang timbul membengkak hingga menyentuh angka sekitar Rp 5 miliar.',
            '"Utangnya itu sampai miliaranlah, nggak sampai puluhan miliar, cuma ya Rp 5 miliar kurang lebih," kenang Ridwan menghadapi angka yang mengancam seluruh fondasi masa depannya.'
          ]
        },
        {
          num: 3,
          title: 'Keputusan Melepas Rumah Impian dan Mobil',
          paragraphs: [
            'Menghadapi tanggung jawab moral yang teramat berat, Ridwan tidak memilih lari atau menunda-nunda pembayaran. Bersama istrinya, Adithya Putri, ia mengambil keputusan paling radikal dalam hidup mereka: menjual seluruh aset utama.',
            'Mobil pribadi dilepas untuk menutup utang mendesak, membuat mereka harus beralih menggunakan mobil sewaan untuk mobilitas harian.',
            'Puncaknya, rumah impian yang dibangun bata demi bata dari hasil syuting bertahun-tahun diputuskan untuk dijual. Momen penjualan itu terjadi tepat saat ia baru saja pulang dari ibadah umrah di Tanah Suci — sebuah ketetapan takdir yang ia terima dengan lapang dada.'
          ]
        },
        {
          num: 4,
          title: 'Air Mata di Dalam Mobil dan Ikhlas yang Sebenarnya',
          paragraphs: [
            'Melepaskan aset di atas kertas notaris terasa enteng karena didorong niat melunasi utang. Namun rasa sakit batin manusiawi tak bisa disembunyikan.',
            'Suatu hari, saat tanpa sengaja mengemudi melintasi jalan di depan rumah lamanya yang kini dihuni orang lain, bendungan emosinya runtuh seketika.',
            '"Pas ngelepas rumah itu enteng banget, tapi pas aku ngelewatin rumah itu nggak sengaja, itu aku nangis di mobil sendirian," ungkap Ridwan dengan mata berkaca-kaca. Air mata itu adalah bukti betapa besar cinta dan pengorbanan yang telah ia curahkan untuk menjaga kehormatan keluarganya.'
          ]
        },
        {
          num: 5,
          title: 'Kesetiaan Istri dan Memulai Langkah Baru dari Titik Nol',
          paragraphs: [
            'Di titik nol tersebut, pahlawan sejati dalam hidup Ridwan adalah sang istri, Adithya Putri. Meski merasakan lelah dan beratnya ujian, ia tetap berdiri kokoh di samping suaminya tanpa keluhan.',
            'Kini, seluruh beban utang Rp 5 miliar telah tuntas terbayar. Tidak ada lagi teror tagihan, tidak ada lagi kecemasan saat tidur malam.',
            'Dari seorang bintang yang rela kehilangan segalanya demi martabat dan ketenangan keluarga, Ridwan Ghany membuktikan bahwa harta materi bisa dicari kembali, namun integritas dan keharmonisan rumah tangga adalah kekayaan sejati yang tak ternilai harganya.'
          ]
        }
      ],
      takeaways: [
        'Ikhlas Melepas Aset Demi Kehormatan dan Ketenangan Jiwa: Ridwan tidak ragu menjual rumah dan mobil demi melunasi Rp 5 Miliar utang keluarga. Rumah bisa dibangun lagi, tapi nama baik dan ketenangan hidup tidak bisa dibeli.',
        'Menerima Rasa Sedih sebagai Bagian dari Proses: Menangis sendirian di mobil saat melihat rumah lama bukan tanda lemah, melainkan katarsis alami manusia sebelum melangkah maju.',
        'Keluarga yang Solid Adalah Aset Termahal di Dunia: Dukungan setia pasangan di saat mobil dan rumah hilang adalah benteng pertahanan terbaik melawan depresi finansial.',
        'Mulai Dari Nol Bukan Akhir, Melainkan Lembaran Baru: Bebas dari utang memberikan ruang mental yang lapang untuk berkarya dan membangun kembali kekayaan secara lebih kokoh.'
      ]
    },
    {
      id: 'ahmadnasai',
      featured: false,
      name: 'Ahmad Nasa\'i',
      tagline: 'Dari Dicap Gelandangan & Kesulitan Beli Beras Pasca Bangkrut, Bangkit Membangun Mitraku — Toko Sembako & Bahan Kue Terbesar di Ciamis (800 Pelanggan/Hari)',
      title: 'Dari Dicap Gelandangan, Kini CEO Toko Sembako Terbesar di Ciamis',
      subtitle: 'Pendiri & CEO Mitraku, Ciamis — Dari Nol Beras ke Pusat Bahan Kue & Kemasan Kuliner Melayani 800 Pelanggan/Hari',
      origin: 'Ciamis, Jawa Barat',
      ageAtRebound: '30-an Thn',
      categories: ['bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkrut & Dicap Gelandangan',
      badge: 'Mitraku Ciamis — 800 Pelanggan/Hari',
      theme: 'emerald',
      accentColor: '#065F46',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Bangkrut Total & Tabungan Nol',
        age: '30-an Tahun',
        lowest: 'Dicap Gelandangan oleh Warga, Sulit Membeli Beras Makan Harian',
        action: 'Riset Peluang Kemasan Modern Kuliner + Mendirikan Mitraku 2012',
        result: '700–800 Pelanggan/Hari, Gaji Karyawan Rp 60–65 Jt/Bulan'
      },
      timeline: [
        { year: 'Masa Kecil — Jiwa Dagang', text: 'Sejak SD berjualan mercon, majalah bekas saat SMA, hingga menjajakan makanan ringan di Alun-Alun Ciamis.' } ,
        { year: 'Titik Terendah — Bangkrut', text: 'Setelah menikah, bisnisnya bangkrut total. Kesulitan membeli beras sehari-hari hingga dicap seperti gelandangan oleh warga sekitar.' },
        { year: '2012 — Lahirnya Mitraku', text: 'Melihat sulitnya UMKM Ciamis mencari kemasan makanan modern & bahan kue berkualitas. Mendirikan Mitraku di sebuah ruko sederhana.' },
        { year: 'Manajemen Kerugian', text: 'Menghadapi kebocoran transaksi Rp 1–5 juta/bulan, berbenah dengan diskon barang mendekati kedaluwarsa & perbaikan SOP.' },
        { year: 'Hari Ini — CEO Terbesar', text: 'Melayani 700–800 pelanggan setiap hari dengan total gaji puluhan karyawan mencapai Rp 60–65 juta per bulan.' }
      ],
      quote: 'Saya pernah dianggap seperti orang gelandangan. Untuk makan sehari-hari saja sulit. Namun, dari kondisi itulah saya bersumpah harus bangkit.',
      quoteAuthor: 'Ahmad Nasa\'i, pendiri & CEO Mitraku Ciamis',
      chapters: [
        {
          num: 1,
          title: 'Anak Kecil yang Berjualan Sejak SD',
          paragraphs: [
            'Ciamis, Jawa Barat. Jiwa dagang telah mengalir deras dalam diri Ahmad Nasa\'i sejak belia. Saat anak-anak seusianya asyik bermain di bangku Sekolah Dasar, Ahmad kecil sudah sibuk menjajakan petasan mercon.',
            'Menginjak bangku SMA, ia beralih menjual majalah bekas, hingga pernah menggelar lapak makanan ringan di sekitar Alun-Alun Ciamis.',
            'Dari setiap recehan dan interaksi langsung dengan pembeli di jalanan, Ahmad mengasah insting niaga, pemahaman karakter konsumen, dan ketahanan mental menghadapi penolakan.'
          ]
        },
        {
          num: 2,
          title: 'Jatuh ke Titik Terendah dan Cap Gelandangan',
          paragraphs: [
            'Setelah berumah tangga, Ahmad memberanikan diri terjun total sebagai wirausahawan mandiri. Namun realitas bisnis menghantamnya tanpa ampun: usahanya kolaps dan ia mengalami kebangkrutan total.',
            'Perekonomian keluarganya hancur sampai pada titik paling memilukan — ia kesulitan membeli sekilo beras untuk makan anak dan istrinya.',
            'Melihat kondisinya yang kumal dan terlunta-lunta, beberapa orang di lingkungan sekitarnya bahkan melabelinya dengan sebutan "gelandangan". Luka batin itu teramat pedih, namun di balik air matanya tersimpan sumpah baja untuk membalikkan nasib.'
          ]
        },
        {
          num: 3,
          title: '2012 — Menangkap Peluang Kemasan Kuliner Modern',
          paragraphs: [
            'Tahun 2012 menjadi titik balik kebangkitan Ahmad. Ia mengamati tren menjamurnya kafe dan UMKM kuliner kekinian di Ciamis yang kesulitan memperoleh bahan baku kue serta packaging makanan modern yang estetik.',
            'Kala itu pedagang lokal masih terjebak menggunakan bungkus plastik kresek atau daun pisang seadanya. Ahmad menangkap ceruk pasar ini dengan cepat: mendirikan gerai sembako, bahan kue, dan kemasan modern bernama "Mitraku".',
            'Ia memposisikan tokonya bukan sekadar penjual bahan, melainkan mitra sejati bagi para perintis usaha kuliner lokal agar produk mereka naik kelas.'
          ]
        },
        {
          num: 4,
          title: 'Belajar Mengelola Risiko dan Menekan Kerugian',
          paragraphs: [
            'Mengelola perputaran ribuan SKU barang bukanlah perkara gampang. Pada tahun-tahun awal, Mitraku kerap mengalami kebocoran stok dan kesalahan pencatatan transaksi senilai Rp 1 juta hingga Rp 5 juta per bulan.',
            'Alih-alih panik, Ahmad menjadikannya bahan evaluasi sistemik. Barang-barang yang mendekati tanggal kedaluwarsa segera dibundel promo diskon khusus sebagai bentuk apresiasi bagi pelanggan setia.',
            'Dengan pembenahan SOP pergudangan dan kontrol kas harian, kebocoran berhasil ditekan drastis hingga di bawah Rp 800 ribu per bulan.'
          ]
        },
        {
          num: 5,
          title: '700–800 Pelanggan Per Hari dan Payung Rezeki Karyawan',
          paragraphs: [
            'Kini, Mitraku telah menjelma menjadi destinasi kuliner dan sembako terbesar serta terlengkap di Ciamis. Setiap hari, gerainya dipadati 700 hingga 800 pelanggan setia yang 60% di antaranya adalah pemilik kafe dan pengusaha kuliner milenial.',
            'Ahmad kini mempekerjakan puluhan karyawan lokal dengan total alokasi penggajian mencapai Rp 60 juta hingga Rp 65 juta per bulan.',
            'Dari seorang pria yang pernah dihina sebagai gelandangan dan kelaparan mencari sesuap beras, Ahmad Nasa\'i membuktikan bahwa kehinaan masa lalu dapat diubah menjadi kemuliaan yang menafkahi puluhan keluarga di tanah kelahirannya.'
          ]
        }
      ],
      takeaways: [
        'Ejekan dan Penghinaan adalah Bahan Bakar Paling Murni: Dicap gelandangan dan tidak mampu beli beras menjadi pelecut semangat Ahmad untuk membuktikan nilainya lewat kerja nyata.',
        'Peka Menangkap Pergeseran Kebutuhan Pasar Lokal: Mitraku sukses karena Ahmad melihat gap kebutuhan kemasan modern bagi UMKM kuliner di Ciamis yang belum terlayani toko tradisional.',
        'Manajemen Kedaluwarsa & Penyusutan Barang: Daripada membuang barang rusak, ubah barang mendekati expired menjadi program promo apresiasi pelanggan untuk menjaga likuiditas kas.',
        'Bisnis yang Berkah Membuka Lapangan Kerja Bagi Lingkungan: Dari tidak mampu makan sendiri, kini Ahmad menggaji puluhan staf dengan nilai Rp 60–65 juta per bulan.'
      ]
    },
    {
      id: 'devyanastasia',
      featured: false,
      name: 'Devy Anastasia',
      tagline: 'Dari Tekanan Utang Rp 1 Miliar di Panggung MasterChef Indonesia, Bangkit Lewat Negosiasi Jujur & Endorse Gratis Hingga Jadi Jutawan dalam 1 Tahun',
      title: 'Dari Utang Rp 1 Miliar di MasterChef, Kini Jutawan dalam Setahun',
      subtitle: 'Finalis MasterChef Indonesia S9, Influencer & Pengusaha Kuliner — Lunas Rp 1 Miliar & Berbalik Jadi Miliarder dalam 12 Bulan',
      origin: 'Jakarta, Indonesia',
      ageAtRebound: '20-an Thn',
      categories: ['debt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 1 M Saat MasterChef',
      badge: 'Lunas 1 Tahun — MasterChef Season 9',
      theme: 'amber',
      accentColor: '#B45309',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Nyaris Rp 1 Miliar',
        age: '20-an Tahun',
        lowest: 'Tersiksa Pikiran di Galeri MasterChef, Terjebak Menyalahkan Diri Sendiri',
        action: 'Negosiasi Jujur 1-by-1 + Berani Buka Jasa Endorsement Gratis di Instagram',
        result: 'Lunas Penuh dalam 1 Tahun, Berbalik Memiliki Tabungan & Aset Miliaran'
      },
      timeline: [
        { year: '2022 — MasterChef Season 9', text: 'Berkompetisi di dapur televisi nasional dengan beban batin utang nyaris Rp 1 miliar yang menumpuk.' },
        { year: 'Titik Balik — Pola Pikir', text: 'Berhenti menyalahkan diri sendiri. Mengubah fokus dari "kapan masalah selesai" menjadi "bagaimana cara menyelesaikannya".' },
        { year: 'Langkah 1: Negosiasi Jujur', text: 'Mencatat seluruh daftar kreditur dan menghubungi mereka satu per satu secara transparan untuk menyepakati skema cicilan.' },
        { year: 'Langkah 2: Endorse Gratis (Juni 2022)', text: 'Mengambil langkah berani menawarkan jasa promosi brand secara cuma-cuma untuk membangun reputasi dan trust.' },
        { year: 'Hari Ini — Berbalik Miliaran', text: 'Penjualan brand meledak, tawaran berbayar mengalir deras. Seluruh utang Rp 1 miliar lunas dalam 1 tahun dan berbalik memiliki aset miliaran.' }
      ],
      quote: 'Awalnya punya utang Rp 1 miliar, tapi bisa berbalik punya miliaran hanya dalam setahun. Kuncinya berhenti menyalahkan diri sendiri dan mulai fokus pada solusi.',
      quoteAuthor: 'Devy Anastasia, Finalis MasterChef Indonesia S9 & Pengusaha Kuliner',
      chapters: [
        {
          num: 1,
          title: 'Di Balik Senyum Galeri MasterChef: Beban Rp 1 Miliar',
          paragraphs: [
            'Tahun 2022. Devy Anastasia berdiri di panggung kompetisi kuliner paling bergengsi di Indonesia: MasterChef Season 9. Di hadapan dewan juri ternama dan jutaan pasang mata pemirsa televisi, ia menyajikan hidangan dengan presisi dan senyuman penuh pesona.',
            'Namun di balik sorot lampu studio yang gemerlap, batinnya tertekan oleh beban rahasia yang teramat berat: jeratan utang yang nyaris menyentuh angka Rp 1 miliar.',
            'Setiap kali jeda syuting, benaknya dihantui oleh daftar tagihan yang mendekati jatuh tempo. Di sela-sela memotong bahan masakan, ia terus terjebak dalam pertanyaan pasif: "Kapan semua penderitaan ini akan berakhir?"'
          ]
        },
        {
          num: 2,
          title: 'Titik Balik: Mengubah "Kapan" Menjadi "Bagaimana"',
          paragraphs: [
            'Suatu malam, Devy mengalami pergolakan batin yang mendalam. Ia menyadari bahwa menanyakan "kapan" hanya melahirkan rasa kasihan pada diri sendiri (self-pity) yang melumpuhkan tindakan.',
            'Ia harus mengubah pertanyaannya menjadi "bagaimana caraku menyelesaikannya hari ini?". Pergeseran paradigma dari menyalahkan keadaan menjadi pencari solusi aktif adalah kunci pembuka pintu rezekinya.',
            '"Berhenti menyalahkan diri sendiri dan mulai bertindak mencari solusi nyata," menjadi mantra kebangkitan yang ia pegang teguh.'
          ]
        },
        {
          num: 3,
          title: 'Mencatat Kreditur dan Bernegosiasi Tanpa Rasa Takut',
          paragraphs: [
            'Langkah pertama yang ia lakukan sangat berani: mengambil secarik kertas dan menuliskan seluruh nama orang serta institusi yang ia pinjami uang tanpa ada yang disembunyikan.',
            'Satu per satu ia telepon dan datangi secara jujur. Ia tidak mencari alasan palsu atau berkelit, melainkan memaparkan kondisi keuangannya apa adanya dan menawarkan komitmen jadwal cicilan yang masuk akal.',
            'Kejujuran dan iktikad baik itu meluluhkan para kreditur. Mereka memberinya kelonggaran waktu dan ketenangan mental untuk fokus bekerja mencari uang tanpa teror penagihan harian.'
          ]
        },
        {
          num: 4,
          title: 'Strategi Gila: Endorse Gratis yang Membuka Keran Rezeki',
          paragraphs: [
            'Pada Juni 2022, pasca kompetisi MasterChef, Devy mengambil keputusan berani yang dianggap tidak lazim bagi seorang figur publik: membuka tawaran jasa endorsement gratis di akun Instagram miliknya.',
            '"Siapa juga yang rugi? Waktu itu aku hanya ingin berubah, belajar, dan memberikan manfaat nyata bagi pemilik usaha UMKM," ujarnya.',
            'Ia mengulas produk-produk kuliner dan lifestyle dengan tulus serta kreatif. Hasilnya luar biasa: brand-brand yang dipromosikannya mengalami lonjakan omzet drastis. Portofolio keberhasilan itu menyebar cepat di kalangan pemilik brand nasional.'
          ]
        },
        {
          num: 5,
          title: 'Lunas dalam Setahun dan Berbalik Jadi Miliarder',
          paragraphs: [
            'Dari promosi gratis, tawaran endorsement profesional berbayar mahal mulai membanjiri jadwalnya. Ia diundang menjadi konsultan menu kuliner, brand ambassador, dan membangun lini bisnis kulinernya sendiri.',
            'Arus kas yang masuk dialokasikan secara disiplin untuk melunasi seluruh cicilan utang pokok terlebih dahulu. Dalam waktu 12 bulan yang luar biasa, seluruh utang Rp 1 miliar dinyatakan lunas tuntas.',
            'Bahkan di tahun berikutnya, posisi keuangannya berbalik 180 derajat: dari minus Rp 1 miliar menjadi pemilik aset dan tabungan miliaran rupiah. Devy Anastasia membuktikan bahwa ketika kita fokus memberi nilai bagi orang lain dan berani menghadapi kenyataan, badai finansial sebesar apa pun dapat ditundukkan dalam hitungan bulan.'
          ]
        }
      ],
      takeaways: [
        'Ubah Pola Pikir dari "Kapan Berakhir" Menjadi "Bagaimana Solusinya": Rasa kasihan pada diri sendiri tidak menghasilkan uang. Fokuskan seluruh energi otak untuk mencari jalan keluar teknis.',
        'Hadapi Kreditur dengan Transparansi Penuh: Mencatat utang dan menghubungi kreditur secara jujur akan menghilangkan kecemasan batin dan mengamankan kelonggaran waktu pembayaran.',
        'Beri Nilai Dulu Sebelum Meminta Bayaran (Endorse Gratis): Membantu bisnis orang lain bertumbuh tanpa pamrih di awal adalah investasi reputasi paling ampuh yang membuka jalan rezeki eksponensial.',
        '12 Bulan Bisa Mengubah Hidup 180 Derajat: Dari minus Rp 1 miliar ke plus miliaran rupiah — waktu yang dibutuhkan untuk bangkit seringkali jauh lebih singkat dari waktu yang kita habiskan untuk meratap.'
      ]
    },
    {
      id: 'ekanugraha',
      featured: false,
      name: 'Eka Nugraha',
      tagline: 'Dari Utang Rp 350 Miliar Akibat Ekspansi Telekomunikasi Terlalu Cepat, Bangkit Bersama SyaREA World & Pangkas Separuh Utang dalam 1 Tahun',
      title: 'Dari Utang Rp 350 Miliar, Kini Berkembang Tanpa Beban',
      subtitle: 'Pengusaha Telekomunikasi, Bogor — Membangun Bisnis Sehat & Mandiri Tanpa Ketergantungan Utang Bank',
      origin: 'Bogor, Jawa Barat',
      ageAtRebound: '40-an Thn',
      categories: ['debt', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 350 Miliar',
      badge: 'SyaREA World — Pangkas 50% Utang 1 Tahun',
      theme: 'indigo',
      accentColor: '#4338CA',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 350 Miliar (Ekspansi Telekomunikasi)',
        age: '40-an Tahun',
        lowest: 'Arus Kas Macet, Utang Menumpuk Rp 350 M, Bisnis Seperti Rumah Kartu',
        action: 'Bergabung SyaREA World + Stop Utang Bank + Restrukturisasi Arus Kas Murni',
        result: 'Pangkas 50% Utang dalam 1 Tahun, Bisnis Tumbuh Sehat Tanpa Utang Perbankan'
      },
      timeline: [
        { year: 'Fase Ekspansi Cepat', text: 'Mengembangkan bisnis telekomunikasi di Bogor dengan keyakinan bahwa utang bank adalah bahan bakar utama untuk memperluas cabang dan proyek besar.' },
        { year: 'Puncak Beban Rp 350 Miliar', text: 'Ekspansi agresif tanpa arus kas yang sehat menjadi bumerang. Utang membengkak hingga Rp 350 miliar dan mengancam kelangsungan usaha.' },
        { year: 'Titik Balik — SyaREA World', text: 'Bergabung dengan Keluarga Besar SyaREA World untuk mendapatkan pendampingan dan merombak total paradigma tata kelola bisnis.' },
        { year: '1 Tahun Pemulihan', text: 'Menghentikan ketergantungan utang bank, merampingkan biaya, dan melunasi sekitar separuh dari total utang dalam waktu 12 bulan.' },
        { year: 'Hari Ini — Tumbuh Mandiri', text: 'Menjalankan bisnis telekomunikasi yang sehat, tenang, dan kokoh tanpa terbebani bunga pinjaman perbankan.' }
      ],
      quote: 'Modal pertama pengusaha hebat bukan uang, tetapi ketenangan dan kepercayaan. Pertumbuhan sejati diukur dari seberapa sehat bisnis mampu bertahan.',
      quoteAuthor: 'Eka Nugraha, pengusaha telekomunikasi Bogor',
      chapters: [
        {
          num: 1,
          title: 'Pengusaha yang Terlalu Cepat Berlari',
          paragraphs: [
            'Bogor, Jawa Barat. Eka Nugraha adalah seorang pengusaha di bidang infrastruktur dan jasa telekomunikasi yang memiliki visi besar. Di era ledakan kebutuhan data dan jaringan nirkabel, ia bergerak agresif merebut pangsa pasar.',
            'Seperti jamaknya pelaku usaha korporasi, ia meyakini doktrin bahwa utang perbankan adalah bahan bakar wajib pertumbuhan. Semakin besar plafon kredit yang dicairkan, semakin cepat ia bisa membuka cabang, menumpuk persediaan material jaringan, dan memenangkan tender proyek bernilai puluhan miliar.',
            'Namun di balik deretan kantor cabang dan kontrak proyek yang prestisius, sebuah fondasi yang rapuh perlahan terbentuk.'
          ]
        },
        {
          num: 2,
          title: 'Rp 350 Miliar yang Menggunung dan Mengancam',
          paragraphs: [
            'Kecepatan ekspansi Eka ternyata tidak diimbangi oleh kesehatan arus kas operasional (operational cashflow). Piutang proyek menumpuk sementara beban bunga pinjaman bank terus berjalan tanpa kompromi.',
            'Akumulasi utang yang semula diniatkan sebagai instrumen percepatan berbalik menjadi monster finansial seberat Rp 350 miliar. Setiap awal bulan menjadi masa yang mencekam untuk memenuhi kewajiban pokok dan bunga.',
            'Perusahaannya yang megah di mata publik kini terasa rapuh laksana rumah kartu yang siap ambruk hanya dengan satu hembusan angin kencang.'
          ]
        },
        {
          num: 3,
          title: 'Titik Balik di SyaREA World: Ketenangan di Atas Modal',
          paragraphs: [
            'Di tengah kebuntuan likuiditas dan tekanan psikologis yang intens, Eka memutuskan untuk mengambil jeda dan mengevaluasi total arah hidupnya. Ia bergabung dengan Keluarga Besar SyaREA World.',
            'Di wadah pembinaan bisnis syariah tersebut, Eka disadarkan pada prinsip dasar yang sempat ia abaikan: "Modal pertama seorang pengusaha hebat bukanlah kucuran dana pinjaman, melainkan ketenangan batin, kepercayaan, dan kepatuhan pada prinsip bebas riba."',
            'Ia mengambil keputusan berani untuk menghentikan seluruh pengajuan utang perbankan baru dan menyusun peta jalan penyelesaian kewajiban berbasis efisiensi internal.'
          ]
        },
        {
          num: 4,
          title: 'Setahun yang Mengubah Segalanya: Pangkas Separuh Utang',
          paragraphs: [
            'Dengan disiplin restrukturisasi yang ketat, Eka membedah setiap pos pengeluaran proyek, melepas aset yang tidak produktif, dan memfokuskan arus kas masuk murni untuk mencicil pokok utang.',
            'Dalam kurun waktu hanya satu tahun yang penuh perjuangan, hasil nyata terlihat: total utang Rp 350 miliar berhasil dipangkas hingga sekitar separuhnya (berkurang sekitar Rp 175 miliar).',
            'Beban yang semula menekan dada kini berkurang drastis, memberikan ruang bernapas yang lega bagi jajaran manajemen dan seluruh karyawan.'
          ]
        },
        {
          num: 5,
          title: 'Pertumbuhan Sehat Tanpa Ketergantungan Bank',
          paragraphs: [
            'Hari ini, perusahaan telekomunikasi milik Eka Nugraha beroperasi dengan paradigma baru: mengutamakan likuiditas nyata dan profitabilitas murni daripada sekadar mengejar angka omzet semu.',
            'Bisnisnya tetap berkembang secara kompetitif di industri telekomunikasi nasional tanpa lagi bergantung pada suntikan pinjaman berbunga dari sektor perbankan.',
            'Kisah Eka Nugraha mengajarkan bahwa kejayaan bisnis sejati tidak dinilai dari seberapa banyak cabang yang dibuka atau seberapa besar tender yang dimenangkan, melainkan dari ketenangan jiwa pemiliknya dan ketahanan arus kas yang mandiri.'
          ]
        }
      ],
      takeaways: [
        'Omzet Besar dan Banyak Cabang Bukan Bukti Bisnis Sehat: Jangan tertipu oleh skala fisik perusahaan jika arus kas operasional tidak mampu menutupi beban utang bulanan.',
        'Ketenangan Jiwa Adalah Aset Finansial Terbesar: Bebas dari teror bunga bank membebaskan energi mental pengusaha untuk merancang strategi jangka panjang yang jernih.',
        'Pangkas Utang Raksasa dengan Disiplin Restrukturisasi Kas: Eka membuktikan utang ratusan miliar bisa berkurang 50% dalam setahun melalui pemangkasan biaya dan fokus likuiditas.',
        'Tumbuh Organik Tanpa Utang Bank Adalah Pilihan Nyata: Bisnis teknologi dan infrastruktur tetap bisa memenangkan pasar melalui kemitraan strategis dan pengelolaan laba ditahan yang disiplin.'
      ]
    },
    {
      id: 'yasasinggih',
      featured: false,
      name: 'Yasa Singgih',
      tagline: 'Dari Kedai Kopi Bangkrut Rp 150 Jt & Utang Rp 1,5 Miliar Men\'s Republic, Bangkit Hingga Masuk Forbes 30 Under 30 Asia & Rebranding Jadi Republic',
      title: 'Dari Utang Rp 1,5 Miliar dan Stres Berat, Kini Masuk Forbes di Usia 20 Tahun',
      subtitle: 'Pendiri Republic (Men\'s Republic), Bekasi / Jakarta — Forbes 30 Under 30 Asia yang Menaklukkan Utang Rp 1,5 Miliar',
      origin: 'Bekasi / Jakarta',
      ageAtRebound: '20-an Thn',
      categories: ['debt', 'bankrupt', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 1,5 M & Forbes 30 Under 30',
      badge: 'Forbes 30 Under 30 Asia — Republic',
      theme: 'indigo',
      accentColor: '#4338CA',
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      stats: {
        debt: 'Rp 1,5 Miliar (Stok Macet & Arus Kas Warung)',
        age: '20 Tahun (Forbes) / 25 Tahun (Lunas)',
        lowest: 'Stres Berat, Berat Badan Turun Drastis, Uang Mati di Gudang & Tagihan Menumpuk',
        action: 'Pembenahan Manajemen Arus Kas + Rebranding Republic + Disiplin Finansial',
        result: 'Lunas Total Awal 2020, Masuk Forbes 30 Under 30 Asia, Visi LVMH Indonesia'
      },
      timeline: [
        { year: 'Usia 15–18 Tahun', text: 'Jualan kaos Tanah Abang & lampu hias online. Buka kedai kopi "Ini Teh Kopi" saat SMA lalu bangkrut rugi Rp 150 juta.' },
        { year: '2014 — Men\'s Republic', text: 'Melanjutkan brand pakaian dalam pria ayahnya dengan modal barang konsinyasi Tanah Abang, berkembang ke fashion pria.' },
        { year: '2016 — Forbes 30 Under 30', text: 'Masuk daftar Forbes 30 Under 30 Asia kategori Retail & E-commerce di usia 20 tahun saat omzet menembus miliaran.' },
        { year: '2017–2018 — Jeratan Utang', text: 'Manajemen kas buruk ala warung dan marketing keliru membuat stok menumpuk. Terlilit utang Rp 1,5 miliar & stres berat hingga berat badan turun.' },
        { year: '2020 — Lunas & Rebranding', text: 'Awal 2020 seluruh utang Rp 1,5 M lunas. Rebranding menjadi "Republic" dengan visi menjadi LVMH versi Indonesia.' }
      ],
      quote: 'Never too young to become a Billionaire. Bisnis beromzet miliaran akan hancur jika dikelola dengan manajemen kas ala warung. Kuncinya disiplin dan belajar dari kegagalan.',
      quoteAuthor: 'Yasa Singgih, pendiri Republic (Men\'s Republic)',
      chapters: [
        {
          num: 1,
          title: 'Anak Sepatu yang Tumbuh di Antara Kulit dan Sol',
          paragraphs: [
            'Bekasi, 1995. Seorang anak laki-laki lahir di tengah keluarga bersahaja. Namanya Yasa Paramita Singgih. Ayahnya adalah seorang pekerja keras yang mendedikasikan 25 tahun hidupnya di industri persepatuan — bergulat dengan aroma kulit samak, sol karet, dan deru mesin jahit sepatu.',
            '"Gue hidup, makan, dan sekolah sama kakak-kakak gue karena sepatu," kenang Yasa. Namun saat ayahnya mengalami serangan jantung dan membutuhkan operasi pasang ring berbiaya besar, sang ayah memilih menunda tindakan medis demi mengutamakan biaya sekolah anak-anaknya.',
            'Pengorbanan itu menancap dalam di sanubari Yasa remaja: ia bertekad mandiri secara finansial secepat mungkin agar tidak lagi menjadi beban orang tua.'
          ]
        },
        {
          num: 2,
          title: 'Jatuh Bangun Sejak SMA: Dari Kaos ke Rugi Kopi Rp 150 Juta',
          paragraphs: [
            'Naluri bisnisnya menyala sejak belia. Di usia 15 tahun ia mulai berjualan lampu hias online, lalu mengambil kaos di Pasar Tanah Abang untuk dijual kembali lewat internet.',
            'Namun batu sandungan pertama datang saat kelas 3 SMA. Ia mendirikan kedai kopi "Ini Teh Kopi" di Kebon Jeruk dan Mall Ambassador. Usaha itu hanya bertahan 10 bulan dan gulung tikar dengan kerugian Rp 150 juta.',
            '"Bagi anak kelas 3 SMA saat itu, Rp 150 juta adalah angka yang luar biasa besar dan menghancurkan rasa percaya diri," ucapnya. Namun alih-alih trauma, ia memetik pelajaran berharga tentang pentingnya fokus dan manajemen biaya operasional.'
          ]
        },
        {
          num: 3,
          title: 'Men\'s Republic dan Pengakuan Forbes 30 Under 30 Asia',
          paragraphs: [
            'Tahun 2014, di usia 19 tahun, Yasa membangkitkan kembali brand rintisan ayahnya: Men\'s Republic. Bermodalkan sistem konsinyasi dengan perajin sepatu lokal, ia memposisikan brand-nya sebagai solusi gaya hidup pria modern dengan harga terjangkau.',
            'Inovasi produk dari sepatu kulit kasual, jaket, hingga perlengkapan pria meledak dahsyat di pasar online dan diekspor ke berbagai negara. Omzetnya melesat ke angka miliaran rupiah.',
            'Puncaknya pada tahun 2016, di usia baru menginjak 20 tahun, Yasa Singgih dinobatkan dalam daftar prestisius Forbes 30 Under 30 Asia kategori Retail & E-commerce, disejajarkan dengan para inovator muda terbaik di benua Asia.'
          ]
        },
        {
          num: 4,
          title: 'Rp 1,5 Miliar yang Menghantui dan Manajemen Kas "Warung"',
          paragraphs: [
            'Namun gemerlap penghargaan menutupi borok tata kelola di balik layar. Pertumbuhan omzet yang terlalu cepat tidak diimbangi manajemen perputaran persediaan (*inventory turnover*) yang sehat.',
            'Uang perusahaan mati di tumpukan stok gudang yang tidak bergerak, sementara kewajiban kepada supplier dan vendor menumpuk hingga Rp 1,5 miliar. "Pernah omzet miliaran tapi ngelolanya seperti warung. Yang penting ada omzet dan bisa bayar gaji, tanpa kontrol arus kas," aku Yasa.',
            'Tekanan likuiditas itu membuatnya stres berat hingga berat badannya merosot drastis dan ia mengalami *mental block* yang melumpuhkan produktivitasnya.'
          ]
        },
        {
          num: 5,
          title: 'Bangkit, Lunas 2020, dan Visi Besar Menjadi LVMH Indonesia',
          paragraphs: [
            'Didukung oleh keluarga dan tekad untuk bertanggung jawab penuh, Yasa merombak total struktur keuangannya sepanjang 2018–2019. Ia melikuidasi dead-stock, memangkas overhead, dan menerapkan kontrol arus kas profesional.',
            'Pada awal tahun 2020, kabar gembira itu tiba: seluruh utang Rp 1,5 miliar dinyatakan lunas tuntas. Pada November 2020, ia mengambil langkah berani dengan merebranding Men\'s Republic menjadi "Republic".',
            'Visinya kini melesat lebih jauh: menjadikan Republic sebagai konglomerasi multi-brand (house of brands) seperti LVMH versi Indonesia yang menaungi dan membesarkan berbagai brand lokal ke panggung global. Yasa membuktikan bahwa usia muda bukanlah batasan untuk mencetak rekor, dan kejatuhan hanyalah ruang kelas untuk menjadi pemimpin yang lebih matang.'
          ]
        }
      ],
      takeaways: [
        'Omzet Miliaran Hancur Tanpa Manajemen Kas & Inventory yang Benar: Uang yang terkunci di tumpukan stok mati (*dead stock*) sama bahayanya dengan kerugian langsung.',
        'Jangan Kelola Bisnis Skala Besar dengan Mindset "Warung": Pisahkan kas, pantau perputaran piutang/utang secara ketat, dan jangan hanya fokus pada angka penjualan semata.',
        'Forbes Bukan Jaminan Kebal Krisis Finansial: Prestasi dan popularitas publik harus dibarengi disiplin operasional di dapur bisnis sehari-hari.',
        'Rebranding dan Evolusi Visi (House of Brands): Dari sekadar jualan produk pakaian dalam, berevolusi menjadi ekosistem brand lokal berkelas global.'
      ]
    },
    {
      id: 'bobsadino',
      featured: false,
      name: 'Bambang Mustari Sadino (Bob Sadino)',
      tagline: 'Dari Warisan Habis, Rental Mobil Hancur Kecelakaan, Kuli Bangunan Rp 100/Hari & Depresi Berat — Bangkit Jadi Pelopor Ayam Negeri & Pendiri Kem Chicks',
      title: 'Dari Kuli Bangunan Berupah Rp 100, Kini Raja Agrobisnis Legendaris',
      subtitle: 'Pendiri Kem Chicks & KemFood, Kemang — Pelopor Agrobisnis Modern yang Bangkit dari Nol & Kuli Bangunan',
      origin: 'Tanjung Karang, Lampung / Kemang, Jakarta',
      ageAtRebound: '37 Thn (Tahun 1970)',
      categories: ['bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Kuli Rp 100/Hari & Kem Chicks',
      badge: 'Pelopor Agrobisnis — Kem Chicks & KemFood',
      theme: 'amber',
      accentColor: '#B45309',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Bangkrut Total & Mobil Hancur Tabrakan',
        age: '37 Tahun (1970)',
        lowest: 'Kuli Bangunan Upah Rp 100/Hari, Menolak Bantuan Keluarga, Depresi Berat',
        action: 'Ternak 50 Ekor Ayam Negeri dari Belanda + Jual Telur Door-to-Door Kemang',
        result: 'Supermarket Kem Chicks Kemang, Pabrik Daging KemFood, Legenda Agrobisnis'
      },
      timeline: [
        { year: '1933–1952 — Masa Muda', text: 'Lahir di Lampung dari keluarga berkecukupan. Usia 19 tahun mewarisi seluruh harta orang tua dan berkeliling dunia.' },
        { year: '1958–1967 — Hidup di Belanda', text: 'Tinggal 9 tahun di Belanda, bekerja di Djakarta Lloyd dan menikah dengan Soelami Soejoed.' },
        { year: '1967 — Kembali ke RI & Bangkrut', text: 'Membeli tanah di Kemang dari 1 Mercedes. Membuka rental mobil dengan 1 Mercedes lain, namun mobil hancur kecelakaan parah.' },
        { year: 'Titik Terendah — Kuli Rp 100', text: 'Menolak bantuan keluarga. Menjadi kuli bangunan bergaji Rp 100/hari dan mengalami depresi berat.' },
        { year: '1970 — Pelopor Ayam Negeri', text: 'Teman menyarankan ternak ayam untuk obati depresi. Menulis surat ke Belanda meminta bibit ayam negeri & majalah ternak.' },
        { year: 'Pintu Bule Kemang & Kem Chicks', text: 'Pintu rumah ekspatriat Kemang terbuka; pelanggan borong telur. Mendirikan Supermarket Kem Chicks & pabrik KemFood.' }
      ],
      quote: 'Setinggi apa pun pangkat yang Anda miliki, Anda tetaplah seorang pegawai. Sekecil apa pun usaha yang Anda punya, Anda adalah bosnya.',
      quoteAuthor: 'Bambang Mustari Sadino (Om Bob Sadino), pendiri Kem Chicks & KemFood',
      chapters: [
        {
          num: 1,
          title: 'Anak Bungsu yang Mewarisi Segalanya dan Keliling Dunia',
          paragraphs: [
            'Tanjung Karang, Lampung, 1933. Seorang anak laki-laki lahir dari keluarga yang sangat berkecukupan di era Hindia Belanda. Namanya Bambang Mustari Sadino, anak bungsu dari lima bersaudara. Ayahnya adalah seorang guru dan kepala sekolah terpandang.',
            'Ketika kedua orang tuanya wafat saat Bob baru berusia 19 tahun, ia mewarisi seluruh harta kekayaan keluarga. Dengan kebebasan finansial di tangan muda, Bob memilih meninggalkan tanah air untuk berpetualang mengelilingi dunia.',
            'Ia singgah dan menetap di Belanda selama sembilan tahun, bekerja di perusahaan pelayaran BUMN Djakarta Lloyd, serta mempersunting Soelami Soejoed — wanita tangguh yang setia mendampingi seluruh babak hidupnya.'
          ]
        },
        {
          num: 2,
          title: 'Pulang Membawa Dua Mercedes dan Kehancuran Tak Terduga',
          paragraphs: [
            'Tahun 1967, Bob memutuskan pulang ke tanah air membawa dua unit mobil Mercedes-Benz antik buatan tahun 1960-an. Satu mobil ia lego untuk membeli sebidang tanah perkebunan di kawasan Kemang, Jakarta Selatan yang kala itu masih berupa rawa-rawa sepi.',
            'Dengan mobil Mercedes yang tersisa, Bob bertekad mandiri dan merintis jasa sewa mobil mewah di mana ia sendiri yang bertindak sebagai sopir pribadinya.',
            'Namun petaka menghantam tanpa ampun: saat mengemudi, Bob mengalami kecelakaan lalu lintas hebat. Mobil Mercedes satu-satunya itu hancur ringsek tak berbentuk dan tidak sanggup ia perbaiki. Bisnis transportasinya seketika gulung tikar total.'
          ]
        },
        {
          num: 3,
          title: 'Kuli Bangunan Upah Rp 100 dan Perang Melawan Depresi',
          paragraphs: [
            'Kehilangan mata pencaharian membuat kondisi ekonominya terjun bebas ke titik nol. Tabungan habis dan biaya hidup keluarga mendesak. Kendati saudara-saudaranya yang mapan menawarkan uluran tangan, harga diri Bob menolaknya.',
            'Ia memilih banting setir menjadi kuli bangunan kasar dengan bayaran upah harian hanya Rp 100 per hari. Di bawah terik matahari Jakarta, tangan yang dulu memegang kemudi mobil mewah kini mengangkut adukan semen dan memecah batu kali.',
            'Beban hidup yang begitu kontras memicu depresi mental yang sangat berat. Hari-harinya dipenuhi kegelapan batin, bertanya mengapa roda nasib bisa mencampakkannya sedemikian dalam.'
          ]
        },
        {
          num: 4,
          title: 'Sepucuk Surat ke Belanda dan 50 Ekor Ayam Negeri',
          paragraphs: [
            'Melihat Bob yang terpuruk dalam depresi, seorang sahabat menyarankannya memelihara ayam untuk terapi jiwa dan mengalihkan pikiran dari keputusasaan.',
            'Insting jeli Bob menyala: ia teringat bahwa ayam dan telur di Eropa berukuran jauh lebih besar dan berdaging tebal dibanding ayam kampung lokal Indonesia. Ia segera mengirimkan surat ke koleganya di Belanda, meminta dikirimkan 50 ekor bibit ayam negeri (broiler/leghorn) beserta majalah panduan beternak modern.',
            'Tahun 1970, Bob Sadino resmi menjadi orang pertama yang memperkenalkan ayam negeri beserta telurnya ke nusantara. Namun masyarakat lokal awalnya menolak membeli karena menganggap telur berkulit cokelat keemasan itu aneh dan tidak alami.'
          ]
        },
        {
          num: 5,
          title: 'Ketukan Pintu Bule Kemang dan Lahirnya Kem Chicks',
          paragraphs: [
            'Pantang menyerah, Bob berjalan kaki menjajakan telur dari pintu ke pintu di kawasan pemukiman Kemang. Titik balik bersejarah tiba ketika seorang ekspatriat (bule) asal Amerika membuka pintu dan mencicipi telur segar berkualitas tinggi milik Bob.',
            'Sang ekspatriat takjub dan berkata: "Mulai besok Anda tidak perlu keliling lagi. Cukup taruh di rumahmu, saya dan teman-teman komunitas ekspatriat yang akan datang membeli langsung ke sana."',
            'Dari langganan para diplomat dan ekspatriat itulah kerajaan agrobisnisnya meledak. Bob memperluas usaha ke sayuran hidroponik, mendirikan supermarket impor legendaris Kem Chicks di Kemang, serta membangun pabrik olahan daging modern PT Kemang Food Industries (KemFood). Dari kuli upah Rp 100 per hari, Bob Sadino mengukir namanya sebagai ikon agrobisnis paling legendaris dalam sejarah Indonesia.'
          ]
        }
      ],
      takeaways: [
        'Harga Diri untuk Bangkit Mandiri Tanpa Mengharapkan Belas Kasihan: Meski berasal dari keluarga berada, Bob menolak subsidi saudara dan memilih bekerja kasar sebagai kuli bangunan demi menjaga martabat kemandiriannya.',
        'Mengubah Terapi Depresi Menjadi Peluang Usaha Pionir: Memelihara ayam yang semula ditujukan untuk menyembuhkan stres mental justru melahirkan industri peternakan ayam negeri modern pertama di Indonesia.',
        'Target Pasar yang Tepat Mengubah Produk yang Ditolak Menjadi Emas: Telur ayam negeri ditolak warga lokal karena belum terbiasa, namun menjadi komoditas bernilai tinggi di tangan komunitas ekspatriat Kemang.',
        'Konsistensi Nilai & Kualitas di Atas Ekspansi Membabi Buta: Filosofi Om Bob yang mempertahankan Kem Chicks eksklusif di Kemang membuktikan bahwa reputasi mutu produk premium lebih abadi daripada sekadar mengejar jumlah gerai.'
      ]
    },
    {
      id: 'jusufhamka',
      featured: false,
      name: 'Mohammad Jusuf Hamka (Babah Alun)',
      tagline: 'Dari Jual Es Mambo, Rugi Ratusan Juta Dolar Dalam 3 Jam Krismon 1998 & 2 Minggu Tak Bisa Makan — Bangkit di Atas Sajadah Jadi Raja Jalan Tol CMNP',
      title: 'Dari Dua Minggu Tak Bisa Makan, Kini Raja Jalan Tol Indonesia',
      subtitle: 'Pemilik PT Citra Marga Nusaphala Persada Tbk (CMNP) — Konglomerat Mualaf & Filantropis Pembangun 1.000 Masjid',
      origin: 'Pasar Baru, Jakarta Pusat',
      ageAtRebound: '41 Thn (Tahun 1998)',
      categories: ['bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Rugi Ratusan Juta Dolar & Tol CMNP',
      badge: 'Raja Jalan Tol — Pemilik PT CMNP Tbk',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rugi Ratusan Juta Dolar AS (> Rp 6 Triliun)',
        age: '41 Tahun (Krisis 1998)',
        lowest: 'Kekayaan Lenyap dalam 3 Jam, 2 Minggu Tak Bisa Makan, Usaha Anjlok Parah',
        action: 'Doa Ikhlas di Atas Sajadah + Dukungan Istri + Bangkit dari Nol Membangun Tol',
        result: 'Pemilik PT CMNP Tbk (Tol Cawang-Priok & Desari), Target Bangun 1.000 Masjid'
      },
      timeline: [
        { year: 'Akhir 1960-an — Penjual Es Mambo', text: 'Anak dosen dan guru di Pasar Baru. Di usia 15 tahun jualan es mambo termos & kacang goreng di Istiqlal demi 120 perak.' },
        { year: '1981 — Mualaf Bimbingan Buya Hamka', text: 'Masuk Islam di usia 24 tahun di bawah bimbingan ulama besar Buya Hamka dan menyandang nama belakang Hamka.' },
        { year: '1998 — Krisis Moneter Menghantam', text: 'Kekayaan ratusan juta dolar AS lenyap dalam 3 jam. Bangkrut total dan sempat 2 minggu tidak bisa makan.' },
        { year: 'Sujud di Atas Sajadah', text: 'Memeluk istri, meminta maaf dan bersujud ikhlas: "Ya Allah, aku ikhlas. Berikan aku kesempatan dan kesehatan, aku akan kembali."' },
        { year: 'Dukungan Sang "Malaikat"', text: 'Sang istri mendampingi setia: "Pa, tidak usah disesali, kita mulai lagi dari awal."' },
        { year: 'Hari Ini — Raja Jalan Tol', text: 'Pemilik PT CMNP Tbk pengelola ruas tol strategis nasional, dermawan sosial, dan membangun Masjid Babah Alun di kolong tol.' }
      ],
      quote: 'Kalau kita menyalahkan orang lain, kita tidak akan berpikir untuk maju. Semua kegagalan adalah kita yang buat. Kesuksesan juga kita yang ciptakan. Saya tidak minta harta saat bangkrut, saya hanya minta kesehatan dan kesempatan.',
      quoteAuthor: 'Mohammad Jusuf Hamka (Babah Alun), bos PT Citra Marga Nusaphala Persada Tbk',
      chapters: [
        {
          num: 1,
          title: 'Anak Pasar Baru yang Berjualan Es Mambo demi 120 Perak',
          paragraphs: [
            'Jakarta, akhir era 1960-an. Seorang anak laki-laki lincah bernama Alun (nama kecil Jusuf Hamka) tumbuh di kawasan Pasar Baru, Jakarta Pusat. Ayahnya seorang dosen dan ibunya guru sekolah, namun uang saku hariannya serba terbatas.',
            'Di usia 15 tahun, Jusuf sudah berkeliling memanggul termos es mambo dan menjajakan kacang tanah goreng di seputaran halaman Masjid Istiqlal. Dari cucuran keringat harian itu, ia mengantongi uang 120 perak.',
            '"Gengsi itu memakan biaya hidup," tegas Jusuf mengenang masa mudanya. "Buat apa malu atau gengsi? Selama kita tidak mencuri dan tidak menipu, apa pun yang halal harus kita kerjakan dengan bangga."',
            'Di sela-sela berdagang, ia melahap buku-buku pengembangan diri dan memupuk impian besar untuk kelak menjadi pengusaha sukses berhati mulia.'
          ]
        },
        {
          num: 2,
          title: 'Menemukan Cahaya Islam dan Bimbingan Buya Hamka',
          paragraphs: [
            'Rasa ketertarikannya pada ajaran Islam bermula saat melihat ketenangan rekan-rekan sebayanya saat menunaikan salat berjamaah.',
            'Pada usia 24 tahun (1981), ia memantapkan hati memeluk Islam di bawah bimbingan langsung ulama kharismatik Indonesia, Prof. Dr. Buya Hamka. Sebagai bentuk kasih sayang dan pengangkatan anak ideologis, nama "Hamka" disematkan di belakang namanya menjadi Mohammad Jusuf Hamka.',
            'Nilai-nilai integritas, tawakal, dan kedermawanan yang diajarkan Buya Hamka menjadi kompas moral dalam setiap langkah bisnis yang ia rintis hingga menjadi pengusaha mapan berskala nasional.'
          ]
        },
        {
          num: 3,
          title: 'Tiga Jam yang Menghancurkan Ratusan Juta Dolar AS',
          paragraphs: [
            'Tahun 1998, badai krisis finansial Asia melanda Indonesia dengan dahsyat. Nilai tukar rupiah rontok, suku bunga melonjak gila-gilaan, dan pasar modal ambruk.',
            'Dalam kurun waktu hanya tiga jam, seluruh portofolio bisnis dan kekayaan yang ia bangun berpuluh tahun hancur lebur. Jusuf menelan kerugian fantastis hingga ratusan juta dolar AS (setara triliunan rupiah).',
            'Kejatuhan itu begitu telak hingga ia jatuh miskin mendadak. Usahanya macet total dan ia bahkan sempat dua minggu tidak bisa makan karena tak memegang uang sepeser pun. Dunia yang semula gemerlap mendadak gulita.'
          ]
        },
        {
          num: 4,
          title: 'Air Mata di Atas Sajadah dan Doa Seorang Hamba yang Ikhlas',
          paragraphs: [
            'Di tengah jurang keputusasaan, Jusuf tidak mencari kambing hitam. Ia memeluk istrinya dengan linangan air mata, meminta maaf atas musibah yang menimpa keluarga mereka.',
            'Ia lalu membentangkan sajadah dan bersujud panjang dalam kepasrahan mutlak: "Ya Allah, aku terima musibah ini. Harta yang Engkau titipkan, Engkau ambil kembali, aku ikhlas lillahi ta\'ala. Namun tolong ya Allah, berikan aku kesempatan, kesehatan, dan akal sehat yang jernih. Insya Allah, aku akan kembali berdiri."',
            'Jusuf tidak meminta uang jatuh dari langit; ia hanya memohon kesehatan fisik dan ketajaman pikiran untuk kembali bertarung dari titik nol.'
          ]
        },
        {
          num: 5,
          title: 'Ketegaran Sang Istri dan Kebangkitan Sang Raja Jalan Tol',
          paragraphs: [
            'Di masa terkelam itu, sang istri bertindak laksana malaikat penopang. Tanpa sepatah kata keluhan, istrinya menguatkan: "Pa, sudah tidak usah disesali. Apa yang hilang biarlah pergi, kita mulai lagi semuanya bersama-sama."',
            'Berbekal doa, restu keluarga, dan reputasi integritasnya yang tak ternoda, Jusuf bangkit merintis kembali peluang di sektor infrastruktur transportasi.',
            'Kerja keras dan tangan dinginnya mengantarkannya memimpin PT Citra Marga Nusaphala Persada Tbk (CMNP), menguasai pengelolaan jalan tol vital seperti Tol Cawang–Tanjung Priok dan Depok–Antasari (Desari). Hari ini, Babah Alun dikenal bukan hanya sebagai Raja Jalan Tol, melainkan filantropis sejati yang mendirikan deretan Masjid Babah Alun berarsitektur Tionghoa-Islam di berbagai pelosok ibu kota.'
          ]
        }
      ],
      takeaways: [
        'Ikhlas Melepaskan Kehilangan Finansial Raksasa: Menerima musibah secara lapang dada menghentikan kepanikan batin dan membuka ruang akal sehat untuk bangkit.',
        'Minta Kesehatan & Kesempatan, Bukan Keajaiban Instan: Jusuf membuktikan bahwa modal pemulihan terhebat adalah tubuh yang sehat dan pikiran yang tajam untuk bekerja kembali.',
        'Jangan Menyalahkan Siapapun Atas Kegagalan: Sikap ksatria mengambil tanggung jawab penuh adalah pintu utama menuju pertumbuhan karakter dan kesuksesan sejati.',
        'Dukungan Pasangan Adalah Pilar Kekuatan Krisis: Ketenangan dan ketegaran keluarga di masa sulit melipatgandakan daya lenting (*resilience*) untuk memulai dari nol.'
      ]
    },
    {
      id: 'ciputra',
      featured: false,
      name: 'Ir. Ciputra (Tjie Tjin Hoan)',
      tagline: 'Dari Anak Melarat Sulawesi, Utang Membengkak Rp 1 Triliun Krismon 1998 & 3 Anak Usaha Ditutup — Bangkit Restrukturisasi Hingga Aset Rp 84,5 Triliun',
      title: 'Dari Utang Rp 1 Triliun dan Tangis di Meja Makan, Kini Kerajaan Rp 84 Triliun',
      subtitle: 'Pendiri Ciputra Group, Jaya Group & Metropolitan Group — Maestro Properti Indonesia Berprinsip IPE (Integritas, Profesionalisme, Entrepreneurship)',
      origin: 'Parigi, Sulawesi Tengah / Jakarta',
      ageAtRebound: '67 Thn (Tahun 1998)',
      categories: ['debt', 'bankrupt', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 1 Triliun & Ciputra Group',
      badge: 'Maestro Properti — Aset Rp 84,5 Triliun',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Rp 1 Triliun (US$ 100 Juta Akibat Kurs Krismon 1998)',
        age: '67 Tahun (Krisis 1998) / Lunas 2004 (73 Thn)',
        lowest: 'Utang Melonjak 4x Lipat, Bank & Asuransi Ditutup, Menangis di Kamar Mandi',
        action: 'Prinsip IPE (Integritas, Profesional, Entrepreneur) + Negosiasi Restrukturisasi Perbankan',
        result: 'Restrukturisasi Tuntas 2004, Kerajaan Properti Aset Rp 84,5 Triliun'
      },
      timeline: [
        { year: '1931–1950-an — Masa Sulit', text: 'Lahir di Sulawesi Tengah. Masa kecil melarat, ayah wafat di penjara kolonial, berjuang keras menempuh pendidikan arsitektur ITB.' },
        { year: '1960–1980-an — Membangun Jaya & Metropolitan', text: 'Mendirikan Jaya Group (Ancol), Metropolitan Group (Pondok Indah & BSD), dan Ciputra Group.' },
        { year: '1997–1998 — Utang US$ 100 Juta', text: 'Krisis moneter menghantam; utang valas melonjak dari Rp 245 miliar menjadi Rp 1 triliun. Pendapatan rupiah tak mampu menutupi utang dolar.' },
        { year: 'Titik Terendah — Penutupan 3 Perusahaan', text: 'Bank Ciputra & Asuransi Ciputra Allstate ditutup. Ciputra menangis di meja makan dan kamar mandi bersama karyawan.' },
        { year: '1998–2004 — Restrukturisasi Berprinsip IPE', text: 'Berpegang pada "Hutang Wajib Dibayar". Negosiasi terbuka dan transparan ke bank hingga tercapai kesepakatan restrukturisasi tuntas.' },
        { year: 'Puncak Kejayaan — Rp 84,5 Triliun', text: 'Ciputra Group bangkit membangun kota mandiri se-Indonesia & Asia Tenggara, mencapai aset Rp 84,5 triliun di akhir hayatnya.' }
      ],
      quote: 'Yang utama begini, perusahaan itu harus punya prinsip: Integritas (kejujuran), Profesionalisme (keahlian), dan Entrepreneurship (inovasi). Hutang itu bukan untuk dihindari, melainkan harus dihadapi dan dibayar.',
      quoteAuthor: 'Ir. Ciputra, pendiri Ciputra Group',
      chapters: [
        {
          num: 1,
          title: 'Anak Melarat dari Sulawesi yang Mengubah Gurun Jadi Kota',
          paragraphs: [
            'Parigi, Sulawesi Tengah, 1931. Seorang anak laki-laki bernama Tjie Tjin Hoan (kelak dikenal sebagai Ir. Ciputra) lahir dalam kemiskinan yang mencekik. Masa kecilnya penuh luka batin: ayahnya ditangkap dan meninggal di dalam penjara pada era pendudukan, memaksa keluarganya bertahan hidup serba kekurangan hingga kesulitan memperoleh air minum bersih.',
            'Namun penderitaan itu menjadi kawah candradimuka yang menempanya. Ciputra muda bertekad mengubah nasib melalui pendidikan hingga berhasil lulus dari Jurusan Arsitektur Institut Teknologi Bandung (ITB).',
            'Dengan visi kewirausahaan yang tajam, ia memelopori pembangunan proyek-proyek mahakarya Indonesia: Taman Impian Jaya Ancol bersama Jaya Group, kawasan elit Pondok Indah dan kota mandiri Bumi Serpong Damai (BSD) bersama Metropolitan Group, hingga mendirikan imperium bisnis properti Ciputra Group.'
          ]
        },
        {
          num: 2,
          title: '1998: Badai Kurs Dolar dan Utang Rp 1 Triliun',
          paragraphs: [
            'Keberhasilan puluhan tahun mendadak terancam musnah ketika badai krisis moneter Asia 1997–1998 menghantam perekonomian Indonesia tanpa ampun.',
            'Ciputra Group memiliki pinjaman luar negeri senilai US$ 100 juta yang semula diambil dengan perhitungan kurs wajar sekitar Rp 2.400 per dolar AS (senilai Rp 245 miliar). Namun saat nilai tukar rupiah terjun bebas menembus Rp 15.000 hingga Rp 16.000 per dolar, beban utang tersebut membengkak hampir lima kali lipat menjadi lebih dari Rp 1 triliun dalam hitungan bulan.',
            'Seluruh arus kas proyek properti yang masuk dalam mata uang rupiah lumpuh seketika dan tak sanggup lagi melayani cicilan utang berdenominasi valas.'
          ]
        },
        {
          num: 3,
          title: 'Air Mata di Meja Makan dan Penutupan Tiga Perusahaan',
          paragraphs: [
            'Pukulan terberat datang dari sektor keuangan grup usahanya. Tiga institusi andalannya — Bank Ciputra, Asuransi Jiwa Ciputra Allstate, dan sebagian lini aset grup — terpaksa dilikuidasi dan ditutup oleh pemerintah.',
            'Ribuan karyawan kehilangan mata pencaharian dan menangis histeris. Di balik ketenangannya memimpin, pria tangguh yang telah berusia 67 tahun itu luluh lantak batinnya. Air matanya tumpah di atas meja makan dan di sudut kamar mandi rumahnya saat memikirkan nasib ribuan keluarga yang menggantungkan hidup padanya.',
            '"Ini adalah keterpurukan terdalam dalam hidup saya," kenang Ciputra. Namun di tengah keputusasaan itu, ia menolak untuk lari atau mencari perlindungan hukum pailit.'
          ]
        },
        {
          num: 4,
          title: 'Tiga Pilar Penyelamat: Integritas, Profesionalisme, dan Entrepreneurship',
          paragraphs: [
            'Ciputra mengumpulkan seluruh jajaran pimpinan dan menetapkan mandat moral yang tak bisa ditawar: "Hutang itu harus dibayar. Kita tidak boleh lari."',
            'Ia menghadapi konsorsium perbankan kreditur dengan keterbukaan total (*Integritas*), membuktikan bahwa seluruh dana pinjaman murni tertanam pada aset fisik perusahaan tanpa disalahgunakan untuk kepentingan pribadi sepeser pun.',
            'Didukung kemampuan teknis yang mumpuni (*Profesionalisme*), ia menyusun proposal restrukturisasi bertahap. Bersamaan dengan itu, ia menyalakan semangat *Entrepreneurship* dengan merancang skema pembayaran inovatif, melepas aset non-inti secara terhormat, dan memberi kebebasan penuh bagi karyawan untuk bertahan atau berkarier di tempat lain.'
          ]
        },
        {
          num: 5,
          title: 'Restrukturisasi 2004 dan Warisan Abadi Rp 84,5 Triliun',
          paragraphs: [
            'Proses perundingan berlangsung alot dan membutuhkan kesabaran luar biasa selama bertahun-tahun. Ketulusan integritas Ciputra membuahkan kepercayaan: pihak perbankan menyetujui pemotongan bunga dan penjadwalan ulang tenor cicilan yang akhirnya tuntas terselesaikan sepenuhnya pada tahun 2004.',
            'Dari abu krisis moneter 1998, Ciputra Group bangkit melipatgandakan skalanya, berekspansi membangun puluhan proyek kota mandiri terintegrasi di seluruh pelosok Nusantara hingga ke Vietnam dan Kamboja.',
            'Saat Ir. Ciputra berpulang pada 27 November 2019 di usia 88 tahun, Ciputra Group telah menjelma menjadi raksasa properti dengan total aset menembus Rp 84,5 triliun — membuktikan bahwa integritas moral saat krisis adalah fondasi terkuat bagi kejayaan abadi.'
          ]
        }
      ],
      takeaways: [
        'Prinsip Integritas Tanpa Kompromi di Hadapan Kreditur: Keterbukaan membuktikan dana utang murni untuk aset perusahaan menumbuhkan empati dan kepercayaan perbankan dalam restrukturisasi.',
        'Mitigasi Risiko Utang Mata Uang Asing (*Currency Mismatch*): Menghasilkan pendapatan dalam rupiah namun berutang dalam valuta asing adalah risiko fatal saat terjadi krisis kurs makro.',
        'Hadapi Masalah Satu Per Satu dengan Kesabaran Panjang: Restrukturisasi utang triliunan rupiah tidak selesai dalam semalam, melainkan butuh komitmen negosiasi bertahun-tahun (1998–2004).',
        'Tiga Pilar IPE (Integritas, Profesionalisme, Entrepreneurship): Integritas menjaga kepercayaan, profesionalisme menjamin kualitas solusi, dan entrepreneurship melahirkan inovasi penyelamat krisis.'
      ]
    },
    {
      id: 'johnnyandrean',
      featured: false,
      name: 'Johan Sunjoto (Johnny Andrean)',
      tagline: 'Dari Anak Penjual Soto, 75 Cabang Salon Runtuh Tersisa 13 di Krismon 1998 — Bangkit Pivot ke Produk Rambut Jerman Jadi Raja Kecantikan Nasional',
      title: 'Dari 75 Cabang Tersisa 13, Kini Raja Produk Perawatan Rambut Indonesia',
      subtitle: 'Pendiri Johnny Andrean Group — Pelopor Transformasi Salon Jasa Menjadi Kerajaan Produk Konsumen & Sekolah Kecantikan',
      origin: 'Semarang, Jawa Tengah / Jakarta',
      ageAtRebound: '39 Thn (Tahun 1998)',
      categories: ['bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Krismon 1998 & 62 Cabang Tutup',
      badge: 'Raja Produk Rambut — Johnny Andrean Group',
      theme: 'purple',
      accentColor: '#7C3AED',
      bgLight: '#F5F3FF',
      borderLight: '#DDD6FE',
      stats: {
        debt: 'Biaya Operasional 75 Cabang & Beban Krismon 1998',
        age: '39 Tahun (Krisis 1998)',
        lowest: 'Dari 75 Cabang Tersisa 13 (62 Cabang Tutup), Ratusan Karyawan Dirumahkan, Nyaris Menyerah',
        action: 'Pivot Model Bisnis ke Lisensi Brand + Riset Formula Rambut di Jerman + Fokus Ritel Massal',
        result: 'Produk Rambut Terlaris Nasional, Sekolah Kecantikan, Ekosistem Johnny Andrean Group'
      },
      timeline: [
        { year: '1959–1980 — Anak Penjual Soto', text: 'Anak ke-8 dari 12 bersaudara di Semarang. Membantu pikul panci soto keliling ayahnya sejak belia.' },
        { year: '1983 — Salon Pertama Cikini', text: 'Merantau ke Jakarta menjadi asisten salon, lalu mendirikan Johnny Andrean Salon pertama di Cikini di usia 24 tahun.' },
        { year: '1990-an — Ekspansi 75 Cabang', text: 'Membuka cabang salon agresif hingga 75 gerai di seluruh Indonesia dengan biaya sewa gedung dan gaji masif.' },
        { year: '1998 — Pukulan Telak Krismon', text: 'Daya beli runtuh; biaya overhead membengkak. Dari 75 cabang runtuh hanya tersisa 13 gerai, 62 cabang tutup dan nyaris menyerah.' },
        { year: 'Transformasi & Riset Jerman', text: 'Beralih ke model lisensi brand dan terbang ke Jerman meriset formula produk shampo & hair treatment berkualitas tinggi.' },
        { year: 'Hari Ini — Raja Produk Rambut', text: 'Memimpin kerajaan produk perawatan rambut ritel terlaris, jaringan sekolah tata rias, dan distribusi modern se-Indonesia.' }
      ],
      quote: 'Saya harus berani melakukan perubahan. Kalau tetap bertahan di zona nyaman model bisnis lama, saya akan mati perlahan. Kadang kita harus rela melepaskan apa yang kita bangun untuk menyelamatkan apa yang benar-benar penting.',
      quoteAuthor: 'Johan Sunjoto (Johnny Andrean), pendiri Johnny Andrean Group',
      chapters: [
        {
          num: 1,
          title: 'Anak Penjual Soto yang Bermimpi di Ibu Kota',
          paragraphs: [
            'Semarang, 1959. Johnny Andrean (Johan Sunjoto) lahir sebagai anak ke-8 dari 12 bersaudara dalam keluarga yang serba kekurangan. Ayahnya adalah seorang pedagang soto keliling sederhana.',
            'Sejak masa kanak-kanak, Johnny kecil sudah terbiasa bangun dini hari membantu memikul panci kuah panas, mengiris sayuran, dan menjajakan semangkuk soto di pinggir jalan demi upah recehan.',
            '"Saya sejak kecil sudah terbiasa hidup susah dan bekerja kasar. Mental itulah yang membuat saya tidak pernah gentar menghadapi kerasnya perjuangan," kenangnya. Lulus dari bangku SMA, ia memutuskan merantau ke Jakarta dan bekerja sebagai penata rambut junior di sebuah salon ibu kota.',
            'Pada tahun 1983, di usianya yang baru menginjak 24 tahun, ia memberanikan diri membuka salon mandiri pertamanya di kawasan Cikini, Jakarta Pusat dengan nama Johnny Andrean Salon.'
          ]
        },
        {
          num: 2,
          title: 'Ekspansi Agresif 75 Cabang dan Jebakan Biaya Operasional',
          paragraphs: [
            'Berkat keterampilan gunting rambutnya yang modern, teliti, dan ramah pelanggan, nama Johnny Andrean melambung cepat menjadi tren gaya hidup masyarakat urban.',
            'Ekspansi dilakukan secara masif dan agresif sepanjang era 1990-an. Cabang demi cabang dibuka di pusat-pusat perbelanjaan bergengsi hingga mencapai 75 gerai salon di berbagai kota besar di Indonesia.',
            'Namun di balik tampilan kejayaan itu, struktur keuangan menanggung beban operasional yang luar biasa besar: biaya sewa tempat di mal-mal utama yang mahal, gaji ribuan staf penata rambut, dan biaya utilitas bulanan yang terus menggelembung.'
          ]
        },
        {
          num: 3,
          title: '1998: Badai Krisis dan Runtuhnya 62 Cabang Salon',
          paragraphs: [
            'Tahun 1998, badai krisis moneter menghantam perekonomian Indonesia tanpa ampun. Nilai tukar rupiah terpuruk, daya beli masyarakat anjlok seketika, dan kunjungan salon mewah merosot drastis.',
            'Arus kas bisnisnya lumpuh seketika sementara tagihan sewa dan beban tetap tak kunjung berhenti menagih. Dalam waktu singkat, 62 cabang salon terpaksa ditutup satu per satu dan ratusan karyawan harus dirumahkan.',
            '"Dari 75 cabang yang saya bangun berdarah-darah, hanya tersisa 13 cabang. Saya hampir frustasi, terpuruk dalam tekanan batin, dan sempat ingin menyerah kalah," kenang Johnny dengan mata berkaca-kaca.'
          ]
        },
        {
          num: 4,
          title: 'Langkah Berani: Lisensi Kemitraan dan Formulasi Kimia Jerman',
          paragraphs: [
            'Di titik nadir keterpurukan itu, Johnny menyadari bahwa bertahan dengan model bisnis lama berbasis aset fisik padat karya (*high fixed-cost service*) akan membunuhnya perlahan.',
            'Ia melakukan revolusi strategi dalam dua pilar utama: pertama, mengubah kepemilikan salon menjadi model kemitraan dan lisensi merek "Johnny Andrean", sehingga risiko dan beban operasional tempat ditanggung bersama mitra.',
            'Kedua, ia mengalihkan fokus inti bisnis ke produk konsumen massal (*consumer FMCG*): memproduksi shampo, kondisioner, dan vitamin perawatan rambut. Ia terbang bolak-balik ke Jerman untuk bermitra dengan laboratorium kimia terkemuka demi meracik formula perawatan rambut terbaik yang disesuaikan dengan iklim tropis Indonesia.'
          ]
        },
        {
          num: 5,
          title: 'Kebangkitan Raja Produk Perawatan Rambut Nusantara',
          paragraphs: [
            'Strategi pivot tersebut membuahkan hasil luar biasa. Produk perawatan rambut Johnny Andrean meledak di pasar swalayan, minimarket, dan apotek di seluruh pelosok Nusantara karena menawarkan kualitas salon profesional dengan harga yang sangat terjangkau bagi masyarakat luas.',
            'Didukung jaringan sekolah kecantikan (Johnny Andrean Beauty School) yang mencetak ribuan penata rambut handal setiap tahunnya, ekosistem bisnisnya bertransformasi menjadi konglomerasi kecantikan modern yang kebal krisis.',
            'Kisah Johnny Andrean membuktikan bahwa kejatuhan bukan untuk disesali; terkadang seorang pengusaha harus rela melepaskan ranting demi menumbuhkan akar baru yang jauh lebih kokoh dan menjulang tinggi.'
          ]
        }
      ],
      takeaways: [
        'Keberanian Pivot dari Model Bisnis Berbiaya Tetap Tinggi: Mengubah ketergantungan dari layanan salon padat operasional menjadi produk ritel dengan margin dan perputaran skala massal.',
        'Model Lisensi dan Kemitraan Memangkas Risiko Krisis: Berbagi risiko operasional gerai bersama mitra membuat merek tetap berekspansi tanpa menanggung seluruh beban aset sendiri.',
        'Investasi Mutu Produk Pada Standar Global: Riset formula ke pabrik kimia Jerman memastikan produk lokal memiliki daya saing kualitas setara merek internasional.',
        'Rela Melepaskan Aset Lama Demi Menyelamatkan Kelangsungan Usaha: Menutup 62 cabang yang tidak efisien adalah keputusan pahit yang menyelamatkan kelangsungan seluruh grup usaha.'
      ]
    },
    {
      id: 'tomywinata',
      featured: false,
      name: 'Tomy Winata (Tjoet Tjwan Ling)',
      tagline: 'Dari Anak Yatim Piatu, Jual Es Loli & Bangkrut 5 Kali di Berbagai Pulau — Bangkit Kemitraan Strategis Jadi Pemilik Kawasan SCBD & Artha Graha',
      title: 'Dari Anak Yatim Piatu, 5 Kali Bangkrut, Kini Raja Kawasan SCBD',
      subtitle: 'Pendiri Artha Graha Group & Pemilik Kawasan Bisnis SCBD Jakarta — Bangkit 5 Kali dari Titik Nol Menuju Konglomerasi Nasional',
      origin: 'Pontianak, Kalimantan Barat / Jakarta',
      ageAtRebound: '30 Thn (Tahun 1988)',
      categories: ['bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: '5 Kali Bangkrut & Kawasan SCBD',
      badge: 'Pemilik SCBD — Pendiri Artha Graha Group',
      theme: 'emerald',
      accentColor: '#047857',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: '5 Kali Bangkrut Total (Papua, Kalbar, NTT, 2x Jakarta)',
        age: '30 Tahun (1988)',
        lowest: 'Anak Yatim Piatu, Jual Es Loli & Cuci Mobil, Jadi Kuli Kasar Pasca Bangkrut',
        action: 'Mental Baja Pantang Menyerah + Kemitraan Strategis + Revitalisasi Bank Bermasalah',
        result: 'Pemilik Kawasan SCBD Jakarta, Artha Graha Group, Kekayaan > Rp 14 Triliun'
      },
      timeline: [
        { year: '1958–1972 — Masa Kecil Pontianak', text: 'Yatim piatu sejak kecil di keluarga miskin. Bertahan hidup dengan jualan es loli keliling dan mencuci mobil.' },
        { year: '1972 — Proyek Pertama Usia 15', text: 'Dipercaya membangun kantor Koramil di Singkawang, Kalimantan Barat, mengasah kemampuan eksekusi lapangan.' },
        { year: 'Era Kegagalan — 5 Kali Bangkrut', text: 'Investasi gagal berturut-turut di Papua, Kalbar, NTT, dan 2 kali bangkrut di Jakarta hingga melakoni profesi kuli kasar.' },
        { year: '1988 — Lahirnya Artha Graha', text: 'Menggandeng Yayasan Kartika Eka Paksi mendirikan Artha Graha Group dan merestrukturisasi perbankan sakit.' },
        { year: 'Revitalisasi Perbankan', text: 'Mengakuisisi Bank Propelat (menjadi Bank Artha Graha) dan memulihkannya dalam 1,5 tahun, disusul Bank Inter-Pacific.' },
        { year: 'Hari Ini — Penguasa SCBD', text: 'Mengembangkan Sudirman Central Business District (SCBD) Jakarta dan dinobatkan sebagai salah satu orang terkaya Indonesia.' }
      ],
      quote: 'Saya 5 kali bangkrut: di Papua, di Kalimantan Barat, di NTT, dan di Jakarta 2 kali. Jatuh adalah hal biasa dalam bisnis; yang luar biasa adalah bangkit kembali setiap kali kita terjatuh.',
      quoteAuthor: 'Tomy Winata, pendiri Artha Graha Group',
      chapters: [
        {
          num: 1,
          title: 'Bocah Es Loli dan Yatim Piatu di Pontianak',
          paragraphs: [
            'Pontianak, 1958. Seorang anak laki-laki bernama Tjoet Tjwan Ling (kelak dikenal sebagai Tomy Winata) terlahir di tengah kepapaan yang teramat perih. Kehilangan kedua orang tuanya sejak masa kanak-kanak menjadikannya seorang anak yatim piatu yang harus bertarung sendirian tanpa tempat mengadu.',
            'Demi mengganjal perut lapar dan bertahan hidup di kerasnya jalanan Kalimantan Barat, Tomy kecil berkeliling memikul kotak es loli dan menawarkan jasa mencuci mobil para pemilik kendaraan di pasar tradisional.',
            '"Saya tidak punya warisan dan tidak punya siapapun untuk bergantung. Rasa lapar dan kerasnya jalanan itulah guru pertama saya dalam memahami nilai kerja keras," kenangnya.'
          ]
        },
        {
          num: 2,
          title: 'Usia 15 Tahun dan Kepercayaan Kantor Koramil',
          paragraphs: [
            'Tahun 1972, saat usianya baru menginjak 15 tahun, pintu takdirnya mulai terbuka saat ia diperkenalkan dengan aparat teritorial militer di Singkawang.',
            'Kendati masih belia, ketangkasan, kejujuran, dan keuletannya membuahkan kepercayaan besar: ia diserahi tanggung jawab proyek pembangunan kantor Koramil setempat.',
            'Tomy membuktikan kemampuannya mengelola material bangunan dan pekerja lapangan dengan penuh disiplin, membuka jaringan pertemanan dan fondasi awal di dunia konstruksi.'
          ]
        },
        {
          num: 3,
          title: 'Lima Kali Runtuh: Dari Papua, NTT, hingga Kuli di Jakarta',
          paragraphs: [
            'Namun jalan menuju puncak konglomerasi dipenuhi jurang kegagalan yang berulang kali menenggelamkannya. Tomy mencoba menanam modal pada berbagai proyek di berbagai penjuru kepulauan Nusantara, namun takdir mengujinya tanpa ampun.',
            'Investasinya di belantara Papua hancur lebur. Ia kembali mencoba di tanah kelahirannya Kalimantan Barat, namun kembali gulung tikar. Pindah ke Nusa Tenggara Timur (NTT), usahanya kembali kandas. Merantau ke Jakarta untuk mengadu nasib, ia menelan kebangkrutan dua kali berturut-turut.',
            '"Saya lima kali bangkrut. Di Papua bangkrut, di Kalbar bangkrut, di NTT bangkrut, dan di Jakarta dua kali bangkrut," aku Tomy. Di masa-masa terkelam saat uangnya habis tak bersisa, ia tidak malu menyambung hidup dengan menjadi kuli bangunan kasar.'
          ]
        },
        {
          num: 4,
          title: '1988: Kemitraan Strategis dan Revitalisasi Bank Sakit',
          paragraphs: [
            'Ditempa oleh lima kali kejatuhan, Tomy menjelma menjadi wirausahawan yang matang dalam manajemen risiko dan negosiasi tingkat tinggi.',
            'Tahun 1988 menjadi momentum lompatan raksasa saat ia menggandeng Yayasan Kartika Eka Paksi untuk mendirikan Artha Graha Group. Insting bisnisnya yang tajam membawanya mengambil alih bank-bank yang kolaps.',
            'Ia mengakuisisi Bank Propelat yang sedang sekarat, merombak manajemennya, dan menyulapnya menjadi Bank Artha Graha yang sehat dan mencetak laba hanya dalam tempo 1,5 tahun. Kesuksesan itu berlanjut dengan restrukturisasi Bank Inter-Pacific pada tahun 2003.'
          ]
        },
        {
          num: 5,
          title: 'Kawasan SCBD dan Mahkota Kejayaan Artha Graha',
          paragraphs: [
            'Mahakarya terbesarnya terwujud dalam pembangunan kawasan Sudirman Central Business District (SCBD) di jantung segitiga emas Jakarta — kawasan perkantoran, perhotelan, dan pusat finansial paling prestisius dan modern di Indonesia.',
            'Dari seorang bocah yatim piatu penjual es loli yang pernah lima kali bangkrut dan menjadi kuli, Tomy Winata melesat masuk ke jajaran konglomerat terkaya di Indonesia dengan estimasi kekayaan melampaui Rp 14 triliun.',
            'Perjalanan hidupnya adalah monumen keteguhan mental: bahwa jumlah kegagalan kita tidak akan pernah menjadi masalah selama tekad untuk bangkit selalu lebih banyak satu kali daripada jumlah kejatuhan.'
          ]
        }
      ],
      takeaways: [
        'Resiliensi Tanpa Batas (Jatuh 5 Kali, Bangkit 6 Kali): Kebangkrutan beruntun di berbagai daerah adalah modul pembelajaran mental termahal untuk membentuk ketangguhan bisnis.',
        'Membangun Kepercayaan Sejak Dini: Keberhasilan menyelesaikan proyek pertama di usia 15 tahun membuktikan bahwa amanah dan integritas adalah mata uang sosial tertinggi.',
        'Keahlian Menyehatkan Aset Sakit (*Turnaround Specialist*): Mengakuisisi bank bermasalah dan merevitalisasinya menjadi institusi laba adalah keunggulan strategis pembeda.',
        'Visi Infrastruktur Jangka Panjang: Mengembangkan kawasan SCBD membuktikan pentingnya kepemilikan aset properti strategis sebagai pilar ketahanan konglomerasi multi-dekade.'
      ]
    },
    {
      id: 'mulyoko',
      featured: false,
      name: 'Mulyoko',
      tagline: 'Dari Kambing Mati, Pindah Kandang 3 Kali & Utang Rp 500 Juta di Usia 25 — Bangkit Riset Formula Pakan, Lunas 2 Tahun & Jual Ribuan Domba',
      title: 'Dari Utang Rp 500 Juta di Usia 25 Tahun, Kini Sukses Jual Ribuan Kambing',
      subtitle: 'Pengusaha Peternakan Kambing & Domba Modern — Menaklukkan Utang Setengah Miliar Lewat Inovasi Formula Pakan & Semangat Istri',
      origin: 'Indonesia',
      ageAtRebound: '25 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 500 Jt & Ribuan Ternak',
      badge: 'Peternak Modern — Ribuan Kambing & Domba',
      theme: 'emerald',
      accentColor: '#10B981',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rp 500 Juta (Ternak Mati & Modal Macet)',
        age: '25 Tahun (Lunas Usia 27 Tahun)',
        lowest: 'Kambing Mati Massal, Pembayaran Macet, Diusir Pindah Kandang 3 Kali, Nyaris Berhenti Total',
        action: 'Belajar ke Peternak Sukses Bogor & Surabaya + Inovasi Formula Pakan + Manajemen Sanitasi',
        result: 'Target 5 Tahun Lunas dalam 2 Tahun, Penjualan Ribuan Ekor Kambing & Domba'
      },
      timeline: [
        { year: 'Usia Awal 20-an', text: 'Memulai usaha peternakan kambing dengan modal nekat, namun minim ilmu nutrisi pakan dan manajemen kandang.' },
        { year: 'Usia 25 — Cobaan Bertubi-tubi', text: 'Kambing mati satu per satu, piutang macet, dan dipaksa pindah tempat usaha 3 kali akibat komplain warga.' },
        { year: 'Titik Terendah — Rp 500 Juta', text: 'Menanggung utang Rp 500 juta dan nyaris putus asa berhenti beternak domba selamanya.' },
        { year: 'Semangat Istri & Belajar ke Ahli', text: 'Dikuatkan istri; berkelana ke Bogor dan Surabaya untuk menimba ilmu langsung dari peternak senior yang sukses.' },
        { year: 'Inovasi Formulasi Pakan', text: 'Menemukan komposisi pakan bergizi seimbang, memperbaiki sanitasi, dan menerapkan disiplin waktu pemeliharaan.' },
        { year: '2 Tahun Lunas — Ribuan Ternak', text: 'Seluruh utang Rp 500 juta lunas dalam 2 tahun (dari target 5 tahun), kini sukses menyuplai ribuan kambing dan domba.' }
      ],
      quote: 'Kalau kita jatuh, jangan malu untuk belajar dari orang yang sudah lebih dulu berhasil. Kegagalan berkali-kali menemukan titik kuncinya di komposisi pakan dan manajemen disiplin. Semangat dari istri adalah bahan bakar kebangkitan saya.',
      quoteAuthor: 'Mulyoko, pengusaha peternakan kambing & domba',
      chapters: [
        {
          num: 1,
          title: 'Pemuda yang Berani Bermimpi di Jalur Peternakan',
          paragraphs: [
            'Di usianya yang masih sangat muda, Mulyoko telah memilih jalur wirausaha peternakan — sebuah bidang usaha yang menuntut ketahanan fisik, modal kerja intensif, dan risiko kematian hewan yang tinggi.',
            'Bermodalkan tekad kuat, ia merintis kandang pembiakan dan penggemukan kambing/domba. Hari-harinya dihabiskan menyabit rumput, membersihkan kotoran kandang, dan merawat ternaknya.',
            'Ia memimpikan masa depan mandiri sebagai juragan peternakan modern yang mampu membuka lapangan kerja bagi masyarakat sekitarnya.'
          ]
        },
        {
          num: 2,
          title: 'Cobaan Bertubi-tubi: Ternak Mati dan Pindah Kandang Tiga Kali',
          paragraphs: [
            'Namun minimnya pengalaman ilmiah mengenai nutrisi dan biosafety segera menuai bencana. Hewan ternaknya terserang penyakit pencernaan dan mati lemas satu demi satu.',
            'Di saat yang sama, pembeli dan mitra pedagang daging menunggak pembayaran hingga arus kas operasionalnya macet total. Tekanan bertambah runcing ketika warga sekitar melayangkan protes polusi bau yang memaksanya membongkar dan memindahkan lokasi kandang hingga 3 kali berturut-turut.',
            'Setiap kali pindah lokasi, modal terkuras untuk sewa lahan baru dan mendirikan ulang rangka kandang, mengakumulasikan beban utang hingga mencapai Rp 500 juta di usianya yang baru 25 tahun.'
          ]
        },
        {
          num: 3,
          title: 'Utang Setengah Miliar dan Cahaya Doa Sang Istri',
          paragraphs: [
            'Menanggung utang setengah miliar rupiah di usia muda membuat mental Mulyoko terpukul hebat. Rasa bersalah dan kelelahan fisik membuatnya sempat ingin melempar handuk dan bersumpah berhenti dari dunia peternakan selamanya.',
            'Namun di saat paling terpuruk, sang istri hadir sebagai oase ketenangan. Tanpa pernah mencela atau menuntut berlebihan, istrinya terus menguatkannya: "Jangan menyerah Mas, mari kita evaluasi apa yang salah. Kita belajar lagi dari nol bersama-sama."',
            'Dukungan penuh cinta itu menyalakan kembali api semangat di dadanya untuk mencari tahu letak kesalahan mendasar dalam metode peternakannya.'
          ]
        },
        {
          num: 4,
          title: 'Rendah Hati Menimba Ilmu ke Bogor dan Surabaya',
          paragraphs: [
            'Membuang rasa gengsi dan anggapan sok tahu, Mulyoko menempuh perjalanan jauh berguru ke sentra-sentra peternakan kambing modern percontohan di Bogor, Jawa Barat dan Surabaya, Jawa Timur.',
            'Ia mengamati bagaimana para peternak sukses meracik pakan fermentasi konsentrat tinggi, mengatur sirkulasi udara kandang panggung, serta menerapkan jadwal pemberian vaksin dan sanitasi berkala.',
            '"Titik balik terpenting saya temukan pada formula komposisi pakan. Kualitas nutrisi pakan menentukan kecepatan bobot panen dan ketahanan imunitas hewan terhadap penyakit," simpul Mulyoko.'
          ]
        },
        {
          num: 5,
          title: 'Formula Pakan Ajaib, Lunas 2 Tahun, dan Ribuan Ekor Kambing',
          paragraphs: [
            'Menerapkan formulasi pakan barunya di kandang, tingkat kematian kambingnya merosot drastis mendekati nol, sementara laju pertambahan bobot harian meningkat pesat.',
            'Efisiensi biaya pakan dan kualitas daging yang prima membuat pembeli grosir, restoran aqiqah, dan pedagang hewan kurban berebut memesan. Dari target semula 5 tahun pelunasan, seluruh beban utang Rp 500 juta berhasil dilunasi lunas tuntas hanya dalam tempo 2 tahun.',
            'Hari ini, peternakan Mulyoko berkembang pesat menjual ribuan ekor kambing dan domba setiap tahunnya — membuktikan bahwa kemauan untuk rendah hati belajar dari orang lain sanggup mengubah kehancuran menjadi kesuksesan gemilang.'
          ]
        }
      ],
      takeaways: [
        'Rendah Hati Belajar dari Praktisi yang Sudah Terbukti: Jangan berlama-lama meratapi kegagalan metode lama; cari mentor dan peternak sukses di luar kota untuk menyerap ilmu terbaik.',
        'Kuasai Variabel Kunci Bisnis (*Core Business Variable*): Dalam peternakan, formulasi nutrisi pakan dan biosafety adalah penentu hidup matinya margin dan arus kas.',
        'Dukungan Moral Pasangan Melipatgandakan Keberanian Bangkit: Kekuatan kata-kata penyemangat istri menghindarkan pengusaha muda dari keputusasaan mental.',
        'Percepat Pelunasan Lewat Peningkatan Kualitas Eksekusi: Utang Rp 500 juta yang semula ditargetkan 5 tahun dapat lunas dalam 2 tahun saat operasional berjalan pada efisiensi puncak.'
      ]
    },
    {
      id: 'iwanseptianus',
      featured: false,
      name: 'Iwan Septianus',
      tagline: 'Dari Peternakan Ayam Musnah Akibat Wabah & Aset Terjual — Bangkit Modal KUR Rp 5 Juta Beli 35 Liter Bensin Jadi Raja BBM & LPG Malinau Kaltara',
      title: 'Dari Peternakan yang Runtuh, Kini Raja Distribusi BBM & LPG Pedalaman Kalimantan',
      subtitle: 'Pengusaha Distribusi Energi Desa Respen Tubu, Malinau Utara — Bangkit dari Nol dengan KUR Mikro Menjadi Pangkalan 720 Tabung LPG',
      origin: 'Malinau, Kalimantan Utara',
      ageAtRebound: 'Tahun 2015',
      categories: ['bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Wabah Peternakan & Modal KUR Rp 5 Jt',
      badge: 'Raja Energi Pedalaman — Pangkalan LPG & BBM',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FEF3C7',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Aset Terjual & Seluruh Tabungan Ludes Pasca Wabah 2015',
        age: 'Tahun 2015 (Bangkit Usia Produktif)',
        lowest: 'Peternakan Ayam Habis Terkena Wabah Penyakit, Jual Seluruh Aset untuk Melunasi Utang',
        action: 'Ambil KUR Rp 5 Juta (Beli 35L Bensin) + Disiplin Catat Keuangan + Berekspansi ke 720 Tabung LPG',
        result: 'Distribusi 500L BBM/Minggu, Pangkalan Resmi 720 Tabung Gas LPG & Buka Lapangan Kerja Desa'
      },
      timeline: [
        { year: '2015 — Badai Wabah Penyakit', text: 'Usaha peternakan ayam di Desa Respen Tubu musnah total diterjang wabah penyakit. Seluruh tabungan habis dan aset dijual demi melunasi utang.' },
        { year: '2015 — Modal KUR Rp 5 Juta', text: 'Mengajukan KUR mikro BRI Rp 5 juta, membeli 35 liter bensin dan membuka kios eceran BBM sederhana di depan rumah.' },
        { year: 'Edukasi & Tata Kelola Keuangan', text: 'Menerapkan bimbingan pencatatan transaksi rapi dan memisahkan uang pribadi dengan uang kas operasional kios.' },
        { year: '2016 — Naik ke 500 Liter/Minggu', text: 'Mengambil pinjaman tahap kedua Rp 15 juta untuk memperbesar jeriken drum, melayani hingga ke desa-desa tetangga.' },
        { year: '2018 — Pangkalan 720 Tabung LPG', text: 'Mengambil KUR Rp 129 juta untuk mendirikan pangkalan resmi 720 tabung gas LPG pertama di kecamatannya.' },
        { year: 'Hari Ini — Penggerak Ekonomi Desa', text: 'Menjamin ketersediaan energi terjangkau bagi warga pedalaman Kalimantan Utara dan membuka lapangan kerja bagi pemuda desa.' }
      ],
      quote: 'Saya tidak menyangka akan mendapatkan pinjaman secepat itu. Modal kecil Rp 5 juta benar-benar memberikan harapan baru bagi saya untuk membangun kembali hidup dari nol. Kegagalan bukan akhir asalkan kita mau belajar dan menerima bantuan.',
      quoteAuthor: 'Iwan Septianus, pengusaha BBM & LPG Desa Respen Tubu Malinau',
      chapters: [
        {
          num: 1,
          title: 'Peternak Ayam yang Kehilangan Segalanya dalam Semalam',
          paragraphs: [
            'Tahun 2015, di Desa Respen Tubu, pedalaman Kecamatan Malinau Utara, Kalimantan Utara, Iwan Septianus menggantungkan masa depan keluarganya pada usaha peternakan ayam pedaging.',
            'Namun bencana datang tiba-tiba. Wabah penyakit unggas menyerang tanpa ampun, mematikan ribuan ayam ternaknya hanya dalam kurun hitungan minggu hingga tak bersisa.',
            'Modal kerja ludes seketika, tabungan keluarga terkuras habis, dan aset-aset penting terpaksa dilego untuk melunasi utang pakan. Iwan jatuh ke titik terendah dan sempat kehilangan arah masa depan.'
          ]
        },
        {
          num: 2,
          title: 'Secercah Harapan dari Pinjaman KUR Rp 5 Juta',
          paragraphs: [
            'Di tengah kebuntuan finansial, seorang sahabat menyarankannya untuk mengajukan Kredit Usaha Rakyat (KUR) mikro di bank pelat merah terdekat.',
            'Meskipun awalnya diliputi rasa ragu dan minder karena statusnya sebagai pengusaha yang baru saja bangkrut, ia memberanikan diri menyusun proposal sederhana.',
            'Permohonan pinjaman modal kerja sebesar Rp 5 juta disetujui, memberinya napas kedua untuk memulai ikhtiar bisnis baru dari titik nol.'
          ]
        },
        {
          num: 3,
          title: 'Kios 35 Liter Bensin dan Solusi Energi Warga Desa',
          paragraphs: [
            'Dengan modal Rp 5 juta tersebut, Iwan mengamati kebutuhan paling krusial di desanya: warga harus menempuh jarak puluhan kilometer ke kota hanya untuk membeli bensin dan bahan bakar mesin pertanian.',
            'Ia membelanjakan modal awalnya untuk 35 liter bensin eceran dan beberapa jeriken penampung, mendirikan kios mini di teras depan rumahnya.',
            'Kebutuhan bahan bakar yang tinggi di pelosok membuat pasokan bensinnya laris manis diserbu warga dan petani lokal setiap hari.'
          ]
        },
        {
          num: 4,
          title: 'Disiplin Finansial: Memisahkan Dompet Pribadi dan Kas Usaha',
          paragraphs: [
            'Belajar dari kejatuhan masa lalunya, Iwan menerapkan disiplin tata kelola keuangan yang ketat: mencatat setiap liter penjualan harian dan pantang mencampuradukkan uang belanja dapur dengan uang kas perputaran BBM.',
            'Volume penjualannya meroket dari 35 liter per minggu menjadi 500 liter per minggu. Pada tahun 2016, kelancaran riwayat kreditnya membuatnya dipercaya menambah plafon pembiayaan menjadi Rp 15 juta untuk memperluas tangki drum penyimpanan.'
          ]
        },
        {
          num: 5,
          title: 'Pangkalan Resmi 720 Tabung LPG dan Pemberdayaan Pemuda',
          paragraphs: [
            'Tahun 2018, Iwan membaca peluang besar kelangkaan gas elpiji yang kerap melanda pedalaman Malinau. Dengan reputasi bisnis yang kokoh, ia mengakses fasilitas KUR sebesar Rp 129 juta untuk mendirikan pangkalan resmi LPG Pertamina.',
            'Ia mendatangkan 720 tabung gas LPG bersubsidi langsung ke desa, memangkas biaya transportasi warga yang biasanya harus membeli gas mahal di kota kabupaten.',
            'Usaha distribusinya kini menyerap tenaga kerja pemuda desa setempat untuk bagian armada logistik dan administrasi gudang — membuktikan bahwa modal mikro yang dikelola dengan kejujuran dan ketekunan sanggup menyalakan lentera ekonomi daerah 3T (Terdepan, Terluar, Tertinggal).'
          ]
        }
      ],
      takeaways: [
        'Manfaatkan Fasilitas Pembiayaan Mikro Resmi Pemerintah: Program KUR berbunga rendah adalah jembatan likuiditas penyelamat bagi wirausahawan yang baru bangkrut.',
        'Pilih Usaha Berbasis Kebutuhan Pokok yang Defisit Pasokan (*Inelastic Demand*): Distribusi BBM dan LPG di kawasan pelosok menjamin perputaran kas harian yang cepat (*fast cash turnover*).',
        'Disiplin Mutlak Pemisahan Arus Kas Pribadi vs Bisnis: Pencatatan rinci dan pemisahan dompet kas adalah fondasi utama kelayakan peningkatan plafon perbankan.',
        'Menciptakan Dampak Sosial bagi Komunitas Lokal: Usaha yang memecahkan kesulitan masyarakat sekitar akan selalu didukung dan dijaga oleh warga lingkungannya.'
      ]
    },
    {
      id: 'sitisofia',
      featured: false,
      name: 'Siti Sofia',
      tagline: 'Dari Toko Elektronik Suami Bangkrut & Terlilit Utang — Bangkit Tanpa Modal dari Hobi Menanam di Teras Rumah, Miliki Ribuan Bibit & Omzet Ratusan Juta',
      title: 'Dari Bangkrut dan Utang Toko Elektronik, Kini Pemilik Ribuan Bibit Tanaman',
      subtitle: 'Ibu Rumah Tangga Pengusaha Bibit Buah & Tanaman Hias Semarang — Mengubah Halaman Rumah dan Hobi Menjadi Kerajaan Pembibitan Beromzet Ratusan Juta',
      origin: 'Semarang, Jawa Tengah',
      ageAtRebound: '36 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Bangkrut Elektronik & Nol Modal',
      badge: 'Pusat Pembibitan — Ribuan Bibit & 40 Varian Mangga',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Utang Toko Elektronik Pasca Bangkrut',
        age: '36 Tahun',
        lowest: 'Nol Modal, Keuangan Hancur, Ditinggali Utang Menumpuk dari Usaha Elektronik',
        action: 'Mulai Reseller Tanaman Tanpa Modal + Budidaya Bibit di Teras Depan Rumah + Koleksi 40 Varian',
        result: 'Ribuan Bibit Buah & Tanaman Hias, Pusat Bibit Terlengkap Semarang, Omzet Ratusan Juta/Tahun'
      },
      timeline: [
        { year: 'Era Toko Elektronik', text: 'Hidup berkecukupan dari usaha elektronik suami, sebelum bisnis mengalami kebangkrutan parah dan meninggalkan tumpukan utang.' },
        { year: 'Titik Nol — Tanpa Modal', text: 'Kondisi ekonomi keluarga hancur total; tidak memiliki modal sepeser pun untuk membuka toko baru.' },
        { year: 'Eksplorasi Hobi Menanam', text: 'Memanfaatkan kegemaran keluarga dalam bercocok tanam dengan memulai sebagai reseller tanaman tanpa modal sepeser pun.' },
        { year: 'Pemanfaatan Pekarangan Depan', text: 'Menanam dan menyemai bibit sendiri di lahan sempit teras rumah dari fase pembibitan hingga pembuahan.' },
        { year: 'Koleksi 40 Varian Mangga', text: 'Koleksi melonjak hingga ribuan tanaman hias dan 40 varietas mangga unggulan, melayani pembeli ritel dan grosir.' },
        { year: 'Hari Ini — Omzet Ratusan Juta', text: 'Menjadi salah satu pusat pembibitan buah dan tanaman hias terlengkap di Kota Semarang dengan omzet ratusan juta per tahun.' }
      ],
      quote: 'Awalnya kita dari nol tidak punya modal karena bangkrut dan terbelit utang. Tapi karena hobi menanam, kami mencoba belajar sungguh-sungguh. Hobi yang ditekuni dengan keuletan bisa menjadi jalan rezeki terbesar keluarga.',
      quoteAuthor: 'Siti Sofia, ibu rumah tangga dan pengusaha bibit tanaman Semarang',
      chapters: [
        {
          num: 1,
          title: 'Ketika Toko Elektronik Runtuh dan Meninggalkan Utang',
          paragraphs: [
            'Di Kota Semarang, Jawa Tengah, Siti Sofia sebelumnya menjalani keseharian sebagai ibu rumah tangga yang tenang. Usaha toko elektronik milik sang suami selama bertahun-tahun menjadi pilar penopang kesejahteraan keluarga mereka.',
            'Namun dinamika persaingan ritel dan krisis operasional memicu kebangkrutan toko tersebut. Usaha itu tutup total dengan meninggalkan beban utang yang menumpuk di berbagai pihak.',
            'Keluarganya jatuh ke titik nadir: kehilangan sumber penghasilan utama, terkuras tabungannya, dan tidak memiliki modal uang sepeser pun untuk memulai kembali bisnis formal.'
          ]
        },
        {
          num: 2,
          title: 'Hobi Menanam yang Menjadi Penyelamat Keluarga',
          paragraphs: [
            'Di tengah kebingungan dan kecemasan menghadapi tagihan utang, Siti dan suaminya melihat kembali aset non-finansial yang mereka miliki: kegemaran keluarga merawat tanaman di pekarangan rumah.',
            '"Awalnya kami benar-benar dari nol tidak punya modal karena bangkrut. Tapi kebetulan kami sekeluarga hobi menanam, jadi kami sepakat mencoba mendalami dunia tanaman secara serius," kenang Siti.',
            'Mereka menyadari bahwa tanaman bukan sekadar hiasan pekarangan, melainkan komoditas bernilai tinggi yang pasarnya terus bertumbuh baik untuk koleksi rumah tangga maupun perkebunan produktif.'
          ]
        },
        {
          num: 3,
          title: 'Langkah Awal: Menjadi Reseller Tanpa Modal Sepeser Pun',
          paragraphs: [
            'Karena tidak memiliki modal kas untuk membeli stok pohon dalam jumlah besar, Siti mengambil strategi *zero-capital reseller*. Ia menjalin kerja sama dengan petani kebun di pinggiran kota untuk memasarkan tanaman mereka.',
            'Dengan ketekunan memotret dan mempromosikan bibit melalui jejaring pesan instan dan media sosial, pesanan pertama mulai berdatangan.',
            'Uang keuntungan dari komisi reseller tidak dipakai untuk konsumsi mewah, melainkan diputar penuh untuk membeli bibit polybag kecil dan pupuk dasar.'
          ]
        },
        {
          num: 4,
          title: 'Dari Teras Sempit Rumah Menuju Koleksi 40 Varietas Mangga',
          paragraphs: [
            'Mereka memanfaatkan setiap jengkal lahan pekarangan depan rumah yang terbatas sebagai laboratorium pembibitan mini: melakukan okulasi, penyambungan tunas, dan perawatan hingga bibit siap berbuah.',
            'Keahlian hortikultura mereka berkembang pesat. Koleksinya terus berlipat ganda hingga memiliki ribuan bibit buah unggul, termasuk 40 varian pohon mangga langka dan premium (seperti Irwin, Kiojay, Yuwen, hingga Chokanan).',
            'Pekarangan rumahnya bertransformasi menjadi magnet bagi para pecinta tanaman dan kolektor buah dari berbagai kota yang mencari bibit berkualitas terjamin.'
          ]
        },
        {
          num: 5,
          title: 'Omzet Ratusan Juta dan Berkah Ketekunan Ibu Rumah Tangga',
          paragraphs: [
            'Berkat ketelitian merawat kualitas bibit dan kejujuran dalam melayani pelanggan, usaha pembibitannya kini melayani penjualan ratusan pohon setiap bulan baik eceran maupun partai besar.',
            'Omzet tahunannya melesat menembus angka ratusan juta rupiah, melunasi seluruh sisa beban utang lama dan memulihkan martabat ekonomi keluarganya secara mandiri.',
            'Kisah Siti Sofia membuktikan bahwa ketika pintu modal uang tertutup rapat, hobi sederhana yang dipadukan dengan keuletan dan kemauan belajar mampu membuka pintu rezeki yang jauh lebih berlimpah.'
          ]
        }
      ],
      takeaways: [
        'Monetisasi Keterampilan dan Hobi Sebagai Solusi Nol Modal: Ketika modal kas nol, hobi bercocok tanam yang ditekuni secara ilmiah dapat dikonversi menjadi unit bisnis berpenghasilan nyata.',
        'Mulai Dari Model Reseller untuk Membangun Arus Kas Pertama: Memasarkan barang pihak lain tanpa menanggung risiko stok awal adalah jalan keluar tercepat saat tidak punya modal.',
        'Spesialisasi dan Keragaman Produk (*Product Depth*): Menawarkan 40 varietas mangga menciptakan keunggulan kompetitif unik yang membedakan tokonya dari pedagang tanaman biasa.',
        'Memaksimalkan Aset Ruang yang Ada: Pekarangan sempit di depan rumah cukup menjadi landasan awal untuk menghasilkan perputaran omzet ratusan juta rupiah.'
      ]
    },
    {
      id: 'mukhlis',
      featured: false,
      name: 'Mukhlis Syamaun',
      tagline: 'Dari Profit 100x Lipat Runtuh Utang Rp 300 Juta & Tersisa 1 Gerai — Bangkit Jalan Sedekah Ekstrem, Miliki 100+ Karyawan & Beli 2-4 Rumah per Tahun',
      title: 'Dari Utang Rp 300 Juta dan Gerai Tersisa Satu, Bangkit Berkat Sedekah Ekstrem',
      subtitle: 'Pengusaha Ritel & Pameran Jakarta Timur — Mengubah Keruntuhan 9 Gerai Menjadi Keberkahan Finansial Lewat Sedekah Harian',
      origin: 'Jakarta Timur',
      ageAtRebound: 'Tahun 2007',
      categories: ['debt', 'bankrupt', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 300 Jt & Sedekah Ekstrem',
      badge: '100+ Karyawan — Pembeli 2–4 Rumah/Tahun',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FEF3C7',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Rp 300 Juta (9 Gerai Mal Kolaps)',
        age: 'Tahun 2007 (Bangkit Pasca Krisis)',
        lowest: '10 Gerai Runtuh Tersisa 1 Gerai di Jatinegara, Rumah Ngontrak Pindah-Pindah, Minus Rp 300 Jt',
        action: 'Introspeksi Total + Sedekah Ekstrem (Omzet Harian, Cincin Nikah Ibu, Barang Rumah) + Dawam Sedekah',
        result: 'Utang Lunas Total, Umrah, Miliki 100+ Karyawan & Beli 2-4 Unit Rumah Setiap Tahun'
      },
      timeline: [
        { year: '2001 — Puncak Kejayaan Mal', text: 'Membuka pameran ritel di Mal Senen Jakarta Pusat dengan profit berlipat 100x lipat per hari dan membuka 10 gerai.' },
        { year: '2007 — Bangkrut & Utang Rp 300 Jt', text: 'Bisnis kolaps tiba-tiba, 9 gerai tutup dan menyisakan beban utang Rp 300 juta. Tersisa 1 gerai kecil di Jatinegara.' },
        { year: 'Introspeksi & Perubahan Mindset', text: 'Menyadari kelalaian berbagi saat kaya raya; bertekad mengutamakan hak orang lain lewat sedekah harian.' },
        { year: 'Praktik Sedekah Ekstrem', text: 'Menyedekahkan seluruh omzet harian setelah cukup untuk dapur, melego komputer hingga cincin nikah warisan ibu.' },
        { year: 'Pemulihan Arus Kas & Lunas', text: 'Perputaran modal terbuka lebar, utang Rp 300 juta lunas bertahap, dan mampu menunaikan ibadah umrah.' },
        { year: 'Hari Ini — 100+ Karyawan', text: 'Mempekerjakan lebih dari 100 staf, keluar dari kontrakan, dan rutin membeli 2 hingga 4 properti rumah per tahun.' }
      ],
      quote: 'Ketika saya bangkrut dan punya utang Rp 300 juta, saya mengubah pola pikir. Dari omzet gerai yang tersisa, setelah cukup buat makan dapur hari itu, semuanya saya sedekahkan. Ketika kita mendawamkan sedekah setiap hari, pintu rezeki yang terkunci dibuka lebar.',
      quoteAuthor: 'Mukhlis Syamaun, pengusaha ritel Jakarta Timur',
      chapters: [
        {
          num: 1,
          title: 'Kejayaan Instan di Mal Senen dan Peringatan Kebangkrutan',
          paragraphs: [
            'Awal era 2000-an menjadi saksi lonjakan kesuksesan Mukhlis Syamaun di industri ritel ibu kota. Melalui gerai pameran produk di salah satu pusat perbelanjaan di kawasan Senen, Jakarta Pusat, usahanya mendulang profit luar biasa hingga 100 kali lipat per hari.',
            'Keberhasilan itu mendorongnya membuka 10 gerai sekaligus di berbagai pusat perbelanjaan. Uang mengalir deras, namun di balik kelimpahan materi tersebut, ia mengakui lalai menyisihkan hak sesama dan kurang mengakar pada nilai-nilai keberkahan spiritual.',
            'Tahun 2007, roda nasib berputar drastis. Bisnisnya kolaps seketika akibat mismanagement dan kebocoran modal: sembilan dari sepuluh gerainya gulung tikar, menyisakan tumpukan utang senilai Rp 300 juta.'
          ]
        },
        {
          num: 2,
          title: 'Tersisa Satu Gerai di Jatinegara dan Utang Rp 300 Juta',
          paragraphs: [
            'Kejatuhan tersebut merenggut status mapannya. Mukhlis terpaksa memboyong keluarganya tinggal di rumah kontrakan sempit dan berpindah-pindah tempat karena kesulitan membayar uang sewa tahunan.',
            'Dari imperium sepuluh toko, kini ia hanya menggantungkan napas ekonomi pada satu-satunya gerai kecil yang tersisa di kawasan Jatinegara, Jakarta Timur dengan omzet pas-pasan yang nyaris tak cukup untuk makan.',
            '"Saya benar-benar bangkrut di bawah minus Rp 300 juta lebih. Saya heran dari mana utang sebesar itu bisa datang padahal omzet dulunya sangat banyak," kenang Mukhlis merenungi hari-hari terkelamnya.'
          ]
        },
        {
          num: 3,
          title: 'Introspeksi Spiritual dan Keputusan Sedekah Ekstrem',
          paragraphs: [
            'Alih-alih menyalahkan keadaan atau menghindar dari kreditur, Mukhlis memilih jalan perenungan batin dan taubat nasuha. Ia menyimpulkan bahwa modal utama yang hilang dari bisnisnya bukanlah uang, melainkan keberkahan.',
            'Ia mengambil keputusan radikal yang di luar nalar akal kalkulasi bisnis konvensional: mempraktikkan sedekah ekstrem (*radical giving*).',
            'Berapa pun penghasilan yang diperoleh dari satu-satunya gerai di Jatinegara, setelah disisihkan sekadar untuk kebutuhan makan pokok dapur hari itu, seluruh sisa uang kas langsung disedekahkan habis kepada kaum duafa dan anak yatim.'
          ]
        },
        {
          num: 4,
          title: 'Cincin Nikah Ibu, Komputer, dan Aliran Rezeki Tak Terduga',
          paragraphs: [
            'Komitmen sedekah itu dijalankannya secara konsisten bersama sang istri tercinta. Ketika tidak ada sisa uang tunai di dompet, mereka mencari barang-barang berharga di rumah untuk disedekahkan.',
            'Mulai dari perangkat komputer kerja hingga cincin kawin emas warisan almarhumah ibundanya direlakan untuk disedekahkan demi membantu orang yang lebih membutuhkan.',
            'Pengorbanan tulus itu membuka pintu-pintu pertolongan tak terduga: transaksi di gerai Jatinegara mendadak ramai kembali, pelanggan grosir baru berdatangan, dan arus kas perputaran barangnya membesar berlipat ganda.'
          ]
        },
        {
          num: 5,
          title: 'Lunas Total, Ratusan Karyawan, dan Beli 4 Rumah per Tahun',
          paragraphs: [
            'Berkat ketekunan mendawamkan sedekah harian dan tata kelola bisnis yang bersih, seluruh utang Rp 300 juta lunas terbayar tuntas. Mukhlis bahkan mampu memberangkatkan keluarga beribadah umrah ke Tanah Suci.',
            'Skala usahanya kini bertransformasi menjadi korporasi yang mempekerjakan lebih dari 100 orang karyawan. Dari yang semula harus berpindah kontrakan, kini ia mampu berinvestasi membeli 2 hingga 4 unit rumah setiap tahunnya.',
            'Kisah Mukhlis Syamaun membuktikan bahwa tangan yang berada di atas tidak akan pernah kekurangan, dan berbagi dengan ikhlas adalah tuas pengungkit rezeki terkuat di alam semesta.'
          ]
        }
      ],
      takeaways: [
        'Hukum Memberi Sebagai Pengungkit Keberkahan Finansial: Melepaskan keterikatan tamak terhadap materi dan mendawamkan sedekah harian membuka pintu kelancaran arus kas.',
        'Introspeksi Diri Saat Bisnis Kolaps: Mencari akar kegagalan moral dan spiritual jauh lebih mendasar daripada sekadar meratapi angka kerugian di atas kertas.',
        'Kompak Bersama Pasangan dalam Keputusan Darurat: Kesediaan istri menyedekahkan cincin nikah membuktikan kekuatan sinergi keluarga sebagai fondasi kebangkitan.',
        'Mentalitas Berbagi Sejak dari Titik Minus: Bersedekah tidak perlu menunggu kaya; memulainya saat serba terbatas melatih mentalitas kelimpahan (*abundance mindset*).'
      ]
    },
    {
      id: 'rinjani',
      featured: false,
      name: 'Luchiana Rinjani',
      tagline: 'Dari Ditinggal Mantan Suami dengan Utang Rp 980 Juta, Anak Diambil Paksa & Jual Rumah Ortu — Bangkit Tanpa Dendam Jadi Penggerak Wisata Offroad Sumedang',
      title: 'Dari Utang Rp 980 Juta dan Kehilangan Anak, Kini Penggerak Wisata Sumedang',
      subtitle: 'Ibu Tunggal 4 Anak & Inisiator Fun Offroad Sumedang — Menaklukkan Titik Nadir Perceraian Lewat Kreativitas Alam, Fotografi & Rekonsiliasi Batin',
      origin: 'Sumedang, Jawa Barat',
      ageAtRebound: '35 Thn',
      categories: ['debt', 'bankrupt', 'zero', 'business', 'indonesia'],
      categoryLabel: 'Utang Rp 980 Jt & Ekowisata Offroad',
      badge: 'Penggerak Ekowisata — Offroad Sumedang',
      theme: 'emerald',
      accentColor: '#059669',
      bgLight: '#ECFDF5',
      borderLight: '#A7F3D0',
      stats: {
        debt: 'Rp 980 Juta (Usaha Material Tol Mantan Suami)',
        age: '35 Tahun (2025)',
        lowest: 'Ditinggal Suami dengan Utang Nyaris Rp 1 M, Anak Dibawa Paksa 2 Tahun, Rumah Orang Tua Dijual Murah',
        action: 'Lepas Dendam + Perjuangan Hak Asuh Anak via Hukum + Monetisasi Hobi Alam & Fotografi + Mitra Offroad',
        result: 'Penggerak Ekowisata Offroad Sumedang (Saung Situraja, Kebun Durian, Tanjung Duriat), Anak Kembali'
      },
      timeline: [
        { year: '2019 — Titik Nadir & Utang Rp 980 Jt', text: 'Mantan suami ditipu di proyek Tol Cisumdawu dan pergi meninggalkan warisan utang Rp 980 juta untuk ditanggung sendiri.' },
        { year: 'Ujian Kehilangan Anak', text: 'Anak dibawa paksa keluarga mantan suami tanpa izin; berjuang 2 tahun menempuh jalur hukum hingga difasilitasi Polda Jabar.' },
        { year: 'Jual Rumah Orang Tua', text: 'Terpaksa menjual rumah orang tua di Cimalaka di bawah harga pasar demi menutup desakan utang dan diniatkan ibadah.' },
        { year: '2022 — Melepas Dendam', text: 'Memulihkan kesehatan mental dengan ikhlas memaafkan mantan suami dan berfokus penuh pada masa depan 4 anaknya.' },
        { year: 'Monetisasi Hobi Alam & Foto', text: 'Dipercaya pemilik Saung Situraja mengelola wisata alam berbekal hobi naik gunung, foto, dan videografi.' },
        { year: 'Hari Ini — Penggerak Offroad', text: 'Membangun aliansi fun offroad Sumedang di Kebun Durian dan Tanjung Duriat, berkarya bersama anak-anaknya.' }
      ],
      quote: 'Setelah kondisi mental pulih, saya bangkit dengan tidak lagi menyimpan dendam pada siapa pun termasuk mantan suami. Setiap cobaan adalah ruang belajar termahal. Justru berkat semua kepedihan itu, saya bisa menjadi versi terbaik diri saya hari ini.',
      quoteAuthor: 'Luchiana Rinjani, ibu tunggal dan penggerak ekowisata Sumedang',
      chapters: [
        {
          num: 1,
          title: 'Ketika Suami Pergi dan Mewariskan Utang Rp 980 Juta',
          paragraphs: [
            'Tahun 2019 di Cimalaka, Sumedang, Jawa Barat, kehidupan Luchiana Rinjani hancur dalam sekejap. Bisnis pemasok material alam milik mantan suaminya untuk proyek jalan Tol Cisumdawu tertipu hingga bangkrut total.',
            'Alih-alih bersama menghadapi persoalan, sang suami memilih melarikan diri dan meninggalkan perceraian dengan mewariskan tumpukan utang senilai Rp 980 juta di pundak Rinjani sendirian.',
            'Sebagai ibu tunggal dari empat orang anak yang masih kecil, ia dipaksa menelan kenyataan pahit ditagih ratusan juta rupiah atas kesalahan yang tidak pernah ia perbuat.'
          ]
        },
        {
          num: 2,
          title: 'Dua Tahun Perjuangan Rebut Kembali Anak Tercinta',
          paragraphs: [
            'Pukulan terberat datang ketika salah seorang buah hatinya dibawa kabur secara sepihak oleh pihak keluarga mantan suami tanpa izin dan menolak mengembalikannya.',
            'Selama dua tahun lamanya, Rinjani hidup dalam kepedihan batin tak berujung: menangis tiap malam sembari terus berjuang menyuarakan hak asuhnya di media sosial dan menempuh jalur hukum resmi.',
            'Berkat keteguhan dan bantuan fasilitasi dari tim Polda Jawa Barat, setelah 24 bulan terpisah, sang anak akhirnya berhasil dipeluk kembali ke pangkuannya.'
          ]
        },
        {
          num: 3,
          title: 'Keikhlasan Menjual Rumah Orang Tua Demi Pelunasan',
          paragraphs: [
            'Demi meredam desakan para kreditur material, Rinjani dan kedua orang tuanya mengambil keputusan berat: menjual rumah keluarga di Cimalaka jauh di bawah harga pasaran.',
            'Meskipun perih melepas tanah kelahiran, ia menata niatnya murni sebagai ibadah dan pertanggungjawaban moral, terlebih pembeli berniat mewakafkan bangunan tersebut menjadi pesantren.',
            'Keikhlasan menanggalkan rasa kepemilikan materi menjadi awal pembersihan energi negatif dalam kehidupannya.'
          ]
        },
        {
          num: 4,
          title: 'Titik Balik: Melepas Belenggu Dendam dan Membuka Hati',
          paragraphs: [
            'Memasuki kurun waktu 2022–2024, Rinjani mengambil keputusan paling menentukan: memaafkan mantan suaminya seutuhnya dan menolak menyimpan racun dendam di dalam hati.',
            'Ia menggali kembali potensi diri yang lama terpendam sejak masa kuliah, yaitu kecintaan pada alam bebas, mendaki gunung, fotografi lanskap, dan videografi kreatif.',
            'Keahlian visual dan kecintaannya pada alam mempertemukannya dengan investor pemilik destinasi wisata Saung Situraja yang memberinya kepercayaan penuh untuk mengelola konsep pariwisata petualangan.'
          ]
        },
        {
          num: 5,
          title: 'Dari Hobi Alam Menjadi Ratu Ekowisata Offroad Sumedang',
          paragraphs: [
            'Rinjani menginisiasi aliansi operator wisata *Fun Offroad Sumedang*, menghubungkan rute jalur ekstrem melintasi Kebun Durian dan panorama eksotis Tanjung Duriat Waduk Jatigede.',
            'Paket wisatanya viral dan menjadi primadona wisatawan regional hingga nasional. Ia juga mengajak anak-anaknya membuat konten kreatif di media sosial sebagai sarana pemulihan psikologis (*healing*) sekaligus promosi pariwisata.',
            'Kisah Luchiana Rinjani adalah bukti nyata martabat seorang ibu: bahwa sebesar apa pun badai utang dan kepedihan yang ditinggalkan orang lain, keikhlasan memaafkan dan keberanian berkarya mampu melahirkan wanita yang jauh lebih berdaya.'
          ]
        }
      ],
      takeaways: [
        'Melepaskan Dendam Adalah Kunci Pemulihan Energi: Membenci pihak yang meninggalkan utang hanya menguras energi mental; mengikhlaskan membuka ruang untuk fokus membangun masa depan.',
        'Keteguhan Memperjuangkan Hak Keluarga: Dua tahun memperjuangkan kembalinya anak membuktikan bahwa ketabahan hukum dan doa ibu tidak akan pernah sia-sia.',
        'Monetisasi Keterampilan Petualangan & Konten Kreatif: Hobi mendaki dan fotografi dialihfungsikan menjadi motor penggerak ekowisata offroad komersial bernilai tinggi.',
        'Membangun Kolaborasi dan Kemitraan Strategis: Bermitra dengan pemilik destinasi wisata setempat memungkinkan ekspansi bisnis rekreasi tanpa harus memiliki seluruh lahan sendiri.'
      ]
    },
    {
      id: 'coristine',
      featured: false,
      name: 'Charles Coristine',
      tagline: 'Dari Burnout 20 Tahun di Wall Street, Nekat Beli Perusahaan Bangkrut Usia 52 — Bikin Popcorn Minyak Kelapa Diakuisisi Hershey $750 Juta (Rp 12 Triliun)',
      title: 'Dari Burnout di Wall Street, Beli Bisnis Bangkrut Jadi Unicorn Popcorn Rp 12 Triliun',
      subtitle: 'CEO LesserEvil Snack Co. — Membalikkan Perusahaan Sekarat Lewat Inovasi Popcorn Minyak Kelapa hingga Diakuisisi The Hershey Company',
      origin: 'New York, Amerika Serikat',
      ageAtRebound: '52 Thn',
      categories: ['bankrupt', 'zero', 'business', 'global'],
      categoryLabel: 'Burnout Wall Street & LesserEvil',
      badge: 'Akuisisi Hershey $750 Juta (Rp 12 Triliun)',
      theme: 'amber',
      accentColor: '#D97706',
      bgLight: '#FEF3C7',
      borderLight: '#FDE68A',
      stats: {
        debt: 'Beli Perusahaan Rugi & Berutang ke Keluarga/Bank',
        age: '52 Tahun (Tahun 2011)',
        lowest: 'Burnout Parah 20 Tahun Pialang Saham, Kuras Tabungan $250k Beli Pabrik Hampir Mati',
        action: 'Beli Mesin Lelang Bekas + Rekrut Teman & Pelatih Olahraga + Inovasi Popcorn Minyak Kelapa Organik',
        result: 'Penjualan $103,3 Juta (2023), Diakuisisi The Hershey Company $750 Juta / Rp 12 Triliun (2025)'
      },
      timeline: [
        { year: '1991–2011 — 20 Tahun Wall Street', text: 'Bekerja sebagai pialang saham di Morgan Stanley. Mengalami kejenuhan dan burnout parah meski mencoba meditasi dan kuliah MBA.' },
        { year: '2011 — Pertemuan di Acara BBQ', text: 'Bertemu pemilik LesserEvil yang hampir bangkrut dan merugi dengan pendapatan di bawah $1 juta. Tertarik pada filosofi namanya.' },
        { year: 'November 2011 — Pembelian Berisiko', text: 'Membeli LesserEvil seharga $250.000 (Rp 3,85 M) dengan sisa tabungan dan janji utang $100.000 tanpa pengalaman industri pangan.' },
        { year: 'Mesin Bekas & Tim Tak Biasa', text: 'Menyewa gudang 2.000 m², merakit mesin lelang bekas, merekrut sahabat sekolah dan instruktur wakeboard-nya.' },
        { year: '2014 — Terobosan Minyak Kelapa', text: 'Meluncurkan popcorn organik berbahan minyak kelapa atas saran ahli gizi; penjualan meledak menyumbang $2 juta.' },
        { year: '2025 — Akuisisi Hershey $750 Juta', text: 'Penjualan menembus $103,3 juta (2023) hingga resmi diakuisisi raksasa The Hershey Company senilai $750 juta (Rp 12 triliun).' }
      ],
      quote: 'Terkadang tidak melakukan riset yang terlalu dalam adalah berkah. Jika saya tahu betapa kecilnya peluang sukses di industri makanan saat itu, saya mungkin tidak akan pernah berani mencoba. Keberanian melompat adalah awal dari segalanya.',
      quoteAuthor: 'Charles Coristine, CEO LesserEvil',
      chapters: [
        {
          num: 1,
          title: 'Dua Dekade di Wall Street dan Teror Burnout',
          paragraphs: [
            'Selama 20 tahun, Charles Coristine adalah bagian tak terpisahkan dari hiruk-pikuk Wall Street di raksasa investasi Morgan Stanley, New York. Ia terbiasa bangun dini hari memantau bursa saham Tokyo dan London di tengah tekanan target jutaan dolar.',
            'Namun memasuki usia kepala lima, kejenuhan mental (*burnout*) menghantamnya secara melumpuhkan. Energi hidupnya terasa terkuras habis dan rutinitas finansial kehilangan makna.',
            'Ia mencoba berbagai cara memulihkan jiwanya: beralih menjadi vegetarian murni, rutin bermeditasi, hingga mengambil program master bisnis (MBA). Namun kehampaan batin tetap menggerogoti setiap harinya.'
          ]
        },
        {
          num: 2,
          title: 'Obrolan Barbekyu dan Pembelian Perusahaan Bangkrut',
          paragraphs: [
            'Sebuah pesta barbekyu santai di musim panas 2011 mengubah arah takdirnya. Ia berbincang dengan pendiri sebuah jenama camilan kecil bernama LesserEvil yang sedang merugi dan di ambang kebangkrutan dengan pendapatan tahunan di bawah $1 juta.',
            'Tanpa latar belakang kuliner sama sekali, Coristine terpesona oleh nama *LesserEvil* ("kejahatan yang lebih kecil") yang selaras dengan cita-cita gaya hidup sehat dan konsumsi berkesadaran (*mindful eating*).',
            'Pada November 2011 di usia 52 tahun, ia mempertaruhkan seluruh tabungan hidupnya senilai $250.000 ditambah utang komitmen masa depan $100.000 untuk membeli perusahaan sekarat tersebut.'
          ]
        },
        {
          num: 3,
          title: 'Pabrik Mesin Bekas dan Tim yang Tak Biasa',
          paragraphs: [
            'Karena modal uang yang tersisa sangat tipis, Coristine membentuk manajemen dengan formasi unik dan tidak konvensional: mengajak sahabat masa sekolahnya sebagai COO/CFO dan merekrut instruktur wakeboard pribadinya sebagai kepala pemasaran.',
            'Mereka menyewa bangunan pabrik tua seluas 2.000 meter persegi di Connecticut, memborong peralatan manufaktur bekas dari tempat pelelangan, dan menggandeng tukang las lokal untuk memodifikasi lini produksi.',
            'Coristine meminjam dana dari jaringan keluarga dan bank lokal demi menjaga napas arus kas pabrik tetap berdenyut.'
          ]
        },
        {
          num: 4,
          title: 'Terobosan Minyak Kelapa yang Mengubah Lanskap Makanan Ringan',
          paragraphs: [
            'Di tengah kebuntuan formulasi rasa, ahli gizi pribadi Coristine menyodorkan ide revolusioner: mengganti minyak sawit atau canola konvensional dengan minyak kelapa murni (*organic coconut oil*) dalam proses pemanggangan jagung berondong.',
            'Inovasi tersebut menghasilkan tekstur popcorn yang renyah, gurih alami, dan jauh lebih ramah kesehatan tanpa bahan kimia tambahan.',
            'Pada tahun 2014, varian popcorn minyak kelapa organik itu meledak di pasar swalayan Amerika Serikat, meraup penjualan lebih dari $2 juta dan menjadi tulang punggung pertumbuhan eksponensial LesserEvil.'
          ]
        },
        {
          num: 5,
          title: 'Dari $250 Ribu Menuju Akuisisi Hershey $750 Juta',
          paragraphs: [
            'Pertumbuhan LesserEvil tak terbendung, menembus rak-rak jaringan ritel raksasa seperti Whole Foods, Target, hingga Costco. Pada tahun 2023, penjualan kotor tahunannya menembus angka fantastis $103,3 juta (sekitar Rp 1,59 triliun).',
            'Puncaknya pada April 2025, korporasi raksasa cokelat dunia The Hershey Company resmi mengakuisisi LesserEvil dengan valuasi mencapai $750 juta (sekitar Rp 12 triliun) dengan Coristine tetap memegang kendali kepemimpinan CEO.',
            'Perjalanan Charles Coristine membuktikan bahwa tidak ada kata terlambat untuk merombak jalan hidup; keberanian untuk melompat keluar dari zona nyaman di usia paruh baya sanggup melahirkan mahakarya bernilai triliunan rupiah.'
          ]
        }
      ],
      takeaways: [
        'Keberanian Melompat Keluar dari Kejenuhan (*Mid-Life Pivot*): Usia 52 tahun bukan batasan untuk memulai industri baru yang sama sekali belum pernah ditekuni.',
        'Kekuatan Ceruk Makanan Sehat dan Diferensiasi Bahan Baku: Terobosan minyak kelapa organik mengubah komoditas popcorn biasa menjadi produk premium berdaya saing tinggi.',
        'Efisiensi Modal Awal Lewat Aset Bekas: Membeli mesin lelang bekas dan merekayasanya sendiri memangkas biaya *capex* pabrik secara signifikan saat modal terbatas.',
        'Keyakinan Mengalahkan Keraguan Analisis Berlebih (*Analysis Paralysis*): Terkadang terlalu banyak menghitung statistik kegagalan justru mematikan inisiatif wirausaha terbaik.'
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
