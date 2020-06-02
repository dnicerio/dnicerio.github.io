import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>This is the projects page</h1>
    <p>All of Darryl Nicerio's project will be displayed here</p>
    <Link to="/projects/">Go to Projects page</Link>
  </Layout>
)

export default ProjectsPage