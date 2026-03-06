// 徳島県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 備考:
//   徳島県のワーケーション情報は公式ポータル「アワーケーション徳島」
//   （https://tokushima-awarkation.jp/）で一元管理。
//   「阿波（アワ）」と「ワーケーション」を組み合わせた独自ブランド。
//   徳島県移住ポータルサイト「住んでみんで徳島で！」でもワーケーション情報提供：
//     https://iju.pref.tokushima.lg.jp/lifestyle/
//   全国屈指の光ブロードバンド環境が整備されており、Wi-Fi環境◎。
//   副業人材マッチングサイト「徳島副業兼業」: https://tokushima-fukugyo.com/

const municipalitiesData = [
  {
    name: "徳島県",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    prefectureUrl: "https://iju.pref.tokushima.lg.jp/lifestyle/",
    type: "portal",
    hasSubsidy: false,
    description: "徳島県全体のワーケーション情報は独自ブランド「アワーケーション（阿波＋ワーケーション）」の公式ポータルで一元管理。自然・食・歴史・文化・SDGsを体感できるモデルコースを提供。全国屈指の光ブロードバンド環境が整備済み。副業マッチングサイト「tokushima-fukugyo.com」も運営。"
  },
  {
    name: "徳島市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "阿波踊りの本場・吉野川河口の県庁所在地。四国の玄関口として本州（淡路島経由）からのアクセスが便利。コワーキングスペースも充実し、都市型ワーケーションの拠点に最適。アワーケーションモデルコースの出発点。"
  },
  {
    name: "鳴門市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "世界最大級の渦潮「鳴門の渦潮」と大塚国際美術館で世界的に有名な観光都市。明石海峡大橋・大鳴門橋経由で本州から最短でアクセス可能。アワーケーションの体験プログラムに含まれる注目エリア。"
  },
  {
    name: "小松島市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "徳島市南部に隣接する小港湾都市。紀伊水道に面した漁師町の雰囲気が漂う。徳島市へのアクセスが良好で郊外型リモートワーク環境として活用可能。"
  },
  {
    name: "阿南市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "日本アシカ（ニホンアシカ）の最後の生息地として有名な蒲生田岬がある徳島南部の工業都市。徳島LEDで知られる光産業の集積地でもある。太平洋に面した豊かな海岸線とワーケーション。"
  },
  {
    name: "吉野川市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "四国三郎・吉野川の中流域に位置する市。吉野川でのラフティング・カヤックなどアウトドアアクティビティが充実。川沿いの豊かな自然の中でのアクティブワーケーションに最適。"
  },
  {
    name: "阿波市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "吉野川北岸の農業都市。阿波踊りの発祥に関連した歴史を持つ。農業体験と藍染体験（徳島の藍は「阿波藍」として有名）を組み合わせたグリーン＆クラフトワーケーション。"
  },
  {
    name: "美馬市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "吉野川中流の「うだつの町並み」（江戸時代の商人町）が国の重要伝統的建造物群保存地区に指定された歴史文化都市。「うだつが上がる」語源の地。脇町の江戸商家街並みでの文化体験型ワーケーション。"
  },
  {
    name: "三好市",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "四国の大歩危・小歩危渓谷と「かずら橋」で有名な四国西部山岳地帯の市。祖谷温泉や平家落人伝説の残る秘境・祖谷渓谷でのワーケーションは非日常体験の最高峰。アワーケーションモデルコースの目玉エリア。"
  },
  {
    name: "松茂町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "徳島阿波おどり空港に隣接する小さな町。空港に最も近い自治体として交通の利便性が抜群。鳴門市・徳島市のアクセス拠点として活用可能な立地。"
  },
  {
    name: "北島町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "徳島市北東部に隣接するコンパクトな町。徳島都市圏の住宅地として栄える。徳島市からすぐのアクセス良好な郊外でのリモートワーク環境。"
  },
  {
    name: "藍住町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "「阿波藍」の名産地として歴史を持つ徳島市北隣の町。藍染め体験施設「あいあいらんど」でのクラフト体験とリモートワークを組み合わせた伝統文化体験型ワーケーション。"
  },
  {
    name: "板野町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "四国八十八ヶ所霊場の1番（霊山寺）から10番（切幡寺）が集中する遍路の起点エリアの町。お遍路文化と現代の働き方を組み合わせたスピリチュアルワーケーションが体験可能。"
  },
  {
    name: "上板町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "吉野川北岸の農業の町。藍の栽培で栄えた歴史を持つ。静かな農村環境でのリモートワークと農業体験を組み合わせた滞在が可能。徳島市へのアクセスも比較的便利。"
  },
  {
    name: "つるぎ町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "「にし阿波（吉野川上流域）の傾斜地農業システム」（世界農業遺産）の対象地域に含まれる吉野川上流の山間の町。急斜面を切り拓いた棚田農業の伝統と絶景が広がる唯一無二のワーケーション環境。"
  },
  {
    name: "東みよし町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "吉野川上流・三好市に隣接するラフティング聖地の玄関口となる町。四国3大祭りのひとつ「貞光ゆうゆう館の大国主まつり」も有名。川遊びとリモートワークを楽しめるアドベンチャーワーケーション。"
  },
  {
    name: "石井町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "徳島市南部に隣接する農業の町。吉野川南岸の平野部に広がる農村地帯。徳島市からのアクセスが良好で、都市近郊での農村型リモートワークに適した立地。"
  },
  {
    name: "神山町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "「神山バレー」として日本のワーケーション・テレワーク先進地域の代名詞。IT企業のサテライトオフィスが集積し、「神山まるごと高専」も開校。アワーケーションの中核エリア。森と清流に囲まれた美しい山村で創造的な仕事が可能。"
  },
  {
    name: "那賀町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "那賀川の清流と剣山国定公園の山々に囲まれた深い山間の町。日本の棚田100選に選ばれた「和無田の棚田」など美しい農村風景が残る。「にし阿波の傾斜地農業」に隣接するSDGs先進エリア。"
  },
  {
    name: "勝浦町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "日本有数のすだち生産地・勝浦川流域の農村の町。毎年8月に行われる「かっちゃん彩祭」など地域文化が根付く。徳島市から山間を経由した個性的な農村環境でのワーケーション。"
  },
  {
    name: "上勝町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "「ゼロ・ウェイスト宣言」で世界的に知られるSDGsの先進地。ゴミを45種類に分別して80%超をリサイクル。ゼロウェイストセンター「WHY」での体験とリモートワークを組み合わせたSDGs型ワーケーションは他に類を見ない。アワーケーションの目玉プログラム対象地。"
  },
  {
    name: "佐那河内村",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "「さなごうち」と呼ばれる徳島市に隣接する小村。二十世紀梨・あけぼの大豆など農産物の産地。徳島市から近距離でありながら豊かな自然が広がるコンパクトな農村型ワーケーション。"
  },
  {
    name: "牟岐町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "紀伊水道に面した徳島南部の漁師町。出羽島（国の重要伝統的建造物群保存地区）への玄関口。電気自動車不可の「無車島」出羽島での非日常体験が特徴的なワーケーション先。"
  },
  {
    name: "美波町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "アカウミガメの産卵地「大浜海岸」で有名な徳島南部の海辺の町。IT企業誘致に成功した「美波町サテライトオフィス」のモデルケースとして全国区の知名度。日和佐城と太平洋を望むワーケーションの先駆け地。"
  },
  {
    name: "海陽町",
    url: "https://tokushima-awarkation.jp/",
    workationUrl: "https://tokushima-awarkation.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "高知県境に接する徳島最南端の町。海部川・宍喰川の清流と太平洋に面した大浦海岸が魅力。サーフィン・シュノーケリングなどマリンアクティビティが充実。南阿波サンライン沿いのドライブ×ワーケーション。"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = municipalitiesData;
}
