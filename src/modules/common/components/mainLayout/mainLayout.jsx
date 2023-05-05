import React from 'react'
import Header from 'modules/sections/components/header/Header'
import Footer from 'modules/sections/components/footer/Footer'

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
