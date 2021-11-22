import { ThinStrip } from '@components/common/strips/ThinStrip';
import React from 'react';
import { Footer } from './footer/Footer';
import { PageHead } from './head/PageHead';
import { NavigationBar } from './navigationBar/NavigationBar';

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

export const Layout = ({ children, pageTitle }: LayoutProps) => {
    return (
        <>
            <PageHead pageTitle={pageTitle} />
            <ThinStrip text="Get A Free QuoteToday" />
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
};
