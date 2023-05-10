import { useState, useEffect } from 'react'
import './Home.scss'
import RentalList from 'modules/routes/home/components/rentalList/RentalList'
import { Banner } from 'modules/common/components'

export default function App() {
   const [rentals, setRentals] = useState([])
   const [isReady, setIsReady] = useState(false)

   useEffect(() => {
      fetch('/data/logements.json')
         .then((res) => res.json())
         .then((data) => {
            setIsReady(true)
            setRentals(data)
         })
   }, [])

   if (!isReady) {
      return <p>Loading</p>
   }

   return (
      <main className='home'>
         <Banner title={`Chez vous,\n partout et ailleurs`} />
         <RentalList rentals={rentals} />
      </main>
   )
}
