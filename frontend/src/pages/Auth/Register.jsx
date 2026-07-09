import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Register() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "customer",
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

            const response = await register(formData);

            login(response.user, response.token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error.response?.data);

            alert(error.response?.data?.message || "Registration Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Join LocalHub today.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium block mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                        />
                    </div>

                    <div>
                        <label className="font-medium block mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@gmail.com"
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                        />
                    </div>
                    <div>
                        <label className="font-medium block mb-2">

                            Register As

                        </label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                        >

                            <option value="customer">

                                Customer

                            </option>

                            <option value="provider">

                                Service Provider

                            </option>

                        </select>
                    </div>
                    <div>
                        <label className="font-medium block mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="********"
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                        />
                    </div>

                    <div>
                        <label className="font-medium block mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            placeholder="********"
                            className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 text-white py-4 rounded-xl hover:bg-emerald-700 transition disabled:bg-gray-400"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>
                </form>

                <div className="text-center mt-8">
                    Already have an account?

                    <Link
                        to="/login"
                        className="text-emerald-600 font-semibold ml-2"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Register;