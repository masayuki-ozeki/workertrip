// 岩手県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 注意: 県公式のワーケーション対応宿泊施設リスト(https://iju.pref.iwate.jp/work/workation/)に各施設情報あり。
//       盛岡広域8市町は令和7年度「滞在型関係人口創出事業」対象。

const municipalitiesData = [
  {
    name: "盛岡市",
    url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
    workationUrl: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "岩手県庁所在地。令和7年度「盛岡広域滞在型関係人口創出事業」の対象地域。ユートランド姫神などのワーケーション対応宿泊施設が充実。",
    subsidyInfo: {
      name: "令和7年度 盛岡広域滞在型関係人口創出事業",
      amount: "交通費最大3万円",
      period: "令和7年度（2025年度）",
      url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
      description: "盛岡広域管内8市町（盛岡市・八幡平市・滝沢市・雫石町・葛巻町・岩手町・紫波町・矢巾町）での滞在型ワーケーションを支援。交通費補助あり。"
    }
  },
  {
    name: "八幡平市",
    url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "dedicated",
    hasSubsidy: true,
    description: "八幡平・安比高原を擁するリゾートエリア。ホテル安比グランド・ROCKY INNなど複数のワーケーション対応宿泊施設あり。令和7年度盛岡広域事業対象。",
    subsidyInfo: {
      name: "令和7年度 盛岡広域滞在型関係人口創出事業",
      amount: "交通費最大3万円",
      period: "令和7年度（2025年度）",
      url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
      description: "盛岡広域管内8市町の一つ。安比高原エリアに宿泊施設が集中。"
    }
  },
  {
    name: "滝沢市",
    url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "dedicated",
    hasSubsidy: true,
    description: "盛岡市に隣接する岩手山麓の都市。令和7年度盛岡広域滞在型関係人口創出事業対象。",
    subsidyInfo: {
      name: "令和7年度 盛岡広域滞在型関係人口創出事業",
      amount: "交通費最大3万円",
      period: "令和7年度（2025年度）",
      url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
      description: "盛岡広域管内8市町の一つ。"
    }
  },
  {
    name: "花巻市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "宮沢賢治の故郷。花巻温泉ホテル群などのワーケーション対応宿泊施設が充実。県の移住定住ポータルに施設情報掲載。"
  },
  {
    name: "北上市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "工業団地と自然が共存する北上市。入畑温泉 瀬目乃湯などのワーケーション対応宿泊施設あり。"
  },
  {
    name: "一関市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・平泉に隣接する南部の拠点都市。厳美渓温泉いつくし園・ホテル松の薫など複数のワーケーション対応施設あり。"
  },
  {
    name: "宮古市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "三陸沿岸の中心都市。浄土ヶ浜パークホテルなどのワーケーション対応宿泊施設あり。"
  },
  {
    name: "大船渡市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "三陸沿岸の港湾都市。震災復興を果たした沿岸地域でのワーケーションが可能。"
  },
  {
    name: "久慈市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "北三陸の拠点都市。琥珀の産地として有名。「あまちゃん」のロケ地としても知られる。"
  },
  {
    name: "遠野市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "民話の里。Lien遠野などのワーケーション対応施設あり。カッパ・ざしきわらしの伝説が残る独特の雰囲気の中でワーケーション可能。"
  },
  {
    name: "釜石市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "三陸の鉄のまち。御箱崎の宿などのワーケーション対応施設あり。震災復興の拠点。"
  },
  {
    name: "奥州市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "農業・工業が盛んな南部の都市。フォレストコテージ奥州などのワーケーション対応施設あり。"
  },
  {
    name: "二戸市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "県北の中心都市。南部鉄器・なんぶかしわなどの伝統が息づく。ワーケーション対応施設情報は県ポータル参照。"
  },
  {
    name: "陸前高田市",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "「奇跡の一本松」で知られる震災復興の象徴的な都市。観光とワーケーションが融合した新しい取り組みが進む。"
  },
  {
    name: "雫石町",
    url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "dedicated",
    hasSubsidy: true,
    description: "岩手山麓の温泉地。雫石プリンスホテル・休暇村岩手網張温泉などのワーケーション対応施設あり。令和7年度盛岡広域事業対象。",
    subsidyInfo: {
      name: "令和7年度 盛岡広域滞在型関係人口創出事業",
      amount: "交通費最大3万円",
      period: "令和7年度（2025年度）",
      url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
      description: "盛岡広域管内8市町の一つ。温泉リゾートでのワーケーション環境が充実。"
    }
  },
  {
    name: "葛巻町",
    url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "dedicated",
    hasSubsidy: true,
    description: "ミルクとワインのまち。風力発電が盛んな環境先進地域。令和7年度盛岡広域滞在型関係人口創出事業対象。",
    subsidyInfo: {
      name: "令和7年度 盛岡広域滞在型関係人口創出事業",
      amount: "交通費最大3万円",
      period: "令和7年度（2025年度）",
      url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
      description: "盛岡広域管内8市町の一つ。"
    }
  },
  {
    name: "紫波町",
    url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "dedicated",
    hasSubsidy: true,
    description: "公民連携のまちづくり「オガールプロジェクト」が全国的に注目。オガールインがワーケーション対応施設として利用可能。令和7年度盛岡広域事業対象。",
    subsidyInfo: {
      name: "令和7年度 盛岡広域滞在型関係人口創出事業",
      amount: "交通費最大3万円",
      period: "令和7年度（2025年度）",
      url: "https://www.pref.iwate.jp/morioka/keiei/1065675/1081891.html",
      description: "盛岡広域管内8市町の一つ。オガールインがワーケーション拠点。"
    }
  },
  {
    name: "平泉町",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・中尊寺金色堂がある歴史的な町。平泉倶楽部・奥州平泉温泉そば庵しづか亭などのワーケーション対応施設あり。"
  },
  {
    name: "岩泉町",
    url: "https://iju.pref.iwate.jp/work/workation/",
    workationUrl: "https://iju.pref.iwate.jp/work/workation/",
    type: "portal",
    hasSubsidy: false,
    description: "龍泉洞がある沿岸内陸部の町。ふれあいらんど岩泉コテージ村がワーケーション対応施設として登録。"
  }
];
