import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileDrawerItems } from './MobileDrawerItems';
import { MobileDrawer } from './MobileDrawer';
import { NavBarLogoImage } from './NavBarLogoImage';
import { NavBarBoxItems as NavBarBoxItems } from './NavBarBoxItems';
import { NavBarItemsBox } from './NavBarItemsBox';
import classNames from 'classnames';
import { PHONENUMBER } from 'company';

import styles from './NavigationBar.module.css';

interface NavBarContentsProps {
    open: boolean;
    toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
    toggleInlineMenu(): void;
    imgSrc: string;
}

export const NavBarContents = ({ open, toggleDrawer, imgSrc, toggleInlineMenu }: NavBarContentsProps) => {
    return (
        <div className={classNames('opacity-90', styles.backgroundColor)}>
            <MobileDrawer open={open} toggle={toggleDrawer}>
                <MobileDrawerItems />
            </MobileDrawer>
            <NavBarItemsBox>
                <NavBarBoxItems
                    menuIcon={<MenuIcon onClick={toggleDrawer} />}
                    phoneNumber={PHONENUMBER}
                    imgSrc={imgSrc}
                    toggleInlineMenu={toggleInlineMenu}
                />
                <NavBarLogoImage imgSrc={imgSrc} visibility="md:hidden" />
            </NavBarItemsBox>
        </div>
    );
};
