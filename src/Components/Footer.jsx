import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  const {theme} = useContext(ContextGlobal)

  return (

    <footer style={{backgroundColor: theme.footerBg}}>

        <img src="/images/DH.png" alt='DH-logo' />
        <div className='redes'>
        <img src='../../public/images/ico-facebook.png' className='red-icon'/>
        <img src='../../public/images/ico-instagram.png' className='red-icon'/>
        <img src='../../public/images/ico-tiktok.png' className='red-icon'/>
        <img src='../../public/images/ico-whatsapp.png' className='red-icon'/>
        </div>
    </footer>
  )
}

export default Footer
