import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-section">
      <div className="header-container">
        <motion.h1 initial={{ x: -1200 }} animate={{ x: 0 }} className="main-header">
          Hi! I'm <span>Darryl Nicerio</span>.
        </motion.h1>
        <motion.p initial={{ x: 1200 }} animate={{ x: 0 }} className="sub-header">
          a <span>front-end</span> web developer.
        </motion.p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
