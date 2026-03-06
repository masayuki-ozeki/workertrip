// 島根県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "松江市",
    url: "https://www.city.matsue.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "dedicated",
    hasSubsidy: false,
    description: "国際文化観光都市・松江市。宍道湖畔のシジミ漁と温泉、松江城を擁する水の都でのワーケーション。「松江式ワーケーション」として都市部向けに積極的なプログラムを展開。コワーキングスペースも充実。"
  },
  {
    name: "浜田市",
    url: "https://www.city.hamada.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "石見地方の中心都市・浜田市。日本海を望む絶景と海鮮グルメが魅力。石見神楽の本場でもあり、文化体験と仕事を組み合わせたワーケーション体験が可能。"
  },
  {
    name: "出雲市",
    url: "https://www.city.izumo.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "出雲大社・宍道湖など有数の観光地・出雲市。神話の地でのワーケーションは精神的リフレッシュにも最適。産業も盛んで、ビジネスとリラックスを両立できる環境が充実。"
  },
  {
    name: "益田市",
    url: "https://www.city.masuda.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "島根県最西端の益田市。萬福寺や雪舟の里など歴史文化が豊かで、日本海沿岸の自然と組み合わせたワーケーション体験ができる。"
  },
  {
    name: "大田市",
    url: "https://www.city.ohda.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・石見銀山のある大田市。銀山遺跡周辺に古民家を活用したワークスペースが整備されており、歴史を感じながら働ける唯一無二の環境。"
  },
  {
    name: "安来市",
    url: "https://www.city.yasugi.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "足立美術館・安来節で有名な安来市。日本庭園と中海の自然を眺めながらのワーケーションは特別な体験。どじょう掬いまんじゅうで知られる食文化も楽しめる。"
  },
  {
    name: "江津市",
    url: "https://www.city.gotsu.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "江の川が日本海に注ぐ江津市。移住・定住促進に積極的で、ワーケーション受け入れ体制も整備されつつある。海と川の景観の中での仕事と休暇の融合が可能。"
  },
  {
    name: "雲南市",
    url: "https://www.city.unnan.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "地域自主組織が充実する雲南市。農村コミュニティとの交流ができる体験型ワーケーションが人気。吉田村の鍛治文化など独自の地域資源を活かしたプログラムも。"
  },
  {
    name: "奥出雲町",
    url: "https://www.town.okuizumo.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: true,
    subsidyInfo: {
      name: "しまねUIターンテレワーク支援事業",
      amount: "移住者向け通信費等を支援",
      period: "令和7年度",
      url: "https://www.pref.shimane.lg.jp/admin/region/chiiki/UI_turn/uitelework.html",
      description: "島根県外から移住してテレワークを行う方への支援。通信環境整備費・通信費等を補助。"
    },
    description: "仁多米・奥出雲たたら製鉄で知られる奥出雲町。日本の原風景ともいえる里山での仕事体験が魅力。たたら製鉄の歴史文化に触れながら働ける独自のワーケーション体験を提供。"
  },
  {
    name: "飯南町",
    url: "https://www.town.iinan.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "赤名の山々に囲まれた農村・飯南町。過疎化対策として移住・ワーケーション受け入れに積極的。澄んだ空気と静寂の中で集中して仕事に取り組める里山環境。"
  },
  {
    name: "川本町",
    url: "https://www.town.kawamoto.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "江の川中流に位置する川本町。「ゆずのまち」として知られ、農業体験と組み合わせたワーケーション体験が可能。三江線廃線後も地域の魅力を生かした誘客活動を推進。"
  },
  {
    name: "美郷町",
    url: "https://www.town.shimane-misato.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "島根県邑智郡の美郷町。豊かな森と清流・粕渕川の自然環境でのワーケーション体験が可能。移住定住促進に積極的な町で、ワーケーターの受け入れ体制も整備中。"
  },
  {
    name: "邑南町",
    url: "https://www.town.ohnan.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "dedicated",
    hasSubsidy: false,
    description: "「日本一の農村」を目指す邑南町。農業×ワーケーションの先進地で、農場でのテレワークや有機農業体験プログラムが充実。「A級グルメ」を掲げ食の魅力も高い。しまねうるおいワーケーション特集記事あり。"
  },
  {
    name: "津和野町",
    url: "https://www.town.tsuwano.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "「山陰の小京都」と呼ばれる美しい城下町・津和野町。白壁と錦鯉が泳ぐ掘割の街並みを歩いた後、静寂なワーク環境で仕事に集中できる。訪日外国人にも人気の観光地。"
  },
  {
    name: "吉賀町",
    url: "https://www.town.yoshika.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "島根県最南端に位置する吉賀町。六日市温泉など温泉が豊富で、山間の静寂な環境でのワーケーション体験ができる。高津川水系の清流も魅力。"
  },
  {
    name: "海士町",
    url: "https://www.town.ama.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "dedicated",
    hasSubsidy: false,
    description: "「ないものはない」島・海士町（中ノ島）。離島ならではの豊かな自然と食文化、地域コミュニティの中でのディープなワーケーション体験が可能。Iターン者が多く、多様なバックグラウンドを持つ仲間との交流も魅力。"
  },
  {
    name: "西ノ島町",
    url: "https://www.town.nishinoshima.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "隠岐諸島の西ノ島。国賀海岸の断崖絶壁など雄大な自然が広がる離島でのワーケーションは非日常体験そのもの。豊かな海産物と人情味あふれる島暮らしを体験できる。"
  },
  {
    name: "知夫村",
    url: "https://www.vill.chibu.lg.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "隠岐郡最小の村・知夫村（知夫里島）。赤壁・赤ハゲ山など独特の景観を持つ秘境の離島。完全なデジタルデトックス環境でのワーケーション体験ができる稀有な場所。"
  },
  {
    name: "隠岐の島町",
    url: "https://www.town.okinoshima.shimane.jp/",
    workationUrl: "https://www.kankou-shimane.com/uruoi-workation/",
    type: "portal",
    hasSubsidy: false,
    description: "隠岐諸島最大の島・隠岐の島（島後）。世界ジオパークに認定された豊かな自然を誇り、牧場や神社仏閣など歴史文化も充実。離島ならではの解放感の中でのワーケーションが人気。"
  }
];
