// 都道府県データファイル
// ファイル名: data-niigata.js

const municipalitiesData = [
    {
        name: "新潟市（西蒲区）",
        url: "https://www.city.niigata.lg.jp/",
        workationUrl: "https://www.city.niigata.lg.jp/nishikan/torikumi/seisaku/work_vacation_plan/index.html",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "西蒲区ワーケーションプラン支援事業",
            amount: "3,000円/泊（定額）",
            period: "令和6年度も募集実施（要確認）",
            url: "https://www.city.niigata.lg.jp/nishikan/torikumi/seisaku/work_vacation_plan/work-vacation-R6.html",
            description: "西蒲区内の宿泊施設向けにワーケーションプランの造成を支援。宿泊施設への補助金として1泊あたり3,000円を交付"
        },
        description: "新潟市西蒲区が独自にワーケーションプラン支援事業を展開。角田山・弥彦山麓の自然と温泉を活かした滞在型ワーケーションを推進"
    },
    {
        name: "長岡市",
        url: "https://www.city.nagaoka.niigata.jp/",
        workationUrl: "https://www.city.nagaoka.niigata.jp/kurashi/life01/ui-turn/index.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "月ヶ瀬ワーケーションルーム「ONOONO」を設置。ワーケーションインターンシップも実施し、移住・定住促進と連携"
    },
    {
        name: "三条市",
        url: "https://www.city.sanjo.niigata.jp/",
        workationUrl: "https://www.city.sanjo.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "柏崎市",
        url: "https://www.city.kashiwazaki.niigata.jp/",
        workationUrl: "https://www.city.kashiwazaki.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "新発田市",
        url: "https://www.city.shibata.lg.jp/",
        workationUrl: "https://www.city.shibata.lg.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "小千谷市",
        url: "https://www.city.ojiya.niigata.jp/",
        workationUrl: "https://www.city.ojiya.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "十日町市",
        url: "https://www.city.tokamachi.lg.jp/",
        workationUrl: "https://www.tokamachishikankou.jp/news/92982/",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "ワーケーション推進事業助成金",
            amount: "上限2.8万円/人（1/2補助）",
            period: "令和7年度も公募中（要確認）",
            url: "https://hojyokin-portal.jp/subsidies/63432",
            description: "十日町市内でのワーケーション滞在に伴う宿泊費を補助。里山の原風景「星峠の棚田」など豊かな自然環境での滞在を支援"
        },
        description: "大地の芸術祭の里として知られる十日町市が、里山ワーケーションを積極推進。宿泊費補助制度を設け、長期滞在を誘致"
    },
    {
        name: "燕市",
        url: "https://www.city.tsubame.niigata.jp/",
        workationUrl: "https://www.pref.niigata.lg.jp/sec/sangyoritchi/office-2.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "燕三条の金属加工産業集積地ならではの「ものづくり×ワーケーション」を推進。宮町シェアオフィスが拠点"
    },
    {
        name: "糸魚川市",
        url: "https://www.city.itoigawa.lg.jp/",
        workationUrl: "https://www.pref.niigata.lg.jp/sec/itoigawa_kikaku/r4tiiki-soft3.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "世界ジオパーク認定地域を活かした「ジオパーク×ワーケーション」を推進。親子ワーケーションプログラムも実施"
    },
    {
        name: "妙高市",
        url: "https://www.city.myoko.niigata.jp/",
        workationUrl: "https://myoko-workation.jp/",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "佐渡妙高ワーケーションパス",
            amount: "最大2万円/人（宿泊・交通費割引）",
            period: "要確認",
            url: "https://www.city.myoko.niigata.jp/docs/62957.html",
            description: "佐渡市と連携したワーケーションパス。新幹線往復＋宿泊費の割引を提供。2名以上の企業・フリーランスが対象"
        },
        description: "専用ポータルサイト「妙高ワーケーションセンター」を運営。スキーリゾートの自然環境を活かした四季型ワーケーションを推進。JR東日本と連携したWorkation Passも展開"
    },
    {
        name: "上越市",
        url: "https://www.city.joetsu.niigata.jp/",
        workationUrl: "https://www.city.joetsu.niigata.jp/soshiki/sanritu/coworkingspace.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "市内のコワーキングスペースを公式に案内。デジタル活用による地域活性化の取り組みの中でワーケーション実証事業を実施"
    },
    {
        name: "阿賀野市",
        url: "https://www.city.agano.niigata.jp/",
        workationUrl: "https://www.city.agano.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "佐渡市",
        url: "https://www.city.sado.niigata.jp/",
        workationUrl: "https://www.city.sado.niigata.jp/site/kigyoyuchi/63625.html",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "佐渡市進出企業定着・地域活性化支援事業補助金",
            amount: "上限3,000万円（要確認）",
            period: "要確認",
            url: "https://www.city.sado.niigata.jp/site/kigyoyuchi/list230-649.html",
            description: "企業誘致・定着を目的とした大型補助金。JRE Workation Passとも連携し、島内でのワーケーション環境を整備"
        },
        description: "世界遺産登録を機に注目が高まる佐渡島。JRE Workation Passと連携したワーケーション誘致を積極展開。妙高市との「佐渡妙高ワーケーションパス」も運営"
    },
    {
        name: "南魚沼市",
        url: "https://www.city.minamiuonuma.lg.jp/",
        workationUrl: "https://www.city.minamiuonuma.lg.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "日本有数の豪雪地帯・魚沼産コシヒカリの産地でのワーケーション環境を整備中"
    },
    {
        name: "魚沼市",
        url: "https://www.city.uonuma.niigata.jp/",
        workationUrl: "https://www.city.uonuma.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "阿賀町",
        url: "https://www.town.aga.niigata.jp/",
        workationUrl: "https://workcation.or.jp/cooperation/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "日本ワーケーション協会と連携し、阿賀野川流域の里山でのワーケーション推進に取り組む"
    },
    {
        name: "湯沢町",
        url: "https://www.town.yuzawa.lg.jp/",
        workationUrl: "https://www.town.yuzawa.lg.jp/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "苗場・越後湯沢などスキーリゾートを活かした四季型ワーケーション環境が充実。都心からの新幹線アクセスも良好"
    },
    {
        name: "津南町",
        url: "https://www.town.tsunan.niigata.jp/",
        workationUrl: "https://hojyokin-portal.jp/subsidies/63432",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "ワーケーション推進事業助成金",
            amount: "上限2.8万円/人（1/2補助）",
            period: "令和7年度も公募中（要確認）",
            url: "https://hojyokin-portal.jp/subsidies/63432",
            description: "十日町市と広域連携したワーケーション推進助成金。秋山郷・苗場山麓の大自然での滞在費を補助"
        },
        description: "秋山郷・苗場山麓の豊かな自然を活かしたワーケーションを推進。十日町市と広域連携した宿泊費補助制度を運営"
    },
    {
        name: "見附市",
        url: "https://www.city.mitsuke.niigata.jp/",
        workationUrl: "https://www.city.mitsuke.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "村上市",
        url: "https://www.city.murakami.niigata.jp/",
        workationUrl: "https://www.city.murakami.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "日本海と朝日山系の自然環境を活かしたワーケーション環境。旧北方文化・温泉地域も魅力"
    },
    {
        name: "加茂市",
        url: "https://www.city.kamo.niigata.jp/",
        workationUrl: "https://www.city.kamo.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "五泉市",
        url: "https://www.city.gosen.lg.jp/",
        workationUrl: "https://www.city.gosen.lg.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "胎内市",
        url: "https://www.city.tainai.niigata.jp/",
        workationUrl: "https://www.city.tainai.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "聖籠町",
        url: "https://www.town.seiro.niigata.jp/",
        workationUrl: "https://www.town.seiro.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "弥彦村",
        url: "https://www.vill.yahiko.niigata.jp/",
        workationUrl: "https://www.vill.yahiko.niigata.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "弥彦神社・弥彦山を有する観光地としてのワーケーション環境整備を推進"
    }
];
