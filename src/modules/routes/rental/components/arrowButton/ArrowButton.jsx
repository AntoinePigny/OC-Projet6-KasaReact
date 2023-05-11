import React from 'react'
import './ArrowButton.scss'
import { ReactComponent as Arrow } from 'modules/common/assets/arrow.svg'

export default function ArrowButton({ className, event }) {
   return (
      <button className={className} onClick={event}>
         <Arrow />
      </button>
   )
}
