import React from 'react'
import styles from './styles.module.scss'
import { UtilityContext } from '../../App'
import { NavLink } from 'react-router-dom'

const NAV_TABS = ['Home', 'Service', 'Products', 'Contact Us', 'Sign In']

const Navbar: React.FC = () => {
  const { isMobile } = React.useContext(UtilityContext) ?? {}

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeading}>
        <NavLink to="/">React</NavLink>
      </div>
      <ul className={styles.navItems}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/signIn">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
