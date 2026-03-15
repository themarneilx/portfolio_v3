'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from '@/app/lib/gsap'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (progressRef.current) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? scrollTop / docHeight : 0
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    gsap.to(window, { duration: 1.2, scrollTo: targetId, ease: "power3.inOut" })
  }

  const navLinks = [
    { label: 'Home', id: '#home', num: '01' },
    { label: 'About', id: '#about', num: '02' },
    { label: 'Work', id: '#work', num: '03' },
    { label: 'Contact', id: '#contact', num: '04' },
  ]

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-2xl border-b border-border/50' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="font-display font-extrabold text-xl tracking-tight text-text-primary hover:text-accent transition-colors duration-300"
          >
            JMC<span className="text-accent">.</span>
          </a>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => handleScroll(e, link.id)}
                className="hidden md:flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono text-text-muted hover:text-text-primary transition-colors duration-300 tracking-wider rounded-lg hover:bg-surface-elevated group"
              >
                <span className="text-accent/40 group-hover:text-accent transition-colors">{link.num}</span>
                <span>{link.label}</span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="ml-4 text-[11px] font-mono font-semibold tracking-wider uppercase px-5 py-2 bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-background rounded-lg transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
