import React, { useEffect, useRef, useState } from 'react'

const CursorFollower: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0
    let ringX = 0, ringY = 0
    let trailX = 0, trailY = 0
    let cursorScale = 1

    const animate = () => {
      // Fast dot movement for responsiveness
      dotX += (mouseX - dotX) * 0.6
      dotY += (mouseY - dotY) * 0.6

      // Smooth ring movement with slight delay
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15

      // Extra delayed trail effect
      trailX += (mouseX - trailX) * 0.05
      trailY += (mouseY - trailY) * 0.05

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) scale(${isClicking ? 0.7 : 1})`
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${cursorScale})`
      }
      
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) scale(${cursorScale * 1.5})`
      }

      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const target = e.target as HTMLElement
      const isPointer =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.dataset.cursor === 'pointer'

      // Update hovering state for styling
      setIsHovering(isPointer)

      // Scale based on hover state
      cursorScale = isPointer ? 1.4 : 1
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Outer glow trail */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9997] rounded-full transition-opacity duration-300"
        style={{
          height: '80px',
          width: '80px',
          marginLeft: '-40px',
          marginTop: '-40px',
          background: `radial-gradient(circle, rgba(var(--accent-primary-rgb), 0.4) 0%, rgba(var(--accent-primary-rgb), 0) 80%)`,
          filter: 'blur(15px)',
          opacity: isHovering ? 0.6 : 0.2
        }}
      />

      {/* Middle ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] transition-all duration-300"
        style={{
          height: isHovering ? '45px' : '35px',
          width: isHovering ? '45px' : '35px',
          marginLeft: isHovering ? '-22.5px' : '-17.5px',
          marginTop: isHovering ? '-22.5px' : '-17.5px',
          border: `2px solid ${isHovering ? 'var(--accent-secondary)' : 'var(--accent-primary)'}`,
          borderRadius: '50%',
          mixBlendMode: 'difference',
          opacity: isClicking ? 1 : 0.8,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isHovering 
            ? '0 0 15px 2px rgba(var(--accent-secondary-rgb), 0.3)' 
            : '0 0 10px rgba(var(--accent-primary-rgb), 0.2)'
        }}
      />

      {/* Center dot/inner circle */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-150"
        style={{
          height: isHovering ? '12px' : '8px',
          width: isHovering ? '12px' : '8px',
          marginLeft: isHovering ? '-6px' : '-4px',
          marginTop: isHovering ? '-6px' : '-4px',
          backgroundColor: isHovering ? 'var(--accent-secondary)' : 'var(--accent-primary)',
          opacity: isClicking ? 0.8 : 1,
          mixBlendMode: 'difference',
          boxShadow: isHovering 
            ? '0 0 12px 3px rgba(var(--accent-secondary-rgb), 0.7)' 
            : '0 0 10px rgba(var(--accent-primary-rgb), 0.5)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
    </>
  )
}

export default CursorFollower