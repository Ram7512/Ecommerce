import useProducts from "../hooks/ProductCardHook";
import ProductsCard from "../components/ProductCard";
import Header from "../components/Header";
import { useQueryState } from "nuqs";
import { useState, useEffect } from "react";

function Products() {
    const [search] = useQueryState("q", { defaultValue: "" });
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 700);

        return () => clearTimeout(timer);

    }, [search]);

    const { data, error, isLoading } = useProducts(debouncedSearch);

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

                {/* Products Grid */}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data?.products.map((product) => (
                        <ProductsCard
                            key={product.id}
                            product={product} />
                    ))}
                </div>
                {data?.products.length === 0 && (
                    <p className="col-span-full text-center text-gray-500 py-10">
                        No products found.
                    </p>
                )}


            </section>
        </>
    );
}

export default Products;