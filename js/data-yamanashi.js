// 都道府県データファイル
// ファイル名: data-yamanashi.js

const municipalitiesData = [
    {
        name: "甲府市",
        url: "https://www.city.kofu.yamanashi.jp/",
        workationUrl: "https://www.city.kofu.yamanashi.jp/kanko/shise/shisaku/shise/sangyo/documents/kihonkeikaku3.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "観光振興基本計画の中でワーケーション推進について言及"
    },
    {
        name: "富士吉田市",
        url: "https://www.city.fujiyoshida.yamanashi.jp/",
        workationUrl: "https://www.city.fujiyoshida.yamanashi.jp/page/1652.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "SHIGOTABIプロジェクトを展開。サテライトオフィス整備費補助金あり（詳細要確認）"
    },
    {
        name: "都留市",
        url: "https://www.city.tsuru.yamanashi.jp/",
        workationUrl: "https://www.city.tsuru.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "山梨市",
        url: "https://www.city.yamanashi.yamanashi.jp/",
        workationUrl: "https://www.city.yamanashi.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "大月市",
        url: "https://www.city.otsuki.yamanashi.jp/",
        workationUrl: "https://www.city.otsuki.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "韮崎市",
        url: "https://www.city.nirasaki.yamanashi.jp/",
        workationUrl: "https://www.city.nirasaki.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "南アルプス市",
        url: "https://www.city.minami-alps.yamanashi.jp/",
        workationUrl: "https://www.city.minami-alps.yamanashi.jp/docs/13806.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "ワーケーションツアー誘致を積極的に実施"
    },
    {
        name: "北杜市",
        url: "https://www.city.hokuto.yamanashi.jp/",
        workationUrl: "https://www.city.hokuto.yamanashi.jp/s-office/",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "道の駅こぶちさわサテライトオフィスお試し体験事業費補助金",
            amount: "上限33万円（1/4補助）",
            period: "要確認",
            url: "https://www.city.hokuto.yamanashi.jp/docs/19764.html",
            description: "道の駅こぶちさわを拠点としたサテライトオフィス試験利用を支援。八ヶ岳ワーケーションDays開催実績あり"
        },
        description: "八ヶ岳山麓に位置し、道の駅こぶちさわを中心にサテライトオフィス誘致を積極展開。「八ヶ岳ワーケーションDays」を定期開催"
    },
    {
        name: "甲斐市",
        url: "https://www.city.kai.yamanashi.jp/",
        workationUrl: "https://www.city.kai.yamanashi.jp/material/files/group/49/kaicitykigyoubanfurusatonouzei.pdf",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "企業版ふるさと納税を活用したワーケーション関連施策を推進"
    },
    {
        name: "笛吹市",
        url: "https://www.city.fuefuki.yamanashi.jp/",
        workationUrl: "https://www.city.fuefuki.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "上野原市",
        url: "https://www.city.uenohara.yamanashi.jp/",
        workationUrl: "https://www.city.uenohara.yamanashi.jp/page/1408.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生テレワーク交付金を活用したテレワーク支援ページを設置"
    },
    {
        name: "甲州市",
        url: "https://www.city.koshu.yamanashi.jp/",
        workationUrl: "https://www.city.koshu.yamanashi.jp/iju/iju/img/telework2.pdf",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "山梨県連携のサテライトオフィス等お試し体験事業を活用。ワイナリーと自然が融合したワーケーション環境"
    },
    {
        name: "中央市",
        url: "https://www.city.chuo.yamanashi.jp/",
        workationUrl: "https://www.city.chuo.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "市川三郷町",
        url: "https://www.town.ichikawamisato.yamanashi.jp/",
        workationUrl: "https://www.town.ichikawamisato.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "早川町",
        url: "https://www.town.hayakawa.yamanashi.jp/",
        workationUrl: "https://www.town.hayakawa.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "身延町",
        url: "https://www.town.minobu.lg.jp/",
        workationUrl: "https://www.soumu.go.jp/satellite-office/group/yamanashi/minobu.html",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "総務省サテライトオフィス誘致事例として掲載。身延山・富士川沿いの自然環境を活かしたワーケーション推進"
    },
    {
        name: "南部町",
        url: "https://www.town.nanbu.yamanashi.jp/",
        workationUrl: "https://www.town.nanbu.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "富士川町",
        url: "https://www.town.fujikawa.yamanashi.jp/",
        workationUrl: "https://www.town.fujikawa.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "道志村",
        url: "https://www.vill.doshi.lg.jp/",
        workationUrl: "https://www.vill.doshi.lg.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "道志川源流の豊かな自然環境を活かしたワーケーション環境"
    },
    {
        name: "西桂町",
        url: "https://www.town.nishikatsura.yamanashi.jp/",
        workationUrl: "https://www.town.nishikatsura.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "地方創生計画の中でワーケーション推進について言及"
    },
    {
        name: "忍野村",
        url: "https://www.vill.oshino.yamanashi.jp/",
        workationUrl: "https://www.vill.oshino.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "忍野八海と富士山を望む環境でのワーケーションが可能"
    },
    {
        name: "山中湖村",
        url: "https://www.vill.yamanakako.yamanashi.jp/",
        workationUrl: "https://www.vill.yamanakako.yamanashi.jp/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "富士山・山中湖を望む複数のワーケーション施設が集積。都心からのアクセスも良好"
    },
    {
        name: "鳴沢村",
        url: "https://www.vill.narusawa.yamanashi.jp/",
        workationUrl: "https://www.vill.narusawa.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "富士山西麓に位置し、自然豊かなワーケーション環境"
    },
    {
        name: "富士河口湖町",
        url: "https://www.town.fujikawaguchiko.lg.jp/",
        workationUrl: "https://www.town.fujikawaguchiko.lg.jp/",
        type: "dedicated",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "観光×ワーケーション施設が充実。河口湖・西湖・精進湖周辺に多数の施設あり"
    },
    {
        name: "小菅村",
        url: "https://www.vill.kosuge.yamanashi.jp/",
        workationUrl: "https://www.vill.kosuge.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "多摩川源流の清流と里山を活かしたワーケーション環境"
    },
    {
        name: "丹波山村",
        url: "https://www.vill.tabayama.yamanashi.jp/",
        workationUrl: "https://www.vill.tabayama.yamanashi.jp/",
        type: "pdf",
        hasSubsidy: false,
        subsidyInfo: null,
        description: "多摩川源流域に位置する山村でのワーケーション推進"
    }
];
