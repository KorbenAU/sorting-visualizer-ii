const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            colors: {
                blue_dark: '#219ebc',
                blue_light: '#8ecae6',
                black: '#023047',
                org_light: '#ffb703',
                org_dark: '#fb8500',
                white: colors.white,
                danger: colors.danger,
                'rb-dark-blue': '#18233D',
                'rb-blue': '#3B82F6',
                'rb-light-blue': '#D7E3FF',
                'rb-green': '#10B981',
                'rb-light-tan': '#FEEBD2',
                'rb-tan': '#FEBE89',
            },
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'rb-blue': '0 10px 15px -3px rgba(59, 130, 246, .3)',
            },
        },
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            opacity: ['disabled'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
