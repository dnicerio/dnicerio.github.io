import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>This is the About page</h1>
    <p>Here you can see the skillset of Darryl Nicerio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
