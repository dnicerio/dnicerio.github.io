import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>This is the Contacts page</h1>
    <p>Darryl Nicerio's contact information will be put here</p>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default ContactPage