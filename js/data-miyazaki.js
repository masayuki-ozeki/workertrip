// 宮崎県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "宮崎市",
    url: "https://www.city.miyazaki.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "温暖な気候と太平洋を望む青島・宮崎神宮など観光資源が豊富。県庁所在地としてのビジネス機能と、サーフィン×テレワークのライフスタイルが共存。コワーキングスペースも充実。"
  },
  {
    name: "都城市",
    url: "https://www.city.miyakonojo.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: true,
    subsidyInfo: {
      name: "宮崎県5市町ワーケーション補助金（都城市分）",
      amount: "最大1万円/人（1泊2日以上）",
      period: "2025年度実績あり（最新情報は公式確認要）",
      url: "https://www.travelvoice.jp/workation/20241223-13808/",
      description: "日向市・都城市・延岡市・串間市・日之影町の5市町が対象のワーケーション補助金。法人・団体（地域交流あり）や個人（親子ワーケーション等）が対象。"
    },
    description: "焼酎・牛肉・豚肉で有名な都城市。霧島山麓の農業地帯と畜産業が盛ん。関之尾滝など豊かな自然環境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "延岡市",
    url: "https://www.city.nobeoka.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: true,
    subsidyInfo: {
      name: "延岡市地元事業者リモート時代対応支援事業",
      amount: "テレワーク環境整備費用の一部助成",
      period: "2025年度（最新情報は公式確認要）",
      url: "https://www.smart-hojokin.jp/subsidy/prefectures/45/categories/remotework",
      description: "延岡市内の事業者がリモートワーク対応環境を整備する際の支援事業。ワーケーション受け入れ施設整備にも活用可能。"
    },
    description: "北部宮崎の拠点都市・延岡市。旭化成発祥の地として産業が盛ん。大崩山・祝子川など豊かな自然環境と工業都市機能が共存するワーケーション地。宮崎県5市町補助金の対象地域。"
  },
  {
    name: "日南市",
    url: "https://www.city.nichinan.lg.jp/",
    workationUrl: "https://www.city.nichinan.lg.jp/shigoto_sangyo/sangyoshinko_jigyoshien/2/index.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "サーフィンと移住で全国注目の日南市。飫肥城下町や鵜戸神宮など歴史・観光資源も豊富。「誘致活動」で地方創生の先進事例としてIT企業誘致に成功。テレワーク×サーフィンの聖地として人気が高い。"
  },
  {
    name: "小林市",
    url: "https://www.city.kobayashi.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "霧島山麓の農業都市・小林市。「住みたい田舎ランキング」上位常連の移住先。えびの高原や生駒高原など絶景スポットでのリトリートワーケーションが体験できる。"
  },
  {
    name: "日向市",
    url: "https://www.city.hyuga.miyazaki.jp/",
    workationUrl: "https://www.city.hyuga.miyazaki.jp/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "日向市ワーケーション受入体制整備支援事業補助金",
      amount: "受入施設整備費用の一部助成（2026年3月30日まで）",
      period: "2026年3月30日まで",
      url: "https://financeinjapan.com/finance?area=miyazaki&keyword=%E3%83%86%E3%83%AC%E3%83%AF%E3%83%BC%E3%82%AF",
      description: "ワーケーション受け入れ施設の整備を支援する補助金。宮崎県5市町補助金の対象地域でもある。"
    },
    description: "日向灘のサーフィンスポットと自然豊かな日向市。宮崎県5市町補助金の対象地域で、ワーケーション受入体制整備補助金もあり施設整備が進む。大御神社など神話ゆかりの地でもある。"
  },
  {
    name: "串間市",
    url: "https://www.city.kushima.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: true,
    subsidyInfo: {
      name: "宮崎県5市町ワーケーション補助金（串間市分）",
      amount: "最大1万円/人（1泊2日以上）",
      period: "2025年度実績あり（最新情報は公式確認要）",
      url: "https://www.travelvoice.jp/workation/20241223-13808/",
      description: "宮崎県5市町が対象のワーケーション補助金の対象地域。都井岬の野生馬など独自の観光資源を有する。"
    },
    description: "都井岬の野生馬・幸島のサルで有名な串間市。九州最南端に近い自然豊かな環境でのリトリートワーケーションが体験できる。宮崎県5市町補助金の対象地域。"
  },
  {
    name: "西都市",
    url: "https://www.city.saito.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "西都原古墳群を有する西都市。菜の花・桜の絶景で有名な古墳公園と農村環境でのワーケーション体験ができる。"
  },
  {
    name: "えびの市",
    url: "https://www.city.ebino.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "霧島山麓・えびの高原を有するえびの市。火山湖・温泉・牧場が点在する高原リゾート環境でのリトリートワーケーションが人気。"
  },
  {
    name: "三股町",
    url: "https://www.town.mimata.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "宮崎・鹿児島の県境に位置する三股町。都城市に隣接し農業が盛んな地域でのテレワーク環境が整備中。"
  },
  {
    name: "高原町",
    url: "https://www.town.takaharu.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "霧島山東麓の高原町。霧島錦江湾国立公園エリアに位置し、霧島山の絶景と農村環境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "国富町",
    url: "https://www.town.kunitomi.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "大淀川沿いの農業が盛んな国富町。宮崎市近郊の農村環境でのテレワーク体験ができる。"
  },
  {
    name: "綾町",
    url: "https://www.town.aya.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "照葉樹林と有機農業の先進地・綾町。照葉大吊橋など豊かな自然環境でのリトリートワーケーションが人気。自然と共生するサステナブルなワーケーションの聖地として注目。"
  },
  {
    name: "高鍋町",
    url: "https://www.town.takanabe.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "高鍋城址・松原海岸など観光資源を有する高鍋町。日向灘に面した農業と観光が共存するワーケーション環境。"
  },
  {
    name: "新富町",
    url: "https://www.town.shintomi.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "宇宙ベンチャー企業が進出する新富町。九州初の宇宙ビジネス特区として注目されており、スタートアップ×農業×ワーケーションのユニークな環境が形成されつつある。"
  },
  {
    name: "西米良村",
    url: "https://www.vill.nishimera.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "日本の秘境100選・一ツ瀬川源流の西米良村。山岳・渓谷の豊かな自然環境でのリトリートワーケーションが体験できる。村営温泉も完備。"
  },
  {
    name: "木城町",
    url: "https://www.town.kijo.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "一ツ瀬川沿いの農村・木城町。石河内渓谷などの豊かな自然環境でのリトリートワーケーション体験ができる。"
  },
  {
    name: "川南町",
    url: "https://www.town.kawaminami.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "日向灘に面した川南町。東洋のガラパゴスともいわれる湿原・川南湿原と日向灘の自然環境でのワーケーション体験ができる。"
  },
  {
    name: "都農町",
    url: "https://www.town.tsuno.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "ワインで有名な都農町。都農ワイナリーと日向灘の海岸線が魅力。ワイン×テレワークのユニークなワーケーション体験が可能。"
  },
  {
    name: "門川町",
    url: "https://www.town.kadogawa.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "リアス式海岸の門川湾に面した門川町。渡川マングローブ林と豊かな海の幸を活かしたワーケーション体験ができる。"
  },
  {
    name: "諸塚村",
    url: "https://www.vill.morotsuka.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "林業の村・諸塚村。九州山地の深い山の中でのリトリートワーケーションが体験できる。森林×テレワークの先進的な取り組みで注目。"
  },
  {
    name: "椎葉村",
    url: "https://www.vill.shiiba.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "秘境・椎葉村。九州山地の最奥部に位置し、日本の原風景ともいえる山村環境でのリトリートワーケーションが体験できる。ひえつき節の故郷。"
  },
  {
    name: "美郷町",
    url: "https://www.town.misato.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "耳川源流の山間地帯・美郷町。九州山地の豊かな自然環境でのリトリートワーケーションが体験できる。"
  },
  {
    name: "高千穂町",
    url: "https://www.town.takachiho.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "天孫降臨の地・高千穂町。高千穂峡・天岩戸神社など日本神話ゆかりのスポットが集積。国内外から観光客が訪れる圧巻の渓谷美の中でのリトリートワーケーションは特別な体験。"
  },
  {
    name: "日之影町",
    url: "https://www.town.hinokage.lg.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: true,
    subsidyInfo: {
      name: "宮崎県5市町ワーケーション補助金（日之影町分）",
      amount: "最大1万円/人（1泊2日以上）",
      period: "2025年度実績あり（最新情報は公式確認要）",
      url: "https://www.travelvoice.jp/workation/20241223-13808/",
      description: "宮崎県5市町が対象のワーケーション補助金の対象地域。五ヶ瀬川渓谷沿いのユニークな環境が特徴。"
    },
    description: "天翔大橋・青雲橋など日本最大級の橋梁群を有する日之影町。五ヶ瀬川の渓谷に沿った山間地帯での秘境ワーケーションが体験できる。宮崎県5市町補助金の対象地域。"
  },
  {
    name: "五ヶ瀬町",
    url: "https://www.town.gokase.miyazaki.jp/",
    workationUrl: "https://www.pref.miyazaki.lg.jp/shigoto/kanse/sangyo/workation.html",
    type: "portal",
    hasSubsidy: false,
    description: "九州唯一のスキー場を有する五ヶ瀬町。標高約900mの高原に位置し、四季を通じてアウトドア×テレワークが楽しめるワーケーション環境。"
  }
];
