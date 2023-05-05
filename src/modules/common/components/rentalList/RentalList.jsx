import React from 'react'
import RentalCard from 'modules/common/components/rentalCard/RentalCard'
import './RentalList.scss'

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
