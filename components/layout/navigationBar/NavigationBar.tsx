import { useEffect, useState } from 'react';

export const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={isScrolled ? 'bg-black' : 'bg-white'}>
            <nav>A NavigationBar With Site Links</nav>
        </div>
    );
};
