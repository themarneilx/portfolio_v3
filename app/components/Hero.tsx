'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left: Typography */}
        <div className="order-2 lg:order-1 gs-hero-reveal opacity-0 w-full pl-0 lg:pl-10">


          <h1 className="font-display font-bold text-6xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-tighter mb-8 text-white uppercase">
            Jon Marneil<br />
            <span className="text-zinc-500">Cabahug</span>
          </h1>

          <div className="h-px w-32 bg-zinc-800 mb-8"></div>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-10 font-mono mt-8">
            Full-stack web developer crafting scalable, high-performance web applications. Focused on clean architecture and brutalist, high-impact user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#work" className="px-8 py-4 bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors uppercase tracking-widest border border-white">
              View Work
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-zinc-800 text-white text-sm font-bold hover:bg-zinc-900 transition-colors uppercase tracking-widest flex items-center gap-3">
              Resume <span className="font-mono text-zinc-500">↗</span>
            </a>
          </div>
        </div>

        {/* Right: Picture Frame (Bento Card style) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end gs-hero-reveal opacity-0 w-full p-0 lg:p-6">
          <div className="w-full max-w-md xl:max-w-lg aspect-square bento-card relative overflow-hidden group border-0 lg:border">
            <div className="absolute inset-0 bg-zinc-900/40 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
            <Image 
              src="/me.jpg" 
              alt="Profile" 
              fill
              className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              priority
            />
            
            <div className="absolute bottom-6 left-6 z-20 mix-blend-difference">
              <div className="text-[10px] text-zinc-300 uppercase tracking-widest mb-1 font-mono">Location</div>
              <div className="text-white font-bold text-xl uppercase tracking-tighter">Mandaue City, PH</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}