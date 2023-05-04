import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function MainLayout({ children }) {
   return (
      <>
         <div className='container'>
            <Header />
            {children}
         </div>
         <Footer />
      </>
   )
}
