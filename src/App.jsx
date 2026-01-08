/**
 * NGO Website Template
 * 
 * © 2026 Matchlessdigital Network. All Rights Reserved.
 * 
 * PROPRIETARY AND CONFIDENTIAL
 * This template is protected by copyright law. Unauthorized copying,
 * modification, distribution, or use is strictly prohibited.
 * 
 * For licensing: https://matchlessgiftz.com
 */

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Programs from './components/Programs'
import Impact from './components/Impact'
import Team from './components/Team'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Mission />
        <Programs />
        <Impact />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
