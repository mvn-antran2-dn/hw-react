import React from 'react'
import Logo from '../../../assets/images/logo.svg'
import {Link} from 'react-router-dom'
import '../../../assets/scss/layout/_all.scss'

export default function Header() {
  return (
    <div className="header wrap-content">
      <Link to="/"><img src={Logo} alt="" className="header-logo" /></Link>
      <nav className="header-links ">
        <ul className="header-list wrap-content">
          <li className="header-item">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">AboutUs</Link>
          </li>
          <li>
            <Link to="/user-list">UserList</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
