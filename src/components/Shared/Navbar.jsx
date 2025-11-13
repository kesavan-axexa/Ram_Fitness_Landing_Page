import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Handle navigation click
    const handleNavClick = (e, id) => {
        e.preventDefault();
        if (location.pathname === "/") {
            scrollToSection(id);
        } else {
            window.location.href = `/#${id}`;
        }
        setIsOpen(false);
    };

    const navItems = [
        { label: "Home", id: "home" },
        { label: "About Us", id: "about" },
        { label: "Our Services", id: "services" },
        { label: "Contact Us", id: "contact" },
    ];

    return (
        <nav
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
                scrolled ? "bg-richBlack1/40 shadow-lg backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-8 md:px-20">
                {/* ===== Logo ===== */}
                <div className="flex items-center space-x-2 text-2xl font-extrabold uppercase tracking-wide text-white">
                    <img
                        src="/images/class-icon-1.png"
                        alt="Logo"
                        className="w-10"
                    />{" "}
                    <span className="text-coquelicot">RAM</span>FITNESS
                </div>

                {/* ===== Desktop Nav Links ===== */}
                <ul className="hidden space-x-8 font-medium text-white md:flex">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className="cursor-pointer transition-colors hover:text-coquelicot"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ===== CTA Button ===== */}
                <div className="hidden md:block">
                    <button
                        onClick={() => {
                            const contactSection = document.getElementById("contact");
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="rounded-md bg-coquelicot px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                    >
                        Join Now
                    </button>
                </div>

                {/* ===== Mobile Menu Toggle ===== */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none md:hidden"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* ===== Mobile Menu ===== */}
            {isOpen && (
                <div className="bg-richBlack2/80 border-white10 border-t text-white md:hidden">
                    <ul className="flex flex-col space-y-4 px-6 py-6 text-lg font-medium">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    className="block cursor-pointer transition-colors hover:text-coquelicot"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}

                        <li>
                            {/* <Link
                                to="/join"
                                onClick={() => setIsOpen(false)}
                                className="inline-block w-full rounded-md bg-coquelicot py-2 text-center font-semibold text-white transition hover:bg-orange-600"
                            >
                                Join Now
                            </Link> */}
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                    setIsOpen(false);
                                }}
                                className="inline-block w-full rounded-md bg-coquelicot py-2 text-center font-semibold text-white transition hover:bg-orange-600"
                            >
                                Join Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
