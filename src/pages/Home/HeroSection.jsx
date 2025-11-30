import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const words = ["Stronger!", "Braver!", "Faster!"];
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setAnimate(false);
            }, 500);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            aria-label="hero"
            className="bg-richBlack2 bg-hero-bg relative overflow-hidden bg-cover bg-center py-16 text-white md:py-24"
        >
            <div className="container relative z-10 mx-auto mt-14 flex flex-col items-center justify-between px-4 md:mt-0 md:px-20 lg:flex-row">
                
                {/* ===== Hero Content ===== */}
                <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
                    <p className="text-silverMetallic text-xl font-light md:text-2xl">
                        <strong className="mr-2 font-semibold text-coquelicot">The Best</strong>
                        Fitness Club
                    </p>

                    <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                        Push Beyond Your <br />
                        Limits And, <br className="hidden md:block" />

                        <span className="inline-flex gap-3">
                            Become{" "}
                            <span
                                key={index}
                                className={`text-coquelicot inline-block ${animate ? "animate-slideDow" : ""}`}
                            >
                                {words[index]}
                            </span>
                        </span>
                    </h1>

                    <p className="text-cadetGray mx-auto max-w-lg text-lg lg:mx-0">
                        Greatness begins when you refuse to stop. Every rep, every drop of sweat, 
                        brings you closer to the best version of yourself. Step inside, train hard, 
                        and let your transformation begin.
                    </p>

                    <Link
                        to="/transform-now"
                        className="inline-block transform rounded-md bg-coquelicot px-8 py-3 font-semibold text-white transition-transform hover:scale-105 hover:bg-orange-600"
                    >
                        Become Unstoppable
                    </Link>
                </div>

                {/* ===== Hero Banner ===== */}
                <div className="relative mt-12 flex justify-center lg:mt-10 lg:w-1/2">
                    <img
                        src="/images/hero-section_1.png"
                        alt="hero banner"
                        className="relative z-10 md:h-[75vh] w-[300px] object-contain md:w-[800px]"
                    />

                    <img
                        src="/images/hero-circle-one.png"
                        className="absolute left-0 top-0 w-[200px] animate-pulse opacity-30 md:w-[400px]"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        src="/images/hero-circle-two.png"
                        className="absolute bottom-0 right-0 w-[250px] opacity-20 md:w-[450px]"
                        alt=""
                        aria-hidden="true"
                    />

                    <img
                        src="/images/heart-rate.svg"
                        alt="heart rate"
                        className="absolute left-[-20px] top-7 w-[100px] animate-pulse md:left-0 md:w-[180px]"
                    />
                    <img
                        src="/images/calories.svg"
                        alt="calories"
                        className="absolute bottom-32 right-[-20px] w-[150px] animate-bounce md:-right-12 md:w-[200px]"
                    />
                </div>
            </div>

            <div className="from-richBlack1/60 to-richBlack2/10 absolute inset-0 z-0 bg-gradient-to-br"></div>
        </section>
    );
};

export default HeroSection;
