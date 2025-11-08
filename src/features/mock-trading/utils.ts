/**
 * Mock Trading Feature Utility Functions
 */

import { Portfolio, PortfolioStock, Stock } from "./types";
import { TRADING_CONSTANTS } from "./constants";

/**
 * Calculate total order amount
 */
export function calculateOrderTotal(quantity: number, price: number): number {
  return quantity * price;
}

/**
 * Calculate commission (0 for mock trading)
 */
export function calculateCommission(total: number): number {
  return total * TRADING_CONSTANTS.COMMISSION_RATE;
}

/**
 * Calculate profit for a stock position
 */
export function calculateProfit(
  quantity: number,
  avgPrice: number,
  currentPrice: number
): { profit: number; profitPercent: number } {
  const profit = (currentPrice - avgPrice) * quantity;
  const profitPercent = ((currentPrice - avgPrice) / avgPrice) * 100;

  return { profit, profitPercent };
}

/**
 * Calculate portfolio total value
 */
export function calculatePortfolioValue(
  cash: number,
  stocks: PortfolioStock[]
): number {
  const stocksValue = stocks.reduce(
    (sum, stock) => sum + stock.currentPrice * stock.quantity,
    0
  );
  return cash + stocksValue;
}

/**
 * Calculate portfolio total profit
 */
export function calculatePortfolioProfit(
  stocks: PortfolioStock[]
): { totalProfit: number; totalProfitPercent: number } {
  const totalInvested = stocks.reduce(
    (sum, stock) => sum + stock.avgPrice * stock.quantity,
    0
  );
  const totalCurrent = stocks.reduce(
    (sum, stock) => sum + stock.currentPrice * stock.quantity,
    0
  );

  const totalProfit = totalCurrent - totalInvested;
  const totalProfitPercent =
    totalInvested > 0 ? (totalProfit / totalInvested) * 100 : 0;

  return { totalProfit, totalProfitPercent };
}

/**
 * Update portfolio after buy order
 */
export function updatePortfolioAfterBuy(
  portfolio: Portfolio,
  symbol: string,
  name: string,
  quantity: number,
  price: number
): Portfolio {
  const total = calculateOrderTotal(quantity, price);
  const commission = calculateCommission(total);
  const totalCost = total + commission;

  // Check if user has enough cash
  if (portfolio.cash < totalCost) {
    throw new Error(TRADING_CONSTANTS.ERROR_MESSAGES.INSUFFICIENT_CASH);
  }

  // Update cash
  const newCash = portfolio.cash - totalCost;

  // Update or add stock position
  const existingStockIndex = portfolio.stocks.findIndex(
    (s) => s.symbol === symbol
  );

  let newStocks: PortfolioStock[];

  if (existingStockIndex >= 0) {
    // Update existing position
    const existingStock = portfolio.stocks[existingStockIndex];
    const totalQuantity = existingStock.quantity + quantity;
    const newAvgPrice =
      (existingStock.avgPrice * existingStock.quantity + price * quantity) /
      totalQuantity;

    const { profit, profitPercent } = calculateProfit(
      totalQuantity,
      newAvgPrice,
      price
    );

    newStocks = [...portfolio.stocks];
    newStocks[existingStockIndex] = {
      ...existingStock,
      quantity: totalQuantity,
      avgPrice: newAvgPrice,
      currentPrice: price,
      profit,
      profitPercent,
    };
  } else {
    // Add new position
    newStocks = [
      ...portfolio.stocks,
      {
        symbol,
        name,
        quantity,
        avgPrice: price,
        currentPrice: price,
        profit: 0,
        profitPercent: 0,
      },
    ];
  }

  // Recalculate portfolio totals
  const totalValue = calculatePortfolioValue(newCash, newStocks);
  const { totalProfit, totalProfitPercent } =
    calculatePortfolioProfit(newStocks);

  return {
    ...portfolio,
    cash: newCash,
    stocks: newStocks,
    totalValue,
    totalProfit,
    totalProfitPercent,
  };
}

/**
 * Update portfolio after sell order
 */
export function updatePortfolioAfterSell(
  portfolio: Portfolio,
  symbol: string,
  quantity: number,
  price: number
): Portfolio {
  // Find stock position
  const stockIndex = portfolio.stocks.findIndex((s) => s.symbol === symbol);

  if (stockIndex < 0) {
    throw new Error(TRADING_CONSTANTS.ERROR_MESSAGES.STOCK_NOT_FOUND);
  }

  const stock = portfolio.stocks[stockIndex];

  // Check if user has enough quantity
  if (stock.quantity < quantity) {
    throw new Error(TRADING_CONSTANTS.ERROR_MESSAGES.INSUFFICIENT_STOCK);
  }

  const total = calculateOrderTotal(quantity, price);
  const commission = calculateCommission(total);
  const totalReceived = total - commission;

  // Update cash
  const newCash = portfolio.cash + totalReceived;

  // Update or remove stock position
  let newStocks: PortfolioStock[];

  if (stock.quantity === quantity) {
    // Remove position completely
    newStocks = portfolio.stocks.filter((s) => s.symbol !== symbol);
  } else {
    // Reduce quantity
    const newQuantity = stock.quantity - quantity;
    const { profit, profitPercent } = calculateProfit(
      newQuantity,
      stock.avgPrice,
      price
    );

    newStocks = [...portfolio.stocks];
    newStocks[stockIndex] = {
      ...stock,
      quantity: newQuantity,
      currentPrice: price,
      profit,
      profitPercent,
    };
  }

  // Recalculate portfolio totals
  const totalValue = calculatePortfolioValue(newCash, newStocks);
  const { totalProfit, totalProfitPercent } =
    calculatePortfolioProfit(newStocks);

  return {
    ...portfolio,
    cash: newCash,
    stocks: newStocks,
    totalValue,
    totalProfit,
    totalProfitPercent,
  };
}

/**
 * Filter stocks by search query
 */
export function filterStocks(stocks: Stock[], query: string): Stock[] {
  if (!query.trim()) {
    return stocks;
  }

  const lowerQuery = query.toLowerCase();
  return stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(lowerQuery) ||
      stock.name.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Format currency (KRW)
 */
export function formatCurrency(amount: number): string {
  return `${amount.toLocaleString()}원`;
}

/**
 * Format percentage
 */
export function formatPercent(percent: number): string {
  const sign = percent >= 0 ? "+" : "";
  return `${sign}${percent.toFixed(2)}%`;
}

/**
 * Generate unique order ID
 */
export function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

