import React from "react";
import {
  Dumbbell,
  HeartPulse,
  Bike,
  PersonStanding,
  Flame,
  Apple,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Muscle Building",
    icon: <Dumbbell size={28} className="text-coquelicot" />,
    image: "/images/class-5.webp",
    desc: "Sculpt and strengthen your body with our advanced resistance training and personal guidance.",
  },
  {
    id: 2,
    title: "Cardio & Endurance",
    icon: <HeartPulse size={28} className="text-coquelicot" />,
    image: "/images/class-8.webp",
    desc: "Boost stamina, improve heart health, and burn calories through dynamic cardio programs.",
  },
  {
    id: 3,
    title: "Power Yoga",
    icon: <PersonStanding size={28} className="text-coquelicot" />,
    image: "/images/class-9.webp",
    desc: "Rebalance body and mind with power yoga that enhances flexibility, focus, and inner calm.",
  },
  {
    id: 4,
    title: "Cycling Training",
    icon: <Bike size={28} className="text-coquelicot" />,
    image: "/images/class-11.webp",
    desc: "Push your limits and build endurance with fun, high-intensity indoor cycling sessions.",
  },
  {
    id: 5,
    title: "Fat Burning Sessions",
    icon: <Flame size={28} className="text-coquelicot" />,
    image: "/images/class-6.webp",
    desc: "Accelerate your weight loss journey with our scientifically designed fat-burning workouts.",
  },
  {
    id: 6,
    title: "Nutrition Guidance",
    icon: <Apple size={28} className="text-coquelicot" />,
    image: "/images/class-10.webp",
    desc: "Get personalized nutrition plans to complement your workouts and achieve sustainable results.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative bg-richBlack2 text-white py-20 px-4 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-richBlack1/70 z-0"></div>

      <div className="text-center mb-16 relative z-10">
        <p className="text-coquelicot font-semibold uppercase tracking-wide bg-white/5 px-6 py-3 rounded-md inline-block">
          Our Services
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mt-4">
          Transform Your Body, Mind & Lifestyle
        </h2>

        <p className="text-cadetGray mt-3 max-w-2xl mx-auto">
          Whether your goal is strength, endurance, or balance — our diverse
          programs and expert trainers help you achieve results that last.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 md:px-20">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white/90 text-richBlack1 rounded-xl shadow-lg overflow-hidden 
                       transform transition duration-300 hover:-translate-y-1 hover:shadow-xl
                       will-change-transform"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>

              <p className="text-sonicSilver text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
