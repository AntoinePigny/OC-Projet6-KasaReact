import React from 'react'
import { ReactComponent as FilledStar } from 'modules/common/assets/star.svg'
import { ReactComponent as EmptyStar } from 'modules/common/assets/star-empty.svg'
import './Rating.scss'

export default function Rating({ rating }) {
   const stars = Array(5).fill(null)
   return (
      <div className='rating'>{stars.map((_, i) => (i < rating ? <FilledStar key={i} /> : <EmptyStar key={i} />))}</div>
   )
}
