import React from 'react'
import './Banner.scss'

export default function Banner({ title }) {
   return (
      <div className='banner'>
         <h2>{title}</h2>
      </div>
   )
}
