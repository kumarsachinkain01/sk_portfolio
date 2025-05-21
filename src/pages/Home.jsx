import React from 'react'
import ThemeToggle  from '../components/ThemeToggle'
import { StarBackground } from '@/components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
// import { StarBackground } from './../components/StarBackground';

const Home = () => {
  return (
    <div className='min-h-screen  bg-background text-foreground overflow-x-hidden'>
        {/* theme toggle  */}
        <ThemeToggle/>
        {/* Background Effects */}
        <StarBackground/>

        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectSection/>
          <ContactSection/>
        </main>

        {/* Footer */}

        <Footer/>
    </div>
  )
}

export default Home