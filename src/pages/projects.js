import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import smoothies from '../images/fresh-smoothies.png'
import todo from '../images/todo-list.png'
import blog from '../images/blog-master.png'

import './projects.css'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects-section">
      <motion.div initial={{ y: -1440 }} animate={{ y: 0 }} className="projects-header">
        <h2>
          These are some of my <span>projects</span>.
        </h2>
      </motion.div>
      <motion.div initial={{ y: 1440 }} animate={{ y: 0 }} className="projects-container">
        <div className="projects-card">
          <a href="https://freshsmoothies.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={smoothies} className="card-img" alt="Fresh Smoothies"></img>
          </a>
          <div className="card-body">
            <a href="https://freshsmoothies.herokuapp.com/" className="card-title" target="_blank" rel="noreferrer">
              <h5>Fresh Smoothies</h5>
            </a>
            <p className="card-text">
              Smoothies app built with Node.js, Express.js, MongoDB and EJS. Includes server side login & sign up validation, bcrypt for hashing passwords and JWT for auth.
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio/node-jwt" className="card-btn" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          </div>   
        </div>
        <div className="projects-card">
          <a href="https://todolististaken.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={todo} className="card-img" alt="MERN Todo List"></img>
          </a>
          <div className="card-body">
            <a href="https://todolististaken.herokuapp.com/" className="card-title" target="_blank" rel="noreferrer">
              <h5>MERN Todo List</h5>
            </a>
            <p className="card-text">
              A Todo List application built with React.js, Node.js, Express.js and MongoDB. The frontend interacts with the REST API backend to CRUD data to/from database.
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio/mern-todolist" className="card-btn" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          </div>   
        </div>
        <div className="projects-card">
          <a href="https://blogmasteristaken.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={blog} className="card-img" alt="Blog Master"></img>
          </a>
          <div className="card-body">
            <a href="https://blogmasteristaken.herokuapp.com/" className="card-title" target="_blank" rel="noreferrer">
              <h5>Blog Master</h5>
            </a>  
            <p className="card-text">
              A server side rendering (SSR) blog app created in Node.js, Express.js, MongoDB and EJS. It follows MVC structure of organizing code that makes updating the app easier.
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio/blog-project" className="card-btn" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          </div>   
        </div>
      </motion.div>
    </div>
  </Layout>
)

export default ProjectsPage