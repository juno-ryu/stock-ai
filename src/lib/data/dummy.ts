/**
 * Dummy data for UI mockup
 */

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
}

export interface Portfolio {
  totalValue: number;
  totalProfit: number;
  totalProfitPercent: number;
  cash: number;
  stocks: PortfolioStock[];
}

export interface PortfolioStock {
  symbol: string;
  name: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  profit: number;
  profitPercent: number;
}

export interface Trade {
  id: string;
  type: "buy" | "sell";
  symbol: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
  date: string;
  status: "completed" | "pending" | "cancelled";
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  imageUrl: string;
}

export interface Report {
  id: string;
  symbol: string;
  name: string;
  title: string;
  summary: string;
  rating: "buy" | "hold" | "sell";
  targetPrice: number;
  currentPrice: number;
  date: string;
}

// 더미 주식 데이터
export const dummyStocks: Stock[] = [
  {
    symbol: "삼성전자",
    name: "Samsung Electronics",
    price: 71500,
    change: 1500,
    changePercent: 2.14,
    volume: 15234567,
    marketCap: "426조",
  },
  {
    symbol: "SK하이닉스",
    name: "SK Hynix",
    price: 128000,
    change: -2500,
    changePercent: -1.92,
    volume: 8234567,
    marketCap: "93조",
  },
  {
    symbol: "NAVER",
    name: "Naver Corp",
    price: 215000,
    change: 5000,
    changePercent: 2.38,
    volume: 1234567,
    marketCap: "35조",
  },
  {
    symbol: "카카오",
    name: "Kakao Corp",
    price: 48500,
    change: -1200,
    changePercent: -2.41,
    volume: 3234567,
    marketCap: "21조",
  },
  {
    symbol: "현대차",
    name: "Hyundai Motor",
    price: 195000,
    change: 3500,
    changePercent: 1.83,
    volume: 2234567,
    marketCap: "42조",
  },
  {
    symbol: "LG에너지솔루션",
    name: "LG Energy Solution",
    price: 425000,
    change: 8000,
    changePercent: 1.92,
    volume: 1534567,
    marketCap: "99조",
  },
];

// 더미 포트폴리오 데이터
export const dummyPortfolio: Portfolio = {
  totalValue: 15750000,
  totalProfit: 1250000,
  totalProfitPercent: 8.62,
  cash: 5000000,
  stocks: [
    {
      symbol: "삼성전자",
      name: "Samsung Electronics",
      quantity: 50,
      avgPrice: 68000,
      currentPrice: 71500,
      profit: 175000,
      profitPercent: 5.15,
    },
    {
      symbol: "NAVER",
      name: "Naver Corp",
      quantity: 10,
      avgPrice: 200000,
      currentPrice: 215000,
      profit: 150000,
      profitPercent: 7.5,
    },
    {
      symbol: "현대차",
      name: "Hyundai Motor",
      quantity: 20,
      avgPrice: 180000,
      currentPrice: 195000,
      profit: 300000,
      profitPercent: 8.33,
    },
    {
      symbol: "SK하이닉스",
      name: "SK Hynix",
      quantity: 15,
      avgPrice: 135000,
      currentPrice: 128000,
      profit: -105000,
      profitPercent: -5.19,
    },
  ],
};

// 더미 거래 내역
export const dummyTrades: Trade[] = [
  {
    id: "T001",
    type: "buy",
    symbol: "삼성전자",
    name: "Samsung Electronics",
    quantity: 50,
    price: 68000,
    total: 3400000,
    date: "2025-11-01 09:30:00",
    status: "completed",
  },
  {
    id: "T002",
    type: "buy",
    symbol: "NAVER",
    name: "Naver Corp",
    quantity: 10,
    price: 200000,
    total: 2000000,
    date: "2025-11-02 10:15:00",
    status: "completed",
  },
  {
    id: "T003",
    type: "sell",
    symbol: "카카오",
    name: "Kakao Corp",
    quantity: 30,
    price: 50000,
    total: 1500000,
    date: "2025-11-03 14:20:00",
    status: "completed",
  },
  {
    id: "T004",
    type: "buy",
    symbol: "현대차",
    name: "Hyundai Motor",
    quantity: 20,
    price: 180000,
    total: 3600000,
    date: "2025-11-05 11:45:00",
    status: "completed",
  },
  {
    id: "T005",
    type: "buy",
    symbol: "SK하이닉스",
    name: "SK Hynix",
    quantity: 15,
    price: 135000,
    total: 2025000,
    date: "2025-11-06 13:30:00",
    status: "pending",
  },
];

