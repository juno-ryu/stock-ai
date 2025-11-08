/**
 * TradeHistory Component
 * Display user's trade history
 */

"use client";

import { cn } from "@/lib/utils";
import { useOrderHistory } from "../hooks/useMockTrading";

export function TradeHistory() {
  const { data: orders, isLoading } = useOrderHistory();

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <p className="text-center text-gray-500">로딩 중...</p>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <p className="text-center text-gray-500">거래 내역이 없습니다</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-h5 font-bold text-gray-900">거래 내역</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xsmall font-semibold text-gray-600 uppercase">
                구분
              </th>
              <th className="px-6 py-3 text-left text-xsmall font-semibold text-gray-600 uppercase">
                종목명
              </th>
              <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase">
                수량
              </th>
              <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase">
                가격
              </th>
              <th className="px-6 py-3 text-right text-xsmall font-semibold text-gray-600 uppercase">
                총액
              </th>
              <th className="px-6 py-3 text-left text-xsmall font-semibold text-gray-600 uppercase">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xsmall font-semibold text-gray-600 uppercase">
                체결시간
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "text-xsmall font-bold px-2 py-1 rounded",
                      order.type === "buy"
                        ? "bg-success-100 text-success-700"
                        : "bg-danger-100 text-danger-700"
                    )}
                  >
                    {order.type === "buy" ? "매수" : "매도"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-small font-semibold text-gray-900">
                    {order.symbol}
                  </p>
                  <p className="text-xsmall text-gray-600">{order.name}</p>
                </td>
                <td className="px-6 py-4 text-right text-small text-gray-900">
                  {order.quantity.toLocaleString()}주
                </td>
                <td className="px-6 py-4 text-right text-small text-gray-900">
                  {order.price.toLocaleString()}원
                </td>
                <td className="px-6 py-4 text-right text-small font-semibold text-gray-900">
                  {order.total.toLocaleString()}원
                </td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "text-xsmall font-medium px-2 py-1 rounded",
                      order.status === "completed"
                        ? "bg-primary-100 text-primary-700"
                        : order.status === "pending"
                          ? "bg-accent-100 text-accent-700"
                          : "bg-gray-100 text-gray-700"
                    )}
                  >
                    {order.status === "completed"
                      ? "체결"
                      : order.status === "pending"
                        ? "대기"
                        : "취소"}
                  </span>
                </td>
                <td className="px-6 py-4 text-xsmall text-gray-600">
                  {new Date(order.createdAt).toLocaleString("ko-KR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

