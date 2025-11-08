"use client";

import { cn } from "@/lib/utils";

interface NotificationBadgeProps {
  count: number;
  className?: string;
}

export function NotificationBadge({
  count,
  className,
}: NotificationBadgeProps) {
  if (count === 0) return null;

  const displayCount = count > 99 ? "99+" : count.toString();

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-danger-500 text-white text-xsmall font-bold rounded-full",
        className
      )}
    >
      {displayCount}
    </span>
  );
}

