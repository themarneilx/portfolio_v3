'use client'

import { useState, useEffect, useRef } from 'react'

interface Log {
  text: string
  delay: number
}

const bootLogs: Log[] = [
  { text: "BIOS Date 11/10/25 03:22:11 Ver: 3.0.1", delay: 50 },
  { text: "CPU: AMD Ryzen 5 3600 @ 4.21GHz", delay: 100 },
  { text: "Memory Test: 16384K OK", delay: 150 },
  { text: "Detecting Primary Master ... /dev/nvme0n1", delay: 250 },
  { text: "Booting from local disk...", delay: 400 },
  { text: "Loading kernel modules for web_deployment...", delay: 450 },
  { text: "[ OK ] Loaded node_modules.", delay: 475 },
  { text: "[ OK ] Mounted root filesystem.", delay: 500 },
  { text: "[ OK ] Started Network Manager.", delay: 600 },
  { text: "[ OK ] Loaded modules: Next.js, Node.js, SMTP, AWS.", delay: 800 },
  { text: "[ OK ] Reached target Graphical Interface.", delay: 1000 },
  { text: "Initializing Marneilx Portfolio v3.0...", delay: 1200 },
  { text: "Welcome User :)", delay: 1500 }
]

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([])
  const bootScreenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    let totalDelay = 0

    bootLogs.forEach((log) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, log.text])
      }, log.delay)
      timeouts.push(timeout)
      totalDelay = Math.max(totalDelay, log.delay)
    })

    const completionTimeout = setTimeout(() => onComplete(), totalDelay + 500)
    timeouts.push(completionTimeout)

    return () => { timeouts.forEach(clearTimeout) }
  }, [onComplete])

  useEffect(() => {
    if (bootScreenRef.current) {
      bootScreenRef.current.scrollTop = bootScreenRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div
      ref={bootScreenRef}
      className="fixed inset-0 p-6 md:p-10 flex flex-col justify-end text-xs md:text-sm leading-tight font-mono z-[9999] overflow-auto h-screen"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="fixed inset-0 pointer-events-none z-[10000] opacity-[0.012]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,175,55,0.2) 2px, rgba(212,175,55,0.2) 4px)' }}
      />
      <div className="space-y-1 mb-3 relative z-10">
        {logs.map((log, index) => (
          <div key={index} className="text-text-secondary"
            dangerouslySetInnerHTML={{
              __html: log.replace("[ OK ]", '[ <span class="text-accent font-bold">OK</span> ]')
            }}
          />
        ))}
      </div>
      <div className="mt-2 relative z-10 flex items-center gap-1">
        <span className="text-text-muted">root@sys:~#</span>
        <span className="cursor-block"></span>
      </div>
    </div>
  )
}
