/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileDrawerItems } from './MobileDrawerItems';
import { MobileDrawer } from './MobileDrawerProps';
import { NavBarLogoImage } from './NavBarLogoImageProps';
import { UpperItemsSmall } from './UpperItemsPropsSmall';
import { NavBarItemsBoxSmall } from './NavBarItemsBoxPropsSmall';

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
}
export const NavigationBar = ({ imgSrc }: NavigationMainStripProps) => {
    const [open, setOpen] = useState(true);

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setOpen(!open);
    };

    return (
        <div className="bg-gray-400 visible md:invisible">
            <MobileDrawer open={open} toggle={toggleDrawer}>
                <MobileDrawerItems />
            </MobileDrawer>
            <NavBarItemsBoxSmall>
                <UpperItemsSmall
                    menuIcon={<MenuIcon onClick={toggleDrawer} className="md:invisible" />}
                    phoneNumber="0433881760"
                />
                <NavBarLogoImage imgSrc={imgSrc} />
            </NavBarItemsBoxSmall>
        </div>
    );
};
