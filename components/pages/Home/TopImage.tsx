/* eslint-disable @next/next/no-img-element */
//https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit

export interface FullWidthImageProps {
    src: string; // path to local /images/imagename.ext
    objectPosition?: string; // object-position: '50% 0';
}
export const FullWidthImage = ({ src, objectPosition = '50% 0' }: FullWidthImageProps) => {
    return (
        <div className=" bg-black">
            <div className="w-full h-auto">
                <img
                    src={src}
                    alt="logo"
                    className="object-fit"
                    style={{ width: '100%', height: '600px', objectFit: 'cover', objectPosition: objectPosition }}
                />
            </div>
        </div>
    );
};
