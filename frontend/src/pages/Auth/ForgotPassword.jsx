import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

            <div className="bg-white max-w-md w-full rounded-3xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center">

                    Forgot Password

                </h1>

                <p className="text-center text-gray-500 mt-3">

                    Enter your email to receive a reset link.

                </p>

                <form className="mt-8">

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border rounded-xl p-4 outline-none focus:border-emerald-600"
                    />

                    <button className="w-full mt-6 bg-emerald-600 text-white py-4 rounded-xl hover:bg-emerald-700 transition">

                        Send Reset Link

                    </button>

                </form>

                <div className="text-center mt-8">

                    <Link
                        to="/login"
                        className="text-emerald-600 font-semibold"
                    >

                        Back to Login

                    </Link>

                </div>

            </div>

        </section>
    );
}

export default ForgotPassword;