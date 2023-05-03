import { useState, useEffect } from 'react'
import './App.css'
import RentalList from '../../layout/rentalList/RentalList'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'

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
      <main>
         <Header />
         <RentalList rentals={rentals} />
         <Footer />
      </main>
   )
}
