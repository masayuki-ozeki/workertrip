// 千葉県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "千葉市",
    url: "https://www.pref.chiba.lg.jp/kankou/chiba-workation/index.html",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "dedicated",
    hasSubsidy: false,
    description: "県庁所在地。千葉県ワーケーションポータル「ちょっとちかばでワーケーション」の窓口。首都圏アクセス良好でコワーキングスペースも充実。"
  },
  {
    name: "銚子市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "太平洋と利根川に囲まれた銚子市。灯台や漁港を望む絶景の中でのワーケーションが楽しめる。"
  },
  {
    name: "市川市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "東京に隣接する市川市。都市型テレワーク環境が充実しており、首都圏からのアクセス良好。"
  },
  {
    name: "船橋市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "千葉市に次ぐ大都市・船橋市。商業施設やコワーキングスペースが充実した都市型テレワーク環境。"
  },
  {
    name: "館山市",
    url: "https://tateyama-workation.jp/",
    workationUrl: "https://tateyama-workation.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "東京から車で80分の南房総の玄関口。専用ワーケーションサイト「館山ワーケーション」を運営。コンシェルジュが個別プランを提案。海・山アクティビティ豊富。"
  },
  {
    name: "木更津市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "アクアラインで東京から約40分。三井アウトレットパーク木更津に近く、観光とワークを両立できる環境。"
  },
  {
    name: "松戸市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "東京・葛飾区に隣接する松戸市。コワーキングスペースやシェアオフィスが充実した都市型テレワーク環境。"
  },
  {
    name: "野田市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "醤油の産地・野田市。利根川沿いの自然環境を活かしたワーケーション体験が可能。"
  },
  {
    name: "茂原市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "房総半島中部の中心都市。農業と自然に囲まれたワーケーション環境が整備。"
  },
  {
    name: "成田市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "成田国際空港がある国際都市。成田山新勝寺の門前町としての歴史と、空港アクセスを活かしたワーケーション環境。"
  },
  {
    name: "佐倉市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "城下町の風情が残る佐倉市。国立歴史民俗博物館や印旛沼など文化・自然に恵まれたワーケーション環境。"
  },
  {
    name: "東金市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "九十九里浜に近い東金市。海沿いの自然豊かな環境でのワーケーションが楽しめる。"
  },
  {
    name: "旭市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "九十九里浜に面した旭市。海沿いの爽快な環境でのワーケーション体験が可能。"
  },
  {
    name: "習志野市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "千葉市に隣接する習志野市。コワーキングスペースも充実した都市型テレワーク環境。"
  },
  {
    name: "柏市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "柏の葉スマートシティで有名。IT企業やスタートアップが集積し、コワーキングスペースが充実したテレワーク環境。"
  },
  {
    name: "勝浦市",
    url: "https://katsuura-kankou.net/workation/",
    workationUrl: "https://katsuura-kankou.net/workation/",
    type: "dedicated",
    hasSubsidy: false,
    description: "太平洋に面した漁師町・勝浦市。海岸沿いの絶景の中でのワーケーションを専用ページで案内。朝市・温泉も楽しめる人気のワーケーションスポット。"
  },
  {
    name: "市原市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "dedicated",
    hasSubsidy: false,
    description: "「くらす はたらく いちはら」として移住・ワーケーション専用ポータルを運営。里山・棚田の絶景の中でのワーケーションが魅力。コワーキングスペースも紹介。"
  },
  {
    name: "流山市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "「都心から一番近い森のまち」流山市。TSUKUBA EXPRESSが通り、自然と利便性が融合したテレワーク環境。"
  },
  {
    name: "八千代市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "千葉市・船橋市に隣接する八千代市。緑豊かな住宅都市でのテレワーク環境が充実。"
  },
  {
    name: "我孫子市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "手賀沼沿いの「北のあびこ」。豊かな自然環境と都市利便性が融合したワーケーション環境。"
  },
  {
    name: "鴨川市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "太平洋に面した鴨川市。鴨川シーワールドや棚田の絶景の中でのワーケーションが楽しめる。"
  },
  {
    name: "鎌ヶ谷市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "都市近郊の鎌ヶ谷市。交通利便性の高い環境でのテレワーク推進中。"
  },
  {
    name: "君津市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "房総半島の山間部・君津市。亀山湖などの自然に囲まれたワーケーション体験が可能。"
  },
  {
    name: "富津市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "東京湾に面した富津市。富津岬からの絶景とアクアライン・フェリーを活用したワーケーション環境。"
  },
  {
    name: "浦安市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "東京ディズニーリゾートがある浦安市。東京至近でコワーキングスペースも充実。"
  },
  {
    name: "四街道市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "千葉市近郊の四街道市。住宅都市でのテレワーク環境が整備。"
  },
  {
    name: "袖ヶ浦市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "東京湾沿いの袖ヶ浦市。工業都市ながら自然公園も多く、テレワーク環境が整備されている。"
  },
  {
    name: "八街市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "落花生の産地・八街市。農村環境の中でのテレワーク・ワーケーション体験が可能。"
  },
  {
    name: "印西市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "千葉ニュータウン・印西牧の原がある印西市。データセンターも多く、IT環境が充実したテレワーク環境。"
  },
  {
    name: "白井市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "千葉NT西部エリアの白井市。東京近郊でありながら農村の雰囲気が残るワーケーション環境。"
  },
  {
    name: "富里市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "成田空港に近い富里市。スイカの産地で、農業体験とワーケーションを組み合わせた取り組みを推進。"
  },
  {
    name: "南房総市",
    url: "https://minamibosocity-iju.jp/guide/work/workcationwork/",
    workationUrl: "https://minamiboso-workation.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "南房総市では移住・ワーケーション専用ポータルを運営。ワーケーション提携施設一覧も整備。海・山の豊かな自然と温暖な気候が魅力。東京から高速バスでアクセス可能。"
  },
  {
    name: "匝瑳市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "九十九里浜の北端・匝瑳市。海と農村の自然環境の中でのワーケーション体験が可能。"
  },
  {
    name: "香取市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "香取神宮で有名な香取市。利根川沿いの水郷地帯でのワーケーション体験ができる。"
  },
  {
    name: "山武市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "九十九里浜沿いの山武市。海と森の自然環境の中でのワーケーション推進中。"
  },
  {
    name: "いすみ市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "いすみ鉄道と夷隅川が有名。移住者が多い人気エリアで、自然豊かなワーケーション環境が整備されている。"
  },
  {
    name: "大網白里市",
    url: "https://life-style.chiba.jp/workcation/",
    workationUrl: "https://life-style.chiba.jp/workcation/",
    type: "portal",
    hasSubsidy: false,
    description: "九十九里浜の南端・大網白里市。海沿いの環境と農業体験を組み合わせたワーケーション体験が可能。"
  },
  {
    name: "千葉県（ちばワーケーション実施企業助成）",
    url: "https://www.pref.chiba.lg.jp/kankou/chiba-workation/jyosei.html",
    workationUrl: "https://www.pref.chiba.lg.jp/kankou/chiba-workation/jyosei.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "千葉県全域を対象とした「ちばワーケーション実施企業助成事業」。合宿型ワーケーションを実施する企業・団体を支援。30人泊以上が対象。",
    subsidyInfo: {
      name: "ちばワーケーション実施企業助成事業",
      amount: "上限120万円",
      period: "令和7年度（2月末まで）",
      url: "https://www.pref.chiba.lg.jp/kankou/chiba-workation/jyosei.html",
      description: "千葉県内で合宿型ワーケーション（30人泊以上）を実施する民間企業・団体に対し宿泊費・交通費・施設利用料の1/2を補助。"
    }
  }
];
