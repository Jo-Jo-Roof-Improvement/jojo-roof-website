import { Typography, TypographyProps } from '@mui/material';
import { PRIMARY_FONT, SECONDARY_FONT } from 'styles/theme';

export interface TextBlockProps extends TypographyProps {
    children?: React.ReactNode;
    className?: string;
    fontVariant?: 'primary' | 'secondary';
}

export const TextBlock = ({ children, className, fontVariant = 'secondary', ...rest }: TextBlockProps) => {
    return (
        <Typography
            {...rest}
            className={className}
            fontFamily={fontVariant === 'primary' ? PRIMARY_FONT : SECONDARY_FONT}
        >
            {children}
        </Typography>
    );
};
