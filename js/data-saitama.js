// 埼玉県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "さいたま市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "県庁所在地。大都市のため主にサテライトオフィス利用が中心。周辺市町村へのワーケーションの拠点都市としても機能する。"
  },
  {
    name: "川越市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "小江戸と呼ばれる蔵の街・川越市。歴史的景観とコワーキングスペースが共存するユニークなワーケーション環境。"
  },
  {
    name: "熊谷市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "北部の中心都市。荒川沿いの自然と都市機能が融合したワーケーション環境。"
  },
  {
    name: "川口市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "東京に隣接する川口市。産業都市としてコワーキングスペースが整備。"
  },
  {
    name: "行田市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "古代ロマン・古墳の街。のどかな田園風景の中でのワーケーション体験ができる。"
  },
  {
    name: "秩父市",
    url: "https://chichibu-iju.com/8308.html",
    workationUrl: "https://chichibu-iju.com/",
    type: "dedicated",
    hasSubsidy: false,
    description: "秩父路の大自然と温泉の中でのワーケーション推進地。秩父移住サイトにワーケーション情報を掲載。若手経営者との交流プログラムも実施。コワーキングスペース「えらべるしごと場」が充実。"
  },
  {
    name: "飯能市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "宮沢湖・天覧山など自然豊かな飯能市。ムーミンバレーパークも有し、観光×ワークが融合したワーケーション環境。"
  },
  {
    name: "本庄市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "北部の城下町・本庄市。早稲田大学本庄キャンパスもあり、学術的な環境でのワーケーションが可能。"
  },
  {
    name: "東松山市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "比企地域の中心都市・東松山市。農村景観の中でのテレワーク・ワーケーション環境が整備。"
  },
  {
    name: "春日部市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "クレヨンしんちゃんの街・春日部市。庄和地区の農村環境でのワーケーション推進中。"
  },
  {
    name: "狭山市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "お茶の産地・狭山市。狭山丘陵の豊かな緑の中でのワーケーション環境が整備。"
  },
  {
    name: "羽生市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "キャラクタースタジアムで知られる羽生市。利根川沿いの自然環境を活かしたワーケーション推進中。"
  },
  {
    name: "鴻巣市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "花の産地・鴻巣市。荒川沿いの田園風景の中でのワーケーション体験が可能。"
  },
  {
    name: "深谷市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "渋沢栄一ゆかりの深谷市。ネギの産地として知られる農業地帯でのワーケーション体験も可能。"
  },
  {
    name: "上尾市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "さいたま市に隣接する上尾市。都市近郊でのテレワーク環境が整備。"
  },
  {
    name: "草加市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "草加せんべいの街。草加松原など自然環境を活かしたワーケーション環境。"
  },
  {
    name: "越谷市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "大型商業施設が充実する越谷市。コワーキングスペースも複数整備されテレワーク環境が良好。"
  },
  {
    name: "蕨市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "日本一面積が小さい市・蕨市。東京アクセス抜群でテレワーク環境が整備。"
  },
  {
    name: "戸田市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "ボート競技の街・戸田市。荒川沿いの環境でのテレワーク・ワーケーション体験が可能。"
  },
  {
    name: "入間市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "お茶の産地・入間市。狭山茶のふるさとで、豊かな緑の中でのワーケーションが楽しめる。"
  },
  {
    name: "朝霞市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "東京近郊の朝霞市。コワーキングスペースも整備され、都市型テレワーク環境が充実。"
  },
  {
    name: "志木市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "荒川・新河岸川沿いの志木市。自然環境と都市利便性が融合したテレワーク環境。"
  },
  {
    name: "和光市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "Honda・理化学研究所などが立地。研究開発都市としてのテレワーク環境が充実。"
  },
  {
    name: "新座市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "東京練馬区に隣接する新座市。緑豊かな環境でのテレワーク・ワーケーションが可能。"
  },
  {
    name: "桶川市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "中山道の宿場町・桶川市。荒川沿いの自然環境でのワーケーション体験ができる。"
  },
  {
    name: "久喜市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "利根川沿いの農村都市。久喜市の豊かな自然環境を活かしたワーケーション推進中。"
  },
  {
    name: "北本市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "荒川・鴻沼自然公園が豊かな北本市。緑豊かな環境でのテレワーク推進中。"
  },
  {
    name: "富士見市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "富士山が望める富士見市。難波田城公園など緑豊かな環境でのワーケーション体験が可能。"
  },
  {
    name: "三郷市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "東京に隣接する三郷市。吉川美南など都市近郊でのテレワーク環境が整備されている。"
  },
  {
    name: "蓮田市",
    url: "https://www.pref.saitama.lg.jp/b0108/news/",
    workationUrl: "https://www.pref.saitama.lg.jp/b0108/news/",
    type: "portal",
    hasSubsidy: false,
    description: "農業と住宅地が共存する蓮田市。田園風景の中でのテレワーク・ワーケーション推進中。"
  }
];
