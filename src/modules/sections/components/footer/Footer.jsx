import React from 'react'
import { ReactComponent as LogoWhite } from 'modules/common/assets/logo-white.svg'
import './Footer.scss'

export default function Footer() {
   return (
      <footer>
         <LogoWhite alt='Kasa' />
         <p>© 2023 Kasa. All rights reserved</p>
      </footer>
   )
}
