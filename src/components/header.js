import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <div className="nav-title">
      <p className="title">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `white`,
            fontSize: `24px`
          }}
        >
          {siteTitle}
        </Link>
      </p>
    </div>
    <ul className="nav-links">
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/projects/">Projects</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
