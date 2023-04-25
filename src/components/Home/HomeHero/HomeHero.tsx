import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const BG_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.pexels.com/photos/2343174/pexels-photo-2343174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2064359/pexels-photo-2064359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

const HomeHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)

  const changeIndexHandler = React.useCallback(() => {
    if (currentIndex === BG_IMAGES.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }, [currentIndex])

  React.useEffect(() => {
    const timeoutFunction = setInterval(changeIndexHandler, 3000)

    return () => clearInterval(timeoutFunction)
  }, [changeIndexHandler])

  function prevImageHandler(): void {
    if (currentIndex === 0) {
      setCurrentIndex(BG_IMAGES.length - 1)
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  function nextImageHandler(): void {
    if (currentIndex === BG_IMAGES.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
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
        <div className={styles.cta}>Shop Now</div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default HomeHero
