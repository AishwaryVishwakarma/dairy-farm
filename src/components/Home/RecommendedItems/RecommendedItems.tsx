import React from 'react'
import Loading from '../../commons/Loading/Loading'
import ProductCard from '../../commons/ProductCard/ProductCard'
import { nanoid } from 'nanoid'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styles from "./styles.module.scss"

const RecommendedItems: React.FC<any> = ({RIData}) => {
  const cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const [recommended, setRecommended] = React.useState<any[]>([])

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  React.useEffect(() => {
    setRecommended(RIData)
  }, [RIData])

  return (
    <div id="home-main" className={`${styles.RIWrapper} full-bleed layouted`}>
      <div className={styles.RIContent}>
        <div className={styles.RIMain}>
          <p className={styles.heading}>Recommended Items</p>
          <div ref={cardsSectionRef} className={styles.RICardsSection}>
            {recommended ? (
              recommended.map(
                (data) =>
                  data?.available_qty > 0 && (
                    <ProductCard key={nanoid()} data={data} />
                  )
              )
            ) : (
              <Loading loadingType="bars" height={80} width={80} />
            )}
            {recommended?.length >= 6 && (
              <button
                type="button"
                className={styles.prevButton}
                onClick={() => scroll(-1400)}
              >
                <AiOutlineLeft />
              </button>
            )}
            {recommended?.length >= 6 && (
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

export default RecommendedItems
