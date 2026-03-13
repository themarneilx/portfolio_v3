'use client'

import { gsap } from '@/app/lib/gsap'

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    gsap.to(window, { duration: 1, scrollTo: targetId, ease: "power2.out" })
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 px-8 py-3 rounded-full flex items-center gap-8 text-[11px] font-bold text-zinc-500 uppercase tracking-widest shadow-2xl">
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-white transition-colors duration-300">Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-white transition-colors duration-300">About</a>
        <a href="#work" onClick={(e) => handleScroll(e, "#work")} className="hover:text-white transition-colors duration-300">Work</a>
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-white transition-colors duration-300">Contact</a>
      </div>
    </nav>
  )
}
