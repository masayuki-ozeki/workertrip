// DOM要素の取得
const municipalityList = document.getElementById('municipalityList');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultCount = document.getElementById('resultCount');
const subsidyCount = document.getElementById('subsidyCount');

// 状態管理
let currentFilter = 'all';
let currentSearchTerm = '';

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    renderMunicipalities();
    updateSubsidyCount();
    setupEventListeners();
});

// 補助金数の更新
function updateSubsidyCount() {
    const count = municipalitiesData.filter(m => m.hasSubsidy).length;
    subsidyCount.textContent = count;
}

// イベントリスナーの設定
function setupEventListeners() {
    // 検索入力
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim();
        clearSearchBtn.style.display = currentSearchTerm ? 'flex' : 'none';
        filterAndRenderMunicipalities();
    });

    // 検索クリア
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        clearSearchBtn.style.display = 'none';
        filterAndRenderMunicipalities();
    });

    // フィルターボタン
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // アクティブ状態の切り替え
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentFilter = btn.getAttribute('data-filter');
            filterAndRenderMunicipalities();
        });
    });
}

// フィルタリングとレンダリング
function filterAndRenderMunicipalities() {
    const filteredData = municipalitiesData.filter(municipality => {
        // 検索フィルター
        const matchesSearch = currentSearchTerm === '' || 
            municipality.name.includes(currentSearchTerm);

        // カテゴリーフィルター
        let matchesFilter = true;
        switch (currentFilter) {
            case 'subsidy':
                matchesFilter = municipality.hasSubsidy;
                break;
            case 'dedicated':
                matchesFilter = municipality.type === 'dedicated';
                break;
            case 'pdf':
                matchesFilter = municipality.type === 'pdf';
                break;
            case 'all':
            default:
                matchesFilter = true;
        }

        return matchesSearch && matchesFilter;
    });

    renderMunicipalities(filteredData);
    updateResultCount(filteredData.length);
}

// 結果数の更新
function updateResultCount(count) {
    resultCount.textContent = count;
}

// 自治体カードの生成
function createMunicipalityCard(municipality) {
    const card = document.createElement('div');
    card.className = 'municipality-card';

    // バッジの生成
    let badges = '';
    if (municipality.hasSubsidy) {
        badges += '<span class="badge badge-subsidy"><i class="fas fa-star"></i> 2026補助</span>';
    }
    if (municipality.type === 'dedicated') {
        badges += '<span class="badge badge-dedicated"><i class="fas fa-bookmark"></i> 専用ページ</span>';
    } else if (municipality.type === 'pdf') {
        badges += '<span class="badge badge-pdf"><i class="fas fa-file-pdf"></i> PDF</span>';
    }

    // 補助金情報の生成
    let subsidySection = '';
    if (municipality.subsidyInfo) {
        const subsidy = municipality.subsidyInfo;
        subsidySection = `
            <div class="subsidy-info">
                <div class="subsidy-title">
                    <i class="fas fa-coins"></i>
                    ${subsidy.name}
                </div>
                <div class="subsidy-details">
                    ${subsidy.amount ? `<div><strong>補助額:</strong> <span class="subsidy-amount">${subsidy.amount}</span></div>` : ''}
                    ${subsidy.period ? `<div><strong>期間:</strong> ${subsidy.period}</div>` : ''}
                    ${subsidy.description ? `<div>${subsidy.description}</div>` : ''}
                    ${subsidy.note ? `<div><em>${subsidy.note}</em></div>` : ''}
                    ${subsidy.url ? `<div style="margin-top: 8px;"><a href="${subsidy.url}" target="_blank" rel="noopener noreferrer">詳細を見る <i class="fas fa-external-link-alt"></i></a></div>` : ''}
                </div>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="municipality-header">
            <div>
                <h3 class="municipality-name">${municipality.name}</h3>
            </div>
            <div class="municipality-badges">
                ${badges}
            </div>
        </div>

        <div class="municipality-info">
            <div class="info-row">
                <i class="fas fa-globe info-icon"></i>
                <div class="info-content">
                    <strong>公式サイト:</strong><br>
                    <a href="${municipality.url}" target="_blank" rel="noopener noreferrer">
                        ${municipality.url} <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="info-row">
                <i class="fas fa-laptop-house info-icon"></i>
                <div class="info-content">
                    <strong>ワーケーション情報:</strong><br>
                    <a href="${municipality.workationUrl}" target="_blank" rel="noopener noreferrer">
                        ${municipality.type === 'dedicated' ? '専用ページを見る' : 'PDF資料を見る'} <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="info-row">
                <i class="fas fa-info-circle info-icon"></i>
                <div class="info-content">
                    ${municipality.description}
                </div>
            </div>
        </div>

        ${subsidySection}

        <div class="municipality-links">
            <a href="${municipality.workationUrl}" target="_blank" rel="noopener noreferrer" class="link-btn link-btn-primary">
                <i class="fas fa-external-link-alt"></i>
                詳細を見る
            </a>
            <a href="${municipality.url}" target="_blank" rel="noopener noreferrer" class="link-btn link-btn-secondary">
                <i class="fas fa-home"></i>
                公式サイト
            </a>
        </div>
    `;

    return card;
}

// 自治体リストのレンダリング
function renderMunicipalities(data = municipalitiesData) {
    // リストをクリア
    municipalityList.innerHTML = '';

    // データがない場合
    if (data.length === 0) {
        municipalityList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <p style="font-size: 1.2rem; color: var(--text-light);">
                    条件に一致する自治体が見つかりませんでした
                </p>
                <p style="color: var(--text-muted); margin-top: 10px;">
                    検索条件やフィルターを変更してお試しください
                </p>
            </div>
        `;
        return;
    }

    // カードを生成して追加
    data.forEach((municipality, index) => {
        const card = createMunicipalityCard(municipality);
        // アニメーション用のディレイを設定
        card.style.animationDelay = `${index * 0.05}s`;
        municipalityList.appendChild(card);
    });
}

// ユーティリティ: スムーススクロール
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// キーボードショートカット（Ctrl/Cmd + K で検索にフォーカス）
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Escapeキーで検索クリア
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        clearSearchBtn.click();
    }
});

// 検索入力欄のプレースホルダーアニメーション
const placeholders = [
    '自治体名で検索...（例：長野市、松本市）',
    '自治体名で検索...（例：茅野市、白馬村）',
    '自治体名で検索...（例：軽井沢町、小海町）',
    '自治体名で検索...（例：安曇野市、駒ヶ根市）'
];

let placeholderIndex = 0;
setInterval(() => {
    if (document.activeElement !== searchInput) {
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        searchInput.placeholder = placeholders[placeholderIndex];
    }
}, 5000);
