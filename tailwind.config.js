/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
            },
            colors: {
                primary: "#74D3AE",
                secondary: "#678D58",
                tertiary: "#A6C48A",
                background: "#F6E7CB",
                contrast: "#DD9787",
                logo: "#ffffff",
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
            borderRadius: {
                lg: "8px",
            },
        },
    },
    plugins: [],
};
