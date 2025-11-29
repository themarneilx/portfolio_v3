'use client'

import { useState, useEffect, useRef } from 'react'

interface Log {
  text: string
  delay: number
}

const bootLogs: Log[] = [
  { text: "BIOS Date 01/01/25 15:22:11 Ver: 1.0.2", delay: 50 },
  { text: "CPU: Intel(R) Core(TM) i7-12700H @ 2.30GHz", delay: 100 },
  { text: "Memory Test: 16384K OK", delay: 150 },
  { text: "Detecting Primary Master ... JMC_SSD_1TB", delay: 250 },
  { text: "Booting from local disk...", delay: 400 },
  { text: "[ OK ] Mounted root filesystem.", delay: 500 },
  { text: "[ OK ] Started Network Manager.", delay: 600 },
  { text: "[ OK ] Loaded modules: Next.js, Angular, Node, AWS.", delay: 800 },
  { text: "[ OK ] Reached target Graphical Interface.", delay: 1000 },
  { text: "Initializing JMC Portfolio v2.0...", delay: 1200 },
  { text: "Welcome User.", delay: 1500 }
]

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([])
  const bootScreenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []
    let totalDelay = 0

    bootLogs.forEach((log) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, log.text])
        if (bootScreenRef.current) {
            bootScreenRef.current.scrollTop = bootScreenRef.current.scrollHeight
        }
      }, log.delay)
      timeouts.push(timeout)
      totalDelay = Math.max(totalDelay, log.delay)
    })

    const completionTimeout = setTimeout(() => {
      onComplete()
    }, totalDelay + 500)
    timeouts.push(completionTimeout)

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [onComplete])

  useEffect(() => {
    if (bootScreenRef.current) {
        bootScreenRef.current.scrollTop = bootScreenRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div 
      ref={bootScreenRef}
      className="fixed inset-0 p-4 md:p-8 flex flex-col justify-end text-xs md:text-sm leading-tight font-mono bg-black z-[9999] overflow-auto h-screen"
    >
      <div className="text-gray-400 space-y-0.5 mb-2">
        {logs.map((log, index) => (
          <div key={index} dangerouslySetInnerHTML={{ 
            __html: log.replace("[ OK ]", '<span class="text-term-green font-bold">[ OK ]</span>') 
          }} />
        ))}
      </div>
      <div className="text-term-green">
        <span className="text-gray-500">root@JMC-OS:~$</span> <span className="cursor-block"></span>
      </div>
    </div>
  )
}
