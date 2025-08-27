import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

const MouseFollower = () => {
  const [isPointer, setIsPointer] = useState(false)
  const dotRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    let timeoutId

    const handleMouseMove = (e) => {
      // Check if cursor is over a clickable element
      const target = e.target
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      )

      // Animate cursor elements
      gsap.to(dotRef.current, {
        x: e.clientX - 3,
        y: e.clientY - 3,
        duration: 0.2,
        ease: "power2.out",
        scale: isPointer ? 1.5 : 1
      })

      gsap.to(circleRef.current, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.3,
        ease: "power2.out",
        scale: isPointer ? 1.5 : 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [isPointer])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference
          h-1.5 w-1.5 rounded-full bg-white"
      />

      <div
        ref={circleRef}
        className="fixed pointer-events-none z-[9998] mix-blend-difference
          h-8 w-8 rounded-full border border-white opacity-80"
      />
    </>
  )
}

export default MouseFollower