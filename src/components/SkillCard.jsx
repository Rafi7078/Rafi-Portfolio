import { motion } from 'framer-motion'

function SkillCard({ category, index }) {
  return (
    <motion.article
      className="skill-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
      }}
    >
      <div className="skill-card-top">
        <span className="skill-card-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="skill-card-heading">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      </div>

      <div className="skill-list">
        {category.skills.map((skill) => {
          const SkillIcon = skill.icon

          const levelClass = skill.level
            .toLowerCase()
            .replaceAll(' ', '-')

          return (
            <div className="skill-item" key={skill.name}>
              <div className="skill-info">
                <span className="skill-icon">
                  <SkillIcon />
                </span>

                <span className="skill-name">
                  {skill.name}
                </span>
              </div>

              <span
                className={`skill-level skill-level-${levelClass}`}
              >
                {skill.level}
              </span>
            </div>
          )
        })}
      </div>
    </motion.article>
  )
}

export default SkillCard