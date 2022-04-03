import { TextBlock } from '@components/common/text/TextBlock';
import { TypographyProps } from '@mui/system';
import React from 'react';
import cls from './TitleTypography.module.scss';

export interface TitleTypographyProps extends TypographyProps {
    children: React.ReactNode;
    display?: 'initial' | 'block' | 'inline' | undefined;
    variant?: 'h2';
    align?: 'center';
}

export const TitleTypography = ({
    children,
    display = 'inline',
    variant = 'h2',
    align = 'center',
    ...rest
}: TitleTypographyProps) => {
    return (
        <TextBlock className={cls.primaryText} variant={variant} display={display} align={align} {...rest}>
            {children}
        </TextBlock>
    );
};
