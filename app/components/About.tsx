'use client'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="relative mb-20 gs-reveal opacity-0">
        <span className="section-number">01</span>
        <div className="relative z-10">
          <div className="section-label mb-3">// About Me</div>
          <h2 className="gs-scramble text-text-primary font-display font-extrabold text-3xl md:text-4xl tracking-tight">Background</h2>
        </div>
        <div className="accent-line w-32 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Background Card */}
        <div className="glass-card p-8 md:p-10 md:col-span-2 gs-reveal opacity-0">
          <div className="text-body text-[0.9375rem] leading-[1.85] space-y-5">
            <p>
              As an IT undergraduate at <strong className="text-text-primary font-semibold">Benedicto College</strong>, I&apos;ve developed a strong foundation in computer science principles and practical application development. My journey in technology has equipped me with diverse skills across multiple programming languages and frameworks.
            </p>
            <p>
              I&apos;m passionate about creating efficient, scalable solutions and have hands-on experience with system administration, server deployment, and computer troubleshooting across multiple operating systems.
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="glass-card p-8 md:p-10 gs-reveal opacity-0">
          <h3 className="text-text-primary font-display font-bold text-lg flex items-center gap-3 tracking-tight mb-6 pb-4 border-b border-border">
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <i className="fa-solid fa-graduation-cap text-accent text-xs"></i>
            </span>
            Education
          </h3>
          <div className="space-y-5">
            {[
              { degree: 'BS Information Technology', period: '2022 - Present', school: 'Benedicto College', active: true },
              { degree: 'Senior High School', period: '2021 - 2022', school: 'Benedicto College', active: false },
              { degree: 'Senior High School', period: '2017 - 2018', school: 'Benedicto College', active: false },
              { degree: 'Junior High School', period: '2013 - 2017', school: 'St. Louis College-Cebu', active: false },
            ].map((edu, i) => (
              <div key={i} className="flex flex-col gap-0.5 group">
                <span className={`font-semibold text-sm transition-colors ${edu.active ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
                  {edu.degree}
                  {edu.active && <span className="ml-2 text-[9px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded">Current</span>}
                </span>
                <span className="text-[11px] text-text-muted font-mono">{edu.period} &middot; {edu.school}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="glass-card p-8 md:p-10 md:col-span-3 gs-reveal opacity-0">
          <h3 className="gs-scramble text-text-primary font-display font-bold text-xl tracking-tight mb-10">Technical Stack</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SkillGroup number="01" color="gold" label="Web Development" skills={[
              { icon: "fa-brands fa-js", name: "Next.js" },
              { icon: "fa-brands fa-react", name: "React" },
              { icon: "fa-brands fa-angular", name: "Angular" },
              { icon: "fa-solid fa-wind", name: "Tailwind CSS" },
              { icon: "fa-brands fa-js-square", name: "TypeScript" },
              { icon: "fa-brands fa-js", name: "JavaScript" },
              { icon: "fa-solid fa-leaf", name: "DaisyUI" },
              { icon: "fa-solid fa-film", name: "GSAP" },
            ]} />

            <SkillGroup number="02" color="gold" label="Backend & Systems" skills={[
              { icon: "fa-brands fa-node", name: "Node.js" },
              { icon: "fa-brands fa-node-js", name: "Express.js" },
              { icon: "fa-brands fa-aws", name: "AWS" },
              { icon: "fa-brands fa-docker", name: "Docker" },
              { icon: "fa-solid fa-server", name: "Nginx" },
              { icon: "fa-brands fa-linux", name: "Linux" },
            ]} />

            <SkillGroup number="03" color="gold" label="Database" skills={[
              { icon: "fa-solid fa-database", name: "PostgreSQL" },
              { icon: "fa-solid fa-database", name: "MySQL" },
              { icon: "fa-solid fa-fire-flame-curved", name: "Firebase" },
            ]} />

            <div className="md:col-span-2 lg:col-span-3 lg:w-2/3 pt-8 border-t border-border">
              <SkillGroup number="04" color="gold" label="Foundations, Tools & OS" skills={[
                { icon: "fa-solid fa-code", name: "C++ / C# / C / Java" },
                { icon: "fa-brands fa-git-alt", name: "Git / GitHub" },
                { icon: "fa-solid fa-cube", name: "OOP / DSA" },
                { icon: "fa-brands fa-windows", name: "Windows / macOS / Linux" },
              ]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ number, color, label, skills }: {
  number: string
  color: string
  label: string
  skills: { icon: string; name: string }[]
}) {
  const colorMap: Record<string, string> = {
    gold: 'bg-[rgba(212,175,55,0.1)] text-[#D4AF37] border-[rgba(212,175,55,0.2)]',
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className={`text-[10px] font-mono px-2 py-0.5 border rounded font-bold ${colorMap[color]}`}>{number}</span>
        <span className="text-text-secondary font-bold uppercase tracking-widest text-xs">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((s, i) => (
          <span key={i} className="tech-badge"><i className={s.icon}></i> {s.name}</span>
        ))}
      </div>
    </div>
  )
}
