// 長野ページ用JavaScript

// ==================== 初期化 ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroAnimations();
    loadPressReleases();
    // loadBlogPosts(); // 一時的に無効化
    // initMap(); // 一時的に無効化（地図機能は今後実装予定）
});

// ==================== ナビゲーション ====================
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
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== ヒーローアニメーション ====================
function initHeroAnimations() {
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            document.querySelector('#map-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// ==================== 地図の初期化 ====================
function initMap() {
    const mapContainer = document.getElementById('naganoMap');
    if (!mapContainer) return;
    
    // 簡易的な地図代替表示
    mapContainer.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--text-medium);">
            <i class="fas fa-map-marked-alt" style="font-size: 4rem; color: var(--primary-color); margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 16px; font-size: 1.5rem;">長野県市町村マップ</h3>
            <p style="margin-bottom: 24px; line-height: 1.7;">
                48の自治体でワーケーション対応が整っています。<br>
                下のエリアカードから、お好みの地域を選んでください。
            </p>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: var(--accent-light); padding: 12px 24px; border-radius: 8px;">
                <i class="fas fa-info-circle" style="color: var(--primary-color);"></i>
                <span style="font-size: 0.9rem;">インタラクティブ地図は近日実装予定です</span>
            </div>
        </div>
    `;
}

// ==================== プレスリリースの読み込み ====================
async function loadPressReleases() {
    const pressGrid = document.getElementById('pressGrid');
    if (!pressGrid) return;
    
    try {
        // サンプルデータ
        const pressReleases = [
            {
                id: '1',
                title: '安曇野市がワーケーション受入環境整備補助金の受付を開始',
                summary: '2026年1月23日まで、宿泊事業者向けに上限50万円の補助金制度がスタート。テレワーク環境整備を支援します。',
                category: '補助金情報',
                municipality: '安曇野市',
                image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
                publish_date: '2025-03-01'
            },
            {
                id: '2',
                title: '上田市、人的資本経営支援補助金の対象にワーケーションプログラムを追加',
                summary: '企業向けワーケーションプログラム実施に対して、上限20万円の補助を実施。2026年3月31日まで申請受付中。',
                category: '補助金情報',
                municipality: '上田市',
                image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
                publish_date: '2025-02-28'
            },
            {
                id: '3',
                title: '白馬村、新たなワーケーション施設「HAKUBA NORWAY VILLAGE」オープン',
                summary: '白馬ジャンプ競技場麓に無料のコワーキングスペースが誕生。北アルプスを望む絶景の中でテレワークが可能に。',
                category: '施設情報',
                municipality: '白馬村',
                image_url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=400&fit=crop',
                publish_date: '2025-02-25'
            }
        ];
        
        pressGrid.innerHTML = pressReleases.map(press => createPressCard(press)).join('');
    } catch (error) {
        console.error('プレスリリースの読み込みエラー:', error);
        pressGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted);">プレスリリースを読み込めませんでした</p>';
    }
}

function createPressCard(press) {
    const date = new Date(press.publish_date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    return `
        <a href="press-detail.html?id=${press.id}" class="press-card">
            <img src="${press.image_url}" alt="${press.title}" class="press-image" loading="lazy">
            <div class="press-content">
                <div class="press-meta">
                    <span class="press-category">${press.category}</span>
                    <span>${press.municipality}</span>
                    <span>${date}</span>
                </div>
                <h3 class="press-title">${press.title}</h3>
                <p class="press-summary">${press.summary}</p>
            </div>
        </a>
    `;
}

// ==================== ブログ記事の読み込み ====================
async function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    try {
        // サンプルデータ
        const blogPosts = [
            {
                id: '1',
                title: '軽井沢で1ヶ月ワーケーション。リゾート地ならではの働き方とは',
                summary: '東京から新幹線で1時間。避暑地として有名な軽井沢での1ヶ月間のワーケーション体験記。仕事の生産性が劇的に向上した理由とは…',
                category: 'ワーケーション体験記',
                author: '田中太郎',
                municipality: '軽井沢町',
                image_url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=400&fit=crop',
                publish_date: '2025-03-03',
                view_count: 1523
            },
            {
                id: '2',
                title: '松本市のコワーキングスペース巡り。おすすめ5選を徹底比較',
                summary: '国宝松本城のある松本市。歴史ある城下町で増えているコワーキングスペースを実際に利用して比較レビュー。Wi-Fi速度、価格、雰囲気など…',
                category: '地域情報',
                author: '山田花子',
                municipality: '松本市',
                image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
                publish_date: '2025-03-02',
                view_count: 987
            },
            {
                id: '3',
                title: '長野でワーケーション、冬と夏の違いは？四季を通じて働いてみた',
                summary: '長野県で1年間ワーケーションを続けてみた体験記。四季それぞれの魅力と、季節によって変わる働き方のコツを紹介します。',
                category: 'ワーケーション体験記',
                author: '佐藤一郎',
                municipality: '茅野市',
                image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
                publish_date: '2025-03-01',
                view_count: 2341
            }
        ];
        
        blogGrid.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
    } catch (error) {
        console.error('ブログ記事の読み込みエラー:', error);
        blogGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted);">ブログ記事を読み込めませんでした</p>';
    }
}

function createBlogCard(post) {
    const date = new Date(post.publish_date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    return `
        <a href="blog-detail.html?id=${post.id}" class="blog-card">
            <img src="${post.image_url}" alt="${post.title}" class="blog-image" loading="lazy">
            <div class="blog-content">
                <div class="blog-badges">
                    <span class="badge badge-category">${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-summary">${post.summary}</p>
                <div class="blog-footer">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-eye"></i> ${post.view_count.toLocaleString()}</span>
                </div>
            </div>
        </a>
    `;
}

// ==================== ユーティリティ関数 ====================

// スクロールアニメーション
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.feature-card, .area-card').forEach(el => {
        observer.observe(el);
    });
}

// ページトップへ戻る
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
observeElements();
initScrollToTop();
