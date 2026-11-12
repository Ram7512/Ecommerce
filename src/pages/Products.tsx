import useProducts from "../hooks/ProductCardHook";
import ProductsCard from "../components/ProductCard";
import Header from "../components/Header";
// import { NavLink } from "react-router";

function Products() {

    const { data, error, isLoading } = useProducts();

    if (isLoading) {
        return (
            <div className="text-center py-20">
                Loading products...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20 text-red-500">
                Failed to fetch products.
            </div>
        );
    }

    return (
        <>
            <Header />
            <section className="max-w-7xl mx-auto px-6 py-10">

                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        All Products
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Explore our latest products
                    </p>
                </div>

                {/* Product Count */}
                <p className="mb-5 text-gray-600">
                    Showing {data?.products.length} products
                </p>

                {/* Products Grid */}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data?.products.map((product) => (
                        <ProductsCard product={product} />
                    ))}
                </div>



            </section>
        </>
    );
}

export default Products;