#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
施設データ生成ツール
CSVファイルから recommendedFacilities JavaScript配列を自動生成

使い方:
1. facilities_data.csv に施設情報を入力
2. python generate_facilities.py を実行
3. 生成された data-{prefecture}.js の該当部分を更新

必要なライブラリ:
pip install pandas
"""

import pandas as pd
import json
from pathlib import Path

def csv_to_js_facilities(csv_file, output_dir='../js'):
    """
    CSVファイルから都道府県別のJS施設データを生成
    
    Parameters:
    -----------
    csv_file : str
        施設データが含まれるCSVファイルパス
    output_dir : str
        出力先ディレクトリ（デフォルト: ../js）
    """
    
    # CSVファイルを読み込み
    df = pd.read_csv(csv_file, encoding='utf-8')
    
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
        
        # ファイル名を生成（例: kochi → data-kochi-facilities.js）
        output_file = Path(output_dir) / f'data-{prefecture}-facilities.js'
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(js_code)
        
        print(f'✅ 生成完了: {output_file} ({len(facilities)}件の施設)')
    
    return results

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
    
    js_code = "// おすすめ施設データ（自動生成）\n"
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

def create_sample_csv(output_file='facilities_data_sample.csv'):
    """
    サンプルCSVファイルを生成
    """
    
    sample_data = {
        'prefecture': ['kochi', 'kochi', 'kochi', 'tokyo', 'tokyo'],
        'name': [
            'オーベルジュ土佐山',
            '四万十の宿',
            '高知市コワーキングスペース BASE',
            '東京コワーキングスペース XXX',
            '渋谷ワーケーションホテル'
        ],
        'type': ['宿泊施設', '宿泊施設', 'コワーキング', 'コワーキング', '宿泊施設'],
        'area': ['高知市土佐山', '四万十町', '高知市中心部', '渋谷区', '渋谷区道玄坂'],
        'imageUrl': [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        ],
        'description': [
            '高知市内から車で約30分の山間部に位置する高級オーベルジュ。地産地消の美食と静かな環境を備え、長期滞在のワーケーションに最適。',
            '日本最後の清流・四万十川沿いに建つ癒しの宿。川のせせらぎを聞きながらリモートワーク。',
            '高知駅から徒歩5分の好立地。ドロップイン・月額利用可能。高速Wi-Fi、会議室、電源、フリードリンク完備。',
            '渋谷駅徒歩3分の都心型コワーキングスペース。24時間利用可能で多様な働き方に対応。',
            '渋谷の中心地に位置するワーケーション特化型ホテル。全室にワークデスク完備。'
        ],
        'features': [
            'Wi-Fi完備, 個室ワークスペース, 地産地消レストラン, 温泉施設',
            '川沿いロケーション, 無料Wi-Fi, ワークデスク完備, アクティビティ充実',
            '駅近, 高速Wi-Fi, 会議室あり, ドロップイン可',
            '24時間営業, 高速Wi-Fi, 個室ブースあり, 電源多数',
            'ワークデスク完備, 高速Wi-Fi, ランドリー, 長期滞在プラン'
        ],
        'rakutenUrl': [
            'https://hb.afl.rakuten.co.jp/ichiba/example1',
            'https://hb.afl.rakuten.co.jp/ichiba/example2',
            '',
            '',
            'https://hb.afl.rakuten.co.jp/ichiba/example5'
        ],
        'jyaranUrl': [
            'https://www.jalan.net/example1',
            'https://www.jalan.net/example2',
            '',
            '',
            'https://www.jalan.net/example5'
        ],
        'price': [
            '¥15,000〜/泊',
            '¥8,000〜/泊',
            '¥500/日、¥8,000/月',
            '¥1,500/日、¥30,000/月',
            '¥18,000〜/泊'
        ],
        'rating': [4.5, 4.3, 4.6, 4.7, 4.4]
    }
    
    df = pd.DataFrame(sample_data)
    df.to_csv(output_file, index=False, encoding='utf-8-sig')  # Excel対応のためBOM付きUTF-8
    
    print(f'✅ サンプルCSVファイルを生成しました: {output_file}')
    print(f'   このファイルを編集して、実際の施設データを入力してください。')
    
    return df

def merge_to_data_file(prefecture, facilities_js_file, target_data_file):
    """
    生成したJSコードを既存のdata-{prefecture}.jsファイルに統合
    
    Parameters:
    -----------
    prefecture : str
        都道府県名（ローマ字、例: kochi）
    facilities_js_file : str
        生成された施設JSファイル
    target_data_file : str
        統合先のdata-{prefecture}.jsファイル
    """
    
    # 生成されたJSコードを読み込み
    with open(facilities_js_file, 'r', encoding='utf-8') as f:
        facilities_code = f.read()
    
    # 既存のdata-{prefecture}.jsを読み込み
    with open(target_data_file, 'r', encoding='utf-8') as f:
        original_code = f.read()
    
    # module.exportsの位置を探す
    export_marker = "if (typeof module !== 'undefined' && module.exports) {"
    
    if export_marker in original_code:
        # module.exportsの前に施設データを挿入
        parts = original_code.split(export_marker)
        
        # 既存のrecommendedFacilitiesがあれば削除
        if 'const recommendedFacilities' in parts[0]:
            # 既存の施設データを削除（簡易的な処理）
            print(f'⚠️  既存の施設データが見つかりました。手動で確認してください。')
        
        # 新しいコードを挿入
        new_code = parts[0].rstrip() + "\n\n" + facilities_code + "\n" + export_marker + parts[1]
        
        # バックアップを作成
        backup_file = target_data_file + '.backup'
        with open(backup_file, 'w', encoding='utf-8') as f:
            f.write(original_code)
        print(f'✅ バックアップ作成: {backup_file}')
        
        # 新しいファイルを書き込み
        with open(target_data_file, 'w', encoding='utf-8') as f:
            f.write(new_code)
        
        print(f'✅ 統合完了: {target_data_file}')
    else:
        print(f'❌ エラー: module.exports が見つかりませんでした。')

def main():
    """
    メイン処理
    """
    
    import sys
    
    if len(sys.argv) < 2:
        print('='*60)
        print('施設データ生成ツール - WORKERTRIP')
        print('='*60)
        print('')
        print('使い方:')
        print('  1. サンプルCSV生成:')
        print('     python generate_facilities.py --sample')
        print('')
        print('  2. CSVからJS生成:')
        print('     python generate_facilities.py facilities_data.csv')
        print('')
        print('  3. 既存ファイルに統合:')
        print('     python generate_facilities.py facilities_data.csv --merge')
        print('')
        print('='*60)
        return
    
    if sys.argv[1] == '--sample':
        # サンプルCSV生成
        create_sample_csv()
    elif '--merge' in sys.argv:
        # CSVからJS生成 + 既存ファイルに統合
        csv_file = sys.argv[1]
        results = csv_to_js_facilities(csv_file, output_dir='.')
        
        # 各都道府県のファイルに統合
        for prefecture in results.keys():
            facilities_file = f'data-{prefecture}-facilities.js'
            target_file = f'../js/data-{prefecture}.js'
            
            if Path(target_file).exists():
                print(f'\n統合処理: {prefecture}')
                merge_to_data_file(prefecture, facilities_file, target_file)
            else:
                print(f'⚠️  {target_file} が見つかりません。スキップします。')
    else:
        # CSVからJS生成のみ
        csv_file = sys.argv[1]
        csv_to_js_facilities(csv_file, output_dir='.')

if __name__ == '__main__':
    main()
