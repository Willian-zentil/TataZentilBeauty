import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import 'swiper/css';
import styles from './MiniBanners.module.css'
import image1 from '../../images/apresentacao-1.JPG'
import image2 from '../../images/apresentacao-2.JPG'
import image3 from '../../images/apresentacao-3.jpeg'
import image5 from '../../images/apresentacao-5.JPG'

function MiniBanners() {
    const imageArray = [image1, image2, image3, image5]

    return (
        <section className={styles.MiniBanners}>
            <p>Olá! sou a thais Zentil, Lash Design | Eyebrows Design e tenho como lema <em>Embelezar Belas</em>, através da técnica de extensão de cílios Fio a Fio trabalho com varios tipos de volumes, encontrando o melhor tipo para cada cliente que confia no nosso trabalho!</p>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 5500,
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