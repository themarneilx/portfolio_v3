'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/app/lib/gsap'

export function useAnimationController(bootState: 'booting' | 'fading' | 'complete') {
  const ctxRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    if (bootState !== 'complete') return

    // Wait a tick for the DOM to settle from "hidden" to "visible"
    const timeout = setTimeout(() => {
      // Clean up previous context if any
      if (ctxRef.current) ctxRef.current.revert()

      const ctx = gsap.context(() => {
        // Force refresh to ensure ScrollTrigger knows about the new layout
        ScrollTrigger.refresh()

        // Hero Animations
        gsap.fromTo(".gs-hero-reveal", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
          }
        )

        // Scroll Reveal Animations
        const revealElements = document.querySelectorAll(".gs-reveal")
        revealElements.forEach(element => {
          gsap.fromTo(element, 
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })
      })

      ctxRef.current = ctx
    }, 100)

    return () => {
      clearTimeout(timeout)
      if (ctxRef.current) ctxRef.current.revert()
    }
  }, [bootState])
}
