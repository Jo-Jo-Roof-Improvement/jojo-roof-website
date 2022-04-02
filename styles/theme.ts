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
        fontFamily: [
            'Fjalla One',
            'Source Sans Pro',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
