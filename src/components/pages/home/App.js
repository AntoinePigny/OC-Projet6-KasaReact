import { useState, useEffect } from 'react'
import './App.css'
import RentalList from '../../layout/rentalList/RentalList'
import MainLayout from '../../layout/mainLayout/mainLayout'
import Banner from '../../layout/banner/Banner'

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
      <MainLayout>
         <main className='home'>
            <Banner title={`Chez vous,\n partout et ailleurs`} />
            <RentalList rentals={rentals} />
         </main>
      </MainLayout>
   )
}
