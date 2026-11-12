function Header() {

    return (

        <header className="w-full bg-white shadow-sm">

            {/* Main Header */}

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">

                {/* Logo */}

                <div className="text-2xl font-bold text-blue-600">
                    ShopEase
                </div>


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

                    <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                        <i className="bi bi-person text-2xl text-red-500"></i>
                        <span className="text-xs">Account</span>
                    </button>

                    <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                       <i className="bi bi-heart text-2xl text-red-500"></i>
                        <span className="text-xs">Wishlist</span>
                    </button>

                    <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 relative">

                       <i className="bi bi-cart text-2xl text-blue-600"></i>

                        <span className="text-xs">Cart</span>

                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            0
                        </span>

                    </button>

                    <button className="md:hidden">
                        <i className="bi bi-list"></i>
                    </button>

                </div>

            </div>


            {/* Navigation Bar */}

            <nav className="border-t border-gray-100">

                <div className="max-w-7xl mx-auto px-6 py-3 flex gap-10 text-sm font-medium text-gray-700">

                    <a href="/" className="hover:text-blue-600">
                        Home
                    </a>

                    <a href="/products" className="hover:text-blue-600">
                        Products
                    </a>

                    <a href="/categories" className="hover:text-blue-600">
                        Categories
                    </a>

                    <a href="/about" className="hover:text-blue-600">
                        About Us
                    </a>

                    <a href="/contact" className="hover:text-blue-600">
                        Contact
                    </a>

                </div>

            </nav>

        </header>

    );

}

export default Header;