/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,jsx,tx,tsx,css}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    ],
    theme: {
        extend: {
            spacing: {
                1: '0.25rem',
            },
        },
    },
    variants: {},
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.mt-1': {
                    marginTop: '0.25rem !important',
                },
                '.mt-0': {
                    marginTop: '0rem !important',
                },
            }
            addUtilities(newUtilities)
        },
    ],
}
