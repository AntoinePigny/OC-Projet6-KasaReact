import React from 'react'
import LogoMain from 'modules/common/components/logo/Logo'
import NavBar from 'modules/common/components/nav/Nav'
import './Header.scss'

export default function Header() {
   return (
      <header>
         <LogoMain />
         <NavBar />
      </header>
   )
}
