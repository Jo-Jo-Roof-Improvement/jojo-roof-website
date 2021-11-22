import { StripBase } from './StripBase';

export interface WideStripProps {
    children: React.ReactNode;
    align: 'left' | 'right' | 'center';
}

export const WideStrip = ({ children, align }: WideStripProps) => {
    return (
        <StripBase align={align} height="500px">
            {children}
        </StripBase>
    );
};
