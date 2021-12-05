import { CardWithSlideOver } from '../../pages/Home/CardWithSlideOver';
import { GoogleReview } from 'types';
import { useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

export const ReviewGallery = ({ reviews }: { reviews: GoogleReview[] }) => {
    const theme = useTheme();

    const matchesSmall = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const matchesMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const matchesLarge = useMediaQuery(theme.breakpoints.up('md'));

    const [swiper, setSwiper] = useState<any>(2);

    const slideTo = (index: number) => {
        if (swiper) {
            swiper.slideTo(index);
        }
    };

    return (
        <Swiper
            centeredSlides={true}
            pagination={{
                clickable: false,
            }}
            // slidesPerView={1}
            slidesPerView={matchesSmall ? 1 : matchesMedium ? 2 : 3}
            onSwiper={(swiper) => setSwiper(swiper)}
        >
            {reviews.map((review: GoogleReview, key: number) => (
                <SwiperSlide className="pb-16" key={review.profile_photo_url}>
                    <CardWithSlideOver key={key} review={review} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
