import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  DatabaseZap,
} from 'lucide-react'

const experiences = [
  {
    period: 'July 2026 — Present',
    role: 'Data Annotation Analyst',
    company: 'Rooya Bangladesh',
    team: 'Level Master (LM) Team',
    icon: DatabaseZap,
    points: [
      'Annotating and labeling image and text datasets according to project-specific guidelines.',
      'Reviewing, validating and correcting annotations to maintain dataset accuracy and consistency.',
      'Identifying missing, incorrect, duplicate and ambiguous labels and reporting complex cases.',
    ],
    skills: ['CVAT', 'Data Annotation', 'Quality Control', 'AI Datasets'],
  },
  {
    period: 'March 2026 — July 2026 ',
    role: 'QA Engineer Intern',
    company: 'Dream71 Bangladesh Limited',
    team: 'Software Quality Assurance Team',
    icon: CheckCircle2,
    points: [
      'Prepared requirement-based test cases from SRS and TOR documents for the BTRC LIMS 2.0 project.',
      'Performed manual, UI, functional, validation, negative and regression testing.',
      'Reported defects, updated QA status and verified developer fixes using the company test workflow.',
    ],
    skills: ['Manual Testing', 'Regression Testing', 'Test Cases', 'Bug Reporting'],
  },
  {
    period: 'December 2024 — February 2025',
    role: 'Intern',
    company: 'Trust Bank PLC',
    team: 'In-House Software Development Team',
    icon: Code2,
    points: [
      'Worked with WordPress to customize website features for banking services and customer support.',
      'Gained practical experience in front-end development and PHP-based website workflows.',
      'Supported website performance and usability improvement activities.',
    ],
    skills: ['WordPress', 'PHP', 'Web Development', 'Performance'],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">Career Journey</span>

        <h2>
          Experience across
          <span> data, AI and software quality.</span>
        </h2>

        <p>
          My experience combines data preparation, analytical thinking,
          software testing and web development across real-world projects.
        </p>
      </motion.div>

      <div className="experience-timeline">
        <div className="timeline-line" />

        {experiences.map((experience, index) => {
          const Icon = experience.icon

          return (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              className="experience-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <div className="timeline-marker">
                <Icon size={18} />
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <div>
                    <span className="experience-period">
                      {experience.period}
                    </span>

                    <h3>{experience.role}</h3>

                    <div className="experience-company">
                      <strong>{experience.company}</strong>
                      <span>{experience.team}</span>
                    </div>
                  </div>

                  <BriefcaseBusiness
                    className="experience-corner-icon"
                    size={28}
                  />
                </div>

                <ul className="experience-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="experience-skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience