#!/usr/bin/env python3
"""
統計セクション（hero-stats）削除スクリプト

19県のindex.htmlから hero-stats セクションを削除します。
"""

import re

# 対象県リスト（tokyoとtochigiは手動完了済み）
PREFECTURES = [
    'miyazaki', 'ibaraki', 'kyoto', 'hyogo', 'fukuoka',
    'hiroshima', 'yamaguchi', 'tottori', 'shizuoka', 'shimane',
    'okinawa', 'oita', 'okayama', 'nara', 'nagasaki',
    'mie', 'kumamoto'
]

# 削除対象パターン（正規表現）
PATTERN = r'            <div class="hero-stats">.*?            </div>\n'

def remove_stats_section(filepath):
    """hero-stats セクションを削除"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 複数行にまたがるパターンをDOTALLフラグで検索
    pattern = re.compile(
        r'            <div class="hero-stats">.*?'
        r'            </div>\n        </div>',
        re.DOTALL
    )
    
    # 置換
    new_content = pattern.sub('            </div>\n        </div>', content)
    
    # 変更があった場合のみ書き込み
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    """メイン処理"""
    success_count = 0
    
    for pref in PREFECTURES:
        filepath = f'{pref}/index.html'
        try:
            if remove_stats_section(filepath):
                print(f'✅ {pref}/index.html - 削除完了')
                success_count += 1
            else:
                print(f'⚠️  {pref}/index.html - 変更なし（すでに削除済みか、パターン不一致）')
        except FileNotFoundError:
            print(f'❌ {pref}/index.html - ファイルが見つかりません')
        except Exception as e:
            print(f'❌ {pref}/index.html - エラー: {e}')
    
    print(f'\n完了: {success_count}/{len(PREFECTURES)} 県')

if __name__ == '__main__':
    main()
