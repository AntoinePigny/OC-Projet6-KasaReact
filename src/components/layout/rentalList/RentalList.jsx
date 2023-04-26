import React from 'react'
import RentalCard from '../rentalCard/RentalCard'
import './RentalList.css'

export default function RentalList({ rentals }) {
   return (
      <section className='rentalList'>
         <ul>
            {rentals.map((rental) => (
               <RentalCard key={rental.id} rental={rental} />
            ))}
         </ul>
      </section>
   )
}
