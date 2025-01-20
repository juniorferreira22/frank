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
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        const threshold = 50;
        const distance = touchStart - touchEnd;

        if (Math.abs(distance) > threshold) {
            if (distance > 0) {
                handleNext();
            } else {
                
                handlePrev();
            }
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div
            className="relative w-full max-w-2xl mx-auto overflow-hidden mt-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative h-64">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${index === currentIndex
                                ? "translate-x-0"
                                : index < currentIndex
                                    ? "-translate-x-full"
                                    : "translate-x-full"
                            }`}
                    >
                        <Image
                            src={image}
                            width={800}
                            height={400}
                            alt={`Imagem ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-50 bg-zinc-700 text-white p-2 hover:bg-zinc-800"
            >
                ❮
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-50 bg-zinc-700 text-white p-2 hover:bg-zinc-800"
            >
                ❯
            </button>
            <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex
                                ? "bg-zinc-800"
                                : "bg-zinc-400 hover:bg-zinc-600"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
