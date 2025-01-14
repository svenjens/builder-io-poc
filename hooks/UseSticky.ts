"use client"
import { useState, useEffect } from 'react'

const UseSticky = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPos = window.scrollY
      if (scrollPos > 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return {
    sticky
  }
}

export default UseSticky

