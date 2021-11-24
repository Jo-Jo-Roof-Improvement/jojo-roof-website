import React from 'react';

// when small components
interface NavBarItemsBoxPropsSmall {
    children: React.ReactNode;
}
export const NavBarItemsBoxSmall = ({ children }: NavBarItemsBoxPropsSmall) => {
    return <div className="p-5 h-3/4 sticky">{children}</div>;
};
