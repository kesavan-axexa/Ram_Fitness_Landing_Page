import React from "react";

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/918072235630"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed md:bottom-6 bottom-3 md:right-6 right-3 z-50"
        >
            <img
                src="/images/whatsapp.png"
                alt="WhatsApp Chat"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
        </a>
    );
};

export default FloatingWhatsApp;
