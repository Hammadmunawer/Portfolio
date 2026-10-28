import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import About from './Components/About'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
