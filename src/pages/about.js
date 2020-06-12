import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import about from  '../images/about-primary.jpg'

import './about.css'

const AboutPage = () => (
  <Layout>
    <div className="about-section">
      <SEO title="About" />
      <div className="about-container">
        <motion.div initial={{ y: 1440 }} animate={{ y: 0 }} className="about-header">
          <h2>
            About <span>Me</span>.
          </h2>
        </motion.div>
        <div className="about-info">
          <motion.div initial={{ y: 1440 }} animate={{ y: 0 }} className="bio-image">
            <img src={about} alt="Profile pic of Darryl Nicerio"></img>
          </motion.div>
          <div className="bio">
            <motion.h4 initial={{ y: 1440 }} animate={{ y: 0 }} className="bio-header">
              Welcome to my <span>portfolio</span>.
            </motion.h4>
            <motion.p initial={{ y: 1440 }} animate={{ y: 0 }} className="bio-text">
              Hello! I'm Darryl Nicerio, a web developer that (as of now) specializes in the front-end department. This website was made to showcase all of what I have done, can do and plan to do.
              <br></br>
              <br></br>
              I got into development because of my love for computers, the internet and learning new technologies. That desire to always learn has naturally led me to this path.
              <br></br>
              <br></br>
              As a web developer, I am expected to have in-depth knowledge with the languages such as HTML, CSS/SASS and JavaScript. I also have experience creating projects using front-end frameworks and libraries like Bootstrap, React.js and GatsbyJS.
              <br></br>
              <br></br>
              If you need someone with these skillset and like my work, please feel free to head over to the Contact section so we can get in touch. I would love to hear from you.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
