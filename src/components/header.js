import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

class Header extends React.Component {
  componentDidMount = () => {
    const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
    const navLinks = document.getElementsByClassName('nav-links')[0];

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    })
  }

  render() {
    return (
      <nav className="navbar">
        <div>
          <Link to="/" className="brand-title">
            {this.props.siteTitle}
          </Link>
        </div>
        <a href="#" className="toggle-btn">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <ul className="nav-links">
          <li>
            <Link to="/about/" className="link">About</Link>
          </li>
          <li>
            <Link to="/projects/" className="link">Projects</Link>
          </li>
          <li>
            <Link to="/contact/" className="link">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
