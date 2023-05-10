import React from 'react'
import { Header, Footer } from 'modules/sections/components'
import { Outlet } from 'react-router-dom'

export default function layout() {
   return (
      <>
         <div className='container'>
            <Header />
            <Outlet />
         </div>
         <Footer />
      </>
   )
}
