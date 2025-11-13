import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactUsPage = () => {
    return (
        <section
            id="contact"
            className="scroll-mt-10 bg-white py-20 text-richBlack1 md:px-12 lg:px-20"
        >
            {/* ===== Heading ===== */}
            <div className="mb-12 text-center">
                <p className="inline-block rounded-md bg-coquelicot px-6 py-2 font-semibold uppercase tracking-wide text-white">Contact Us</p>
                <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Get In Touch With Us</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sonicSilver">
                    Have questions or want to join our fitness community? Reach out to us — we’d love to hear from you and help you begin your
                    transformation journey.
                </p>
            </div>

            {/* ===== Info + Form Section ===== */}
            <div className="mt-12 grid items-stretch gap-10 md:grid-cols-2">
                {/* Left: Info Section */}
                <div className="flex flex-col justify-between rounded-2xl bg-richBlack1/5 p-4 shadow-md md:p-8">
                    <div className="space-y-8">
                        {[
                            {
                                icon: (
                                    <MapPin
                                        size={28}
                                        className="text-coquelicot"
                                    />
                                ),
                                title: "Our Location",
                                text: "Valappadi, Seliammakoil South, Salem - 636115",
                            },
                            {
                                icon: (
                                    <Phone
                                        size={28}
                                        className="text-coquelicot"
                                    />
                                ),
                                title: "Call Us",
                                text: "+91 812 220 1332 | +91 807 223 5630",
                            },
                            {
                                icon: (
                                    <Mail
                                        size={28}
                                        className="text-coquelicot"
                                    />
                                ),
                                title: "Email Us",
                                text: "info@ramfitnessclub.com",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                            >
                                <div className="rounded-full bg-coquelicot/10 p-3">{item.icon}</div>
                                <div>
                                    <h4 className="mb-1 text-lg font-semibold">{item.title}</h4>
                                    <p className="text-sm text-sonicSilver">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-10 flex justify-start gap-5">
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
                                className="rounded-full bg-coquelicot/10 p-3 transition hover:bg-coquelicot/20"
                            >
                                <span className="text-coquelicot">{link.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Form Section */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const name = e.target.name.value;
                        const email = e.target.email.value;
                        const program = e.target.program.value;
                        const message = e.target.message.value;

                        // Construct the mailto link
                        const mailtoLink = `mailto:kesavan8388@gmail.com?subject=New Inquiry: ${encodeURIComponent(
                            program,
                        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProgram: ${program}\n\nMessage:\n${message}`)}`;

                        window.location.href = mailtoLink;
                    }}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-gradient-to-br from-richBlack1/5 to-richBlack2/10 p-8 shadow-md"
                >
                    <div>
                        <h3 className="mb-6 text-2xl font-bold text-richBlack1">Send Us a Message</h3>

                        {/* Name & Email */}
                        <div className="mb-5 grid gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full rounded-md border border-gray-300 p-3 outline-none transition"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full rounded-md border border-gray-300 p-3 outline-none transition"
                                required
                            />
                        </div>

                        {/* Dropdown */}
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-richBlack1">Select Program</label>
                            <select
                                name="program"
                                className="w-full rounded-md border border-gray-300 p-3 outline-none transition"
                                required
                            >
                                <option value="">-- Choose a Category --</option>
                                <option value="Muscle Building">Muscle Building</option>
                                <option value="Cardio">Cardio</option>
                                <option value="CrossFit">CrossFit</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Zumba">Zumba</option>
                                <option value="Personal Training">Personal Training</option>
                            </select>
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            className="mb-6 w-full rounded-md border border-gray-300 p-3 outline-none transition"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-coquelicot px-8 py-3 font-semibold text-white transition hover:bg-orange-600 md:w-auto"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* ===== Map Section ===== */}
            <div className="mx-auto mt-20 max-w-full overflow-hidden rounded-xl shadow-xl">
                <iframe
                    title="Ram Fitness Gym Location"
                    src="https://www.google.com/maps?q=Valappadi,+Salem,+Tamil+Nadu&output=embed"
                    width="100%"
                    height="400"
                    loading="lazy"
                    className="h-96 w-full border-0"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default ContactUsPage;
