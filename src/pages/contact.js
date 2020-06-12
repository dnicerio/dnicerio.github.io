import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './contact.css'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-section">
      <div className="contact-container">
        <motion.div initial={{ y: -1440 }} animate={{ y: 0 }} className="contact-header">
          <h2>
            I'm available, <span>let's work together</span>.
          </h2>
        </motion.div>
        <div className="contact-icon">
            <motion.a initial={{ x: -1440 }} animate={{ x: 0 }} href="https://www.linkedin.com/in/darrylnicerio/" className="icon" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>                
            </motion.a>
            <motion.a initial={{ y: 1440 }} animate={{ y: 0 }} href="https://github.com/dnicerio/" className="icon" target="_blank" rel="noreferrer">
              <i className="fa fa-github" aria-hidden="true"></i>                
            </motion.a>
            <motion.a initial={{ x: 1440 }} animate={{ x: 0 }} href="mailto:dnicerio@gmail.com" className="icon" target="_blank" rel="noreferrer">
            <i className="fa fa-envelope" aria-hidden="true"></i>                
            </motion.a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage