'use client'

import Image from 'next/image'

export default function Projects() {
  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto border-t border-border">
      
      <div className="flex items-center gap-4 mb-12 gs-reveal opacity-0">
        <h2 className="text-white font-display font-bold text-2xl">Featured Projects</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Project 1 */}
        <div className="project-card group gs-reveal opacity-0">
          <div className="project-header">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image src="/resort.png" alt="Resort Booking System" fill className="object-cover" />
            </div>
            <div className="absolute top-4 right-4 text-[10px] bg-black border border-border px-2 py-0.5 rounded text-zinc-500">v1.0</div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-white font-bold text-lg mb-2">Resort Booking System</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-1">
              A complete booking engine handling real-time availability, user accounts, and secure scheduling. <span className="text-yellow-500">Currently in development.</span>
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] text-zinc-500 font-mono border-t border-border pt-4">
              <span>Next.js</span> • <span>Node.js</span> • <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card group gs-reveal opacity-0">
          <div className="project-header">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image src="/rental.png" alt="Rental Management System" fill className="object-cover" />
            </div>
            <div className="absolute top-4 right-4 text-[10px] bg-black border border-border px-2 py-0.5 rounded text-zinc-500">Automated Billing</div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-white font-bold text-lg mb-2">Rental Management System</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-1">
              Property management dashboard for landlords to automate tenant tracking and payments. <span className="text-yellow-500">Currently in development.</span>
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] text-zinc-500 font-mono border-t border-border pt-4">
              <span>Angular</span> • <span>Express</span> • <span>MariaDB</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card group gs-reveal opacity-0">
          <div className="project-header">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image src="/library.png" alt="Library Management System" fill className="object-cover" />
            </div>
            <div className="absolute top-4 right-4 text-[10px] bg-black border border-border px-2 py-0.5 rounded text-zinc-500">AI</div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-white font-bold text-lg mb-2">Library Management System (OPAC) with AI integration</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-1">
              <span className="text-yellow-500">Academic Project </span>- Smart cataloging system integrated with Generative AI for enhanced research capabilities.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] text-zinc-500 font-mono border-t border-border pt-4">
              <span>Angular</span> • <span>Gen AI</span> • <span>MariaDB</span>
            </div>
          </div>
        </div>

      </div>
      
      <div className="text-center mt-12 text-zinc-500 text-xs">
        Available for Internships and freelance opportunities.
      </div>
    </section>
  )
}