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
            I'm available for work, <span>let's get in touch</span>.
          </h2>
        </div>
        <div className="contact-icon">
            <Link to="https://www.linkedin.com/in/darrylnicerio/" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>                
            </Link>
            <Link to="https://github.com/dnicerio/" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>                
            </Link>
            <Link to="mailto:dnicerio@gmail.com" target="_blank">
              <i className="fa fa-at" aria-hidden="true"></i>                
            </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage