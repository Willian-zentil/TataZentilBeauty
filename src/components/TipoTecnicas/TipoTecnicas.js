import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from "swiper"

import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import styles from './TipoTecnicas.module.css'
import basico from '../../images/basico.webp'
import intermediario from '../../images/intermediario.webp'
import mega from '../../images/mega.webp'


function TipoTecnicas() {
    const imageArray = [
        {
            image: basico,
            title: 'Volume Básico',
            text: 'Nesse efeito é aplicado apenas um fio em cada cílios natural para proporcionar um olhar com maior densidade e total naturalidade.'
        },
        {
            image: intermediario,
            title: 'Volume intermediário',
            text: 'Aplicado em média 2 fios sintéticos em cada cílios natural, proporcionando um olhar com efeito mais completo. Sem muito volume porem bem mais completo que o procedimento básico.'
        },
        {
            image: mega,
            title: 'Volume mega',
            text: 'São aplicados de três a dez fios em cada cílios para um olhar volumoso e glamouroso. Impossível de passar despercebida!'
        }
    ]

    return (
        <section className={styles.tipoTecnicas} id="tecnicas">
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                navigation={false}
                pagination={true}
                breakpoints={{
                    "300": {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    "640": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "920": {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                }}
                modules={[Navigation, Pagination]}
            >
                {imageArray.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.slider}>
                                <img className={styles.imgTipos} src={item.image} alt={item.title}/>
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