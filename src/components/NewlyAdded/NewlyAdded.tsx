import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { NewlyAddedProductData as NewlyAddedProductData } from '../../model'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import NACard from './NACard/NACard'

const DUMMY_DATA = [
  {
    id: nanoid(),
    price: 100,
    item_qty: '900 g Jar',
    available_qty: 5,
    title:
      'Amul Peanut Butter Crunchy',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/63a6c61a4234f6c18d2ab7ab/webp/01-hero-image_amul-peanut-butter-crunchy-900g-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 200,
    available_qty: 0,
    item_qty: '900g Jar',
    title:
      'Amul Peanut Butter Creamy',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/63a6c43387645fc3385a6bc2/webp/01-hero-image_amul-peanut-butter-creamy-900g-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 300,
    available_qty: 5,
    item_qty: 'Pack of 30',
    title: 'Amul High Protein Buttermilk, 200 mL',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/641a9c5dd94fc09d55a79318/webp/01-hero-image_-multipack-30-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 500,
    item_qty: 'Pack of 32',
    available_qty: 5,
    title:
      'Amul High Protein Mango Lassi, 250 mL ',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/6341311e4104b35cb0ba8d9e/webp/01-hero-image_-multipack-8-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 250,
    item_qty: '300 g Jar',
    available_qty: 0,
    title:
      'Amul Peanut Butter Creamy ',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/6341103333bf7f7941532feb/webp/01-hero-image_-multipack-32-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 570,
    item_qty: '300 g Jar',
    available_qty: 0,
    title:
      'Amul Peanut Butter Crunchy ',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/633e52ed49a2e226821388ca/webp/01-hero-image_amul-peanut-butter-creamy-300g-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 800,
    item_qty: 'Pack of 8',
    available_qty: 5,
    title:
      'Amul Lactose Free Milk, 250 mL',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/633e61f23ed16728bfdde069/webp/01-hero-image_amul-peanut-butter-crunchy-300g-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 525,
    item_qty: 'Pack of 30',
    available_qty: 0,
    title:
      'Amul High Protein Buttermilk, 200 mL',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/63413300d6daf05bc00be257/webp/01-hero-image_-multipack-08_amul-lactosefree-milk-tetrapack-250ml-1024x1024.png'
  },
  {
    id: nanoid(),
    price: 253,
    item_qty: 'Pack of 12',
    available_qty: 5,
    title:
      'Amul High Protein Buttermilk, 200 mL',
    img: 'https://cdn.storehippo.com/s/62fa94df8c13af2e242eba16/641a9c5dd94fc09d55a79318/webp/01-hero-image_-multipack-30-1024x1024.png'
  },
]

const NewlyAdded: React.FC = () => {
  const cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  return (
    <div className={styles.NAWrapper}>
      <div className={styles.NAMain}>
        <div className={styles.NAHeadingContainer}>
          <p>Newly Added</p>
          <Link to='/'>See all deals</Link>
        </div>
        <div ref={cardsSectionRef} className={styles.NACardsSection}>
          {DUMMY_DATA.map((data) => (
            <NACard key={data.id} data={data} />
          ))}
          <button
            type='button'
            className={styles.prevButton}
            onClick={() => scroll(-1400)}
          >
            <GrFormPrevious />
          </button>
          <button
            type='button'
            className={styles.nextButton}
            onClick={() => scroll(1400)}
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewlyAdded
