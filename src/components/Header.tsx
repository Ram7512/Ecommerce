import { useCartStore } from "../Stores/CartStore";
import { NavLink } from "react-router";
import { useQueryState, parseAsInteger } from "nuqs";
import { useNavigate } from "react-router";
import { useWishlistStore } from "../Stores/WishlistStore";
import { useAuthStore } from "../Stores/AuthenticationStore";



function Header() {

    const [search, setSearch] = useQueryState("q", { defaultValue: "" });
    const [, setPage] = useQueryState("page",
        parseAsInteger.withDefault(1)
    );
    const navigate = useNavigate();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate(`/products?q=${encodeURIComponent(search)}`);
    };

    const cartItems = useCartStore((state) => state.cartItems);
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const wishlistItems = useWishlistStore(
        (state) => state.wishlistItems
    );

    const wishlistCount = wishlistItems.length;
    console.log("Header Wishlist Items:", wishlistCount);

    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

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

                    <form
                        onSubmit={handleSearch}
                        className="hidden md:flex flex-1 max-w-xl relative"
                    >
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>

                {/* Header Icons */}

                <div className="flex items-center gap-6">

                    {/* Account */}

                    {user ? (
                        <div className="flex items-center gap-3">

                            <span className="font-medium text-gray-700">
                                Hi, {user.firstName}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="text-red-500 hover:text-red-700 font-medium"
                            >
                                Logout
                            </button>

                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className="text-gray-700 hover:text-blue-600 no-underline"
                        >
                            <i className="bi bi-person mr-2"></i>
                            Account
                        </NavLink>
                    )}

                    {/* Wishlist */}

                    <NavLink
                        to="/wishlist"
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600 no-underline relative"
                    >
                        <i className="bi bi-heart text-xl text-red-600"></i>

                        <span className="text-xs">Wishlist</span>

                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {wishlistCount}
                        </span>
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

                    <NavLink to="/products"
                        onClick={() => {
                            setSearch(null);
                            setPage(1);
                        }}
                        className="hover:text-blue-600">
                        Products
                    </NavLink>

                    <NavLink to="/posts" className="hover:text-blue-600">
                        Posts
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