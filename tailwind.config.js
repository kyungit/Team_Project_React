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
                '.mt-0': {
                    marginTop: '0rem !important',
                },
                '.mt-1': {
                    marginTop: '0.25rem !important',
                },
                '.mt-2': {
                    marginTop: '0.5rem !important',
                },
                '.mt-24': {
                    marginTop: '6rem !important',
                },
                '.mt-36': {
                    marginTop: '9rem !important',
                }
            }
            addUtilities(newUtilities)
        },
    ],
}
