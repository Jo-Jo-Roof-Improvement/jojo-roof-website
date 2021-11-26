import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';
import { Divider } from '@mui/material';
import Link from 'next/link';

interface DrawerItemProps {
    text: string;
    href: string;
    divider?: boolean;
    bold?: boolean;
}
export const DrawerItem = ({ text, href, divider = true, bold = false }: DrawerItemProps) => {
    return (
        <>
            <TextBlock fontWeight={bold ? 500 : 200} className="pl-3 pt-3 pb-3 text-white" variant={bold ? 'h4' : 'h5'}>
                <Link href={href}>
                    <a>{text.toUpperCase()}</a>
                </Link>
            </TextBlock>
            {divider && <Divider className="pl-3" />}
        </>
    );
};
