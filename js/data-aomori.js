// 青森県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 注意: 県全体のワーケーションポータルは未整備。青森市が最も積極的に取り組んでいる。

const municipalitiesData = [
  {
    name: "青森市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "青森市はワーケーション・リモートワークを積極的に推進。体験モニター事業や浪岡地区移住体験を実施。リモートワーカー応援補助金（令和7年度）も開始。",
    subsidyInfo: {
      name: "リモートワーカー応援補助金（令和7年度）",
      amount: "要確認",
      period: "2025年4月1日～",
      url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002219/1002223.html",
      description: "青森市に移住し、移住支援金をテレワーク要件で交付決定された方に加算支給するリモートワーカー応援補助金。"
    }
  },
  {
    name: "弘前市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "桜の名所・弘前城で有名な城下町。津軽地方の中心都市。ワーケーション専用ページは未整備のため、青森市情報を参考に。"
  },
  {
    name: "八戸市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "三陸沖の豊かな海産物で有名な青森県第2の都市。2025年秋に青森市と合同で「おためしテレワーク体験モニター」を実施。独自の恒常的補助金は現在なし。"
  },
  {
    name: "黒石市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "こみせ（アーケード）で有名な歴史情緒あふれる城下町。ワーケーション専用ページは未整備。"
  },
  {
    name: "五所川原市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "立佞武多（たちねぷた）祭りで有名な津軽西海岸の拠点都市。ワーケーション専用ページは未整備。"
  },
  {
    name: "十和田市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "十和田湖・奥入瀬渓流の玄関口。大自然の中でワーケーションが可能。専用ページは未整備。"
  },
  {
    name: "三沢市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "米空軍基地と隣接する国際色豊かな都市。小川原湖が近い。ワーケーション専用ページは未整備。"
  },
  {
    name: "むつ市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "下北半島の中心都市。恐山・大間崎など独特の観光資源が豊富。ワーケーション専用ページは未整備。"
  },
  {
    name: "つがる市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "縄文遺跡群がある津軽西海岸の農業都市。ワーケーション専用ページは未整備。"
  },
  {
    name: "平川市",
    url: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    workationUrl: "https://www.city.aomori.aomori.jp/kurashi_kankyo/sumai/1002204/1002211/1002212/1002213.html",
    type: "portal",
    hasSubsidy: false,
    description: "碇ヶ関温泉など温泉地が点在する青森県南部の都市。ワーケーション専用ページは未整備。"
  }
];
