// 群馬県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "前橋市",
    url: "https://www.city.maebashi.gunma.jp/soshiki/sangyokeizai/sangyoseisaku/shinseisho/27630.html",
    workationUrl: "https://www.city.maebashi.gunma.jp/soshiki/sangyokeizai/sangyoseisaku/shinseisho/27630.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "県庁所在地。NETSUGEN（群馬県庁32階）をはじめとするコワーキングスペースが充実。市外企業向けサテライトオフィス誘致推進補助金を実施。",
    subsidyInfo: {
      name: "前橋市雇用拡大オフィス開設費補助金（サテライトオフィス誘致推進）",
      amount: "要確認",
      period: "令和7年度",
      url: "https://www.city.maebashi.gunma.jp/soshiki/sangyokeizai/sangyoseisaku/shinseisho/27630.html",
      description: "市外企業が市内に新たにオフィス・サテライトオフィスを開設する際の初期費用の一部を補助。"
    }
  },
  {
    name: "高崎市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "dedicated",
    hasSubsidy: false,
    description: "北関東最大の都市。新幹線アクセス◎。TREE高崎など複数のコワーキングスペースがあり、テレワーク・ワーケーション拠点として活用されている。"
  },
  {
    name: "桐生市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "織物の産地として知られる桐生市。渡良瀬川沿いの自然環境でワーケーションが可能。テレワーク施設情報は群馬テレワーク情報サイトに掲載。"
  },
  {
    name: "伊勢崎市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/seido",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/seido",
    type: "dedicated",
    hasSubsidy: true,
    description: "伊勢崎市ではサテライトオフィス・支店・営業所等の開設促進のための奨励金制度を設けている。",
    subsidyInfo: {
      name: "サテライトオフィス、支店・営業所等開設設置促進奨励金",
      amount: "要確認",
      period: "令和7年度",
      url: "https://gunmagurashi.pref.gunma.jp/g_telework/seido",
      description: "伊勢崎市内へのサテライトオフィス・支店・営業所等開設を促進するための奨励金。"
    }
  },
  {
    name: "太田市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "スバル工場がある工業都市。コワーキングスペースも増加中。群馬テレワーク情報サイト掲載。"
  },
  {
    name: "沼田市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "尾瀬や谷川岳の玄関口。自然豊かな環境でのワーケーションが可能。"
  },
  {
    name: "渋川市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "伊香保温泉を擁する渋川市。温泉ワーケーションのモデル地域として注目されており、テレワーク施設も整備されている。お試し移住補助金も利用可能。"
  },
  {
    name: "藤岡市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "関東平野と山間部の境に位置する藤岡市。豊かな自然環境を活かしたワーケーション推進中。"
  },
  {
    name: "富岡市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・富岡製糸場がある富岡市。歴史的景観の中でのワーケーションが楽しめる。"
  },
  {
    name: "安中市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "碓氷峠や磯部温泉を有する安中市。自然と温泉を活かしたワーケーションが可能。"
  },
  {
    name: "みどり市",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "足尾山地の麓に位置するみどり市。渡良瀬渓谷など豊かな自然の中でのテレワーク・ワーケーションが可能。"
  },
  {
    name: "高山村",
    url: "https://www.vill.takayama.gunma.jp/02chiiki/satellite-office/info.html",
    workationUrl: "https://www.vill.takayama.gunma.jp/02chiiki/satellite-office/info.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "「たかやまサテライトオフィス」を整備。群馬県庁NETSUGENの月額会員は設備を無料で使用可能。温泉地・四万温泉にも近く、自然環境抜群。"
  },
  {
    name: "中之条町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "四万温泉・沢渡温泉を擁する中之条町。温泉ワーケーションの拠点として注目。"
  },
  {
    name: "長野原町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "草津温泉の玄関口。八ッ場ダムもあり、自然豊かな環境でのワーケーション推進中。"
  },
  {
    name: "嬬恋村",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "キャベツ畑と浅間山の絶景。夏涼しい高原でのワーケーションが人気。コワーキングスペースも整備。"
  },
  {
    name: "草津町",
    url: "https://kusatsu.space/news/",
    workationUrl: "https://kusatsu.space/",
    type: "dedicated",
    hasSubsidy: false,
    description: "日本屈指の名湯・草津温泉。温泉ワーケーション「くさつワーケーション」の専用ポータルサイトがあり、コワーキングスペースも充実。"
  },
  {
    name: "高山村（上野村）",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "神流川流域の山村。豊かな自然の中でのテレワーク・ワーケーションが可能。"
  },
  {
    name: "片品村",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "尾瀬の玄関口・片品村。大自然の中でのリフレッシュ＆ワーケーションが魅力。"
  },
  {
    name: "川場村",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "「日本で最も美しい村」連合加盟。川場温泉と田園風景の中でのワーケーションが可能。"
  },
  {
    name: "昭和村",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "高原野菜の産地・昭和村。清涼な空気の中でのテレワーク・ワーケーションが楽しめる。"
  },
  {
    name: "みなかみ町",
    url: "https://www.minakami.work/workation",
    workationUrl: "https://www.minakami.work/workation",
    type: "dedicated",
    hasSubsidy: false,
    description: "谷川岳を望む温泉リゾート。「みなかみワーケーション」として専用ポータルサイトを運営。1日1組限定の貸切ワーケーション合宿施設など多彩なプランを提供。"
  },
  {
    name: "玉村町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "群馬県南部の玉村町。高崎・前橋市に近く、交通利便性の高い地域。"
  },
  {
    name: "板倉町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "渡良瀬遊水地に近い板倉町。自然豊かな環境でのテレワーク・ワーケーションが可能。"
  },
  {
    name: "明和町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "利根川沿いの明和町。農業・自然環境を活かしたワーケーション推進中。"
  },
  {
    name: "千代田町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "利根川・渡良瀬川沿いの千代田町。自然環境を活かしたワーケーションが可能。"
  },
  {
    name: "大泉町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "多国籍文化の大泉町。工業団地とコワーキングスペースが共存する個性的なまち。"
  },
  {
    name: "邑楽町",
    url: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    workationUrl: "https://gunmagurashi.pref.gunma.jp/g_telework/",
    type: "portal",
    hasSubsidy: false,
    description: "館林市近郊の邑楽町。東毛地域の自然環境の中でのテレワーク・ワーケーションが可能。"
  }
];
