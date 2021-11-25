import React from 'react';
import { useRouter } from 'next/router';
import { Routes } from './Routes';
import { JoDrawerMenuItem } from './JoDrawerMenuItem';
import { CollapsableMenu } from './CollapsableMenu';

export interface MenuLineItemsProps {
    toggleInlineMenu: () => void;
}

export const MenuLineItems = ({ toggleInlineMenu }: MenuLineItemsProps) => {
    const router = useRouter();
    return (
        <>
            <div className="lg:flex lg:flex-row lg:flex-grow lg:justify-center hidden">
                <JoDrawerMenuItem text="Home" href={Routes.Home} bold={router.pathname === Routes.Home} />
                <JoDrawerMenuItem text="About us" href={Routes.AboutUs} bold={router.pathname === Routes.AboutUs} />
                <JoDrawerMenuItem text="Services" href="/services" bold={router.pathname === Routes.Services} />
                <JoDrawerMenuItem text="Gallery" href="/gallery" bold={router.pathname === Routes.Gallery} />
                <JoDrawerMenuItem text="Contact Us" href="/contact-us" bold={router.pathname === Routes.ContactUs} />
            </div>
            <div className="md:flex md:flex-grow md:justify-around hidden lg:hidden md:pl-32 md:pr-32">
                <JoDrawerMenuItem
                    className="p-5"
                    text="Home"
                    href={Routes.Home}
                    bold={router.pathname === Routes.Home}
                />
                <JoDrawerMenuItem text="Services" href="/services" bold={router.pathname === Routes.Services} />
                <CollapsableMenu />
            </div>
        </>
    );
};
