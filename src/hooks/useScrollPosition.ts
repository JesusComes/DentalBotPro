'use client'

import { useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updatePosition = () => {
      const currentPosition = window.scrollY
      setScrollPosition(currentPosition)
      setIsScrolled(currentPosition > 50)
    }

    // Set initial position
    updatePosition()

    window.addEventListener('scroll', updatePosition, { passive: true })

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return { scrollPosition, isScrolled }
}

export default useScrollPosition
