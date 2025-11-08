/**
 * Mock Trading Feature Zod Schemas
 */

import { z } from "zod";

export const stockSchema = z.object({
  symbol: z.string().min(1),
  name: z.string().min(1),
  price: z.number().positive(),
  change: z.number(),
  changePercent: z.number(),
  volume: z.number().nonnegative(),
  marketCap: z.string(),
});

export const orderSchema = z.object({
  id: z.string(),
  type: z.enum(["buy", "sell"]),
  symbol: z.string().min(1),
  name: z.string().min(1),
  quantity: z.number().positive().int(),
  price: z.number().positive(),
  total: z.number().positive(),
  status: z.enum(["pending", "completed", "cancelled"]),
  createdAt: z.string(),
  executedAt: z.string().optional(),
});

export const portfolioStockSchema = z.object({
  symbol: z.string().min(1),
  name: z.string().min(1),
  quantity: z.number().positive().int(),
  avgPrice: z.number().positive(),
  currentPrice: z.number().positive(),
  profit: z.number(),
  profitPercent: z.number(),
});

export const portfolioSchema = z.object({
  userId: z.string(),
  totalValue: z.number().nonnegative(),
  cash: z.number().nonnegative(),
  stocks: z.array(portfolioStockSchema),
  totalProfit: z.number(),
  totalProfitPercent: z.number(),
});

export const tradeRequestSchema = z.object({
  symbol: z.string().min(1, "종목을 선택해주세요"),
  type: z.enum(["buy", "sell"], {
    errorMap: () => ({ message: "매수 또는 매도를 선택해주세요" }),
  }),
  quantity: z
    .number({
      required_error: "수량을 입력해주세요",
      invalid_type_error: "올바른 수량을 입력해주세요",
    })
    .positive("수량은 0보다 커야 합니다")
    .int("수량은 정수여야 합니다"),
  price: z
    .number({
      required_error: "가격을 입력해주세요",
      invalid_type_error: "올바른 가격을 입력해주세요",
    })
    .positive("가격은 0보다 커야 합니다"),
});

export const tradeResponseSchema = z.object({
  success: z.boolean(),
  order: orderSchema,
  portfolio: portfolioSchema,
  message: z.string(),
});

export const searchStockParamsSchema = z.object({
  query: z.string().optional(),
  limit: z.number().positive().int().optional().default(20),
});

export const stockListResponseSchema = z.object({
  stocks: z.array(stockSchema),
  total: z.number().nonnegative(),
});

// Type inference from schemas
export type StockSchema = z.infer<typeof stockSchema>;
export type OrderSchema = z.infer<typeof orderSchema>;
export type PortfolioSchema = z.infer<typeof portfolioSchema>;
export type TradeRequestSchema = z.infer<typeof tradeRequestSchema>;
export type TradeResponseSchema = z.infer<typeof tradeResponseSchema>;
export type SearchStockParamsSchema = z.infer<typeof searchStockParamsSchema>;
export type StockListResponseSchema = z.infer<typeof stockListResponseSchema>;
