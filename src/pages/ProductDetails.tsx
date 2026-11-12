import { useParams } from "react-router";
import useProductDetails from "../hooks/ProductDetailsHook";

function ProductDetails() {

    const { id } = useParams();

    const { product, error, isLoading } = useProductDetails(
        Number(id)
    );

    if (isLoading) {
        return <p className="text-center py-10">Loading product...</p>;
    }

    if (error || !product) {
        return <p className="text-center text-red-500 py-10">
            Product not found.
        </p>;
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Product Image */}
                <div className="bg-gray-100 rounded-2xl p-6">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-96 object-contain"
                    />
                </div>

                {/* Product Information */}
                <div>

                    <h1 className="text-3xl font-bold text-gray-900">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-2 mt-4">
                        <i className="bi bi-star-fill text-yellow-500"></i>
                        <span>{product.rating}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mt-6">
                        {product.description}
                    </p>

                    <div className="mt-6">
                        <span className="text-3xl font-bold">
                            ${product.price}
                        </span>

                        <span className="ml-3 text-red-500">
                            {Math.round(product.discountPercentage)}% OFF
                        </span>
                    </div>

                    <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                        <i className="bi bi-cart-plus mr-2"></i>
                        Add to Cart
                    </button>

                </div>

            </div>

        </section>
    );
}

export default ProductDetails;