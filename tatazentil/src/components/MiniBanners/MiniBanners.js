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
                    delay: 7500,
                    disableOnInteraction: false,
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