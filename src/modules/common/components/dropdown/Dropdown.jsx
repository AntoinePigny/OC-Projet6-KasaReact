import React from 'react'
import './Dropdown.scss'
import { ReactComponent as Arrow } from 'modules/common/assets/arrow.svg'

export default function Dropdown({ title, description, list }) {
   return (
      <details className='dropdown'>
         <summary>
            {title}
            <Arrow />
         </summary>
         <div>
            {description && <p>{description}</p>}
            {list && (
               <ul className='dropdownList'>
                  {list.map((item) => (
                     <li key={item}>{item}</li>
                  ))}
               </ul>
            )}
         </div>
      </details>
   )
}
