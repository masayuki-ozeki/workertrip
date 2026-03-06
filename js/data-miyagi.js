// 宮城県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 注意: 宮城県は「MiWork（みわーく）宮城」ポータルに集約されている。
//       個別市町村の独自補助金は確認できていないため、全市町村はポータルURL掲載。
//       最初のエントリ「宮城県」は県全体のポータルを代表するエントリとして追加。

const municipalitiesData = [
  {
    name: "宮城県",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    prefectureUrl: "https://www.pref.miyagi.jp/soshiki/kankou/miwork.html",
    type: "portal",
    hasSubsidy: false,
    description: "宮城県全体のワーケーション情報は『MiWork（みわーく）宮城』ポータルで一元管理。コワーキングスペース・宿泊施設・体験プログラムを網羅。県観光課が運営（https://www.pref.miyagi.jp/soshiki/kankou/miwork.html）。"
  },
  {
    name: "仙台市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "東北最大の都市・杜の都。MiWork宮城ポータルにコワーキングスペース・宿泊施設情報が充実。東京から新幹線で1時間半のアクセス。"
  },
  {
    name: "石巻市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "三陸沿岸の港湾・水産業の中心都市。震災復興のシンボル的存在。MiWork宮城ポータルに情報掲載。"
  },
  {
    name: "塩竈市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "鹽竈神社と鮮魚・寿司で有名な港町。仙台市に近く交通便利。MiWork宮城ポータル掲載。"
  },
  {
    name: "気仙沼市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "三陸沿岸の水産業都市。リアス式海岸と新鮮な海の幸が魅力。MiWork宮城ポータル掲載。"
  },
  {
    name: "白石市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "蔵王山麓の城下町。温泉地が近く、自然の中でのワーケーションが可能。MiWork宮城ポータル掲載。"
  },
  {
    name: "名取市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "仙台空港がある交通の要衝。仙台市のベッドタウンとして発展。MiWork宮城ポータル掲載。"
  },
  {
    name: "角田市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "宇宙航空研究開発機構（JAXA）角田宇宙センターがある航空宇宙のまち。MiWork宮城ポータル掲載。"
  },
  {
    name: "多賀城市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "東北最古の国府・多賀城跡がある歴史都市。仙台市に隣接し交通便利。MiWork宮城ポータル掲載。"
  },
  {
    name: "岩沼市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "竹駒神社のある仙台平野の都市。仙台空港アクセス線沿線で交通便利。MiWork宮城ポータル掲載。"
  },
  {
    name: "登米市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "明治の洋館が残る「みやぎの明治村」登米（とよま）エリアが有名。のどかな田園風景の中でワーケーション可能。MiWork宮城ポータル掲載。"
  },
  {
    name: "栗原市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "豊かな農業と伝統文化が息づく内陸部の市。中山平温泉などの温泉地もあり。MiWork宮城ポータル掲載。"
  },
  {
    name: "東松島市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "日本三景・松島に隣接する沿岸都市。航空自衛隊松島基地がある。MiWork宮城ポータル掲載。"
  },
  {
    name: "大崎市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "鳴子温泉郷を擁する北部の中心都市。ラムサール条約湿地の蕪栗沼も有名。MiWork宮城ポータル掲載。"
  },
  {
    name: "富谷市",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "仙台市北部のベッドタウン。宅地開発が進み若い世代が多い。MiWork宮城ポータル掲載。"
  },
  {
    name: "蔵王町",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "蔵王山麓のスキーリゾートタウン。四季を通じたアウトドアとワーケーションが魅力。MiWork宮城ポータル掲載。"
  },
  {
    name: "七ヶ宿町",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "七ヶ宿ダムと豊かな自然が広がる南部の町。静かな環境でのワーケーションが可能。MiWork宮城ポータル掲載。"
  },
  {
    name: "松島町",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "日本三景のひとつ・松島。観光地でのワーケーション体験が人気。MiWork宮城ポータル掲載。"
  },
  {
    name: "女川町",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "東日本大震災から復興を遂げた漁港の町。おしゃれな商業施設「シープレ女川」が有名。MiWork宮城ポータル掲載。"
  },
  {
    name: "南三陸町",
    url: "https://miwork.jp/",
    workationUrl: "https://miwork.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "リアス式海岸と震災復興の歴史が交わる町。「震災の語り部」と共存するワーケーションも注目されている。MiWork宮城ポータル掲載。"
  }
];
