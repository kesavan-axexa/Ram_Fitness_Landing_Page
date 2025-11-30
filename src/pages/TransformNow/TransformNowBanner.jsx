import React from "react";
import { Instagram } from "lucide-react";

const TransformNowBanner = () => {
    const instagramUrl = "https://www.instagram.com/rtr.preethy/?hl=en";

    const openInstagram = () => {
        window.open(instagramUrl, "_blank");
    };

    return (
        <section
            className="relative flex h-[70vh] w-full items-center justify-center bg-cover bg-fixed bg-center pt-10 md:h-[65vh]"
            style={{
                backgroundImage: "url('/images/coach-banner_1.webp')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[4px]"></div>

            <div className="relative z-10 max-w-3xl px-6 text-center md:px-0">
                <p className="inline-block rounded-lg bg-coquelicot/30 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white">
                    Meet Your Coach
                </p>

                <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
                    Coach <span className="text-coquelicot">Preethyram</span>
                </h1>

                <p className="mt-4 text-base leading-relaxed text-gray-200 md:text-lg">
                    A certified fitness expert & transformation coach —{" "}
                    <span className="font-semibold text-coquelicot">trusted by 80.8K+ followers on Instagram</span>, helping people unlock their
                    healthiest, strongest, and most confident version.
                </p>

                <div
                    onClick={openInstagram}
                    className="mx-auto mt-6 flex w-fit cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm font-medium">Follow on instagram</span>
                </div>
            </div>
        </section>
    );
};

export default TransformNowBanner;
