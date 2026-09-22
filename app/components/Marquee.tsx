'use client'

const items = [
  "Next.js", "TypeScript", "Python", "AWS", "Docker",
  "Node.js", "PostgreSQL", "Angular", "Claude Code", "Gemini",
  "Linux", "Proxmox VE", "Supabase", "Cloudflare", "Tailwind CSS", "GSAP",
]

export default function Marquee() {
  return (
    <div className="py-10 border-y border-border overflow-hidden relative gs-reveal opacity-0">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 md:mx-10 text-lg md:text-xl font-display font-bold text-text-muted/20 uppercase tracking-widest flex items-center gap-6 md:gap-10">
            {item}
            <span className="text-accent/20 text-sm">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
