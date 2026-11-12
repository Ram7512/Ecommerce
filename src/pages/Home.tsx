import Header from "../components/Header"
import CarouselHome from "../components/Carousel";
import Categories from "../components/Categories";
import { categoriesCardData } from "../data/CategoryCardData";
import FeatureProductsCard from "../components/FeatureProductCard";
const Home = () => {

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
                        <Categories category={category} />
                    ))}
                </div>
            </section>
            <FeatureProductsCard />
        </>
    )
}
export default Home