import React from 'react'
import { Header, Footer } from 'modules/sections/components'

export default function layout({ children }) {
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
