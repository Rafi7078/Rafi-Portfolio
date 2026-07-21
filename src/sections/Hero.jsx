import { useState } from 'react'
import {
  ArrowDown,
  Download,
  Mail,
  ChevronDown,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false)

  const heroItems = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const resumes = [
    {
      label: 'Data Analyst Resume',
      file: '/resume/Salman_Jahan_Rafi_Data_Analyst_Resume.pdf',
    },
    {
      label: 'Data Science & AI Resume',
      file: '/resume/Salman_Jahan_Rafi_Data_Science_AI_Resume.pdf',
    },
    {
      label: 'Software QA Resume',
      file: '/resume/Salman_Jahan_Rafi_Software_QA_Resume.pdf',
    },
  ]

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.12,
          delayChildren: 0.15,
        }}
      >
        <motion.span
          className="section-label"
          variants={heroItems}
          transition={{ duration: 0.6 }}
        >
          Hello, I&apos;m
        </motion.span>

        <motion.h2
          className="hero-name"
          variants={heroItems}
          transition={{ duration: 0.7 }}
        >
          Salman Jahan <span>Rafi</span>
        </motion.h2>

        <motion.h3
          className="hero-role"
          variants={heroItems}
          transition={{ duration: 0.7 }}
        >
          Data Analyst | SQA | Data Science &amp; AI Enthusiast 
        </motion.h3>

        <motion.p
          className="hero-description"
          variants={heroItems}
          transition={{ duration: 0.7 }}
        >
          I turn data into actionable insights and build reliable digital solutions through data analytics, visualization, data science and machine learning. I work with Python, SQL, Excel, Power BI and modern data tools, while also applying software quality assurance practices through manual and automation testing.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={heroItems}
          transition={{ duration: 0.7 }}
        >
          <a href="#projects" className="primary-button">
            View Projects
            <ArrowDown size={17} />
          </a>

          <a
            href="mailto:sajibbin7777@gmail.com"
            className="secondary-button"
          >
            <Mail size={17} />
            Contact Me
          </a>

          <div className="resume-dropdown">
            <button
              type="button"
              className="text-button resume-trigger"
              onClick={() => setResumeOpen((prev) => !prev)}
              aria-expanded={resumeOpen}
            >
              <Download size={17} />
              Download Resume
              <ChevronDown
                size={16}
                className={resumeOpen ? 'rotate' : ''}
              />
            </button>

            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  className="resume-menu"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {resumes.map((resume) => (
                    <a
                      key={resume.label}
                      href={resume.file}
                      download
                      onClick={() => setResumeOpen(false)}
                    >
                      <Download size={15} />
                      {resume.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={heroItems}
          transition={{ duration: 0.7 }}
        >
          <div>
            <strong>10+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Core Tools</span>
          </div>

          <div>
            <strong>3</strong>
            <span>Career Tracks</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero