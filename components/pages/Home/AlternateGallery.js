/* eslint-disable @next/next/no-img-element */
import SwiperCore, { Pagination, Navigation, Lazy, Controller, SwiperOptions } from 'swiper';
import Swiper from 'react-id-swiper';
import { useEffect, useRef, useState } from 'react';

SwiperCore.use([Pagination, Navigation, Lazy, Controller]);

// type Options = SwiperOptions & {
//     getSwiper: (swiper: typeof Swiper) => void;
// };

// type Thumbs = Options & {
//     style: {
//         width: string;
//     };
// };

export const ManipulatingSwiper = ({ images, ref }) => {
    const [swiper, updateSwiper] = useState < any > null;
    const [swiperThumbs, updateSwiperThumbs] = useState < any > null;
    let params = {
        modules: [Controller, Pagination, Navigation, Lazy],
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false,
        spaceBetween: 30,
        getSwiper: updateSwiper, // Get swiper instance callback
    };
    let thumbsParams = {
        modules: [Controller],
        slideToClickedSlide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        getSwiper: updateSwiperThumbs, // Get swiper instance callback
        style: {
            width: '100px',
        },
    };

    // Bind swiper and swiper thumbs
    useEffect(() => {
        if (swiper && swiperThumbs) {
            swiper.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiper;
        }
    }, [swiper, swiperThumbs]);

    return (
        <div>
            <Swiper {...params}>
                {images.map((image, idx) => (
                    <SlideItem key={`slide_${idx}`} style={{ width: '100px' }}>
                        <img key={image.src} className="swiper-lazy" data-src={image.src} alt="text" />
                    </SlideItem>
                ))}
            </Swiper>

            <Swiper {...thumbsParams}>
                {images.map((image, idx) => (
                    <SlideItem key={`slide_${idx}`} className="swiper-slide-auto">
                        <img
                            key={image.src}
                            className="swiper-lazy"
                            src={image.src.replace('320/240', '100/100')}
                            alt=""
                        />
                    </SlideItem>
                ))}
            </Swiper>
        </div>
    );
};

export const SlideItem = ({ children, style = {}, className }) => (
    <div className={`swiper-slide ${className}`} style={style}>
        <span>{children}</span>
    </div>
);
