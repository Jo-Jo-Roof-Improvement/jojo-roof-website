/* eslint-disable @next/next/no-img-element */
import { Link } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

export const InstagramGalleryItem = ({
    src,
    alt = 'client',
    className = '',
    href = '',
}: {
    src: string;
    alt?: string;
    className?: string;
    href?: string;
}) => {
    return (
        <Link href={href}>
            <div className={classNames('pl-5 pr-5', className)}>
                <img src={src} alt={alt} className="object-cover" />
            </div>
        </Link>
    );
};
