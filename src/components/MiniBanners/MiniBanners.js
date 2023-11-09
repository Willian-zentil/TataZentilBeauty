import React from 'react'

import 'swiper/css';
import styles from './MiniBanners.module.css'

function MiniBanners() {

    return (
        <section className={styles.MiniBanners}>
            <p>Olá! sou a Thais Zentil, Lash Design | Eyebrows Design e tenho como lema <em>Embelezar Belas</em>, através da técnica de extensão de cílios Fio a Fio trabalho com varios tipos de volumes, encontrando o melhor tipo para cada cliente que confia no nosso trabalho!</p>
            <a href="https://calendly.com/tatazentilbeauty" target='_blank' rel='noreferrer'>Agende um horario</a>
        </section>
    )
}

export default MiniBanners