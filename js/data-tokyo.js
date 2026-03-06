// 東京都ワーケーション・テレワーク補助金データ
// Generated: 2026-03-06
// Municipalities: 62 / Subsidies: 5
// 注意：東京都は「ワーケーションをする側（送り出し自治体）」
// テレワーク促進助成金・ワーケーション勤務導入奨励金など
// 都内企業のワーケーション実施を支援する補助金が主な訴求点。
// 西多摩・島しょ地域は受け入れ側の顔も持つ（都のサテライト補助対象）。

const tokyoData = {
  prefecture: "東京都",
  prefectureCode: "13",
  note: "東京都は主にワーケーションを実施する企業・個人の送り出し自治体。テレワーク促進助成金・ワーケーション勤務導入奨励金等が充実。西多摩・島しょ地域は受け入れ側としての側面も持つ。",
  municipalities: [
  {
    "name": "千代田区",
    "url": "https://www.city.chiyoda.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": true,
    "description": "国会議事堂・霞が関・丸の内を擁する日本の中枢。大企業のテレワーク先進地で「千代田区在勤ワーカーの他県ワーケーション推奨」が都の戦略上の重要な送り出し源。",
    "subsidyInfo": {
      "name": "東京都テレワークトータルサポート助成金",
      "amount": "上限250万円（30人以上：1/2）/ 上限150万円（2〜29人：2/3）",
      "period": "令和7年度（2025年6月10日〜2026年2月27日）",
      "url": "https://www.koyokankyo.shigotozaidan.or.jp/jigyo/telework/teletotal/total_joseikin.html",
      "description": "都内中堅・中小企業等のテレワーク機器・ソフトウェア等の環境整備費用を助成。育児・介護コース（加算）や職場環境改善コースも設定。"
    }
  },
  {
    "name": "中央区",
    "url": "https://www.city.chuo.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "銀座・日本橋・築地を擁する東京都心の商業・金融の中枢。外資系企業・金融機関が集積しハイブリッドワークが最も進んでいる区の一つ。"
  },
  {
    "name": "港区",
    "url": "https://www.city.minato.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "六本木・赤坂・虎ノ門など大使館・外資系企業・ITメガベンチャーが集積する国際都市。コワーキング・シェアオフィスの密度が日本最高水準で都内テレワーク発信の最前線。"
  },
  {
    "name": "新宿区",
    "url": "https://www.city.shinjuku.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京都庁・新宿ビジネス街と歌舞伎町・大久保などが共存する多極型都市。SOHOや個人事業主向けコワーキングが充実しフリーランス系テレワーカーの集積地。"
  },
  {
    "name": "文京区",
    "url": "https://www.city.bunkyo.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京大学・医療系大学が集積する学術・文化の区。出版・教育・IT系の知識労働者が多くテレワーク率が高い区の一つ。"
  },
  {
    "name": "台東区",
    "url": "https://www.city.taito.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "浅草・上野・秋葉原を擁する文化観光の区。伝統工芸・ものづくり系の中小企業が多くDX・テレワーク導入支援の需要が高い。"
  },
  {
    "name": "墨田区",
    "url": "https://www.city.sumida.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京スカイツリーと伝統産業（墨田の地場産業）が共存する下町の区。中小製造業のDX化とテレワーク推進が区の重要課題。"
  },
  {
    "name": "江東区",
    "url": "https://www.city.koto.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "湾岸エリア・有明・豊洲の先端オフィス街と下町の木場・亀戸が混在する広大な区。東京2020オリンピック遺産を活かしたスポーツ×テレワーク環境も整備中。"
  },
  {
    "name": "品川区",
    "url": "https://www.city.shinagawa.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "新幹線品川駅・リニア中央新幹線始発予定地。国内外大企業の本社が集積するビジネス街でハイブリッドワーク・テレワーク推進が最も進んでいる区の一つ。"
  },
  {
    "name": "目黒区",
    "url": "https://www.city.meguro.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "高級住宅街と個性的な商業地が共存する閑静な区。スタートアップ・クリエイター系の個人テレワーカーが多く住み、区内コワーキング施設も充実している。"
  },
  {
    "name": "大田区",
    "url": "https://www.city.ota.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "羽田空港・京浜工業地帯を擁する東京南部の産業区。全国最多の町工場が集積する「ものづくりの聖地」でDX・テレワーク推進が製造業のイノベーションに直結。"
  },
  {
    "name": "世田谷区",
    "url": "https://www.city.setagaya.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京都で最も人口の多い区。高級住宅地・三軒茶屋・二子玉川など多様なエリアが共存し、IT・クリエイター系のテレワーク居住者が急増中。区内コワーキングも充実。"
  },
  {
    "name": "渋谷区",
    "url": "https://www.city.shibuya.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "渋谷スクランブルスクエア・Shibuya QWS等の先進コワーキングが集積する日本のスタートアップ聖地。IT企業本社が集中しテレワーク・ハイブリッドワーク文化の発信地。"
  },
  {
    "name": "中野区",
    "url": "https://www.city.tokyo-nakano.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "中野ブロードウェイと新区役所建設が話題の区。IT・クリエイター系企業が多く移転してきており、新宿隣接の立地でテレワーク移住先としても注目。"
  },
  {
    "name": "杉並区",
    "url": "https://www.city.suginami.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "荻窪・高円寺・阿佐ヶ谷などの個性的な商店街が連なる文化の区。クリエイター・フリーランスが多く住みコワーキングカフェが充実したテレワーク推進の区。"
  },
  {
    "name": "豊島区",
    "url": "https://www.city.toshima.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "池袋を中心に国際アート文化都市宣言をしたダイバーシティの区。アニメ・マンガ産業×IT企業の集積地でクリエイター系テレワーカーの集積が顕著。"
  },
  {
    "name": "北区",
    "url": "https://www.city.kita.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "赤羽・王子・田端などが連なる東京北部の産業・住宅区。印刷・紙関連産業のDX化とテレワーク推進が課題で、区独自の支援も展開中。"
  },
  {
    "name": "荒川区",
    "url": "https://www.city.arakawa.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "南千住・三河島など多文化共生が進む下町の区。製造業・サービス業の中小企業が多くテレワーク導入の課題に直面している事業者が多い区。"
  },
  {
    "name": "板橋区",
    "url": "https://www.city.itabashi.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "光学・精密機器産業の集積地。キヤノン・ニコン等のゆかりの地で、精密機器×DX化の先進地としてテレワーク導入補助の需要が高い。"
  },
  {
    "name": "練馬区",
    "url": "https://www.city.nerima.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京都最大の農地を持つ緑豊かな区。アニメ産業の集積地（東映アニメーション等）でクリエイター向けテレワーク支援が充実。農業×テレワーク移住先としても注目。"
  },
  {
    "name": "足立区",
    "url": "https://www.city.adachi.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京の北東端で埼玉県に接する大区。工業・商業が混在する下町区で区独自のテレワーク導入補助・DX支援を展開し中小企業のテレワーク率向上を図っている。"
  },
  {
    "name": "葛飾区",
    "url": "https://www.city.katsushika.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": true,
    "description": "寅さん・こち亀のまち。水元公園・金町など下町文化と農業が残る区。ものづくり中小企業が多く区独自のテレワーク促進助成金を実施し都内で先進的。",
    "subsidyInfo": {
      "name": "葛飾区テレワーク促進助成金",
      "amount": "対象経費の1/2（詳細は区に確認）",
      "period": "2024年度（令和6年度）",
      "url": "https://tai-gen.com/column/finance/tokyo-subsidy-grant/",
      "description": "葛飾区が中小企業のテレワーク導入を促進するために実施する独自の助成金制度。都の補助金と組み合わせた利用が可能。"
    }
  },
  {
    "name": "江戸川区",
    "url": "https://www.city.edogawa.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京都最東端・荒川・江戸川に挟まれた水辺の区。従来型の製造・サービス業が多くDX化・テレワーク推進の余地が大きい区。葛西臨海公園のロケーションも独自の魅力。"
  },
  {
    "name": "八王子市",
    "url": "https://www.city.hachioji.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": true,
    "description": "東京都最大の市・多摩地域の中心都市。大学が多く集積する学術都市で、東京都サテライトオフィス設置等補助金（市町村部対象）の活用が盛んな多摩ワーケーション拠点。",
    "subsidyInfo": {
      "name": "東京都サテライトオフィス設置等補助金（サテライトオフィス設置コース）",
      "amount": "整備・改修費1,500万円・運営費600万円（1/2補助）",
      "period": "令和6年度（令和7年度は公募時期要確認）",
      "url": "https://www.koyokankyo.shigotozaidan.or.jp/jigyo/telework/satellite-secchi/satellite.html",
      "description": "都内市町村部を中心に新たなサテライトオフィスを設置する企業等を支援。整備・改修費最大1,500万円、運営費最大600万円（補助率1/2）。八王子・立川などの多摩地域での活用事例が多数。"
    }
  },
  {
    "name": "立川市",
    "url": "https://www.city.tachikawa.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "多摩の中核都市・IKEAや大型商業施設が集積するビジネス拠点。国立極地研究所・陸上自衛隊立川駐屯地も立地。多摩都市モノレールで各市へのアクセスが良好なコワーキング集積地。"
  },
  {
    "name": "武蔵野市",
    "url": "https://www.city.musashino.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "吉祥寺・三鷹を擁する人気住宅都市。IT・クリエイター系のテレワーカーが集積し「武蔵野市で働く×三鷹の森でワーケーション」スタイルが人気。"
  },
  {
    "name": "三鷹市",
    "url": "https://www.city.mitaka.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "天文台・ジブリ美術館がある文化の市。武蔵野市に隣接しIT企業の集積と豊かな緑環境が共存。テレワーク定着率が高い東京西部の先進住宅都市。"
  },
  {
    "name": "青梅市",
    "url": "https://www.city.ome.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": true,
    "description": "奥多摩の入口・多摩川沿いの緑豊かな山間都市。東京都内でワーケーション受け入れも行う特異なポジション。テレワークオフィス整備補助金を独自実施した先進市。",
    "subsidyInfo": {
      "name": "青梅市テレワークオフィス整備事業補助金",
      "amount": "上限150万円（1/2補助）",
      "period": "令和5年度（最新情報は市に確認）",
      "url": "https://hojyokin-portal.jp/subsidies/29445",
      "description": "青梅市が実施するテレワークオフィス整備補助金。都内でワーケーション受け入れを行う西多摩地区の先進市として、都サテライトオフィス補助のワーケーションコース（西多摩対象）との併用も期待される。"
    }
  },
  {
    "name": "府中市",
    "url": "https://www.city.fuchu.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京競馬場・大国魂神社がある多摩の中心都市。大企業の事業所・工場が集積しテレワーク導入が進む。多摩モノレール延伸計画もありアクセス向上が見込まれる。"
  },
  {
    "name": "昭島市",
    "url": "https://www.city.akishima.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "米軍横田基地に隣接する多摩南部の工業・商業都市。航空機関連産業が立地しエンジニア系テレワーカーが多く居住。"
  },
  {
    "name": "調布市",
    "url": "https://www.city.chofu.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "深大寺・神代植物公園がある多摩東部の住宅都市。アニメ・映像産業（日活・東映撮影所）が集積しクリエイター系テレワーカーが多い人気エリア。"
  },
  {
    "name": "町田市",
    "url": "https://www.city.machida.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "神奈川県に隣接する多摩南部の商業都市。首都圏最大級の商業集積と緑豊かな住宅環境が共存し、テレワーク移住先として神奈川・東京のどちらにもアクセスできる好立地。"
  },
  {
    "name": "小金井市",
    "url": "https://www.city.koganei.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "小金井公園・玉川上水の緑道が美しい都市。東京学芸大学・情報・システム研究機構が立地する学術都市でIT・研究者系テレワーカーが多い落ち着いた住環境。"
  },
  {
    "name": "小平市",
    "url": "https://www.city.kodaira.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "津田塾大学・一橋大学（小平国際キャンパス）がある学術都市。NTT中央研究所など研究機関も多く知識集約型テレワーカーが多い多摩中部の住宅都市。"
  },
  {
    "name": "日野市",
    "url": "https://www.city.hino.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "日野自動車・コニカミノルタ等の製造業が集積する多摩南部の工業都市。製造業DX化×テレワーク推進が進み、ハイブリッドワーク環境の整備が活発。"
  },
  {
    "name": "東村山市",
    "url": "https://www.city.higashimurayama.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "北山公園の菖蒲が有名な多摩北部の住宅都市。西武新宿線・池袋線の乗り換え拠点でアクセスが良くテレワーク移住先として安定した人気がある。"
  },
  {
    "name": "国分寺市",
    "url": "https://www.city.kokubunji.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "武蔵国分寺跡・殿ヶ谷戸庭園がある歴史の市。JR中央線・武蔵野線・西武国分寺線が交わる交通の要衝でテレワーク移住先として高い人気を誇る多摩の住宅都市。"
  },
  {
    "name": "国立市",
    "url": "https://www.city.kunitachi.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "一橋大学がある「文教都市」として全国有名。大学通り・桜並木の文化的景観の中でのテレワーク移住先として高い評価を受ける知識集約型居住エリア。"
  },
  {
    "name": "福生市",
    "url": "https://www.city.fussa.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "米軍横田基地がある多摩西部の都市。アメリカンな文化・飲食店が独自の雰囲気を生み出しIT系テレワーカーの間で「福生ワーケーション」ムーブメントが生まれつつある。"
  },
  {
    "name": "狛江市",
    "url": "https://www.city.komae.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "世田谷区に隣接する東京都で2番目に小さい市。小田急沿線の便利な住宅都市でテレワーク移住先として世田谷の代替地として若い世代に人気。"
  },
  {
    "name": "東大和市",
    "url": "https://www.city.higashiyamato.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "多摩湖（村山貯水池）がある多摩北部の住宅都市。西武拝島線・多摩モノレール沿線でアクセスが良く緑豊かな環境でのテレワーク居住が実践されている。"
  },
  {
    "name": "清瀬市",
    "url": "https://www.city.kiyose.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "国立がん研究センター東病院がある医療研究の都市。西武池袋線終点近くの閑静な住宅地でテレワーク移住先として静かな人気がある。"
  },
  {
    "name": "東久留米市",
    "url": "https://www.city.higashikurume.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "黒目川・落合川の清流が美しい多摩北部の住宅都市。「水と緑のまち」として住みやすさが高く評価され、テレワーク移住先として都心へのアクセスと自然環境を両立。"
  },
  {
    "name": "武蔵村山市",
    "url": "https://www.city.musashimurayama.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "リニア中央新幹線の新駅設置計画がある多摩北西部の住宅都市。大型アウトレット（三井アウトレットパーク）が立地し生活利便性が高い。"
  },
  {
    "name": "多摩市",
    "url": "https://www.city.tama.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "多摩ニュータウン・聖蹟桜ヶ丘を擁する多摩南部の住宅都市。映画「耳をすませば」の舞台として有名。小田急・京王沿線で都心へのアクセスが良くテレワーク移住先として人気急上昇。"
  },
  {
    "name": "稲城市",
    "url": "https://www.city.inagi.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "よみうりランド・稲城梨の産地として有名な多摩南部の住宅都市。京王・南武線沿線でテレワーク移住先として発展中の若い街。"
  },
  {
    "name": "羽村市",
    "url": "https://www.city.hamura.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "羽村の堰・チューリップまつりで有名な多摩西部の市。青梅市に隣接し西多摩地区のワーケーション拠点候補としても位置づけられる緑豊かな住宅都市。"
  },
  {
    "name": "あきる野市",
    "url": "https://www.city.akiruno.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "秋川・平井川の清流と秋川渓谷が美しい西多摩の都市。都サテライトオフィス補助金「ワーケーションコース（西多摩対象）」の対象エリアとして、東京都内唯一のワーケーション受け入れ側の顔も持つ。"
  },
  {
    "name": "西東京市",
    "url": "https://www.city.nishitokyo.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "2001年保谷市と田無市が合併した多摩東部の新市。西武線・中央線双方へのアクセスが良く、住みやすさと都心へのアクセスのバランスでテレワーク移住先として人気。"
  },
  {
    "name": "瑞穂町",
    "url": "https://www.town.mizuho.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "横田基地・西武ドームに近い西多摩郡の農業・工業の町。都サテライトオフィス設置補助金「ワーケーションコース」の西多摩対象エリアに含まれる可能性のある地域。"
  },
  {
    "name": "日の出町",
    "url": "https://www.town.hinode.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "つるつる温泉・大久野温泉がある西多摩郡の農業・観光の町。都内でワーケーション受け入れができる温泉と自然環境を持つ数少ない自治体の一つ。"
  },
  {
    "name": "檜原村",
    "url": "https://www.vill.hinohara.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "東京都唯一の「村」・都心から約60km・払沢の滝・数馬の湯がある秘境の山村。都サテライトオフィス設置補助「ワーケーションコース（西多摩対象）」で首都圏唯一の本格的な山村ワーケーション受け入れ地。"
  },
  {
    "name": "奥多摩町",
    "url": "https://www.town.okutama.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "奥多摩湖・雲取山・川苔山を擁する東京の秘境・多摩川源流域の山岳観光の町。東京都が推進する「奥多摩ワーケーション」の中心地で都内唯一の本格的な自然体験ワーケーション先。"
  },
  {
    "name": "大島町",
    "url": "https://www.town.oshima.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "三原山と伊豆大島・椿が有名な伊豆諸島最大の有人島。東京から高速船2時間の離島で、都サテライトオフィス設置補助「ワーケーションコース（島しょ対象）」の対象地。"
  },
  {
    "name": "利島村",
    "url": "https://www.vill.toshima.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "椿油の産地・断崖絶壁の小さな離島。東京から高速船3時間でアクセスできる秘境の島でのワーケーション体験は都内一の非日常体験。"
  },
  {
    "name": "新島村",
    "url": "https://www.vill.niijima.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "コーガ石文化・サーフィンのメッカとして有名な伊豆諸島の島。波乗りと仕事を組み合わせたサーファー向けワーケーション先として首都圏サーファーに特に人気。"
  },
  {
    "name": "神津島村",
    "url": "https://www.vill.kozushima.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "日本一の星空スポットとして有名な伊豆諸島の島。東京から高速船4時間。満天の星空の下でのリモートワークは国内最高峰の体験価値で移住者・ワーケーション実践者が急増中。"
  },
  {
    "name": "三宅村",
    "url": "https://www.vill.miyake.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "2000年噴火からの復興を遂げた三宅島。ダイビング・バードウォッチングで有名な離島でエコワーケーション先として環境意識の高いリモートワーカーに人気。"
  },
  {
    "name": "御蔵島村",
    "url": "https://www.vill.mikurashima.lg.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "イルカと泳げる島として世界的に有名な秘境の離島。年間入島人数が制限されるプレミアム感が逆に話題を呼び、希少性の高い体験型ワーケーション先として特別な価値を持つ。"
  },
  {
    "name": "八丈町",
    "url": "https://www.town.hachijo.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "八丈島・温泉・くさやで有名な伊豆諸島南部の離島。空港があり東京から飛行機45分でアクセスできる利便性の高い離島ワーケーション先として安定した人気。"
  },
  {
    "name": "青ヶ島村",
    "url": "https://www.vill.aogashima.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "「秘境度日本一」の称号を持つ二重カルデラの孤島。年間入島者数が極めて少なく定期船も週3便のみという日本で最も到達困難な自治体。その希少性が逆に憧れのワーケーション先として話題。"
  },
  {
    "name": "小笠原村",
    "url": "https://www.vill.ogasawara.tokyo.jp/",
    "workationUrl": "https://www.hataraku.metro.tokyo.lg.jp/hatarakikata/telework/index.html",
    "type": "sender",
    "hasSubsidy": false,
    "description": "世界自然遺産・父島・母島の小笠原諸島。東京から竹芝桟橋から定期船で24時間。亜熱帯の固有種が生息する日本最後の秘境での長期滞在型ワーケーション体験は国内で他に類を見ない。"
  }
],
  subsidies: [
  {
    "id": "tokyo-telework-total-support",
    "prefectureCode": "13",
    "prefecture": "東京都",
    "name": "令和7年度 テレワークトータルサポート助成金",
    "amount": "上限250万円（30人以上：補助率1/2）/ 上限150万円（2〜29人：補助率2/3）",
    "period": "令和7年度（2025年6月10日〜2026年2月27日）",
    "url": "https://www.koyokankyo.shigotozaidan.or.jp/jigyo/telework/teletotal/total_joseikin.html",
    "description": "都内中堅・中小企業等のテレワーク環境整備（PC・タブレット・クラウドサービス等）費用を助成。「テレワーク相談窓口」利用が申請の必須要件。育児・介護コース加算や職場環境改善コース（10/10補助）も設定。令和7年度最注目の東京都テレワーク助成金。",
    "targetArea": "東京都全域",
    "subsidyType": "テレワーク環境整備支援",
    "eligibility": "常時雇用の労働者2〜999名で都内に本社・事業所を置く中堅・中小企業等"
  },
  {
    "id": "tokyo-workation-incentive",
    "prefectureCode": "13",
    "prefecture": "東京都",
    "name": "令和7年度 ワーケーション勤務導入奨励金",
    "amount": "10万円（1支給対象事業者あたり）",
    "period": "令和7年度（2025年6月17日〜2026年2月27日）※受付終了",
    "url": "https://www.koyokankyo.shigotozaidan.or.jp/jigyo/telework/workation/workation-kinmu.html",
    "description": "都内中堅・中小企業等が「ワーケーション勤務」に関する規定を新たに整備し、従業員が1回以上ワーケーション勤務（年次有給休暇等に連続した勤務）を実施した場合に10万円を支給。東京発の「ワーケーション送り出し支援」として、地方ワーケーション先への需要創出を促進。",
    "targetArea": "東京都全域",
    "subsidyType": "ワーケーション勤務制度導入支援",
    "eligibility": "常時雇用の労働者2〜999名で都内に本社・事業所を置く中堅・中小企業等（申請日時点でワーケーション勤務規定が未整備の事業者）"
  },
  {
    "id": "tokyo-telework-teichaku",
    "prefectureCode": "13",
    "prefecture": "東京都",
    "name": "令和7年度 テレワーク定着強化奨励金",
    "amount": "20万円（1支給対象事業者あたり・定額）",
    "period": "令和7年度（2025年6月18日〜2026年2月27日）※受付終了",
    "url": "https://www.koyokankyo.shigotozaidan.or.jp/jigyo/telework/tele-teichakukyoka/tele-teichakukyoka.html",
    "description": "すでにテレワークを導入済みの都内中堅・中小企業等が、自社に最適な「テレワークルール（ベストバランス）」を構築するための取り組み（従業員調査→課題検討→ルール整備→検証）に対して20万円を支給。テレワーク定着フェーズへの移行を支援する。",
    "targetArea": "東京都全域",
    "subsidyType": "テレワーク定着・ルール整備支援",
    "eligibility": "常時雇用の労働者2〜999名で都内に本社・事業所を置く中堅・中小企業等（テレワーク導入済みの事業者）"
  },
  {
    "id": "tokyo-satellite-office",
    "prefectureCode": "13",
    "prefecture": "東京都",
    "name": "サテライトオフィス設置等補助金（市町村部対象）",
    "amount": "整備・改修費 最大1,500万円 / 運営費 最大600万円（補助率1/2）",
    "period": "令和6年度実績（令和7年度は時期を要確認）",
    "url": "https://www.koyokankyo.shigotozaidan.or.jp/jigyo/telework/satellite-secchi/satellite.html",
    "description": "都内市町村部（23区外）を中心に企業等が新たに開設する共用型サテライトオフィスの整備・運営費を補助。「ワーケーションコース」では西多摩・島しょ地域でのサテライトオフィスにも対応し、東京都内でのワーケーション受け入れ環境整備にも活用可能。",
    "targetArea": "東京都市町村部（八王子・立川・多摩地域・西多摩・島しょ等）",
    "subsidyType": "サテライトオフィス設置・ワーケーション受け入れ環境整備",
    "eligibility": "都内市町村部に新たなサテライトオフィス（共用型）を設置する企業・団体・自治体等"
  },
  {
    "id": "tokyo-satellite-kinmu",
    "prefectureCode": "13",
    "prefecture": "東京都",
    "name": "令和7年度 サテライトオフィス勤務導入奨励金",
    "amount": "10万円（1支給対象事業者あたり）",
    "period": "令和7年度（2025年5月15日〜2026年2月27日）※受付終了",
    "url": "https://www.koyokankyo.shigotozaidan.or.jp/jigyo/telework/satellite-kinmu/satellite-kinmu.html",
    "description": "都内中堅・中小企業等がサテライトオフィス勤務に関する規定を新たに整備し、従業員が都内の共用型サテライトオフィスを利用してサテライトオフィス勤務を実施した場合に10万円を支給。多摩・市町村部のコワーキングスペース利用促進が目的。",
    "targetArea": "東京都全域",
    "subsidyType": "サテライトオフィス勤務制度導入支援",
    "eligibility": "常時雇用の労働者2〜999名で都内に本社・事業所を置く中堅・中小企業等（申請日時点でサテライトオフィス勤務規定が未整備の事業者）"
  }
]
};

// 互換性のため municipalities を municipalitiesData としてもエクスポート
const municipalitiesData = tokyoData.municipalities;

// Node.js環境対応
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tokyoData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tokyoData;
}
