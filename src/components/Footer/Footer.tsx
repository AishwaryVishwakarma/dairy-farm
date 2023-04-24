import React from 'react'
import styles from './styles.module.scss'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'

const ICONS = [<FiFacebook />, <FiInstagram />, <FiLinkedin />, <FiTwitter />]

const TABS = ['Terms of Use', 'Privacy Policy', 'Security', 'About Us', 'FAQ']

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <ul className={styles.footerIcons}>
        {ICONS.map((icon, idx) => (
          <li key={idx}>{icon}</li>
        ))}
      </ul>
      <ul className={styles.footerTabs}>
        {TABS.map((tab, idx) => (
          <li key={idx}>{tab}</li>
        ))}
      </ul>
      <div className={styles.footerCredits}>
        Made with{' '}
        <span>
          <AiFillHeart />
        </span>{' '}
        by{' '}
        <a
          href="https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/"
          target="_blank"
        >
          Aishwary Vishwakarma
        </a>{' '}
        &{' '}
        <a
          href="https://www.linkedin.com/in/dipayan-chakraborty-866192208/"
          target="_blank"
        >
          Dipayan Chakraborty
        </a>{' '}
        @ 2023
      </div>
    </div>
  )
}

export default Footer
