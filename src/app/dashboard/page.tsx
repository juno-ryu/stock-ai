"use client";

import { AppLayout } from "@/components/layout/AppLayout";
import { StockCard } from "@/components/ui/StockCard";
import {
  dummyPortfolio,
  dummyStocks,
  dummyNews,
  dummyTrades,
} from "@/lib/data/dummy";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { totalValue, totalProfit, totalProfitPercent, cash, stocks } =
    dummyPortfolio;
  const isProfit = totalProfit >= 0;

  return (
    <AppLayout showSidebar>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-h2 font-bold text-gray-900 mb-2">대시보드</h1>
          <p className="text-base text-gray-600">
            포트폴리오 현황과 관심 종목을 확인하세요
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-small font-medium text-gray-600">
                총 자산
              </span>
              <Wallet className="w-5 h-5 text-primary-600" />
            </div>
            <p className="text-h3 font-bold text-gray-900 mb-1">
              {totalValue.toLocaleString()}원
            </p>
            <p className="text-small text-gray-600">
              보유 현금: {cash.toLocaleString()}원
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-small font-medium text-gray-600">
                총 수익
              </span>
              {isProfit ? (
                <TrendingUp className="w-5 h-5 text-success-600" />
              ) : (
                <TrendingDown className="w-5 h-5 text-danger-600" />
              )}
            </div>
            <p
              className={cn(
                "text-h3 font-bold mb-1",
                isProfit ? "text-success-600" : "text-danger-600"
              )}
            >
              {isProfit ? "+" : ""}
              {totalProfit.toLocaleString()}원
            </p>
            <p
              className={cn(
                "text-small font-medium",
                isProfit ? "text-success-600" : "text-danger-600"
              )}
            >
              {isProfit ? "+" : ""}
              {totalProfitPercent.toFixed(2)}%
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-small font-medium text-gray-600">
                보유 종목
              </span>
              <PieChart className="w-5 h-5 text-accent-600" />
            </div>
            <p className="text-h3 font-bold text-gray-900 mb-1">
              {stocks.length}개
            </p>
            <p className="text-small text-gray-600">
              총 평가액:{" "}
              {(totalValue - cash).toLocaleString()}원
            </p>
          </div>
        </div>

        {/* Portfolio Holdings */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-h4 font-bold text-gray-900">보유 종목</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xsmall font-semibold text-gray-600 uppercase tracking-wider">
                    종목명
                  </th>
                  <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase tracking-wider">
                    보유수량
                  </th>
                  <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase tracking-wider">
                    평균단가
                  </th>
                  <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase tracking-wider">
                    현재가
                  </th>
                  <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase tracking-wider">
                    평가손익
                  </th>
                  <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase tracking-wider">
                    수익률
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stocks.map((stock) => {
                  const isStockProfit = stock.profit >= 0;
                  return (
                    <tr key={stock.symbol} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-small font-semibold text-gray-900">
                            {stock.symbol}
                          </p>
                          <p className="text-xsmall text-gray-600">
                            {stock.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-small text-gray-900">
                        {stock.quantity.toLocaleString()}주
                      </td>
                      <td className="px-6 py-4 text-right text-small text-gray-900">
                        {stock.avgPrice.toLocaleString()}원
                      </td>
                      <td className="px-6 py-4 text-right text-small font-semibold text-gray-900">
                        {stock.currentPrice.toLocaleString()}원
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={cn(
                            "text-small font-semibold",
                            isStockProfit
                              ? "text-success-600"
                              : "text-danger-600"
                          )}
                        >
                          {isStockProfit ? "+" : ""}
                          {stock.profit.toLocaleString()}원
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {isStockProfit ? (
                            <ArrowUpRight className="w-4 h-4 text-success-600" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-danger-600" />
                          )}
                          <span
                            className={cn(
                              "text-small font-semibold",
                              isStockProfit
                                ? "text-success-600"
                                : "text-danger-600"
                            )}
                          >
                            {isStockProfit ? "+" : ""}
                            {stock.profitPercent.toFixed(2)}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Watchlist */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-h4 font-bold text-gray-900">관심 종목</h2>
              <button className="text-small font-medium text-primary-600 hover:text-primary-700">
                전체보기 →
              </button>
            </div>
            <div className="p-6 space-y-4">
              {dummyStocks.slice(0, 4).map((stock) => (
                <StockCard key={stock.symbol} {...stock} />
              ))}
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-h4 font-bold text-gray-900">최근 거래</h2>
              <button className="text-small font-medium text-primary-600 hover:text-primary-700">
                전체보기 →
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {dummyTrades.slice(0, 5).map((trade) => (
                <div key={trade.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={cn(
                            "text-xsmall font-bold px-2 py-0.5 rounded",
                            trade.type === "buy"
                              ? "bg-success-100 text-success-700"
                              : "bg-danger-100 text-danger-700"
                          )}
                        >
                          {trade.type === "buy" ? "매수" : "매도"}
                        </span>
                        <span className="text-small font-semibold text-gray-900">
                          {trade.symbol}
                        </span>
                      </div>
                      <p className="text-xsmall text-gray-600">
                        {trade.quantity.toLocaleString()}주 @{" "}
                        {trade.price.toLocaleString()}원
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-small font-semibold text-gray-900">
                        {trade.total.toLocaleString()}원
                      </p>
                      <p className="text-xsmall text-gray-500">{trade.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest News */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-h4 font-bold text-gray-900">최신 뉴스</h2>
            <button className="text-small font-medium text-primary-600 hover:text-primary-700">
              전체보기 →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {dummyNews.slice(0, 4).map((news) => (
              <div
                key={news.id}
                className="flex gap-4 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
              >
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xsmall font-medium text-primary-600">
                      {news.source}
                    </span>
                    <span className="text-xsmall text-gray-500">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-small font-semibold text-gray-900 mb-1 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xsmall text-gray-600 line-clamp-2">
                    {news.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

