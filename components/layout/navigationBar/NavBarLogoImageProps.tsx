/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './NavigationBar.module.css';

interface NavBarLogoImageProps {
    imgSrc: string;
}
export const NavBarLogoImage = ({ imgSrc }: NavBarLogoImageProps) => {
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
                'flex flex-row justify-center',
                isScrolled ? styles.squashedHeight : styles.fullHeight,
                styles.transition
            )}
        >
            <img src={imgSrc} alt="logo" className="object-contain" />
        </div>
    );
};
