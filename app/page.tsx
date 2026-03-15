'use client'

import { useState, useEffect } from 'react'
import BootScreen from './components/BootScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import { useAnimationController } from '@/app/hooks/useAnimationController'

export default function Home() {
  const [bootState, setBootState] = useState<'booting' | 'fading' | 'complete'>('complete')

  useAnimationController(bootState)

  useEffect(() => {
    if (bootState !== 'complete') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [bootState])

  const handleBootComplete = () => {
    setBootState('fading')
    setTimeout(() => {
      setBootState('complete')
    }, 500)
  }

  return (
    <>
      {bootState !== 'complete' && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${bootState === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
          <BootScreen onComplete={handleBootComplete} />
        </div>
      )}

      <CustomCursor />

      <main
        id="main-interface"
        className={`transition-opacity duration-1000 ${bootState === 'complete' ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <ContactForm />
      </main>
    </>
  )
}
