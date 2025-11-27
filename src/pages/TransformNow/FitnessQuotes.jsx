import React from "react";
import { Dumbbell, HeartPulse, Apple, Flame } from "lucide-react";

const FitnessQuotes = () => {
  return (
    <div className="w-full overflow-hidden">
      <section
        className="relative h-[70vh] md:h-[85vh] w-full bg-fixed bg-center bg-cover flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('/images/coach-banner.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            "Strong Mind. Strong Body. Stronger You."
          </h1>
          <p className="text-cadetGray mt-4 md:text-lg">
            Fitness is not about being better than someone else — it's about being
            better than you used to be.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white text-richBlack1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full flex justify-center">
            <img
              src="/images/prettyram-coach.webp"
              alt="Coach PrettyRam"
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
            />
          </div>

          <div>
            <p className="text-coquelicot font-semibold uppercase tracking-wide mb-3">
              Meet Your Coach
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Coach <span className="text-coquelicot">PrettyRam</span>
            </h2>
            
            <p className="text-sonicSilver leading-relaxed mb-6 text-sm md:text-base">
              PrettyRam is a certified fitness coach with a passion for empowering
              individuals—especially women—to build confidence, strength, and a
              balanced lifestyle. With expertise in fat loss, muscle building,
              nutrition, and overall wellness, her methods are sustainable, effective,
              and tailored to your personal journey.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3 p-4 bg-richBlack1/5 rounded-xl">
                <Dumbbell className="text-coquelicot" />
                <span className="font-medium text-richBlack1 text-sm md:text-base">
                  Strength Training
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-richBlack1/5 rounded-xl">
                <HeartPulse className="text-coquelicot" />
                <span className="font-medium text-richBlack1 text-sm md:text-base">
                  Fat Loss Programs
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-richBlack1/5 rounded-xl">
                <Apple className="text-coquelicot" />
                <span className="font-medium text-richBlack1 text-sm md:text-base">
                  Nutrition Guidance
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-richBlack1/5 rounded-xl">
                <Flame className="text-coquelicot" />
                <span className="font-medium text-richBlack1 text-sm md:text-base">
                  High-Intensity Workouts
                </span>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-coquelicot text-white font-semibold rounded-xl hover:bg-coquelicot/90 transition-all">
              Coach Me Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitnessQuotes;
