# 都道府県追加マニュアル

新しい都道府県データ（`js/data-{prefecture}.js`）をアップロードした後、**AIアシスタントが自動的にHTMLファイル作成から全ての設定を完了します**。

## 🤖 自動化方針

**ユーザーがやること**: データファイル（`js/data-{prefecture}.js`）をアップロードするだけ

**AIアシスタントがやること**:
1. ✅ フォルダ構造作成（{prefecture}/index.html, municipalities.html）
2. ✅ メタタグ・ヘッダー・フッターの県名修正（9箇所）
3. ✅ 市町村数・補助金件数の自動カウント・反映
4. ✅ 県の特色に合わせたヒーローテキスト・特徴説明の作成
5. ✅ アイキャッチ画像の検索・設定
6. ✅ 全国トップページ（js/main-japan.js）への追加
7. ✅ README.md の掲載状況更新

**作業方針**: ゆっくり1県ずつ、確実に完成させる

---

## 📖 このマニュアルの使い方

このマニュアルは、**AIアシスタントが作業を行う際の完全チェックリスト**です。ユーザーは内容を理解する必要はありませんが、どのような作業が行われるかを確認できます。

---

## 🔄 作業フロー図

```
┌─────────────────────────────────────────┐
│ ユーザー: data-{prefecture}.js アップロード │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│ AIアシスタント: 以下を自動実行             │
├─────────────────────────────────────────┤
│ Step 1: データ解析                        │
│   ├ 市町村数カウント                      │
│   ├ 補助金件数カウント                    │
│   └ 県の特徴把握                         │
├─────────────────────────────────────────┤
│ Step 2: アイキャッチ画像検索              │
│   └ その県を代表する風景画像を検索        │
├─────────────────────────────────────────┤
│ Step 3: フォルダ・HTML作成                │
│   ├ {prefecture}/index.html              │
│   └ {prefecture}/municipalities.html     │
├─────────────────────────────────────────┤
│ Step 4: 9箇所の修正実行                   │
│   ├ メタタグ（title, description, OGP）   │
│   ├ ヘッダー・フッター（県名）             │
│   ├ ヒーロー（タイトル・画像）             │
│   ├ 統計数値（市町村数・補助金数）         │
│   ├ 特徴セクション（理由・自然環境説明）    │
│   ├ CTAセクション（数値・県名）            │
│   └ スクリプト参照（data-{prefecture}.js） │
├─────────────────────────────────────────┤
│ Step 5: 全国トップページ更新               │
│   └ js/main-japan.js にデータ追加         │
├─────────────────────────────────────────┤
│ Step 6: README.md 更新                    │
│   └ 掲載状況・ファイル構造を更新          │
├─────────────────────────────────────────┤
│ Step 7: 動作確認                          │
│   └ 全てのリンク・数値が正しいか確認      │
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│ 完了報告 & Git コミットコマンド提示        │
└─────────────────────────────────────────┘
```

**重要**: 各ステップはゆっくり確実に実行し、エラーが出たら即座に修正します。

---

## 📋 事前準備

### 1. データファイルの確認

新しい都道府県データファイルをアップロード：
- ファイル名: `js/data-{prefecture}.js`（例：`data-aichi.js`）
- 配列名: `municipalitiesData`
- 必須フィールド: `name`, `url`, `workationUrl`, `type`, `hasSubsidy`, `description`

### 2. 必要な情報を収集

以下の情報を事前に調べておく：
- **都道府県名**: 例）愛知県
- **市町村数**: データファイルの配列長
- **補助金件数**: `hasSubsidy: true` の数
- **アイキャッチ画像URL**: その都道府県を代表する風景画像
- **ヒーローコピー**: 都道府県の特徴を表す一文（20〜30文字）

---

## 🚀 実装手順（5ステップ）

### Step 1: フォルダ構造作成

新しい都道府県用のフォルダとHTMLファイルを作成します。

```bash
# 例：愛知県の場合
aichi/
├── index.html           # 都道府県トップページ
└── municipalities.html  # 自治体一覧ページ
```

#### テンプレートをコピー

既存の県（埼玉など）からコピーして修正：

```bash
# 埼玉県をテンプレートとしてコピー
cp -r saitama/ aichi/
```

---

### Step 2: `index.html` の編集

以下の **9箇所** を必ず修正してください：

1. メタタグ（title, description, canonical, og:title, og:url, og:image）
2. ヘッダーブランドテキスト（2箇所：ナビゲーション・フッター）
3. ヒーローセクション（タイトル・サブタイトル・統計数値）
4. **特徴セクション**（タイトル・自然環境の説明）
5. **CTAセクション**（市町村数・補助金件数・県名）
6. **フッター説明文**（県名）
7. マップセクション（県名）
8. スクリプト参照先（data-{prefecture}.js）

---

#### 2-1. メタタグの修正

