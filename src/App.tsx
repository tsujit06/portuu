import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/certifications';
import AwardsParticipation from './components/awards';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <AwardsParticipation/>
        <Certifications/>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App