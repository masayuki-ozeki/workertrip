# 施設データ自動生成ツール

## 📚 概要

このツールセットは、**ExcelやGoogleスプレッドシートで施設情報を管理し、JavaScriptファイルに自動変換**するためのPythonスクリプト群です。

### 🎯 目的

- 非エンジニアでも施設データを簡単に追加・更新できる
- JavaScriptコードを手動で書く必要をなくす
- データの一元管理と効率的な更新フロー

---

## 🛠️ ツール一覧

### 1. **generate_facilities.py** （推奨）
CSVファイル → JavaScriptファイル変換ツール

**使い方:**
```bash
# サンプルCSV生成
python generate_facilities.py --sample

# CSVからJS生成
python generate_facilities.py facilities_data.csv

# 既存ファイルに統合
python generate_facilities.py facilities_data.csv --merge
```

**メリット:**
- ✅ Excelで編集可能
- ✅ オフラインで作業可能
- ✅ 簡単な操作

### 2. **generate_from_sheets.py**
Googleスプレッドシート → JavaScriptファイル変換ツール

**使い方:**
```bash
python generate_from_sheets.py [スプレッドシートURL]
```

**メリット:**
- ✅ 複数人で同時編集可能
- ✅ クラウドで管理
- ✅ バージョン履歴が残る

### 3. **facilities_data_template.csv**
施設データ入力用のCSVテンプレート

### 4. **TOOLS_MANUAL.md**
詳細な使い方マニュアル

---

## 🚀 クイックスタート

### 前提条件

- Python 3.7以上
- pandasライブラリ

### セットアップ

```bash
# pandasをインストール
pip install pandas

# Googleスプレッドシート版を使う場合
pip install gspread google-auth
```

### 基本的な使い方

#### 方法1: CSV版（推奨）

```bash
# 1. サンプルCSVを生成
cd tools
python generate_facilities.py --sample

# 2. facilities_data_sample.csv をExcelで編集

# 3. JavaScriptファイルを生成
python generate_facilities.py facilities_data_sample.csv

# 4. 既存ファイルに統合
python generate_facilities.py facilities_data_sample.csv --merge
```

#### 方法2: Googleスプレッドシート版

```bash
# 1. Googleスプレッドシートを作成（テンプレートをコピー）

# 2. スプレッドシートを「リンクを知っている全員が閲覧可能」に設定

# 3. スクリプトを実行
python generate_from_sheets.py [スプレッドシートURL]
```

---

## 📝 データ形式

### CSVファイルの構造

| 列名 | 説明 | 例 |
|------|------|-----|
| prefecture | 都道府県名（ローマ字） | `kochi`, `tokyo` |
| name | 施設名 | `オーベルジュ土佐山` |
| type | 施設タイプ | `宿泊施設`, `コワーキング` |
| area | エリア | `高知市土佐山` |
| imageUrl | 画像URL | `https://images.unsplash.com/...` |
| description | 説明文（120文字程度） | `高知市内から車で約30分...` |
| features | 特徴（カンマ区切り） | `Wi-Fi完備,温泉,個室` |
| rakutenUrl | 楽天トラベルURL | `https://hb.afl.rakuten.co.jp/...` |
| jyaranUrl | じゃらんURL | `https://www.jalan.net/...` |
| price | 価格 | `¥15,000〜/泊` |
| rating | 評価（5段階） | `4.5` |

### 入力例

```csv
prefecture,name,type,area,imageUrl,description,features,rakutenUrl,jyaranUrl,price,rating
kochi,オーベルジュ土佐山,宿泊施設,高知市土佐山,https://images.unsplash.com/...,高知市内から車で約30分の山間部に位置...,"Wi-Fi完備,温泉,個室",https://rakuten...,https://jalan...,¥15000〜/泊,4.5
```

---

## 📂 ファイル構成

```
tools/
├── generate_facilities.py           # CSV→JS変換ツール（推奨）
├── generate_from_sheets.py          # Googleスプレッドシート→JS変換ツール
├── facilities_data_template.csv     # CSVテンプレート
├── TOOLS_MANUAL.md                  # 詳細マニュアル
└── README.md                        # このファイル
```

---

## 🎓 チュートリアル

### 例: 高知県に5つの施設を追加

#### ステップ1: テンプレートをコピー

```bash
cp facilities_data_template.csv my_kochi_facilities.csv
```

#### ステップ2: Excelで編集

`my_kochi_facilities.csv` をExcelで開き、施設情報を入力します。

#### ステップ3: JavaScriptファイルを生成

```bash
python generate_facilities.py my_kochi_facilities.csv
```

これで `data-kochi-facilities.js` が生成されます。

#### ステップ4: 既存ファイルに統合

```bash
python generate_facilities.py my_kochi_facilities.csv --merge
```

自動的に `../js/data-kochi.js` に統合されます（バックアップも作成）。

#### ステップ5: 確認

`kochi/index.html` を開いて、施設セクションが正しく表示されるか確認します。

---

## 🔧 トラブルシューティング

### エラー: `ModuleNotFoundError: No module named 'pandas'`

**解決策:**
```bash
pip install pandas
```

### エラー: CSVファイルが見つからない

**解決策:**
- ファイル名が正しいか確認
- `tools/` フォルダ内で実行しているか確認

### 文字化けする

**解決策:**
- Excelで保存時に「CSV UTF-8 (カンマ区切り)」を選択

---

## 💡 ベストプラクティス

### 画像の選び方

- **Unsplash推奨**: https://unsplash.com/
- 横長画像（16:9または4:3）
- 高解像度（800×600以上）
- URL形式: `?w=800&h=600&fit=crop` を追加

### 説明文の書き方

- **120文字程度**に収める
- 施設の特徴を簡潔に
- ワーケーションに関連する情報を優先

### 価格表示

- 宿泊施設: `¥15,000〜/泊`
- コワーキング: `¥500/日・¥8,000/月`
- 実際の価格帯を調査して記載

---

## 🚦 ワークフロー

### 月次更新フロー（推奨）

1. **毎月1日**: CSVファイルを確認・更新
2. **新施設追加**: CSVに行を追加
3. **価格更新**: 必要に応じて価格を修正
4. **スクリプト実行**: `python generate_facilities.py [CSV] --merge`
5. **Webページ確認**: ブラウザで表示を確認
6. **デプロイ**: Publishタブからデプロイ

### チームでの運用

- **Googleスプレッドシート版を使用**
- 複数人で同時編集可能
- 編集履歴が自動保存
- 毎週自動実行（GitHub Actionsなどで自動化可能）

---

## 📈 今後の拡張予定

- [ ] APIからの自動データ取得（楽天・じゃらんAPI）
- [ ] 画像の自動最適化（WebP変換）
- [ ] 施設の自動評価スコア算出
- [ ] Slack/Discord通知機能

---

## 📞 サポート

詳細なマニュアルは **TOOLS_MANUAL.md** を参照してください。

質問や問題がある場合は、プロジェクト管理者までお問い合わせください。

---

**作成日**: 2026年3月6日  
**バージョン**: v1.0  
**WORKERTRIP開発チーム**
