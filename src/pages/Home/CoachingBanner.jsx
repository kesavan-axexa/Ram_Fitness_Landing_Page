import React from "react";
import { CheckCircle } from "lucide-react";

const CoachingBanner = () => {
  const points = [
    "Personalized training plans",
    "Nutrition & lifestyle guidance",
    "Goal-oriented fitness tracking",
    "Motivation & mental wellness",
  ];

  return (
    <section className="bg-richBlack2 text-white py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-40 md:gap-20 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-coquelicot font-semibold uppercase tracking-wide bg-white/10 px-6 py-3 rounded-md inline-block">
            Our Coaching
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Unlock Your True Potential with Us!
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle size={24} className="text-coquelicot flex-shrink-0" />
                <span className="text-gray-300  sm:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <img
            src="/images/coach-banner_1.webp"
            alt="Coach Preethyram"
            loading="lazy"
            className="rounded-xl shadow-xl w-full object-cover h-full max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CoachingBanner;
