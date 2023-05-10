import React from 'react'
import { LogoMain, NavBar } from 'modules/common/components'
import './Header.scss'

export default function Header() {
   return (
      <header>
         <LogoMain />
         <NavBar />
      </header>
   )
}
