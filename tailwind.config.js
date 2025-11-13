/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                richBlack1: "hsl(210, 26%, 11%)",
                richBlack2: "hsl(210, 50%, 4%)",
                silverMetallic: "hsl(212, 9%, 67%)",
                sonicSilver: "hsl(0, 0%, 47%)",
                cadetGray: "hsl(214, 15%, 62%)",
                lightGray: "hsl(0, 0%, 80%)",
                coquelicot: "hsl(12, 98%, 52%)",
                gainsboro: "hsl(0, 0%, 88%)",
                white20: "hsla(0, 0%, 100%, 0.2)",
                white10: "hsla(0, 0%, 100%, 0.1)",
                black10: "hsla(0, 0%, 0%, 0.1)",
            },
            animation: {
                slideDown: "slideDown 0.3s ease-out",
            },
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            backgroundImage: {
                "hero-bg": "url('/images/hero-bg.png')",
            },
        },
    },
    plugins: [],
};
