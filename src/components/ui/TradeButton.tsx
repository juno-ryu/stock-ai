"use client";

import { cn } from "@/lib/utils";

interface TradeButtonProps {
  type: "buy" | "sell";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function TradeButton({
  type,
  onClick,
  disabled = false,
  children,
  className,
}: TradeButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-3 rounded-lg font-semibold text-base transition-all",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        type === "buy"
          ? "bg-success-600 hover:bg-success-700 text-white shadow-md hover:shadow-lg"
          : "bg-danger-600 hover:bg-danger-700 text-white shadow-md hover:shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
}

