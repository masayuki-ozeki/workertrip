# OG画像一括更新スクリプト

19県のOG画像URLを一括更新するための編集リスト

## 更新対象（unsplash画像使用中の県）

1. tochigi: photo-1574873215435-934039c07cb7
2. ibaraki: photo-1590559899731-a382839e5549
3. hyogo: photo-1590559899731-a382839e5549
4. miyazaki: photo-1570214476660-5c6f8ea7b0c6
5. fukuoka: photo-1590559899845-d6b08a319c3c
6. hiroshima: photo-1590559899845-d6b08a319c3c
7. yamaguchi: photo-1590559899845-d6b08a319c3c
8. tottori: photo-1590559899845-d6b08a319c3c
9. shimane: photo-1590559899845-d6b08a319c3c
10. okinawa: photo-1590559899845-d6b08a319c3c
11. oita: photo-1590559899845-d6b08a319c3c
12. okayama: photo-1590559899845-d6b08a319c3c
13. nagasaki: photo-1590559899845-d6b08a319c3c
14. kumamoto: photo-1590559899845-d6b08a319c3c

## 更新済み
- tokyo: ✅ 東京スカイツリー
- shizuoka: ✅ 富士山・茶畑
- mie: ✅ 伊勢神宮
- kyoto: ✅ 金閣寺
- nara: ✅ 東大寺・鹿

## 更新内容

各県のindex.htmlで以下のパターンの文字列を新しいURLに置換:

```html
<!-- 旧 -->
<meta property="og:image" content="https://images.unsplash.com/photo-{id}?w=1200&h=630&fit=crop">

<!-- 新 -->
<meta property="og:image" content="{県固有のURL}">
```
