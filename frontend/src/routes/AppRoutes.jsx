import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";

import Dashboard from "../pages/Dashboard/Dashboard";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Marketplace from "../pages/Marketplace/Marketplace";
import Products from "../pages/Products/Products";
import Services from "../pages/Services/Services";
import Bookings from "../pages/Bookings/Bookings";
import Profile from "../pages/Profile/Profile";
import Reviews from "../pages/Reviews/Reviews";
import ProtectedRoute from "./guards/ProtectedRoute";
import Users from "../pages/Admin/Users";
function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                </Route>

                <Route
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute
                                roles={["admin", "provider", "customer"]}
                            >
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/marketplace"
                        element={
                            <ProtectedRoute
                                roles={["customer", "admin"]}
                            >
                                <Marketplace />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/products"
                        element={
                            <ProtectedRoute
                                roles={["provider", "admin"]}
                            >
                                <Products />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/services"
                        element={
                            <ProtectedRoute
                                roles={["provider", "admin"]}
                            >
                                <Services />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/bookings"
                        element={
                            <ProtectedRoute
                                roles={["admin", "provider", "customer"]}
                            >
                                <Bookings />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute
                                roles={["admin", "provider", "customer"]}
                            >
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <ProtectedRoute roles={["admin"]}>
                                <Users />
                            </ProtectedRoute>
                        }
                    />
                </Route>
                <Route
                    path="/reviews"
                    element={
                        <ProtectedRoute
                            roles={["admin", "provider", "customer"]}
                        >
                            <Reviews />
                        </ProtectedRoute>
                    }
                />
                <Route
    path="/services/:id"
    element={
        <ProtectedRoute
            roles={["customer","provider","admin"]}
        >
            <ServiceDetails />
        </ProtectedRoute>
    }
/>
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;