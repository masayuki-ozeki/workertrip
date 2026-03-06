// 全国トップページ用JavaScript

// 都道府県データ
const prefecturesData = [
    // 北海道・東北
    { name: "北海道", region: "hokkaido-tohoku", status: "available", url: "hokkaido/index.html", municipalities: 179, subsidies: 4 },
    { name: "青森県", region: "hokkaido-tohoku", status: "available", url: "aomori/index.html", municipalities: 40, subsidies: 1 },
    { name: "岩手県", region: "hokkaido-tohoku", status: "available", url: "iwate/index.html", municipalities: 33, subsidies: 1 },
    { name: "宮城県", region: "hokkaido-tohoku", status: "available", url: "miyagi/index.html", municipalities: 35, subsidies: 0 },
    { name: "秋田県", region: "hokkaido-tohoku", status: "available", url: "akita/index.html", municipalities: 25, subsidies: 1 },
    { name: "山形県", region: "hokkaido-tohoku", status: "available", url: "yamagata/index.html", municipalities: 35, subsidies: 0 },
    { name: "福島県", region: "hokkaido-tohoku", status: "available", url: "fukushima/index.html", municipalities: 59, subsidies: 10 },
    
    // 関東
    { name: "茨城県", region: "kanto", status: "available", url: "ibaraki/index.html", municipalities: 45, subsidies: 2 },
    { name: "栃木県", region: "kanto", status: "available", url: "tochigi/index.html", municipalities: 25, subsidies: 0 },
    { name: "群馬県", region: "kanto", status: "available", url: "gunma/index.html", municipalities: 35, subsidies: 2 },
    { name: "埼玉県", region: "kanto", status: "available", url: "saitama/index.html", municipalities: 63, subsidies: 0 },
    { name: "千葉県", region: "kanto", status: "available", url: "chiba/index.html", municipalities: 54, subsidies: 1 },
    { name: "東京都", region: "kanto", status: "available", url: "tokyo/index.html", municipalities: 62, subsidies: 5 },
    { name: "神奈川県", region: "kanto", status: "available", url: "kanagawa/index.html", municipalities: 33, subsidies: 1 },
    
    // 中部
    { name: "新潟県", region: "chubu", status: "available", url: "niigata/index.html", municipalities: 30, subsidies: 1 },
    { name: "富山県", region: "chubu", status: "available", url: "toyama/index.html", municipalities: 15, subsidies: 1 },
    { name: "石川県", region: "chubu", status: "available", url: "ishikawa/index.html", municipalities: 19, subsidies: 1 },
    { name: "福井県", region: "chubu", status: "available", url: "fukui/index.html", municipalities: 17, subsidies: 1 },
    { name: "山梨県", region: "chubu", status: "available", url: "yamanashi/index.html", municipalities: 27, subsidies: 0 },
    { name: "長野県", region: "chubu", status: "available", url: "nagano/index.html", municipalities: 48, subsidies: 2 },
    { name: "岐阜県", region: "chubu", status: "available", url: "gifu/index.html", municipalities: 42, subsidies: 1 },
    { name: "静岡県", region: "chubu", status: "available", url: "shizuoka/index.html", municipalities: 35, subsidies: 1 },
    { name: "愛知県", region: "chubu", status: "available", url: "aichi/index.html", municipalities: 54, subsidies: 1 },
    
    // 近畿
    { name: "三重県", region: "kinki", status: "available", url: "mie/index.html", municipalities: 29, subsidies: 1 },
    { name: "滋賀県", region: "kinki", status: "available", url: "shiga/index.html", municipalities: 19, subsidies: 1 },
    { name: "京都府", region: "kinki", status: "available", url: "kyoto/index.html", municipalities: 26, subsidies: 1 },
    { name: "大阪府", region: "kinki", status: "available", url: "osaka/index.html", municipalities: 43, subsidies: 1 },
    { name: "兵庫県", region: "kinki", status: "available", url: "hyogo/index.html", municipalities: 41, subsidies: 1 },
    { name: "奈良県", region: "kinki", status: "available", url: "nara/index.html", municipalities: 39, subsidies: 1 },
    { name: "和歌山県", region: "kinki", status: "available", url: "wakayama/index.html", municipalities: 30, subsidies: 0 },
    
    // 中国・四国
    { name: "鳥取県", region: "chugoku-shikoku", status: "available", url: "tottori/index.html", municipalities: 19, subsidies: 1 },
    { name: "島根県", region: "chugoku-shikoku", status: "available", url: "shimane/index.html", municipalities: 19, subsidies: 1 },
    { name: "岡山県", region: "chugoku-shikoku", status: "available", url: "okayama/index.html", municipalities: 27, subsidies: 1 },
    { name: "広島県", region: "chugoku-shikoku", status: "available", url: "hiroshima/index.html", municipalities: 23, subsidies: 1 },
    { name: "山口県", region: "chugoku-shikoku", status: "available", url: "yamaguchi/index.html", municipalities: 19, subsidies: 2 },
    { name: "徳島県", region: "chugoku-shikoku", status: "available", url: "tokushima/index.html", municipalities: 24, subsidies: 0 },
    { name: "香川県", region: "chugoku-shikoku", status: "available", url: "kagawa/index.html", municipalities: 17, subsidies: 0 },
    { name: "愛媛県", region: "chugoku-shikoku", status: "available", url: "ehime/index.html", municipalities: 20, subsidies: 9 },
    { name: "高知県", region: "chugoku-shikoku", status: "available", url: "kochi/index.html", municipalities: 34, subsidies: 34 },
    
    // 九州・沖縄
    { name: "福岡県", region: "kyushu-okinawa", status: "available", url: "fukuoka/index.html", municipalities: 60, subsidies: 1 },
    { name: "佐賀県", region: "kyushu-okinawa", status: "available", url: "saga/index.html", municipalities: 20, subsidies: 1 },
    { name: "長崎県", region: "kyushu-okinawa", status: "available", url: "nagasaki/index.html", municipalities: 21, subsidies: 1 },
    { name: "熊本県", region: "kyushu-okinawa", status: "available", url: "kumamoto/index.html", municipalities: 45, subsidies: 0 },
    { name: "大分県", region: "kyushu-okinawa", status: "available", url: "oita/index.html", municipalities: 18, subsidies: 1 },
    { name: "宮崎県", region: "kyushu-okinawa", status: "available", url: "miyazaki/index.html", municipalities: 26, subsidies: 5 },
    { name: "鹿児島県", region: "kyushu-okinawa", status: "available", url: "kagoshima/index.html", municipalities: 43, subsidies: 1 },
    { name: "沖縄県", region: "kyushu-okinawa", status: "available", url: "okinawa/index.html", municipalities: 41, subsidies: 1 }
];

