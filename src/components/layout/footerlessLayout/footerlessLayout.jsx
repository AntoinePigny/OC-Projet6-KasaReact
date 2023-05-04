import React from 'react'
import Header from '../header/Header'

export default function FooterLessLayout({ children }) {
   return (
      <div className='container'>
         <Header />
         {children}
      </div>
   )
}
