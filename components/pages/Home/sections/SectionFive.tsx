import React, { useEffect } from 'react';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../TitleTextBlock';
import { GoogleReview } from 'types';
import { Link, Rating } from '@mui/material';
import { SCREEN_LARGE, SCREEN_MEDIUM, SCREEN_SMALL } from 'styles/theme';
import SwiperCore, { Pagination } from 'swiper';
import { TextBlock } from '@components/common/text/TextBlock';
import { ReviewGallery } from '@components/common/reviews/ReviewGallery';
SwiperCore.use([Pagination]);

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
        <WideStrip align="center" height="300px" backgroundColor="white" className="flex flex-col justify-center">
            <div className="pl-16 pr-16 pb-10 flex flex-col justify-center items-center">
                <TitleTextBlock
                    className="bg-white mb-16"
                    variant="h3"
                    fontColor="black"
                    title="What customers are saying"
                />
                <TextBlock align="center" className="mb-10" fontSize="18pt">
                    JOJO Roof Improvement - Roof restoration, Roof cleaning, Repointing, Rebedding, Roof painting, Roof
                    leaks repair, Roof repair, Gutters cleaning, Valley, Melbourne - Australia.
                </TextBlock>
                <div className="flex flex-row justify-around w-14">
                    <TextBlock align="center" className="mb-10" fontSize="20pt">
                        {currentRating}
                    </TextBlock>
                    {currentRating && <Rating value={currentRating} readOnly />}
                </div>
                <div>
                    <Link href="https://www.google.com/maps/place/JOJO+Roof+Improvements/@-37.8669157,145.0002967,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfaa002d92261e221!8m2!3d-37.8669157!4d145.0024854">
                        <a>
                            <TextBlock>All Google Reviews</TextBlock>
                        </a>
                    </Link>
                </div>
            </div>
            <ReviewGallery reviews={reviews} />
        </WideStrip>
    );
};
