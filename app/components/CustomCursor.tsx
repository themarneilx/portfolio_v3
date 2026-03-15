'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/app/lib/gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      dot.style.display = 'none'
      ring.style.display = 'none'
      return
    }

    document.documentElement.style.cursor = 'none'

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power2.out" })
    }

    const onHoverEnter = () => {
      gsap.to(ring, { scale: 1.6, borderColor: 'rgba(212, 175, 55, 0.5)', duration: 0.3, ease: "power2.out" })
      gsap.to(dot, { scale: 0, duration: 0.2 })
    }

    const onHoverLeave = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(212, 175, 55, 0.25)', duration: 0.3, ease: "power2.out" })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .glass-card, .tech-badge, .social-btn, .project-scroll-image')) {
        onHoverEnter()
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const related = e.relatedTarget as HTMLElement | null
      if (target.closest('a, button, .glass-card, .tech-badge, .social-btn, .project-scroll-image')) {
        if (!related || !related.closest('a, button, .glass-card, .tech-badge, .social-btn, .project-scroll-image')) {
          onHoverLeave()
        }
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  )
}
