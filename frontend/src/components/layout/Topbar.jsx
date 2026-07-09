import { useAuth } from "../../context/AuthContext";

function Topbar({ collapsed, setCollapsed }) {
    const { user } = useAuth();

    return (
        <header className="bg-white border-b h-16 md:h-20 flex items-center justify-between px-3 sm:px-4 md:px-8">
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-2xl md:text-3xl hover:bg-gray-100 p-1 rounded transition-colors"
                aria-label="Toggle sidebar"
            >
                ☰
            </button>

            <h1 className="hidden sm:block text-xl md:text-2xl font-bold text-slate-700">
                Dashboard
            </h1>

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
        </header>
    );
}

export default Topbar;