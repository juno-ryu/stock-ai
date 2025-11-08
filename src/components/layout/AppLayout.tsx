"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export function AppLayout({ children, showSidebar = false }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        {showSidebar && (
          <>
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="fixed bottom-4 right-4 lg:hidden bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-fixed"
            >
              <Menu className="w-6 h-6" />
            </button>
          </>
        )}

        <main className="flex-1 bg-background-secondary">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

