/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileDrawerItems } from './MobileDrawerItems';
import { MobileDrawer } from './MobileDrawer';
import { NavBarLogoImage } from './NavBarLogoImageProps';
import { UpperItemsSmall } from './UpperItemsPropsSmall';
import { NavBarItemsBoxSmall } from './NavBarItemsBoxPropsSmall';
import classNames from 'classnames';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from './NavigationBar.module.css';
import { PHONENUMBER } from 'company';
import { PhoneText } from './PhoneTextProps';
// import { NAV_BAR_DIV_ID } from 'constants';

// https://stackoverflow.com/questions/51940157/how-to-align-horizontal-icon-and-text-in-mui
// export interface NavigationBarProps {
//     imgSrc: string;
// }
// export const NavigationBarBkup = ({ imgSrc }: NavigationBarProps) => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     const handleScroll = () => setIsScrolled(window.scrollY > 0);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div
//             className={classNames(
//                 isScrolled ? 'h-22' : 'h-42', //styles.fullHeight : styles.squashedHeight,
//                 styles.transition
//             )}
//         >
//             <div
//                 className={classNames(
//                     styles.backgroundColor,
//                     'flex flex-col justify-center md:flex-row md:justify-around'
//                 )}
//             >
//                 <div className="flex flex-row flex-grow md:invisible justify-around grid-flow-row">
//                     <MenuIcon className="md:invisible flex items-center justify-center border-2" />
//                     <TextBlock variant="h5" align="center" className="flex justify-center items-center">
//                         0433881760
//                     </TextBlock>
//                     <div className="invisible border-2"></div>
//                     <img src={imgSrc} alt="logo" className={classNames('object-contain')} />
//                 </div>
//             </div>
//             {/* <img src={imgSrc} alt="logo" className={classNames('object-contain invisible md:invisible')} />
//                 <nav className="invisible lg:visible">A NavigationBar With Site Links</nav>
//                 <TextBlock className="invisible md:visible h-full">0433881760</TextBlock> */}
//         </div>
//     );
// };

interface NavigationMainStripProps {
    imgSrc: string;
    navHeightRef: React.MutableRefObject<HTMLDivElement>;
}

export const NavigationBar = ({ imgSrc, navHeightRef }: NavigationMainStripProps) => {
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
    const toggleOverflowMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div ref={navHeightRef} className={classNames(isScrolled ? 'fixed top-0' : 'absolute', 'w-full')}>
            <SmallNavBar open={open} imgSrc={imgSrc} toggleDrawer={toggleDrawer} />
            {/* <MediumNavBar menuOpen={menuOpen} imgSrc={imgSrc} toggleOverflowMenu={toggleOverflowMenu} /> */}
            {/* <LargeNavBar open={open} imgSrc={imgSrc}/> */}
            <div className={classNames('')}></div>
        </div>
    );
};

interface MediumNavBarProps {
    menuOpen: boolean;
    imgSrc: string;
    toggleOverflowMenu: () => void;
}

const MediumNavBar = ({ menuOpen, imgSrc, toggleOverflowMenu }: MediumNavBarProps) => {
    return (
        <div className={classNames('opacity-70 z-50 sm:invisible md:visible lg:invisible', styles.backgroundColor)}>
            <div>
                <NavBarLogoImage imgSrc={imgSrc} />
            </div>
            <div></div>
            <div>
                <PhoneText phoneNumber={PHONENUMBER} />
            </div>
        </div>
    );
};

interface SmallNavBarProps {
    open: boolean;
    toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
    imgSrc: string;
}

const SmallNavBar = ({ open, toggleDrawer, imgSrc }: SmallNavBarProps) => {
    return (
        <div className={classNames('opacity-70 z-50 visible md:invisible', styles.backgroundColor)}>
            <MobileDrawer open={open} toggle={toggleDrawer}>
                <MobileDrawerItems />
            </MobileDrawer>
            <NavBarItemsBoxSmall>
                <UpperItemsSmall menuIcon={<MenuIcon onClick={toggleDrawer} />} phoneNumber="0433881760" />
                <NavBarLogoImage imgSrc={imgSrc} />
            </NavBarItemsBoxSmall>
        </div>
    );
};
