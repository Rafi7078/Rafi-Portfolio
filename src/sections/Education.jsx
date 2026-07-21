import { motion } from 'framer-motion'
import { educationData } from '../data/education'
import './Education.css'

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            Academic Background
          </span>

          <h2>
            Education &amp; <span>Foundation</span>
          </h2>

          <p>
            My academic journey has built a strong foundation in
            engineering, programming, data analytics and
            technology-driven problem solving.
          </p>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((education, index) => (
            <motion.article
              className="education-item"
              key={education.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="education-year">
                {education.year}
              </div>

              <div className="education-marker">
                <span />
              </div>

              <div className="education-card">
                <div className="education-card-top">
                  <div>
                    <span className="education-type">
                      Academic Qualification
                    </span>

                    <h3>{education.degree}</h3>

                    <h4>{education.institution}</h4>
                  </div>

                  <span className="education-result">
                    {education.result}
                  </span>
                </div>

                <p className="education-description">
                  {education.description}
                </p>

                <div className="education-highlights">
                  {education.highlights.map((highlight) => (
                    <span key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education