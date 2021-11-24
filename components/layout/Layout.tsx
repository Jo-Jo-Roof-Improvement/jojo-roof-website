import React from 'react';
import { Footer } from './footer/Footer';
import { PageHead } from './head/PageHead';
import { NavigationBar } from './navigationBar/NavigationBar';
import { FreeQuoteToday } from './components/FreeQuoteToday';

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

export const Layout = ({ children, pageTitle }: LayoutProps) => {
    return (
        <>
            <PageHead pageTitle={pageTitle} />
            <FreeQuoteToday />
            <NavigationBar imgSrc="/brand-images/logo.png" />
            {children}
            <Footer />
        </>
    );
};
