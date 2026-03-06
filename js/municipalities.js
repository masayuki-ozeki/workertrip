// 自治体一覧ページ専用スクリプト

// 状態管理
let currentFilter = 'all';
let currentSearchTerm = '';
let currentArea = '';

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    parseUrlParameters();
    renderMunicipalities();
    setupEventListeners();
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
}

// URLパラメータの解析
function parseUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    currentArea = urlParams.get('area') || '';
}

// イベントリスナー設定
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // 検索入力
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = currentSearchTerm ? 'flex' : 'none';
            }
            filterAndRenderMunicipalities();
        });
    }
    
    // 検索クリア
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchTerm = '';
            clearSearchBtn.style.display = 'none';
            filterAndRenderMunicipalities();
        });
    }
    
    // フィルターボタン
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
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
        
        // エリアフィルター（データにareaフィールドがある場合のみ）
        const matchesArea = currentArea === '' || 
            !municipality.area || 
            municipality.area === currentArea;
        
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
        
        return matchesSearch && matchesFilter && matchesArea;
    });
    
    renderMunicipalities(filteredData);
    updateResultCount(filteredData.length);
}

// 結果数の更新
function updateResultCount(count) {
    const resultCount = document.getElementById('resultCount');
    if (resultCount) {
        resultCount.textContent = count;
    }
}

// 自治体カードの生成
function createMunicipalityCard(municipality) {
    let badges = '';
    if (municipality.hasSubsidy) {
        badges += '<span class="badge badge-subsidy"><i class="fas fa-star"></i> 2026補助</span>';
    }
    if (municipality.type === 'dedicated') {
        badges += '<span class="badge badge-dedicated"><i class="fas fa-bookmark"></i> 専用ページ</span>';
    } else if (municipality.type === 'pdf') {
        badges += '<span class="badge badge-pdf"><i class="fas fa-file-pdf"></i> PDF</span>';
    }
    
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
    
    return `
        <div class="municipality-card">
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
        </div>
    `;
}

// 自治体リストのレンダリング
function renderMunicipalities(data = municipalitiesData) {
    const municipalityList = document.getElementById('municipalityList');
    if (!municipalityList) return;
    
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
        municipalityList.insertAdjacentHTML('beforeend', createMunicipalityCard(municipality));
    });
}

// キーボードショートカット
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }
    
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (document.activeElement === searchInput) {
            const clearBtn = document.getElementById('clearSearch');
            if (clearBtn) clearBtn.click();
        }
    }
});
