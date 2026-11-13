import { useWishlistStore } from "../Stores/WishlistStore";
import { useCartStore } from "../Stores/CartStore";
import Header from "../components/Header";

function Wishlist() {

    const wishlistItems = useWishlistStore(
        (state) => state.wishlistItems
    );

    const removeFromWishlist = useWishlistStore(
        (state) => state.removeFromWishlist
    );

    const clearWishlist = useWishlistStore(
        (state) => state.clearWishlist
    );

    const addToCart = useCartStore(
        (state) => state.addToCart
    );

    return (
        <>
            <Header />
            <section className="max-w-7xl mx-auto px-6 py-10">

                {/* Heading */}

                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h1 className="text-3xl font-bold">
                            My Wishlist
                        </h1>

                        <p className="text-gray-500 mt-2">
                            {wishlistItems.length} items in your wishlist
                        </p>
                    </div>

                    {wishlistItems.length > 0 && (
                        <button
                            onClick={clearWishlist}
                            className="text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-50"
                        >
                            Clear Wishlist
                        </button>
                    )}

                </div>

                {/* Empty Wishlist */}

                {wishlistItems.length === 0 ? (

                    <div className="text-center py-20">

                        <i className="bi bi-heart text-6xl text-gray-300"></i>

                        <h2 className="text-2xl font-semibold mt-4">
                            Your Wishlist is Empty
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Add some products to your wishlist.
                        </p>

                    </div>

                ) : (

                    /* Wishlist Products */

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {wishlistItems.map((product) => (

                            <div
                                key={product.id}
                                className="border border-gray-200 rounded-xl p-4 shadow-sm"
                            >

                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-48 object-contain"
                                />

                                <h3 className="font-semibold text-lg mt-3">
                                    {product.title}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                    {product.description}
                                </p>

                                <p className="text-xl font-bold mt-3">
                                    ${product.price}
                                </p>

                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
                                >
                                    <i className="bi bi-cart-plus mr-2"></i>
                                    Add to Cart
                                </button>

                                <button
                                    onClick={() => removeFromWishlist(product.id)}
                                    className="w-full border border-red-500 text-red-500 py-2 rounded-lg mt-2 hover:bg-red-50"
                                >
                                    <i className="bi bi-trash mr-2"></i>
                                    Remove
                                </button>

                            </div>

                        ))}

                    </div>

                )}

            </section>
        </>
    );
}

export default Wishlist;