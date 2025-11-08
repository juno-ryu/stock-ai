"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StockCard } from "@/components/ui/StockCard";
import { dummyStocks, dummyNews } from "@/lib/data/dummy";
import { TrendingUp, Shield, BarChart3, Newspaper } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 font-bold mb-6">
                안전하게 시작하는
                <br />
                스마트 모의투자
              </h1>
              <p className="text-large mb-8 text-primary-50">
                초보 투자자를 위한 실시간 주식 시세와 AI 분석으로
                <br />
                투자 경험을 쌓아보세요
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/dashboard"
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-50 transition-colors shadow-lg"
                >
                  무료로 시작하기
                </Link>
                <Link
                  href="/login"
                  className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-800 transition-colors border-2 border-white/20"
                >
                  로그인
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-h2 font-bold text-center mb-12 text-gray-900">
              왜 StockAI인가요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-8 text-center shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-h4 font-semibold mb-3 text-gray-900">
                  안전한 모의투자
                </h3>
                <p className="text-base text-gray-600">
                  실제 돈을 사용하지 않고 안전하게 투자 경험을 쌓을 수 있습니다
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center shadow-md">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="text-h4 font-semibold mb-3 text-gray-900">
                  AI 투자 분석
                </h3>
                <p className="text-base text-gray-600">
                  인공지능 기반 투자 분석과 맞춤형 리포트를 제공합니다
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center shadow-md">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-h4 font-semibold mb-3 text-gray-900">
                  실시간 시세
                </h3>
                <p className="text-base text-gray-600">
                  실시간 주식 시세와 뉴스를 빠르게 확인할 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Stocks Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-h2 font-bold text-gray-900">인기 종목</h2>
              <Link
                href="/dashboard"
                className="text-base font-medium text-primary-600 hover:text-primary-700"
              >
                전체보기 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyStocks.slice(0, 6).map((stock) => (
                <StockCard key={stock.symbol} {...stock} />
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-gray-900" />
                <h2 className="text-h2 font-bold text-gray-900">최신 뉴스</h2>
              </div>
              <Link
                href="/dashboard"
                className="text-base font-medium text-primary-600 hover:text-primary-700"
              >
                전체보기 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dummyNews.slice(0, 4).map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xsmall font-medium text-primary-600">
                        {news.source}
                      </span>
                      <span className="text-xsmall text-gray-500">
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-gray-900">
                      {news.title}
                    </h3>
                    <p className="text-small text-gray-600">{news.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-h2 font-bold mb-4">
              지금 바로 시작해보세요
            </h2>
            <p className="text-large mb-8 text-primary-50">
              무료로 가입하고 모의투자를 경험해보세요
            </p>
            <Link
              href="/dashboard"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-50 transition-colors shadow-lg"
            >
              무료로 시작하기
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

