'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/app/lib/gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(SplitText, ScrambleTextPlugin)

export function useAnimationController(bootState: 'booting' | 'fading' | 'complete') {
  const ctxRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    if (bootState !== 'complete') return

    const timeout = setTimeout(() => {
      if (ctxRef.current) ctxRef.current.revert()

      const ctx = gsap.context(() => {
        ScrollTrigger.refresh()

        // ── Hero: SplitText character reveal ──
        const heroTitle = document.querySelector('.gs-hero-title')
        if (heroTitle) {
          const split = SplitText.create(heroTitle, { type: "chars, words, lines" })
          gsap.fromTo(split.chars,
            { y: 80, opacity: 0, rotateX: -60, filter: 'blur(6px)' },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              filter: 'blur(0px)',
              duration: 0.9,
              stagger: 0.025,
              ease: "power4.out",
              delay: 0.1,
            }
          )
          gsap.to(heroTitle, { opacity: 1, duration: 0.01 })
        }

        // ── Hero: Other elements stagger ──
        gsap.fromTo(".gs-hero-reveal",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
            delay: 0.4,
          }
        )

        // ── ScrambleText on section headings ──
        document.querySelectorAll('.gs-scramble').forEach(el => {
          const originalText = el.textContent || ''
          gsap.fromTo(el,
            { opacity: 0.3 },
            {
              opacity: 1,
              duration: 0.01,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              onComplete: () => {
                gsap.to(el, {
                  duration: 1.2,
                  scrambleText: {
                    text: originalText,
                    chars: "!<>-_\\/[]{}—=+*^?#01",
                    speed: 0.4,
                    revealDelay: 0.3,
                  },
                })
              },
            }
          )
        })

        // ── Standard scroll reveal ──
        const revealElements = document.querySelectorAll(".gs-reveal")
        revealElements.forEach((element, i) => {
          gsap.fromTo(element,
            { y: 40, opacity: 0, scale: 0.97 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.03,
            }
          )
        })

        // ── Tech badges: stagger pop ──
        const techBadges = document.querySelectorAll('.tech-badge')
        if (techBadges.length > 0) {
          gsap.fromTo(techBadges,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              stagger: 0.03,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: techBadges[0].closest('.glass-card') || techBadges[0],
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }

        // ── Parallax on glow orbs ──
        document.querySelectorAll('.glow-orb').forEach((orb) => {
          gsap.to(orb, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          })
        })

        // ── Social buttons stagger ──
        const socialBtns = document.querySelectorAll('.social-btn')
        if (socialBtns.length > 0) {
          gsap.fromTo(socialBtns,
            { y: 20, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: socialBtns[0].closest('section') || socialBtns[0],
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }
      })

      ctxRef.current = ctx
    }, 100)

    return () => {
      clearTimeout(timeout)
      if (ctxRef.current) ctxRef.current.revert()
    }
  }, [bootState])
}