// 더미 뉴스 데이터
export const dummyNews: NewsItem[] = [
  {
    id: "N001",
    title: "삼성전자, 3분기 실적 시장 예상 상회",
    summary:
      "삼성전자가 3분기 영업이익이 시장 예상을 크게 상회하며 반도체 업황 회복 신호를 보였습니다.",
    source: "매일경제",
    date: "2025-11-08 08:30:00",
    imageUrl: "https://picsum.photos/seed/news1/400/250",
  },
  {
    id: "N002",
    title: "SK하이닉스, HBM3 수요 급증으로 실적 개선 전망",
    summary:
      "AI 반도체 수요 증가로 고대역폭 메모리(HBM3) 공급이 부족한 상황에서 SK하이닉스의 실적 개선이 예상됩니다.",
    source: "한국경제",
    date: "2025-11-08 07:15:00",
    imageUrl: "https://picsum.photos/seed/news2/400/250",
  },
  {
    id: "N003",
    title: "NAVER, AI 검색 서비스 '큐' 정식 출시",
    summary:
      "네이버가 생성형 AI 기반 검색 서비스 '큐'를 정식 출시하며 검색 시장 재편에 나섰습니다.",
    source: "전자신문",
    date: "2025-11-07 18:00:00",
    imageUrl: "https://picsum.photos/seed/news3/400/250",
  },
  {
    id: "N004",
    title: "현대차, 전기차 판매 목표 상향 조정",
    summary:
      "현대자동차가 전기차 시장 성장세에 힘입어 올해 전기차 판매 목표를 기존 대비 20% 상향 조정했습니다.",
    source: "조선일보",
    date: "2025-11-07 16:30:00",
    imageUrl: "https://picsum.photos/seed/news4/400/250",
  },
];

// 더미 분석 리포트
export const dummyReports: Report[] = [
  {
    id: "R001",
    symbol: "삼성전자",
    name: "Samsung Electronics",
    title: "반도체 업황 회복, 목표가 상향",
    summary:
      "메모리 반도체 가격 상승과 파운드리 사업 개선으로 실적 개선이 예상됩니다. 목표가를 기존 75,000원에서 80,000원으로 상향 조정합니다.",
    rating: "buy",
    targetPrice: 80000,
    currentPrice: 71500,
    date: "2025-11-08",
  },
  {
    id: "R002",
    symbol: "NAVER",
    name: "Naver Corp",
    title: "AI 서비스 확대로 성장 모멘텀 확보",
    summary:
      "생성형 AI 서비스 '큐' 출시와 커머스 사업 성장으로 실적 개선이 기대됩니다. 목표주가 230,000원을 유지합니다.",
    rating: "buy",
    targetPrice: 230000,
    currentPrice: 215000,
    date: "2025-11-07",
  },
  {
    id: "R003",
    symbol: "SK하이닉스",
    name: "SK Hynix",
    title: "HBM 수요 증가, 단기 조정 후 매수 기회",
    summary:
      "AI 반도체 수요 증가로 HBM 매출이 급증하고 있으나, 단기 주가 조정으로 매수 기회가 나타났습니다.",
    rating: "buy",
    targetPrice: 145000,
    currentPrice: 128000,
    date: "2025-11-06",
  },
  {
    id: "R004",
    symbol: "카카오",
    name: "Kakao Corp",
    title: "실적 부진 지속, 중립 의견 유지",
    summary:
      "광고 매출 감소와 콘텐츠 사업 부진으로 실적 개선이 더딜 것으로 예상됩니다. 중립 의견을 유지합니다.",
    rating: "hold",
    targetPrice: 50000,
    currentPrice: 48500,
    date: "2025-11-05",
  },
];