// 現在のフィルター
let currentRegion = 'all';

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderPrefectures();
    initRegionTabs();
    initHeroAnimations();
});

// ナビゲーション初期化
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ヒーローアニメーション
function initHeroAnimations() {
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            document.querySelector('#prefectures').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// 地域タブの初期化
function initRegionTabs() {
    const regionTabs = document.querySelectorAll('.region-tab');
    
    regionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // アクティブ状態の切り替え
            regionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // フィルターの更新
            currentRegion = tab.getAttribute('data-region');
            renderPrefectures();
        });
    });
}

// 都道府県カードの生成
function createPrefectureCard(prefecture) {
    const isAvailable = prefecture.status === 'available';
    const statusBadge = isAvailable 
        ? '<span class="prefecture-badge available"><i class="fas fa-check-circle"></i> 掲載中</span>'
        : '<span class="prefecture-badge coming-soon"><i class="fas fa-clock"></i> 準備中</span>';
    
    const statsHtml = isAvailable && prefecture.municipalities
        ? `<div class="prefecture-stats">
               <span><i class="fas fa-map-marker-alt"></i> ${prefecture.municipalities}自治体</span>
               ${prefecture.subsidies ? `<span><i class="fas fa-star"></i> ${prefecture.subsidies}件補助金</span>` : ''}
           </div>`
        : '';
    
    const cardClass = isAvailable ? 'prefecture-card' : 'prefecture-card coming-soon';
    const href = isAvailable ? prefecture.url : 'javascript:void(0);';
    
    return `
        <a href="${href}" class="${cardClass}" ${isAvailable ? '' : 'onclick="showComingSoon()"'}>
            ${statusBadge}
            <div class="prefecture-icon">
                <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3 class="prefecture-name">${prefecture.name}</h3>
            ${statsHtml}
        </a>
    `;
}

// 都道府県リストのレンダリング
function renderPrefectures() {
    const prefecturesGrid = document.getElementById('prefecturesGrid');
    if (!prefecturesGrid) return;
    
    // フィルタリング
    const filteredPrefectures = currentRegion === 'all'
        ? prefecturesData
        : prefecturesData.filter(p => p.region === currentRegion);
    
    // グリッドに表示
    prefecturesGrid.innerHTML = filteredPrefectures.map(p => createPrefectureCard(p)).join('');
}

// 準備中メッセージ
function showComingSoon() {
    alert('こちらの都道府県は現在準備中です。\n順次公開予定ですので、お楽しみに！');
}

// スクロールトップボタン
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-md);
        z-index: 999;
        transition: var(--transition);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 初期化実行
initScrollToTop();
