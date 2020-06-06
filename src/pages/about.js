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
            <p className="bio-text">
              Hey there! I'm Darryl Nicerio, a web developer that (as of now) specializes in the front-end department. This website was made to showcase all of what I have done, can do and plan to do.
              <br></br>
              <br></br>
              I got into development because of my love for computers, the internet and learning new technologies. That desire to always learn has naturally led me to this path.
              <br></br>
              <br></br>
              As a web developer, it's only natural for me to have experience in languages such as HTML, CSS/SASS, JavaScript. I also have experience developing in some front-end frameworks and libraries like Bootstrap, React.js and GatsbyJS.
              <br></br>
              <br></br>
              If you need someone with these skillset and like my work, please feel free to head over to the Contact section so we can get in touch. I would love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
