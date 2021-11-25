import { Button, ButtonProps } from '@mui/material';
import React from 'react';

export interface JoButtonProps extends ButtonProps {
    children: React.ReactNode;
}

export const JoButton = ({ children, ...rest }: JoButtonProps) => {
    return <Button {...rest}>{children}</Button>;
};
