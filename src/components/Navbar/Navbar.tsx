import React from 'react'
import styles from './styles.module.scss'
import { UtilityContext } from '../../App'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const { isMobile } = React.useContext(UtilityContext) ?? {}

  return (
    <div className="sticky full-bleed layouted">
      <nav className={styles.navbar}>
        <div className={styles.navHeading}>
          <NavLink to="/">React</NavLink>
        </div>
        <ul className={styles.navItems}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) => (isActive ? styles.active : '')}
              end
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? styles.active : '')}
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? styles.active : '')}
              end
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signIn"
              className={({ isActive }) => (isActive ? styles.active : '')}
              end
            >
              Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
