import { useLoaderData } from 'react-router-dom'
import { Rating, Owner, Tags, Carousel } from 'modules/routes/rental/components'
import { Dropdown } from 'modules/common/components'
import './Rental.scss'

//Fetch avec Loader
export async function rentalLoader({ params }) {
   const { id } = params
   const res = await fetch('/data/logements.json')
   const result = await res.json()
   const rental = result.find((data) => data.id === id)
   if (!rental) {
      throw new Response('Not Found', { status: 404 })
   } else {
      return rental
   }
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
