/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { NavBarContents } from './NavBarContents';

interface NavigationBarProps {
    imgSrc: string;
    navBarRef: React.MutableRefObject<HTMLDivElement>;
}

export const NavigationBar = ({ imgSrc, navBarRef }: NavigationBarProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setOpen(!open);
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => setIsScrolled(window.scrollY >= 40);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleInlineMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div
            ref={navBarRef}
            style={{ maxHeight: '180px', zIndex: 100 }}
            className={classNames(isScrolled ? 'fixed top-0' : 'absolute', 'w-full')}
        >
            <NavBarContents
                open={open}
                imgSrc={imgSrc}
                toggleDrawer={toggleDrawer}
                toggleInlineMenu={toggleInlineMenu}
            />
        </div>
    );
};
