import React from 'react'
import { Link } from 'react-router-dom'
import './RentalCard.scss'

export default function RentalCard({ rental }) {
   const { id, title, cover } = rental
   return (
      <li>
         <Link to={`/rental/${id}`} className='rentalCard'>
            <div className='gradient'>
               <img src={cover} alt={title} />
            </div>
            <h3>{title}</h3>
         </Link>
      </li>
   )
}
