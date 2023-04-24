import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const BG_IMAGES = [
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
    <div className={styles.heroCarousel}>
      <img src={`${BG_IMAGES[currentIndex]}`} alt="" />
      <button
        type="button"
        className={styles.leftCaret}
        onClick={prevImageHandler}
      >
        <AiOutlineLeft />
      </button>
      <button
        type="button"
        className={styles.rightCaret}
        onClick={nextImageHandler}
      >
        <AiOutlineRight />
      </button>
      <div className={styles.heroContent}>
        <div className={styles.heroHeadingContainer}>
          <div className={styles.heroHeading}>
            One-stop <span>Online-Shopping</span> for all your dairy need
          </div>
          <div className={styles.heroCta}>Shop Now</div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
