import { useState, useEffect, useCallback } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

function CarouselComponent() {
    const slides = [
        { url: "/images/slide-1.jpg" },
        { url: "/images/slide-2.jpg" },
        { url: "/images/slide-3.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right"); // Track the direction of the slide

    const nextSlide = useCallback(() => {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const autoScroll = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(autoScroll);
    }, [nextSlide]);

    return (
        <div className="max-w-full h-full bg-slate-300">
            <div className="max-w-[1900px] h-[1000px] w-full m-auto py-16 px-4 relative overflow-hidden group">
                <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                                index === currentIndex
                                    ? "translate-x-0"
                                    : direction === "right"
                                    ? "translate-x-full"
                                    : "-translate-x-full"
                            }`}
                            style={{
                                backgroundImage: `url(${slide.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    ))}
                </div>

                {/* Left Arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/90 text-white rounded-full cursor-pointer"
                    onClick={prevSlide}
                >
                    <FaCircleArrowLeft size={40} />
                </div>
                {/* Right Arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-black/90 rounded-full text-white cursor-pointer"
                    onClick={nextSlide}
                >
                    <FaCircleArrowRight size={40} />
                </div>
            </div>
        </div>
    );
}

export default CarouselComponent;
