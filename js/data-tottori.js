// 鳥取県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "鳥取市",
    url: "https://www.city.tottori.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "県庁所在地。鳥取砂丘・白兎海岸など豊かな自然と都市機能が共存。砂丘横のコワーキングスペース「SAND BOX TOTTORI」が有名。まちづくりワーケーションプログラム実施地。"
  },
  {
    name: "米子市",
    url: "https://www.city.yonago.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "山陰の商都・米子市。大山の麓に位置し、中海・弓ヶ浜の自然を活かしたワーケーション環境。国際交流都市としてコワーキングスペースも充実。"
  },
  {
    name: "倉吉市",
    url: "https://www.city.kurayoshi.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "白壁土蔵群の歴史的景観が残る倉吉市。三朝温泉も近く、温泉×テレワークのワーケーション体験ができる中部の拠点都市。"
  },
  {
    name: "境港市",
    url: "https://www.city.sakaiminato.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "水木しげるロードで有名な港町。日本海・中海を望む絶景の中でのワーケーション体験が可能。漁港の活気ある朝市と仕事を組み合わせた体験型プログラムも。"
  },
  {
    name: "岩美町",
    url: "https://www.town.iwami.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "山陰海岸ジオパーク・浦富海岸が美しい岩美町。透明度の高い日本海を眺めながら働けるワーケーション環境が整備されつつある。"
  },
  {
    name: "若桜町",
    url: "https://www.town.wakasa.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "若桜鉄道と木造駅舎が魅力の山間の町。豊かな自然と伝統文化の中でのワーケーション体験ができる。里山暮らし体験と組み合わせたプログラムも展開。"
  },
  {
    name: "智頭町",
    url: "https://www.town.chizu.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "杉の産地・智頭町。地域おこし協力隊の受け入れや移住促進に積極的で、ワーケーション受け入れ環境が充実。古民家活用のシェアオフィスも注目。"
  },
  {
    name: "八頭町",
    url: "https://www.town.yazu.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "郡家城下町の歴史を持つ八頭町。因幡の郷土料理や農業体験と組み合わせたワーケーション体験ができる。鳥取自動車道利用で鳥取市からもアクセス良好。"
  },
  {
    name: "三朝町",
    url: "https://www.town.misasa.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "世界屈指のラジウム温泉・三朝温泉の町。温泉療養×テレワークの独自ワーケーション体験が可能。世界遺産・三徳山三仏寺のパワースポットも近接。"
  },
  {
    name: "湯梨浜町",
    url: "https://www.town.yurihama.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "東郷湖と日本海に挟まれたリゾート地・湯梨浜町。はわい温泉・東郷温泉などの温泉と海水浴場が近く、リラックスしたワーケーション環境を提供。"
  },
  {
    name: "琴浦町",
    url: "https://www.town.kotoura.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "赤碕漁港など日本海沿岸の美しい景観が魅力の琴浦町。農漁業体験と組み合わせたワーケーションプログラムを展開中。"
  },
  {
    name: "北栄町",
    url: "https://www.town.hokuei.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "「名探偵コナン」の作者・青山剛昌のふるさと。コナンの聖地巡礼と仕事を組み合わせた独自のワーケーション体験が可能。"
  },
  {
    name: "日吉津村",
    url: "https://www.village.hiezu.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "鳥取県最小の村・日吉津村。米子市に隣接し、アクセス良好。大型ショッピングセンターもあり、利便性の高いワーケーション環境。"
  },
  {
    name: "大山町",
    url: "https://www.town.daisen.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: true,
    subsidyInfo: {
      name: "ワーケーション施設環境整備事業費補助金",
      amount: "上限150万円（補助率50%）",
      period: "令和7年度",
      url: "https://www.pref.tottori.lg.jp/303088.htm",
      description: "ワーケーション施設の改修費を支援。県外の企業人やフリーランス向けの施設整備に活用可能。"
    },
    description: "中国地方最高峰・大山の麓に広がる大山町。スキーリゾートや登山、牧場など四季折々の自然を満喫しながら働けるワーケーション環境が整備。「大山Gビレッジ」など先進的な受け入れ拠点も。"
  },
  {
    name: "南部町",
    url: "https://www.town.nanbu.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "西伯郡南部町。日野川沿いの農村風景の中でのワーケーション体験が可能。とっとり梨やフルーツ農業体験と組み合わせたプログラムも。"
  },
  {
    name: "伯耆町",
    url: "https://www.town.hoki.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "大山山麓に広がる伯耆町。農業・酪農が盛んで、農場体験と組み合わせたワーケーション体験ができる。大山の登山口にも近く、アクティビティとの両立が可能。"
  },
  {
    name: "日南町",
    url: "https://www.town.nichinan.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "中国山地の山あいにある日南町。過疎化対策に積極的で、移住・ワーケーション受け入れに力を入れる。自然豊かな環境でデジタルデトックスしながら働ける。"
  },
  {
    name: "日野町",
    url: "https://www.town.hino.lg.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "日野川の源流に位置する日野町。奥日野地域の豊かな自然を活かしたワーケーション体験が可能。星空が美しい山間の静寂な環境で集中して仕事に取り組める。"
  },
  {
    name: "江府町",
    url: "https://www.town.kofu.tottori.jp/",
    workationUrl: "https://www.pref.tottori.lg.jp/291345.htm",
    type: "portal",
    hasSubsidy: false,
    description: "奥大山の清流・日野川源流域にある江府町。鏡ヶ成高原やブナ林など手つかずの自然が残り、自然の中での集中ワーク体験が魅力。"
  }
];
