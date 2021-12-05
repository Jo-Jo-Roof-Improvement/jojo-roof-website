/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './NavigationBar.module.css';

interface NavBarLogoImageProps {
    imgSrc: string;
    visibility: string; // using tailwindcss syntax - like md:visible or sm:invisible
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
                `w-auto mx-auto flex flex-row justify-center pl-2 pr-2 ${visibility}`,
                isScrolled ? styles.squashedHeight : styles.fullHeight,
                styles.transition
            )}
        >
            <img src={imgSrc} alt="logo" className="object-contain" />
        </div>
    );
};

interface NavBarLogoImageMediumLargeProps extends NavBarLogoImageProps {
    containerClassName?: string;
    position: string;
}

export const NavBarLogoImageMediumLarge = ({
    imgSrc,
    visibility,
    containerClassName,
    position,
}: NavBarLogoImageMediumLargeProps) => {
    return (
        <div className={containerClassName}>
            <NavBarLogoImage imgSrc={imgSrc} visibility={`${visibility} ${position}`}></NavBarLogoImage>
        </div>
    );
};
