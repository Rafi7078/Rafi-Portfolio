
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'


function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
      }}
    >
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`${project.shortTitle} preview`}
          className="project-image"
          loading="lazy"
        />

        <div className="project-image-overlay" />

        <div className="project-badges">
          <span className="project-category">
            {project.category}
          </span>

          {project.featured && (
            <span className="project-featured">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.shortTitle} on GitHub`}
          >
            <FaGithub size={17} />
            GitHub
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.shortTitle}`}
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard