// 福島県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "福島市",
    url: "https://www.city.fukushima.fukushima.jp/soshiki/5/1018/1/16201.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "県庁所在地・福島市。磐梯吾妻スカイラインや飯坂温泉を有し、自然豊かなワーケーション環境。オフィス等立地支援制度を実施。「ふくしまぐらし×テレワーク支援補助金」が利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。長期（30〜90泊）は補助率3/4・上限30万円/人、短期（2〜13泊）は1万円/泊。"
    }
  },
  {
    name: "会津若松市",
    url: "https://www.city.aizuwakamatsu.fukushima.aizu-workcation.jp/",
    workationUrl: "https://www.city.aizuwakamatsu.fukushima.aizu-workcation.jp/",
    type: "dedicated",
    hasSubsidy: true,
    description: "「AIZU WORKCATION」として専用ワーケーションサイトを運営。スマートシティ政策も先進的。東山温泉ワーケーションモデル地域にも指定。コワーキングスペースが充実。「ふくしまぐらし×テレワーク支援補助金」利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。長期（30〜90泊）は補助率3/4・上限30万円/人、短期（2〜13泊）は1万円/泊。"
    }
  },
  {
    name: "郡山市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "福島県第二の都市。コワーキングスペースが充実し、猪苗代湖・磐梯山への観光アクセスも良好。「ふくしまぐらし×テレワーク支援補助金」利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。長期（30〜90泊）は補助率3/4・上限30万円/人、短期（2〜13泊）は1万円/泊。"
    }
  },
  {
    name: "いわき市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "太平洋沿岸の港町・いわき市。スパリゾートハワイアンズで有名。海沿いの開放的な環境でのワーケーションが人気。「ふくしまぐらし×テレワーク支援補助金」利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。長期（30〜90泊）は補助率3/4・上限30万円/人、短期（2〜13泊）は1万円/泊。"
    }
  },
  {
    name: "白河市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: true,
    description: "関所で有名な白河市。白河ラーメンの本場で、南湖公園など豊かな自然環境でのワーケーションが可能。「ふくしまぐらし×テレワーク支援補助金」利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "須賀川市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: true,
    description: "「ウルトラマン」の生みの親・円谷英二のふるさと。牡丹で有名な須賀川市。農村環境でのワーケーション体験が可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "喜多方市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: true,
    description: "ラーメンと蔵の街・喜多方市。会津盆地の豊かな自然環境と歴史文化を活かしたワーケーション体験が楽しめる。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "相馬市",
    url: "https://www.city.soma.fukushima.jp/shinososhiki/kikakuseisakuka/izyutezyu/15916.html",
    workationUrl: "https://www.city.soma.fukushima.jp/shinososhiki/kikakuseisakuka/izyutezyu/15916.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "太平洋沿岸の相馬市。相馬野馬追の伝統を持ち、移住・テレワーク支援制度を整備。ふくしまぐらし×テレワーク支援補助金利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "二本松市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: true,
    description: "菊人形で有名な二本松市。安達太良山の自然環境と温泉でのワーケーション体験が魅力。高村光太郎の「智恵子の言う空」の舞台。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "田村市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: true,
    description: "あぶくま洞で有名な田村市。豊かな山岳・鍾乳洞の自然環境の中でのワーケーション体験が楽しめる。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "南相馬市",
    url: "https://www.city.minamisoma.lg.jp/portal/sections/16/1640/hataraku/16753.html",
    workationUrl: "https://www.city.minamisoma.lg.jp/portal/sections/16/1640/hataraku/16753.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "相馬野馬追の南相馬市。市公式サイトにテレワーク・ワーケーション専用ページを設置。コワーキングスペース情報も掲載。「ふくしまぐらし×テレワーク支援補助金」が利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.city.minamisoma.lg.jp/portal/sections/16/1640/12153/16603.html",
      description: "県外在住の方が福島県内に一定期間滞在し、コワーキングスペース等でテレワークを行った場合に費用の一部を補助。"
    }
  },
  {
    name: "伊達市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: true,
    description: "福島市に隣接する伊達市。桃・梨の産地として有名。飯坂温泉にも近く、農業体験と温泉を楽しめるワーケーション環境。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
      description: "県外在住者が福島県に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "本宮市",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "阿武隈川沿いの本宮市。農村環境と便利な交通アクセスを活かしたテレワーク環境が整備。"
  },
  {
    name: "桑折町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "桃の産地・桑折町。農村の豊かな自然環境でのワーケーション体験が可能。"
  },
  {
    name: "国見町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "福島県最北端の国見町。桃・りんごの産地で、農業体験とワーケーションを組み合わせた取り組みを推進。"
  },
  {
    name: "川俣町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "シルクで有名な川俣町。阿武隈山地の豊かな自然環境の中でのワーケーション体験が可能。"
  },
  {
    name: "大玉村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "安達太良山の麓・大玉村。農業と山岳自然の中でのワーケーション体験が楽しめる。"
  },
  {
    name: "鏡石町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "東北本線沿線の鏡石町。農村環境の中でのテレワーク推進中。"
  },
  {
    name: "天栄村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "牧場と高原が広がる天栄村。湯本温泉も有し、自然豊かな環境でのワーケーション体験が楽しめる。"
  },
  {
    name: "西郷村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "那須山系の麓・西郷村。那須甲子スキー場や白河羽鳥湖がある自然豊かな環境でのワーケーション体験が可能。"
  },
  {
    name: "矢吹町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "白河の南・矢吹町。農村環境の中でのテレワーク・ワーケーション推進中。"
  },
  {
    name: "棚倉町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "城跡と桜の棚倉町。八溝山の麓でのワーケーション体験が可能。"
  },
  {
    name: "矢祭町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "久慈川源流域の山村・矢祭町。自然豊かな環境と独自の自立路線を歩む村の個性がワーケーションの魅力。"
  },
  {
    name: "塙町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "塙温泉と久慈川が流れる塙町。農村の豊かな自然環境でのワーケーション体験が楽しめる。"
  },
  {
    name: "鮫川村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "阿武隈山地の秘境・鮫川村。清流と農業体験を組み合わせたワーケーション推進中。"
  },
  {
    name: "石川町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "県南の中心・石川町。農業と自然環境の中でのテレワーク・ワーケーション環境が整備。"
  },
  {
    name: "玉川村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "阿武隈川沿いの玉川村。農村環境での自然体験とワーケーションを組み合わせた推進中。"
  },
  {
    name: "平田村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "阿武隈山地の平田村。かつての炭鉱のまちが田園集落に変わり、農業体験とワーケーションを推進。"
  },
  {
    name: "浅川町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "農業が盛んな浅川町。棚田や農村景観を活かしたワーケーション体験が可能。"
  },
  {
    name: "古殿町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "弓道の里・古殿町。山間の自然環境の中でのワーケーション体験が可能。"
  },
  {
    name: "三春町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "三春滝桜で有名な三春町。歴史ある城下町と農村の自然環境を活かしたワーケーション推進中。"
  },
  {
    name: "小野町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "夏井川渓谷の麓・小野町。清流と山岳の絶景の中でのワーケーション体験が楽しめる。"
  },
  {
    name: "北塩原村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "裏磐梯高原・桧原湖を擁する北塩原村。四季の絶景の中でのワーケーション体験が人気。"
  },
  {
    name: "西会津町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "奥会津の玄関口・西会津町。山間の静寂な環境でのワーケーション体験が魅力。"
  },
  {
    name: "磐梯町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "磐梯山の麓・磐梯町。猪苗代湖と磐梯山の壮大な自然環境でのワーケーション体験が楽しめる。"
  },
  {
    name: "猪苗代町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "猪苗代湖・磐梯山を望む猪苗代町。野口英世の生誕地。湖畔の絶景の中でのワーケーション体験が人気。"
  },
  {
    name: "会津坂下町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "会津盆地の中心・会津坂下町。農業と歴史文化を活かしたワーケーション環境。"
  },
  {
    name: "湯川村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "会津盆地の湯川村。農村環境での自然体験とワーケーションを推進中。"
  },
  {
    name: "柳津町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "福満虚空藏菩薩圓藏寺で有名な柳津町。只見川沿いの温泉とワーケーション体験が楽しめる。"
  },
  {
    name: "三島町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "生活工芸「奥会津編み組細工」で有名な三島町。只見川の絶景と伝統工芸を組み合わせたワーケーション体験が魅力。"
  },
  {
    name: "金山町",
    url: "https://www.town.kaneyama.fukushima.jp/soshiki/54/fuku-tele.html",
    workationUrl: "https://www.town.kaneyama.fukushima.jp/soshiki/54/fuku-tele.html",
    type: "dedicated",
    hasSubsidy: true,
    description: "奥会津の秘境・金山町。只見川の絶景と温泉の中でのワーケーション体験が人気。テレワーク支援補助金の専用ページあり。「ふくしまぐらし×テレワーク支援補助金」が利用可能。",
    subsidyInfo: {
      name: "ふくしまぐらし。×テレワーク支援補助金（県）",
      amount: "長期コース：上限30万円/人（補助率3/4）、短期コース：1万円/泊（補助率1/2）",
      period: "令和8年3月13日まで",
      url: "https://www.town.kaneyama.fukushima.jp/soshiki/54/fuku-tele.html",
      description: "県外在住者が福島県金山町に滞在してテレワーク・地域交流を行う費用を補助。"
    }
  },
  {
    name: "昭和村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "からむし（苧麻）の産地・昭和村。奥会津の秘境で、自然と伝統工芸を体験しながらのワーケーションが楽しめる。"
  },
  {
    name: "会津美里町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "会津盆地南部の会津美里町。農村と山岳の自然環境でのワーケーション体験が可能。"
  },
  {
    name: "下郷町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "大内宿で有名な下郷町。江戸時代の宿場町の面影が残る絶景の中でのワーケーション体験が人気。"
  },
  {
    name: "檜枝岐村",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "尾瀬の玄関口・檜枝岐村。日本最多積雪量を誇る秘境で、尾瀬の大自然の中でのワーケーション体験が楽しめる。"
  },
  {
    name: "只見町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "只見線と雪景色が絶景・只見町。奥会津の最深部で、大自然と雪国文化を体験しながらのワーケーションが楽しめる。"
  },
  {
    name: "南会津町",
    url: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    workationUrl: "https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html",
    type: "portal",
    hasSubsidy: false,
    description: "会津南部の自然豊かな南会津町。スキーリゾート・湯野上温泉など観光資源が豊富でワーケーション環境が充実。"
  }
];
