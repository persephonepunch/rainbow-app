import React from "react"
import Link from "gatsby-link"
import './Header.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/apple1.png')} width="45" /><img src={require('../images/nicebl-01.svg')} width="70" /></Link>
      <Link to="/index">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>

  </div>
)

export default Header
