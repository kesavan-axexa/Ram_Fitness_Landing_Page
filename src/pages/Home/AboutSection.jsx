import React from "react";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="text-richBlack1 relative overflow-hidden scroll-mt-10 bg-white px-4 py-16 md:px-20 md:py-24"
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
                            src="/images/about-gym.jpg"
                            alt="About Our Gym"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-20 z-50 top-3 rounded bg-coquelicot/60 px-6 py-3  font-semibold text-white shadow-md">
                        4+ Years of Excellence
                    </div>
                </div>

                <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
                    <p className="font-semibold uppercase tracking-wide text-coquelicot">About Us</p>

                    <h2 className="text-richBlack2 text-3xl font-extrabold leading-tight md:text-5xl">
                        Unleash the Power With <span className="text-coquelicot">Fitness & Discipline</span>
                    </h2>

                    <p className="text-sonicSilver text-base leading-relaxed md:text-lg">
                        At <span className="text-richBlack1 font-semibold">RAMFITNESS</span>, we believe fitness is not just about lifting weights — it’s
                        about empowering your body and mind. Our goal is to inspire transformation through dedication, balance, and discipline.
                    </p>

                    <p className="text-cadetGray text-base leading-relaxed md:text-lg">
                        From beginners to professionals, we provide expert guidance, advanced equipment, and a motivating environment to help you
                        achieve your best version, one workout at a time.
                    </p>

                    <a
                        href="#programs"
                        className="mt-4 inline-block transform rounded-md bg-coquelicot px-8 py-3 font-semibold text-white transition-transform hover:scale-105 hover:bg-orange-600"
                    >
                        Explore Our Services
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 to-gainsboro/20"></div>
        </section>
    );
};

export default AboutSection;
