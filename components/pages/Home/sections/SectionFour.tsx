import { WideStrip } from '@components/common/strips/WideStrip';
import React, { LegacyRef, useRef } from 'react';
import { TitleTextBlock } from '../TitleTextBlock';
import ImageGallery from 'react-image-gallery';
import ReactImageGallery from 'react-image-gallery';

export interface SectionFourProps {
    galleryPhotoList: { original: string }[];
}
export const SectionFour = ({ galleryPhotoList }: SectionFourProps) => {
    const ref = useRef() as LegacyRef<ReactImageGallery>;

    const renderCustomControls = () => {
        return <div>WHAT THE HECK IS THIS - can I make the faded previews on left and right using this?? </div>;
    };

    return (
        <WideStrip align="center" height="300px" backgroundColor="black">
            <div className="w-full">
                <TitleTextBlock className="pb-20" variant="h3" fontColor="white" title="Photo Gallery" />
                <div className="mx-auto mb-12 h-auto">
                    <ImageGallery renderCustomControls={renderCustomControls} ref={ref} items={galleryPhotoList} />
                </div>
            </div>
        </WideStrip>
    );
};
