import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import { TextBlock } from '@components/common/text/TextBlock';
import Link from 'next/link';
import classNames from 'classnames';

export interface JoMenuItemProps extends MenuItemProps {
    text: string;
    bold: boolean;
    href: string;
    textColor?: string;
}
export const JoMenuItem = ({ text, bold, href, textColor = 'text-white', ...rest }: JoMenuItemProps) => {
    return (
        <MenuItem {...rest}>
            <TextBlock
                {...rest}
                fontFamily="Source Sans Pro"
                fontWeight={bold ? 500 : 200}
                className="text-black"
            >
                <Link href={href}>
                    <a className={classNames('flex justify-middle text-center', textColor)}>{text}</a>
                </Link>
            </TextBlock>
        </MenuItem>
    );
};
