import React from 'react'
import styles from './styles.module.scss'
import { UtilityContext } from '../../App'

const NAV_TABS = ['Home', 'Service', 'Products', 'Contact Us', 'Sign In']

const Navbar: React.FC = () => {
  const { isMobile } = React.useContext(UtilityContext) ?? {}

  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeading}>React</div>
      <ul className={styles.navItems}>
        {NAV_TABS.map((tab, idx) => (
          <li key={idx}>{tab}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
