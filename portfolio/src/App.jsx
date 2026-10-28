import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
