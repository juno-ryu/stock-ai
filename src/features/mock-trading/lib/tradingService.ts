/**
 * Mock Trading Service
 * Handles trade execution and portfolio updates
 */

import type {
  TradeRequest,
  TradeResponse,
  Portfolio,
  Order,
} from "../types";
import { TRADING_CONSTANTS } from "../constants";
import {
  updatePortfolioAfterBuy,
  updatePortfolioAfterSell,
  calculateOrderTotal,
  generateOrderId,
} from "../utils";
import { getStockBySymbol, saveOrder } from "../api";
import { tradeRequestSchema } from "../schema";

/**
 * Execute a mock trade
 * @param request - Trade request
 * @param currentPortfolio - Current portfolio state
 * @returns Promise with trade response
 */
export async function executeMockTrade(
  request: TradeRequest,
  currentPortfolio: Portfolio
): Promise<TradeResponse> {
  try {
    // Validate request
    const validatedRequest = tradeRequestSchema.parse(request);

    // Get stock details
    const stock = await getStockBySymbol(validatedRequest.symbol);
    if (!stock) {
      throw new Error(TRADING_CONSTANTS.ERROR_MESSAGES.STOCK_NOT_FOUND);
    }

    // Calculate order total
    const total = calculateOrderTotal(
      validatedRequest.quantity,
      validatedRequest.price
    );

    // Create order
    const order: Order = {
      id: generateOrderId(),
      type: validatedRequest.type,
      symbol: stock.symbol,
      name: stock.name,
      quantity: validatedRequest.quantity,
      price: validatedRequest.price,
      total,
      status: "completed",
      createdAt: new Date().toISOString(),
      executedAt: new Date().toISOString(),
    };

    // Update portfolio based on trade type
    let updatedPortfolio: Portfolio;

    if (validatedRequest.type === "buy") {
      updatedPortfolio = updatePortfolioAfterBuy(
        currentPortfolio,
        stock.symbol,
        stock.name,
        validatedRequest.quantity,
        validatedRequest.price
      );
    } else {
      updatedPortfolio = updatePortfolioAfterSell(
        currentPortfolio,
        stock.symbol,
        validatedRequest.quantity,
        validatedRequest.price
      );
    }

    // Save order to history
    await saveOrder(order);

    // Return success response
    return {
      success: true,
      order,
      portfolio: updatedPortfolio,
      message:
        validatedRequest.type === "buy"
          ? TRADING_CONSTANTS.SUCCESS_MESSAGES.BUY_ORDER_COMPLETED
          : TRADING_CONSTANTS.SUCCESS_MESSAGES.SELL_ORDER_COMPLETED,
    };
  } catch (error) {
    // Handle errors
    const errorMessage =
      error instanceof Error
        ? error.message
        : TRADING_CONSTANTS.ERROR_MESSAGES.ORDER_FAILED;

    throw new Error(errorMessage);
  }
}

/**
 * Get initial portfolio for new user
 * @param userId - User ID
 * @returns Initial portfolio
 */
export function getInitialPortfolio(userId: string): Portfolio {
  return {
    userId,
    totalValue: TRADING_CONSTANTS.INITIAL_CASH,
    cash: TRADING_CONSTANTS.INITIAL_CASH,
    stocks: [],
    totalProfit: 0,
    totalProfitPercent: 0,
  };
}

/**
 * Load portfolio from localStorage
 * @param userId - User ID
 * @returns Portfolio or null if not found
 */
export function loadPortfolioFromStorage(userId: string): Portfolio | null {
  try {
    const portfolioJson = localStorage.getItem(
      TRADING_CONSTANTS.STORAGE_KEYS.PORTFOLIO
    );
    if (!portfolioJson) {
      return null;
    }

    const portfolio = JSON.parse(portfolioJson) as Portfolio;
    if (portfolio.userId !== userId) {
      return null;
    }

    return portfolio;
  } catch {
    return null;
  }
}

/**
 * Save portfolio to localStorage
 * @param portfolio - Portfolio to save
 */
export function savePortfolioToStorage(portfolio: Portfolio): void {
  try {
    localStorage.setItem(
      TRADING_CONSTANTS.STORAGE_KEYS.PORTFOLIO,
      JSON.stringify(portfolio)
    );
  } catch (error) {
    console.error("Failed to save portfolio:", error);
  }
}

