import React from 'react';
import { StripBase, StripBaseProps } from './StripBase';

export interface ThinStripProps extends StripBaseProps {}

export const ThinStrip = ({ align, children }: ThinStripProps) => {
    return (
        <StripBase align={align} height="40px">
            {children}
        </StripBase>
    );
};
