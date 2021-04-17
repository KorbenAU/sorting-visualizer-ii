const Colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            blue_dark: '#219ebc',
            blue_light: '#8ecae6',
            black: '#023047',
            org_light: '#ffb703',
            org_dark: '#fb8500',
            white: Colors.white,
            danger: Colors.danger,
            'rb-dark-blue': '#18233D',
            'rb-blue': '#3B82F6',
            'rb-light-blue': '#D7E3FF',
            'rb-green': '#10B981',
            'rb-light-tan': '#FEEBD2',
            'rb-tan': '#FEBE89',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
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
