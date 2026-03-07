# 施設データ自動生成ツール - 使い方マニュアル

## 📚 目次
1. [概要](#概要)
2. [セットアップ](#セットアップ)
3. [基本的な使い方](#基本的な使い方)
4. [CSV編集ガイド](#csv編集ガイド)
5. [トラブルシューティング](#トラブルシューティング)
6. [よくある質問](#よくある質問)

---

## 概要

このツールは、**ExcelまたはCSVで施設情報を管理し、JavaScriptファイルに自動変換**するPythonスクリプトです。

### メリット
- ✅ **非エンジニアでも簡単**: Excel感覚で施設データを入力
- ✅ **手作業の削減**: JavaScriptコードを書く必要なし
- ✅ **一括管理**: 複数の都道府県のデータを1つのCSVで管理
- ✅ **エラー防止**: フォーマットミスを自動的に防止

---

## セットアップ

### 1. Python環境の確認

まず、Pythonがインストールされているか確認してください。

```bash
python --version
# または
python3 --version
```

**Python 3.7以上**が必要です。

### 2. 必要なライブラリのインストール

```bash
pip install pandas
# または
pip3 install pandas
```

### 3. ツールの配置

以下のファイルが `tools/` フォルダに配置されていることを確認：

```
WORKERTRIP/
├── tools/
│   ├── generate_facilities.py         # メインスクリプト
│   ├── facilities_data_template.csv   # CSVテンプレート
│   └── TOOLS_MANUAL.md               # このマニュアル
├── js/
│   ├── data-kochi.js
│   ├── data-tokyo.js
│   └── ...
```

---

## 基本的な使い方

### ステップ1: サンプルCSVファイルを生成

初めての場合は、サンプルCSVファイルを生成します。

```bash
cd tools
python generate_facilities.py --sample
```

これで `facilities_data_sample.csv` が生成されます。

### ステップ2: CSVファイルを編集

生成された `facilities_data_sample.csv` をExcelまたはテキストエディタで開き、実際の施設データを入力します。

**テンプレート（facilities_data_template.csv）をコピーして使うこともできます。**

### ステップ3: JavaScriptファイルを生成

CSVファイルの編集が完了したら、以下のコマンドを実行：

```bash
python generate_facilities.py facilities_data.csv
```

これで、都道府県ごとに `data-{prefecture}-facilities.js` ファイルが生成されます。

### ステップ4: 既存ファイルに統合（オプション）

生成されたJSコードを既存の `data-{prefecture}.js` に自動統合するには：

```bash
python generate_facilities.py facilities_data.csv --merge
```

⚠️ **注意**: 統合前に自動バックアップ（`.backup`）が作成されます。

### ステップ5: 手動で確認・調整

生成されたファイルを確認し、必要に応じて手動で調整します。

---

## CSV編集ガイド

### CSVファイルの構造

| 列名 | 説明 | 例 | 必須 |
|------|------|-----|------|
| **prefecture** | 都道府県名（ローマ字小文字） | `kochi`, `tokyo`, `osaka` | ✅ 必須 |
| **name** | 施設名 | `オーベルジュ土佐山` | ✅ 必須 |
| **type** | 施設タイプ | `宿泊施設` または `コワーキング` | ✅ 必須 |
| **area** | エリア・地域名 | `高知市土佐山` | ✅ 必須 |
| **imageUrl** | 施設画像のURL | `https://images.unsplash.com/...` | ✅ 必須 |
| **description** | 施設の説明文（120文字程度） | `高知市内から車で約30分の...` | ✅ 必須 |
| **features** | 特徴（カンマ区切り） | `Wi-Fi完備,温泉,個室` | ✅ 必須 |
| **rakutenUrl** | 楽天トラベルURL | `https://hb.afl.rakuten.co.jp/...` | ⭕ 任意 |
| **jyaranUrl** | じゃらんURL | `https://www.jalan.net/...` | ⭕ 任意 |
| **price** | 価格表示 | `¥15,000〜/泊` | ✅ 必須 |
| **rating** | 評価（5段階） | `4.5` | ✅ 必須 |

### 入力例

#### 宿泊施設の場合

```csv
prefecture,name,type,area,imageUrl,description,features,rakutenUrl,jyaranUrl,price,rating
kochi,オーベルジュ土佐山,宿泊施設,高知市土佐山,https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop,高知市内から車で約30分の山間部に位置する高級オーベルジュ。地産地消の美食と静かな環境。,"Wi-Fi完備,個室ワークスペース,温泉施設",https://hb.afl.rakuten.co.jp/ichiba/example1,https://www.jalan.net/example1,¥15000〜/泊,4.5
```

#### コワーキングスペースの場合

```csv
prefecture,name,type,area,imageUrl,description,features,rakutenUrl,jyaranUrl,price,rating
tokyo,東京コワーキング渋谷,コワーキング,渋谷区,https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop,渋谷駅徒歩3分の都心型コワーキングスペース。24時間利用可能。,"24時間営業,高速Wi-Fi,個室ブース",,,¥1500/日・¥30000/月,4.7
```

### 重要な注意点

#### 1. prefecture（都道府県名）
- **ローマ字小文字**で入力
- スペースなし
- 例: `kochi`, `tokyo`, `osaka`, `hokkaido`

#### 2. type（施設タイプ）
- **「宿泊施設」または「コワーキング」**のみ
- 他の表記は使わない

#### 3. features（特徴）
- **カンマ区切り**で入力
- 引用符で囲まない
- 例: `Wi-Fi完備,温泉,個室ワークスペース`

#### 4. 画像URL
- **Unsplashを推奨**: `https://images.unsplash.com/photo-xxx?w=800&h=600&fit=crop`
- 他のCDNでもOK（HTTPS推奨）
- 横長画像（16:9または4:3）が最適

#### 5. アフィリエイトリンク
- 空欄でもOK（その場合は予約リンクが表示されない）
- 楽天のみ、じゃらんのみでもOK
- URL全体を入力（`https://`から）

#### 6. price（価格）
- **日本円マークと単位**を含める
- 宿泊施設: `¥15,000〜/泊`
- コワーキング: `¥500/日・¥8,000/月`
- カンマは使っても使わなくてもOK

#### 7. rating（評価）
- **0.0〜5.0の範囲**
- 小数点1桁まで（例: `4.5`, `4.7`）
- 整数でもOK（例: `4`, `5`）

---

## 出力ファイル

### 生成されるファイル

実行すると、以下のファイルが `tools/` フォルダに生成されます：

```
tools/
├── data-kochi-facilities.js     # 高知県の施設データ
├── data-tokyo-facilities.js     # 東京都の施設データ
├── data-osaka-facilities.js     # 大阪府の施設データ
└── ...
```

### ファイルの内容例

```javascript
// おすすめ施設データ（自動生成）
// 生成日時: 2026-03-06 14:30:00

const recommendedFacilities = [
  {
    name: "オーベルジュ土佐山",
    type: "宿泊施設",
    area: "高知市土佐山",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    description: "高知市内から車で約30分の山間部に位置する高級オーベルジュ。",
    features: ["Wi-Fi完備", "個室ワークスペース", "温泉施設"],
    rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/example1",
    jyaranUrl: "https://www.jalan.net/example1",
    price: "¥15,000〜/泊",
    rating: 4.5
  },
  // ... 他の施設
];

// このコードを data-{prefecture}.js の末尾（module.exports の前）に追加してください
```

---

## 既存ファイルへの統合

### 自動統合（推奨）

```bash
python generate_facilities.py facilities_data.csv --merge
```

このコマンドは以下を自動で実行します：

1. 既存の `../js/data-{prefecture}.js` を検索
2. ファイルのバックアップを作成（`.backup`）
3. `module.exports` の前に施設データを挿入
4. 新しいファイルを保存

### 手動統合

自動統合がうまくいかない場合は、手動でコピー＆ペーストします。

#### 手順:

1. 生成された `data-{prefecture}-facilities.js` を開く
2. コード全体をコピー
3. `../js/data-{prefecture}.js` を開く
4. ファイル末尾の `if (typeof module !== 'undefined'...` の**直前**にペースト
5. 保存

**例:**

```javascript
// ... 既存のmunicipalities配列など

// ここに施設データをペースト
const recommendedFacilities = [
  // ...
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = municipalitiesData;
}
```

---

## トラブルシューティング

### エラー: `ModuleNotFoundError: No module named 'pandas'`

**原因**: pandasライブラリがインストールされていない

**解決策**:
```bash
pip install pandas
```

### エラー: `FileNotFoundError: [Errno 2] No such file or directory`

**原因**: CSVファイルが見つからない

**解決策**:
1. ファイル名が正しいか確認
2. `tools/` フォルダで実行しているか確認
3. ファイルのパスを絶対パスで指定

```bash
python generate_facilities.py /full/path/to/facilities_data.csv
```

### エラー: `UnicodeDecodeError`

**原因**: CSVファイルの文字コードが正しくない

**解決策**:
1. Excelで保存する際に「CSV UTF-8 (カンマ区切り) (.csv)」を選択
2. または、テキストエディタでUTF-8で保存し直す

### 生成されたJSコードが文字化けする

**原因**: ターミナルの文字コード設定

**解決策**:
1. Windowsの場合: PowerShellまたはWSL2を使用
2. ファイルを直接開いて確認（文字化けはターミナル表示上の問題の可能性）

### 既存の施設データが上書きされない

**原因**: `--merge` オプションを使用していない、または既存データの形式が異なる

**解決策**:
1. `--merge` オプションを追加して再実行
2. または、手動で既存の `const recommendedFacilities = [...]` 部分を削除してから再実行

---

## よくある質問

### Q1: 一度に複数の都道府県のデータを処理できますか？

**A:** はい、できます。CSVファイルに複数の都道府県の施設を記載するだけです。スクリプトが自動的に都道府県ごとに分類します。

### Q2: 画像はどこで入手すればいいですか？

**A:** 以下の無料画像サイトがおすすめです：
- **Unsplash**: https://unsplash.com/ （商用利用可、帰属不要）
- **Pixabay**: https://pixabay.com/
- **Pexels**: https://www.pexels.com/

検索例: "hotel", "coworking space", "japan hotel", "modern office"

### Q3: アフィリエイトリンクはどうやって取得しますか？

**A:**
- **楽天トラベル**: https://affiliate.rakuten.co.jp/ に登録
- **じゃらん**: https://www.jalan.net/affiliate/ に登録

施設ページでアフィリエイトリンクを生成できます。

### Q4: CSVファイルをExcelで編集できますか？

**A:** はい、Excelでの編集を推奨します。ただし、保存時に**「CSV UTF-8 (カンマ区切り) (.csv)」**を選択してください。

### Q5: 施設を追加・削除したい場合は？

**A:** CSVファイルで行を追加・削除し、再度スクリプトを実行するだけです。

### Q6: 何件まで登録できますか？

**A:** 制限はありませんが、1都道府県あたり**5〜10件**を推奨します（ページ表示速度のため）。

### Q7: 既存のデータを更新したい場合は？

**A:** CSVファイルで該当行を編集し、`--merge` オプションで再実行します。既存データは上書きされます。

### Q8: バックアップから復元したい場合は？

**A:**
```bash
cp ../js/data-kochi.js.backup ../js/data-kochi.js
```

---

## 実践例

### 例1: 高知県に3つの施設を追加

#### 1. CSVファイルを作成（`my_facilities.csv`）

```csv
prefecture,name,type,area,imageUrl,description,features,rakutenUrl,jyaranUrl,price,rating
kochi,土佐山オーベルジュ,宿泊施設,高知市土佐山,https://images.unsplash.com/photo-1566073771259-6a8506099945,高知市内から車で30分。地産地消の美食とWi-Fi完備。,"Wi-Fi完備,温泉,レストラン",https://rakuten.example.com,https://jalan.example.com,¥15000〜/泊,4.5
kochi,四万十の宿,宿泊施設,四万十町,https://images.unsplash.com/photo-1520250497591-112f2f40a3f4,清流・四万十川沿いの癒しの宿。リモートワークに最適。,"川沿い,Wi-Fi,ワークデスク",https://rakuten.example.com,https://jalan.example.com,¥8000〜/泊,4.3
kochi,高知駅前コワーキング,コワーキング,高知市,https://images.unsplash.com/photo-1497366216548-37526070297c,高知駅徒歩5分。ドロップイン可能。,"駅近,Wi-Fi,会議室",,,¥500/日,4.6
```

#### 2. スクリプトを実行

```bash
cd tools
python generate_facilities.py my_facilities.csv
```

#### 3. 生成されたファイルを確認

`data-kochi-facilities.js` が生成されます。

#### 4. 既存ファイルに統合

```bash
python generate_facilities.py my_facilities.csv --merge
```

#### 5. Webページで確認

`kochi/index.html` を開いて、施設セクションが正しく表示されるか確認します。

---

## まとめ

このツールを使えば、**Excel感覚で施設データを管理**でき、JavaScriptコードを手動で書く必要がありません。

### 基本ワークフロー:

1. CSVファイルを編集（Excel推奨）
2. `python generate_facilities.py [CSVファイル] --merge` を実行
3. Webページで確認

### サポート

質問や問題がある場合は、プロジェクト管理者までお問い合わせください。

---

**作成日**: 2026年3月6日  
**バージョン**: v1.0  
**WORKERTRIP開発チーム**
