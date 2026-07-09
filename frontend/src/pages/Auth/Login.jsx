import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        email: "",

        password: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await loginUser(formData);
            login(response.user, response.token);

            navigate("/dashboard");

        } catch (error) {

            console.log(error.response?.data);

            alert(error.response?.data?.message || "Login Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">

            <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

                <div className="text-center">

                    <h1 className="text-4xl font-bold">

                        Welcome Back

                    </h1>

                    <p className="text-gray-500 mt-3">

                        Login to continue to your account.

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10"
                >

                    <div>

                        <label className="block mb-2 font-medium">

                            Email Address

                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                        />

                    </div>

                    <div className="mt-6">

                        <label className="block mb-2 font-medium">

                            Password

                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                        />

                    </div>

                    <div className="flex justify-between items-center mt-6">

                        <label className="flex items-center gap-2">

                            <input type="checkbox" />

                            Remember Me

                        </label>

                        <Link
                            to="/forgot-password"
                            className="text-emerald-600"
                        >

                            Forgot Password?

                        </Link>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 transition text-white py-4 rounded-xl font-semibold disabled:bg-gray-400"
                    >

                        {loading ? "Logging In..." : "Login"}

                    </button>

                </form>

                <div className="text-center mt-8">

                    <p>

                        Don't have an account?

                    </p>

                    <Link
                        to="/register"
                        className="text-emerald-600 font-semibold"
                    >

                        Create Account

                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Login;