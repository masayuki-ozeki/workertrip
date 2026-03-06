// 都道府県データファイルのテンプレート
// ファイル名: data-{prefecture}.js (例: data-hokkaido.js, data-okinawa.js)

// 自治体データ配列
const municipalitiesData = [
    {
        // 必須項目
        name: "自治体名",                    // 例: "札幌市"
        url: "https://www.example.jp/",     // 公式サイトURL
        workationUrl: "https://...",        // ワーケーション情報ページURL
        type: "dedicated",                  // "dedicated"（専用ページ）または "pdf"（PDFのみ）
        hasSubsidy: false,                  // 補助金の有無（true/false）
        description: "取り組みの説明文",      // 簡潔な説明
        
        // 補助金がある場合（hasSubsidy: true の場合）
        subsidyInfo: {
            name: "補助金制度名",
            amount: "上限○○万円（○/○補助）",  // 補助金額
            period: "〜2026年○月○日",          // 申請期間
            url: "https://...",               // 補助金詳細ページURL
            description: "対象者や用途の説明"
        },
        
        // 補助金がない場合
        subsidyInfo: null
    },
    
    // 次の自治体...
];

/* 
使用例：

// 専用ページがあり、補助金もある自治体
{
    name: "札幌市",
    url: "https://www.city.sapporo.jp/",
    workationUrl: "https://www.city.sapporo.jp/workation/",
    type: "dedicated",
    hasSubsidy: true,
    subsidyInfo: {
        name: "札幌市ワーケーション支援補助金",
        amount: "上限30万円（1/2補助）",
        period: "〜2026年3月31日",
        url: "https://www.city.sapporo.jp/workation/subsidy.html",
        description: "企業向けワーケーションプログラム実施支援"
    },
    description: "都市型ワーケーション施設が充実。冬季は雪まつり期間の滞在も人気"
},

// PDFのみで補助金なしの自治体
{
    name: "○○町",
    url: "https://www.town.example.jp/",
    workationUrl: "https://www.town.example.jp/docs/plan.pdf",
    type: "pdf",
    hasSubsidy: false,
    subsidyInfo: null,
    description: "地方創生計画の中でワーケーション推進について言及"
}
*/
