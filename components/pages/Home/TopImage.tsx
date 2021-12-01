/* eslint-disable @next/next/no-img-element */
//https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit

import classNames from 'classnames';

export interface FullWidthImageProps {
    src: string; // path to local /images/imagename.ext
    alt?: string;
    objectPosition?: string; // object-position: '50% 0';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'; // object-fit: cover;
    height?: string; // height: '100%';
    className?: string;
    width?: string; // width: '100%';
}
export const FullWidthImage = ({
    src,
    alt = 'roof',
    objectPosition = '50% 0',
    height = '600px',
    width = '100%',
    objectFit = 'cover',
    className = '',
}: FullWidthImageProps) => {
    return (
        <div className="bg-black w-full h-auto">
            <img
                className={className}
                src={src}
                alt={alt}
                style={{ width, height, objectFit, objectPosition: objectPosition }}
            />
        </div>
    );
};
