import React from 'react';
import { InstagramGalleryItem } from './InstagramGalleryItem';

export const InstagramGallery = () => {
    return (
        <>
            <div className="flex flex-col md:hidden h-auto w-2/3 md:w-full">
                <InstagramGalleryItem src={`/instagram-gallery/insta-1.png`} className="pb-10 " />
                <InstagramGalleryItem src={`/instagram-gallery/insta-2.png`} className="pb-10 " />
                <InstagramGalleryItem src={`/instagram-gallery/insta-3.png`} className="pb-10 " />
            </div>
            <div className="md:flex md:flex-col hidden lg:hidden">
                <div className="flex flex-row">
                    {[1, 2].map((i) => (
                        <InstagramGalleryItem key={i} src={`/instagram-gallery/insta-${i}.png`} />
                    ))}
                </div>
                <div className="flex flex-row">
                    {[3].map((i) => (
                        <InstagramGalleryItem key={i} src={`/instagram-gallery/insta-${i}.png`} />
                    ))}
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-row">
                {[1, 2, 3].map((i) => (
                    <InstagramGalleryItem key={i} src={`/instagram-gallery/insta-${i}.png`} />
                ))}
            </div>
        </>
    );
};
