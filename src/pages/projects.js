import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import main from  '../images/main.jpg'

import './projects.css'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects-section">
      <div className="projects-container">
        <div className="projects-card">
          <img src={main} className="card-img" alt="test"></img>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio" class="card-btn" target="_blank" rel="noreferrer">Go somewhere</a>
          </div>   
        </div>
        <div className="projects-card">
          <img src={main} className="card-img" alt="test"></img>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio" class="card-btn" target="_blank" rel="noreferrer">Go somewhere</a>
          </div>   
        </div>
        <div className="projects-card">
          <img src={main} className="card-img" alt="test"></img>
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio" class="card-btn" target="_blank" rel="noreferrer">Go somewhere</a>
          </div>   
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage