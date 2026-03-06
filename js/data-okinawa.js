// 沖縄県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "那覇市",
    url: "https://www.city.naha.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄の県庁所在地・那覇市。国際通り・首里城など観光の中心地で、コワーキングスペースも充実。那覇空港から直結のアクセス良好な沖縄ワーケーションの玄関口。"
  },
  {
    name: "宜野湾市",
    url: "https://www.city.ginowan.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄コンベンションセンターや宜野湾ベイサイド情報センターなど充実したビジネス施設を持つ宜野湾市。海中道路や沖縄市へのアクセスも良好なワーケーション拠点。"
  },
  {
    name: "石垣市",
    url: "https://www.city.ishigaki.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "ワーケーション活用型沖縄IT活性化事業",
      amount: "コワーキングスペース運営事業者向け（上限120万円、補助率80%）",
      period: "令和7年度",
      url: "https://biz.stayway.jp/hojyo_detail/14701/",
      description: "沖縄県内コワーキングスペースでのIT企業との交流イベント開催費を補助。新ビジネス創出・地域課題解決を支援。"
    },
    description: "八重山諸島の中心・石垣市。エメラルドグリーンの海と珊瑚礁、亜熱帯の自然を満喫しながら仕事ができる憧れのワーケーション地。石垣牛・八重山そばなど食の魅力も高く、リフレッシュ効果抜群。"
  },
  {
    name: "浦添市",
    url: "https://www.city.urasoe.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "那覇市に隣接するベッドタウン・浦添市。浦添大公園など自然も多く、那覇空港へのアクセスも良好。IT企業の集積地でもあり、ビジネス環境が充実したワーケーション環境。"
  },
  {
    name: "名護市",
    url: "https://www.city.nago.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄北部・やんばるの玄関口・名護市。ヤンバルクイナやノグチゲラなど固有種が生息する豊かな森と美ら海水族館に近接。沖縄の自然を身近に感じながら働けるワーケーション環境。"
  },
  {
    name: "糸満市",
    url: "https://www.city.itoman.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄本島最南端・糸満市。平和祈念公園や沖縄戦史跡など歴史的な場所を訪れながら、平和の意味を考えるワーケーション体験ができる。漁業の街らしく海産物も豊富。"
  },
  {
    name: "沖縄市",
    url: "https://www.city.okinawa.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄最大のエイサーの街・沖縄市（コザ）。米軍基地文化とウチナーカルチャーが融合したユニークな都市。コザ音楽基地などアート・音楽施設も充実したクリエイティブなワーケーション環境。"
  },
  {
    name: "豊見城市",
    url: "https://www.city.tomigusuku.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "那覇市南側に位置する豊見城市。那覇空港に近く、イオンモール沖縄ライカムなど商業施設も充実。沖縄ワーケーションの拠点としてのアクセス・利便性が高い。"
  },
  {
    name: "うるま市",
    url: "https://www.city.uruma.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄の「宝島」とも呼ばれるうるま市。海中道路で結ばれた平安座島・宮城島など離島へのアクセスが便利で、島時間を感じながらのワーケーション体験が魅力。"
  },
  {
    name: "宮古島市",
    url: "https://www.city.miyakojima.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "エメラルドブルーの海と白砂ビーチが広がる宮古島市。与那覇前浜ビーチは東洋一とも称される。サンセット・トライアスロン・ダイビングなどアクティビティ豊富で、憧れのワーケーション先として高い人気。"
  },
  {
    name: "南城市",
    url: "https://www.city.nanjo.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄の聖地・斎場御嶽がある南城市。琉球王国発祥の地ともいわれ、精神的充電に最適なパワースポットが多い。知念岬公園からの絶景も必見で、独自の歴史文化の中でのワーケーション体験が可能。"
  },
  {
    name: "国頭村",
    url: "https://www.vill.kunigami.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "やんばるの森・辺戸岬など沖縄最北端の自然が残る国頭村。ヤンバルクイナやオキナワイシカワガエルなど固有種の宝庫。世界自然遺産の森の中でのワーケーション体験は唯一無二。"
  },
  {
    name: "大宜味村",
    url: "https://www.vill.ogimi.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "長寿の村として有名な大宜味村。シークワーサーの産地で、豊かな自然と長寿の食文化の中でのワーケーション体験が可能。滝・マングローブ林など手つかずの自然が残るやんばるの里。"
  },
  {
    name: "東村",
    url: "https://www.vill.higashi.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄県最小の村・東村。慶佐次のマングローブ林や東村つつじエコパークが有名。手つかずの沖縄の自然の中でのワーケーション体験は希少な経験。パイナップルの産地でもある。"
  },
  {
    name: "今帰仁村",
    url: "https://www.vill.nakijin.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・今帰仁城跡がある歴史の村。古宇利島・屋我地島など美しい離島にも近く、桜の名所としても有名。歴史と自然が融合した沖縄北部でのワーケーション体験が可能。"
  },
  {
    name: "本部町",
    url: "https://www.town.motobu.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄美ら海水族館のある本部町。本部半島の豊かな自然とサンゴ礁の海を望みながらのワーケーション体験が可能。伊江島へのフェリー発着地でもあり、島ワーケーションの拠点としても機能。"
  },
  {
    name: "恩納村",
    url: "https://www.vill.onna.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "dedicated",
    hasSubsidy: false,
    description: "万座毛・琉球村など観光名所が集まる沖縄随一のリゾート地・恩納村。高級ホテル・リゾートが立ち並ぶエメラルドコーストでのラグジュアリーなワーケーション体験が人気。ダイビングスポットも豊富。"
  },
  {
    name: "宜野座村",
    url: "https://www.vill.ginoza.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "日本最南端のプロ野球春季キャンプ地・宜野座村。カマボコ型の山と海の景観が美しく、農業×漁業×リゾートが融合した個性的なワーケーション環境。"
  },
  {
    name: "金武町",
    url: "https://www.town.kin.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "タコライスの発祥地・金武町。金武大城公園や泡盛の蔵元など沖縄文化が凝縮された町でのワーケーション体験が可能。宜野座村・うるま市へのアクセスも良好。"
  },
  {
    name: "伊江村",
    url: "https://www.vill.ie.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "本部半島から高速船で約30分の離島・伊江島。城山（タッチュー）が目印の穏やかな島でのワーケーション体験。ユリの花畑や湧出ビーチなど自然豊かな離島でのんびり仕事ができる。"
  },
  {
    name: "読谷村",
    url: "https://www.vill.yomitan.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄最大の村・読谷村。残波岬・座喜味城跡など観光名所も多く、陶芸・琉球ガラスなど伝統工芸体験もできる。那覇空港から約40分でアクセス良好なワーケーション環境。"
  },
  {
    name: "嘉手納町",
    url: "https://www.town.kadena.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "米軍嘉手納基地を擁する嘉手納町。道の駅かでなからの基地を一望する体験は独特で、沖縄の歴史と現実を感じながらのワーケーションができる。那覇・沖縄市へのアクセスも便利。"
  },
  {
    name: "北谷町",
    url: "https://www.town.chatan.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "アメリカンビレッジで有名な国際色豊かな北谷町。カフェ・レストランが充実した海辺のリゾートエリアでのワーケーション体験が人気。夕日スポット「砂辺馬場公園」も必見。"
  },
  {
    name: "北中城村",
    url: "https://www.vill.kitanakagusuku.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・中城城跡のある北中城村。イオンモール沖縄ライカムへのアクセスも良好で、大型商業施設での買い物と仕事を両立できるワーケーション環境。"
  },
  {
    name: "中城村",
    url: "https://www.vill.nakagusuku.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・中城城跡を擁する中城村。自然豊かな丘陵地帯に位置し、沖縄本島中部の静かな環境でのワーケーション体験が可能。中城港湾の発展も期待される。"
  },
  {
    name: "西原町",
    url: "https://www.town.nishihara.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "琉球大学のキャンパスがある学術都市・西原町。学術・文化の薫り高い環境でのワーケーション体験が可能。那覇市・浦添市へのアクセスも良好な生活利便性の高い町。"
  },
  {
    name: "与那原町",
    url: "https://www.town.yonabaru.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "中城湾に面した与那原町。郊外のリゾート感と都市部へのアクセスを兼ね備えたワーケーション環境。与那原大綱引きなど地域文化の体験も充実。"
  },
  {
    name: "南風原町",
    url: "https://www.town.haebaru.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄本島中南部の中心に位置する南風原町。那覇市に隣接し、南風原花織など伝統工芸が息づく。商業施設も充実した利便性の高いワーケーション環境。"
  },
  {
    name: "八重瀬町",
    url: "https://www.town.yaese.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "沖縄本島南部に位置する八重瀬町。県内最大のひまわり畑が広がる農業の町。那覇空港へのアクセスも良く、農業体験と仕事を組み合わせたワーケーション体験が可能。"
  },
  {
    name: "渡嘉敷村",
    url: "https://www.vill.tokashiki.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "那覇から高速船約35分の慶良間諸島・渡嘉敷島。「ケラマブルー」と呼ばれる世界屈指の透明度を誇る海でのダイビング・シュノーケリングと仕事を組み合わせた極上ワーケーション体験。"
  },
  {
    name: "座間味村",
    url: "https://www.vill.zamami.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "慶良間諸島国立公園の中心・座間味村。ザマミジマと阿嘉島から成り、ホエールウォッチングとケラマブルーの海が魅力。離島ならではの時間の流れの中での特別なワーケーション体験が可能。"
  },
  {
    name: "久米島町",
    url: "https://www.town.kumejima.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "那覇から約30分（飛行機）の久米島。深海水を活用した久米島モデルや独自の産業が発達した自立型離島。透明度の高いイーフビーチでのんびりワーケーション体験が可能。"
  },
  {
    name: "竹富町",
    url: "https://www.town.taketomi.lg.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "八重山諸島の竹富島・西表島・波照間島など多様な島を含む竹富町。日本最南端の波照間島、マングローブの西表島、星砂の竹富島など各島の個性を活かしたワーケーション体験が可能。"
  },
  {
    name: "与那国町",
    url: "https://www.town.yonaguni.okinawa.jp/",
    workationUrl: "https://www.pref.okinawa.lg.jp/shigoto/kankotokusan/1011671/1011790/1011807.html",
    type: "portal",
    hasSubsidy: false,
    description: "日本最西端の島・与那国島。台湾との国境の地で、独特の文化と大自然が魅力。カジキ漁・牧場・海底遺跡など唯一無二の体験ができる「日本の果て」でのワーケーション体験。"
  }
];
