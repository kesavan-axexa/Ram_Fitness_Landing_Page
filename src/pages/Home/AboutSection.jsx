import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative scroll-mt-10 overflow-hidden bg-white px-4 py-16 text-richBlack1 md:px-20 md:py-24"
        >
            <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 lg:flex-row">
                <div className="relative flex items-center justify-center lg:w-1/2">
                    <img
                        src="/images/about-circle-one.png"
                        alt=""
                        aria-hidden="true"
                        className="absolute left-[5%] top-[-30px] w-[250px] animate-pulse opacity-30 md:w-[400px]"
                    />
                    <img
                        src="/images/about-circle-two.png"
                        alt=""
                        aria-hidden="true"
                        className="absolute bottom-[-10px] right-[35%] w-[100px] animate-pulse opacity-40 md:w-[450px]"
                    />

                    <div className="relative z-10 h-[250px] w-[250px] overflow-hidden rounded-3xl border-[4px] border-coquelicot shadow-lg md:h-[400px] md:w-[400px]">
                        <img
                            src="/images/about-gym.webp"
                            alt="About Our Gym"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-20 top-3 z-50 rounded bg-coquelicot/60 px-6 py-3 font-semibold text-white shadow-md">
                        4+ Years of Excellence
                    </div>
                </div>

                <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
                    <p className="font-semibold uppercase tracking-wide text-coquelicot">About Us</p>

                    <h2 className="text-3xl font-extrabold leading-tight text-richBlack2 md:text-5xl">
                        Unleash the Power With <span className="text-coquelicot">Fitness & Discipline</span>
                    </h2>

                    <p className="text-base leading-relaxed text-sonicSilver md:text-lg">
                        At <span className="font-semibold text-richBlack1">RAMFITNESS</span>, we believe fitness is not just about lifting weights —
                        it’s about empowering your body and mind. Our goal is to inspire transformation through dedication, balance, and discipline.
                    </p>
                    <div className="mt-4 flex justify-center gap-8 lg:justify-start">
                        <a
                            href="#"
                            className="group flex items-center gap-2"
                        >
                            <img
                                src="/images/instagram.png"
                                alt="Instagram"
                                className="h-7 w-7 object-contain transition-transform group-hover:scale-110"
                            />
                            <span className="text-sm font-semibold text-richBlack2">72K+</span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center gap-2"
                        >
                            <img
                                src="/images/youtube.png"
                                alt="YouTube"
                                className="h-7 w-7 object-contain transition-transform group-hover:scale-110"
                            />
                            <span className="text-sm font-semibold text-richBlack2">10K+</span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center gap-2"
                        >
                            <img
                                src="/images/facebook.png"
                                alt="Facebook"
                                className="h-7 w-7 object-contain transition-transform group-hover:scale-110"
                            />
                            <span className="text-sm font-semibold text-richBlack2">1K+</span>
                        </a>
                    </div>

                    <Link 
                        to="/transform-now"
                        className="mt-4 inline-block transform rounded-md bg-coquelicot px-8 py-3 font-semibold text-white transition-transform  hover:bg-orange-600"
                    >
                        Explore Our Training Programs
                    </Link>
                </div>
            </div>

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 to-gainsboro/20"></div>
        </section>
    );
};

export default AboutSection;
