// components/ScrollShip.jsx
import React, { useEffect, useRef } from 'react'
// import shipImage from './images/ship.png' // Use your cargo ship image here
import './scrollship.css'

const ScrollShip = () => {
  const shipRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      const maxTranslate = window.innerWidth - shipRef.current.offsetWidth
      const translateX = scrollPercent * maxTranslate

      shipRef.current.style.transform = `translateX(${translateX}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="ship-scroll-wrapper">
      <img src={shipImage} alt="Cargo Ship" className="ship-image" ref={shipRef} />
    </div>
  )
}

export default ScrollShip
