// 愛媛県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 備考:
//   愛媛県のワーケーション情報は「えひめスマイルビジネスNavi」の
//   ワーケーションサイト（https://www.ehime-kigyoricchi.jp/workcation/）で案内。
//   「企業合宿型ワーケーション」を県が推進（地域課題解決型）。
//   南予地域限定で補助金あり（令和7年度は受付終了）：
//     https://www.pref.ehime.jp/page/109200.html
//   愛媛県公式ワーケーション情報：https://www.pref.ehime.jp/page/57376.html

const municipalitiesData = [
  {
    name: "愛媛県",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    prefectureUrl: "https://www.pref.ehime.jp/page/57376.html",
    type: "portal",
    hasSubsidy: false,
    description: "愛媛県全体のワーケーション情報は「えひめスマイルビジネスNavi」で一元案内。「地域を企業成長のフィールドに」をテーマとした企業合宿型ワーケーションを推進。しまなみ海道・道後温泉・宇和海など多彩な自然環境が揃う。"
  },
  {
    name: "松山市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "四国最大の都市・愛媛県庁所在地。日本最古の温泉地「道後温泉」を擁し、松山城・坊っちゃん列車など観光資源が豊富。松山空港から主要都市へのアクセスも良好で、リゾートワーケーションの拠点に最適。"
  },
  {
    name: "今治市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "世界一美しいサイクリングロード「しまなみ海道」の愛媛側起点。今治タオルのブランドで有名な繊維の町でもある。来島海峡の絶景とサイクリングを組み合わせたアクティブワーケーションの聖地。"
  },
  {
    name: "宇和島市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "宇和海に面した南予の中心都市。真珠・鯛めし・じゃこ天など豊かな海の幸で有名。南予地域ワーケーション定着促進事業費補助金（令和7年度）の対象エリア。宇和島城が見守る穏やかなリアス海岸でのワーケーション。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "八幡浜市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "愛媛みかんの一大産地として名高い南予の港町。九州への玄関口でフェリー便も充実。みかん畑が広がる斜面と宇和海の絶景が魅力。南予地域ワーケーション補助金の対象エリア。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "新居浜市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "住友グループ発祥の地・別子銅山で栄えた東予工業都市。「にいはまマイントピア別子」など産業観光が充実。インフラが整備された都市環境で企業合宿型ワーケーションに適す。"
  },
  {
    name: "西条市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "石鎚山を擁する西日本最高峰のある市。「打ち抜き」と呼ばれる自噴井戸の名水の町。UFOライン（瓶ヶ森林道）など絶景ドライブコースが豊富。アウトドア×ワーケーションの好適地。"
  },
  {
    name: "大洲市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "肱川流域に広がる「伊予の小京都」。大洲城の天守が肱川の流れと映え、古民家ホテルや星空観察など独自のコンテンツが充実。南予地域ワーケーション補助金の対象エリア。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "伊予市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "松山市に隣接する瀬戸内海沿いの市。ハダカ麦発祥の地で農業が盛ん。松山市へのアクセスが良く、郊外でのリモートワーク環境として注目されている。"
  },
  {
    name: "四国中央市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "四国の中央部に位置する紙産業の都市。日本有数の紙・板紙の生産地で「紙のまち」として知られる。高速道路のアクセスが良好で、徳島・高知・松山の中間地点。"
  },
  {
    name: "西予市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "日本初のジオパーク「西予ジオパーク」を有する南予の市。四国カルストの玄関口で牧歌的な高原風景が広がる。南予地域ワーケーション補助金対象エリア。自然豊かな環境での滞在型ワーケーションに最適。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "東温市",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "松山市東部に隣接する市。愛媛大学医学部・愛媛県立中央病院が立地する医療・研究都市。重信川の清流と緑豊かな環境でのリモートワークが可能。"
  },
  {
    name: "上島町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "瀬戸内海に浮かぶ弓削島・生名島・岩城島などからなる芸予諸島の島々で構成。高速船で尾道からアクセス可能。島ならではのゆったりとした時間の中でのワーケーションが人気。"
  },
  {
    name: "久万高原町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "標高700～900mの高原にある、愛媛県唯一の村（現：町）。四国八十八ヶ所44・45番が位置する遍路道の町。夏でも涼しい高原気候でのリモートワークが快適。星空観察スポットとしても有名。"
  },
  {
    name: "松前町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "松山市南部に隣接するベッドタウン。愛媛空港に近く、交通アクセスが優れる。伊予鉄道で松山市中心部まで短時間でアクセス可能な利便性の高い立地。"
  },
  {
    name: "砥部町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "「砥部焼」の産地として有名な陶芸の町。松山市に隣接しながらも豊かな自然が残る。陶芸体験とリモートワークを組み合わせた文化体験型ワーケーションが魅力。"
  },
  {
    name: "内子町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "江戸時代末期から明治の木蠟産業で栄えた「八日市護国地区」の歴史的街並みが国の重要伝統的建造物群保存地区に指定。農村と伝統文化を活かした滞在型ワーケーションが注目。南予地域補助金対象エリア。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "伊方町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "佐田岬半島の先端を占める細長い半島の町。日本最長の佐田岬半島から四国最西端を望む絶景が広がる。風力発電が盛んな再エネの町。南予地域ワーケーション補助金の対象エリア。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "松野町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "「森の国」をキャッチフレーズとする南予の小さな町。日本最後の清流・四万十川の支流が流れ、滑床渓谷などの豊かな自然が魅力。南予地域補助金対象エリア。自然体験型ワーケーションの適地。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "鬼北町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "鬼をキャラクターにしたユニークな観光PR「道の駅日吉夢産地」で知られる南予の農村。世界農業遺産「にし阿波の傾斜地農業システム」と隣接する山間地。南予地域補助金対象エリア。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  },
  {
    name: "愛南町",
    url: "https://www.ehime-kigyoricchi.jp/workcation/",
    workationUrl: "https://www.ehime-kigyoricchi.jp/workcation/",
    type: "portal",
    hasSubsidy: true,
    description: "高知県境に接する愛媛最南端の町。宇和海のリアス海岸でのダイビング・釣りなどマリンアクティビティが充実。ブリ・真鯛の養殖産地で新鮮な海の幸を楽しめる。南予地域補助金対象エリア。",
    subsidyUrl: "https://www.pref.ehime.jp/page/109200.html"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = municipalitiesData;
}
