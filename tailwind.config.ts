const SCREEN_XSMALL = require('styles/theme/SCREENS_XSMALL');
const SCREEN_SMALL = require('styles/theme/SCREENS_SMALL');
const SCREEN_MEDIUM = require('styles/theme/SCREENS_MEDIUM');
const SCREEN_LARGE = require('styles/theme/SCREENS_LARGE');
const SCREEN_XLARGE = require('styles/theme/SCREENS_XLARGE');

// module.exports = () => {
const config = {
    // purge: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: `${SCREEN_XSMALL}px`,
            sm: `${SCREEN_SMALL}px`,
            md: `${SCREEN_MEDIUM}px`,
            lg: `${SCREEN_LARGE}px`,
            xl: `${SCREEN_XLARGE}px`,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

export default config;
