import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from "swiper"

import 'swiper/css'
import "swiper/css/navigation"
import styles from './TipoTecnicas.module.css'

import imgModelo1 from '../../images/fio-a-fio.png'
import imgModelo2 from '../../images/modelo-2.png'

function TipoTecnicas() {
    const imageArray = [
        {
            image: imgModelo1,
            title: 'Técnica Fio a Fio',
            text: 'Texto teste para tecnica   Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnicaTexto teste para tecnica'
        },
        {
            image: imgModelo2,
            title: 'Técnica Lash Design',
            text: 'Texto teste para tecnica   Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnicaTexto teste para tecnica'
        }
    ]

    return (
        <section className={styles.tipoTecnicas}>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                navigation={true}
                breakpoints={{
                    "300": {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    "640": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
            >
                {imageArray.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.slider}>
                                <img src={item.image} />
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </section>
    )
}

export default TipoTecnicas