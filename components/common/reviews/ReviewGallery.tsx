import React, { useState } from 'react';
import { CardWithSlideOver } from '../../pages/Home/CardWithSlideOver';
import { GoogleReview } from 'types';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ReviewGallery = ({ reviews }: { reviews: GoogleReview[] }) => {
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
            slidesPerView={3}
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
