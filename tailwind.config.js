/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: media,
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
            },
            colors: {
                primary: "#EEC79A", // 238,199,154
                "primary-hover": "#DDAB84", // Slightly darker variant for hover effects
                "dark-bg": "#242424",
                "light-bg": "#ffffff",
                "button-bg": "#1a1a1a",
                "button-bg-hover": "#f9f9f9",
                body: "#213547",
                brand: "#EEC79A", // Brand text color
                logo: "#ffffff", // Logo (watering can) color
            },
            lineHeight: {
                normal: "1.5",
            },
            fontSize: {
                base: "1em",
                h1: "3.2em",
            },
            fontWeight: {
                normal: "400",
                medium: "500",
            },
            spacing: {
                1: "0.6em",
                2: "1.2em",
                3: "3.2em",
            },
            borderRadius: {
                lg: "8px",
            },
        },
    },
    plugins: [],
};
