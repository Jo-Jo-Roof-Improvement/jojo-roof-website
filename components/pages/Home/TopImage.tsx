/* eslint-disable @next/next/no-img-element */
//https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit

import { ZoomImage } from '@components/common/image/ZoomInImage';
import classNames from 'classnames';

export interface FullWidthImageProps {
    src: string; // path to local /images/imagename.ext
    alt?: string;
    objectPosition?: string; // object-position: '50% 0';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'; // object-fit: cover;
    height?: string; // height: '100%';
    className?: string;
    width?: string; // width: '100%';
    containerClassNames?: string;
    otherStyles?: React.CSSProperties;
}
export const FullWidthImage = ({
    src,
    alt = 'roof',
    objectPosition = '50% 0',
    height = '600px',
    width = '100%',
    objectFit = 'cover',
    className = '',
    containerClassNames = '',
    otherStyles = {},
}: FullWidthImageProps) => {
    return (
        <div className={classNames('bg-black w-full h-auto', containerClassNames)}>
            <ZoomImage
                imgSrc={src}
                alt={alt}
                className={className}
                style={{ width, height, objectFit, objectPosition: objectPosition, ...otherStyles }}
            />
        </div>
    );
};
