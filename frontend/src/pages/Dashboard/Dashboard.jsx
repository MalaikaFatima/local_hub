import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getDashboard } from "../../services/dashboardService";

function Dashboard() {
    const { token, user, role } = useAuth();

    const [stats, setStats] = useState({
        users: 0,
        products: 0,
        services: 0,
        bookings: 0,
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {
        try {
            const data = await getDashboard(token);
            setStats(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold text-slate-800">
                    Welcome, {user?.name}
                </h1>

                <p className="text-slate-500 mt-2">
                    {role === "admin" &&
                        "Manage your entire LocalHub platform."}

                    {role === "provider" &&
                        "Manage your services and customer bookings."}

                    {role === "customer" &&
                        "Browse services and track your bookings."}
                </p>
            </div>

            {/* ADMIN */}

            {role === "admin" && (

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                    <Card title="Users" value={stats.users} />

                    <Card title="Products" value={stats.products} />

                    <Card title="Services" value={stats.services} />

                    <Card title="Bookings" value={stats.bookings} />

                </div>

            )}

            {/* PROVIDER */}

            {role === "provider" && (

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <Card title="My Services" value={stats.services} />

                    <Card title="Customer Bookings" value={stats.bookings} />

                </div>

            )}

            {/* CUSTOMER */}

            {role === "customer" && (

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <Card title="My Bookings" value={stats.bookings} />

                    <Card title="Marketplace Services" value={stats.services} />

                </div>

            )}

        </div>
    );
}

function Card({ title, value }) {

    return (

        <div className="bg-white rounded-2xl border shadow-sm p-6">

            <p className="text-slate-500">

                {title}

            </p>

            <h2 className="text-4xl font-bold text-emerald-600 mt-3">

                {value}

            </h2>

        </div>

    );

}

export default Dashboard;