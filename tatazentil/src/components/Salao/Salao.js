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
        <section className={styles.salao}>
            <h2>Visite Nosso Salão</h2>
            <div className={styles.boxAdress}>
                <img className={styles.salaoImg} src={imgSalao} />
                <div className={styles.info}>
                    <p>Endereço</p>
                    <p>Rua tal tal tal  11-11</p>
                    <p>centro - bauru </p>
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

