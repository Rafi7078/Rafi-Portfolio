import { motion } from 'framer-motion'
import {
  BarChart3,
  BrainCircuit,
  Database,
  TestTube2,
} from 'lucide-react'

const expertise = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Turning raw data into clear insights, dashboards and actionable business recommendations.',
  },
  {
    icon: Database,
    title: 'Business Intelligence',
    description:
      'Using SQL, Excel, Power BI and Tableau to explore trends, track KPIs and support data-driven decisions.',
  },
  {
    icon: BrainCircuit,
    title: 'Data Science & AI',
    description:
      'Applying machine learning, statistical analysis and AI techniques to solve practical data problems.',
  },
  {
    icon: TestTube2,
    title: 'Software Quality Assurance',
    description:
      'Improving software reliability through test case design, manual testing, regression testing and automation.',
  },
]

const tools = [
  'Python',
  'SQL',
  'Excel',
  'Power BI',
  'Tableau',
  'Pandas',
  'Scikit-learn',
  'Cypress',
  'Playwright',
  'Postman',
  'Git',
]

function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">About Me</span>

        <h2>
          I turn data into insights and build
          <span> reliable digital solutions.</span>
        </h2>
      </motion.div>

      <div className="about-intro-grid">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-lead">
            I am an Information & Communication Engineering graduate from
            Bangladesh University of Professionals with hands-on experience
            in data analytics, data annotation and software quality assurance.
          </p>

          <p>
            I work with Python, SQL, Excel, Power BI and machine learning
            tools to analyze data, build dashboards and develop data-driven
            solutions. My project experience includes A/B testing, regression
            analysis, customer churn analysis, business intelligence
            dashboards and AI-based image analysis.
          </p>

          <p>
            Alongside data-focused work, I have practical experience in
            manual and automation testing, including test case design,
            regression testing, bug reporting and tools such as Cypress,
            Playwright and Postman.
          </p>
        </motion.div>

        <motion.div
          className="about-tools-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-panel-label">Core toolkit</span>

          <div className="about-tools">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="about-profile-info">
            <div>
              <span>Education</span>
              <strong>B.Sc. in ICE, BUP</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Dhaka, Bangladesh</strong>
            </div>

            <div>
              <span>Current focus</span>
              <strong>Data Analytics, Data Science & QA</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong>Open to Opportunities</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="expertise-grid">
        {expertise.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.article
              key={item.title}
              className="expertise-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <div className="expertise-icon">
                <Icon size={22} />
              </div>

              <span className="expertise-number">
                0{index + 1}
              </span>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default About