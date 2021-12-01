import React, { useEffect, useRef } from 'react';
import { Footer } from './footer/Footer';
import { PageHead } from './head/PageHead';
import { NavigationBar } from './navigationBar/NavigationBar';
import { FreeQuoteToday } from './components/FreeQuoteToday';

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

export const Layout = ({ children, pageTitle }: LayoutProps) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [navBarHeight, setNavBarHeight] = React.useState(0);
    console.log(navBarHeight);
    useEffect(() => {
        if (ref && ref.current && ref.current.offsetHeight) {
            setNavBarHeight(ref.current.offsetHeight);
        }
        return () => {};
    }, []);
    return (
        <>
            <PageHead pageTitle={pageTitle} />
            <FreeQuoteToday />
            <NavigationBar imgSrc="/brand-images/logo.png" navBarRef={ref} />
            {/* <div style={{ height: navBarHeight }} className="w-full "></div> */}
            <div style={{ height: '105px' }} className="w-full h-auto"></div>
            {children}
            <Footer />
        </>
    );
};
