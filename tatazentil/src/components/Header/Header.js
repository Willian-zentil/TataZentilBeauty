import React from 'react'
import styles from './Header.module.css'
import logo from '../../images/sub marca fundo transparente 1.png'

const Header = () => {
  return (
    <header id='header' className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <a href='#header'><img src={logo} alt='Logo TataZentil' className={styles.logo} /></a>
          <ul className='desktop'>
            <li><a href='#extensao'>Extensão De Cílios</a></li>
            <li><a href=''>Design Sombrancelha</a></li>
            <li><a href=''>Contato</a></li>
          </ul>
        </div>
        <span className={styles.layer}>TataZentil Beauty</span>
      </div>
      {/* <img className={styles.banner} src={bannerHeader} alt='Logo TataZentil' /> */}
    </header>
  )
}

export default Header