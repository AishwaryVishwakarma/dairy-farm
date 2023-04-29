import React from 'react'
import styles from './styles.module.scss'
import ProductCard from '../../commons/ProductCard/ProductCard'
import { nanoid } from 'nanoid'
import Loading from '../../commons/Loading/Loading'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const TrendingItems: React.FC<any> = ({ TIData }) => {
  const cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const [todaySpecial, setTodaySpecial] = React.useState<any[]>([])

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  React.useEffect(() => {
    setTodaySpecial(TIData)
  }, [TIData])

  return (
    <div id="home-main" className={`${styles.TSWrapper} full-bleed layouted`}>
      <div className={styles.TSContent}>
        <div className={styles.TSMain}>
          <p className={styles.heading}>Trending Items 🔥</p>
          <p className={styles.description}>
            Stay ahead of the curve with the hottest trending items!
          </p>
          <div ref={cardsSectionRef} className={styles.TSCardsSection}>
            {todaySpecial ? (
              todaySpecial.map(
                (data) =>
                  data?.available_qty > 0 && (
                    <ProductCard key={nanoid()} data={data} />
                  )
              )
            ) : (
              <Loading loadingType="bars" height={80} width={80} />
            )}
            {todaySpecial?.length >= 6 && (
              <button
                type="button"
                className={styles.prevButton}
                onClick={() => scroll(-1400)}
              >
                <AiOutlineLeft />
              </button>
            )}
            {todaySpecial?.length >= 6 && (
              <button
                type="button"
                className={styles.nextButton}
                onClick={() => scroll(1400)}
              >
                <AiOutlineRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingItems
