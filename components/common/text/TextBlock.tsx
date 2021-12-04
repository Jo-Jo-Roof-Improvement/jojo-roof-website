import { Typography, TypographyProps } from '@mui/material';

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
            fontFamily={fontVariant === 'primary' ? 'Fjalla One' : 'Source Sans Pro'}
        >
            {children}
        </Typography>
    );
};
