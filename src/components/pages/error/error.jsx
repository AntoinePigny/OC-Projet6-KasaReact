import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
   const error = useRouteError()
   console.error(error)

   return (
      <div>
         <p>Sorry, an error has occured</p>
      </div>
   )
}
