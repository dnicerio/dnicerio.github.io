import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './projects.css'

const ProjectsPage = () => (
  <Layout>
    <div className="projects-container">
      <SEO title="Projects" />
      <h1>This is the projects page</h1>
      <p>All of Darryl Nicerio's project will be displayed here</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ProjectsPage