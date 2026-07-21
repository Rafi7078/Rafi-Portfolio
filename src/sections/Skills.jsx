import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Technologies</span>

          <h2>
            Skills &amp; <span>Expertise</span>
          </h2>

          <p>
            A practical toolkit covering data analytics, business
            intelligence, machine learning, software quality assurance and
            modern development workflows.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills