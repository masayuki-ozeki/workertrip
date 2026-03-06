// 広島県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "広島市",
    url: "https://www.hiroshima-hirobiro.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "中四国地方最大の都市。平和記念公園・原爆ドームなど世界的観光資源を有しながら、広大・近大など大学と連携したコワーキング環境が充実。IT企業・スタートアップの集積も進む。"
  },
  {
    name: "呉市",
    url: "https://www.city.kure.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "海軍の街・呉市。大和ミュージアムや大型造船所など産業観光×ワーケーションが特徴。瀬戸内の島々へのアクセス拠点でもある。"
  },
  {
    name: "竹原市",
    url: "https://www.city.takehara.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "たけはら町並み保存地区を有する竹原市。江戸時代の白壁の街並みと瀬戸内の海が広がる、情緒あふれるワーケーション環境。"
  },
  {
    name: "三原市",
    url: "https://www.city.mihara.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "瀬戸内の島々に囲まれた三原市。たこ料理と海の幸が楽しめる観光×ワーケーション環境。山陽新幹線の停車駅があり交通アクセスも良好。"
  },
  {
    name: "尾道市",
    url: "https://www.city.onomichi.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "坂の街・映画の街として全国的に有名な尾道市。しまなみ海道の起点で、古民家リノベーションのコワーキングスペースが集積。サイクリング×テレワークの聖地として人気急上昇中。"
  },
  {
    name: "福山市",
    url: "https://www.city.fukuyama.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "福山市ワーケーション誘致助成（交通費・滞在費）",
      amount: "交通費・滞在費の一部を助成",
      period: "2025年度実績あり（最新は公式確認要）",
      url: "https://www.travelvoice.jp/workation/20240520-10727/",
      description: "医療版ワーケーションなど独自の取り組みを展開。県東部の拠点都市として様々なワーケーション誘致施策を実施。"
    },
    description: "広島県第2の都市・福山市。薔薇の街として知られ、医療版ワーケーションなど全国初の取り組みを展開。新幹線停車駅があり関西圏からもアクセス良好。"
  },
  {
    name: "府中市",
    url: "https://www.city.fuchu.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "家具の産地として知られる府中市。芦田川沿いの自然環境と職人文化が共存するワーケーション環境。"
  },
  {
    name: "三次市",
    url: "https://www.city.miyoshi.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "霧の海・鵜飼で知られる三次市。中国山地の山間盆地でのリトリート型ワーケーションが体験できる。"
  },
  {
    name: "庄原市",
    url: "https://www.city.shobara.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "比婆道後帝釈国定公園を有する庄原市。中国山地の豊かな自然環境でのリトリートワーケーションが人気。"
  },
  {
    name: "大竹市",
    url: "https://www.city.otake.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "化学工業都市・大竹市。小瀬川河口の自然環境と産業観光を組み合わせたワーケーション体験ができる。"
  },
  {
    name: "東広島市",
    url: "https://www.city.higashihiroshima.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "広島大学のキャンパスタウン・東広島市。酒造りで有名な西条エリアにはコワーキングスペースも整備。学術×産業が融合したワーケーション環境。"
  },
  {
    name: "廿日市市",
    url: "https://www.city.hatsukaichi.hiroshima.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "世界遺産・宮島（厳島神社）を有する廿日市市。宮島口エリアにはコワーキングスペースが整備され、観光×仕事を両立できる注目のワーケーション地。"
  },
  {
    name: "安芸高田市",
    url: "https://www.akitakata.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "毛利元就ゆかりの安芸高田市。中国山地の山間にある農村環境でのリトリート型ワーケーションが体験できる。"
  },
  {
    name: "江田島市",
    url: "https://www.city.etajima.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "瀬戸内海の離島・江田島市。農漁業と海軍兵学校跡地が共存するユニークな島暮らし×ワーケーション環境。"
  },
  {
    name: "府中町",
    url: "https://www.town.fuchu.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "マツダ本社を有する府中町。広島市に隣接する住宅都市として都市型テレワーク環境が充実。"
  },
  {
    name: "海田町",
    url: "https://www.town.kaita.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "広島市東部に隣接する海田町。自衛隊海田市駐屯地もあり、都市近郊のテレワーク環境として機能。"
  },
  {
    name: "熊野町",
    url: "https://www.town.kumano.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "筆の産地として世界的に知られる熊野町。伝統工芸×ものづくり体験と組み合わせたユニークなワーケーション環境。"
  },
  {
    name: "坂町",
    url: "https://www.town.saka.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "広島湾に面した坂町。海岸沿いのワーケーション環境と広島市へのアクセスの良さが魅力。"
  },
  {
    name: "安芸太田町",
    url: "https://www.akiota.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "西中国山地国定公園を有する安芸太田町。温井ダム・深入山など豊かな自然環境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "北広島町",
    url: "https://www.town.kitahiroshima.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "芸北の豊かな自然を有する北広島町。雪舟が描いた天空の城・八幡高原など絶景スポットでのリトリート型ワーケーションが特徴。"
  },
  {
    name: "大崎上島町",
    url: "https://www.town.osakikamijima.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "瀬戸内海に浮かぶ離島・大崎上島町。農漁業と学校教育で知られる島でのスローライフ×ワーケーションが体験できる。"
  },
  {
    name: "世羅町",
    url: "https://www.town.sera.hiroshima.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "花と農業の町・世羅町。世羅高原農場など花畑と農村景観の中でのワーケーション体験ができる。"
  },
  {
    name: "神石高原町",
    url: "https://www.jinsekikogen.lg.jp/",
    workationUrl: "https://www.hiroshima-hirobiro.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "高原の農村・神石高原町。神石牛や蒜山和牛など畜産が盛んな高原地帯でのリトリートワーケーションが体験できる。"
  }
];
