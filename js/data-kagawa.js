// 香川県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 備考:
//   香川県のワーケーション情報は「うどん県旅ネット（my-kagawa.jp）」の
//   ワーケーション特集ページ（香川県観光協会公式）で案内されている。
//   https://www.my-kagawa.jp/feature/workation/top
//   県独自の統一補助金制度は確認できず、各市町個別対応。
//   愛媛南予型のような補助金は香川にはない（2026-03時点）。

const municipalitiesData = [
  {
    name: "香川県",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    prefectureUrl: "https://www.pref.kagawa.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "香川県全体のワーケーション情報は「うどん県旅ネット」（香川県観光協会公式）のワーケーション特集で一元案内。瀬戸内の島々・うどん・金刀比羅宮など独自の魅力を活かしたワーケーション先として注目。"
  },
  {
    name: "高松市",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "県庁所在地で四国最大の都市。新幹線のない四国の玄関口として航空・海路が充実。コワーキングスペースも多くリモートワーク環境が整う。栗林公園や瀬戸内海の島々へのアクセスも良好。"
  },
  {
    name: "丸亀市",
    url: "https://www.my-kagawa.jp/feature/workation/daily_special",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/daily_special",
    type: "portal",
    hasSubsidy: false,
    description: "丸亀城を中心とした歴史的城下町。瀬戸内中讃定住自立圏（丸亀市・善通寺市・琴平町・多度津町・まんのう町）でワーケーションWeeks（2025年10月）を四国自治体初として開催。骨付鳥のグルメも魅力。"
  },
  {
    name: "坂出市",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "瀬戸大橋の香川側玄関口。本州からのアクセス良好で工業と塩業の歴史を持つ港町。瀬戸内海の絶景を眺めながらのワーケーションに適した立地。"
  },
  {
    name: "善通寺市",
    url: "https://www.my-kagawa.jp/feature/workation/daily_special",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/daily_special",
    type: "portal",
    hasSubsidy: false,
    description: "空海（弘法大師）の生誕地で四国八十八ヶ所霊場・第75番札所「善通寺」を擁する。丸亀市に隣接し、瀬戸内中讃定住自立圏ワーケーションWeeksのエリアに含まれる。歴史と自然に囲まれた落ち着いた環境。"
  },
  {
    name: "観音寺市",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "愛媛県境に接する西讃地方の中心都市。砂浜に描かれた寛永通宝の「銭形砂絵」が有名。燧灘に面した自然豊かな海辺の環境でのワーケーションが可能。"
  },
  {
    name: "さぬき市",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "高松市東隣に位置する。長尾寺（四国八十八ヶ所第87番）など遍路文化と里山が残る。志度湾に面した海と山の両方を楽しめる立地でワーケーション向きの静かな環境。"
  },
  {
    name: "東かがわ市",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "香川県最東端の市。手袋生産日本一として知られる。引田地区には江戸時代の醤油蔵などの歴史的街並みが残る。徳島県との県境に近く、東部瀬戸内の自然を楽しめる。"
  },
  {
    name: "三豊市",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "インスタグラムで世界的に有名な「父母ヶ浜」を有する瀬戸内の市。SNS映えするビーチが多くクリエイティブ系のワーケーション目的地として人気上昇中。"
  },
  {
    name: "小豆島町",
    url: "https://www.my-kagawa.jp/feature/workation/islands",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/islands",
    type: "portal",
    hasSubsidy: false,
    description: "瀬戸内海最大の島のひとつで、オリーブやそうめんの産地として有名。「二十四の瞳」の舞台として知られる。フェリーで高松から約60分。島時間を活かしたリモートワークに最適。"
  },
  {
    name: "土庄町",
    url: "https://www.my-kagawa.jp/feature/workation/islands",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/islands",
    type: "portal",
    hasSubsidy: false,
    description: "小豆島の玄関口・土庄港を擁する町。瀬戸内国際芸術祭の開催地でもあり、アート×ワーケーションの新しいスタイルが生まれている。大小多数の島々が点在するユニークな地形。"
  },
  {
    name: "直島町",
    url: "https://www.my-kagawa.jp/feature/workation/islands",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/islands",
    type: "portal",
    hasSubsidy: false,
    description: "ベネッセアートサイト直島で世界的に知られる現代アートの島。草間彌生の「黄かぼちゃ」が象徴的。アートインスパイア型ワーケーションの聖地として国内外から訪問者が絶えない。"
  },
  {
    name: "宇多津町",
    url: "https://www.my-kagawa.jp/feature/workation/daily_special",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/daily_special",
    type: "portal",
    hasSubsidy: false,
    description: "瀬戸大橋線の駅があり交通の要所。坂出市に隣接する小さな町だが、臨海部の再開発で新しいビジネス環境も整う。丸亀市・坂出市の中間に位置するアクセス良好な立地。"
  },
  {
    name: "綾川町",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "高松市に隣接する内陸の町。丸亀競馬場（実際は高松市）の近くに農村風景が広がる。讃岐山脈の麓で自然環境豊か。高松市へのアクセスが良く静かな環境でのワーケーション向き。"
  },
  {
    name: "琴平町",
    url: "https://www.my-kagawa.jp/feature/workation/daily_special",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/daily_special",
    type: "portal",
    hasSubsidy: false,
    description: "こんぴらさん（金刀比羅宮）の門前町。年間数百万人が訪れる観光地で宿泊施設も充実。温泉・旅館でのワーケーションプランが多い。瀬戸内中讃定住自立圏ワーケーションWeeksのエリア。"
  },
  {
    name: "多度津町",
    url: "https://www.my-kagawa.jp/feature/workation/daily_special",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/daily_special",
    type: "portal",
    hasSubsidy: false,
    description: "土讃線・予讃線の分岐点となる鉄道の町。古い港町の風情が残り、瀬戸内海に面した穏やかな漁師町。瀬戸内中讃定住自立圏ワーケーションWeeksのエリアに含まれる。"
  },
  {
    name: "まんのう町",
    url: "https://www.my-kagawa.jp/feature/workation/daily_special",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/daily_special",
    type: "portal",
    hasSubsidy: false,
    description: "満濃池（日本最大級の農業用ため池）を有する讃岐山脈北麓の町。空海修築の伝説が残る満濃池でのレクリエーションとリモートワークを組み合わせたワーケーション。瀬戸内中讃定住自立圏エリア。"
  },
  {
    name: "三木町",
    url: "https://www.my-kagawa.jp/feature/workation/top",
    workationUrl: "https://www.my-kagawa.jp/feature/workation/top",
    type: "portal",
    hasSubsidy: false,
    description: "高松市北東部に隣接するベッドタウン。香川大学農学部のキャンパスがある学術都市。自然と利便性を兼ね備えた環境でのリモートワークに適す。"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = municipalitiesData;
}
