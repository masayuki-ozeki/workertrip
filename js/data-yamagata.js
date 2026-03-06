// 山形県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 注意: 山形県は2025/2026年時点で県全体のワーケーションポータルは未整備。
//       鶴岡市が独自サイトを持つ（最終更新2023年8月）。
//       2025年度港区連携自治体として小国町が参加。

const municipalitiesData = [
  {
    name: "山形市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "山形県庁所在地。蔵王温泉スキー場が近く、四季を通じたアウトドアワーケーションが可能。県の移住定住ポータル「やまがたごこち」に情報掲載。"
  },
  {
    name: "米沢市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "上杉家の城下町。米沢牛・米沢ラーメンで有名。置賜地方の中心都市。県の移住ポータル掲載。"
  },
  {
    name: "鶴岡市",
    url: "https://tsuruoka-workation.com/",
    workationUrl: "https://tsuruoka-workation.com/",
    type: "dedicated",
    hasSubsidy: false,
    description: "日本遺産・庄内の食文化と月山・出羽三山の自然が魅力。鶴岡市専用のワーケーションサイトを運営。コワーキングスペース・宿泊プランを紹介（2025年度補助金は現在未確認）。"
  },
  {
    name: "酒田市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "日本海に面した港町。山居倉庫・海鮮料理が有名な庄内地方の商業都市。県の移住ポータル掲載。"
  },
  {
    name: "新庄市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "最上地方の中心都市。新庄まつりで有名。スノーリゾートでのワーケーションも可能。"
  },
  {
    name: "寒河江市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "西山形IC近くのさくらんぼの産地。果樹農業体験とワーケーションを組み合わせた滞在が可能。"
  },
  {
    name: "上山市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "かみのやま温泉と蔵王山麓の自然が魅力。温泉ワーケーションが注目されている。"
  },
  {
    name: "村山市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "月山・葉山を望む村山地方の都市。農業体験と自然の中でのワーケーションが可能。"
  },
  {
    name: "長井市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "フラワー長井線沿線の置賜地方の都市。あやめ公園が有名。"
  },
  {
    name: "天童市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "将棋の駒の生産量日本一。温泉と果樹農業が盛ん。山形空港に近く道外からのアクセスも良い。"
  },
  {
    name: "東根市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "さくらんぼ「佐藤錦」の産地。山形空港が市内にあり、東京から最短50分のアクセス。"
  },
  {
    name: "尾花沢市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "銀山温泉で有名な最上地方の都市。NHK朝ドラのモデルとなり注目度が高い観光地。"
  },
  {
    name: "南陽市",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "ぶどう・ワインの産地・置賜地方の農業都市。赤湯温泉があり温泉ワーケーションも可能。"
  },
  {
    name: "小国町",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: true,
    description: "朝日連峰を望む自然豊かな置賜の山間の町。令和7年度（2025年度）東京・港区連携自治体ワーケーション事業の参加自治体として選定。",
    subsidyInfo: {
      name: "令和7年度港区連携自治体ワーケーション促進事業（参加自治体）",
      amount: "最大20万円（港区側の補助）",
      period: "令和7年度（2025年度）",
      url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
      description: "東京都港区と連携し、ワーケーションプログラムを実施。港区内事業者が対象（宿泊費・交通費補助）。"
    }
  },
  {
    name: "大蔵村",
    url: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    workationUrl: "https://www.pref.yamagata.jp/020030/ijuportal.html",
    type: "portal",
    hasSubsidy: false,
    description: "肘折温泉が有名な最上地方の山あいの村。「肘折バカンス」ワーケーションプログラムあり（要確認）。"
  }
];
