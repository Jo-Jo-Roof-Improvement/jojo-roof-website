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

export type SetState<T> = Dispatch<SetStateAction<T>>;

const jojo = () => `https://widget.palavyr.com/widget?key=${process.env.NEXT_PUBLIC_PALAVYR_API_KEY}`;
const containerStyles = {
    marginTop: '0rem',
    marginBottom: '0rem',
    height: '600px',
    width: '420px',
    borderRadius: '9px',
    border: '0px',
    boxShadow: 'none',
    zIndex: 1000,
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    let toggleCheat: SetState<boolean>;

    const onEffect = (widgetOpenState: boolean, setWidgetOpenState: SetState<boolean>) => {
        if (widgetOpenState === false && router.pathname === '/contact-us') {
            setWidgetOpenState(true);
        } else if (router.pathname === '/contact-us') {
            // do nothing
        } else {
            setWidgetOpenState(false);
        }
        toggleCheat = setWidgetOpenState;
    };

    useEffect(() => {
        setTimeout(() => {
            if (toggleCheat !== undefined) {
                toggleCheat(true);
            }
        }, 13000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const escFunction = (event: { keyCode: number }) => {
            if (event.keyCode === 27) {
                if (toggleCheat) {
                    toggleCheat(false);
                }
            }
        };
        document.addEventListener('keydown', escFunction, false);
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
        // @ts-ignore
    }, [toggleCheat]);

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
                disableBounce
                src={jojo()}
                fixedPosition={true}
                containerStyles={containerStyles}
                resizable
                onEffect={onEffect}
                onEffectDependencyArray={[router.pathname]}
                launcherOpenImg="/brand-images/logo.png"
                IframeProps={{ style: { border: "0px solid white", borderRadius: "6px", height: '100%', width: '100%', zIndex: 1000 }, id: 'jojos-widget' }}
                openImgProps={{
                    style: { padding: '10px', objectFit: 'contain', height: '100%', width: '100%', zIndex: 1000 },
                }}
                launcherButtonAdditionalStyles={{
                    height: '68px',
                    width: '68px',
                    borderRadius: '50%',
                    borderBottomRightRadius: '10px',
                    background: '#454040',
                    border: '5px solid white',
                    boxShadow: '0px 0px 10px #454040',
                }}
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
