import React from 'react';

// when small components
interface NavBarItemsBoxProps {
    children: React.ReactNode;
}
export const NavBarItemsBox = ({ children }: NavBarItemsBoxProps) => {
    return <div className="pl-5 pr-5 pt-5 pb-5 sticky">{children}</div>;
};
