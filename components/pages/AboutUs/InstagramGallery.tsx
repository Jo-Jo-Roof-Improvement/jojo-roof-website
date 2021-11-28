import React from 'react';
import { InstagramGalleryItem } from './InstagramGalleryItem';


export const InstagramGallery = () => {
    return (
        <>
            <div className="flex flex-col md:hidden">
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
            <div className="hidden md:flex md:flex-row">
                {[1, 2, 3].map((i) => (
                    <InstagramGalleryItem key={i} src={`/instagram-gallery/insta-${i}.png`} />
                ))}
            </div>
        </>
    );
};
