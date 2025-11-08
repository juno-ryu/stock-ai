"use client";

import { AppLayout } from "@/components/layout/AppLayout";
import { dummyReports } from "@/lib/data/dummy";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  FileText,
  Calendar,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReportsPage() {
  return (
    <AppLayout showSidebar>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-h2 font-bold text-gray-900 mb-2">분석 리포트</h1>
          <p className="text-base text-gray-600">
            AI 기반 투자 분석과 전문가 의견을 확인하세요
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-small font-medium text-gray-600">
                매수 추천
              </span>
              <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success-600" />
              </div>
            </div>
            <p className="text-h3 font-bold text-success-600 mb-1">
              {dummyReports.filter((r) => r.rating === "buy").length}개
            </p>
            <p className="text-small text-gray-600">상승 전망 종목</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-small font-medium text-gray-600">
                보유 추천
              </span>
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                <Minus className="w-5 h-5 text-accent-600" />
              </div>
            </div>
            <p className="text-h3 font-bold text-accent-600 mb-1">
              {dummyReports.filter((r) => r.rating === "hold").length}개
            </p>
            <p className="text-small text-gray-600">관망 필요 종목</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-small font-medium text-gray-600">
                매도 추천
              </span>
              <div className="w-10 h-10 bg-danger-100 rounded-full flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-danger-600" />
              </div>
            </div>
            <p className="text-h3 font-bold text-danger-600 mb-1">
              {dummyReports.filter((r) => r.rating === "sell").length}개
            </p>
            <p className="text-small text-gray-600">하락 전망 종목</p>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {dummyReports.map((report) => {
            const upside =
              ((report.targetPrice - report.currentPrice) /
                report.currentPrice) *
              100;
            const isUpside = upside >= 0;

            return (
              <div
                key={report.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-h4 font-bold text-gray-900">
                          {report.symbol}
                        </h2>
                        <span
                          className={cn(
                            "text-xsmall font-bold px-3 py-1 rounded-full",
                            report.rating === "buy"
                              ? "bg-success-100 text-success-700"
                              : report.rating === "hold"
                                ? "bg-accent-100 text-accent-700"
                                : "bg-danger-100 text-danger-700"
                          )}
                        >
                          {report.rating === "buy"
                            ? "매수"
                            : report.rating === "hold"
                              ? "보유"
                              : "매도"}
                        </span>
                      </div>
                      <p className="text-base text-gray-600 mb-1">
                        {report.name}
                      </p>
                      <h3 className="text-h5 font-semibold text-gray-900">
                        {report.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-small text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    {report.summary}
                  </p>

                  {/* Price Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="text-small font-medium text-gray-600">
                          현재가
                        </span>
                      </div>
                      <p className="text-h5 font-bold text-gray-900">
                        {report.currentPrice.toLocaleString()}원
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-gray-600" />
                        <span className="text-small font-medium text-gray-600">
                          목표가
                        </span>
                      </div>
                      <p className="text-h5 font-bold text-primary-600">
                        {report.targetPrice.toLocaleString()}원
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {isUpside ? (
                          <TrendingUp className="w-4 h-4 text-success-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-danger-600" />
                        )}
                        <span className="text-small font-medium text-gray-600">
                          상승여력
                        </span>
                      </div>
                      <p
                        className={cn(
                          "text-h5 font-bold",
                          isUpside ? "text-success-600" : "text-danger-600"
                        )}
                      >
                        {isUpside ? "+" : ""}
                        {upside.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold text-base hover:bg-primary-700 transition-colors">
                      상세 보기
                    </button>
                    <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-base text-gray-700 hover:bg-gray-50 transition-colors">
                      관심 종목 추가
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Analysis Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-white">
          <div className="max-w-3xl">
            <h2 className="text-h3 font-bold mb-3">
              AI 맞춤형 투자 분석 서비스
            </h2>
            <p className="text-base text-primary-50 mb-6">
              인공지능이 당신의 투자 성향과 포트폴리오를 분석하여 최적의 투자
              전략을 제안합니다.
            </p>
            <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold text-base hover:bg-primary-50 transition-colors">
              AI 분석 받기
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-accent-50 border border-accent-200 rounded-lg p-6">
          <h3 className="text-base font-semibold text-accent-900 mb-2">
            투자 유의사항
          </h3>
          <p className="text-small text-accent-800 leading-relaxed">
            본 리포트는 투자 참고용으로 제공되며, 투자 결과에 대한 법적 책임은
            투자자 본인에게 있습니다. 투자 결정 시 신중을 기하시기 바라며,
            과거의 실적이 미래의 수익을 보장하지 않습니다.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}

