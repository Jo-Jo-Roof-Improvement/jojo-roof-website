import { StripBase, StripBaseProps } from './StripBase';

export interface WideStripProps extends StripBaseProps {
    backgroundColor?: string;
    height?: string; // in pixes or other css unit
}

export const WideStrip = ({
    children,
    align,
    backgroundColor = 'rgba(22, 22, 22, 1.0)',
    height = '500px',
    className = '',
}: WideStripProps) => {
    return (
        <StripBase align={align} height={height} backgroundColor={backgroundColor} className={className}>
            {children}
        </StripBase>
    );
};
