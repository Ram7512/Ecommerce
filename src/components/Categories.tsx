import type { CategoryCardType } from "../types/CategoryCardType";

function Categories({ category }: { category: CategoryCardType }) {
    return (
        <div key={category.id} className="group cursor-pointer">
            <div className="relative h-48 rounded-xl overflow-hidden">

                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-lg font-bold">
                        {category.name}
                    </h3>
                </div>

            </div>

            <p className="text-center text-sm text-gray-500 mt-3">
                {category.count}
            </p>
        </div>


    );
}

export default Categories;