import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './contact.css'

const ContactPage = () => (
  <Layout>
    <div className="contact-container">
      <SEO title="Contact" />
      <h1>This is the Contacts page</h1>
      <p>Darryl Nicerio's contact information will be put here</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ContactPage