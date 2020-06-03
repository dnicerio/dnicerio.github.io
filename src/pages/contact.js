import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './contact.css'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>
            I'm available, <span>let's work together</span>.
          </h2>
        </div>
        <div className="contact-icon">
            <a href="https://www.linkedin.com/in/darrylnicerio/" className="icon" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>                
            </a>
            <a href="https://github.com/dnicerio/" className="icon" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>                
            </a>
            <a href="mailto:dnicerio@gmail.com" className="icon" target="_blank">
              <i className="fa fa-at" aria-hidden="true"></i>                
            </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage