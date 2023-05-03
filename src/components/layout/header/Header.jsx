import React from 'react'
import LogoMain from '../logo/Logo'
import NavBar from '../nav/Nav'
import './Header.scss'

export default function Header() {
   return (
      <header>
         <LogoMain />
         <NavBar />
      </header>
   )
}
