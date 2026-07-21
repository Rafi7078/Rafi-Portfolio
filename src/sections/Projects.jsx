import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import {
  projectCategories,
  projects,
} from '../data/projects'
import './Projects.css'


function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }

    return projects.filter(
      (project) => project.category === activeCategory
    )
  }, [activeCategory])

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects across data analytics,
            business intelligence, data science, AI and
            software quality assurance.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? 'active' : ''
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects