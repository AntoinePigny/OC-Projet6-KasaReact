import { useLoaderData } from 'react-router-dom'
import { Rating, Owner, Tags, Carousel } from 'modules/routes/rental/components'
import { Dropdown } from 'modules/common/components'
import './Rental.scss'

//Fetch avec Loader
export async function rentalLoader({ params }) {
   const { id } = params
   const res = await fetch('/data/logements.json')
   const result = await res.json()
   const rental = await result.find((data) => data.id === id)
   return rental
}

export default function Rental() {
   const rental = useLoaderData()
   const { title, location, host, description, equipments, rating, tags, pictures } = rental
   return (
      <main className='rental'>
         <Carousel pictures={pictures} />
         <section className='rental-details'>
            <div>
               <div>
                  <h2>{title}</h2>
                  <p>{location}</p>
               </div>
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
/* Ancienne fonction utilisant le useState

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
   return isReady && rental ? renderRental(rental) : console.log('error')
} */
