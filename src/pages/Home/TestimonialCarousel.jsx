import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Ananya",
        review: "Coach Preethyram helped me regain my confidence and strength in just 3 months! Highly recommend the personalized guidance.",
        date: "2025-05-12",
    },
    {
        name: "Ravi",
        review: "Amazing coaching and guidance! Achieved my fitness goals faster than I imagined. Very motivating and supportive.",
        date: "2025-04-20",
    },
    {
        name: "Priya",
        review: "The programs are well-structured and very effective. I loved the nutrition guidance along with workouts!",
        date: "2025-03-15",
    },
    {
        name: "Kesavan",
        review: "The coaching and personalized guidance from Coach Preethyram helped me reach new heights in fitness. Truly transformative!",
        date: "2025-06-01",
    },
    {
        name: "Sahana",
        review: "I joined for strength training and noticed results in just 2 months. Great exercises and consistent support!",
        date: "2025-02-10",
    },
    {
        name: "Aditya",
        review: "The workouts are challenging but rewarding. Coach Preethyram ensures you stay motivated and focused.",
        date: "2025-01-25",
    },
    {
        name: "Meera",
        review: "I was struggling with consistency, but with Coach Preethyram’s guidance, I finally achieved my goals and feel more confident than ever.",
        date: "2025-03-05",
    },
];

// Custom Slick arrows
const NextArrow = ({ className, onClick }) => (
    <div
        className={`${className} cursor-pointer rounded-full bg-white/90 p-2 text-coquelicot shadow-lg hover:bg-white`}
        onClick={onClick}
    >
        <ChevronRight size={24} />
    </div>
);

const PrevArrow = ({ className, onClick }) => (
    <div
        className={`${className} cursor-pointer rounded-full bg-white/90 p-2 text-coquelicot shadow-lg hover:bg-white`}
        onClick={onClick}
    >
        <ChevronLeft size={24} />
    </div>
);

const TestimonialCarousel = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeReview, setActiveReview] = useState(null);

    const handleReadMore = (testimonial) => {
        setActiveReview(testimonial);
        setModalOpen(true);
    };

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        // arrows: true,
        dots: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 2 } }, // tablets & small laptops
            { breakpoint: 1024, settings: { slidesToShow: 1 } }, // iPad portrait & mobiles
            { breakpoint: 768, settings: { slidesToShow: 1 } }, // Mobile
            { breakpoint: 480, settings: { slidesToShow: 1 } }, // Small mobile
        ],
    };

    // Helper to truncate text for inline "Read More"
    const truncateText = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength);
    };

    return (
        <section className="relative bg-gray-50 px-6 py-20 md:px-20">
            {/* Header */}
            <div className="mx-auto mb-12 max-w-6xl text-center">
                <p className="inline-block rounded-md bg-gray-100/20 px-6 py-3 font-semibold uppercase tracking-wide text-coquelicot">
                    Our Testimonials
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-5xl">What Our Clients Say</h2>
            </div>

            {/* Carousel */}
            <Slider
                {...settings}
                className="mx-auto max-w-6xl"
            >
                {testimonials.map((item, idx) => {
                    const isLong = item.review.length > 120;
                    return (
                        <div
                            key={idx}
                            className="flex h-full p-4"
                        >
                            <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coquelicot text-lg font-bold text-white">
                                        {item.name[0]}
                                    </div>
                                    <div className="font-semibold text-gray-900">{item.name}</div>
                                    <div className="ml-auto text-sm text-gray-400">{new Date(item.date).toLocaleDateString()}</div>
                                </div>
                                <p className="mt-2 text-gray-600">
                                    {isLong ? (
                                        <>
                                            {truncateText(item.review)}...
                                            <span
                                                onClick={() => handleReadMore(item)}
                                                className="ml-1 cursor-pointer font-semibold text-coquelicot hover:underline"
                                            >
                                                Read More
                                            </span>
                                        </>
                                    ) : (
                                        item.review
                                    )}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Slider>

            {/* Modal for full testimonial */}
            {modalOpen && activeReview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg rounded-xl bg-white p-6 md:p-10">
                        <button
                            className="absolute right-4 top-4 text-gray-500 hover:text-gray-900"
                            onClick={() => setModalOpen(false)}
                        >
                            <X size={24} />
                        </button>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coquelicot text-lg font-bold text-white">
                                {activeReview.name[0]}
                            </div>
                            <div className="font-semibold text-gray-900">{activeReview.name}</div>
                            <div className="ml-auto text-sm text-gray-400">{new Date(activeReview.date).toLocaleDateString()}</div>
                        </div>
                        <p className="text-gray-700">{activeReview.review}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestimonialCarousel;
