/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(circle at bottom, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
