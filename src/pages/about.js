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
              Hello! I'm Darryl Nicerio, a web developer that specializes in JavaScript and PHP. This website was made to showcase all of what I have done, can do and plan to do.
              <br></br>
              <br></br>
              I got into software development because of my love for computers, the internet and learning new technologies. That desire to always learn has naturally led me to this path.
              <br></br>
              <br></br>
              As a web developer, my workflow involves front end web technologies such as HTML, CSS/SASS, JavaScript, front-end frameworks and libraries like Bootstrap, React.js and GatsbyJS. For back end development, the web technologies I use are Node.js, Express.js, PHP and Laravel. Lastly, for Database I utilize the technologies MySQL, MariaDB and MongoDB.
              <br></br>
              <br></br>
              If you like my work and looking for someone with similar skill set, please feel free to head over to the Contact section so we can get in touch. I would love to hear from you.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
