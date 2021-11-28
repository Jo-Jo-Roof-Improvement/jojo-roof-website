import { createTheme } from '@mui/material';

export const SCREEN_XSMALL = 0;
export const SCREEN_SMALL = 640;
export const SCREEN_MEDIUM = 768;
export const SCREEN_LARGE = 1024;
export const SCREEN_XLARGE = 1280;

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
