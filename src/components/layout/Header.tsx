"use client";

import Link from "next/link";
import { Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-fixed bg-background-primary border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-h4 font-bold text-primary-600">
            StockAI
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-small font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              대시보드
            </Link>
            <Link
              href="/trade"
              className="text-small font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              모의투자
            </Link>
            <Link
              href="/reports"
              className="text-small font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              분석 리포트
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="w-5 h-5 text-gray-600" />
            <span className="hidden md:inline text-small font-medium text-gray-700">
              내 계정
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

