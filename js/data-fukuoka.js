// 福岡県 ワーケーションデータ
// フォーマット: data-{prefecture}.js
// 最終更新: 2026-03

const municipalitiesData = [
  {
    name: "福岡市",
    url: "https://workation-fukuoka.jp/",
    workationUrl: "https://workation-fukuoka.jp/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
      name: "福岡市企業・グループ向けワーケーション助成",
      amount: "1人あたり最大2万円（1グループ最大20万円）",
      period: "2026年2月末まで",
      url: "https://workation-fukuoka.jp/2025_campaign/",
      description: "5名以上の企業・グループで福岡市内2泊以上のワーケーション実施に助成。研修・チームビルディングプログラムとの組み合わせが必要。"
    },
    description: "九州最大の都市。天神・博多エリアにハイスペックなコワーキングスペースが密集。空港から市街地まで約10分の抜群のアクセス。スタートアップ支援も充実しITワーカーに絶大な人気。"
  },
  {
    name: "北九州市",
    url: "https://www.city.kitakyushu.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "ものづくりの街・北九州市。門司港レトロや小倉城など観光資源も豊富。コワーキングスペースや産業観光を活用したワーケーション環境が整備中。"
  },
  {
    name: "大牟田市",
    url: "https://www.city.omuta.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・三池炭鉱を有する大牟田市。産業遺産と自然が共存するユニークなワーケーション環境。"
  },
  {
    name: "久留米市",
    url: "https://www.city.kurume.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福岡県南部の拠点都市。ブリヂストン発祥の地として知られ、商工業が盛ん。コワーキングスペースも整備されテレワーク環境が充実。"
  },
  {
    name: "直方市",
    url: "https://www.city.nogata.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "遠賀川沿いの自然豊かな直方市。のどかな田園風景の中でのテレワーク・ワーケーション体験ができる。"
  },
  {
    name: "飯塚市",
    url: "https://www.city.iizuka.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "筑豊地区の中心都市・飯塚市。九州工業大学などの学術機関と連携したワーケーション環境が整備。"
  },
  {
    name: "田川市",
    url: "https://www.city.tagawa.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "石炭記念公園など産業遺産が豊富な田川市。農村と鉱山の歴史が共存するユニークなワーケーション環境。"
  },
  {
    name: "柳川市",
    url: "https://www.city.yanagawa.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "水郷の街・柳川市。堀割を巡る川下りと古民家が魅力的な観光×ワーケーション環境。"
  },
  {
    name: "八女市",
    url: "https://www.city.yame.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "お茶と提灯・仏壇の産地・八女市。星野村の豊かな自然の中でのリトリート型ワーケーションが可能。古民家コワーキングも話題。"
  },
  {
    name: "筑後市",
    url: "https://www.city.chikugo.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "九州自動車道沿線に位置する筑後市。農業と工業が共存する田園都市でのワーケーション環境が整備中。"
  },
  {
    name: "大川市",
    url: "https://www.city.okawa.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "家具の産地として知られる大川市。筑後川沿いのクリエイティブな環境でのワーケーション体験が可能。"
  },
  {
    name: "行橋市",
    url: "https://www.city.yukuhashi.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "豊前地区の中心都市・行橋市。周防灘に面した海岸線と農村環境でのワーケーション体験ができる。"
  },
  {
    name: "豊前市",
    url: "https://www.city.buzen.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "求菩提山など豊かな自然を有する豊前市。農山村の中でのテレワーク・ワーケーション環境が整備中。"
  },
  {
    name: "中間市",
    url: "https://www.city.nakama.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "遠賀川沿いの中間市。北九州市・福岡市双方へのアクセスが良く、都市型テレワーク環境として活用されている。"
  },
  {
    name: "小郡市",
    url: "https://www.city.ogori.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "農業が盛んな小郡市。福岡市・久留米市の中間に位置し、広域型ワーケーションの中継拠点として機能。"
  },
  {
    name: "筑紫野市",
    url: "https://www.city.chikushino.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "二日市温泉を有する筑紫野市。温泉×テレワークのユニークなワーケーション環境が整備。福岡市へのアクセスも良好。"
  },
  {
    name: "春日市",
    url: "https://www.city.kasuga.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福岡市に隣接する春日市。住宅都市としてテレワーク環境が充実し、福岡都市圏のワーケーション拠点。"
  },
  {
    name: "大野城市",
    url: "https://www.city.onojo.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福岡市南部に隣接する大野城市。水城跡などの歴史遺産と住宅環境が共存するワーケーション環境。"
  },
  {
    name: "宗像市",
    url: "https://www.city.munakata.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "世界遺産・沖ノ島を有する宗像市。玄界灘を望む海岸沿いでのワーケーション体験が人気。神社巡りと組み合わせたユニークな体験も可能。"
  },
  {
    name: "太宰府市",
    url: "https://www.city.dazaifu.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "太宰府天満宮を有する歴史と文化の街。九州国立博物館周辺の文化的環境でのワーケーションが特徴的。"
  },
  {
    name: "古賀市",
    url: "https://www.city.koga.fukuoka.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "玄界灘・三里松原など自然に恵まれた古賀市。福岡市へのアクセスも良く、都市近郊ワーケーションに最適。"
  },
  {
    name: "福津市",
    url: "https://www.city.fukutsu.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "宮地嶽神社・津屋崎千軒などを有する福津市。玄界灘に面した景勝地でのリゾート型ワーケーションが人気。"
  },
  {
    name: "うきは市",
    url: "https://www.city.ukiha.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "日本の棚田百選・つづら棚田を有するうきは市。フルーツの産地として知られ、農業体験と組み合わせたワーケーションが盛ん。古民家リノベーションのコワーキングも注目。"
  },
  {
    name: "宮若市",
    url: "https://www.city.miyawaka.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "トヨタ自動車九州の拠点・宮若市。ものづくり産業とワーケーションの融合した環境が整備中。"
  },
  {
    name: "嘉麻市",
    url: "https://www.city.kama.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "筑豊の農山村・嘉麻市。里山の自然環境を活かしたリトリート型ワーケーションが体験できる。"
  },
  {
    name: "朝倉市",
    url: "https://www.city.asakura.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "三連水車で有名な朝倉市。耳納連山と筑後川に囲まれた自然豊かな環境でのワーケーションが人気。"
  },
  {
    name: "みやま市",
    url: "https://www.city.miyama.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "有明海に面したみやま市。クリーク地帯の田園風景の中でのワーケーション体験ができる。"
  },
  {
    name: "糸島市",
    url: "https://itoshimalife.city.itoshima.lg.jp/teleworks/",
    workationUrl: "https://itoshimalife.city.itoshima.lg.jp/",
    type: "dedicated",
    hasSubsidy: false,
    description: "移住先として全国トップクラスの人気を誇る糸島市。玄界灘の絶景とおしゃれカフェ・コワーキングが融合。糸島市テレワークセンターは無料で利用可能。海・山・食が揃うワーケーションの理想郷。"
  },
  {
    name: "那珂川市",
    url: "https://www.city.nakagawa.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福岡市と隣接しながら自然豊かな那珂川市。脊振山系の豊かな緑の中でのワーケーション環境が整備中。"
  },
  {
    name: "宇美町",
    url: "https://www.town.umi.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "四王寺山・若杉山など自然豊かな宇美町。福岡空港に近く国際的なワーケーション環境として注目。"
  },
  {
    name: "篠栗町",
    url: "https://www.town.sasaguri.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "四国霊場を模した篠栗八十八ヶ所霊場がある篠栗町。豊かな森林環境でのリトリートワーケーションが特徴。"
  },
  {
    name: "志免町",
    url: "https://www.town.shime.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福岡空港に隣接する志免町。利便性の高い立地でのテレワーク・ワーケーション環境が整備。"
  },
  {
    name: "須恵町",
    url: "https://www.town.sue.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "陶芸の街・須恵町。伝統工芸と自然環境が融合したユニークなワーケーション体験ができる。"
  },
  {
    name: "新宮町",
    url: "https://www.town.shingu.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "玄界灘に面した新宮町。海岸沿いのリゾート環境と福岡市へのアクセスの良さが魅力のワーケーション地。"
  },
  {
    name: "久山町",
    url: "https://www.town.hisayama.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "九州大学伊都キャンパスに隣接する久山町。学術環境と自然が共存するワーケーション環境が特徴。"
  },
  {
    name: "粕屋町",
    url: "https://www.town.kasuya.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福岡市東部に隣接する粕屋町。住宅都市として発展し、福岡都市圏のテレワーク環境として機能。"
  },
  {
    name: "芦屋町",
    url: "https://www.town.ashiya.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "玄界灘に面した芦屋町。航空自衛隊芦屋基地も有し、海辺のワーケーション環境が整備中。"
  },
  {
    name: "水巻町",
    url: "https://www.town.mizumaki.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "遠賀川沿いの水巻町。北九州市・福岡市へのアクセスが良く、都市近郊テレワーク環境として活用。"
  },
  {
    name: "岡垣町",
    url: "https://www.town.okagaki.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "玄界灘を望む岡垣町。三里松原など豊かな自然環境でのワーケーション体験ができる。"
  },
  {
    name: "遠賀町",
    url: "https://www.town.onga.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "遠賀川沿いの自然豊かな遠賀町。農村環境と都市へのアクセスを兼ね備えたワーケーション地。"
  },
  {
    name: "小竹町",
    url: "https://www.town.kotake.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "筑豊の小竹町。農山村の静かな環境でのテレワーク・ワーケーション体験が可能。"
  },
  {
    name: "鞍手町",
    url: "https://www.town.kurate.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "筑豊の農村地帯・鞍手町。田園風景の中でのテレワーク環境が整備中。"
  },
  {
    name: "桂川町",
    url: "https://www.town.keisen.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "遠賀川源流に近い桂川町。自然豊かな環境でのリモートワーク・ワーケーション推進中。"
  },
  {
    name: "筑前町",
    url: "https://www.town.chikuzen.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "三郡山系の豊かな自然を有する筑前町。農村景観の中でのワーケーション体験ができる。"
  },
  {
    name: "東峰村",
    url: "https://www.toho-son.jp/",
    workationUrl: "https://www.toho-son.jp/",
    type: "portal",
    hasSubsidy: false,
    description: "小石原焼の産地として知られる東峰村。陶芸体験と山村環境を活かしたユニークなワーケーション体験が可能。"
  },
  {
    name: "大刀洗町",
    url: "https://www.town.tachiarai.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "農業が盛んな大刀洗町。平野部の田園環境でのテレワーク・ワーケーション推進中。"
  },
  {
    name: "大木町",
    url: "https://www.town.oki.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "有機農業と循環型まちづくりで知られる大木町。環境先進地での持続可能なワーケーション体験ができる。"
  },
  {
    name: "広川町",
    url: "https://www.town.hirokawa.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福岡県南部の広川町。八女市隣接の茶の産地で、緑豊かな自然環境でのワーケーション体験が可能。"
  },
  {
    name: "香春町",
    url: "https://www.town.kawara.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "香春岳のふもとに位置する香春町。豊前地区の農山村環境でのテレワーク・ワーケーション推進中。"
  },
  {
    name: "添田町",
    url: "https://www.town.soeda.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "英彦山を有する添田町。山岳信仰の地として知られ、自然×文化体験のワーケーション環境が特徴。"
  },
  {
    name: "糸田町",
    url: "https://www.town.itoda.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "炭鉱の歴史を持つ糸田町。コンパクトな町で農村環境でのテレワーク体験ができる。"
  },
  {
    name: "川崎町",
    url: "https://www.town.kawasaki.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "金辺川沿いの農山村・川崎町。豊かな自然環境でのリトリート型ワーケーション体験が可能。"
  },
  {
    name: "大任町",
    url: "https://www.town.oonojo.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "田川郡の農村地帯・大任町。静かな農村環境でのテレワーク体験ができる。"
  },
  {
    name: "赤村",
    url: "https://www.vill.aka.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "村営スキー場を有する赤村。四季を通じて楽しめる自然環境でのワーケーション体験が可能。"
  },
  {
    name: "福智町",
    url: "https://www.town.fukuchi.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "福智山のふもとに位置する福智町。自然豊かな環境でのテレワーク・ワーケーション推進中。"
  },
  {
    name: "苅田町",
    url: "https://www.town.kanda.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "日産自動車九州の拠点・苅田町。臨海工業地帯と農村が共存するユニークなワーケーション環境。"
  },
  {
    name: "みやこ町",
    url: "https://www.town.miyako.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "豊前地区の農山村・みやこ町。犀川・勝山・豊津の3地区が合併。農村環境でのワーケーション体験ができる。"
  },
  {
    name: "吉富町",
    url: "https://www.town.yoshitomi.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "山国川沿いの吉富町。大分県中津市に隣接し、両県を活かした広域ワーケーションの拠点。"
  },
  {
    name: "上毛町",
    url: "https://www.town.koge.lg.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "農業と自然が豊かな上毛町。豊前地区の農山村環境でのテレワーク体験ができる。"
  },
  {
    name: "築上町",
    url: "https://www.town.chikujo.fukuoka.jp/",
    workationUrl: "https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html",
    type: "portal",
    hasSubsidy: false,
    description: "築城基地（航空自衛隊）を有する築上町。周防灘に面した海岸線と農村環境でのワーケーション体験が可能。"
  }
];
