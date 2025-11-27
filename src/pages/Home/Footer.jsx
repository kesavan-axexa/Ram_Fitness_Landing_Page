import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.location.href = `/#${id}`;
        }
    };

    const navItems = [
        { label: "Home", id: "home" },
        { label: "About Us", id: "about" },
        { label: "Our Gallery", id: "gallery" },
        { label: "Contact Us", id: "contact" },
    ];

    return (
        <footer className="bg-richBlack2 bg-hero-bg relative overflow-hidden rounded-t-2xl bg-cover bg-center bg-no-repeat px-4 pt-16 py-6 text-white md:px-12 lg:px-20">
            <div className="from-richBlack1/70 to-richBlack2/60 absolute inset-0 z-0 bg-gradient-to-br"></div>

            <div className="relative z-10 grid gap-12 md:grid-cols-3">
                <div>
                    <div className="mb-4 flex items-center space-x-2 text-2xl font-extrabold uppercase tracking-wide">
                        <img
                            src="/images/rfc-logo.png"
                            alt="Logo"
                            className="w-14"
                        />
                        <span>
                            <span className="text-coquelicot">RAM</span>FITNESS
                        </span>
                    </div>

                    <p className="text-sonicSilver mb-6">
                        At <span className="font-semibold text-white">Ram Fitness Club</span>, we’re dedicated to empowering your fitness journey in
                        Valappadi. Our goal is to help you stay consistent, build strength, and transform your lifestyle through expert guidance.
                    </p>

                    <div className="flex items-center gap-10">
                        <div>
                        <p className="font-semibold">Weekdays</p>
                        <p className="text-sonicSilver text-sm">5:00 AM – 10:00 PM</p>
                        </div>
                        <div>
                        <p className="font-semibold">Weekends</p>
                        <p className="text-sonicSilver text-sm">5:00 AM – 2:00 PM</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="mb-4 inline-block border-b-2 border-coquelicot text-lg font-bold">Quick Links</h4>
                    <ul className="text-sonicSilver space-y-2">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="cursor-pointer transition-colors hover:text-coquelicot"
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4 inline-block border-b-2 border-coquelicot text-lg font-bold">Contact Info</h4>
                    <div className="text-sonicSilver mb-3 flex items-start space-x-3">
                        <MapPin
                            className="mt-1 text-coquelicot"
                            size={18}
                        />
                        <p>
                            Valappadi, Seliammakoil South, <br />
                            Salem - 636115
                        </p>
                    </div>
                    <div className="text-sonicSilver mb-2 flex items-center space-x-3">
                        <Phone
                            className="text-coquelicot"
                            size={18}
                        />
                        <p>+91 812 220 1332, +91 807 223 5630</p>
                    </div>
                    {/* <div className="text-sonicSilver mb-2 flex items-center space-x-3">
                        <Phone
                            className="text-coquelicot"
                            size={18}
                        />
                        <p>+91 807 223 5630</p>
                    </div> */}
                    <div className="text-sonicSilver flex items-center space-x-3">
                        <Mail
                            className="text-coquelicot"
                            size={18}
                        />
                        <p>info@ramfitnessclub.com</p>
                    </div>
                </div>
            </div>

            <div className="text-sonicSilver relative z-10 mt-12 border-t border-white/10 pt-6 text-center">
                © {new Date().getFullYear()} <span className="font-semibold text-white/80">Ram Fitness Club.</span>  All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
