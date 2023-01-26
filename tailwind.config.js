/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial-bot": "radial-gradient(circle at bottom, var(--tw-gradient-stops))",
                "gradient-radial-top": "radial-gradient(circle at top, var(--tw-gradient-stops))",
                "gradient-radial-center": "radial-gradient(circle at center, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
