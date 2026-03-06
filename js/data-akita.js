// 秋田県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03
// 注意: 秋田県はWappaポータル(https://workation.akita.jp/)と県の移住支援制度が充実。
//       にかほ市は独自のワーケーション補助金あり。

const municipalitiesData = [
  {
    name: "秋田市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "秋田県庁所在地。秋田ワーケーション推進協会のWappaポータルを通じて県全域の施設・プログラム情報を提供。リモートワーク移住体験支援金（令和7年度）の対象地域。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）／移住後最大220万円（個人）",
      period: "令和7年度（交付決定日～令和8年2月末）",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県外企業が社員のリモートワーク移住試行を実施する場合に交通費・宿泊費等を補助。移住後は3年間最大220万円の支援金も。"
    }
  },
  {
    name: "能代市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "秋田杉の産地・白神山地の麓。バスケの街でも有名。Wappaポータル掲載。リモートワーク移住体験支援金対象地域。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "横手市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "かまくらと横手焼きそばで有名な県南の中心都市。Wappaポータル掲載。リモートワーク移住体験支援金対象。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "大館市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "忠犬ハチ公の故郷・大館市。天然スギを使った曲げわっぱ工芸で有名。大館能代空港が近く交通便利。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "男鹿市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "ナマハゲで有名な男鹿半島の都市。日本海を望む絶景の中でワーケーション可能。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "湯沢市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "稲庭うどん・小野小町ゆかりの地。奥羽山脈の麓の自然豊かな温泉地。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "鹿角市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "八幡平・十和田湖の玄関口。花輪ばやしで有名な県北の都市。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "由利本荘市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "鳥海山と日本海を望む沿岸都市。風力発電が盛んな再生可能エネルギー先進地域。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "潟上市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "日本最大の湖・八郎潟干拓地に隣接する農業都市。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "大仙市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "全国花火競技大会（大曲の花火）で有名。仙北平野の農業都市。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。"
    }
  },
  {
    name: "北秋田市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "秋田内陸縦貫鉄道が走る森と川の都市。令和7年度「ワーケション推進高速Wi-Fi設置事業補助金」を実施（宿泊施設向け）。Wappaポータル掲載。",
    subsidyInfo: {
      name: "ワーケション推進高速Wi-Fi設置事業補助金（令和7年度）",
      amount: "最大60万円（補助率3/4）",
      period: "令和7年度",
      url: "https://workation.akita.jp/",
      description: "市内宿泊施設のWi-Fi設備整備を補助する事業者向け補助金。"
    }
  },
  {
    name: "にかほ市",
    url: "https://www.city.nikaho.akita.jp/soshikikarasagasu/shokoseisakuka/gyomuannai/5/2/workvacation/4560.html",
    workationUrl: "https://www.city.nikaho.akita.jp/soshikikarasagasu/shokoseisakuka/gyomuannai/5/2/workvacation/4560.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "雄大な鳥海山と日本海を望む絶景の市。「はがいぐ（はかどる）ワーケーション」をコンセプトに、農業・漁業体験付きの独自プログラムと補助金を実施。",
    subsidyInfo: {
      name: "にかほ市ワーケーション事業実施支援補助金",
      amount: "1泊上限30,000円×5泊（1/2補助）",
      period: "令和7年度",
      url: "https://www.city.nikaho.akita.jp/soshikikarasagasu/shokoseisakuka/gyomuannai/5/2/workvacation/4560.html",
      description: "市外企業の役員・社員またはフリーランスが対象。2日以上滞在で往復交通費・宿泊費・市内交通費を1/2補助（上限1泊3万円×5泊）。"
    }
  },
  {
    name: "仙北市",
    url: "https://workation.akita.jp/",
    workationUrl: "https://workation.akita.jp/",
    type: "portal",
    hasSubsidy: true,
    description: "角館（武家屋敷）と田沢湖・乳頭温泉郷が有名な観光都市。Wappaポータル掲載。",
    subsidyInfo: {
      name: "リモートワーク移住体験支援金（令和7年度）",
      amount: "最大60万円（企業）",
      period: "令和7年度",
      url: "https://www.pref.akita.lg.jp/pages/archive/71677",
      description: "県の移住体験支援金の対象地域。乳頭温泉でのワーケーションが人気。"
    }
  }
];
