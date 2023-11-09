import React from 'react'

import styles from './Extensao.module.css'
import fioafio from '../../images/fio-a-fio.png'

function Extensao() {
  return (
    <section className={styles.extensao} id="extensao">
      <h2>Extensão De Cílios Fio a Fio</h2>
      <div className={styles.containerInternoExtensao}>
        <div>
          <img src={fioafio} alt={'extesão de cílios fio fio'} loading="lazy"/>
        </div>
        <div>
          <p>A extensão de cílios, também chamada de alongamento, é o nome que se da a técnica utilizada para dar volume e curvatura aos fios, assim te dando o conforto de estar em sua melhor versão 24h por dia, mesmo sem maquiagem</p>
          <p>Existem diferentes tipos de extensões de cílios, sendo umas das principais as de volume (básico, intermediário e mega) onde múltiplos fios são aplicados em cada cílio natural, proporcionando um efeito mais volumoso,</p>
        </div>
      </div>
    </section>
  )
}

export default Extensao