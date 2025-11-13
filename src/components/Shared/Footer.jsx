import { PackageCheck } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-customNavy1 px-4 pb-6 pt-10 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
                {/* Logo & Description */}
                <div>
                    <div className="hidden items-center space-x-2 mb-3 lg:flex">
                        <PackageCheck className="h-6 w-6 text-white" />
                        <span className="text-xl uppercase text-white">E-commify</span>
                    </div>{" "}
                    <p className="text-sm text-customTextGrey2">
                        Discover the latest trends in fashion and lifestyle. Your favorite online destination for everything stylish.
                    </p>
                    {/* Social Icons */}
                    <div className="mt-4 flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-customBlue"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="hover:text-customBlue"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="hover:text-customBlue"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="hover:text-customBlue"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="mb-3 text-lg font-semibold">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-customTextGrey2">
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Shop
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h2 className="mb-3 text-lg font-semibold">Customer Service</h2>
                    <ul className="space-y-2 text-sm text-customTextGrey2">
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Shipping & Returns
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="mb-3 text-lg font-semibold">Subscribe to our Newsletter</h2>
                    <p className="mb-3 text-sm text-customTextGrey2">Get updates about our latest offers and products.</p>
                    <form className="flex flex-col items-center gap-2 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md px-3 py-2 text-black"
                        />
                        <button
                            type="submit"
                            className="rounded-md bg-customBlue px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-10 border-t border-customTextGrey pt-4 text-center text-sm text-customGrey">
                &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
