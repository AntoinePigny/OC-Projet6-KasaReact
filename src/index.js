import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from 'modules/routes/home/App'
import ErrorPage from 'modules/routes/error/error'
import About from 'modules/routes/about/About'
import Rental from 'modules/routes/rental/Rental'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
   },
   {
      path: '/about',
      element: <About />,
   },
   {
      path: '/rental/:id',
      element: <Rental />,
   },
])

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)
