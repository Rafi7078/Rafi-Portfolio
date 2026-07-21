import { motion } from 'framer-motion'
import {
  Award,
  CalendarDays,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'

function CertificateCard({ certificate, index }) {
  return (
    <motion.article
      className={`certificate-card ${
        certificate.featured ? 'featured' : ''
      }`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
    >
      <div className="certificate-image-wrapper">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          className="certificate-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />

        <div className="certificate-image-overlay" />

        <div className="certificate-image-badges">
          <span className="certificate-issuer-badge">
            {certificate.issuer}
          </span>

          {certificate.featured && (
            <span className="certificate-featured">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="certificate-content">
        <div className="certificate-type-row">
          <span className="certificate-icon">
            <Award size={18} />
          </span>

          <span className="certificate-type">
            {certificate.credentialType}
          </span>
        </div>

        <h3>{certificate.title}</h3>

        <h4>{certificate.issuer}</h4>

        <div className="certificate-date">
          <CalendarDays size={15} />
          {certificate.date}
        </div>

        <p>{certificate.description}</p>

        <div className="certificate-skills">
          {certificate.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          <ShieldCheck size={17} />
          View Certificate
          <ExternalLink size={15} />
        </a>
      </div>
    </motion.article>
  )
}

export default CertificateCard