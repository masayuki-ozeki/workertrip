// 長野県ワーケーション取り組み自治体データ
const municipalitiesData = [
    {
        name: "長野市",
        url: "https://www.city.nagano.nagano.jp/",
        workationUrl: "https://www.city.nagano.nagano.jp/documents/1414/05siryou3_0602_1.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "複数のPDFで観光振興計画の一環としてワーケーション推進について言及"
    },
    {
        name: "松本市",
        url: "https://www.city.matsumoto.nagano.jp/",
        workationUrl: "https://www.city.matsumoto.nagano.jp/site/matsumotogurashi/175309.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: {
            name: "テレワークオフィス設置支援事業補助金",
            url: "https://www.city.matsumoto.nagano.jp/soshiki/75/3016.html",
            note: "サテライトオフィス開設向け"
        },
        description: "お試し移住・ワーケーション専用ページあり。乗鞍高原でのワーケーション推進"
    },
    {
        name: "上田市",
        url: "https://www.city.ueda.nagano.jp/",
        workationUrl: "https://www.city.ueda.nagano.jp/soshiki/shoko/68040.html",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "人的資本経営支援補助金",
            amount: "上限20万円（1/2補助）",
            period: "〜2026年3月31日",
            url: "https://www.city.ueda.nagano.jp/soshiki/shoko/68040.html",
            description: "ワーケーションプログラム実施企業向け"
        },
        description: "人的資本経営支援補助金でワーケーションプログラムを支援"
    },
    {
        name: "岡谷市",
        url: "https://www.city.okaya.lg.jp/",
        workationUrl: "https://www.city.okaya.lg.jp/soshikikarasagasu/kogyoshinkoka/kowa-kingusupe-su/18577.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: {
            name: "ワーケーション等実施支援補助金",
            note: "2024-25年度期間（2026年度は要確認）",
            url: "https://www.city.okaya.lg.jp/material/files/group/4/23_05_02_07.pdf"
        },
        description: "テクノプラザおかやコワーキングスペース運営。ワーケーション補助金あり"
    },
    {
        name: "飯田市",
        url: "https://www.city.iida.lg.jp/",
        workationUrl: "https://www.city.iida.lg.jp/uploaded/attachment/55255.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "リニア時代を見据えた情報発信戦略の中でワーケーションに言及"
    },
    {
        name: "諏訪市",
        url: "https://www.city.suwa.lg.jp/",
        workationUrl: "https://www.city.suwa.lg.jp/uploaded/attachment/39915.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生総合戦略でワーケーション推進事業について言及"
    },
    {
        name: "須坂市",
        url: "https://www.city.suzaka.nagano.jp/",
        workationUrl: "https://www.city.suzaka.nagano.jp/material/files/group/3/kofukin_kosodateshuro_jigyogaiyo.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "子育て・就労総合支援拠点でワーケーション機能を整備"
    },
    {
        name: "小諸市",
        url: "https://www.city.komoro.lg.jp/",
        workationUrl: "https://www.city.komoro.lg.jp/material/files/group/3/20211014_gyakusankinkoutai.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "逆参勤交代構想でワーケーション推進について言及"
    },
    {
        name: "伊那市",
        url: "https://www.inacity.jp/",
        workationUrl: "https://www.inacity.jp/iju/hataraku/Working20.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "「しごと2.0（働き方ダイバーシティ）創出事業」でワーケーション推進"
    },
    {
        name: "駒ヶ根市",
        url: "https://www.city.komagane.nagano.jp/",
        workationUrl: "https://www.city.komagane.nagano.jp/soshikiichiran/kikakushinkoka/kikakuchoseigakari/10/4730.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "駒ヶ根ワーケーション専用ページあり。生涯活躍のまち構想の一環"
    },
    {
        name: "中野市",
        url: "https://www.city.nakano.nagano.jp/",
        workationUrl: "https://www.city.nakano.nagano.jp/docs/2020090300031/file_contents/081011.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "広報紙でワーケーションの可能性について言及"
    },
    {
        name: "大町市",
        url: "https://www.city.omachi.nagano.jp/",
        workationUrl: "https://www.city.omachi.nagano.jp/00002000/doc/00002100/s-keikaku/soukei6_kouki.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "第六次総合計画でワーケーション推進を明記。定住促進ビジョンで展開"
    },
    {
        name: "飯山市",
        url: "https://www.city.iiyama.nagano.jp/",
        workationUrl: "https://www.city.iiyama.nagano.jp/soshiki/shoukou/shoukou/news/48495",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーションおためし住宅を設置（飯山駅近く）"
    },
    {
        name: "茅野市",
        url: "https://www.city.chino.lg.jp/",
        workationUrl: "https://www.city.chino.lg.jp/soshiki/syoukou/workation-portal.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーション情報ポータルサイトあり。ワークラボ八ヶ岳運営"
    },
    {
        name: "塩尻市",
        url: "https://www.city.shiojiri.lg.jp/",
        workationUrl: "https://www.city.shiojiri.lg.jp/uploaded/attachment/32677.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "塩尻型テレワークモデル「KADO」でワーケーション推進"
    },
    {
        name: "佐久市",
        url: "https://www.city.saku.nagano.jp/",
        workationUrl: "https://www.city.saku.nagano.jp/outside/citypromotion/salon/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "リモート市役所（オンラインサロン）運営。総合計画でワーケーション言及"
    },
    {
        name: "千曲市",
        url: "https://www.city.chikuma.lg.jp/",
        workationUrl: "https://www.city.chikuma.lg.jp/soshiki/sangyoshiencenter/7713.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "産業支援センターページでワーケーション体験会の実施報告あり"
    },
    {
        name: "東御市",
        url: "https://www.city.tomi.nagano.jp/",
        workationUrl: "https://www.city.tomi.nagano.jp/category/kankoushisetsu/159818.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "湯の丸高原テレワーク施設を運営（定員15名、フリーWifi完備）"
    },
    {
        name: "安曇野市",
        url: "https://www.city.azumino.nagano.jp/",
        workationUrl: "https://www.city.azumino.nagano.jp/soshiki/31/102268.html",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "ワーケーション受入環境整備事業補助金",
            amount: "上限50万円（1/2補助）",
            period: "〜2026年1月23日",
            url: "https://www.city.azumino.nagano.jp/soshiki/31/102268.html",
            description: "宿泊事業者のテレワーク環境整備支援"
        },
        description: "宿泊事業者向けワーケーション受入環境整備補助金あり"
    },
    {
        name: "小海町",
        url: "https://www.koumi-town.jp/",
        workationUrl: "https://www.koumi-town.jp/workation/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "「小海町でワーケーション」専用サイトあり。八ヶ岳の豊かな自然を活用"
    },
    {
        name: "佐久穂町",
        url: "https://www.town.sakuho.nagano.jp/",
        workationUrl: "https://www.town.sakuho.nagano.jp/2020/02/27/%E4%BD%90%E4%B9%85%E7%A9%82%E7%94%BA%E8%A6%B3%E5%85%89%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3_%E3%82%B0%E3%83%83%E3%83%89.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "観光ビジョンでワーケーションを戦略的に位置づけ"
    },
    {
        name: "軽井沢町",
        url: "https://www.town.karuizawa.lg.jp/",
        workationUrl: "https://www.town.karuizawa.lg.jp/uploaded/attachment/4280.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワークショップ資料等でワーケーション振興について言及"
    },
    {
        name: "御代田町",
        url: "https://www.town.miyota.nagano.jp/",
        workationUrl: "https://www.town.miyota.nagano.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーションについて言及あり"
    },
    {
        name: "立科町",
        url: "https://www.town.tateshina.nagano.jp/",
        workationUrl: "https://www.town.tateshina.nagano.jp/material/files/group/3/R6_01_sankousiryou_0.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "PDFでワーケーションについて言及"
    },
    {
        name: "長和町",
        url: "https://town.nagawa.nagano.jp/",
        workationUrl: "https://town.nagawa.nagano.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーションについて言及あり"
    },
    {
        name: "富士見町",
        url: "https://www.town.fujimi.lg.jp/",
        workationUrl: "https://www.town.fujimi.lg.jp/shareoffice/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "富士見森のオフィス運営。シェアオフィス・コワーキングスペースあり"
    },
    {
        name: "原村",
        url: "https://www.vill.hara.lg.jp/",
        workationUrl: "https://www.vill.hara.lg.jp/sightseeing/facility/304733.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "WORK SPACE 原村運営。ペンション・ロッジでワーケーション対応"
    },
    {
        name: "辰野町",
        url: "https://www.town.tatsuno.lg.jp/",
        workationUrl: "https://www.town.tatsuno.lg.jp/material/files/group/3/R6_hirota_goda_2.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "サテライトオフィス誘致・ワーケーション推進PDFあり"
    },
    {
        name: "箕輪町",
        url: "https://www.town.minowa.lg.jp/",
        workationUrl: "https://www.town.minowa.lg.jp/soshiki/kikaku_shinko/gyomu/5/303.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "VRワーケーション体験ページあり。観光戦略でワーケーション推進"
    },
    {
        name: "南箕輪村",
        url: "https://www.vill.minamiminowa.lg.jp/",
        workationUrl: "https://www.vill.minamiminowa.lg.jp/workcation",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "「みなみみのわで森林ワーケーション」専用サイトあり"
    },
    {
        name: "松川町",
        url: "https://www.town.matsukawa.lg.jp/",
        workationUrl: "https://www.town.matsukawa.lg.jp/material/files/group/2/211213-209.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーション環境整備に関する入札資料あり"
    },
    {
        name: "阿智村",
        url: "https://www.vill.achi.lg.jp/",
        workationUrl: "https://www.vill.achi.lg.jp/site/sontyositu/20210906aisatu.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "村長挨拶でワーケーション施設開設について言及"
    },
    {
        name: "根羽村",
        url: "https://www.nebamura.jp/",
        workationUrl: "https://www.nebamura.jp/nebatopics/news/1849/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "根羽村ワーケーション等拠点施設の整備・運営"
    },
    {
        name: "上松町",
        url: "https://www.town.agematsu.nagano.jp/",
        workationUrl: "https://www.town.agematsu.nagano.jp/aboutus/gyosei/keikaku/documents/jinkoubijonsougousenryaku/dai2kiagematsumatisougousennryaku/gaiyou.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "総合戦略でワーケーションについて言及"
    },
    {
        name: "南木曽町",
        url: "https://www.town.nagiso.nagano.jp/",
        workationUrl: "https://www.town.nagiso.nagano.jp/data/open/cnt/3/20039/1/07sangyokanko.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーションファムツアー実施についてPDFで報告"
    },
    {
        name: "木曽町",
        url: "https://www.town-kiso.com/",
        workationUrl: "https://www.town-kiso.com/jigyosha/shien/100362/101205/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "サテライトオフィス利用者募集ページあり"
    },
    {
        name: "白馬村",
        url: "https://www.vill.hakuba.nagano.jp/",
        workationUrl: "https://www.vill.hakuba.nagano.jp/spots/workationhakuba/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーション白馬専用ページあり。白馬樅の木ホテル等で対応"
    },
    {
        name: "小谷村",
        url: "https://www.vill.otari.nagano.jp/",
        workationUrl: "https://www.vill.otari.nagano.jp/www/contents/1609976595002/files/6_sougou_web.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "総合計画でワーケーション推進について言及"
    },
    {
        name: "信濃町",
        url: "https://www.town.shinano.lg.jp/",
        workationUrl: "https://www.town.shinano.lg.jp/docs/12759033.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーション専用ページあり。長期滞在促進"
    },
    {
        name: "飯綱町",
        url: "https://www.town.iizuna.nagano.jp/",
        workationUrl: "https://www.town.iizuna.nagano.jp/ijuportal/read/6081.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "移住ポータルでワーケーション・デュアルライフ推進"
    },
    {
        name: "坂城町",
        url: "https://www.town.sakaki.nagano.jp/",
        workationUrl: "https://www.town.sakaki.nagano.jp/uploaded/attachment/4695.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "議会PDFでワーケーション・テレワーク推進について言及"
    },
    {
        name: "下諏訪町",
        url: "https://www.town.shimosuwa.lg.jp/",
        workationUrl: "https://www.town.shimosuwa.lg.jp/www/contents/1652156616788/simple/dx_suishin_keikaku.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "DX推進計画でワーケーションについて言及"
    },
    {
        name: "高森町",
        url: "https://www.town.nagano-takamori.lg.jp/",
        workationUrl: "https://www.town.nagano-takamori.lg.jp/fs/7/3/1/1/6/_/%E5%AE%9F%E6%96%BD%E8%A8%AD%E8%A8%88%E3%81%B8%E3%81%AE%E5%8F%8D%E6%98%8B%E7%8A%B6%E6%B3%81%E7%AD%89.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "実施計画・議会資料でワーケーションについて言及"
    },
    {
        name: "木島平村",
        url: "https://www.vill.kijimadaira.lg.jp/",
        workationUrl: "https://www.vill.kijimadaira.lg.jp/articles/2024040800022/file_contents/keka.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: {
            name: "ワーケーション施設整備補助",
            amount: "10,222,400円",
            note: "過去の補助金実績"
        },
        description: "ワーケーション施設整備に関する補助金実績あり"
    },
    {
        name: "小川村",
        url: "https://www.vill.ogawa.nagano.jp/",
        workationUrl: "https://www.vill.ogawa.nagano.jp/kankou/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "テレワーク・ワーケーション促進に関するPDFあり"
    },
    {
        name: "池田町",
        url: "https://www.ikedamachi.net/",
        workationUrl: "https://www.ikedamachi.net/cmsfiles/contents/0000002/2413/teigen_gaiyou.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "提言書でワーケーション推進・補助金について言及"
    },
    {
        name: "生坂村",
        url: "https://www.village.ikusaka.nagano.jp/",
        workationUrl: "https://www.village.ikusaka.nagano.jp/gyousei/juuminka/pdf/senryaku.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "観光施設経営戦略でワーケーション施設整備について言及"
    },
    {
        name: "木祖村",
        url: "https://www.vill.kiso.nagano.jp/",
        workationUrl: "https://www.vill.kiso.nagano.jp/gyoseijoho/shisaku_keikaku/documents/R5kasokeikaku.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "過疎地域持続的発展計画でワーケーションについて言及"
    }
];
