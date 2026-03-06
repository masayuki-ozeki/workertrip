# 新しい都道府県の追加手順

## 📋 概要

WORKERTRIPに新しい都道府県を追加する際の手順をまとめました。

## 🗂️ ファイル構成

```
WORKERTRIP/
├── {prefecture}/              # 都道府県フォルダ (例: hokkaido/, okinawa/)
│   ├── index.html            # 都道府県トップページ
│   └── municipalities.html   # 自治体一覧ページ
├── js/
│   ├── data-{prefecture}.js  # 都道府県データファイル ← NEW!
│   ├── main.js               # 都道府県ページ用JS（共通）
│   └── municipalities.js     # 自治体一覧用JS（共通）
└── css/
    └── style.css             # スタイル（共通）
```

## 🚀 追加手順

### ステップ1: 長野県フォルダをコピー

```bash
# 長野県フォルダを新しい都道府県名でコピー
cp -r nagano/ hokkaido/
```

または手動で：
1. `nagano` フォルダ全体をコピー
2. 新しい都道府県名にリネーム（例: `hokkaido`）

### ステップ2: データファイルを作成

```bash
# テンプレートをコピー
cp js/data-template.js js/data-hokkaido.js
```

#### data-hokkaido.js の編集

```javascript
const municipalitiesData = [
    {
        name: "札幌市",
        url: "https://www.city.sapporo.jp/",
        workationUrl: "https://...",
        type: "dedicated",
        hasSubsidy: true,
        subsidyInfo: {
            name: "補助金制度名",
            amount: "上限30万円",
            period: "〜2026年3月31日",
            url: "https://...",
            description: "企業向け支援"
        },
        description: "札幌市のワーケーション取り組み説明"
    },
    // 他の自治体を追加...
];
```

### ステップ3: HTMLファイルを更新

#### hokkaido/index.html

以下の箇所を更新：

**1. メタタグ（head内）**
```html
<title>北海道ワーケーション情報 – WORKERTRIP</title>
<meta name="description" content="北海道○○自治体のワーケーション取り組みと2026年度補助金情報。">
<link rel="canonical" href="https://workertrip.jp/hokkaido/">
<meta property="og:url" content="https://workertrip.jp/hokkaido/">
```

**2. スクリプト読み込み（bodyの最後）**
```html
<script src="../js/data-hokkaido.js"></script>  ← データファイル名を変更
<script src="../js/main.js"></script>
```

**3. ブランド名・タイトル**
```html
<!-- ナビゲーション -->
<span class="brand-text">WORKERTRIP 北海道</span>

<!-- ヒーローセクション -->
<h1 class="hero-title">自然に囲まれた<br>新しい働き方を、北海道で</h1>

<!-- 統計情報 -->
<div class="stat-number">○○</div>  ← 自治体数
<div class="stat-number">○</div>   ← 補助金数
```

**4. エリア名**
```html
<!-- エリア別検索のエリア名を都道府県に合わせて変更 -->
<h4>道央エリア</h4>
<h4>道南エリア</h4>
<h4>道北エリア</h4>
<h4>道東エリア</h4>
```

**5. フッター**
```html
<h4 class="footer-title">
    <i class="fas fa-snowflake"></i>  ← アイコンを変更（任意）
    <span class="brand-text">WORKERTRIP 北海道</span>
</h4>
<p>&copy; 2025 WORKERTRIP. All rights reserved.</p>
```

#### hokkaido/municipalities.html

同様に以下を更新：

```html
<!-- メタタグ -->
<title>北海道自治体一覧 – WORKERTRIP</title>
<link rel="canonical" href="https://workertrip.jp/hokkaido/municipalities.html">

<!-- スクリプト -->
<script src="../js/data-hokkaido.js"></script>
<script src="../js/municipalities.js"></script>

<!-- ページタイトル -->
<h1 class="page-title">北海道 自治体一覧</h1>
<p class="page-subtitle">北海道○○自治体のワーケーション情報一覧</p>
```

