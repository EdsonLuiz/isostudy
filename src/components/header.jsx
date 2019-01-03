import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

import logo from '../images/logo-designcode.svg'

const Header = ({ siteTitle }) => (
  <div className="header">
     <div className="header-group">
       <Link to="/">
        <img src={logo} alt="" width="30"/>
       </Link>
       <Link to="/courses">Courses</Link>
       <Link to="/downloads">Downloads</Link>
       <Link to="/workshops">Workshops</Link>
       <Link to="/buy"><button>Buy</button></Link>
     </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
