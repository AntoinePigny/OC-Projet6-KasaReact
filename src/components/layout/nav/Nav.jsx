import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

export default function NavBar() {
   return (
      <nav>
         <ul>
            <li>
               <NavLink to='/'>Accueil</NavLink>
            </li>
            <li>
               <NavLink to='/about'>A Propos</NavLink>
            </li>
         </ul>
      </nav>
   )
}
