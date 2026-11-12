import { slides } from "../data/Carousel";
import { useState, useEffect } from "react";
const CarouselHome = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const slide = slides[currentSlide];

useEffect(() => {

    const interval = setInterval(() => {

        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );

    }, 4000);

    return () => clearInterval(interval);

}, []);

    return (
        <>

            <section className="max-w-12xl mx-auto px-4 mt-6">

                <div
                    className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden"
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "background-image 0.5s ease-in-out",
                    }}
                >

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-black/40"></div>


                    {/* Slide Content */}

                    <div className="relative z-10 h-full flex items-center px-8 md:px-20">

                        <div className="max-w-2xl text-white">

                            <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">

                                {slide.offer}

                            </span>

                            <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">

                                {slide.subtitle}

                            </p>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">

                                {slide.title}

                            </h1>

                            <p className="text-gray-200 text-base md:text-lg mt-5 leading-relaxed max-w-xl">

                                {slide.description}

                            </p>

                            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition duration-300">

                                {slide.button}

                                <i className="bi bi-arrow-right ml-3"></i>

                            </button>

                        </div>

                    </div>


                    {/* Previous Button */}

                    <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition"
                    >

                        <i className="bi bi-chevron-left text-xl"></i>

                    </button>


                    {/* Next Button */}

                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition"
                    >

                        <i className="bi bi-chevron-right text-xl"></i>

                    </button>
                     {/* Slide Indicators */}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">

                {slides.map((_, index) => (

                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            currentSlide === index
                                ? "w-9 bg-blue-500"
                                : "w-2.5 bg-white/70"
                        }`}
                    />

                ))}

            </div>
                </div>
            </section>


        </>
    )
}

export default CarouselHome