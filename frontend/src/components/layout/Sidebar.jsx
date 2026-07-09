import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
    FaHome,
    FaBoxOpen,
    FaTools,
    FaStore,
    FaCalendarAlt,
    FaUser,
    FaUsers,
    FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ collapsed }) {
    const { logout, user } = useAuth();
    const role = user?.role || "customer";

    const menu = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
            roles: ["admin", "provider", "customer"],
        },
        {
            name: "Marketplace",
            path: "/marketplace",
            icon: <FaStore />,
            roles: ["customer"],
        },
        {
            name: "Products",
            path: "/products",
            icon: <FaBoxOpen />,
            roles: ["provider", "admin"],
        },
        {
            name: "Services",
            path: "/services",
            icon: <FaTools />,
            roles: ["provider", "admin"],
        },
        {
            name: "Bookings",
            path: "/bookings",
            icon: <FaCalendarAlt />,
            roles: ["customer", "provider", "admin"],
        },
        {
            name: "Users",
            path: "/users",
            icon: <FaUsers />,
            roles: ["admin"],
        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />,
            roles: ["admin", "provider", "customer"],
        },
    ];

    return (
        <aside
            className={`
                bg-white
                border-r
                shadow-sm
                h-screen
                flex
                flex-col
                transition-all
                duration-300
                fixed
                md:relative
                z-50
                ${collapsed ? "w-20" : "w-64"}
                ${collapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
            `}
        >

            {/* Clickable Logo */}
            <Link
                to="/"
                className="h-20 border-b flex items-center justify-center hover:bg-emerald-50 transition"
            >
                <h1 className="font-bold text-2xl text-emerald-600 cursor-pointer">
                    {collapsed ? "LH" : "LocalHub"}
                </h1>
            </Link>

            {/* Menu */}
            <nav className="flex-1 overflow-y-auto p-3">
                {menu
                    .filter((item) => item.roles.includes(role))
                    .map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 rounded-xl px-4 py-3 mb-2 transition ${
                                    isActive
                                        ? "bg-emerald-600 text-white"
                                        : "hover:bg-emerald-50 text-slate-700"
                                }`
                            }
                        >
                            <span className="text-lg">
                                {item.icon}
                            </span>

                            {!collapsed && (
                                <span>{item.name}</span>
                            )}
                        </NavLink>
                    ))}
            </nav>

            {/* Logout */}
            <div className="border-t p-4">
                <button
                    onClick={logout}
                    className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 flex justify-center items-center gap-3"
                >
                    <FaSignOutAlt />

                    {!collapsed && "Logout"}
                </button>
            </div>

        </aside>
    );
}

export default Sidebar;