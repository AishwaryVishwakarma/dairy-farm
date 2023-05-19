import React from 'react'
import styles from './styles.module.scss'
import {NavLink} from 'react-router-dom'
import {UtilityContext} from '../../App'
import {nanoid} from 'nanoid'

interface NavItems {
  name: string
  path: string
}

const NAV_ITEMS: NavItems[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Service',
    path: '/service'
  },
  {
    name: 'Categories',
    path: '/categories'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'Contact Us',
    path: '/contact-us'
  }
]

const Navbar: React.FC<any> = ({setIsModalOpen}) => {
  const {isMobile} = React.useContext(UtilityContext)

  const [isHamMenuOpen, setIsHamMenuOpen] = React.useState<boolean>(false)

  const [isHamClicked, setIsHamClicked] = React.useState<boolean>(false)

  const listItems = (
    <>
      <ul className={styles.navItems}>
        {NAV_ITEMS.map((item) => (
          <li key={nanoid()}>
            <NavLink
              to={item.path}
              className={({isActive}) => (isActive ? styles.active : '')}
              end
              onClick={() => setIsHamMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => {
          setIsModalOpen(true)
          setIsHamMenuOpen(false)
        }}
      >
        Sign In
      </button>
    </>
  )

  return (
    <div className="bgLight sticky full-bleed layouted">
      <nav className={styles.navbar}>
        <div className={styles.navHeading}>
          <NavLink to="/">React</NavLink>
        </div>
        {isMobile ? (
          <div
            className={`${styles.hamButton} ${isHamClicked
              ? isHamMenuOpen
                ? styles.closeState
                : styles.openState
              : ''
              }`}
            onClick={() => {
              setIsHamMenuOpen((prevState) => !prevState)
              setIsHamClicked(true)
            }}
          >
            <div className={styles.hamLine}></div>
            <div className={styles.hamLine}></div>
            <div className={styles.hamLine}></div>
          </div>
        ) : (
          listItems
        )}
        {isMobile && isHamMenuOpen && (
          <div className={styles.hamMenu}>{listItems}</div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
