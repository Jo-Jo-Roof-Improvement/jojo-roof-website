import React from 'react';

// when small components
interface NavBarItemsBoxProps {
    children: React.ReactNode;
}
export const NavBarItemsBox = ({ children }: NavBarItemsBoxProps) => {
    return <div className="p-5 h-3/4 sticky">{children}</div>;
};
