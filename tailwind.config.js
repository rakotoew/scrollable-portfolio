/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
