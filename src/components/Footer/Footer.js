import React from 'react'
import logoHeader from '../../images/fundo-cinza.webp'
import iconInsta from '../../images/instagram-icon.svg'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div>
                    <img src={logoHeader} alt='TataZentil Beauty' className={styles.logo} loading="lazy" />
                </div>
                <div className={styles.containerMob}>
                    <div className={styles.contato}>
                        <h6>contato</h6>
                        <p className={styles.phone}>(14) 99753-5672</p>
                        <p className={styles.email}>thaiszentil@hotmail.com</p>
                        <p className={styles.endereco}>Bauru - SP | Av. Comendador José da Silva Martha, 25-66 </p>
                    </div>
                    <div>
                        <h6>Institucional</h6>
                        <p><a href="#extensao">Fio a Fio</a></p>
                        <p><a href="#comentarios">Depoimentos</a></p>
                        <p><a href="#tecnicas">Técnicas</a></p>
                        <p><a href="#contato">Nosso salão</a></p>
                    </div>
                    <div>
                        <h6>Acompanhe nosso trabalho</h6>
                        <a href={'https://www.instagram.com/tatazentilbeautylash/'} target={'_blank'} rel="noreferrer">
                            <img src={iconInsta} loading="lazy" alt='instagram' />
                            TataZentil Beauty
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer