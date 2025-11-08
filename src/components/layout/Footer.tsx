"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-h6 font-bold text-white mb-4">StockAI</h3>
            <p className="text-small text-gray-400">
              초보 투자자를 위한 안전한 모의투자 플랫폼
            </p>
          </div>

          <div>
            <h4 className="text-small font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  대시보드
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  모의투자
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  분석 리포트
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-small font-semibold text-white mb-4">고객지원</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  공지사항
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-small font-semibold text-white mb-4">회사정보</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  회사소개
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-small text-gray-400 hover:text-white transition-colors"
                >
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-xsmall text-gray-500">
            © 2025 StockAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

