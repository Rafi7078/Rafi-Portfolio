import { motion } from 'framer-motion'
import CertificateCard from '../components/CertificateCard'
import { certifications } from '../data/certifications'
import './Certificates.css'

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <motion.div
          className="certificates-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            Credentials
          </span>

          <h2>
            Professional <span>Certifications</span>
          </h2>

          <p>
            Certifications and practical learning experiences that
            strengthen my capabilities in data analytics, productivity,
            structured problem-solving and professional workflows.
          </p>
        </motion.div>

        <div className="certificates-grid">
          {certifications.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates