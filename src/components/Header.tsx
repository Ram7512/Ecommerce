import { useCartStore } from "../Stores/CartStore";
import { NavLink } from "react-router";

function Header() {

    // Get cart items from Zustand store
    const cartItems = useCartStore((state) => state.cartItems);

    // Calculate total cart quantity
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (

        <header className="w-full bg-white shadow-sm">

            {/* Main Header */}

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">

                {/* Logo */}

                <NavLink to="/" className="text-2xl font-bold text-blue-600 no-underline">
                    ShopEase
                </NavLink>

                {/* Search Bar */}

                <div className="hidden md:flex flex-1 max-w-xl relative">

                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className="absolute right-3 top-3 text-gray-500">
                        <i className="bi bi-search"></i>
                    </button>

                </div>

                {/* Header Icons */}

                <div className="flex items-center gap-6">

                    {/* Account */}

                    <NavLink
                        to="/login"
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600 no-underline"
                    >
                        <i className="bi bi-person text-2xl text-red-500"></i>
                        <span className="text-xs">Account</span>
                    </NavLink>

                    {/* Wishlist */}

                    <NavLink
                        to="/wishlist"
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600 no-underline"
                    >
                        <i className="bi bi-heart text-2xl text-red-500"></i>
                        <span className="text-xs">Wishlist</span>
                    </NavLink>

                    {/* Cart */}

                    <NavLink
                        to="/cart"
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600 no-underline relative"
                    >

                        <i className="bi bi-cart text-2xl text-blue-600"></i>

                        <span className="text-xs">Cart</span>

                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cartCount}
                        </span>

                    </NavLink>

                    {/* Mobile Menu */}

                    <button className="md:hidden">
                        <i className="bi bi-list text-2xl"></i>
                    </button>

                </div>

            </div>

            {/* Navigation Bar */}

            <nav className="border-t border-gray-100">

                <div className="max-w-2xl mx-auto px-6 py-3 flex justify-between text-sm font-bold text-gray-700">

                    <NavLink to="/" className="hover:text-blue-600">
                        Home
                    </NavLink>

                    <NavLink to="/products" className="hover:text-blue-600">
                        Products
                    </NavLink>

                    <NavLink to="/categories" className="hover:text-blue-600">
                        Categories
                    </NavLink>

                    <NavLink to="/about" className="hover:text-blue-600">
                        About Us
                    </NavLink>

                    <NavLink to="/contact" className="hover:text-blue-600">
                        Contact
                    </NavLink>

                </div>

            </nav>

        </header>

    );
}

export default Header;