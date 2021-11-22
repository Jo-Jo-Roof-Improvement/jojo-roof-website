import { ThinStrip } from '@components/common/strips/ThinStrip';
import { AdornedText } from '@components/common/text/AdornedText';
import React from 'react';
import { Footer } from './footer/Footer';
import { PageHead } from './head/PageHead';
import { NavigationBar } from './navigationBar/NavigationBar';
import FlareIcon from '@mui/icons-material/Flare';

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

export const Layout = ({ children, pageTitle }: LayoutProps) => {
    return (
        <>
            <PageHead pageTitle={pageTitle} />
            <ThinStrip align="center">
                <AdornedText
                    text="Get your free quote today!"
                    StartAdornment={<FlareIcon />}
                    EndAdornment={<FlareIcon />}
                    padAdornment={1}
                />
            </ThinStrip>
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
};