```html
<!-- 変更前 -->
<title>埼玉県ワーケーション情報 – WORKERTRIP</title>
<meta name="description" content="埼玉県63市町村のワーケーション情報...">
<link rel="canonical" href="https://workertrip.jp/saitama/">
<meta property="og:title" content="埼玉県ワーケーション情報 – WORKERTRIP">
<meta property="og:url" content="https://workertrip.jp/saitama/">
<meta property="og:image" content="https://...">

<!-- 変更後（愛知県の例） -->
<title>愛知県ワーケーション情報 – WORKERTRIP</title>
<meta name="description" content="愛知県54市町村のワーケーション情報...">
<link rel="canonical" href="https://workertrip.jp/aichi/">
<meta property="og:title" content="愛知県ワーケーション情報 – WORKERTRIP">
<meta property="og:url" content="https://workertrip.jp/aichi/">
<meta property="og:image" content="https://新しいアイキャッチ画像URL">
```

#### 2-2. ヘッダーの修正

```html
<!-- 変更前 -->
<span class="brand-text">WORKERTRIP 埼玉</span>

<!-- 変更後 -->
<span class="brand-text">WORKERTRIP 愛知</span>
```

#### 2-3. ヒーローセクションの修正

```html
<!-- ヒーロー画像 -->
<div class="hero-image" style="background-image: url('新しいアイキャッチ画像URL');"></div>

<!-- ヒーローテキスト -->
<h1 class="hero-title">
    産業と文化が融合した<br>
    新しい働き方を、愛知で
</h1>
<p class="hero-subtitle">
    ものづくりの街で、イノベーションとワーケーションが出会う
</p>
```

#### 2-4. 統計情報の修正

```html
<!-- 市町村数 -->
<div class="stat-number">54</div>
<div class="stat-label">市町村</div>

<!-- 補助金件数 -->
<div class="stat-number">3</div>
<div class="stat-label">2026補助金</div>
```

#### 2-5. 特徴セクション（Features Section）の修正

```html
<!-- セクションタイトル -->
<h2 class="section-title">愛知でワーケーションを始める理由</h2>

<!-- 豊かな自然環境カードの説明文 -->
<div class="feature-card">
    <div class="feature-icon">
        <i class="fas fa-mountain"></i>
    </div>
    <h3>豊かな自然環境</h3>
    <p>伊勢湾、三河湾、知多半島。都市と自然が調和し、ものづくりの街ならではの充実したインフラ環境です。</p>
</div>
```

**重要**: 「豊かな自然環境」の説明文は、各都道府県の特色（山岳・海岸・温泉・自然遺産など）を反映させてください。

#### 2-6. CTAセクション（Call to Action）の修正

```html
<p class="cta-text">
    54の市町村情報、3件の補助金制度。<br>
    愛知でのワーケーションに必要な情報がすべてここに。
</p>
```

**注意**: 市町村数と補助金件数は、データファイルから正確にカウントした数値を使用してください。

#### 2-7. マップセクションの修正

```html
<h2 class="section-title">愛知県 市町村マップ</h2>
<p class="section-subtitle">
    地図をクリックして、各自治体のワーケーション情報をチェック
</p>
```

#### 2-8. フッターの修正

```html
<!-- ブランドテキスト -->
<span class="brand-text">WORKERTRIP 愛知</span>

<!-- フッター説明文 -->
<p class="footer-text">
    愛知県でのワーケーション情報を発信する総合ポータルサイトです。
</p>

<!-- コピーライト -->
<p>&copy; 2025 株式会社WorkerTrip. All rights reserved.</p>
```

#### 2-9. スクリプトの修正

```html
<!-- 変更前 -->
<script src="../js/data-saitama.js"></script>

<!-- 変更後 -->
<script src="../js/data-aichi.js"></script>
```

#### 2-7. フッターの修正

```html
<span class="brand-text">WORKERTRIP 愛知</span>
<p>&copy; 2025 株式会社WorkerTrip. All rights reserved.</p>
```

---

### Step 3: `municipalities.html` の編集

#### 3-1. メタタグの修正

```html
<title>愛知県市町村一覧 – WORKERTRIP</title>
<meta name="description" content="愛知県54市町村のワーケーション情報一覧...">
<link rel="canonical" href="https://workertrip.jp/aichi/municipalities.html">
```

#### 3-2. ヘッダーの修正

```html
<span class="brand-text">WORKERTRIP 愛知</span>
```

#### 3-3. ページタイトルの修正

```html
<h1 class="page-title">自治体一覧</h1>
<p class="page-subtitle">
    愛知県54市町村のワーケーション取り組み情報<br>
    専用ページ、PDFなどで検索・比較できます
</p>
```

#### 3-4. 検索プレースホルダーの修正

```html
<input 
    type="text" 
    id="searchInput" 
    class="search-input" 
    placeholder="市町村名で検索...（例：名古屋市、豊田市）"
>
```

#### 3-5. 結果カウントの修正

```html
<span id="resultCount">54</span> 件の市町村が見つかりました
```

#### 3-6. スクリプトの修正

