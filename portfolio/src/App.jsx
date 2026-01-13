import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

    </>
  )
}

export default App
