import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Rating, Owner, Tags } from 'modules/routes/rental/components'
import { Dropdown } from 'modules/common/components'
import { redirect } from 'react-router-dom'
import './Rental.scss'

export default function Rental() {
   const [rental, setRental] = useState()
   const [isReady, setIsReady] = useState(false)
   const { id } = useParams()

   useEffect(() => {
      fetch('/data/logements.json')
         .then((response) => response.json())
         .then((result) => {
            setIsReady(true)
            const rental = result.find((data) => data.id === id)
            setRental(rental)
         })
   }, [id])

   if (!isReady) {
      return <p>Loading</p>
   }

   return isReady && rental ? renderRental(rental) : redirect('/error')
}

function renderRental(rental) {
   const { title, location, host, description, equipments, rating, tags } = rental
   return (
      <main className='rental'>
         <section className='rental-details'>
            <div>
               <h2>{title}</h2>
               <p>{location}</p>
               <Tags tags={tags} />
            </div>
            <div>
               <Rating rating={rating} />
               <Owner host={host} />
            </div>
         </section>
         <div className='dropdowns'>
            <Dropdown title='Description' description={description} />
            <Dropdown title='Equipements' list={equipments} />
         </div>
      </main>
   )
}
