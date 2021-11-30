import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import type { AppProps } from 'next/app';
import { theme } from 'styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
