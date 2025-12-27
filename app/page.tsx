'use client'

import { useState, useEffect } from 'react'
import BootScreen from './components/BootScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import { useAnimationController } from '@/app/hooks/useAnimationController'

export default function Home() {
  const [bootState, setBootState] = useState<'booting' | 'fading' | 'complete'>('complete')

  // Centralized animation controller that listens to bootState
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
      
      <main 
        id="main-interface" 
        className={`transition-opacity duration-1000 ${bootState === 'complete' ? 'opacity-100' : 'opacity-0'}`}
      >
         <Navbar />
         <Hero />
         <About />
         <Projects />
         <ContactForm />
      </main>
    </>
  )
}