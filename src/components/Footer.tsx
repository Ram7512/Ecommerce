
import { NavLink } from "react-router";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Shop<span className="text-blue-500">Ease</span>
                        </h2>

                        <p className="text-sm leading-7 text-gray-400">
                            Your one-stop destination for quality products.
                            Discover amazing deals and enjoy a seamless
                            shopping experience with ShopEase.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-5 text-xl">
                            <i className="bi bi-facebook hover:text-blue-500 cursor-pointer"></i>
                            <i className="bi bi-instagram hover:text-pink-500 cursor-pointer"></i>
                            <i className="bi bi-twitter-x hover:text-white cursor-pointer"></i>
                            <i className="bi bi-youtube hover:text-red-500 cursor-pointer"></i>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><NavLink to="/" className="hover:text-blue-400">Home</NavLink></li>
                            <li><NavLink to="/products" className="hover:text-blue-400">Products</NavLink></li>
                            <li><NavLink to="/wishlist" className="hover:text-blue-400">Wishlist</NavLink></li>
                            <li><NavLink to="/cart" className="hover:text-blue-400">Cart</NavLink></li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Customer Support
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
                            <li><a href="#" className="hover:text-blue-400">Shipping Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Contact Us
                        </h3>

                        <ul className="space-y-4 text-sm">

                            <li className="flex items-center gap-3">
                                <i className="bi bi-geo-alt text-blue-400 text-lg"></i>
                                Hyderabad, India
                            </li>

                            <li className="flex items-center gap-3">
                                <i className="bi bi-envelope text-blue-400 text-lg"></i>
                                support@shopease.com
                            </li>

                            <li className="flex items-center gap-3">
                                <i className="bi bi-telephone text-blue-400 text-lg"></i>
                                +91 98765 43210
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">

                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">

                    <p>
                        © {new Date().getFullYear()} ShopEase. All rights reserved.
                    </p>

                    <p>
                        Designed By Ram for a better shopping experience.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;