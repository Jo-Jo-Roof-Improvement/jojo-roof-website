import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import cls from './LandingPageSlider.module.scss';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);


export const FullWidthSlider = ({ items }: { items: React.ReactNode[] }) => {
    const [swiper, setSwiper] = useState<any>(2);

    return (
        <Swiper
            // centeredSlides={true}
            pagination={{
                clickable: false,
            }}
            effect="slide"
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiper(swiper)}
        >
            {items.map((item: React.ReactNode, key: number) => (
                <SwiperSlide key={key} className={cls.slide}>
                    <CardWithSlideOver key={key} item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export const CardWithSlideOver = ({ item }: { item: React.ReactNode }) => {
    return <div style={{ width: '100%', height: '100%' }}>{item}</div>;
};
