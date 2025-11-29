'use client'

import { gsap } from '@/app/lib/gsap'

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    gsap.to(window, { duration: 1, scrollTo: targetId, ease: "power2.out" })
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-surface/80 backdrop-blur-md border border-border px-6 py-2.5 rounded-full flex items-center gap-6 text-xs font-medium text-zinc-400 shadow-2xl uppercase tracking-wide">
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-white transition-colors">Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-white transition-colors">About</a>
        <a href="#work" onClick={(e) => handleScroll(e, "#work")} className="hover:text-white transition-colors">Work</a>
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  )
}
