'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/app/lib/gsap'

const projects = [
  {
    image: "/resort.png",
    title: "Resort Booking System",
    number: "01",
    desc: "A complete booking engine handling real-time availability, user accounts, and secure scheduling. Currently in development.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    image: "/rental2.png",
    title: "Rental Management System",
    number: "02",
    desc: "Property management dashboard for landlords to automate tenant tracking and payments. Beta release.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    image: "/library.png",
    title: "Library System with AI",
    number: "03",
    desc: "Academic Project — Smart cataloging system integrated with Generative AI for enhanced research capabilities.",
    tech: ["Angular", "Gen AI", "MariaDB"],
  },
  {
    image: "/wishpay.jpg",
    title: "WishPay",
    number: "04",
    desc: "Smart financial goal tracker designed to help manage money by clearly separating Necessities from Wishes.",
    tech: ["Next.js", "PostgreSQL", "Drizzle ORM"],
    phone: true,
  },
  {
    image: "/chess.jpg",
    title: "3D Chess",
    number: "05",
    desc: "A fully interactive 3D chess game with singleplayer vs AI and real-time multiplayer support.",
    tech: ["Next.js", "Three.js", "Chess.js"],
  },
  {
    image: "/innocare.jpg",
    title: "InnoCare",
    number: "06",
    desc: "Built for Innodata — An all-in-one digital clinic platform that streamlines patient records and automates medicine inventory.",
    tech: ["PostgreSQL", "Next.js", "Node.js", "API"],
  },
]

export default function Projects() {
  const currentRef = useRef(0)
  const numberRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>(new Array(projects.length).fill(null))

  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    imagesRef.current.forEach((img, i) => {
      if (!img) return

      const st = ScrollTrigger.create({
        trigger: img,
        start: "top center",
        end: "bottom center",
        onEnter: () => swapContent(i),
        onEnterBack: () => swapContent(i),
      })
      triggers.push(st)

      // Subtle parallax scale on each image
      gsap.fromTo(img.querySelector('.project-img-inner'),
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      )
    })

    return () => {
      triggers.forEach(t => t.kill())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const swapContent = (index: number) => {
    if (currentRef.current === index) return
    currentRef.current = index

    const project = projects[index]

    // Update active image styling
    imagesRef.current.forEach((img, i) => {
      if (!img) return
      if (i === index) {
        img.classList.add('is-active')
      } else {
        img.classList.remove('is-active')
      }
    })

    // Update progress dots
    if (dotsRef.current) {
      const dots = dotsRef.current.querySelectorAll('.progress-dot')
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('is-active')
        } else {
          dot.classList.remove('is-active')
        }
      })
    }

    // Gather text elements for animation
    const elements = [numberRef.current, titleRef.current, descRef.current, tagsRef.current].filter(Boolean)

    // Animate out → swap → animate in
    gsap.to(elements, {
      opacity: 0,
      y: -15,
      duration: 0.25,
      stagger: 0.03,
      ease: "power3.in",
      onComplete: () => {
        if (numberRef.current) numberRef.current.textContent = `${project.number} / 06`
        if (titleRef.current) titleRef.current.textContent = project.title
        if (descRef.current) descRef.current.textContent = project.desc
        if (tagsRef.current) {
          tagsRef.current.innerHTML = project.tech.map(t =>
            `<span class="project-tag">${t}</span>`
          ).join('')
        }

        gsap.fromTo(elements,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power3.out" }
        )
      },
    })
  }

  const first = projects[0]

  return (
    <section id="work" className="relative">
      {/* Section intro */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 relative gs-reveal opacity-0">
        <span className="section-number">02</span>
        <div className="relative z-10">
          <div className="section-label mb-3">// Selected Work</div>
          <h2 className="gs-scramble text-text-primary font-display font-extrabold text-3xl md:text-4xl tracking-tight">Projects</h2>
        </div>
        <div className="accent-line w-32 mt-4" />
      </div>

      {/* ─── Desktop: Sticky split layout ─── */}
      <div className="hidden lg:grid lg:grid-cols-2 relative">
        {/* Vertical divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />

        {/* Left: Sticky heading */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="px-10 xl:px-16 w-full max-w-xl ml-auto mr-10 xl:mr-16 relative">
            {/* Progress dots */}
            <div ref={dotsRef} className="absolute -left-2 xl:left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
              {projects.map((_, i) => (
                <div key={i} className={`progress-dot ${i === 0 ? 'is-active' : ''}`} />
              ))}
            </div>

            <div className="pl-8">
              <span ref={numberRef} className="section-label block mb-6">{first.number} / 06</span>
              <h3 ref={titleRef} className="font-display font-extrabold text-4xl xl:text-5xl text-text-primary tracking-tight leading-[1.1] mb-6">
                {first.title}
              </h3>
              <p ref={descRef} className="text-body text-[0.9375rem] leading-relaxed mb-8 max-w-md">
                {first.desc}
              </p>
              <div ref={tagsRef} className="flex flex-wrap">
                {first.tech.map((t, i) => (
                  <span key={i} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Scrolling images */}
        <div className="pl-10 xl:pl-16 pr-6 lg:pr-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="h-screen flex items-center py-10"
            >
              <div
                ref={el => { imagesRef.current[i] = el }}
                className={`project-scroll-image ${project.phone ? 'w-1/2 mx-auto aspect-[9/16] bg-surface' : 'w-full aspect-[16/9]'} relative overflow-hidden ${i === 0 ? 'is-active' : ''}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`project-img-inner ${project.phone ? 'object-contain' : 'object-cover'}`}
                />
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Mobile: Stacked cards ─── */}
      <div className="lg:hidden px-6 space-y-16 pb-20">
        {projects.map((project, i) => (
          <div key={i} className="gs-reveal opacity-0">
            <div className={`project-scroll-image ${project.phone ? 'w-2/3 mx-auto aspect-[9/16] bg-surface' : 'w-full aspect-[16/9]'} relative overflow-hidden mb-6 is-active`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={project.phone ? 'object-contain' : 'object-cover'}
              />
            </div>
            <span className="section-label block mb-3">{project.number} / 06</span>
            <h3 className="font-display font-extrabold text-2xl text-text-primary tracking-tight mb-3">{project.title}</h3>
            <p className="text-body text-sm leading-relaxed mb-4">{project.desc}</p>
            <div className="flex flex-wrap">
              {project.tech.map((t, j) => (
                <span key={j} className="project-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-12 text-text-muted text-xs font-mono uppercase tracking-[0.15em]">
        Open for full-time roles and high-impact freelance projects.
      </div>
    </section>
  )
}
