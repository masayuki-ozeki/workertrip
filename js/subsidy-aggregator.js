/**
 * 補助金情報集約スクリプト
 * 全都道府県のdata-{prefecture}.jsから補助金情報を抽出・集計
 * 
 * @since 2026-03-06
 */

// 都道府県別の補助金データ
const subsidyData = {
  // 北海道・東北
  hokkaido: {
    name: "北海道",
    region: "hokkaido-tohoku",
    municipalities: 179,
    subsidyCount: 4,
    subsidies: []
  },
  aomori: {
    name: "青森県",
    region: "hokkaido-tohoku",
    municipalities: 40,
    subsidyCount: 1,
    subsidies: []
  },
  iwate: {
    name: "岩手県",
    region: "hokkaido-tohoku",
    municipalities: 33,
    subsidyCount: 1,
    subsidies: []
  },
  miyagi: {
    name: "宮城県",
    region: "hokkaido-tohoku",
    municipalities: 35,
    subsidyCount: 0,
    subsidies: []
  },
  akita: {
    name: "秋田県",
    region: "hokkaido-tohoku",
    municipalities: 25,
    subsidyCount: 1,
    subsidies: []
  },
  yamagata: {
    name: "山形県",
    region: "hokkaido-tohoku",
    municipalities: 35,
    subsidyCount: 0,
    subsidies: []
  },
  fukushima: {
    name: "福島県",
    region: "hokkaido-tohoku",
    municipalities: 59,
    subsidyCount: 10,
    subsidies: []
  },
  
  // 関東
  gunma: {
    name: "群馬県",
    region: "kanto",
    municipalities: 35,
    subsidyCount: 2,
    subsidies: []
  },
  saitama: {
    name: "埼玉県",
    region: "kanto",
    municipalities: 63,
    subsidyCount: 0,
    subsidies: []
  },
  chiba: {
    name: "千葉県",
    region: "kanto",
    municipalities: 54,
    subsidyCount: 1,
    subsidies: []
  },
  kanagawa: {
    name: "神奈川県",
    region: "kanto",
    municipalities: 33,
    subsidyCount: 1,
    subsidies: []
  },
  
  // 中部
  niigata: {
    name: "新潟県",
    region: "chubu",
    municipalities: 30,
    subsidyCount: 1,
    subsidies: []
  },
  yamanashi: {
    name: "山梨県",
    region: "chubu",
    municipalities: 27,
    subsidyCount: 0,
    subsidies: []
  },
  nagano: {
    name: "長野県",
    region: "chubu",
    municipalities: 48,
    subsidyCount: 2,
    subsidies: []
  },
  
  // 近畿
  wakayama: {
    name: "和歌山県",
    region: "kinki",
    municipalities: 30,
    subsidyCount: 0,
    subsidies: []
  },
  
  // 中国・四国
  ehime: {
    name: "愛媛県",
    region: "chugoku-shikoku",
    municipalities: 20,
    subsidyCount: 9,
    subsidies: []
  },
  kagawa: {
    name: "香川県",
    region: "chugoku-shikoku",
    municipalities: 17,
    subsidyCount: 0,
    subsidies: []
  },
  tokushima: {
    name: "徳島県",
    region: "chugoku-shikoku",
    municipalities: 24,
    subsidyCount: 0,
    subsidies: []
  },
  kochi: {
    name: "高知県",
    region: "chugoku-shikoku",
    municipalities: 34,
    subsidyCount: 34,
    subsidies: []
  }
};

// 地域別の統計情報
const regionStats = {
  "hokkaido-tohoku": {
    name: "北海道・東北",
    prefectures: 7,
    municipalities: 406,
    subsidies: 17
  },
  "kanto": {
    name: "関東",
    prefectures: 4,
    municipalities: 185,
    subsidies: 4
  },
  "chubu": {
    name: "中部",
    prefectures: 3,
    municipalities: 105,
    subsidies: 3
  },
  "kinki": {
    name: "近畿",
    prefectures: 1,
    municipalities: 30,
    subsidies: 0
  },
  "chugoku-shikoku": {
    name: "中国・四国",
    prefectures: 4,
    municipalities: 95,
    subsidies: 43
  },
  "kyushu-okinawa": {
    name: "九州・沖縄",
    prefectures: 0,
    municipalities: 0,
    subsidies: 0
  }
};

// 全国統計
const nationalStats = {
  totalPrefectures: 19,
  totalMunicipalities: 880,
  totalSubsidies: 64,
  averageSubsidyPerPrefecture: 3.4,
  topPrefecture: "高知県（34件）"
};

/**
 * 地域別の都道府県を取得
 */
function getPrefecturesByRegion(region) {
  return Object.entries(subsidyData)
    .filter(([key, data]) => data.region === region)
    .map(([key, data]) => ({
      id: key,
      ...data
    }));
}

/**
 * 補助金が多い都道府県トップ5を取得
 */
function getTopSubsidyPrefectures(limit = 5) {
  return Object.entries(subsidyData)
    .map(([key, data]) => ({
      id: key,
      ...data
    }))
    .sort((a, b) => b.subsidyCount - a.subsidyCount)
    .slice(0, limit);
}

/**
 * 補助金制度の詳細を取得（実際のデータファイルから読み込む必要がある）
 */
async function loadSubsidyDetails(prefectureId) {
  try {
    // 動的にデータファイルを読み込む
    const module = await import(`./data-${prefectureId}.js`);
    const municipalities = module.municipalitiesData || [];
    
    return municipalities
      .filter(m => m.hasSubsidy === true && m.name !== subsidyData[prefectureId].name)
      .map(m => ({
        prefecture: subsidyData[prefectureId].name,
        prefectureId: prefectureId,
        municipalityName: m.name,
        url: m.url || '',
        workationUrl: m.workationUrl || '',
        subsidyUrl: m.subsidyUrl || '',
        description: m.description || '',
        type: m.type || ''
      }));
  } catch (error) {
    console.error(`Error loading ${prefectureId} data:`, error);
    return [];
  }
}

// エクスポート
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    subsidyData,
    regionStats,
    nationalStats,
    getPrefecturesByRegion,
    getTopSubsidyPrefectures,
    loadSubsidyDetails
  };
}
