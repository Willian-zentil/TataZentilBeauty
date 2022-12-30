import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.menu}>
        <img src='' alt='Logo TataZentil'/>
        <ul>
          <li>Extensão De Cílios</li>
          <li>Design Sombrancelha</li>
          <li>Contato</li>
        </ul>
      </div>
      <span className={styles.layer}>TataZentil Beauty</span>
    </header>
  )
}

export default Header