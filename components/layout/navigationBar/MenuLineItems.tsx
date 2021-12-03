import React from 'react';
import { useRouter } from 'next/router';
import { Routes } from './Routes';
import { JoDrawerMenuItem } from './JoDrawerMenuItem';
import { CollapsableMenu } from './CollapsableMenu';

export const MenuLineItems = () => {
    const router = useRouter();
    const fontsize = '16pt';
    return (
        <>
            <div className="lg:flex lg:flex-row lg:flex-grow lg:justify-center hidden w-1/2">
                <JoDrawerMenuItem
                    fontSize={fontsize}
                    text="Home"
                    href={Routes.Home}
                    bold={router.pathname === Routes.Home}
                />
                <JoDrawerMenuItem
                    fontSize={fontsize}
                    text="About Us"
                    href={Routes.AboutUs}
                    bold={router.pathname === Routes.AboutUs}
                />
                <JoDrawerMenuItem
                    fontSize={fontsize}
                    text="Services"
                    href={Routes.Services}
                    bold={router.pathname === Routes.Services}
                />
                <JoDrawerMenuItem
                    fontSize={fontsize}
                    text="Gallery"
                    href={Routes.Gallery}
                    bold={router.pathname === Routes.Gallery}
                />
                <JoDrawerMenuItem
                    fontSize={fontsize}
                    text="Contact Us"
                    href={Routes.ContactUs}
                    bold={router.pathname === Routes.ContactUs}
                />
            </div>
            <div className="md:flex md:flex-grow md:justify-around hidden lg:hidden md:pl-32 md:pr-32">
                <JoDrawerMenuItem
                    fontSize={fontsize}
                    className="p-5"
                    text="Home"
                    href={Routes.Home}
                    bold={router.pathname === Routes.Home}
                />
                <JoDrawerMenuItem
                    fontSize={fontsize}
                    text="Services"
                    href={Routes.Services}
                    bold={router.pathname === Routes.Services}
                />
                <CollapsableMenu fontSize={fontsize} />
            </div>
        </>
    );
};
