/* eslint-disable @next/next/no-img-element */
import { Link } from '@mui/material';
import classNames from 'classnames';

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
            <div className={classNames('rounded-t-md rounded-b-md pl-5 pr-5 hover:bg-red-300', className)}>
                <img src={src} alt={alt} className="object-cover" />
            </div>
        </Link>
    );
};
