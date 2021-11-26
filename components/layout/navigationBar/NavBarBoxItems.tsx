import React from 'react';
import { NavBarLogoImage } from './NavBarLogoImage';
import { PhoneText } from './PhoneText';
import { MenuLineItems } from './MenuLineItems';
import MenuIcon from '@mui/icons-material/Menu';

interface NavBarBoxItemsProps {
    phoneNumber: string;
    imgSrc: string;
    toggleInlineMenu(): void;
    toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export const NavBarBoxItems = ({ phoneNumber, imgSrc, toggleDrawer, toggleInlineMenu }: NavBarBoxItemsProps) => {
    const SmallBlock = () => {
        return (
            <div className="flex flex-row flex-grow justify-between mb-4 md:hidden">
                <div className="w-1/3">
                    <MenuIcon onClick={toggleDrawer} className="text-white" />
                </div>
                <PhoneText phoneNumber={phoneNumber} className="text-white text-center" />
                <div className="invisible w-1/3">Empty</div>
            </div>
        );
    };

    const MediumAndLargeBlock = () => {
        return (
            <div className="hidden md:flex md:flex-row items-center">
                <NavBarLogoImage containerClassName="w-1/4" imgSrc={imgSrc} visibility="" />
                <MenuLineItems toggleInlineMenu={toggleInlineMenu} />
                <PhoneText className="text-white w-1/4 justify-end pr-6 pl-2" phoneNumber={phoneNumber} />
            </div>
        );
    };

    return (
        <>
            <SmallBlock />
            <MediumAndLargeBlock />
        </>
    );
};
