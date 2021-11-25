import React from 'react';
import { NavBarLogoImage } from './NavBarLogoImage';
import { PhoneText } from './PhoneText';
import { MenuLineItems } from './MenuLineItems';

interface NavBarBoxItemsProps {
    menuIcon: React.ReactNode;
    phoneNumber: string;
    imgSrc: string;
    toggleInlineMenu(): void;
}
export const NavBarBoxItems = ({ menuIcon, phoneNumber, imgSrc, toggleInlineMenu }: NavBarBoxItemsProps) => {
    const SmallBlock = () => {
        return (
            <div className="flex flex-row justify-between mb-4 md:hidden">
                <div>{menuIcon}</div>
                <PhoneText phoneNumber={phoneNumber} className="pr-8"/>
                <div className="flex invisible">Empty</div>
            </div>
        );
    };

    const MediumAndLargeBlock = () => {
        return (
            <div className="hidden md:flex md:flex-row items-center">
                <NavBarLogoImage imgSrc={imgSrc} visibility="" />
                <MenuLineItems toggleInlineMenu={toggleInlineMenu} />
                <PhoneText phoneNumber={phoneNumber} />
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
