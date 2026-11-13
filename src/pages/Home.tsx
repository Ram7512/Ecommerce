import Header from "../components/Header"
import CarouselHome from "../components/Carousel";
import Categories from "../components/Categories";
import { categoriesCardData } from "../data/CategoryCardData";
import ProductsCard from "../components/ProductCard";
import useProducts from "../hooks/FeatureProductHook";
import { NavLink } from "react-router";
const Home = () => {
    const { data, error, isLoading } = useProducts();

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
        <>
            <Header />
            <CarouselHome />
            <section className="max-w-7xl mx-auto px-4 py-16">

                {/* Section Heading */}
                <div className="text-center mb-10">
                    <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                        Explore Collections
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Shop By Categories
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Explore our wide range of product categories.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

                    {categoriesCardData.map((category) => (
                        <Categories 
                        key={category.id}
                        category={category} />
                    ))}
                </div>
            </section>
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

                    <NavLink to="/products" className="hidden sm:block text-blue-600 font-semibold hover:text-blue-800">
                        View All <i className="bi bi-arrow-right ml-2"></i>
                    </NavLink>

                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data?.products.map((product) => (
                        <ProductsCard 
                        key={product.id}
                        product={product} />
                    ))}
                </div>
            </section>
        </>
    )
}
export default Home