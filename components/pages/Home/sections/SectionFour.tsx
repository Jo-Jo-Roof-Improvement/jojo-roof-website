import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../TitleTextBlock';
import ImageGallery from 'react-image-gallery';

export interface SectionFourProps {
    galleryPhotoList: { original: string }[];
}

export const SectionFour = ({ galleryPhotoList }: SectionFourProps) => {

    return (
        <>
            <WideStrip align="center" height="200px" backgroundColor="black">
                <div className="w-full h-2/3">
                    <TitleTextBlock className="pb-20" variant="h3" fontColor="white" title="Photo Gallery" />
                    <div className="flex mb-12 w-full">
                        <ImageGallery items={galleryPhotoList} />
                    </div>
                </div>
            </WideStrip>
        </>
    );
};
