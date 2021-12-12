import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import { theme } from 'styles/theme';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { Widget } from 'palavyr-iframe-widget';
import 'palavyr-iframe-widget/dist/styles.css';

const jojo = () => `https://widget.palavyr.com/widget?key=${process.env.PalavyrApiKey}`;

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
            <Widget src={jojo()} resizable />
        </>
    );
}

export default MyApp;
