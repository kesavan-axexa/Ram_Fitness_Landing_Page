import { ArrowRight, Dumbbell, CalendarCheck, ShieldCheck, Rocket, Sparkles } from "lucide-react";

const TransformNowSection = () => {
    const programs = [
        {
            title: "Fitness Consultation w/ Coach Preethyram",
            link: "https://rzp.io/rzp/talkwithcoach",
            icon: CalendarCheck,
        },
        {
            title: "Foundation Program",
            link: "https://rzp.io/rzp/foundationfitness",
            icon: Dumbbell,
        },
        {
            title: "Elite 90: Total Body Reboot",
            link: "https://rzp.io/rzp/elite90program",
            icon: Rocket,
        },
        {
            title: "Evolution 180: Rebuild & Raise",
            link: "https://rzp.io/rzp/evolution180program",
            icon: ShieldCheck,
        },
        {
            title: "The Year of New You 365",
            link: "https://rzp.io/rzp/yearprogram",
            icon: Sparkles,
        },
        {
            title: "Book Fitness Consultation",
            link: "https://rzp.io/rzp/talkwithcoach",
            icon: CalendarCheck,
            isButton: true, // ✅ flag to render as button style
        },
    ];

    return (
        <section
            id="coach-me"
            className="scroll-mt-10 bg-white px-6 py-20 text-gray-900 md:px-20"
        >
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-extrabold md:text-5xl">
                    Begin Your <span className="text-coquelicot">Fitness </span>Transformation
                </h2>

                <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
                    Thank you for contacting <span className="">us</span>!
                    <span className="font-semibold text-gray-900"> Explore our training programs</span> designed to transform your body and mind, and
                    take the first step toward your fitness journey.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
                {/* <h3 className="mb-8 text-center text-sonicSilver text-2xl font-bold">Our Training Programs</h3> */}

                <div className="grid gap-6 md:grid-cols-2">
                    {programs.map((item, index) => {
                        const Icon = item.icon;

                        const baseClasses =
                            "group flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:bg-gray-100 hover:shadow-md";
                        const buttonClasses =
                            "flex items-center justify-center gap-2 rounded-xl bg-coquelicot text-white p-6 font-semibold shadow-lg hover:bg-orange-600";

                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                className={item.isButton ? buttonClasses : baseClasses}
                            >
                                <div
                                    className={
                                        item.isButton
                                            ? "flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white"
                                            : "flex h-12 w-12 items-center justify-center rounded-lg bg-coquelicot/10 text-coquelicot transition group-hover:bg-coquelicot/20"
                                    }
                                >
                                    <Icon size={26} />
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <p className={item.isButton ? "md:text-lg text-base ml-2 font-semibold text-white" : "md:text-lg text-base font-semibold text-gray-900"}>
                                        {item.title}
                                    </p>
                                </div>

                                {!item.isButton && <ArrowRight className="text-coquelicot transition group-hover:translate-x-1" />}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TransformNowSection;
