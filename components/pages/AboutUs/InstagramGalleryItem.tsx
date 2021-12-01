/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import React from 'react';

export const InstagramGalleryItem = ({ src, alt = 'client', className = ""}: { src: string; alt?: string, className?: string }) => {
    return (
        <div className={classNames("pl-5 pr-5", className)}>
            <img src={src} alt={alt} className="object-cover" />
        </div>
    );
};
