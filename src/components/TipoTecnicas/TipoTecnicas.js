import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from "swiper"

import 'swiper/css'
import "swiper/css/navigation"
import styles from './TipoTecnicas.module.css'

import imgVolumeBasico from '../../images/volume-basico.jpeg'
import imgVolumeIntermediario from '../../images/volume-intermediario.jpeg'
import imgVolumeMega from '../../images/volume-mega.jpeg'



function TipoTecnicas() {
    const imageArray = [
        {
            image: 'basico',
            title: 'Volume Básico',
            text: 'Texto teste para tecnica   Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnicaTexto teste para tecnica'
        },
        {
            image: 'intermediario',
            title: 'Volume intermediário',
            text: 'Texto teste para tecnica   Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnicaTexto teste para tecnica'
        },
        {
            image: 'mega',
            title: 'Volume mega',
            text: 'Texto teste para tecnica   Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnica Texto teste para tecnicaTexto teste para tecnica'
        }
    ]

    return (
        <section className={styles.tipoTecnicas} id="tecnicas">
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
                                <div className={`${item.image} ${styles.imgTipos}`}></div>
                                <h5>{item.title}</h5>
                                <p>{/*item.text*/}</p>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </section>
    )
}

export default TipoTecnicas