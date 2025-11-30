import React from "react";

const TransformNowAchievementSection = () => {
    const achievements = [
        {
            title: "Certified Fitness Trainer",
            desc: "Build strength, endurance, and discipline with expert, safe, and structured fitness coaching.",
        },
        {
            title: "Prep Coach",
            desc: "Specialized guidance for competition prep, stage conditioning, and complete physique transformation.",
        },
        {
            title: "Nutritionist",
            desc: "Science-based nutrition strategies designed to help you burn fat, build muscle, and stay healthy.",
        },
        {
            title: "Functional Fitness",
            desc: "Improve mobility, stability, and everyday body performance through functional training.",
        },
        {
            title: "Yoga",
            desc: "Enhance flexibility, breath control, and mental clarity through personalised yoga sessions.",
        },
        {
            title: "Aerialist Training",
            desc: "Master graceful aerial movements while developing balance, strength, and full-body control.",
        },
        {
            title: "Zumba",
            desc: "Fun and energetic dance workouts to help you burn calories, lose weight, and stay active.",
        },
        {
            title: "Classical Dance",
            desc: "Develop rhythm, posture, grace, and full-body coordination through classical dance training.",
        },
    ];

    const phoneNumber = "918072235630";

    //   const handleWhatsApp = (title) => {
    //     const message = `Hi! I’m interested in your ${title} coaching. Please share more details.`;
    //     const encodedMessage = encodeURIComponent(message);
    //     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    //     window.open(url, "_blank");
    //   };

    const handleWhatsApp = (title) => {
        const message = `Hi! I’m interested in your ${title} coaching. Please share more details.`;
        const encoded = encodeURIComponent(message);
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`;
        window.open(url, "_blank");
    };

    return (
        <section className="bg-white px-6 py-16 md:px-20 md:py-20">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-2xl font-extrabold text-richBlack2 md:text-4xl">
                    All-in-One <span className="text-coquelicot">Coaching Expertise</span>
                </h2>

                {/* Subtitle */}
                <p className="mx-auto mt-3 max-w-2xl text-sonicSilver md:text-lg">
                    Get coached across multiple disciplines — fitness, nutrition, yoga, zumba, dance, and performance training — everything in one
                    place.
                </p>

                {/* Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="flex h-full flex-col rounded-2xl border border-gainsboro bg-white p-6 shadow-sm transition-all hover:border-coquelicot hover:shadow"
                        >
                            <h3 className="mb-2 text-lg font-bold text-richBlack1">{item.title}</h3>

                            <p className="mb-6 text-sm leading-relaxed text-sonicSilver">{item.desc}</p>

                            <button
                                onClick={() => handleWhatsApp(item.title)}
                                className="mt-auto w-full rounded-lg border border-coquelicot py-2 text-sm font-semibold text-coquelicot transition-all duration-100 hover:bg-coquelicot hover:text-white"
                            >
                                Know more
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransformNowAchievementSection;
