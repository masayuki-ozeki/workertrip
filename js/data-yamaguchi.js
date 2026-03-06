// 山口県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "下関市",
    url: "https://www.city.shimonoseki.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "本州最西端の関門海峡の街・下関市。フグ・カニなど豊富な海の幸と歴史的景観の中でのワーケーション体験が可能。関門トンネルで九州とも繋がるアクセス良好な拠点都市。"
  },
  {
    name: "宇部市",
    url: "https://www.city.ube.yamaguchi.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "Ujiターン・やまぐち創生テレワーク移住補助金",
      amount: "世帯100万円・単身60万円（移住支援金）",
      period: "令和7年度",
      url: "https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1018354.html",
      description: "東京圏から山口県へ移住し要件を満たした方に支給。テレワーク要件あり。山口県と連携して実施。"
    },
    description: "宇部興産の企業城下町から変貌を遂げた文化都市・宇部市。ときわ公園のモノレール彫刻が有名で、アート×ワーケーションの独自スタイルを発信。テレワーク移住支援補助金対応。"
  },
  {
    name: "山口市",
    url: "https://www.city.yamaguchi.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "山口市農山村テレワーク・ワーケーション環境整備事業補助金",
      amount: "施設整備費補助",
      period: "令和7年度",
      url: "https://yamaguchi-workation.com/news/?id=2325",
      description: "農山村地域でのテレワーク・ワーケーション環境整備を支援。農村での受け入れ施設改修等に活用可能。"
    },
    description: "県庁所在地・山口市。「山口型ワーケーション」推進の中心地で、総合案内サイト「yamaguchi-workation.com」の拠点。瑠璃光寺五重塔など歴史名所を持ちながら、農山村でのテレワーク支援補助金も実施。"
  },
  {
    name: "萩市",
    url: "https://www.city.hagi.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・萩城下町の歴史都市。明治維新の原点ともいえる地で、歴史的景観の中でのワーケーションは感慨深い体験。コワーキングスペースも整備されつつある。"
  },
  {
    name: "防府市",
    url: "https://www.city.hofu.yamaguchi.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "防府天満宮と周防国の古都・防府市。瀬戸内海を望む地で、歴史文化と現代のビジネスが融合したワーケーション環境。山口型ワーケーションプログラム対応エリア。"
  },
  {
    name: "下松市",
    url: "https://www.city.kudamatsu.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "「幸の都」と呼ばれる下松市。日立製作所の企業城下町で、ものづくり産業と自然が共存。笠戸島など瀬戸内の島々でのワーケーション体験も可能。"
  },
  {
    name: "岩国市",
    url: "https://www.city.iwakuni.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "日本三名橋・錦帯橋で有名な岩国市。錦川の清流と歴史的景観の中でのワーケーションが魅力。岩国基地のある国際的な環境で、多様な文化に触れながら仕事ができる。"
  },
  {
    name: "光市",
    url: "https://www.city.hikari.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "室積・虹ヶ浜など美しいビーチを持つ光市。瀬戸内海の穏やかな気候とリゾート感覚でのワーケーション体験が可能。みずき野の閑静な住宅地でのテレワーク環境も充実。"
  },
  {
    name: "長門市",
    url: "https://www.city.nagato.yamaguchi.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "元乃隅神社・俵山温泉など観光資源が豊富な長門市。日本海の絶景を望みながらのワーケーションは特別な体験。湯本温泉での温泉療養×テレワークも人気。"
  },
  {
    name: "柳井市",
    url: "https://www.city.yanai.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "白壁の町並みと金魚ちょうちんが有名な柳井市。瀬戸内海の多島美を望む静かな城下町でのワーケーション体験が可能。周防大島などへのアクセス拠点としても機能。"
  },
  {
    name: "美祢市",
    url: "https://www.city.mine.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "日本最大のカルスト台地・秋吉台と秋芳洞を擁する美祢市。大自然の地下鍾乳洞に隣接した唯一無二のワーケーション体験が可能。山口型ワーケーション中部エリアの中心。"
  },
  {
    name: "周南市",
    url: "https://www.city.shunan.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "石油化学コンビナートが連なる工業都市・周南市。徳山動物園や瀬戸内海の自然とのコントラストが独特のワーケーション環境を生み出している。コワーキングスペースも整備。"
  },
  {
    name: "山陽小野田市",
    url: "https://www.city.sanyo-onoda.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "山口県東部の産業都市・山陽小野田市。宇部空港に近く、アクセス良好。瀬戸内海に面したリゾート環境でのワーケーション体験が可能。"
  },
  {
    name: "周防大島町",
    url: "https://www.town.suo-oshima.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "dedicated",
    hasSubsidy: false,
    description: "「瀬戸内のハワイ」とも呼ばれる周防大島。温暖な気候とみかん畑が広がる島でのワーケーションは別格の体験。古民家シェアオフィスやゲストハウスも充実し、島暮らしを体験しながら仕事ができる。"
  },
  {
    name: "和木町",
    url: "https://www.town.waki.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "山口県最小の町・和木町。岩国市に隣接し、コンビナートと自然が共存する環境。瀬戸内海に面した静かな町でのテレワーク環境が整備されつつある。"
  },
  {
    name: "上関町",
    url: "https://www.town.kaminoseki.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "「瀬戸内の真珠」と呼ばれる上関町。長島・祝島など離島を含む美しい瀬戸内の景観の中でのワーケーション体験が可能。豊かな漁業文化と静かな島時間を楽しめる。"
  },
  {
    name: "田布施町",
    url: "https://www.town.tabuse.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "大正天皇の母方の生誕地・田布施町。静かな農村環境と瀬戸内の自然の中でのワーケーション体験ができる。柳井市へのアクセスも良好。"
  },
  {
    name: "平生町",
    url: "https://www.town.hirao.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "平生湾と山々に囲まれた平生町。牡蠣養殖が盛んな漁村でのワーケーション体験が可能。瀬戸内の穏やかな海と農業風景の中でのんびりと仕事ができる。"
  },
  {
    name: "阿武町",
    url: "https://www.town.abu.lg.jp/",
    workationUrl: "https://yamaguchi-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "日本海に面した小さな漁村・阿武町。萩市に隣接し、観光資源も豊富。日本海の荒波と漁業文化を体感しながらのワーケーション体験が可能。過疎対策として移住・ワーケーション受け入れを推進。"
  }
];
