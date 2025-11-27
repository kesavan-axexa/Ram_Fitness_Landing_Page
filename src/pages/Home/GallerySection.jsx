import React from "react";

const galleryImages = [
    "/images/class-5.webp",
    "/images/class-8.webp",
    "/images/class-9.webp",
    "/images/class-11.webp",
    "/images/class-6.webp",
    "/images/class-10.webp",
];

const GallerySection = () => {
    const getGridCols = (length) => {
        if (length % 4 === 0) return "grid-cols-4";
        if (length % 3 === 0) return "grid-cols-3";
        if (length % 2 === 0) return "grid-cols-2";
        return "grid-cols-4";
    };

    const gridColsClass = getGridCols(galleryImages.length);

    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-gray-50 px-4 py-20 md:px-12 lg:px-20"
        >
            {/* Header */}
            <div className="mb-16 text-center">
                <p className="inline-block rounded-md bg-gray-100/20 px-6 py-3 font-semibold uppercase tracking-wide text-coquelicot">Our Gallery</p>

                <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">See Transformations & Coaching in Action</h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                    From client transformations to our coaching sessions, explore the journey through our gallery.
                </p>
            </div>

            {/* Dynamic Grid */}
            <div className={`grid auto-rows-fr grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:${gridColsClass} `}>
                {galleryImages.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl shadow-lg transition duration-300 hover:shadow-2xl"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            loading="lazy"
                            className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {/* Shadow overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
