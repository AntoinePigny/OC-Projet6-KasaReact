import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'
import FooterLessLayout from 'layouts/footerlessLayout/footerlessLayout'

export default function ErrorPage() {
   return (
      <FooterLessLayout>
         <main className='error-wrapper'>
            <div>
               <h2>404</h2>
               <span>
                  Oups! La page que <br />
                  vous demandez n'existe pas.
               </span>
            </div>
            <Link to='/'>Retourner sur la page d'accueil</Link>
         </main>
      </FooterLessLayout>
   )
}
