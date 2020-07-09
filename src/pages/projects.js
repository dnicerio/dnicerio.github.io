import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import random from '../images/random-quote-machine.png'
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
          <a href="https://blogmasteristaken.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={blog} className="card-img" alt="Speed Typing Game"></img>
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
        <div className="projects-card">
          <a href="https://dnicerio.github.io/random-quote-machine/" target="_blank" rel="noreferrer">
            <img src={random} className="card-img" alt="Random Quote Machine"></img>
          </a>
          <div className="card-body">
            <a href="https://dnicerio.github.io/random-quote-machine/" className="card-title" target="_blank" rel="noreferrer">
              <h5>Random Quote Machine</h5>
            </a>
            <p className="card-text">
              Random quote generator application built in React.js. It fetches a random quote and author from a 3rd party API everytime a button is pressed.
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio/random-quote-machine/tree/master" className="card-btn" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          </div>   
        </div>
        <div className="projects-card">
          <a href="https://dnicerio.github.io/todolist-redo/" target="_blank" rel="noreferrer">
            <img src={todo} className="card-img" alt="Todo List"></img>
          </a>
          <div className="card-body">
            <a href="https://dnicerio.github.io/todolist-redo/" className="card-title" target="_blank" rel="noreferrer">
              <h5>Todo List</h5>
            </a>
            <p className="card-text">
              A Todo List application built in React.js. Aside from all basic Todo List functionality, it also has localStorage support to save/restore todos on app exit.
            </p>
          </div>
          <div className="btn-container"> 
            <a href="https://github.com/dnicerio/todolist-redo/tree/master" className="card-btn" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          </div>   
        </div>
      </motion.div>
    </div>
  </Layout>
)

export default ProjectsPage