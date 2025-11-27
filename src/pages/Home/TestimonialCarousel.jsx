import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { name: "Ananya", review: "Coach Preethyram helped me regain my confidence and strength in just 3 months! Highly recommend the personalized guidance.", date: "2025-05-12" },
  { name: "Ravi", review: "Amazing coaching and guidance! Achieved my fitness goals faster than I imagined. Very motivating and supportive.", date: "2025-04-20" },
  { name: "Priya", review: "The programs are well-structured and very effective. I loved the nutrition guidance along with workouts!", date: "2025-03-15" },
  { name: "Kesavan", review: "The coaching and personalized guidance from Coach Preethyram helped me reach new heights in fitness. Truly transformative!", date: "2025-06-01" },
  { name: "Sahana", review: "I joined for strength training and noticed results in just 2 months. Great exercises and consistent support!", date: "2025-02-10" },
  { name: "Aditya", review: "The workouts are challenging but rewarding. Coach Preethyram ensures you stay motivated and focused.", date: "2025-01-25" },
  { name: "Meera", review: "I was struggling with consistency, but with Coach Preethyram’s guidance, I finally achieved my goals and feel more confident than ever.", date: "2025-03-05" },
];

// Custom Slick arrows
const NextArrow = ({ className, onClick }) => (
  <div
    className={`${className} text-coquelicot bg-white/90 rounded-full p-2 shadow-lg hover:bg-white cursor-pointer`}
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} text-coquelicot bg-white/90 rounded-full p-2 shadow-lg hover:bg-white cursor-pointer`}
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // Helper to truncate text for inline "Read More"
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength);
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-coquelicot font-semibold uppercase tracking-wide bg-gray-100/20 px-6 py-3 rounded-md inline-block">
          Our Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 text-gray-900">
          What Our Clients Say
        </h2>
      </div>

      {/* Carousel */}
      <Slider {...settings} className="max-w-6xl mx-auto">
        {testimonials.map((item, idx) => {
          const isLong = item.review.length > 120;
          return (
            <div key={idx} className="p-4 h-full flex">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 w-full">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-coquelicot text-white flex items-center justify-center font-bold text-lg">
                    {item.name[0]}
                  </div>
                  <div className="text-gray-900 font-semibold">{item.name}</div>
                  <div className="ml-auto text-sm text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  {isLong ? (
                    <>
                      {truncateText(item.review)}...
                      <span
                        onClick={() => handleReadMore(item)}
                        className="text-coquelicot font-semibold cursor-pointer ml-1 hover:underline"
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
          <div className="bg-white rounded-xl p-6 md:p-10 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={() => setModalOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-coquelicot text-white flex items-center justify-center font-bold text-lg">
                {activeReview.name[0]}
              </div>
              <div className="font-semibold text-gray-900">{activeReview.name}</div>
              <div className="ml-auto text-sm text-gray-400">
                {new Date(activeReview.date).toLocaleDateString()}
              </div>
            </div>
            <p className="text-gray-700">{activeReview.review}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialCarousel;
