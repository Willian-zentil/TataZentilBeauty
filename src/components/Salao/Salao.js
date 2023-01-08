import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

import styles from './Salao.module.css'
import imgSalao from '../../images/salao.jpg'
import iconInsta from '../../images/instagram-icon.svg'

function Map() {
    const center = useMemo(() => ({ lat: -22.3523011, lng: -49.0864202 }), [])

    return (
        <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
        </GoogleMap>
    )
}

function Salao() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAOYKmoBq7MK1k5r9HQRpsl6_xxUDpCIc8"
    })

    return (
        <section className={styles.salao} id="contato">
            <h2>Visite Nosso Salão</h2>
            <div className={styles.boxAdress}>
                <img className={styles.salaoImg} src={imgSalao} />
                <div className={styles.info}>
                    <p className={styles.uppercase}>Endereço</p>
                    <p>Av. Comendador José da Silva Martha</p>
                    <p>25-66 - Vila Sao Francisco</p>
                    <p>Bauru - SP</p>
                    {isLoaded && <Map />}
                </div>
            </div>
            <a href={'https://www.instagram.com/tatazentilbeautylash/'} target={'_blank'}>
                <img src={iconInsta} />
                @TataZentil Beauty
            </a>
        </section>
    )
}

export default Salao

