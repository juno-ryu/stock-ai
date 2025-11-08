/**
 * Mock Trading Page
 * Main trading interface
 */

"use client";

import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SearchStock } from "../components/SearchStock";
import { OrderForm } from "../components/OrderForm";
import { TradeHistory } from "../components/TradeHistory";
import { usePortfolio } from "../hooks/usePortfolio";
import type { Stock } from "../types";
import { dummyStocks } from "@/lib/data/dummy";
import { Wallet, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function MockTradingPage() {
  const [selectedStock, setSelectedStock] = useState<Stock>(dummyStocks[0]);
  const { portfolio, isLoading } = usePortfolio();

  return (
    <AppLayout showSidebar>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-h2 font-bold text-gray-900 mb-2">모의투자</h1>
          <p className="text-base text-gray-600">
            실시간 시세로 안전하게 투자를 연습하세요
          </p>
        </div>

        {/* Portfolio Summary */}
        {portfolio && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-small font-medium text-gray-600">
                  총 자산
                </span>
                <Wallet className="w-5 h-5 text-primary-600" />
              </div>
              <p className="text-h3 font-bold text-gray-900 mb-1">
                {portfolio.totalValue.toLocaleString()}원
              </p>
              <p className="text-small text-gray-600">
                보유 현금: {portfolio.cash.toLocaleString()}원
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-small font-medium text-gray-600">
                  총 수익
                </span>
                <TrendingUp
                  className={cn(
                    "w-5 h-5",
                    portfolio.totalProfit >= 0
                      ? "text-success-600"
                      : "text-danger-600"
                  )}
                />
              </div>
              <p
                className={cn(
                  "text-h3 font-bold mb-1",
                  portfolio.totalProfit >= 0
                    ? "text-success-600"
                    : "text-danger-600"
                )}
              >
                {portfolio.totalProfit >= 0 ? "+" : ""}
                {portfolio.totalProfit.toLocaleString()}원
              </p>
              <p
                className={cn(
                  "text-small font-medium",
                  portfolio.totalProfit >= 0
                    ? "text-success-600"
                    : "text-danger-600"
                )}
              >
                {portfolio.totalProfit >= 0 ? "+" : ""}
                {portfolio.totalProfitPercent.toFixed(2)}%
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-small font-medium text-gray-600">
                  보유 종목
                </span>
              </div>
              <p className="text-h3 font-bold text-gray-900 mb-1">
                {portfolio.stocks.length}개
              </p>
              <p className="text-small text-gray-600">
                평가액:{" "}
                {(portfolio.totalValue - portfolio.cash).toLocaleString()}원
              </p>
            </div>
          </div>
        )}

        {/* Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Stock Search */}
          <div className="lg:col-span-1">
            <SearchStock
              onSelectStock={setSelectedStock}
              selectedStock={selectedStock}
            />
          </div>

          {/* Order Form */}
          <div className="lg:col-span-2">
            <OrderForm stock={selectedStock} />
          </div>
        </div>

        {/* Trade History */}
        <TradeHistory />
      </div>
    </AppLayout>
  );
}

