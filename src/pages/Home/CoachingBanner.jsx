import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CoachingBanner = () => {
    const points = [
        "Personalized training plans",
        "Nutrition & lifestyle guidance",
        "Goal-oriented fitness tracking",
        "Motivation & mental wellness",
    ];

    return (
        <section className="bg-richBlack2 px-4 py-20 text-white sm:px-6 md:px-12 lg:px-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-20 lg:grid-cols-2 lg:gap-40">
                <div className="space-y-6">
                    <p className="inline-block rounded-md bg-white/10 px-6 py-3 font-semibold uppercase tracking-wide text-coquelicot">
                        Our Coaching
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">Unlock Your True Potential with Us!</h2>

                    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {points.map((point, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle
                                    size={24}
                                    className="flex-shrink-0 text-coquelicot"
                                />
                                <span className="text-gray-300 sm:text-base">{point}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to={"/transform-now"}
                        className="inline-block transform rounded-md bg-coquelicot px-8 py-3 font-semibold text-white transition-transform"
                    >
                        Meet our coach
                    </Link>
                </div>

                <div className="w-full">
                    <img
                        src="/images/coach-banner_1.webp"
                        alt="Coach Preethyram"
                        loading="lazy"
                        className="h-full max-h-[500px] w-full rounded-xl object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default CoachingBanner;
