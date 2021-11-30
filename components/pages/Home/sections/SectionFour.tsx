/* eslint-disable @next/next/no-img-element */
import { WideStrip } from '@components/common/strips/WideStrip';
import React, { LegacyRef, useRef } from 'react';
import { TitleTextBlock } from '../TitleTextBlock';

import ImageGallery from 'react-image-gallery';
// import { ManipulatingSwiper } from '../AlternateGallery';
export interface SectionFourProps {
    galleryPhotoList: { original: string }[];
}
export const SectionFour = ({ galleryPhotoList }: SectionFourProps) => {
    const ref = useRef() as LegacyRef<ImageGallery>;

    const renderCustomControls = () => {
        return <div>WHAT THE HECK IS THIS - can I make the faded previews on left and right using this?? </div>;
    };

    // const images = galleryPhotoList.map((x) => ({ src: x.original }));

    return (
        <>
            <WideStrip align="center" height="200px" backgroundColor="black">
                <div className="w-full h-2/3">
                    <TitleTextBlock className="pb-20" variant="h3" fontColor="white" title="Photo Gallery" />
                    <div className="flex mb-12 w-full">
                        <ImageGallery
                            renderCustomControls={renderCustomControls}
                            ref={ref}
                            items={galleryPhotoList}
                        />
                    </div>
                </div>
            </WideStrip>

            {/* <WideStrip align="center" height="300px" backgroundColor="gray">
                <div className="w-full">
                    <ManipulatingSwiper images={images} />
                </div>
            </WideStrip> */}
        </>
    );
};
