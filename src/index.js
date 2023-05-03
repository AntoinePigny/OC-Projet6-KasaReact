import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/pages/home/App'
import ErrorPage from './components/pages/error/error'
import About from './components/pages/about/About'
import Rental from './components/pages/rental/Rental'

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
