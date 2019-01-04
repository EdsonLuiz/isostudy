import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Header.css'

import logo from '../images/logo-designcode.svg'

class Header extends Component {
  state = {
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'header header-scrolled' : 'header'}
      >
        <div className="header-group">
          <Link to="/">
            <img src={logo} alt="" width="30" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
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
