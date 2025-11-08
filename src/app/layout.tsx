import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "StockAI - 초보 투자자를 위한 모의투자 플랫폼",
  description:
    "실시간 주식 시세와 AI 투자 분석을 제공하는 안전한 모의투자 웹 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

