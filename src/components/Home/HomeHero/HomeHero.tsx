import React from 'react'
import styles from './styles.module.scss'

const HomeHero: React.FC = () => {


  function scrollToMain() {
    const my_element = document.getElementById("todays-special")

    my_element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <div className="full-bleed layouted">
      <div className={styles.heroWrapper}>
        <div className={styles.infoContainer}>
          <div className={styles.heading}>
            One-stop <span>Online-Shopping</span> for all your dairy need
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam
            architecto commodi magni voluptate sed minus assumenda eligendi
            perferendis deserunt!
          </p>
          <div onClick={scrollToMain} className={styles.cta}>
            Shop Now
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeHero
