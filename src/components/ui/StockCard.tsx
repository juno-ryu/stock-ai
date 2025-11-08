"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export function StockCard({
  symbol,
  name,
  price,
  change,
  changePercent,
}: StockCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{symbol}</h3>
          <p className="text-small text-gray-600">{name}</p>
        </div>
        {isPositive ? (
          <TrendingUp className="w-5 h-5 text-success-500" />
        ) : (
          <TrendingDown className="w-5 h-5 text-danger-500" />
        )}
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-h4 font-bold text-gray-900">
            {price.toLocaleString()}원
          </p>
        </div>
        <div className="text-right">
          <p
            className={cn(
              "text-small font-semibold",
              isPositive ? "text-success-600" : "text-danger-600"
            )}
          >
            {isPositive ? "+" : ""}
            {change.toLocaleString()}원
          </p>
          <p
            className={cn(
              "text-xsmall font-medium",
              isPositive ? "text-success-600" : "text-danger-600"
            )}
          >
            {isPositive ? "+" : ""}
            {changePercent.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
}

