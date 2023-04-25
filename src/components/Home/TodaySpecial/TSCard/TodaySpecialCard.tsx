import React from 'react'
import styles from './styles.module.scss'
import { NewlyAddedProductData as NewlyAddedProductData } from '../../../../model'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

// interface ProductData {
//   data: NewlyAddedProductData
// }

const TodaySpecialCard: React.FC<any> = ({ data }) => {
  const {
    id,
    price,
    item_name: name,
    category_info: category,
    image_name,
    image_url
  } = data ?? {}

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.wishlist}>
        <AiOutlineHeart />
      </div>
      <img src={image_url} alt={image_name} />
      <div className={styles.detailsContainer}>
        <div className={styles.category}>{category.category_name}</div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.footerContainer}>
          <div className={styles.price}>MRP ₹{price}</div>
          <div className={styles.cta}>
            <p>Add</p>
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodaySpecialCard
