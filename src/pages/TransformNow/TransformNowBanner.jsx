const TransformNowBanner = () => {
    return (
        <section
            className="relative flex h-[70vh] tracking-wide pt-10 w-full items-center justify-center bg-cover bg-fixed bg-center md:h-[65vh]"
            style={{
                backgroundImage: "url('/images/coach-banner_1.webp')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

            <div className="relative z-10 max-w-3xl px-6 text-center md:px-0">
                
                <p className="text-white text-sm font-semibold uppercase tracking-wide bg-coquelicot/30 px-6 py-2.5 rounded-lg  inline-block">
                    Meet Your Coach
            </p>

                <h1 className="mt-4 text-4xl font-bold  text-white md:text-6xl">
                    Coach <span className="text-coquelicot">Preethyram</span>
                </h1>

                <p className="mt-4 text-base leading-relaxed text-gray-200 md:text-lg">
                    A certified fitness expert & transformation coach helping people unlock their 
                    healthiest, strongest and most confident version.
                </p>
            </div>
        </section>
    );
};

export default TransformNowBanner;
