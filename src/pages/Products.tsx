import useProducts from "../hooks/ProductCardHook";
import ProductsCard from "../components/ProductCard";
import Header from "../components/Header";
import { useQueryState, parseAsInteger } from "nuqs";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Products() {
    const [search] = useQueryState("q", { defaultValue: "" });
    const [page, setPage] = useQueryState(
        "page",
        parseAsInteger.withDefault(1)
    );
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            if (search !== debouncedSearch) {
            setPage(1);
        }
        }, 700);

        return () => clearTimeout(timer);

    }, [search]);

    // useEffect(() => {
    //     setPage(1);
    // }, [search, setPage]);

    const { data, error, isLoading, limit } = useProducts(debouncedSearch, page);

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
    const totalPages = Math.ceil(
        (data?.total ?? 0) / limit
    );

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

                {/* Pagination */}

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-10">

                        {/* Previous Button */}

                        <button
                            disabled={page <= 1}
                            onClick={() => setPage(page - 1)}
                            className="px-4 py-2 border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            Previous
                        </button>

                        {/* Page Numbers */}

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((pageNumber) => (

                            <button
                                key={pageNumber}
                                onClick={() => setPage(pageNumber)}
                                className={`w-10 h-10 rounded-lg border ${page === pageNumber
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                {pageNumber}
                            </button>

                        ))}

                        {/* Next Button */}

                        <button
                            disabled={page >= totalPages}
                            onClick={() => setPage(page + 1)}
                            className="px-4 py-2 border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            Next
                        </button>

                    </div>
                )}
            </section>
            <Footer />
        </>
    );
}

export default Products;