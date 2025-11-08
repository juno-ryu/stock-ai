/**
 * OrderForm Component
 * Trade order form for buy/sell
 */

"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TradeButton } from "@/components/ui/TradeButton";
import { useMockTrading } from "../hooks/useMockTrading";
import type { Stock } from "../types";
import {
  PRICE_ADJUSTMENT_PRESETS,
  QUANTITY_PRESETS,
} from "../constants";
import { calculateOrderTotal } from "../utils";

interface OrderFormProps {
  stock: Stock;
}

export function OrderForm({ stock }: OrderFormProps) {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(stock.price.toString());

  const { executeTrade, isExecuting, isSuccess, isError, error, data, reset } =
    useMockTrading();

  // Update price when stock changes
  useEffect(() => {
    setPrice(stock.price.toString());
  }, [stock.symbol, stock.price]);

  // Reset form after successful trade
  useEffect(() => {
    if (isSuccess) {
      setQuantity("");
      setTimeout(() => {
        reset();
      }, 3000);
    }
  }, [isSuccess, reset]);

  const handlePriceAdjustment = (adjustment: number) => {
    const currentPrice = stock.price;
    const newPrice = Math.round(currentPrice * (1 + adjustment));
    setPrice(newPrice.toString());
  };

  const handleQuantityPreset = (qty: number) => {
    setQuantity(qty.toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const quantityNum = parseInt(quantity);
    const priceNum = parseInt(price);

    if (!quantityNum || !priceNum) {
      return;
    }

    executeTrade({
      symbol: stock.symbol,
      type: tradeType,
      quantity: quantityNum,
      price: priceNum,
    });
  };

  const totalAmount = calculateOrderTotal(
    parseInt(quantity) || 0,
    parseInt(price) || 0
  );
  const isPositive = stock.change >= 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Stock Info */}
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-h3 font-bold text-gray-900 mb-1">
              {stock.symbol}
            </h2>
            <p className="text-base text-gray-600">{stock.name}</p>
          </div>
          <div className="text-right">
            <p className="text-h3 font-bold text-gray-900 mb-1">
              {stock.price.toLocaleString()}원
            </p>
            <div className="flex items-center gap-1 justify-end">
              {isPositive ? (
                <TrendingUp className="w-5 h-5 text-success-600" />
              ) : (
                <TrendingDown className="w-5 h-5 text-danger-600" />
              )}
              <span
                className={cn(
                  "text-small font-semibold",
                  isPositive ? "text-success-600" : "text-danger-600"
                )}
              >
                {isPositive ? "+" : ""}
                {stock.change.toLocaleString()}원 ({isPositive ? "+" : ""}
                {stock.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trade Type Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setTradeType("buy")}
          className={cn(
            "flex-1 py-4 text-base font-semibold transition-colors",
            tradeType === "buy"
              ? "text-success-600 border-b-2 border-success-600"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          매수
        </button>
        <button
          onClick={() => setTradeType("sell")}
          className={cn(
            "flex-1 py-4 text-base font-semibold transition-colors",
            tradeType === "sell"
              ? "text-danger-600 border-b-2 border-danger-600"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          매도
        </button>
      </div>

      {/* Order Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <label className="block text-small font-medium text-gray-700 mb-2">
            주문가격
          </label>
          <div className="relative">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="0"
              required
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-small text-gray-600">
              원
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            {PRICE_ADJUSTMENT_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handlePriceAdjustment(preset.value)}
                className="flex-1 px-3 py-2 text-xsmall font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-small font-medium text-gray-700 mb-2">
            주문수량
          </label>
          <div className="relative">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="0"
              required
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-small text-gray-600">
              주
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            {QUANTITY_PRESETS.map((qty) => (
              <button
                key={qty}
                type="button"
                onClick={() => handleQuantityPreset(qty)}
                className="flex-1 px-3 py-2 text-xsmall font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                {qty}주
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-small text-gray-600">주문금액</span>
            <span className="text-base font-bold text-gray-900">
              {totalAmount.toLocaleString()}원
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-small text-gray-600">수수료</span>
            <span className="text-small text-gray-900">0원</span>
          </div>
        </div>

        {/* Success Message */}
        {isSuccess && data && (
          <div className="bg-success-50 border border-success-200 rounded-lg p-4">
            <p className="text-small font-semibold text-success-800">
              {data.message}
            </p>
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="bg-danger-50 border border-danger-200 rounded-lg p-4">
            <p className="text-small font-semibold text-danger-800">
              {error?.message || "주문 처리에 실패했습니다"}
            </p>
          </div>
        )}

        <TradeButton
          type={tradeType}
          disabled={!quantity || !price || isExecuting}
          className="w-full"
        >
          {isExecuting
            ? "처리 중..."
            : tradeType === "buy"
              ? "매수 주문"
              : "매도 주문"}
        </TradeButton>
      </form>
    </div>
  );
}

