// 静岡県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "静岡市",
    url: "https://www.city.shizuoka.lg.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/kensei/chiikikyoku/chubuchiiki/1004332/1035171.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "県庁所在地・政令指定都市の静岡市。富士山・南アルプス・駿河湾を望む「三方よし」の環境でのワーケーション。「静岡中部ワーケーション」特設ページで情報発信中。お茶・マグロ・桜エビなど食の魅力も満載。"
  },
  {
    name: "浜松市",
    url: "https://www.city.hamamatsu.shizuoka.jp/",
    workationUrl: "https://hamamatsu-workation.com/",
    type: "dedicated",
    hasSubsidy: false,
    description: "「ふらっと はかどる 浜松ワーケーション」を展開する政令指定都市・浜松市。東京から新幹線約90分、名古屋から約30分のアクセス。ヤマハ・スズキ発祥の地でものづくり文化も豊か。浜名湖でのマリンアクティビティも人気。"
  },
  {
    name: "沼津市",
    url: "https://www.city.numazu.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "駿河湾の港町・沼津市。新鮮な深海魚グルメと富士山を望む景観が魅力。「ラブライブ！サンシャイン!!」の聖地でもあり、コンテンツツーリズムとワーケーションを組み合わせた体験が人気。"
  },
  {
    name: "熱海市",
    url: "https://www.city.atami.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "東京から新幹線約35分・「ワーケーションの聖地」として全国的に有名な熱海市。サウナ付きワークスペース・古民家リノベのシェアオフィスが充実。昨今のリノベまちづくりで若い世代にも人気の「来熱」が続く。"
  },
  {
    name: "三島市",
    url: "https://www.city.mishima.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "富士山の湧水が湧き出る水の都・三島市。源兵衛川の清流と三嶋大社の荘厳な雰囲気の中でのワーケーション体験が可能。東海道の宿場町として栄えた歴史と自然が融合した環境。"
  },
  {
    name: "富士宮市",
    url: "https://www.city.fujinomiya.lg.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "富士山の世界遺産・富士山本宮浅間大社がある富士宮市。富士山を間近に望みながらの仕事はここだけの体験。富士宮やきそばグルメと組み合わせたワーケーション体験も人気。"
  },
  {
    name: "伊東市",
    url: "https://www.city.ito.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "伊豆半島屈指の温泉地・伊東市。源泉数700本超の豊富な温泉と城ヶ崎海岸の絶景の中でのワーケーション体験が魅力。東京から特急踊り子で約1時間半のアクセス。"
  },
  {
    name: "島田市",
    url: "https://www.city.shimada.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "大井川・川越し文化の伝統が残る島田市。SLが走る大井川鐵道沿線に広がる茶畑の景観が美しく、お茶×ワーケーションの体験ができる。川根本町へのアクセス拠点でもある。"
  },
  {
    name: "富士市",
    url: "https://www.city.fuji.shizuoka.jp/",
    workationUrl: "https://www.city.fuji.shizuoka.jp/hataraku/p008135.html",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "富士市宿泊業緊急対策研修型ワーケーション補助金",
      amount: "宿泊費の50%（上限10万円）",
      period: "2025年4月1日〜2026年3月10日",
      url: "https://www.city.fuji.shizuoka.jp/1035070000/p004507.html",
      description: "市外企業の研修型ワーケーション宿泊費を補助。市内宿泊施設での受け入れ実績多数。富士山×製紙業の産業観光と組み合わせたワーケーション体験も可能。"
    },
    description: "富士山麓・富士川沿いの製紙業の街・富士市。「研修型ワーケーション補助金（50%・上限10万円）」を展開し、市外企業の受け入れに積極的。コニカミノルタなど大手企業の利用実績もあり。富士山世界遺産ビジターセンターへのアクセスも好立地。"
  },
  {
    name: "磐田市",
    url: "https://www.city.iwata.shizuoka.jp/",
    workationUrl: "https://hamamatsu-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "ジュビロ磐田のホームタウン・磐田市。遠州平野の農業と近代工業が共存する環境でのワーケーション体験が可能。浜松市に隣接し、浜松ワーケーションエリアとしても機能。"
  },
  {
    name: "焼津市",
    url: "https://www.city.yaizu.lg.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "カツオ・マグロの水揚げ日本一の漁港都市・焼津市。新鮮な海産物を堪能しながら、漁港の活気を感じるワーケーション体験が可能。焼津温泉も近く、リラックス環境も充実。"
  },
  {
    name: "掛川市",
    url: "https://www.city.kakegawa.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "「生涯学習都市宣言」のまち・掛川市。掛川城と茶畑の風景が美しく、粛々と仕事に向き合うワーケーション環境として最適。粟ヶ岳のお茶文字「茶」が見える景観も独自の魅力。"
  },
  {
    name: "藤枝市",
    url: "https://www.city.fujieda.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/kensei/chiikikyoku/chubuchiiki/1004332/1035171.html",
    type: "portal",
    hasSubsidy: false,
    description: "「お茶のまち」として知られる藤枝市。岡部町の茶畑・朝比奈の棚田など美しい農村景観の中でのワーケーション体験が可能。静岡市・焼津市にも近く、利便性の高い拠点都市。"
  },
  {
    name: "御殿場市",
    url: "https://www.city.gotemba.lg.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "富士山東麓・御殿場市。プレミアム・アウトレットや自衛隊演習場など独特の環境が共存。富士山を間近に見上げながらの高原ワーケーション体験が可能。夏も涼しい避暑地としても人気。"
  },
  {
    name: "袋井市",
    url: "https://www.city.fukuroi.shizuoka.jp/",
    workationUrl: "https://hamamatsu-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "東海道の中心・袋井市。可睡斎・油山寺・法多山など寺社仏閣が多く、精神的充電に最適なワーケーション環境。エコパスタジアムなど大型施設もあり、スポーツ×ワーケーションも可能。"
  },
  {
    name: "下田市",
    url: "https://www.city.shimoda.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "開国の港・下田市。白浜海岸・宝福寺など歴史と自然が豊かな伊豆最南端の港町。ペリーゆかりの地でのワーケーション体験は歴史の重みも感じられる特別な体験。"
  },
  {
    name: "裾野市",
    url: "https://www.city.susono.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "富士山麓の工業都市・裾野市。トヨタが未来型スマートシティ「Woven City」を建設中で、先端技術と自然が融合した最先端のワーケーション環境として注目。富士山を望む絶景も魅力。"
  },
  {
    name: "湖西市",
    url: "https://www.city.kosai.shizuoka.jp/",
    workationUrl: "https://hamamatsu-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "浜名湖の西岸に位置する湖西市。ウナギ・ノリの産地として有名で、浜名湖越しの富士山の眺めが美しい。浜松市に隣接し、浜松ワーケーションエリアの西の玄関口として機能。"
  },
  {
    name: "伊豆市",
    url: "https://www.city.izu.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "伊豆の中心・伊豆市。修善寺温泉・浄蓮の滝など豊富な観光資源と多様なアクティビティを楽しみながらのワーケーション体験が可能。サイクリング・トレッキングなどアウトドアとの組み合わせも人気。"
  },
  {
    name: "御前崎市",
    url: "https://www.city.omaezaki.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "静岡県最南端・御前崎市。遠州灘のダイナミックな海岸線と灯台が魅力。風力発電の風車が立ち並ぶ景観の中でのワーケーション体験は独特の感動がある。サーフィンスポットとしても有名。"
  },
  {
    name: "菊川市",
    url: "https://www.city.kikugawa.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "お茶の産地・菊川市。緑茶生産の本場で、茶畑の中の「茶の間」でのワーケーション体験が格別。台湾茶文化とも縁が深く、食農体験と組み合わせた体験型ワーケーションを推進。"
  },
  {
    name: "伊豆の国市",
    url: "https://www.city.izunokuni.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "源頼朝ゆかりの地・伊豆の国市。伊豆長岡温泉や韮山反射炉（世界遺産）など歴史文化が豊か。富士山を望む露天風呂での温泉×テレワークの体験は伊豆の国市ならでは。"
  },
  {
    name: "牧之原市",
    url: "https://www.city.makinohara.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "静岡空港に隣接する牧之原市。緑茶産地として有名な牧之原台地の茶畑が広がる景観は日本を代表する農業風景。静岡空港利用で全国からのアクセスも良好なワーケーション拠点。"
  },
  {
    name: "東伊豆町",
    url: "https://www.town.higashiizu.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "稲取温泉・熱川温泉など温泉地が続く東伊豆町。金目鯛の水揚げでも有名で、温泉と新鮮な魚介を楽しみながらのワーケーション体験が可能。稲取の「つるし飾り」など伝統文化体験も。"
  },
  {
    name: "河津町",
    url: "https://www.town.kawazu.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "河津桜発祥の地・河津町。日本で最も早く咲く河津桜と七滝渓谷の自然が魅力。早春のワーケーション先として人気で、河津川沿いの桜並木を眺めながら仕事ができる。"
  },
  {
    name: "南伊豆町",
    url: "https://www.town.minamiizu.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "伊豆半島最南端・南伊豆町。弓ヶ浜の美しい白砂ビーチと下田石・ワサビ田など自然が豊か。東京からのアクセスには時間を要するが、それが非日常感を高めるワーケーション体験につながる。"
  },
  {
    name: "松崎町",
    url: "https://www.town.matsuzaki.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "伊豆の松崎町。なまこ壁・澤田政廣美術館など文化・芸術資源が豊富。伊豆長八の左官アートが残る街並みは独特の景観で、アートと自然を感じながらのワーケーション体験ができる。"
  },
  {
    name: "西伊豆町",
    url: "https://www.town.nishiizu.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "夕日の絶景スポット・堂ヶ島がある西伊豆町。天窓洞など独特の海蝕洞窟が有名で、駿河湾に沈む夕日を見ながらのワーケーション体験は格別。黄金崎の独特の海岸景観も魅力。"
  },
  {
    name: "函南町",
    url: "https://www.town.kannami.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "熱海・三島の中間に位置する函南町。丹那盆地の酪農風景と富士山の眺めが美しい。東京・大阪へのアクセスが良く、ワーケーションベースとして利便性が高い田園都市。"
  },
  {
    name: "清水町",
    url: "https://www.town.shimizu.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/kensei/chiikikyoku/chubuchiiki/1004332/1035171.html",
    type: "portal",
    hasSubsidy: false,
    description: "富士山の湧水・柿田川湧水群を有する清水町。日本最短の一級河川・柿田川の清流を眺めながらのワーケーション体験が魅力。三島市・沼津市へのアクセスも良好。"
  },
  {
    name: "長泉町",
    url: "https://www.town.nagaizumi.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/kensei/chiikikyoku/chubuchiiki/1004332/1035171.html",
    type: "portal",
    hasSubsidy: false,
    description: "静岡県で最も人口増加率が高い長泉町。クリーンパーク長泉や大岡の梅林など自然が豊かで、三島・沼津へのアクセスも抜群。子育て×テレワークの環境として全国的に注目。"
  },
  {
    name: "小山町",
    url: "https://www.town.oyama.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "富士スピードウェイがある小山町。富士山の北麓に位置し、あしがら温泉など温泉が豊富。高速道路のインター近くで東京方面からのアクセスも良好なワーケーション環境。"
  },
  {
    name: "吉田町",
    url: "https://www.town.yoshida.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "駿河湾に面した吉田町。ロールスクリーン・製紙業などの製造業が盛んな産業都市。大井川河口の自然環境の中でのワーケーション体験も可能。"
  },
  {
    name: "川根本町",
    url: "https://www.town.kawanehon.shizuoka.jp/",
    workationUrl: "https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/rodoseisaku/1003248/1043044.html",
    type: "portal",
    hasSubsidy: false,
    description: "大井川沿いのSLと奥大井湖上駅が有名な川根本町。日本一深い山の中を走るSL蒸気機関車と湖上に浮かぶ駅での独自のワーケーション体験が可能。お茶の産地でもあり、茶畑の癒し環境で仕事ができる。"
  },
  {
    name: "森町",
    url: "https://www.town.morimachi.shizuoka.jp/",
    workationUrl: "https://hamamatsu-workation.com/",
    type: "portal",
    hasSubsidy: false,
    description: "「遠州の小京都」とも呼ばれる森町。小國神社や秋のもみじが美しい天宮神社など神社仏閣が豊富。自然豊かな環境でのワーケーション体験ができる。浜松市への通勤も可能な立地。"
  }
];
