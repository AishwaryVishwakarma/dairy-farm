import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC<any> = ({ setIsModalOpen }) => {
  return (
    <div className="bgLight sticky full-bleed layouted">
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
        </ul>
        <button
          type="button"
          className={styles.signInButton}
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Sign In
        </button>
      </nav>
    </div>
  )
}

export default Navbar
