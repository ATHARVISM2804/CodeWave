import React, { useEffect, useRef, useState } from 'react'

const CursorFollower: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0
    let circleX = 0, circleY = 0
    let pointerScale = 1

    const animate = () => {
      // More responsive dot movement (faster)
      dotX += (mouseX - dotX) * 0.4
      dotY += (mouseY - dotY) * 0.4

      // Smoother circle movement (slightly slower)
      circleX += (mouseX - circleX) * 0.15
      circleY += (mouseY - circleY) * 0.15

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) scale(${pointerScale})`
      }

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) scale(${pointerScale})`
      }
      
      // Position the glow effect
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) scale(${pointerScale * 1.2})`
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
      pointerScale = isPointer ? 1.5 : 1
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
      {/* Glow effect layer */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9997] rounded-full transition-all duration-300"
        style={{
          height: isHovering ? '55px' : '45px',
          width: isHovering ? '55px' : '45px',
          marginLeft: isHovering ? '-27.5px' : '-22.5px',
          marginTop: isHovering ? '-27.5px' : '-22.5px',
          background: `radial-gradient(circle, rgba(var(--accent-${isHovering ? 'secondary' : 'primary'}-rgb), 0.3) 0%, rgba(var(--accent-${isHovering ? 'secondary' : 'primary'}-rgb), 0) 70%)`,
          filter: 'blur(8px)',
          opacity: isClicking ? '0.8' : '0.5'
        }}
      />

      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 rounded-full ${
          isClicking ? 'opacity-80' : 'opacity-100'
        }`}
        style={{
          height: isHovering ? '8px' : '5px',
          width: isHovering ? '8px' : '5px',
          backgroundColor: 'var(--accent-primary)',
          marginLeft: isHovering ? '-4px' : '-2.5px',
          marginTop: isHovering ? '-4px' : '-2.5px',
          boxShadow: isHovering 
            ? '0 0 15px 2px rgba(var(--accent-primary-rgb), 0.8)' 
            : '0 0 10px rgba(var(--accent-primary-rgb), 0.6)',
          filter: isClicking ? 'brightness(1.2)' : 'none',
          transition: 'height 0.2s, width 0.2s, margin 0.2s, opacity 0.2s, background-color 0.2s, filter 0.2s, box-shadow 0.2s'
        }}
      />

      <div
        ref={circleRef}
        className={`fixed pointer-events-none z-[9998] transition-all duration-200 rounded-full ${
          isClicking ? 'opacity-30' : isHovering ? 'opacity-60' : 'opacity-40'
        }`}
        style={{
          height: isHovering ? '40px' : '32px',
          width: isHovering ? '40px' : '32px',
          border: `1px solid var(--accent-${isHovering ? 'secondary' : 'primary'})`,
          marginLeft: isHovering ? '-20px' : '-16px',
          marginTop: isHovering ? '-20px' : '-16px',
          boxShadow: isHovering
            ? '0 0 20px rgba(var(--accent-secondary-rgb), 0.3), inset 0 0 5px rgba(var(--accent-secondary-rgb), 0.1)'
            : '0 0 15px rgba(var(--accent-primary-rgb), 0.2), inset 0 0 3px rgba(var(--accent-primary-rgb), 0.05)',
          transition: 'height 0.3s, width 0.3s, margin 0.3s, opacity 0.3s, border-color 0.3s, box-shadow 0.3s'
        }}
      />
    </>
  )
}

export default CursorFollower