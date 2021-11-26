/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './NavigationBar.module.css';

interface NavBarLogoImageProps {
    imgSrc: string;
    visibility: string; // using tailwindcss syntax - like md:visible or sm:invisible
    containerClassName?: string;
}
export const NavBarLogoImage = ({ imgSrc, visibility }: NavBarLogoImageProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
            <div
                className={classNames(
                    `flex flex-row justify-start pl-2 pr-2 ${visibility}`,
                    isScrolled ? styles.squashedHeight : styles.fullHeight,
                    styles.transition
                )}
            >
                <img src={imgSrc} alt="logo" className="object-contain" />
            </div>
    );
};

// finish wrapper
export const NavBarLogoImageMediumLarge = ({ imgSrc, visibility, containerClassName }: NavBarLogoImageProps) => {
    return (
        <div className={containerClassName}>
            <NavBarLogoImage imgSrc={imgSrc} visibility={visibility}></NavBarLogoImage>
        </div>
    );
};
