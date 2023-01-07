import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import 'swiper/css';
import styles from './MiniBanners.module.css'
import image from '../../images/Screenshot.png'

function MiniBanners() {
    const imageArray = [image, image, image, image, image]

    return (
        <section className={styles.MiniBanners}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 17500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    "300": {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    "640": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "992": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                }}
                modules={[Autoplay]}
            >
                {imageArray.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={image} />
                        </SwiperSlide>)
                })}
            </Swiper>
        </section>
    )
}

export default MiniBanners