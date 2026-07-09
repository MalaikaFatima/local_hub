import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto collapse sidebar on mobile
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Toggle sidebar with mobile awareness
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Responsive */}
      <div
        className={`
          fixed md:relative z-30 
          transition-all duration-300 ease-in-out
          ${collapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
          ${collapsed ? "md:w-20" : "w-64"}
          h-full
          shadow-lg md:shadow-none
        `}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
        />
      </div>

      {/* Overlay for mobile */}
      {!collapsed && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Topbar
          collapsed={collapsed}
          setCollapsed={toggleSidebar}
          isMobile={isMobile}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;