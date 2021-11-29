/* eslint-disable @next/next/no-img-element */
//https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit

import classNames from 'classnames';

export interface FullWidthImageProps {
    src: string; // path to local /images/imagename.ext
    alt?: string;
    objectPosition?: string; // object-position: '50% 0';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'; // object-fit: cover;
    height?: string; // height: '100%';
    containerClassName?: string;
    className?: string;
}
export const FullWidthImage = ({
    src,
    alt = 'roof',
    objectPosition = '50% 0',
    height = '600px',
    objectFit = 'cover',
    containerClassName = '',
    className = '',
}: FullWidthImageProps) => {
    return (
        <div className={classNames('bg-black', containerClassName)}>
            <div className="w-full h-auto">
                <img
                    className={className}
                    src={src}
                    alt={alt}
                    style={{ width: '100%', height, objectFit, objectPosition: objectPosition }}
                />
            </div>
        </div>
    );
};
