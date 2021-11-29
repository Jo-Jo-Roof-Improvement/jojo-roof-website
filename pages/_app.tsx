import '../styles/globals.css';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import { theme } from 'styles/theme';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
