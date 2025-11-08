/**
 * Mock Trading Feature Constants
 */

export const TRADING_CONSTANTS = {
  // Initial cash for new users
  INITIAL_CASH: 10000000, // 10,000,000 KRW

  // Trading limits
  MIN_ORDER_QUANTITY: 1,
  MAX_ORDER_QUANTITY: 10000,
  MIN_ORDER_PRICE: 100,
  MAX_ORDER_PRICE: 10000000,

  // Commission rates (0 for mock trading)
  COMMISSION_RATE: 0,

  // Order status
  ORDER_STATUS: {
    PENDING: "pending",
    COMPLETED: "completed",
    CANCELLED: "cancelled",
  } as const,

  // Trade types
  TRADE_TYPE: {
    BUY: "buy",
    SELL: "sell",
  } as const,

  // Query keys for React Query
  QUERY_KEYS: {
    PORTFOLIO: "portfolio",
    STOCKS: "stocks",
    ORDERS: "orders",
    TRADE_HISTORY: "tradeHistory",
  } as const,

  // Local storage keys
  STORAGE_KEYS: {
    PORTFOLIO: "mock_trading_portfolio",
    ORDERS: "mock_trading_orders",
  } as const,

  // Error messages
  ERROR_MESSAGES: {
    INSUFFICIENT_CASH: "보유 현금이 부족합니다",
    INSUFFICIENT_STOCK: "보유 수량이 부족합니다",
    INVALID_QUANTITY: "올바른 수량을 입력해주세요",
    INVALID_PRICE: "올바른 가격을 입력해주세요",
    STOCK_NOT_FOUND: "종목을 찾을 수 없습니다",
    ORDER_FAILED: "주문 처리에 실패했습니다",
  } as const,

  // Success messages
  SUCCESS_MESSAGES: {
    BUY_ORDER_COMPLETED: "매수 주문이 체결되었습니다",
    SELL_ORDER_COMPLETED: "매도 주문이 체결되었습니다",
  } as const,
} as const;

export const PRICE_ADJUSTMENT_PRESETS = [
  { label: "-5%", value: -0.05 },
  { label: "현재가", value: 0 },
  { label: "+5%", value: 0.05 },
] as const;

export const QUANTITY_PRESETS = [10, 50, 100] as const;