```html
<script src="../js/data-aichi.js"></script>
<script src="../js/municipalities.js"></script>
```

---

### Step 4: 全国トップページ（`index.html`）への追加

`js/main-japan.js` のデータ配列に新しい県を追加：

```javascript
const prefecturesData = [
    // 既存のデータ...
    
    // 新規追加
    {
        name: "愛知県",
        region: "chubu",
        status: "available",
        url: "aichi/index.html",
        municipalities: 54,
        subsidies: 3
    },
    
    // その他...
];
```

---

### Step 5: アイキャッチ画像の検索と設定

#### 画像検索のポイント

1. **検索キーワード例**:
   - 「{都道府県名} 風景」
   - 「{都道府県名} 観光 名所」
   - 「{都道府県名} 自然」

2. **推奨画像サイト**:
   - Unsplash: https://unsplash.com/
   - Pexels: https://www.pexels.com/ja-jp/
   - Pixabay: https://pixabay.com/ja/

3. **画像要件**:
   - 横長（16:9 または 3:2）
   - 高解像度（最低1920×1080px）
   - 商用利用可能
   - その県を代表する風景

4. **画像URLの取得**:
   ```
   例：Unsplashの場合
   https://images.unsplash.com/photo-XXXXXXXXX?w=1920&h=1080&fit=crop
   ```

---

## 📊 確認チェックリスト

### index.html

- [ ] `<title>` タグ変更
- [ ] メタdescription変更
- [ ] Canonical URL変更
- [ ] OGP title変更
- [ ] OGP URL変更
- [ ] OGP image変更
- [ ] ヘッダー県名変更（2箇所：ナビ＋フッター）
- [ ] ヒーロー背景画像変更
- [ ] ヒーローテキスト変更
- [ ] 市町村数変更
- [ ] 補助金件数変更
- [ ] マップセクション県名変更
- [ ] スクリプトファイル名変更

### municipalities.html

- [ ] `<title>` タグ変更
- [ ] メタdescription変更
- [ ] Canonical URL変更
- [ ] ヘッダー県名変更
- [ ] ページタイトル県名変更
- [ ] 市町村数変更
- [ ] 検索プレースホルダー例変更
- [ ] 結果カウント初期値変更
- [ ] スクリプトファイル名変更

### 全国トップページ（index.html）

- [ ] `js/main-japan.js` にデータ追加

### 動作確認

- [ ] 都道府県ページが正しく表示される
- [ ] 自治体一覧ページが正しく表示される
- [ ] 検索・フィルター機能が動作する
- [ ] 全国トップから遷移できる
- [ ] 統計数値が正しい

---

## 🛠️ 便利なコマンド

### 一括置換（macOS/Linux）

```bash
# saitamaをaichiに一括置換
cd aichi/
sed -i '' 's/埼玉/愛知/g' index.html municipalities.html
sed -i '' 's/saitama/aichi/g' index.html municipalities.html
sed -i '' 's/63/54/g' municipalities.html  # 市町村数
```

### Git操作

```bash
# 新県追加のコミット
git add aichi/ js/data-aichi.js js/main-japan.js
git commit -m "Add: 愛知県ページ追加（54市町村、3補助金）"
git push origin main
```

---

## 📝 README.md への追記

新県追加後、`README.md` の掲載状況セクションも更新：

```markdown
### 現在の掲載状況

- **全国トップページ**: 47都道府県選択機能
- **掲載中**: 10県・433市町村・20件の補助金制度
  - **長野県**: 48自治体（補助金2件）※エリア分け機能あり
  - **山梨県**: 27自治体 ※エリア分け機能あり
  - **新潟県**: 30自治体（補助金1件）※エリア分け機能あり
  - **埼玉県**: 63市町村
  - **千葉県**: 54市町村（補助金1件）
  - **和歌山県**: 30市町村
  - **福島県**: 59市町村（補助金10件）
  - **神奈川県**: 33市町村（補助金1件）
  - **群馬県**: 35市町村（補助金2件）
  - **愛知県**: 54市町村（補助金3件）← 新規追加
- **その他都道府県**: 順次展開予定
```

---

## ⏱️ 所要時間目安

| 作業 | 所要時間 |
|-----|---------|
| フォルダ・ファイルコピー | 1分 |
| index.html編集 | 5〜7分 |
| municipalities.html編集 | 3〜5分 |
| アイキャッチ画像検索 | 3〜5分 |
| main-japan.js追加 | 1分 |
| 動作確認 | 2〜3分 |
| **合計** | **約15〜22分** |

---

## 🎯 次回以降の効率化

### テンプレート化

よく使う県（埼玉など）を「テンプレート県」として保存しておき、コピー→一括置換で効率化できます。

### スクリプト化（将来的に）

将来的には、以下のようなスクリプトで自動化も可能：

```bash
# 使用例（構想）
./add-prefecture.sh aichi 愛知県 54 3 "https://image-url"
```

---

この手順書に従えば、新しい都道府県を約15〜20分で追加できます！
