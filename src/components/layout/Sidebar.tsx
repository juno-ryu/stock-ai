"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  FileText,
  Star,
  Settings,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "대시보드",
  },
  {
    href: "/trade",
    icon: TrendingUp,
    label: "모의투자",
  },
  {
    href: "/reports",
    icon: FileText,
    label: "분석 리포트",
  },
  {
    href: "/watchlist",
    icon: Star,
    label: "관심 종목",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "설정",
  },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-modal-backdrop lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen bg-background-primary border-r border-gray-200 z-modal lg:z-base transition-transform duration-300",
          "w-64 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <span className="text-h6 font-bold text-primary-600">메뉴</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary-50 text-primary-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-small">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-primary-50 rounded-lg p-4">
            <p className="text-small font-semibold text-primary-900 mb-1">
              프리미엄 플랜
            </p>
            <p className="text-xsmall text-primary-700 mb-3">
              더 많은 기능을 이용하세요
            </p>
            <button className="w-full bg-primary-600 text-white text-small font-medium py-2 rounded-lg hover:bg-primary-700 transition-colors">
              업그레이드
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

