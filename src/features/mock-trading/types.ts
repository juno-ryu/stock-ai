/**
 * Mock Trading Feature Types
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

export interface Order {
  id: string;
  type: "buy" | "sell";
  symbol: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
  executedAt?: string;
}

export interface Portfolio {
  userId: string;
  totalValue: number;
  cash: number;
  stocks: PortfolioStock[];
  totalProfit: number;
  totalProfitPercent: number;
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

export interface TradeRequest {
  symbol: string;
  type: "buy" | "sell";
  quantity: number;
  price: number;
}

export interface TradeResponse {
  success: boolean;
  order: Order;
  portfolio: Portfolio;
  message: string;
}

export interface SearchStockParams {
  query?: string;
  limit?: number;
}

export interface StockListResponse {
  stocks: Stock[];
  total: number;
}

