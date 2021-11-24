import React from 'react';
import { useRouter } from 'next/router';
import { DrawerItem } from "./DrawerItemProps";
import { Routes } from "./Routes";

export const MobileDrawerItems = () => {
    const router = useRouter();
    return (
        <div className="pl-4 pr-4">
            <DrawerItem text="Home" href={Routes.Home} bold={router.pathname === Routes.Home} />
            <DrawerItem text="About us" href={Routes.AboutUs} bold={router.pathname === Routes.AboutUs} />
            <DrawerItem text="Services" href="/services" bold={router.pathname === Routes.Services} />
            <DrawerItem text="Gallery" href="/gallery" bold={router.pathname === Routes.Gallery} />
            <DrawerItem
                text="Contact Us"
                href="/contact-us"
                bold={router.pathname === Routes.ContactUs}
                divider={false}
            />
        </div>
    );
};
