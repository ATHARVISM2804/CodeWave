import React, { useEffect, useRef } from 'react'

const CursorFollower: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  const isHovering = useRef(false)
  const isClicking = useRef(false)
  const cursorScale = useRef(1)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0
    let ringX = 0, ringY = 0
    let trailX = 0, trailY = 0

    const animate = () => {
      // Smooth lerp-like movement
      dotX += (mouseX - dotX) * 0.6
      dotY += (mouseY - dotY) * 0.6
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      trailX += (mouseX - trailX) * 0.05
      trailY += (mouseY - trailY) * 0.05

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) scale(${isClicking.current ? 0.7 : 1})`
        dotRef.current.style.backgroundColor = isHovering.current
          ? 'var(--accent-secondary)'
          : 'var(--accent-primary)'
        dotRef.current.style.height = dotRef.current.style.width = isHovering.current ? '12px' : '8px'
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${cursorScale.current})`
        ringRef.current.style.height = ringRef.current.style.width = isHovering.current ? '45px' : '35px'
        ringRef.current.style.border = `2px solid ${
          isHovering.current ? 'var(--accent-secondary)' : 'var(--accent-primary)'
        }`
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) scale(${cursorScale.current * 1.5})`
        trailRef.current.style.opacity = isHovering.current ? '0.6' : '0.2'
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

      isHovering.current = isPointer
      cursorScale.current = isPointer ? 1.4 : 1
    }

    const handleMouseDown = () => (isClicking.current = true)
    const handleMouseUp = () => (isClicking.current = false)

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
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9997] rounded-full hidden sm:block"
        style={{
          height: '80px',
          width: '80px',
          marginLeft: '-40px',
          marginTop: '-40px',
          background: `radial-gradient(circle, rgba(var(--accent-primary-rgb), 0.4) 0%, rgba(var(--accent-primary-rgb), 0) 80%)`,
          filter: 'blur(15px)',
          transition: 'opacity 0.3s ease'
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] rounded-full hidden sm:block"
        style={{
          marginLeft: '-20px',
          marginTop: '-20px',
          mixBlendMode: 'difference',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] rounded-full hidden md:block"
        style={{
          marginLeft: '-4px',
          marginTop: '-4px',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 0 10px rgba(var(--accent-primary-rgb), 0.5)',
          mixBlendMode: 'difference'
        }}
      />
    </>
  )
}

export default CursorFollower


// import React, { useEffect, useRef } from "react"

// const BlobCursor: React.FC = () => {
//   const blobRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     let mouseX = 0, mouseY = 0
//     let currentX = 0, currentY = 0

//     const animate = () => {
//       currentX += (mouseX - currentX) * 0.12
//       currentY += (mouseY - currentY) * 0.12

//       if (blobRef.current) {
//         blobRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
//       }

//       requestAnimationFrame(animate)
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX = e.clientX
//       mouseY = e.clientY
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     animate()

//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   return (
//     <div
//       ref={blobRef}
//       className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
//       style={{
//         width: "60px",
//         height: "60px",
//         marginLeft: "-30px",
//         marginTop: "-30px",
//         background: "radial-gradient(circle at 30% 30%, var(--accent-primary), var(--accent-secondary))",
//         filter: "blur(12px)",
//         transition: "transform 0.2s ease"
//       }}
//     />
//   )
// }

// export default BlobCursor
