import React from 'react';
import { useRouter } from 'next/router';
import { Routes } from './Routes';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TextBlock } from '@components/common/text/TextBlock';
import { JoMenu } from './JoMenu';
import { JoMenuItem } from './JoMenuItem';
import styles from './NavigationBar.module.css';

export const CollapsableMenu = ({ fontSize }: { fontSize: string }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const router = useRouter();

    return (
        <div className="flex align-middle justify-center">
            <div className="flex flex-row items-center">
                <TextBlock
                    fontFamily="Source Sans Pro"
                    fontSize={fontSize}
                    className="text-white pl-5"
                    onClick={handleClick}
                >
                    Plus
                </TextBlock>
                <KeyboardArrowDownIcon className="text-white" />
            </div>
            <JoMenu
                className="text-white"
                anchorEl={anchorEl}
                PopoverClasses={{ paper: `${styles.backgroundColor} text-white` }}
                onClose={handleClose}
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <JoMenuItem
                    className="text-white"
                    text="About us"
                    href={Routes.AboutUs}
                    bold={router.pathname === Routes.AboutUs}
                />
                <JoMenuItem text="Gallery" href={Routes.Gallery} bold={router.pathname === Routes.Gallery} />
                <JoMenuItem text="Contact Us" href={Routes.ContactUs} bold={router.pathname === Routes.ContactUs} />
            </JoMenu>
        </div>
    );
};
