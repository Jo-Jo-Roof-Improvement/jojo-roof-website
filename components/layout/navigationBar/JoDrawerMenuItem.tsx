import { TextBlock, TextBlockProps } from '@components/common/text/TextBlock';
import Link, { LinkProps } from 'next/link';
import React from 'react';

interface JoMenuItemProps extends TextBlockProps, LinkProps {
    text: string;
    bold: boolean;
    href: string;
}
export const JoDrawerMenuItem = ({ text, bold, href, ...rest }: JoMenuItemProps) => {
    return (
        <TextBlock
            {...rest}
            fontFamily="Source Sans Pro"
            fontWeight={bold ? 500 : 200}
            className="ml-3 mr-3 mt-3 pb-3 text-white"
            style={{ borderBottom: `${bold ? '2px' : '0px'} solid white`, ...rest.style }}
        >
            <Link href={href}>
                <a className="flex justify-middle text-center">{text}</a>
            </Link>
        </TextBlock>
    );
};
