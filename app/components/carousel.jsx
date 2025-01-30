'use client';
import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
    const images = [
        "/carousel/image1.jpeg",
        "/carousel/image2.jpeg",
        "/carousel/image3.jpeg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === "next") {
                return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            } else {
                return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            }
        });
    };

    const handleTouch = (start, end) => {
        const threshold = 50;
        if (Math.abs(start - end) > threshold) {
            handleNavigation(start > end ? "next" : "prev");
        }
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden mt-4">
            <div className="relative h-64">
                {images.map((image, index) => (
                    <ImageWrapper key={index} image={image} isActive={index === currentIndex} />
                ))}
            </div>
            <NavigationButton direction="prev" onClick={() => handleNavigation("prev")} />
            <NavigationButton direction="next" onClick={() => handleNavigation("next")} />
            <IndicatorDots images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
    );
};

const ImageWrapper = ({ image, isActive }) => (
    <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${isActive ? "translate-x-0" : "translate-x-full"}`}>
        <Image src={image} width={800} height={400} alt="Carousel Image" className="w-full h-full object-cover" />
    </div>
);

const NavigationButton = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 ${direction === "prev" ? "left-4" : "right-4"} transform -translate-y-1/2 opacity-50 bg-zinc-700 text-white p-2 hover:bg-zinc-800`}
    >
        {direction === "prev" ? "❮" : "❯"}
    </button>
);

const IndicatorDots = ({ images, currentIndex, setCurrentIndex }) => (
    <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-zinc-800" : "bg-zinc-400 hover:bg-zinc-600"}`}
            ></button>
        ))}
    </div>
);

export default Carousel;
