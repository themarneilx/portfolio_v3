'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left: Typography */}
        <div className="order-2 lg:order-1 gs-hero-reveal opacity-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">v2.0 System Online</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 text-white">
            FULL STACK<br />
            <span className="text-zinc-600">DEVELOPER</span>
          </h1>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-md mb-10">
            I am <strong className="text-white">Jon Marneil Cabahug</strong>. I build scalable, high-performance web applications using <strong className="text-white">Next.js</strong>, <strong className="text-white">Angular</strong>, and <strong className="text-white">AWS</strong>. Focused on clean architecture and modern user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
              View Projects
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-surface border border-border text-white text-sm font-semibold rounded-lg hover:bg-border transition-colors flex items-center gap-2">
              <i className="fa-solid fa-file-pdf"></i> View Resume
            </a>
          </div>
        </div>

        {/* Right: Big Picture Frame */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end gs-hero-reveal opacity-0">
          <div className="relative w-full max-w-sm aspect-square bg-surface rounded-xl border border-border p-1">
            {/* Corners */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-blue-500/50"></div>
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-blue-500/50"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-blue-500/50"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-blue-500/50"></div>

            {/* Image */}
            <div className="w-full h-full rounded-lg overflow-hidden bg-zinc-900 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <Image 
                src="/me.jpg" 
                alt="Profile" 
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                priority
              />
              
              <div className="absolute bottom-6 left-6 z-20">
                <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Mandaue City, PH</div>
                <div className="text-white font-bold text-xl">JM Cabahug</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}