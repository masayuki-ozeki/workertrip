// 京都府 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "京都市",
    url: "https://www.kyoto-workcation.jp/",
    workationUrl: "https://www.kyoto-workcation.jp/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "京都市デジタル化推進プロジェクト（令和8年度）",
      amount: "最大100万円（デジタル導入枠4/5・デジタル展開枠2/3）",
      period: "2026年2月24日〜2026年5月29日",
      url: "https://hojyokin-portal.jp/subsidies/70263",
      description: "デジタル化を推進する市内企業へのサポート事業。テレワーク・ワーケーション環境整備にも活用可能。"
    },
    description: "世界的な観光都市・京都市。町家をリノベーションしたコワーキングスペースが国内最多級。観光と仕事を切り離した「静かな京都」での集中×リトリート型ワーケーションが人気。IT企業の集積も進む。"
  },
  {
    name: "福知山市",
    url: "https://www.city.fukuchiyama.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "丹波地域の中心都市・福知山市。明智光秀ゆかりの福知山城と豊かな自然環境でのワーケーション体験ができる。"
  },
  {
    name: "舞鶴市",
    url: "https://www.city.maizuru.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "海軍の街・舞鶴市。日本海に面した港町でのワーケーション体験。赤れんが倉庫群などの産業遺産と海の幸が魅力。"
  },
  {
    name: "綾部市",
    url: "https://www.city.ayabe.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "グンゼ発祥の地・綾部市。里山ゼロウェイストの先進地として移住・ワーケーションの注目度が高い。豊かな農村環境でのリトリートワーケーションが特徴。"
  },
  {
    name: "宇治市",
    url: "https://www.city.uji.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "お茶と源氏物語の街・宇治市。平等院鳳凰堂など世界遺産を有し、京都市へのアクセスも良好。茶畑を望む環境でのワーケーション体験ができる。"
  },
  {
    name: "宮津市",
    url: "https://www.city.miyazu.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "日本三景・天橋立を有する宮津市。日本海を望む絶景の中でのリゾート型ワーケーションが体験できる。天橋立沿いのコワーキング環境整備も進む。"
  },
  {
    name: "亀岡市",
    url: "https://www.city.kameoka.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "保津川下りで有名な亀岡市。京都市に近く霧の郷として知られる農村環境でのワーケーションが体験できる。スタジアム整備など活性化が進む。"
  },
  {
    name: "城陽市",
    url: "https://www.city.joyo.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "奈良・大阪へのアクセスも良い城陽市。新名神高速道路の整備でアクセス向上中。都市近郊のテレワーク環境として機能。"
  },
  {
    name: "向日市",
    url: "https://www.city.muko.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "全国最小面積の市・向日市。京都市に隣接する住宅都市として、都市型テレワーク環境が充実。"
  },
  {
    name: "長岡京市",
    url: "https://www.city.nagaokakyo.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "古代の都・長岡京跡を有する長岡京市。竹林と歴史遺産に囲まれた環境でのワーケーション体験ができる。"
  },
  {
    name: "八幡市",
    url: "https://www.city.yawata.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "石清水八幡宮を有する八幡市。男山の自然環境と宇治川・木津川・桂川の合流点という絶景でのワーケーション体験。"
  },
  {
    name: "京田辺市",
    url: "https://www.city.kyotanabe.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "同志社大学のキャンパスが立地する京田辺市。学術環境とお茶の産地が共存するワーケーション地。大阪・京都双方へのアクセスも良好。"
  },
  {
    name: "京丹後市",
    url: "https://www.city.kyotango.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "丹後半島の美しい海岸線を有する京丹後市。天橋立周辺から伊根まで続く日本海の絶景とシルクの産地でのリゾート型ワーケーションが人気。サテライトオフィスの誘致も積極的。"
  },
  {
    name: "南丹市",
    url: "https://www.city.nantan.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "美山かやぶきの里で有名な南丹市。日本の原風景ともいえる農村景観の中でのリトリート型ワーケーションが体験できる。自然体験と組み合わせたプログラムも充実。"
  },
  {
    name: "木津川市",
    url: "https://www.city.kizugawa.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "関西文化学術研究都市の一部を担う木津川市。奈良・大阪へのアクセスも良く、学術研究環境とのコラボワーケーションが可能。"
  },
  {
    name: "大山崎町",
    url: "https://www.town.oyamazaki.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "天王山の合戦で有名な大山崎町。京都・大阪の中間に位置しアクセス抜群。アサヒビール大山崎山荘美術館など文化施設も充実。"
  },
  {
    name: "久御山町",
    url: "https://www.town.kumiyama.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "京都府南部の工業都市・久御山町。宇治川沿いの農業地帯と工業地帯が共存するテレワーク環境が整備中。"
  },
  {
    name: "井手町",
    url: "https://www.town.ide.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "山吹の里・井手町。玉川沿いの山吹が咲く農村環境でのワーケーション体験ができる。"
  },
  {
    name: "宇治田原町",
    url: "https://www.town.ujitawara.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "宇治茶発祥の地・宇治田原町。茶畑が広がる丘陵地帯でのワーケーション体験が特徴的。「永谷宗円」ゆかりの地でもある。"
  },
  {
    name: "笠置町",
    url: "https://www.town.kasagi.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "木津川沿いのキャンプ地・笠置町。アウトドア×テレワークのワーケーションスポットとして若者に人気が高まっている。"
  },
  {
    name: "和束町",
    url: "https://www.town.wazuka.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "宇治茶の主産地・和束町。日本で唯一の「お茶の景観」として世界農業遺産に認定された茶畑が広がる絶景環境でのワーケーション体験が人気。"
  },
  {
    name: "精華町",
    url: "https://www.town.seika.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "けいはんな学研都市の中核・精華町。ATR・NTT研究所など最先端研究機関が集積する学術環境でのワーケーションが特徴。"
  },
  {
    name: "南山城村",
    url: "https://www.vill.minamiyamashiro.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "京都府唯一の村・南山城村。宇治川源流の豊かな自然環境と茶畑が広がる秘境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "京丹波町",
    url: "https://www.town.kyotamba.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "丹波黒豆・丹波栗の産地・京丹波町。山村の豊かな自然環境と丹波の食文化を活かしたワーケーション体験ができる。"
  },
  {
    name: "伊根町",
    url: "https://www.town.ine.kyoto.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "舟屋の里として世界的に有名な伊根町。日本海の入り江に並ぶ舟屋群は唯一無二の景観。「日本のベニス」ともいわれる絶景の中でのリトリートワーケーションが体験できる。"
  },
  {
    name: "与謝野町",
    url: "https://www.town.yosano.lg.jp/",
    workationUrl: "https://www.pref.kyoto.jp/rosei/tayounahatarakikata.html",
    type: "portal",
    hasSubsidy: false,
    description: "丹後ちりめんの産地・与謝野町。与謝野晶子ゆかりの地で、シルクの伝統工芸と日本海の自然環境が共存するワーケーション体験ができる。"
  }
];
