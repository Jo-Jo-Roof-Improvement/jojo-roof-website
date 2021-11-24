import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

export interface TextBlockProps extends TypographyProps {
    children: React.ReactNode;
}

export const TextBlock = ({ children, ...rest }: TextBlockProps) => {
    return <Typography {...rest} className={classNames(rest.className, "text-fonts")}>{children}</Typography>;
};
