import React from 'react'
import './Owner.scss'

export default function Owner({ host }) {
   const { name, picture } = host
   const [firstName, lastName] = name.split(' ')
   return (
      <div className='owner'>
         <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
         </h3>
         <img src={picture} alt={name} />
      </div>
   )
}
