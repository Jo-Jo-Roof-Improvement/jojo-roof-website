/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const InstagramGalleryItem = ({ src, alt = 'client' }: { src: string; alt?: string; }) => {
    return (
        <div style={{ height: '300px', width: '300px' }} className="pl-5 pr-5">
            <img src={src} alt={alt} />
        </div>
    );
};
