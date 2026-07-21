import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  MapPin,
  Circle,
  FileText,
  ChevronUp,
  Download,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

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

function Sidebar() {
  const [activeSection, setActiveSection] = useState('home')
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  const handleNavigationClick = (sectionId) => {
    setActiveSection(sectionId)
    setResumeOpen(false)
  }

  return (
    <motion.aside
      className="sidebar"
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="profile">
        <div className="profile-image">
          <img
            src="/profile/profile-photo.png"
            alt="Salman Jahan Rafi"
            className="profile-photo"
          />
        </div>

        <h1>Salman Jahan Rafi</h1>

        <p className="profile-title">
          Data Analyst | SQA | Data Science & AI
        </p>

        <div className="profile-meta">
          <div className="meta-item">
            <MapPin size={15} />
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="meta-item availability">
            <Circle size={10} fill="currentColor" />
            <span>Available for Opportunities</span>
          </div>
        </div>
      </div>

      <nav className="navigation" aria-label="Portfolio navigation">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => handleNavigationClick(item.id)}
          >
            <span className="nav-line" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a
            href="https://github.com/Rafi7078"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/salmanrafi002/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={19} />
          </a>

          <a
            href="mailto:sajidbin7777@gmail.com"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </div>

        <div className="sidebar-resume-dropdown">
          <button
            type="button"
            className="resume-link"
            onClick={() => setResumeOpen((prev) => !prev)}
            aria-expanded={resumeOpen}
          >
            <FileText size={16} />
            <span>Resume</span>

            <ChevronUp
              size={15}
              className={resumeOpen ? '' : 'sidebar-chevron-down'}
            />
          </button>

          <AnimatePresence>
            {resumeOpen && (
              <motion.div
                className="sidebar-resume-menu"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {resumes.map((resume) => (
                  <a
                    key={resume.label}
                    href={resume.file}
                    download
                    onClick={() => setResumeOpen(false)}
                  >
                    <Download size={14} />
                    {resume.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar