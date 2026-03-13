'use client'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-6 mb-16 gs-reveal opacity-0">
        <h2 className="text-white font-display font-bold text-4xl uppercase tracking-tighter">About</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        
        {/* About Me Card (Spans 2 columns) */}
        <div className="bento-card p-10 md:col-span-2 gs-reveal opacity-0 flex flex-col justify-center">
          <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tight mb-6">Background</h3>
          <div className="text-zinc-400 text-sm md:text-base leading-relaxed space-y-6 font-mono">
            <p>
              As an IT undergraduate at <strong className="text-white">Benedicto College</strong>, I&apos;ve developed a strong foundation in computer science principles and practical application development. My journey in technology has equipped me with diverse skills across multiple programming languages and frameworks.
            </p>
            <p>
              I&apos;m passionate about creating efficient, scalable solutions and have hands-on experience with system administration, server deployment, and computer troubleshooting across multiple operating systems.
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="bento-card p-10 gs-reveal opacity-0 flex flex-col justify-between">
          <h3 className="text-white font-display font-bold text-xl flex items-center gap-3 uppercase tracking-tight mb-8 border-b border-zinc-800 pb-4">
            <i className="fa-solid fa-graduation-cap text-zinc-500"></i> Education
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-sm">BS Information Technology</span>
              <span className="text-xs text-zinc-500 font-mono">2022 - Present | Benedicto College</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-400 font-bold text-sm">Senior High School</span>
              <span className="text-xs text-zinc-500 font-mono">2021 - 2022 | Benedicto College</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-400 font-bold text-sm">Senior High School</span>
              <span className="text-xs text-zinc-500 font-mono">2017 - 2018 | Benedicto College</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-400 font-bold text-sm">Junior High School</span>
              <span className="text-xs text-zinc-500 font-mono">2013 - 2017 | St. Louis College-Cebu</span>
            </div>
          </div>
        </div>

        {/* Technical Stack / Skill Cards (Spanning across grid) */}
        <div className="bento-card p-10 md:col-span-3 gs-reveal opacity-0 mt-6 border-t border-zinc-800 pt-16">
          <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tight mb-10">Technical Stack</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded font-bold">01</span>
                <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm">Web Development</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge"><i className="fa-brands fa-js"></i> Next.js</span>
                <span className="tech-badge"><i className="fa-brands fa-react"></i> React</span>
                <span className="tech-badge"><i className="fa-brands fa-angular"></i> Angular</span>
                <span className="tech-badge"><i className="fa-solid fa-wind"></i> Tailwind CSS</span>
                <span className="tech-badge"><i className="fa-brands fa-js-square"></i> TypeScript</span>
                <span className="tech-badge"><i className="fa-brands fa-js"></i> JavaScript</span>
                <span className="tech-badge"><i className="fa-solid fa-leaf"></i> DaisyUI</span>
                <span className="tech-badge"><i className="fa-solid fa-film"></i> GSAP</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-bold">02</span>
                <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm">Backend & Systems</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge"><i className="fa-brands fa-node"></i> Node.js</span>
                <span className="tech-badge"><i className="fa-brands fa-node-js"></i> Express.js</span>
                <span className="tech-badge"><i className="fa-brands fa-aws"></i> AWS</span>
                <span className="tech-badge"><i className="fa-brands fa-docker"></i> Docker</span>
                <span className="tech-badge"><i className="fa-solid fa-server"></i> Nginx</span>
                <span className="tech-badge"><i className="fa-brands fa-linux"></i> Linux</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono px-2 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded font-bold">03</span>
                <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm">Database</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge"><i className="fa-solid fa-database"></i> PostgreSQL</span>
                <span className="tech-badge"><i className="fa-solid fa-database"></i> MySQL</span>
                <span className="tech-badge"><i className="fa-solid fa-fire-flame-curved"></i> Firebase</span>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3 lg:w-2/3 mt-6 border-t border-zinc-800/50 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono px-2 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded font-bold">04</span>
                <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm">Foundations, Tools, & OS</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge"><i className="fa-solid fa-code"></i> C++ / C# / C / Java</span>
                <span className="tech-badge"><i className="fa-brands fa-git-alt"></i> Git / GitHub</span>
                <span className="tech-badge"><i className="fa-solid fa-cube"></i> OOP / DSA</span>
                <span className="tech-badge"><i className="fa-brands fa-windows"></i> Windows / macOS / Linux</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}