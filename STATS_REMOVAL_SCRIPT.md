# 統計セクション削除スクリプト

19県から hero-stats セクションを削除

## 対象ファイル（19県）
- tokyo/index.html ✅ 完了
- tochigi/index.html
- miyazaki/index.html
- ibaraki/index.html
- kyoto/index.html
- hyogo/index.html
- fukuoka/index.html
- hiroshima/index.html
- yamaguchi/index.html
- tottori/index.html
- shizuoka/index.html
- shimane/index.html
- okinawa/index.html
- oita/index.html
- okayama/index.html
- nara/index.html
- nagasaki/index.html
- mie/index.html
- kumamoto/index.html

## 削除対象

```html
            <div class="hero-stats">
                <div class="stat-item">
                    <div class="stat-number">{数値}</div>
                    <div class="stat-label">{ラベル}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">{数値}</div>
                    <div class="stat-label">2026補助金</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">{数値}</div>
                    <div class="stat-label">{ラベル}</div>
                </div>
            </div>
```

## 理由
- データメンテナンスが大変
- 補助金数・取り組み率が変動しやすい
- 古いデータの放置リスク回避
