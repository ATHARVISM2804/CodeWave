import React, { useEffect, useRef } from 'react'

const CursorFollower: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0
    let circleX = 0, circleY = 0
    let pointerScale = 1

    const animate = () => {
      // Smoothly interpolate positions
      dotX += (mouseX - dotX) * 0.25
      dotY += (mouseY - dotY) * 0.25
      circleX += (mouseX - circleX) * 0.18
      circleY += (mouseY - circleY) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0) scale(${pointerScale})`
      }
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX - 16}px, ${circleY - 16}px, 0) scale(${pointerScale})`
      }
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      const target = e.target as HTMLElement
      pointerScale =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
        ? 1.5 : 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference h-1.5 w-1.5 rounded-full bg-white"
      />

      <div
        ref={circleRef}
        className="fixed pointer-events-none z-[9998] mix-blend-difference h-8 w-8 rounded-full border border-white opacity-80"
      />
    </>
  )
}

export default CursorFollower