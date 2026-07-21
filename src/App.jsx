import Sidebar from './components/Sidebar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './sections/Hero'
import Experience from "./sections/Experience"
import About from './sections/About'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <div className="portfolio-layout">
      <ParticleBackground />
      <Sidebar />

      <main className="main-content">
        <Hero />
        <About />
        <Experience />

        <Projects />

        <Skills />

        <Education />

        <Certificates />

        <Contact />
      </main>
    </div>
  )
}

export default App