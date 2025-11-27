import React, { useEffect, useRef, useState } from "react";

export const AchievementsSection = () => {
    const stats = [
        { value: 100, suffix: "+", label: "Transformations Done" },
        { value: 4, suffix: "+", label: "Years of Experience" },
        { value: 100, suffix: "K+", label: "On Social Media" },
        { value: 4.8, suffix: "/5", label: "Average Rating" },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 },
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-white px-4 py-16 text-richBlack1 md:px-20 md:py-24"
            id="achievements"
        >
            <div className="container mx-auto text-center">
                <p className="font-semibold uppercase tracking-wide text-coquelicot">Our Achievements</p>

                <h2 className="mt-4 text-3xl font-extrabold text-richBlack2 md:text-5xl">
                    Our Proven <span className="text-coquelicot">Track Record</span>
                </h2>

                <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4">
                    {stats.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center ${idx !== stats.length - 1 ? "md:border-r md:border-gray-300" : ""}`}
                        >
                            <AnimatedCounter
                                value={item.value}
                                suffix={item.suffix}
                                label={item.label}
                                start={isVisible}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AnimatedCounter = ({ value, suffix, label, start }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTimestamp = null;
        const duration = 1200; // animation speed

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount((progress * value).toFixed(value % 1 === 0 ? 0 : 1));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [start, value]);

    return (
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-5xl">
                {count}
                {suffix}
            </span>
            <p className="mt-2 text-center text-sm font-medium text-sonicSilver md:text-base">{label}</p>
        </div>
    );
};