### ステップ4: 全国トップページに追加

#### js/main-japan.js

```javascript
const prefecturesData = [
    // ... 既存の都道府県
    { 
        name: "北海道", 
        region: "hokkaido-tohoku", 
        status: "available",           // ← "coming-soon" から変更
        url: "hokkaido/index.html",    // ← URLを設定
        municipalities: 45,            // ← 自治体数
        subsidies: 3                   // ← 補助金数
    },
    // ...
];
```

#### index.html の注目エリア

```html
<a href="hokkaido/index.html" class="featured-card">
    <div class="featured-image" style="background-image: url('画像URL');">
        <div class="featured-overlay"></div>
    </div>
    <div class="featured-content">
        <div class="featured-badge">
            <i class="fas fa-check-circle"></i> 情報掲載中
        </div>
        <h3 class="featured-title">北海道</h3>
        <p class="featured-text">
            雄大な大地と豊かな自然。札幌、ニセコ、富良野など魅力的なエリアが充実。
        </p>
        <div class="featured-stats">
            <span><i class="fas fa-map-marker-alt"></i> 45自治体対応</span>
            <span><i class="fas fa-star"></i> 3件補助金</span>
        </div>
    </div>
</a>
```

### ステップ5: 動作確認

#### チェックリスト

- [ ] `hokkaido/index.html` をブラウザで開く
- [ ] データが正しく表示されるか確認
- [ ] 自治体一覧ページが動作するか確認
- [ ] 検索・フィルター機能が動作するか確認
- [ ] 全国トップから遷移できるか確認
- [ ] リンクが正しく動作するか確認

#### デバッグ方法

ブラウザの開発者ツール（F12）で：
1. Console タブでエラーがないか確認
2. Network タブで `data-hokkaido.js` が読み込まれているか確認

## 📝 カスタマイズのヒント

### テーマカラーの変更（任意）

各都道府県のイメージに合わせて色を変更できます：

```css
/* css/style.css に追加 */
.hokkaido-theme {
    --primary-color: #4a90e2;  /* 北海道の青空イメージ */
    --primary-light: #5da3f5;
    --primary-dark: #3a7bc8;
}
```

### アイコンの変更

```html
<!-- 北海道: 雪 -->
<i class="fas fa-snowflake"></i>

<!-- 沖縄: 太陽・海 -->
<i class="fas fa-sun"></i>

<!-- 京都: 寺 -->
<i class="fas fa-torii-gate"></i>

<!-- 富士山周辺: 山 -->
<i class="fas fa-mountain"></i>
```

## 🔧 トラブルシューティング

### 問題: データが表示されない

**原因**: データファイルのパスが間違っている

**解決**:
```html
<!-- 正しいパス -->
<script src="../js/data-hokkaido.js"></script>

<!-- 間違い例 -->
<script src="js/data-hokkaido.js"></script>  ← ../ がない
```

### 問題: JavaScriptエラー

**原因**: JSON構文エラー

**解決**: 
- カンマ、括弧、引用符を確認
- オンラインJSON検証ツールで確認

### 問題: 全国トップから遷移できない

**原因**: URLが間違っている

**解決**: `js/main-japan.js` のURLを確認
```javascript
url: "hokkaido/index.html"  // 正しい
url: "/hokkaido/index.html" // 間違い（スラッシュ不要）
```

## 📚 参考

- データファイルテンプレート: `js/data-template.js`
- 長野県の実装: `nagano/` フォルダ
- データファイル例: `js/data-nagano.js`

## 🎯 完成後の確認

1. ブラウザで動作確認
2. レスポンシブデザイン確認（モバイル・タブレット）
3. リンク切れチェック
4. OGP画像の表示確認
5. 検索・フィルター機能の動作確認

---

**更新日**: 2025年3月5日  
**対象バージョン**: WORKERTRIP v2.1.0
