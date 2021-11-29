import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

export interface TextBlockProps extends TypographyProps {
    children?: React.ReactNode;
    className?: string;
    fontVariant?: 'primary' | 'secondary';
}

export const TextBlock = ({ children, className, fontVariant = "secondary", ...rest }: TextBlockProps) => {
    return (
        <Typography {...rest} className={classNames(className)} fontFamily={fontVariant === "primary" ? "Fjalla One" : "Source Sans Pro"}>
            {children}
        </Typography>
    );
};
