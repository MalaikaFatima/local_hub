import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 mt-20">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}

                    <div>

                        <h2 className="text-3xl font-bold text-white">

                            LocalHub

                        </h2>

                        <p className="mt-4 leading-7">

                            Find trusted professionals, discover local
                            businesses, and buy or sell products through one
                            secure community platform.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-semibold text-white">

                            Quick Links

                        </h3>

                        <div className="flex flex-col gap-3 mt-5">

                            <Link to="/">Home</Link>

                            <Link to="/services">Services</Link>

                            <Link to="/marketplace">Marketplace</Link>

                            <Link to="/login">Login</Link>

                        </div>

                    </div>

                    {/* Support */}

                    <div>

                        <h3 className="text-xl font-semibold text-white">

                            Support

                        </h3>

                        <div className="flex flex-col gap-3 mt-5">

                            <a href="#">Privacy Policy</a>

                            <a href="#">Terms & Conditions</a>

                            <a href="#">Help Center</a>

                            <a href="#">Contact Us</a>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-semibold text-white">

                            Contact

                        </h3>

                        <div className="mt-5 space-y-3">

                            <p>Email: support@localhub.com</p>

                            <p>Phone: +92 300 1234567</p>

                            <p>Pakistan</p>

                        </div>

                    </div>

                </div>

                <div className="border-t border-slate-700 mt-12 pt-6 text-center">

                    © 2026 LocalHub. All rights reserved.

                </div>

            </div>

        </footer>
    );
}

export default Footer;