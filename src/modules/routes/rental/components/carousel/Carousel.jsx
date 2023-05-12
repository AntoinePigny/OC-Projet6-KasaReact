import React, { useState } from 'react'
import './Carousel.scss'
import { ArrowButton } from '..'

function getNewIndex(index, length) {
   if (index < 0) {
      return length - 1
   }

   if (index >= length) {
      return 0
   }

   return index
}

export default function Carousel({ pictures }) {
   const [currentIndex, setCurrentIndex] = useState(0)
   if (pictures.length > 1) {
      return (
         <div className='carousel-container'>
            <ArrowButton
               className='prevBtn'
               event={() => setCurrentIndex(getNewIndex(currentIndex - 1, pictures.length))}
            />
            <div className='carousel-inner'>
               {pictures.map((image, i) => (
                  <img key={i} src={image} alt={`Photo numéro` + i} className={i === currentIndex ? 'visible' : ''} />
               ))}
            </div>
            <span className='currentCount'>
               {`
                  ${currentIndex + 1}/${pictures.length}
               `}
            </span>
            <ArrowButton
               className='nextBtn'
               event={() => setCurrentIndex(getNewIndex(currentIndex + 1, pictures.length))}
            />
         </div>
      )
   } else {
      return (
         <div className='carousel-container'>
            <div className='carousel-inner'>
               {pictures.map((image, i) => (
                  <img
                     key={i}
                     src={image}
                     alt={`Photo numéro ` + i + 1}
                     className={i === currentIndex ? 'visible' : ''}
                  />
               ))}
            </div>
         </div>
      )
   }
}
