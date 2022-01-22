/* eslint-disable @next/next/no-img-element */
import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import { theme } from 'styles/theme';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import PalavyrChatWidget from 'palavyr-chat-widget';
import Image from 'next/image';

export type SetState<T> = Dispatch<SetStateAction<T>>;

const jojo = () => `https://widget.palavyr.com/widget?key=${process.env.NEXT_PUBLIC_PALAVYR_API_KEY}`;
const containerStyles = {
    marginTop: '0rem',
    marginBottom: '0rem',
    height: '660px',
    width: '420px',
    borderRadius: '9px',
    border: '0px',
    background: '#FFFFFF',
    boxShadow: 'none',
    zIndex: 1000,
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const onToggle = (widgetOpenState: boolean, setWidgetOpenState: SetState<boolean>) => {
        if (!widgetOpenState) {
            setWidgetOpenState(true);
        }
    };

    useEffect(() => {
        const handleRouteChange = (url: string) => {
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

            <PalavyrChatWidget
                src={jojo()}
                fixedPosition={true}
                containerStyles={containerStyles}
                resizable
                onToggle={onToggle}
                launcherOpenImg="/brand-images/logo.png"
                IframeProps={{ style: { height: '100%', width: '100%', zIndex: 1000 }, id: 'jojos-widget' }}
                openImgProps={{ style: {padding: "10px", objectFit: 'contain', height: '100%', width: '100%', zIndex: 1000 } }}
                launcherButtonAdditionalStyles={{height: '80px', width: '80px', borderRadius: '50%', background: 'black', border: '2px solid white', boxShadow: 'none'}}
            />
        </>
    );
}

export default MyApp;

export const CustomLauncher = () => {
    return (
        <div
            className="pcw-close-launcher pcw-animation"
            style={{
                borderRadius: '50%',
                border: '2px solid white',
                backgroundColor: '#191921',
                height: '75px',
                width: '75px',
                padding: '10px',
            }}
        >
            <img src="/brand-images/logo.png" alt="logo" />
        </div>
    );
};
