'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: About Me */}
        <div className="gs-reveal opacity-0">
          <h3 className="text-white font-display font-bold text-xl mb-6">About Me</h3>
          <div className="text-zinc-400 text-sm leading-relaxed space-y-4 mb-8">
            <p>
              As an IT undergraduate at <strong className="text-white">Benedicto College</strong>, I&apos;ve developed a strong foundation in computer science principles and practical application development. My journey in technology has equipped me with diverse skills across multiple programming languages and frameworks.
            </p>
            <p>
              I&apos;m passionate about creating efficient, scalable solutions and have hands-on experience with system administration, server deployment, and computer troubleshooting across multiple operating systems.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="border-t border-border pt-8">
            <h4 className="text-white font-display font-bold text-lg mb-6">Education</h4>
            <div className="space-y-6 border-l-2 border-border pl-6 ml-2">
              
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-background"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-bold">BS Information Technology</span>
                  <span className="text-xs text-blue-500 font-mono mt-1 sm:mt-0">2022 - Present</span>
                </div>
                <div className="text-xs text-zinc-500">Benedicto College</div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-zinc-700 border-2 border-background"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-zinc-300 font-bold">Senior High School</span>
                  <span className="text-xs text-zinc-500 font-mono mt-1 sm:mt-0">2021 - 2022</span>
                </div>
                <div className="text-xs text-zinc-500">Benedicto College</div>
              </div>
              {/* Item 3 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-zinc-700 border-2 border-background"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-zinc-300 font-bold">Senior High School</span>
                  <span className="text-xs text-zinc-500 font-mono mt-1 sm:mt-0">2017 - 2018</span>
                </div>
                <div className="text-xs text-zinc-500">Benedicto College</div>
              </div>
              {/* Item 4 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-zinc-700 border-2 border-background"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-zinc-300 font-bold">Junior High School</span>
                  <span className="text-xs text-zinc-500 font-mono mt-1 sm:mt-0">2013 - 2017</span>
                </div>
                <div className="text-xs text-zinc-500">St. Louis College-Cebu</div>
              </div>

            </div>
          </div>
        </div>

        {/* Right: Technical Stack (SVG Icons) */}
        <div className="gs-reveal opacity-0">
          <h3 className="text-white font-display font-bold text-xl mb-6">Technical Stack</h3>
          
          <div className="space-y-6">
            <div>
              <div className="text-xs text-blue-500 font-mono mb-3">01 // Web Development</div>
              <div className="flex flex-wrap">
                <span className="tech-badge"><i className="fa-brands fa-js"></i> Next.js</span>
                <span className="tech-badge"><i className="fa-brands fa-react"></i> React</span>
                <span className="tech-badge"><i className="fa-brands fa-angular"></i> Angular</span>
                <span className="tech-badge"><i className="fa-solid fa-wind"></i> Tailwind CSS</span>
                <span className="tech-badge"><i className="fa-brands fa-js-square"></i> TypeScript</span>
                <span className="tech-badge"><i className="fa-brands fa-js"></i> JavaScript</span>
                <span className="tech-badge"><i className="fa-solid fa-leaf"></i> DaisyUI</span>
                <span className="tech-badge"><i className="fa-solid fa-film"></i> GSAP</span>
                <span className="tech-badge"><i className="fa-brands fa-bootstrap"></i> Bootstrap</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-blue-500 font-mono mb-3">02 // Backend & Systems</div>
              <div className="flex flex-wrap">
                <span className="tech-badge"><i className="fa-brands fa-node"></i> Node.js</span>
                <span className="tech-badge"><i className="fa-brands fa-node-js"></i> Express.js</span>
                <span className="tech-badge"><i className="fa-brands fa-aws"></i> AWS</span>
                <span className="tech-badge"><i className="fa-brands fa-docker"></i> Docker</span>
                <span className="tech-badge"><i className="fa-solid fa-server"></i> Nginx</span>
                <span className="tech-badge"><i className="fa-brands fa-linux"></i> Linux</span>
                <span className="tech-badge"><i className="fa-solid fa-microchip"></i> Gemini API</span>
                <span className="tech-badge"><i className="fa-solid fa-network-wired"></i> Samba Server</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-green-500 font-mono mb-3">03 // Database</div>
              <div className="flex flex-wrap">
                <span className="tech-badge"><i className="fa-solid fa-database"></i> PostgreSQL</span>
                <span className="tech-badge"><i className="fa-solid fa-database"></i> MySQL</span>
                <span className="tech-badge"><i className="fa-solid fa-database"></i> MariaDB</span>
                <span className="tech-badge"><i className="fa-solid fa-fire"></i> Firestore</span>
                <span className="tech-badge"><i className="fa-solid fa-fire-flame-curved"></i> Firebase</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-secondary font-mono mb-3">04 // Foundations & Tools</div>
              <div className="flex flex-wrap">
                <span className="tech-badge"><i className="fa-solid fa-code"></i> C++</span>
                <span className="tech-badge"><i className="fa-solid fa-code"></i> C#</span>
                <span className="tech-badge"><i className="fa-solid fa-c"></i> C</span>
                <span className="tech-badge"><i className="fa-brands fa-java"></i> Java</span>
                <span className="tech-badge"><i className="fa-brands fa-git-alt"></i> Git</span>
                <span className="tech-badge"><i className="fa-brands fa-github"></i> GitHub</span>
                <span className="tech-badge"><i className="fa-solid fa-cube"></i> OOP</span>
                <span className="tech-badge"><i className="fa-solid fa-sitemap"></i> DSA</span>
                <span className="tech-badge"><i className="fa-brands fa-cloudflare"></i> Cloudflare</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-purple-500 font-mono mb-3">05 // Operating Systems & Server Expertise</div>
              <div className="flex flex-wrap">
                <span className="tech-badge"><i className="fa-brands fa-windows"></i> Windows</span>
                <span className="tech-badge"><i className="fa-brands fa-apple"></i> macOS</span>
                <span className="tech-badge"><i className="fa-brands fa-linux"></i> Linux</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}