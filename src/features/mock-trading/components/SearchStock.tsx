/**
 * SearchStock Component
 * Stock search and selection
 */

"use client";

import { useState } from "react";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStockList } from "../hooks/useMockTrading";
import type { Stock } from "../types";

interface SearchStockProps {
  onSelectStock: (stock: Stock) => void;
  selectedStock?: Stock;
}

export function SearchStock({
  onSelectStock,
  selectedStock,
}: SearchStockProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useStockList({ query: searchQuery });

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-h5 font-bold text-gray-900 mb-4">종목 검색</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="종목명 또는 코드 검색"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
        {isLoading ? (
          <div className="p-6 text-center text-gray-500">검색 중...</div>
        ) : data?.stocks.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            검색 결과가 없습니다
          </div>
        ) : (
          data?.stocks.map((stock) => {
            const isPositive = stock.change >= 0;
            const isSelected = selectedStock?.symbol === stock.symbol;

            return (
              <div
                key={stock.symbol}
                onClick={() => onSelectStock(stock)}
                className={cn(
                  "p-4 cursor-pointer transition-colors",
                  isSelected ? "bg-primary-50" : "hover:bg-gray-50"
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-small font-semibold text-gray-900">
                      {stock.symbol}
                    </p>
                    <p className="text-xsmall text-gray-600">{stock.name}</p>
                  </div>
                  {isPositive ? (
                    <TrendingUp className="w-4 h-4 text-success-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-danger-500" />
                  )}
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-base font-bold text-gray-900">
                    {stock.price.toLocaleString()}원
                  </p>
                  <p
                    className={cn(
                      "text-xsmall font-semibold",
                      isPositive ? "text-success-600" : "text-danger-600"
                    )}
                  >
                    {isPositive ? "+" : ""}
                    {stock.changePercent.toFixed(2)}%
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

