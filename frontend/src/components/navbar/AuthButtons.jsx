import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logout as logoutApi } from "../../services/authService";

function AuthButtons() {
    const { isAuthenticated, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutApi();
        } catch (error) {
            console.log(error);
        }

        logout();

        navigate("/login");
    };

    if (isAuthenticated) {
        return (
            <div className="flex gap-3">
                <Link
                    to="/dashboard"
                    className="px-5 py-2 rounded-lg border"
                >
                    Dashboard
                </Link>

                <button
                    onClick={handleLogout}
                    className="px-5 py-2 rounded-xl border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition duration-300"

                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="flex gap-3">
            <Link
                to="/login"
                className="px-5 py-2 rounded-lg border"
            >
                Login
            </Link>

            <Link
                to="/register"
                className="px-5 py-2 rounded-lg bg-emerald-600 text-white"
            >
                Register
            </Link>
        </div>
    );
}

export default AuthButtons;