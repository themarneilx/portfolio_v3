'use client'

import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      image: "/resort.png",
      title: "Resort Booking System",
      tag: "v1.0",
      desc: "A complete booking engine handling real-time availability, user accounts, and secure scheduling. Currently in development.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      live: null, // Add live link if available
      github: null, // Add github link if available
    },
    {
      image: "/rental2.png",
      title: "Rental Management System",
      tag: "Automated Billing",
      desc: "Property management dashboard for landlords to automate tenant tracking and payments. Beta",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      live: null,
      github: null,
    },
    {
      image: "/library.png",
      title: "Library Management System (OPAC) with AI integration",
      tag: "Gen AI",
      desc: "Academic Project - Smart cataloging system integrated with Generative AI for enhanced research capabilities.",
      tech: ["Angular", "Gen AI", "MariaDB"],
      live: null,
      github: null,
    },
    {
      image: "/wishpay2.png",
      title: "WishPay",
      tag: "Finance",
      desc: "Smart financial goal tracking application designed to help you manage your money by clearly separating your Necessities (Needs) from your Wishes (Wants).",
      tech: ["Next.js", "PostgreSQL", "Drizzle ORM"],
      live: null,
      github: null,
    },
    {
      image: "/innocare.jpg",
      title: "InnoCare",
      tag: "HealthTech",
      desc: "Developed for Innodata Knowledge Services Inc. — An all-in-one digital clinic platform that streamlines patient records and automates medicine inventory. Built to handle secure, high-volume healthcare data reliably.",
      tech: ["PostgreSQL", "Next.js", "Node.js", "API"],
      live: null,
      github: null,
    },
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="flex items-center gap-6 mb-16 gs-projects-reveal opacity-0">
        <h2 className="text-white font-display font-bold text-4xl uppercase tracking-tighter">Projects</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bento-card flex flex-col gs-projects-reveal opacity-0 group">
            {/* Project Image Header */}
            <div className="project-header">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 flex justify-between items-start">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:underline underline-offset-4">{project.title}</h3>
                <span className="text-[10px] font-bold text-zinc-400 font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800 uppercase tracking-widest">{project.tag}</span>
              </div>

              <p className="text-zinc-400 text-sm mb-8 flex-grow font-mono leading-relaxed">
                {project.desc}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] text-zinc-500 font-mono bg-zinc-950 px-2 py-1 border border-zinc-900 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-zinc-900 pt-6">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-transparent text-white border border-zinc-800 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                      <i className="fa-brands fa-github mr-2"></i> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 text-zinc-500 text-xs font-mono uppercase tracking-widest">
        Open for full-time roles and high-impact freelance projects.
      </div>
    </section>
  )
}