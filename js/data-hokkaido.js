// 北海道 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 注意: 専用ページがある自治体のみ個別URL掲載。その他は道公式ポータルへ誘導。

const municipalitiesData = [
  {
    name: "札幌市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "北海道最大の都市。コワーキングスペースが充実し、国際空港から直結のアクセス。北海道型ワーケーションポータルサイトに施設情報掲載。"
  },
  {
    name: "函館市",
    url: "https://h-workation.jp/",
    workationUrl: "https://h-workation.jp/",
    type: "dedicated",
    hasSubsidy: true,
    description: "歴史ある港町。函館市独自のワーケーション専用サイトを運営。サテライトオフィス等の地方拠点開設補助金あり（立地環境視察に係る交通費・宿泊費補助も）。",
    subsidyInfo: {
      name: "函館市地方拠点開設支援事業補助金",
      amount: "要確認",
      period: "令和7年度",
      url: "https://h-workation.jp/topics/grants-location/",
      description: "市内でサテライトオフィス等の地方拠点を開設する事業者に対し、開設・運営経費の一部を補助。立地環境視察の交通費・宿泊費補助も有。"
    }
  },
  {
    name: "旭川市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "北海道第2の都市。大雪山系への玄関口で自然豊か。北海道型ワーケーションポータルサイトに施設情報掲載。"
  },
  {
    name: "小樽市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "歴史的建造物と運河で有名な観光都市。海沿いの環境でワーケーション可能。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "釧路市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "霧の都・湿原の街。釧路湿原・阿寒湖の自然を活かしたワーケーションが可能。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "帯広市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "十勝平野の中心都市。広大な農業地帯とスタートアップ文化が共存。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "苫小牧市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "道内最大の工業港湾都市。新千歳空港に近く、道外からのアクセス良好。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "北見市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "オホーツク地方の中心都市。玉ねぎ生産で有名。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "富良野市",
    url: "https://furano-workation.com/joseikin-2025/",
    workationUrl: "https://furano-workation.com/joseikin-2025/",
    type: "dedicated",
    hasSubsidy: true,
    description: "北海道の「へそ」と呼ばれるラベンダーの街。子育て世代・半農半X・ローカルベンチャー向けなど多彩なワーケーション助成金を令和7年度も実施。",
    subsidyInfo: {
      name: "ワーケーション展開費用助成金（令和7年度）",
      amount: "最大10万円（宿泊費2/3）",
      period: "2025年4月1日～2026年3月末",
      url: "https://furano-workation.com/joseikin-2025/",
      description: "子育て世代・転職なき移住希望者・半農半X・ローカルベンチャー・チーム合宿など複数種類。宿泊費・レンタカー代・保育料等を助成。"
    }
  },
  {
    name: "新得町",
    url: "https://www.shintoku-town.jp/sangyou_kankou/job/sigototyuu/worcationjyoseikin/",
    workationUrl: "https://www.shintoku-town.jp/sangyou_kankou/job/sigototyuu/worcationjyoseikin/",
    type: "dedicated",
    hasSubsidy: true,
    description: "十勝エリアの東大雪・日高山脈に囲まれた自然豊かな町。そばの産地としても有名。連続4泊以上で宿泊費を助成するワーケーション推進事業助成金を実施。",
    subsidyInfo: {
      name: "ワーケーション推進事業助成金",
      amount: "4,000円/泊（1/2以内、最大7泊）＋商品券1,000円/泊",
      period: "令和7年度",
      url: "https://www.shintoku-town.jp/sangyou_kankou/job/sigototyuu/worcationjyoseikin/",
      description: "連続4泊以上で宿泊費を助成。SNS発信・交流会参加が要件。商品券追加交付あり。"
    }
  },
  {
    name: "浦河町",
    url: "https://urakawa-stay.net/news/koutsuuhi_hojo/",
    workationUrl: "https://urakawa-stay.net/news/koutsuuhi_hojo/",
    type: "dedicated",
    hasSubsidy: true,
    description: "JRA日高育成牧場を擁する競走馬の産地。乗馬・ホースセラピー体験が可能。2泊以上のワーケーションに対しレンタカー代補助を実施。",
    subsidyInfo: {
      name: "ワーケーション交通費補助事業",
      amount: "1日あたり上限5,000円（町外レンタカー）、最大21日分",
      period: "令和7年度",
      url: "https://urakawa-stay.net/news/koutsuuhi_hojo/",
      description: "町内宿泊施設に2泊以上滞在し、レンタカーを利用した場合に料金の1/2（1日5,000円上限）を補助。"
    }
  },
  {
    name: "江別市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "札幌市に隣接する大学のまち。テレワーク環境が整備されつつある。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "千歳市",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "新千歳空港を擁する空の玄関口。道内外からのアクセス抜群。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "ニセコ町",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "世界有数のスキーリゾート。国際色豊かな環境とコワーキングスペースが充実。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "倶知安町",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "ニセコ観光の拠点となる後志地方の中心地。四季を通じたリゾートワーケーションが可能。北海道型ワーケーションポータル掲載。"
  },
  {
    name: "鹿追町",
    url: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    workationUrl: "https://www.hokkaido-work-vacation.pref.hokkaido.lg.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "然別湖を擁する十勝の鹿追町。2025年シカソンサミット開催地。北海道型ワーケーションポータルに掲載。"
  }
];
