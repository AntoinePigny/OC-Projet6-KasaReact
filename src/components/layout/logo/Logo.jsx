import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function LogoMain() {
   return (
      <h1>
         <Link to='/'>
            <Logo alt='Kasa' />
         </Link>
      </h1>
   )
}
