// 高知県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 2026-03-06 修正: 高知市テレワーク導入支援補助金URL
//   旧（404）: https://www.city.kochi.kochi.jp/soshiki/40/kochi-telwork.html
//   新（200）: https://www.city.kochi.kochi.jp/life/sub/5/196/1532/（企業支援一覧ページ）
// 備考:
//   高知県のワーケーション情報は公式ポータル「高知でワーケーション」
//   （https://kochi-tabi.jp/kanko-campaign/workation/）で一元管理。
//   県外企業向け助成制度あり（ワーケーション推進事業助成金）：
//     https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2
//   また高知市にはテレワーク導入支援補助金あり（上限30万円）。
//   シェアオフィス検索ポータル「Haretoke」: https://kochi-work-haretoke.jp/

const municipalitiesData = [
  {
    name: "高知県",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    prefectureUrl: "https://www.pref.kochi.lg.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "高知県全体のワーケーション情報は公式ポータル「高知でワーケーション」で一元管理。県外企業向けワーケーション推進事業助成金（1人2万8千円）を実施。清流・太平洋・四万十川・室戸岬など日本屈指の大自然でのワーケーションを提供。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "高知市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "土佐の城下町・高知県庁所在地。よさこいの祭りと土佐の日曜市が有名。高知市独自のテレワーク導入支援事業費補助金（補助率1/2・上限30万円）あり。「オーベルジュ土佐山」など高品質なワーケーション施設が点在。",
    subsidyUrl: "https://www.city.kochi.kochi.jp/life/sub/5/196/1532/"
  },
  {
    name: "室戸市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「室戸ユネスコ世界ジオパーク」に認定された太平洋沿岸の市。荒々しい岩礁と黒潮が生み出す雄大な景観の中でのワーケーションが人気。深層水を活用した産業も有名。CLS高知ワーケーションツアーの会場にも。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "安芸市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "阪神タイガースのキャンプ地として知られる東部の中心都市。野良時計（国の重要文化財）などレトロな街並みが残る。「伊尾木ステーションゲストハウス」などワーケーション向け施設あり。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "南国市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "高知龍馬空港に隣接する物流・農業の拠点都市。ショッピングモールなど生活インフラが整い、高知市へのアクセスも便利。農業体験と仕事を組み合わせたグリーンワーケーションの場として注目。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "土佐市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "土佐和紙の産地として知られる高知市西隣の市。仁淀川河口に位置し、青い川と太平洋を望む絶景が魅力。「仁淀ブルー」と称される透明度の高い川でのアクティビティが充実。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "須崎市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「鍋焼きラーメン」発祥の地として有名な土佐湾に面した漁港都市。カワウソの目撃情報で話題になった新荘川が流れる。豊富な水産資源を活かした食体験型ワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "宿毛市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "高知県最西端・愛媛県との県境に位置する市。宿毛湾の穏やかな入り江と沈下橋など土佐の原風景が残る。九州へのフェリー便があり、海を渡るアクセスも可能。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "土佐清水市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「足摺岬」と「竜串・見残し海岸」など雄大な太平洋の景観を誇る高知県最南端の市。カツオの一本釣りで有名な黒潮の恵みの地。日本最南端級の絶景での非日常ワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "四万十市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「日本最後の清流」四万十川の下流に位置する市。沈下橋・ウナギ・アユなど四万十川の文化を体感できる。ワーケーション対応型宿泊施設（ツーリズム四国推薦）が充実。「民宿四万十川」などのんびりとした滞在が可能。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "香南市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "高知市東隣に位置し、龍河洞（国の天然記念物）が有名な市。温暖な気候でビニールハウス農業が盛ん。高知空港に近く、アクセス良好。農業体験と仕事を組み合わせたワーケーションに適す。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "香美市",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「物部川」と山岳地帯を擁する市。アンパンマンの作者・やなせたかし氏の出身地で「やなせたかし記念館アンパンマンミュージアム」がある。高知工科大学がある学術都市でもある。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "東洋町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "高知県最東端・徳島県との県境の小さな町。日本一の砂浜「生見海岸」はサーフィンの聖地として全国に知られる。サーフワーケーションの目的地として若い世代に人気。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "奈半利町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "土佐くろしお鉄道の終点駅がある安芸郡の小さな町。明治期の洋風建築が残る「奈半利町歴史的建造物群」が特徴的。静かな漁港町でゆったりとした時間の中でリモートワーク。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "田野町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "日本一小さい町のひとつとも言われる安芸郡の小町。周囲を田んぼと山に囲まれた農村風景が広がる。奈半利町・安田町と隣接し、集落単位でのローカルワーケーションに適す。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "安田町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "安田川でのアユ釣りと清流が有名な安芸郡の山間の町。「安田川アユおどる清流キャンプ場」などアウトドア施設が充実。四万十川と並ぶ清流でのフィッシング×ワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "北川村",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "奈半利川の清流と深い山間に位置する小村。「モネの庭マルモッタン」を有する芸術の村として知られる。印象派画家モネの庭を再現した美しい庭園でインスピレーションを受けながらのワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "馬路村",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「ゆずの村」として全国ブランドを確立した山間の小村。人口わずか約800人ながら年商約20億円のゆず加工品で地域ブランディングの成功事例として注目。村ビジネスを学ぶ視察型ワーケーションが人気。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "芸西村",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "高知市の東隣に位置する小さな村。「るるぶ亭」などの宿泊施設と農業体験が充実。高知市から近距離で農村環境を体験できる贅沢な立地。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "本山町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "吉野川源流域に位置する嶺北地方の中心集落。「本山さめうらブランド」の茶どころとして有名。さめうら湖でのカヌーなどアウトドア体験と組み合わせたワーケーションが充実。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "大豊町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "日本最高齢の巨杉「杉の大杉」（天然記念物）を有する山間の町。「山荘梶ヶ森」は標高1,400mに近いワーケーション施設として「高知でワーケーション」で紹介。涼しい高地でのリモートワーク環境。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "土佐町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "早明浦ダム（四国の水がめ）の湖畔に位置する嶺北の町。「土佐町しばてん童話祭」など独自の文化イベントも充実。清涼な山間での滞在型ワーケーションが可能。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "大川村",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "日本一人口の少ない村のひとつとして知られる山間の小村。高知県の最北端に位置し、四国電力の小水力発電所が多数立地する。過疎地域のチャレンジから学ぶ視察型ワーケーションに独自の価値。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "いの町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「土佐和紙」の産地として世界に名を馳せる仁淀川上流の町。「いの町紙の博物館」で和紙の歴史を学べる。「ものべからワーケーション」関連エリアにも近い、清流仁淀川での自然体験型ワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "仁淀川町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「仁淀ブルー」で世界的に知られる仁淀川中流域の山岳の町。宿泊施設と夕食付きのワーケーション企画が充実しており、日中の観光スポット・ワークスポット提案も運営が行う人気エリア。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "中土佐町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "カツオのたたきが有名な「久礼大正町市場」で知られる漁師町。太平洋に面した断崖絶壁の絶景と新鮮な海産物が魅力。ものべ川流域にも近い土佐中部の自然体験型ワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "佐川町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「植物分類学の父」牧野富太郎の生誕地として有名な高岡郡の町。「牧野公園」の植物観察とリモートワークを組み合わせたサイエンスワーケーション。2022年NHK朝ドラ「らんまん」でも注目を集めた。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "越知町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "仁淀川沿いの静かな農村の町。「横倉山」（龍馬の隠れ岩）など自然公園が充実。仁淀川のカヤック・フィッシング体験とリモートワークを組み合わせたワーケーションが人気。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "梼原町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「雲の上の図書館」など建築家・隈研吾デザインの公共施設で有名な高知県西端の山間の町。再生可能エネルギー100%を目指す先進的な環境都市。坂本龍馬の脱藩の道でも知られる。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "日高村",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「オムライス街道」として知られる個性的な村おこしで有名な高岡郡の小村。高知市と須崎市の中間に位置し、仁淀川にも近い。コンパクトながら充実した食体験が楽しめるユニークなワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "津野町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「四国カルスト」の高知県側玄関口。標高1,400m級の高原に広がる石灰岩の絶景で牛が放牧される独特の風景が広がる。夏の避暑地として涼しい高原でのワーケーションに最適。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "四万十町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "「四万十コワーキングスペース」が整備された四万十川の中流域の町（幡多郡）。「仕事も暮らしも自分スタイル」をテーマに高知でワーケーション特集でも紹介。農業と清流を生かした長期滞在型ワーケーション。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "大月町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "竜串・見残し海岸や柏島など世界屈指の透明度を誇る海が魅力の幡多郡の町。ダイビングポイントが多数あり、マリンスポーツを楽しみながらリモートワークができるワーケーション先として人気。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "三原村",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "高知県で唯一の「村」（四万十川最上流部）。人口約1,500人ほどの小さな山村だが豊かな自然と牧歌的な農村風景が魅力。完全な「静けさ」を求めるディープな自然体験型ワーケーションの穴場。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  },
  {
    name: "黒潮町",
    url: "https://kochi-tabi.jp/kanko-campaign/workation/",
    workationUrl: "https://kochi-tabi.jp/kanko-campaign/workation/",
    type: "portal",
    hasSubsidy: true,
    description: "カツオの一本釣りと砂浜日本一の「入野松原」が有名な幡多郡の町。黒潮本陣での土佐流かつお料理と太平洋のサーフィンを組み合わせたワーケーションで注目。「リゾートホテル海辺の果樹園」が立地。",
    subsidyUrl: "https://kochi-tabi.jp/kanko-campaign/workation/support.html?id=2"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = municipalitiesData;
}
