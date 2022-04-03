import { useEffect } from 'react';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../TitleTextBlock';
import { GoogleReview } from 'types';
import { Link, Rating } from '@mui/material';
import { TextBlock } from '@components/common/text/TextBlock';
import { ReviewGallery } from '@components/common/reviews/ReviewGallery';
import SwiperCore, { Pagination, Navigation, Lazy, Controller } from 'swiper';
import { NAVBLUE, OFFWHITE } from 'styles/theme';
SwiperCore.use([Pagination, Navigation, Lazy, Controller]);

export interface SectionFiveProps {
    reviews: GoogleReview[];
}
export const SectionFive = ({ reviews }: SectionFiveProps) => {
    const currentRating = parseFloat(
        (
            reviews.map((x: GoogleReview) => x.rating).reduce((a: number, b: number) => a + b, 0) / reviews.length
        ).toFixed(1)
    );
    return (
        <WideStrip align="center" height="300px" backgroundColor={OFFWHITE} className="flex flex-col justify-center">
            <TitleTextBlock
                style={{ marginBottom: '3rem' }}
                className=""
                variant="h2"
                fontColor={NAVBLUE}
                title="What customers are saying"
            />
            <div className="pl-16 pr-16 pb-5 pt-4 mb-10 flex flex-col justify-center items-center border-2">
                <TextBlock align="center" className="mb-10" fontSize="18pt">
                    JOJO Roof Improvement
                </TextBlock>
                <TextBlock fontSize="32pt">{currentRating} / 5</TextBlock>
                <TextBlock fontSize="12pt" align="center">
                    stars
                </TextBlock>
                {currentRating && <Rating value={currentRating} readOnly className="pt-3 pb-3" />}

                <TextBlock>On</TextBlock>
                <TextBlock paragraph>Google Maps</TextBlock>

                <Link
                    style={{ textDecoration: 'none', fontFamily: 'Source Sans Pro' }}
                    href="https://www.google.com/maps/place/JOJO+Roof+Improvements/@-37.8669157,145.0002967,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfaa002d92261e221!8m2!3d-37.8669157!4d145.0024854"
                >
                    See all reviews on Google Maps
                </Link>
            </div>
            <div className="w-full mb-5">
                <ReviewGallery reviews={reviews} />
            </div>
        </WideStrip>
    );
};
