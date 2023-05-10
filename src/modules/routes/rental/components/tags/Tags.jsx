import React from 'react'
import './Tags.scss'

export default function Tags({ tags }) {
   return (
      <div className='tags'>
         <ul>
            {tags.map((tag) => (
               <li key={tag} className='tag'>
                  {tag}
               </li>
            ))}
         </ul>
      </div>
   )
}
