/**
 * Portfolio Hook
 * Manages portfolio state with React Query
 */

"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Portfolio } from "../types";
import { TRADING_CONSTANTS } from "../constants";
import {
  getInitialPortfolio,
  loadPortfolioFromStorage,
  savePortfolioToStorage,
} from "../lib/tradingService";

// Mock user ID (in real app, this would come from auth context)
const MOCK_USER_ID = "user-001";

/**
 * Hook to manage portfolio state
 */
export function usePortfolio() {
  const queryClient = useQueryClient();

  // Query to get portfolio
  const portfolioQuery = useQuery({
    queryKey: [TRADING_CONSTANTS.QUERY_KEYS.PORTFOLIO, MOCK_USER_ID],
    queryFn: () => {
      // Try to load from localStorage
      const savedPortfolio = loadPortfolioFromStorage(MOCK_USER_ID);
      if (savedPortfolio) {
        return savedPortfolio;
      }

      // Return initial portfolio if not found
      const initialPortfolio = getInitialPortfolio(MOCK_USER_ID);
      savePortfolioToStorage(initialPortfolio);
      return initialPortfolio;
    },
    staleTime: Infinity, // Portfolio data doesn't go stale
  });

  // Mutation to update portfolio
  const updatePortfolioMutation = useMutation({
    mutationFn: async (newPortfolio: Portfolio) => {
      savePortfolioToStorage(newPortfolio);
      return newPortfolio;
    },
    onSuccess: (newPortfolio) => {
      // Update cache
      queryClient.setQueryData(
        [TRADING_CONSTANTS.QUERY_KEYS.PORTFOLIO, MOCK_USER_ID],
        newPortfolio
      );
    },
  });

  // Mutation to reset portfolio
  const resetPortfolioMutation = useMutation({
    mutationFn: async () => {
      const initialPortfolio = getInitialPortfolio(MOCK_USER_ID);
      savePortfolioToStorage(initialPortfolio);
      return initialPortfolio;
    },
    onSuccess: (newPortfolio) => {
      // Update cache
      queryClient.setQueryData(
        [TRADING_CONSTANTS.QUERY_KEYS.PORTFOLIO, MOCK_USER_ID],
        newPortfolio
      );
    },
  });

  return {
    portfolio: portfolioQuery.data,
    isLoading: portfolioQuery.isLoading,
    isError: portfolioQuery.isError,
    error: portfolioQuery.error,
    updatePortfolio: updatePortfolioMutation.mutate,
    resetPortfolio: resetPortfolioMutation.mutate,
    isUpdating: updatePortfolioMutation.isPending,
    isResetting: resetPortfolioMutation.isPending,
  };
}

