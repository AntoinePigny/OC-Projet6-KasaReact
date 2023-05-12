import React, { useState } from 'react'
import './Carousel.scss'
import { ArrowButton } from '..'

export default function Carousel({ pictures }) {
   const [currentIndex, setCurrentIndex] = useState(0)
   if (pictures.length > 1) {
      return (
         <div className='carousel-container'>
            <ArrowButton className='prevBtn' event={goToPrevious} />
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
            <ArrowButton className='nextBtn' event={goToNext} />
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

   function goToPrevious() {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
   }
   function goToNext() {
      const isLastSlide = currentIndex === pictures.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
   }
}
