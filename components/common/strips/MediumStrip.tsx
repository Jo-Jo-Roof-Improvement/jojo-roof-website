import React from 'react';
import { StripBase } from './StripBase';

export interface MediumStripProps {
    children: React.ReactNode;
    align?: 'left' | 'right' | 'center';
}

export const MediumStrip = ({ children, align }: MediumStripProps) => {
    return (
        <StripBase align={align} height="300px">
            {children}
        </StripBase>
    );
};
