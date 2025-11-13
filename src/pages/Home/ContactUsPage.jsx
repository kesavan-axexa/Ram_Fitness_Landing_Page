import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <section
      id="contact"
      className="bg-white text-richBlack1 scroll-mt-10  py-20 md:px-12 lg:px-20"
    >
      {/* ===== Heading ===== */}
      <div className="text-center mb-12">
        <p className="inline-block bg-coquelicot text-white px-6 py-2 rounded-md font-semibold uppercase tracking-wide">
          Contact Us
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
          Get In Touch With Us
        </h2>
        <p className="text-sonicSilver mt-3 max-w-2xl mx-auto">
          Have questions or want to join our fitness community? Reach out to us — 
          we’d love to hear from you and help you begin your transformation journey.
        </p>
      </div>

      {/* ===== Info + Form Section ===== */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch mt-12">
        {/* Left: Info Section */}
        <div className="bg-richBlack1/5 rounded-2xl shadow-md md:p-8 p-4 flex flex-col justify-between">
          <div className="space-y-8">
            {[
              {
                icon: <MapPin size={28} className="text-coquelicot" />,
                title: "Our Location",
                text: "Valappadi, Seliammakoil South, Salem - 636115",
              },
              {
                icon: <Phone size={28} className="text-coquelicot" />,
                title: "Call Us",
                text: "+91 812 220 1332 | +91 807 223 5630",
              },
              {
                icon: <Mail size={28} className="text-coquelicot" />,
                title: "Email Us",
                text: "info@ramfitnessclub.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="bg-coquelicot/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sonicSilver text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-start gap-5 mt-10">
            {[
              {
                href: "https://wa.me/918122201332",
                icon: <FaWhatsapp size={22} />,
              },
              {
                href: "https://instagram.com/",
                icon: <Instagram size={22} />,
              },
              {
                href: "https://facebook.com/",
                icon: <Facebook size={22} />,
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coquelicot/10 p-3 rounded-full hover:bg-coquelicot/20 transition"
              >
                <span className="text-coquelicot">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form Section */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-gradient-to-br from-richBlack1/5 to-richBlack2/10 rounded-2xl shadow-md p-8 border border-gray-200 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 text-richBlack1">
              Send Us a Message
            </h3>

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 p-3 outline-none transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md border border-gray-300 p-3 outline-none transition"
                required
              />
            </div>

            {/* Dropdown */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-richBlack1">
                Select Program
              </label>
              <select
                className="w-full rounded-md border border-gray-300 p-3 outline-none transition"
                required
              >
                <option value="">-- Choose a Category --</option>
                <option value="muscle">Muscle Building</option>
                <option value="cardio">Cardio</option>
                <option value="crossfit">CrossFit</option>
                <option value="yoga">Yoga</option>
                <option value="zumba">Zumba</option>
                <option value="personal">Personal Training</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full mb-6 rounded-md border border-gray-300 p-3 outline-none transition"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-coquelicot text-white font-semibold px-8 py-3 rounded-md hover:bg-orange-600 transition w-full md:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* ===== Map Section ===== */}
      <div className="max-w-full mx-auto mt-20 rounded-xl overflow-hidden shadow-xl">
        <iframe
          title="Ram Fitness Gym Location"
          src="https://www.google.com/maps?q=Valappadi,+Salem,+Tamil+Nadu&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          className="border-0 w-full h-96"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUsPage;
