// 兵庫県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "神戸市",
    url: "https://www.kobe-workation.jp/",
    workationUrl: "https://www.kobe-workation.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "港町・神戸市。三宮エリアにスタイリッシュなコワーキングスペースが集積。海と山が近接し六甲山や神戸港が身近なロケーション。アクセス抜群でスタートアップの集積も著しい。"
  },
  {
    name: "姫路市",
    url: "https://www.city.himeji.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・姫路城を有する姫路市。山陽新幹線の停車駅で関西圏からのアクセス抜群。歴史遺産と産業が共存するワーケーション環境。"
  },
  {
    name: "尼崎市",
    url: "https://www.city.amagasaki.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "大阪に隣接する尼崎市。工業都市から文化都市へと変貌を遂げ、クリエイティブ産業のワーケーション環境が整備中。"
  },
  {
    name: "明石市",
    url: "https://www.city.akashi.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "子育て支援で全国的に有名な明石市。日本標準時子午線が通る「時のまち」として知られ、タコやアジなど明石海峡の海鮮グルメと観光を活かしたワーケーション環境。"
  },
  {
    name: "西宮市",
    url: "https://www.nishi.or.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "阪神間文化圏の中心・西宮市。甲子園球場・宝塚歌劇など文化資源と六甲山の自然が共存。コワーキングスペースも整備されワーケーション環境が充実。"
  },
  {
    name: "洲本市",
    url: "https://www.city.sumoto.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "淡路島の中心都市・洲本市。淡路島最大の市街地を有し、観光と地域産業が融合するワーケーション地として人気。温泉リゾートとコワーキングを組み合わせたプランが充実。"
  },
  {
    name: "芦屋市",
    url: "https://www.city.ashiya.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "高級住宅街として知られる芦屋市。六甲山と芦屋浜の絶景、洗練された都市機能が融合するハイクラスなワーケーション環境。"
  },
  {
    name: "伊丹市",
    url: "https://www.city.itami.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "大阪国際空港（伊丹空港）を有する伊丹市。国内各地へのアクセスが抜群でビジネス拠点型ワーケーションに最適。日本酒の産地でもある。"
  },
  {
    name: "相生市",
    url: "https://www.city.aioi.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "播磨灘に面した相生市。造船業の歴史を持つ港町で、湾岸の景色とワーケーションが体験できる。"
  },
  {
    name: "豊岡市",
    url: "https://www.city.toyooka.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "コウノトリの郷・豊岡市。城崎温泉・出石そばなど観光資源が充実。演劇のまちとして文化×自然×テレワークのユニークなワーケーション環境が整備されている。"
  },
  {
    name: "加古川市",
    url: "https://www.city.kakogawa.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "播磨地域の中心都市・加古川市。加古川沿いの自然環境と工業都市機能が共存するワーケーション環境。"
  },
  {
    name: "赤穂市",
    url: "https://www.city.ako.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "忠臣蔵の故郷・赤穂市。播磨灘に面した塩の産地で、赤穂温泉とともにワーケーション環境が整備中。"
  },
  {
    name: "西脇市",
    url: "https://www.city.nishiwaki.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "日本のへそ・西脇市。播州織の産地として知られ、繊維産業と農村環境が共存するワーケーション地。"
  },
  {
    name: "宝塚市",
    url: "https://www.city.takarazuka.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "宝塚歌劇で世界的に有名な宝塚市。武庫川沿いの温泉と文化施設が充実したワーケーション環境。大阪・神戸双方へのアクセスも良好。"
  },
  {
    name: "三木市",
    url: "https://www.city.miki.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "金物の産地・三木市。三木合戦ゆかりの歴史と豊かな自然環境が共存するワーケーション地。"
  },
  {
    name: "高砂市",
    url: "https://www.city.takasago.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "高砂神社・相生の松で知られる高砂市。播磨灘の海岸線と工業都市機能が共存するテレワーク環境が整備中。"
  },
  {
    name: "川西市",
    url: "https://www.city.kawanishi.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "大阪・神戸へのアクセス良好な川西市。里山の自然環境と都市機能が融合したワーケーション環境。能勢電鉄沿線の里山でのリトリートワーケーションも人気。"
  },
  {
    name: "小野市",
    url: "https://www.city.ono.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "そろばんの産地・小野市。播磨の里山環境と産業観光が共存するワーケーション体験ができる。"
  },
  {
    name: "三田市",
    url: "https://www.city.sanda.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "神戸市のベッドタウン・三田市。武庫川の上流域に位置し、豊かな自然環境と都市機能を兼ね備えたワーケーション環境。神戸や大阪への通勤圏内でもある。"
  },
  {
    name: "加西市",
    url: "https://www.city.kasai.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "播磨の農業地帯・加西市。法華山一乗寺など歴史遺産と田園風景の中でのリトリートワーケーションが体験できる。"
  },
  {
    name: "丹波篠山市",
    url: "https://www.city.tanbasasayama.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "黒豆・丹波栗の産地で城下町の風情が残る丹波篠山市。古民家リノベーションのコワーキングスペースが整備され、大阪から約1時間のアクセスで農村×文化ワーケーションが体験できる。"
  },
  {
    name: "養父市",
    url: "https://www.city.yabu.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "全国初の農業特区・養父市。但馬地域の農山村環境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "丹波市",
    url: "https://www.city.tamba.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "丹波黒豆・丹波栗の産地・丹波市。里山の農村景観と温泉を活かしたリトリートワーケーションが体験できる。"
  },
  {
    name: "南あわじ市",
    url: "https://www.city.minamiawaji.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "南あわじ市多様な働き方推進支援助成金（テレワーク導入型）",
      amount: "最大200万円",
      period: "2025年4月1日〜2026年3月31日",
      url: "https://financeinjapan.com/finance/e2185b99-0279-4174-8c7b-c45cef8af141",
      description: "テレワーク導入に取り組む淡路市内事業者向けの助成金。ワーケーション環境整備にも活用可能。"
    },
    description: "淡路島の最南端・南あわじ市。鳴門の渦潮や新鮮な海鮮グルメが魅力。リゾートホテルや古民家を活用したワークスペースが充実し、非日常感あふれるリトリートワーケーションの聖地。"
  },
  {
    name: "朝来市",
    url: "https://www.city.asago.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "天空の城・竹田城址を有する朝来市。生野銀山など鉱山の歴史と山岳の雲海絶景でのリトリートワーケーションが人気。"
  },
  {
    name: "淡路市",
    url: "https://www.city.awaji.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "淡路島の北部・淡路市。明石海峡大橋を渡れば神戸まで約1時間。リゾートホテルや農業体験施設が充実した島暮らし×テレワーク環境が整備。コワーキングスペースも増加中。"
  },
  {
    name: "宍粟市",
    url: "https://www.city.shiso.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "揖保川源流の宍粟市。日本の滝百選・原不動滝など豊かな自然環境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "加東市",
    url: "https://www.city.kato.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "播磨の農業地帯・加東市。東播磨の里山環境と社ゴルフ場でのワーケーション体験ができる。"
  },
  {
    name: "たつの市",
    url: "https://www.city.tatsuno.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "醤油・そうめん・革の産地・たつの市。揖保乃糸発祥の地として知られ、龍野城下町の風情と播磨灘の海岸線でのワーケーション体験ができる。"
  },
  {
    name: "猪名川町",
    url: "https://www.town.inagawa.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "猪名川上流の里山・猪名川町。大阪・神戸の通勤圏内でありながら豊かな自然環境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "多可町",
    url: "https://www.town.taka.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "「父の日」発祥の地・多可町。播磨の山間農村でのリトリートワーケーション体験が可能。清流・加古川源流の豊かな自然環境が魅力。"
  },
  {
    name: "稲美町",
    url: "https://www.town.inami.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "ため池と田園が広がる稲美町。農業と住宅が共存する播磨平野のテレワーク環境として機能中。"
  },
  {
    name: "播磨町",
    url: "https://www.town.harima.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "播磨臨海工業地帯に位置する播磨町。明石海峡を望む海岸線と工業地帯が共存するテレワーク環境が整備中。"
  },
  {
    name: "市川町",
    url: "https://www.town.ichikawa.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "市川沿いの農村・市川町。播磨の山間農村でのリトリートワーケーション体験ができる。"
  },
  {
    name: "福崎町",
    url: "https://www.town.fukusaki.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "民俗学者・柳田国男の生誕地・福崎町。河童伝説のまちとして観光×ワーケーションが体験できる。"
  },
  {
    name: "神河町",
    url: "https://www.town.kamikawa.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "砥峰高原のススキ草原で知られる神河町。播磨の山間農村でのリトリートワーケーション体験が可能。"
  },
  {
    name: "太子町",
    url: "https://www.town.taishi.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "聖徳太子ゆかりの太子町。播磨の平野部に位置しテレワーク環境が整備中。"
  },
  {
    name: "上郡町",
    url: "https://www.town.kamigori.hyogo.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "千種川沿いの農村・上郡町。播磨西部の農山村環境でのテレワーク体験ができる。"
  },
  {
    name: "佐用町",
    url: "https://www.town.sayo.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "スター☆ナイトで有名な佐用町。西はりま天文台がある天文のまちでの星空×テレワークのユニークなワーケーション体験が可能。"
  },
  {
    name: "香美町",
    url: "https://www.town.kami.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "日本海沿岸の香美町。カニで有名な但馬の漁師町から山陰海岸ジオパークまで、豊かな自然環境でのリゾート型ワーケーションが体験できる。"
  },
  {
    name: "新温泉町",
    url: "https://www.town.shinonsen.lg.jp/",
    workationUrl: "https://www.pref.hyogo.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "浜坂温泉・湯村温泉を有する新温泉町。日本海を望む温泉地でのワーケーション体験が特徴。山陰海岸ジオパークの中心的なエリア。"
  }
];
