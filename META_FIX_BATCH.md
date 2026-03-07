# メタ情報一括修正スクリプト

## 修正が必要な18県のリスト

以下の18県のindex.htmlファイルで、高知県の情報が残っているため修正が必要：

| # | 都道府県 | 市町村数 | 補助金数 | ファイルパス |
|---|---------|---------|---------|------------|
| 1 | 栃木県 | 25 | 0 | tochigi/index.html |
| 2 | 宮崎県 | 26 | 5 | miyazaki/index.html |
| 3 | 茨城県 | 45 | 2 | ibaraki/index.html |
| 4 | 京都府 | 26 | 1 | kyoto/index.html |
| 5 | 兵庫県 | 41 | 1 | hyogo/index.html |
| 6 | 福岡県 | 60 | 1 | fukuoka/index.html |
| 7 | 広島県 | 23 | 1 | hiroshima/index.html |
| 8 | 山口県 | 19 | 2 | yamaguchi/index.html |
| 9 | 鳥取県 | 19 | 1 | tottori/index.html |
| 10 | 静岡県 | 35 | 1 | shizuoka/index.html |
| 11 | 島根県 | 19 | 1 | shimane/index.html |
| 12 | 沖縄県 | 41 | 1 | okinawa/index.html |
| 13 | 大分県 | 18 | 1 | oita/index.html |
| 14 | 岡山県 | 27 | 1 | okayama/index.html |
| 15 | 奈良県 | 39 | 1 | nara/index.html |
| 16 | 長崎県 | 21 | 1 | nagasaki/index.html |
| 17 | 三重県 | 29 | 1 | mie/index.html |
| 18 | 熊本県 | 45 | 0 | kumamoto/index.html |

## 修正内容

各ファイルで以下の箇所を修正：

### 1. タイトルタグ
```html
<!-- 修正前 -->
<title>高知県ワーケーション情報 – WORKERTRIP</title>

<!-- 修正後（例：栃木県） -->
<title>栃木県ワーケーション情報 – WORKERTRIP</title>
```

### 2. メタディスクリプション
```html
<!-- 修正前 -->
<meta name="description" content="高知県34市町村のワーケーション取り組み情報。34全域対象・県外企業向け助成金（1人2万8千円）...">

<!-- 修正後（例：栃木県） -->
<meta name="description" content="栃木県25市町のワーケーション取り組み情報。日光・那須の世界遺産と温泉。首都圏からアクセス良好。">
```

### 3. OGタイトル
```html
<!-- 修正前 -->
<meta property="og:title" content="高知県ワーケーション情報 – WORKERTRIP">

<!-- 修正後（例：栃木県） -->
<meta property="og:title" content="栃木県ワーケーション情報 – WORKERTRIP">
```

### 4. OGディスクリプション
高知県の内容を各県の特徴に変更

### 5. OG URL
```html
<!-- 修正前 -->
<meta property="og:url" content="https://workertrip.jp/kochi/">

<!-- 修正後（例：栃木県） -->
<meta property="og:url" content="https://workertrip.jp/tochigi/">
```

### 6. Canonical URL
```html
<!-- 修正前 -->
<link rel="canonical" href="https://workertrip.jp/kochi/">

<!-- 修正後（例：栃木県） -->
<link rel="canonical" href="https://workertrip.jp/tochigi/">
```

### 7. ヘッダーブランドテキスト
```html
<!-- 修正前 -->
<span class="brand-text">WORKERTRIP 高知</span>

<!-- 修正後（例：栃木県） -->
<span class="brand-text">WORKERTRIP 栃木</span>
```

### 8. ヒーロー統計数字
各県の正しい市町村数・補助金数に修正

### 9. CTAセクションテキスト
高知県の情報を各県の情報に修正

### 10. フッターテキスト
高知県 → 各県名に修正

### 11. データファイル参照
```html
<!-- 修正前 -->
<script src="../js/data-kochi.js"></script>

<!-- 修正後（例：栃木県） -->
<script src="../js/data-tochigi.js"></script>
```

## 次のステップ

各ファイルを順番に修正していきます。
