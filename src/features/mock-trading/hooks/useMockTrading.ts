/**
 * Mock Trading Hook
 * Handles trade execution
 */

"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import type { TradeRequest } from "../types";
import { executeMockTrade } from "../lib/tradingService";
import { getOrderHistory, getStockList } from "../api";
import { usePortfolio } from "./usePortfolio";
import { TRADING_CONSTANTS } from "../constants";
import type { SearchStockParams } from "../types";

// Mock user ID (in real app, this would come from auth context)
const MOCK_USER_ID = "user-001";

/**
 * Hook to execute mock trades
 */
export function useMockTrading() {
  const { portfolio, updatePortfolio } = usePortfolio();

  // Mutation to execute trade
  const executeTradeMutation = useMutation({
    mutationFn: async (request: TradeRequest) => {
      if (!portfolio) {
        throw new Error("Portfolio not loaded");
      }

      const response = await executeMockTrade(request, portfolio);
      return response;
    },
    onSuccess: (response) => {
      // Update portfolio in cache
      updatePortfolio(response.portfolio);
    },
  });

  return {
    executeTrade: executeTradeMutation.mutate,
    executeTradeAsync: executeTradeMutation.mutateAsync,
    isExecuting: executeTradeMutation.isPending,
    isSuccess: executeTradeMutation.isSuccess,
    isError: executeTradeMutation.isError,
    error: executeTradeMutation.error,
    data: executeTradeMutation.data,
    reset: executeTradeMutation.reset,
  };
}

/**
 * Hook to get stock list
 */
export function useStockList(params?: SearchStockParams) {
  return useQuery({
    queryKey: [TRADING_CONSTANTS.QUERY_KEYS.STOCKS, params],
    queryFn: () => getStockList(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

/**
 * Hook to get order history
 */
export function useOrderHistory() {
  return useQuery({
    queryKey: [TRADING_CONSTANTS.QUERY_KEYS.ORDERS, MOCK_USER_ID],
    queryFn: () => getOrderHistory(MOCK_USER_ID),
    staleTime: 1000 * 60, // 1 minute
  });
}

