import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <div className="index-container">
      <div className="header-container">
        <SEO title="Home" />
        <h1 className="main-header">Hi! I'm <span>Darryl Nicerio</span>.</h1>
        <p className="sub-header">aspiring <span>front-end</span> web developer.</p>
        {/* <Link to="/about/">Go to About page</Link> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
