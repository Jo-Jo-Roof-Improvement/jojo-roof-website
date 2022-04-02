import React from 'react';
import { PalavyrText, PalavyrTextProps } from './PalavyrText';
import cls from './TitleTypography.module.scss';

export interface TitleTypographyProps extends PalavyrTextProps {
    children: React.ReactNode;
    display?: 'initial' | 'block' | 'inline' | undefined;
}

export const TitleTypography = ({
    children,
    display = 'inline',
    variant = 'h2',
    align = 'center',
    ...rest
}: TitleTypographyProps) => {
    return (
        <PalavyrText className={cls.primaryText} variant={variant}  display={display} align ={align} {...rest}>
            {children}
        </PalavyrText>
    );
};
