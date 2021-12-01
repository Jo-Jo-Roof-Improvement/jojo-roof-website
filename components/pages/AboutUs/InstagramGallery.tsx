import React from 'react';
import { InstagramGalleryItem } from './InstagramGalleryItem';

export const InstagramGallery = () => {
    const links = [
        'https://www.instagram.com/p/CV0FJQhI1P3/',
        'https://www.instagram.com/p/CWDbtKxonpp/',
        'https://www.instagram.com/jojoroofimprovement/',
    ];

    return (
        <>
            <div className="flex flex-col md:hidden h-auto md:w-full">
                <InstagramGalleryItem href={links[0]} src={`/instagram-gallery/insta-1.png`} className="pb-10 " />
                <InstagramGalleryItem href={links[1]} src={`/instagram-gallery/insta-2.png`} className="pb-10 " />
                <InstagramGalleryItem href={links[2]} src={`/instagram-gallery/insta-3.png`} className="pb-10 " />
            </div>
            <div className="md:flex md:flex-col hidden lg:hidden">
                <div className="flex flex-row">
                    {[1, 2].map((i) => (
                        <InstagramGalleryItem href={links[i - 1]} key={i} src={`/instagram-gallery/insta-${i}.png`} />
                    ))}
                </div>
                <div className="flex flex-row">
                    {[3].map((i) => (
                        <InstagramGalleryItem href={links[i - 1]} key={i} src={`/instagram-gallery/insta-${i}.png`} />
                    ))}
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-row">
                {[1, 2, 3].map((i) => (
                    <InstagramGalleryItem href={links[i - 1]} key={i} src={`/instagram-gallery/insta-${i}.png`} />
                ))}
            </div>
        </>
    );
};
