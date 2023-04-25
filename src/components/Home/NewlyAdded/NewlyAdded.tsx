import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { NewlyAddedProductData as NewlyAddedProductData } from '../../model'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import NewlyAddedCard from './NACard/NewlyAddedCard'
import axios from 'axios'

const NewlyAdded: React.FC = () => {
  const cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const [todaysSpecial, setTodaysSpecial] = React.useState([])

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  React.useEffect(() => {
    axios
      .post('http://mywinkel.in/admin/api/home')
      .then((res) => setTodaysSpecial(res.data.todayspecial))
      .catch((err) => console.log(err))
  }, [])

  console.log(todaysSpecial)

  return (
    <div className={styles.NAWrapper}>
      <div className={styles.NAMain}>
        <p className={styles.heading}>Today's Special</p>
        <div ref={cardsSectionRef} className={styles.NACardsSection}>
          {todaysSpecial.length > 0 &&
            todaysSpecial.map(
              (data) =>
                data?.available_qty > 0 && (
                  <NewlyAddedCard key={nanoid()} data={data} />
                )
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

export default NewlyAdded
