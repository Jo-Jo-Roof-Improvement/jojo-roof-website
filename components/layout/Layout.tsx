import { Footer } from './footer/Footer';
import { PageHead } from './head/PageHead';
import { NavigationBar } from './navigationBar/NavigationBar';
import { FreeQuoteToday } from './components/FreeQuoteToday';
import { useEffect, useRef, useState } from 'react';

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

export const Layout = ({ children, pageTitle }: LayoutProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    const [height, setHeight] = useState<number>(0);
    const [quoteHeight, setQuoteHeight] = useState<number>(0);

    useEffect(() => {
        if (ref && ref.current) {
            setHeight(ref.current?.clientHeight);
        }
        if (quoteRef && quoteRef.current) {
            setQuoteHeight(quoteRef.current?.clientHeight);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (ref && ref.current) {
                setHeight(ref.current?.clientHeight);
            }
            if (quoteRef && quoteRef.current) {
                setQuoteHeight(quoteRef.current?.clientHeight);
            }
            console.log('Height, QHeight: ', height, quoteHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            return window.removeEventListener('resize', handleResize);
        };
    }, [height, quoteHeight]);

    return (
        <>
            <PageHead pageTitle={pageTitle} />
            {/* <FreeQuoteToday ref={quoteRef} /> */}
            <NavigationBar ref={ref} imgSrc="/brand-images/logo.png" />
            <div style={{ height: `${height + quoteHeight}px` }} className="w-full h-auto"></div>
            {children}
            <Footer />
        </>
    );
};
