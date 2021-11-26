import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

export interface TextBlockProps extends TypographyProps {
    children?: React.ReactNode;
    className?: string;
}

export const TextBlock = ({ children, className, ...rest }: TextBlockProps) => {
    return (
        <Typography {...rest} className={classNames(className)}>
            {children}
        </Typography>
    );
};
