// 神奈川県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "横浜市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "神奈川県庁所在地。神奈川県西部ワーケーション情報サイトと連携。みなとみらいエリアにコワーキングスペースが充実しており、都市型テレワーク環境が整備。"
  },
  {
    name: "川崎市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "東京に隣接する川崎市。先進的なIT産業集積を活かしたコワーキングスペースが充実した都市型テレワーク環境。"
  },
  {
    name: "相模原市",
    url: "https://www.city.sagamihara.kanagawa.jp/kankou/1026674/1026704/1026705/1028675.html",
    workationUrl: "https://www.city.sagamihara.kanagawa.jp/kankou/1026674/1026704/1026705/1028675.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "相模原市ワーケーション推進事業として、中山間地域（津久井・相模湖・藤野地区）でのワーケーション商品造成・環境整備に補助金を交付。専用ページあり。",
    subsidyInfo: {
      name: "相模原市ワーケーション推進事業補助金",
      amount: "上限75万円",
      period: "令和8年3月31日まで",
      url: "https://www.city.sagamihara.kanagawa.jp/kankou/1026674/1026704/1026705/1028675.html",
      description: "ワーケーションプラン造成：補助率2/3、リモートワーク環境整備：補助率3/4。中山間地域（津久井・相模湖・藤野地区）での取組が対象。"
    }
  },
  {
    name: "横須賀市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "三浦半島の港町・横須賀市。東京湾を望む絶景とのどかな里山環境でのワーケーションが楽しめる。"
  },
  {
    name: "平塚市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "湘南の平塚市。相模川と湘南海岸の豊かな自然環境でのワーケーションが可能。コワーキングスペースも整備。"
  },
  {
    name: "鎌倉市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "古都・鎌倉。歴史的景観と海沿いの自然環境が融合した人気のワーケーションスポット。コワーキングスペースも複数整備されている。"
  },
  {
    name: "藤沢市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "江の島・湘南の玄関口。海沿いのリゾート環境でのワーケーションが人気。コワーキングスペースも充実。"
  },
  {
    name: "小田原市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "小田原城を擁する城下町。神奈川西部ワーケーションの中心地として注目。箱根・湯河原へのアクセス良好。"
  },
  {
    name: "茅ヶ崎市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "湘南のマリンリゾート。サザンオールスターズの聖地として有名。海沿いのカフェやコワーキングスペースでのワーケーションが人気。"
  },
  {
    name: "逗子市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "逗子海岸と葉山に近い逗子市。首都圏から海と自然を楽しむワーケーション先として人気が高い。"
  },
  {
    name: "三浦市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "三浦半島の最南端。三浦海岸や城ヶ島の絶景の中でのワーケーションが楽しめる。農業・漁業体験との組み合わせも人気。"
  },
  {
    name: "秦野市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "丹沢山地の麓・秦野市。水無川と自然豊かな環境でのワーケーション体験が可能。"
  },
  {
    name: "厚木市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "神奈川内陸部の中心都市・厚木市。相模川沿いの自然環境とコワーキングスペースが共存したワーケーション環境。"
  },
  {
    name: "大和市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "都市型テレワーク環境が充実する大和市。コワーキングスペースが複数整備されている。"
  },
  {
    name: "伊勢原市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "大山参りで有名な伊勢原市。丹沢の山麓でのワーケーション体験が可能。"
  },
  {
    name: "海老名市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "相鉄・小田急・JR各線が通る海老名市。交通利便性の高い環境でのテレワーク推進中。"
  },
  {
    name: "座間市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "座間市のひまわり畑が有名。都市近郊での田園環境を活かしたワーケーション体験が可能。"
  },
  {
    name: "南足柄市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "足柄山の麓・南足柄市。金太郎ゆかりの地として有名。神奈川西部の自然環境でのワーケーション推進。"
  },
  {
    name: "綾瀬市",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "工業都市・綾瀬市。先進的な産業環境とコワーキングスペースが整備されたテレワーク環境。"
  },
  {
    name: "葉山町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "御用邸がある高級リゾート地・葉山町。三浦半島の自然と海を望む絶景の中でのワーケーションが人気。"
  },
  {
    name: "寒川町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "相模川沿いの寒川町。寒川神社で有名。工業都市として発展しており、テレワーク環境も整備。"
  },
  {
    name: "大磯町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "湘南の歴史ある保養地・大磯町。海沿いの風光明媚な環境でのワーケーション体験が可能。"
  },
  {
    name: "二宮町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "吾妻山のふもと・二宮町。菜の花畑が有名で、湘南の温暖な気候の中でのワーケーションが楽しめる。"
  },
  {
    name: "中井町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "丹沢の麓の中井町。農業と自然が調和した農村環境でのワーケーション体験ができる。"
  },
  {
    name: "大井町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "足柄山地の東麓・大井町。酒匂川沿いの自然環境でのワーケーション体験が可能。"
  },
  {
    name: "松田町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "松田山のハーブ庭園が有名。西丹沢の山麓でのワーケーション体験が可能。"
  },
  {
    name: "山北町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "丹沢湖がある山北町。豊かな自然と温泉の中でのワーケーション体験が楽しめる。"
  },
  {
    name: "開成町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "あじさいの里・開成町。富士山を望む絶景と自然環境でのワーケーション体験が可能。"
  },
  {
    name: "箱根町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "温泉リゾート・箱根。富士山を望む絶景と温泉でのワーケーションが人気。コワーキングスペースも整備されている。"
  },
  {
    name: "真鶴町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "三浦半島の外れ・真鶴町。海沿いの風光明媚な環境でのワーケーション体験が可能。移住者も増加中。"
  },
  {
    name: "湯河原町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "「万葉集」にも詠まれた温泉地・湯河原町。熱海に隣接し、文人墨客に愛された温泉ワーケーション環境。"
  },
  {
    name: "愛川町",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "中津川沿いの愛川町。丹沢の自然と工業都市の一面を持ち、テレワーク環境が整備されている。"
  },
  {
    name: "清川村",
    url: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    workationUrl: "https://www.pref.kanagawa.jp/docs/y2w/kenseipj/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "神奈川唯一の村・清川村。宮ヶ瀬湖と丹沢の豊かな自然環境の中でのワーケーション体験ができる。"
  }
];
