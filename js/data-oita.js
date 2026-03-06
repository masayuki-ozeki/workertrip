// 大分県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "大分市",
    url: "https://www.city.oita.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "県庁所在地・大分市。温泉都市としても知られ、近郊に別府・湯布院を擁するワーケーション拠点都市。コワーキングスペースも複数整備。大分空港・新幹線利用でアクセス良好。"
  },
  {
    name: "別府市",
    url: "https://www.city.beppu.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "ワーケーション利用促進支援事業補助金",
      amount: "1人あたり¥16,000（定額）",
      period: "令和7年度（2025年4月1日〜）",
      url: "https://hojyokin-portal.jp/subsidies/66302",
      description: "別府市周辺でのワーケーション利用を促進する補助金。別府ワーケーションサイト（beppu-workation.jp）でプログラム詳細を確認。"
    },
    description: "「別府ワーケーション（BEPPU YUKEMURI WORKATION）」を展開する日本一の温泉都市。コンシェルジュ相談無料で、温泉×仕事のユニークな体験を提供。別府ワーケーションWEEKを定期開催し、全国から参加者が集まる。"
  },
  {
    name: "中津市",
    url: "https://www.city-nakatsu.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "黒田官兵衛ゆかりの中津城・耶馬溪など観光資源が豊富な中津市。別府ワーケーションWEEKとのコラボ開催実績もあり、歴史×自然のワーケーション体験が可能。からあげの聖地としても有名。"
  },
  {
    name: "日田市",
    url: "https://www.city.hita.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "九州の小京都・日田市。隈研吾設計の図書館など文化施設も充実。豆田町の江戸情緒あふれる街並みと三隈川のアユ釣りを楽しみながらのワーケーションが魅力。"
  },
  {
    name: "佐伯市",
    url: "https://www.city.saiki.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "豊後水道の豊かな海産物で知られる佐伯市。リアス式海岸の絶景と豊富な海の幸を堪能しながら仕事ができるワーケーション環境。県内最大面積を誇る自然豊かな市。"
  },
  {
    name: "臼杵市",
    url: "https://www.city.usuki.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "国宝・臼杵石仏と白壁の城下町・臼杵市。歴史的景観の中でのワーケーション体験が魅力。醤油・みそ醸造の伝統産業も盛んで、地域の食文化を楽しみながら働ける。"
  },
  {
    name: "津久見市",
    url: "https://www.city.tsukumi.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "みかんの産地・津久見市。豊後水道を望む山と海の景観の中でのワーケーション体験が可能。コンパクトな漁港町ならではのコミュニティとの交流も魅力。"
  },
  {
    name: "竹田市",
    url: "https://www.city.taketa.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "「瀧廉太郎のふるさと」竹田市。岡城跡や祖母・傾山系の大自然が広がり、滝と渓谷を巡りながらのワーケーション体験が人気。くじゅう高原へのアクセス拠点でもある。"
  },
  {
    name: "豊後高田市",
    url: "https://www.city.bungotakada.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "昭和の街並みを復元した「昭和の町」で有名な豊後高田市。国東半島・六郷満山の仏教文化遺跡群にも近く、独自の歴史・文化の中でのワーケーション体験が可能。"
  },
  {
    name: "杵築市",
    url: "https://www.city.kitsuki.lg.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "全国でも珍しい「サンドイッチ型城下町」の地形が残る杵築市。国東半島の付け根に位置し、別府・大分市へのアクセスも良好。歴史的な城下町の風情を活かしたワーケーション体験が人気。"
  },
  {
    name: "宇佐市",
    url: "https://www.city.usa.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "全国八幡宮の総本社・宇佐神宮がある宇佐市。院内石橋群など歴史遺産も豊富で、精神的な充電をしながら仕事に取り組むワーケーション体験が可能。安心院温泉でのリラックスも。"
  },
  {
    name: "豊後大野市",
    url: "https://www.city.bungoono.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "稲積水中鍾乳洞・原尻の滝など独特の地形が広がるジオパーク認定地域・豊後大野市。大自然の造形に囲まれた非日常空間でのワーケーション体験が可能。"
  },
  {
    name: "由布市",
    url: "https://www.city.yufu.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "由布岳と湯布院温泉で知られる全国屈指のリゾート地・由布市。高級旅館が立ち並ぶ湯布院エリアでの贅沢なワーケーション体験が可能。アート・映画・音楽と温泉が融合した唯一無二の環境。"
  },
  {
    name: "国東市",
    url: "https://www.city.kunisaki.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "六郷満山文化発祥の地・国東市。大分空港に近く、アクセス良好。仁聞菩薩の修行の地として知られる神秘的な山岳寺院群の中でのワーケーション体験が特別な感動を与える。"
  },
  {
    name: "姫島村",
    url: "https://www.vill.himeshima.lg.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "大分県唯一の離島・姫島村。アサギマダラの中継地として有名な自然豊かな島。フェリーでのアクセスが必要な非日常的な環境でのワーケーション体験ができる稀有な場所。"
  },
  {
    name: "日出町",
    url: "https://www.town.hiji.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "城下かれいで有名な日出町。別府湾を望む景観と落ち着いた住宅環境が融合した日出町は、別府・大分市への通勤も可能なワーケーションベースとして注目。"
  },
  {
    name: "九重町",
    url: "https://www.town.kokonoe.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "くじゅう連山・大吊橋など雄大な自然が広がる九重町。日本一長い人道吊橋「九重夢大吊橋」など観光名所も多く、高原の澄んだ空気の中でのワーケーション体験が人気。"
  },
  {
    name: "玖珠町",
    url: "https://www.town.kusu.oita.jp/",
    workationUrl: "https://beppu-workation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "童話の里・玖珠町。独特のメサ・ビュートと呼ばれるテーブル状の地形が特徴的な自然環境。伐株山から望む絶景の中でのワーケーション体験が可能。"
  }
];
