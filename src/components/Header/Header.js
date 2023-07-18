import React, { useEffect } from 'react'
import styles from './Header.module.css'
import logo from '../../images/sub marca fundo transparente 1.png'
import logoHeader from '../../images/logomarca_fundo_transparente.png'
import video from '../../images/video.mp4'

const Header = () => {

  useEffect(() => {
    const play_video = setTimeout(() => {
      document.getElementById('vid').play();
    }, 1500);

    return () => {
      clearTimeout(play_video)
    }
  }, [])


  return (
    <header id='header' className={styles.header}>
      <video id='vid' muted loop={true} autostart={true} autoPlay={true} playsinline={true} src={video} className={styles.video} type="video/mp4" />
      <div className={styles.container}>
        <div className={styles.menu}>
          <a className={styles.logoLink} href='#header'><img src={logoHeader} alt='TataZentil Beauty' className={styles.logo} /></a>
          <ul className='desktop'>
            <li><a href='#extensao'>Extensão De Cílios</a></li>
            <li><a href='#tecnicas'>Técnicas para Cílios</a></li>
            <li><a href='#contato'>Contato</a></li>
          </ul>
        </div>
        <h1 className={styles.layer}>TataZentil Beauty - Extensão de cílios</h1>
      </div>
      {/* <img className={styles.banner} src={bannerHeader} alt='Logo TataZentil' /> */}
    </header>
  )
}

export default Header