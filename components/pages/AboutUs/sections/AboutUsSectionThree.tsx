import { GoogleReview } from 'types';
import { ReviewGallery } from '@components/common/reviews/ReviewGallery';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../../Home/TitleTextBlock';
import { OFFWHITE } from 'styles/theme';

export const AboutUsSectionThree = ({ reviews }: { reviews: GoogleReview[] }) => {
    return (
        <WideStrip backgroundColor={OFFWHITE} className="flex flex-col" maxHeight="">
            <TitleTextBlock title="Reviews" fontColor="black" className="pb-10" />
            <div className="w-full">
                <ReviewGallery reviews={reviews} />
            </div>
        </WideStrip>
    );
};
