import { createTheme } from '@mui/material';

export const SCREEN_XSMALL = 0; // Xsmall=	0
export const SCREEN_SMALL = 576; // Small=576
export const SCREEN_MEDIUM = 768; // Medium=768
export const SCREEN_LARGE = 992; // Large=992
export const SCREEN_XLARGE = 1200; // Xlarge=1200
export const SCREEN_XXLARGE = 1600; // XXlarge=1600
export const SCREEN_XXXLARGE = 2560; // XXXlarge=2560

export const Breakpoints = {
    xs: SCREEN_XSMALL,
    sm: SCREEN_SMALL,
    md: SCREEN_MEDIUM,
    lg: SCREEN_LARGE,
    xl: SCREEN_XLARGE,
    xxl: SCREEN_XXLARGE,
    xxxl: SCREEN_XXXLARGE,
};

// strip background colors
export const LIGHTGRAY = 'lightgray';
export const OFFWHITE = '#f5f5f5';
export const NAVBLUE = '#17171D'


// Gowun+Dodum&family=Hind+Siliguri
// fonts
export const FONT_FAMILIES = [
    'Gowun Dodum',
    // 'Hind Siliguri',
    // 'Roboto',
    // 'Source Sans Pro',
    // '-apple-system',
    // 'BlinkMacSystemFont',
    // '"Segoe UI"',
    // '"Helvetica Neue"',
    // 'Arial',
    // 'sans-serif',
    // '"Apple Color Emoji"',
    // '"Segoe UI Emoji"',
    // '"Segoe UI Symbol"',
];

export const PRIMARY_FONT = FONT_FAMILIES[0];
export const SECONDARY_FONT = FONT_FAMILIES[1];
export const WET_PAINT_FONT = 'Rubik Wet Paint';
export const GLITCH_FONT = 'Rubik Glitch';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: SCREEN_XSMALL,
            sm: SCREEN_SMALL,
            md: SCREEN_MEDIUM,
            lg: SCREEN_LARGE,
            xl: SCREEN_XLARGE,
        },
    },
    typography: {
        fontFamily: FONT_FAMILIES.join(','),
        h1: {
            fontFamily: 'Gowun Dodum',
            fontWeight: 400,
            fontSize: '3.052rem',
        },
        h2: {
            fontFamily: 'Gowun Dodum',
            fontSize: '2.441rem',
            fontWeight: 400,
        },
        h3: {
            fontFamily: 'Gowun Dodum',
            fontSize: '1.953rem',
            fontWeight: 400,
        },
        h4: {
            fontFamily: 'Gowun Dodum',
            fontSize: '1.563rem',
            fontWeight: 400,
        },
        h5: {
            fontFamily: 'Gowun Dodum',
            fontSize: '1.25rem',
            fontWeight: 400,
        },
        h6: {
            fontFamily: 'Gowun Dodum',
            fontSize: '1rem',
            fontWeight: 400,
        },
        subtitle1: {
            fontFamily: 'Gowun Dodum',
            fontSize: '0.9',
            fontWeight: 400,
        },
        subtitle2: {
            fontFamily: 'Gowun Dodum',
            fontSize: '0.78rem',
            fontWeight: 400,
        },
        body1: {
            fontFamily: 'Gowun Dodum',
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontFamily: 'Gowun Dodum',
            fontSize: '0.78rem',
        },
        button: {
            fontFamily: 'Gowun Dodum',
        },
        caption: {
            fontFamily: 'Gowun Dodum',
            fontSize: '0.7rem',
        },
        overline: {
            fontFamily: 'Gowun Dodum',
        },
    },
});
