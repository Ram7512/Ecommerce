import useFeaturedProducts from "../hooks/FeatureProductHook";
import { NavLink } from "react-router";
import { useCartStore } from "../Stores/CartStore";
function FeatureProductsCard() {
 const addToCart = useCartStore(
        (state) => state.addToCart
 );
    const { data, error, isLoading } = useFeaturedProducts();

    if (isLoading) {
        return (
            <p className="text-center py-10">
                Loading products...
            </p>
        );
    }

    if (error) {
        return (
            <p className="text-center text-red-500 py-10">
                Failed to load products.
            </p>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            <div className="flex justify-between items-center mb-10">

                <div>
                    <p className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
                        Our Collection
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-2">
                        Featured Products
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Discover our popular products and latest collections.
                    </p>
                </div>

                <button className="hidden sm:block text-blue-600 font-semibold hover:text-blue-800">
                    View All <i className="bi bi-arrow-right ml-2"></i>
                </button>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {data?.products.map((product) => (

                    <div
                        key={product.id}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition duration-300 no-underline"
                    >
                        <div className="relative h-52 bg-gray-100 overflow-hidden">

                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {Math.round(product.discountPercentage)}% OFF
                            </span>

                            <button
                                aria-label="Add to wishlist"
                                className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center text-gray-600 hover:text-red-500"
                            >
                                <i className="bi bi-heart text-lg"></i>
                            </button>

                        </div>

                        <div className="p-4">

                            <h3 className="font-semibold text-gray-800 truncate">
                                {product.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                {product.description}
                            </p>

                            <div className="flex items-center gap-1 mt-3 text-yellow-500">
                                <i className="bi bi-star-fill"></i>

                                <span className="text-sm text-gray-600">
                                    {product.rating}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mt-3">

                                <span className="text-xl font-bold text-gray-900">
                                    ${product.price}
                                </span>

                                <span className="text-sm text-gray-400 line-through">
                                    ${Math.round(
                                        product.price /
                                        (1 - product.discountPercentage / 100)
                                    )}
                                </span>

                            </div>
                            <div className="flex justify-between">

                                <button 
                                onClick={() => addToCart(product)}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-1.5 px-2.5 rounded-lg text-sm font-semibold transition">
                                    <i className="bi bi-cart-plus mr-2"></i>
                                    Add to Cart
                                </button>
                                <NavLink
                                    to={`/products/${product.id}`}
                                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-1.5 px-2.5 rounded-lg text-sm font-semibold transition">
                                    <i className="bi bi-eye mr-2"></i>
                                    View Detail
                                </NavLink>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default FeatureProductsCard;