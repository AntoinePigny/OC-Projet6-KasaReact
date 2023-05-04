import React from 'react'
import './Dropdown.scss'

export default function Dropdown({ title, description }) {
   return (
      <details className='dropdown'>
         <summary>{title}</summary>
         <div>{description && <p>{description}</p>}</div>
      </details>
   )
}
