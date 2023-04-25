import React from 'react'
import styles from './styles.module.scss'
import { NewlyAddedProductData as NewlyAddedProductData } from '../../../model'

// interface ProductData {
//   data: NewlyAddedProductData
// }

const NACard: React.FC<any> = ({ data }) => {
  const { id, price, title, img } = data ?? {}

  return (
    <div className={styles.cardWrapper}>
      <img src={img} alt={title} />
      <div className={styles.priceContainer}>
        <p>Get it for as low as</p>
        <span>₹{price}.00</span>
      </div>
      <div className={styles.productName}>{title}</div>
    </div>
  )
}

export default NACard
