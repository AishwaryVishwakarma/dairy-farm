import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { NewlyAddedProductData as NewlyAddedProductData } from '../../model'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import TodaySpecialCard from './TSCard/TodaySpecialCard'
import Loading from '../../commons/Loading/Loading'

const TodaySpecial: React.FC<any> = ({ TSData }) => {
  const cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const [todaySpecial, setTodaySpecial] = React.useState([])

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  React.useEffect(() => {
    setTodaySpecial(TSData)
  }, [TSData])

  console.log(TSData)

  return (
    <div className={styles.NAWrapper}>
      <div className={styles.NAMain}>
        <p className={styles.heading}>Today's Special</p>
        <div ref={cardsSectionRef} className={styles.NACardsSection}>
          {todaySpecial ? (
            todaySpecial.map(
              (data) =>
                data?.available_qty > 0 && (
                  <TodaySpecialCard key={nanoid()} data={data} />
                )
            )
          ) : (
            <Loading loadingType="bars" height={80} width={80} />
          )}
          <button
            type="button"
            className={styles.prevButton}
            onClick={() => scroll(-1400)}
          >
            <AiOutlineLeft />
          </button>
          <button
            type="button"
            className={styles.nextButton}
            onClick={() => scroll(1400)}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodaySpecial
