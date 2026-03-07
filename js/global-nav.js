/**
 * グローバルナビゲーション - メガメニュー対応版
 * 
 * 使い方:
 * 1. このファイルを <head> 内で読み込む
 * 2. <body> の最初に <div id="global-nav-mount"></div> を配置
 * 3. initGlobalNav() を呼び出す
 * 
 * @since 2026-03-06
 */

const globalNavHTML = `
<style>
.global-nav {
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.global-nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.global-nav-brand {
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 900;
    color: #667eea;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.global-nav-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
}

.global-nav-item {
    position: relative;
}

.global-nav-link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 1rem 1.25rem;
    color: #2d3748;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
}

.global-nav-link:hover {
    color: #667eea;
    background: #f7fafc;
}

.global-nav-icon {
    font-size: 0.75rem;
}

/* Mega Menu */
.mega-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    border-radius: 12px;
    padding: 2rem;
    min-width: 600px;
    display: none;
    opacity: 0;
    transition: all 0.3s;
    margin-top: 0.5rem;
}

.global-nav-item:hover .mega-menu {
    display: grid;
    opacity: 1;
}

.mega-menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.mega-menu-section {
    padding-right: 1rem;
}

.mega-menu-section:not(:last-child) {
    border-right: 1px solid #e2e8f0;
}

.mega-menu-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: #718096;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
}

.mega-menu-list {
    list-style: none;
}

.mega-menu-list li {
    margin-bottom: 0.5rem;
}

.mega-menu-link {
    display: block;
    padding: 0.75rem 1rem;
    color: #2d3748;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s;
    font-weight: 500;
}

.mega-menu-link:hover {
    background: #f7fafc;
    color: #667eea;
    transform: translateX(5px);
}

.mega-menu-link-icon {
    margin-right: 0.5rem;
}

.mega-menu-link-desc {
    display: block;
    font-size: 0.85rem;
    color: #718096;
    font-weight: 400;
    margin-top: 0.25rem;
}

.mega-menu-badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    background: #667eea;
    color: white;
    font-size: 0.7rem;
    border-radius: 4px;
    margin-left: 0.5rem;
    font-weight: 600;
}

.mega-menu-badge.new {
    background: #48bb78;
}

.mega-menu-badge.hot {
    background: #f56565;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #2d3748;
    cursor: pointer;
    padding: 0.5rem;
}

/* Responsive */
@media (max-width: 1024px) {
    .global-nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        align-items: stretch;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        padding: 1rem;
    }
    
    .global-nav-menu.active {
        display: flex;
    }
    
    .mobile-menu-toggle {
        display: block;
    }
    
    .mega-menu {
        position: static;
        transform: none;
        min-width: auto;
        margin-top: 0;
        box-shadow: none;
        padding: 1rem 0;
    }
    
    .global-nav-item:hover .mega-menu {
        display: none;
    }
    
    .global-nav-item.active .mega-menu {
        display: grid;
    }
    
    .mega-menu-grid {
        grid-template-columns: 1fr;
    }
    
    .mega-menu-section {
        border-right: none;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }
    
    .mega-menu-section:last-child {
        border-bottom: none;
    }
}
</style>

<nav class="global-nav">
    <div class="global-nav-container">
        <a href="/index.html" class="global-nav-brand">
            🚀 WORKERTRIP
        </a>
        
        <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
        </button>
        
        <ul class="global-nav-menu" id="globalNavMenu">
            <li class="global-nav-item">
                <a href="/index.html" class="global-nav-link">
                    🏠 ホーム
                </a>
            </li>
            
            <li class="global-nav-item">
                <a href="#" class="global-nav-link" onclick="return false;">
                    🗾 都道府県
                    <i class="fas fa-chevron-down global-nav-icon"></i>
                </a>
                <div class="mega-menu">
                    <div class="mega-menu-grid">
                        <div class="mega-menu-section">
                            <div class="mega-menu-title">地域から探す</div>
                            <ul class="mega-menu-list">
                                <li>
                                    <a href="/hokkaido/index.html" class="mega-menu-link">
                                        <span class="mega-menu-link-icon">❄️</span>
                                        北海道・東北
                                        <span class="mega-menu-badge">7県</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/saitama/index.html" class="mega-menu-link">
                                        <span class="mega-menu-link-icon">🏙️</span>
                                        関東
                                        <span class="mega-menu-badge">4県</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/nagano/index.html" class="mega-menu-link">
                                        <span class="mega-menu-link-icon">⛰️</span>
                                        中部
                                        <span class="mega-menu-badge">3県</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/kochi/index.html" class="mega-menu-link">
                                        <span class="mega-menu-link-icon">🌊</span>
                                        中国・四国
                                        <span class="mega-menu-badge hot">4県</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="mega-menu-section">
                            <div class="mega-menu-title">人気エリア</div>
                            <ul class="mega-menu-list">
                                <li>
                                    <a href="/nagano/index.html" class="mega-menu-link">
                                        長野県
                                        <span class="mega-menu-link-desc">軽井沢・白馬・上高地</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/kochi/index.html" class="mega-menu-link">
                                        高知県
                                        <span class="mega-menu-link-desc">補助金34件<span class="mega-menu-badge hot">No.1</span></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/hokkaido/index.html" class="mega-menu-link">
                                        北海道
                                        <span class="mega-menu-link-desc">179市町村・雄大な自然</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            
            <li class="global-nav-item">
                <a href="/subsidy/index.html" class="global-nav-link">
                    💰 補助金
                </a>
            </li>
            
            <li class="global-nav-item">
                <a href="/insights/index.html" class="global-nav-link">
                    📊 市場分析
                </a>
            </li>
            
            <li class="global-nav-item">
                <a href="/sidejob/index.html" class="global-nav-link">
                    💼 副業・兼業
                </a>
            </li>
            
            <li class="global-nav-item">
                <a href="/about.html" class="global-nav-link">
                    ℹ️ このサイトについて
                </a>
            </li>
        </ul>
    </div>
</nav>
`;

function initGlobalNav() {
    const mountPoint = document.getElementById('global-nav-mount');
    if (mountPoint) {
        mountPoint.innerHTML = globalNavHTML;
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('globalNavMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Auto-init if mount point exists
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalNav);
} else {
    initGlobalNav();
}
