import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from 'modules/routes/app/App'
import Home from 'modules/routes/home/Home.jsx'
import ErrorPage from 'modules/routes/error/error.jsx'
import About from 'modules/routes/about/About'
import Rental, { rentalLoader } from 'modules/routes/rental/Rental'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route element={<App />} path='/' errorElement={<ErrorPage />}>
         <Route index element={<Home />} />
         <Route path='about' element={<About />} />
         <Route loader={rentalLoader} path='rental/:id' element={<Rental />} />
      </Route>
   )
)

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)
