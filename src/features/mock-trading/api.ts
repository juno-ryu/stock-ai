/**
 * Mock Trading Feature API Stub Functions
 */

import { dummyStocks } from "@/lib/data/dummy";
import type {
  Stock,
  SearchStockParams,
  StockListResponse,
  Order,
} from "./types";
import { filterStocks } from "./utils";

/**
 * Get list of stocks (mock data)
 * @param params - Search parameters
 * @returns Promise with stock list
 */
export async function getStockList(
  params?: SearchStockParams
): Promise<StockListResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let stocks = dummyStocks;

  // Filter by query if provided
  if (params?.query) {
    stocks = filterStocks(stocks, params.query);
  }

  // Apply limit if provided
  if (params?.limit) {
    stocks = stocks.slice(0, params.limit);
  }

  return {
    stocks,
    total: stocks.length,
  };
}

/**
 * Get stock details by symbol (mock data)
 * @param symbol - Stock symbol
 * @returns Promise with stock details
 */
export async function getStockBySymbol(symbol: string): Promise<Stock | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const stock = dummyStocks.find((s) => s.symbol === symbol);
  return stock || null;
}

/**
 * Get user's order history (mock data from localStorage)
 * @param userId - User ID
 * @returns Promise with order list
 */
export async function getOrderHistory(userId: string): Promise<Order[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Get orders from localStorage
  const ordersJson = localStorage.getItem("mock_trading_orders");
  if (!ordersJson) {
    return [];
  }

  try {
    const orders = JSON.parse(ordersJson) as Order[];
    return orders.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch {
    return [];
  }
}

/**
 * Save order to localStorage (mock persistence)
 * @param order - Order to save
 */
export async function saveOrder(order: Order): Promise<void> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const ordersJson = localStorage.getItem("mock_trading_orders");
  let orders: Order[] = [];

  if (ordersJson) {
    try {
      orders = JSON.parse(ordersJson) as Order[];
    } catch {
      orders = [];
    }
  }

  orders.push(order);
  localStorage.setItem("mock_trading_orders", JSON.stringify(orders));
}

