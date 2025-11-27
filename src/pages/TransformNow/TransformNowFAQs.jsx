import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What results can I expect from Coach Preethyram's programs?",
    a: "Most clients begin seeing noticeable improvements in energy, mobility, and physique within 3–4 weeks. Long‑term transformations depend on consistency, nutrition, training intensity, and lifestyle habits.",
  },
  {
    q: "Do I need prior fitness experience to join the programs?",
    a: "No! All programs are designed to suit beginners as well as advanced trainees. Coach Preethyram provides structured guidance tailored to your fitness level.",
  },
  {
    q: "How does online coaching work?",
    a: "Once enrolled, you receive personalized workout plans, nutrition guidance, weekly check‑ins, and progress tracking. Support is provided through WhatsApp and scheduled consultations.",
  },
  {
    q: "Can I switch programs later?",
    a: "Yes, you can upgrade or switch programs anytime. Coach Preethyram will help you select the best plan based on your evolving goals.",
  },
];

const TransformNowFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-coquelicot font-semibold uppercase tracking-wide inline-block bg-coquelicot/10 px-6 py-2 rounded-md">FAQs</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Find quick answers to the most common questions about our programs and coaching.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between p-5 text-left text-lg font-semibold text-gray-900 hover:bg-gray-100 transition"
            >
              {item.q}
              <ChevronDown
              size={18}
                className={`transition-transform flex-shrink-0 duration-300 ${openIndex === idx ? "rotate-180 text-coquelicot" : "text-gray-500"}`}
              />
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? "max-h-40 p-5" : "max-h-0 p-0"}`}
            >
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransformNowFAQs;
