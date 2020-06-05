import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import about from  '../images/about-primary.jpg'

import './about.css'

const AboutPage = () => (
  <Layout>
    <div className="about-section">
      <SEO title="About" />
      <div className="about-container">
        <div className="about-header">
          <h2>About <span>Me</span></h2>
          <h4>A few <span>things</span> about me...</h4>
        </div>
        <div className="about-info">
          <div className="bio-image">
            <img src={about} alt="test"></img>
          </div>
          <div className="bio">
            <h3 className="bio-header"><span>Bio</span></h3>
            <p className="bio-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
