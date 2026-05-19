import React from 'react'
import Header from './Components/Header'
import AboutSection from './Components/AboutSection'
import HeroSection from './Components/HeroSection'
import Skill from './Components/Skill'
import Project from './Components/Project'
import Contact from './Components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <AboutSection/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  )
}
