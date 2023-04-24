import React from 'react'
import styles from './styles.module.scss'
import { UtilityContext } from '../../App'

const NAV_TABS = ['Home', 'Service', 'Products', 'Contact Us', 'Sign In']

const Navbar: React.FC = () => {
  const { theme, setTheme, isMobile } = React.useContext(UtilityContext) ?? {}

  function setThemeHandler() {
    theme === 'light' ? setTheme?.('dark') : setTheme?.('light')
  }

  return (
    <nav
      className={`${styles.navbar} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <div className={styles.navHeading}>React</div>
      <ul className={styles.navItems}>
        {NAV_TABS.map((tab, idx) => (
          <li key={idx}>{tab}</li>
        ))}
      </ul>
      {/* <label className={styles.toggleLabel}>
        <input
          type="checkbox"
          onChange={setThemeHandler}
          checked={theme === 'dark'}
        />
        <span className={styles.toggleButton} />
        <span className={styles.toggleIcons} />
      </label> */}
    </nav>
  )
}

export default Navbar
