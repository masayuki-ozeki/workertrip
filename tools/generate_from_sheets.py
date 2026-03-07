#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Googleスプレッドシートから施設データを取得してJS生成

使い方:
1. Googleスプレッドシートを作成（テンプレートと同じ列構成）
2. スプレッドシートを「リンクを知っている全員が閲覧可能」に設定
3. スプレッドシートのIDをコピー（URLの `/d/` と `/edit` の間の部分）
4. このスクリプトを実行:
   python generate_from_sheets.py [スプレッドシートID]

必要なライブラリ:
pip install gspread google-auth pandas
"""

import sys
import pandas as pd
from pathlib import Path

try:
    import gspread
    from google.oauth2.service_account import Credentials
except ImportError:
    print('❌ エラー: 必要なライブラリがインストールされていません。')
    print('   以下のコマンドを実行してください:')
    print('   pip install gspread google-auth pandas')
    sys.exit(1)

def read_google_sheet_simple(spreadsheet_url):
    """
    公開されているGoogleスプレッドシートからデータを読み込み（認証不要版）
    
    Parameters:
    -----------
    spreadsheet_url : str
        GoogleスプレッドシートのURL（CSV export URLに変換）
    
    Returns:
    --------
    DataFrame : 読み込んだデータ
    """
    
    # スプレッドシートIDを抽出
    if '/d/' in spreadsheet_url:
        sheet_id = spreadsheet_url.split('/d/')[1].split('/')[0]
    else:
        sheet_id = spreadsheet_url
    
    # CSV export URLを構築
    csv_url = f'https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv'
    
    try:
        df = pd.read_csv(csv_url)
        print(f'✅ Googleスプレッドシートからデータを読み込みました（{len(df)}行）')
        return df
    except Exception as e:
        print(f'❌ エラー: スプレッドシートの読み込みに失敗しました。')
        print(f'   スプレッドシートが「リンクを知っている全員が閲覧可能」に設定されているか確認してください。')
        print(f'   エラー詳細: {e}')
        sys.exit(1)

def generate_js_code(facilities):
    """
    施設データからJavaScriptコードを生成
    
    Parameters:
    -----------
    facilities : list
        施設データのリスト
    
    Returns:
    --------
    str : JavaScript形式のコード
    """
    
    js_code = "// おすすめ施設データ（Googleスプレッドシートから自動生成）\n"
    js_code += "// 生成日時: " + pd.Timestamp.now().strftime('%Y-%m-%d %H:%M:%S') + "\n\n"
    js_code += "const recommendedFacilities = [\n"
    
    for i, facility in enumerate(facilities):
        js_code += "  {\n"
        js_code += f"    name: \"{facility['name']}\",\n"
        js_code += f"    type: \"{facility['type']}\",\n"
        js_code += f"    area: \"{facility['area']}\",\n"
        js_code += f"    imageUrl: \"{facility['imageUrl']}\",\n"
        js_code += f"    description: \"{facility['description']}\",\n"
        
        # 特徴配列
        features_str = ', '.join([f'"{f}"' for f in facility['features']])
        js_code += f"    features: [{features_str}],\n"
        
        js_code += f"    rakutenUrl: \"{facility['rakutenUrl']}\",\n"
        js_code += f"    jyaranUrl: \"{facility['jyaranUrl']}\",\n"
        js_code += f"    price: \"{facility['price']}\",\n"
        js_code += f"    rating: {facility['rating']}\n"
        
        # 最後の要素以外はカンマを追加
        if i < len(facilities) - 1:
            js_code += "  },\n"
        else:
            js_code += "  }\n"
    
    js_code += "];\n\n"
    js_code += "// このコードを data-{prefecture}.js の末尾（module.exports の前）に追加してください\n"
    
    return js_code

def process_spreadsheet(spreadsheet_url, output_dir='.'):
    """
    Googleスプレッドシートから施設データを読み込み、JSファイルを生成
    
    Parameters:
    -----------
    spreadsheet_url : str
        GoogleスプレッドシートのURLまたはID
    output_dir : str
        出力先ディレクトリ
    """
    
    # スプレッドシートからデータを読み込み
    df = read_google_sheet_simple(spreadsheet_url)
    
    # データ検証
    required_columns = ['prefecture', 'name', 'type', 'area', 'imageUrl', 
                       'description', 'features', 'rakutenUrl', 'jyaranUrl', 
                       'price', 'rating']
    
    missing_columns = [col for col in required_columns if col not in df.columns]
    if missing_columns:
        print(f'❌ エラー: 必要な列が見つかりません: {", ".join(missing_columns)}')
        print(f'   現在の列: {", ".join(df.columns)}')
        sys.exit(1)
    
    # 都道府県ごとにグループ化
    grouped = df.groupby('prefecture')
    
    results = {}
    
    for prefecture, group in grouped:
        facilities = []
        
        for _, row in group.iterrows():
            # 特徴を配列に変換（カンマ区切り）
            features = [f.strip() for f in str(row['features']).split(',') if f.strip()]
            
            facility = {
                'name': row['name'],
                'type': row['type'],
                'area': row['area'],
                'imageUrl': row['imageUrl'],
                'description': row['description'],
                'features': features,
                'rakutenUrl': str(row['rakutenUrl']) if pd.notna(row['rakutenUrl']) else "",
                'jyaranUrl': str(row['jyaranUrl']) if pd.notna(row['jyaranUrl']) else "",
                'price': row['price'],
                'rating': float(row['rating'])
            }
            facilities.append(facility)
        
        results[prefecture] = facilities
    
    # 各都道府県のJavaScriptコードを生成
    for prefecture, facilities in results.items():
        js_code = generate_js_code(facilities)
        
        # ファイル名を生成
        output_file = Path(output_dir) / f'data-{prefecture}-facilities.js'
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(js_code)
        
        print(f'✅ 生成完了: {output_file} ({len(facilities)}件の施設)')
    
    return results

def main():
    """
    メイン処理
    """
    
    if len(sys.argv) < 2:
        print('='*60)
        print('Googleスプレッドシート → 施設データ生成ツール')
        print('='*60)
        print('')
        print('使い方:')
        print('  python generate_from_sheets.py [スプレッドシートURL]')
        print('')
        print('例:')
        print('  python generate_from_sheets.py https://docs.google.com/spreadsheets/d/1ABC.../edit')
        print('  python generate_from_sheets.py 1ABC123XYZ456')
        print('')
        print('注意:')
        print('  - スプレッドシートを「リンクを知っている全員が閲覧可能」に設定してください')
        print('  - スプレッドシートの列構成はテンプレートと同じにしてください')
        print('')
        print('テンプレート:')
        print('  https://docs.google.com/spreadsheets/d/[template-id]/copy')
        print('')
        print('='*60)
        return
    
    spreadsheet_url = sys.argv[1]
    
    # スプレッドシートから施設データを取得してJSファイル生成
    process_spreadsheet(spreadsheet_url, output_dir='.')
    
    print('')
    print('='*60)
    print('✅ 処理完了')
    print('='*60)
    print('次のステップ:')
    print('  1. 生成された data-{prefecture}-facilities.js ファイルを確認')
    print('  2. 必要に応じて ../js/data-{prefecture}.js に統合')
    print('  3. Webページで動作確認')
    print('='*60)

if __name__ == '__main__':
    main()
