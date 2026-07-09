import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar - Sticky on all devices */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      {/* Main Content - Responsive padding */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;