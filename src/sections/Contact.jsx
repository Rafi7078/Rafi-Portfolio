import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  AlertCircle,
} from 'lucide-react'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { contactDetails } from '../data/contact'
import './Contact.css'

function Contact() {
  const [state, handleSubmit] = useForm('meeyzqnk')

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get in Touch</span>

          <h2>
            Let&apos;s Work <span>Together</span>
          </h2>

          <p>
            I am open to opportunities in data analytics, data science,
            AI and software quality assurance. Feel free to contact me
            for roles, collaborations or professional discussions.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-status">
              <CheckCircle2 size={17} />
              {contactDetails.availability}
            </div>

            <h3>Contact Information</h3>

            <p>
              Reach out directly through email or connect with me on
              GitHub and LinkedIn.
            </p>

            <div className="contact-details">
              <a href={`mailto:${contactDetails.email}`}>
                <span className="contact-detail-icon">
                  <Mail size={19} />
                </span>

                <span>
                  <small>Email</small>
                  {contactDetails.email}
                </span>
              </a>

              <div className="contact-location">
                <span className="contact-detail-icon">
                  <MapPin size={19} />
                </span>

                <span>
                  <small>Location</small>
                  {contactDetails.location}
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href={contactDetails.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
                <ExternalLink size={14} />
              </a>

              <a
                href={contactDetails.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
                LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {state.succeeded && (
              <div className="contact-success">
                <CheckCircle2 size={18} />

                <span>
                  Thank you! Your message has been sent successfully.
                </span>
              </div>
            )}

            {!state.succeeded &&
              state.errors &&
              state.errors.length > 0 && (
                <div className="contact-error">
                  <AlertCircle size={18} />

                  <span>
                    Something went wrong. Please check your information
                    and try again.
                  </span>
                </div>
              )}

            <button
              type="submit"
              className="contact-submit"
              disabled={state.submitting}
            >
              {state.submitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={17} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact