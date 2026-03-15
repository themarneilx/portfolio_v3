'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-24 px-6 lg:px-10 max-w-7xl mx-auto relative">
      {/* Glow orbs — positioned well inside the viewport so they don't clip */}
      <div className="glow-orb w-[600px] h-[600px] bg-accent top-[-10%] right-[5%]" style={{ opacity: 0.07 }} />
      <div className="glow-orb w-[400px] h-[400px] bg-yellow-700 bottom-[5%] left-[15%]" style={{ opacity: 0.04 }} />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center w-full relative z-10">
        {/* Left: Content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="section-label mb-5 gs-hero-reveal opacity-0">
            &lt;/&gt; Full Stack Developer
          </div>

          <h1 className="gs-hero-title font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.88] tracking-[-0.04em] mb-8 opacity-0">
            <span className="text-text-primary block">Jon</span>
            <span className="text-text-primary block">Marneil</span>
            <span className="text-accent block">Cabahug</span>
          </h1>

          <div className="accent-line w-20 mb-8 gs-hero-reveal opacity-0" />

          <p className="text-body text-[0.9375rem] md:text-base leading-relaxed max-w-lg mb-10 gs-hero-reveal opacity-0">
            Full-stack web developer crafting scalable, high-performance web applications. Focused on clean architecture and brutalist, high-impact user experiences.
          </p>

          <div className="flex flex-wrap gap-4 gs-hero-reveal opacity-0">
            <a
              href="#work"
              className="group relative px-8 py-3.5 bg-accent text-background text-sm font-bold hover:bg-accent-hover transition-all duration-300 uppercase tracking-widest rounded-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-border text-text-primary text-sm font-bold hover:border-accent/50 hover:text-accent transition-all duration-300 uppercase tracking-widest rounded-lg flex items-center gap-2"
            >
              Resume
              <span className="text-text-muted text-xs">&#8599;</span>
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end gs-hero-reveal opacity-0">
          <div className="relative w-full max-w-sm xl:max-w-md">
            {/* Corner accents */}
            <div className="absolute -inset-4 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/30 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/30 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />
            </div>

            <div className="aspect-[4/5] glass-card relative overflow-hidden group">
              {/* Multi-stop gradient for natural fade */}
              <div className="absolute inset-0 z-10 transition-opacity duration-700 group-hover:opacity-40"
                style={{
                  background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.85) 15%, rgba(10,10,10,0.4) 35%, rgba(10,10,10,0.05) 55%, transparent 100%)',
                }}
              />
              <Image
                src="/me.jpg"
                alt="Jon Marneil Cabahug"
                fill
                className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.03]"
                priority
              />

              <div className="absolute bottom-5 left-5 z-20">
                <div className="text-[9px] text-accent uppercase tracking-[0.25em] mb-1 font-mono font-semibold">Location</div>
                <div className="text-text-primary font-display font-bold text-lg tracking-tight">Mandaue City, PH</div>
              </div>

              <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[9px] font-mono text-accent uppercase tracking-wider">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 gs-hero-reveal opacity-0">
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-text-muted">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
