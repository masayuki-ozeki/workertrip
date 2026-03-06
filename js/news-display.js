// ニュース表示用JavaScript
// news.jsのデータを読み込んで表示する

// 日付フォーマット関数
function formatNewsDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// 相対日付を計算（NEW表示用）
function isWithinDays(dateString, days) {
    const newsDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - newsDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= days;
}

// ニュースカードHTML生成
function createNewsCard(news) {
    const categoryColor = categoryColors[news.category] || '#95a5a6';
    const categoryIcon = categoryIcons[news.category] || 'fa-info-circle';
    const isNew = news.isNew || isWithinDays(news.date, 7);
    
    return `
        <div class="news-card" data-category="${news.category}">
            <div class="news-card__header">
                <span class="news-card__category" style="background-color: ${categoryColor};">
                    <i class="fas ${categoryIcon}"></i> ${news.category}
                </span>
                ${isNew ? '<span class="news-card__badge">NEW</span>' : ''}
                <time class="news-card__date">${formatNewsDate(news.date)}</time>
            </div>
            <h3 class="news-card__title">${news.title}</h3>
            <p class="news-card__summary">${news.summary}</p>
            <div class="news-card__footer">
                <span class="news-card__source">
                    <i class="fas fa-external-link-alt"></i> ${news.source}
                </span>
                ${news.url !== '#' ? `
                    <a href="${news.url}" target="_blank" rel="noopener noreferrer" class="news-card__link">
                        詳細を見る <i class="fas fa-arrow-right"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// ニュース表示（最大件数指定可能）
function renderNews(maxItems = 6) {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;
    
    const itemsToShow = newsData.slice(0, maxItems);
    
    if (itemsToShow.length === 0) {
        newsContainer.innerHTML = `
            <div class="news-empty">
                <i class="fas fa-newspaper" style="font-size: 3rem; color: #bdc3c7; margin-bottom: 1rem;"></i>
                <p>現在、表示できるニュースはありません</p>
            </div>
        `;
        return;
    }
    
    newsContainer.innerHTML = itemsToShow.map(news => createNewsCard(news)).join('');
}

// カテゴリーフィルター機能
function setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.news-filter-btn');
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // アクティブ状態切り替え
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            filterNewsByCategory(category);
        });
    });
}

// カテゴリー別フィルタリング
function filterNewsByCategory(category) {
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            // アニメーション効果
            card.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    renderNews(6); // 最新6件を表示
    setupCategoryFilter();
});
