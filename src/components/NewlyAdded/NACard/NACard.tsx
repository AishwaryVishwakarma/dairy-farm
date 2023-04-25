import React from 'react'
import styles from './styles.module.scss'
import { NewlyAddedProductData as NewlyAddedProductData } from '../../../model'
import { GrFavorite } from 'react-icons/gr'
import { AiOutlineShoppingCart } from 'react-icons/ai'

// interface ProductData {
//   data: NewlyAddedProductData
// }

const NACard: React.FC<any> = ({ data }) => {
  const { id, price, title, img , item_qty, available_qty} = data ?? {}

  return (
    <div className={styles.cardWrapper}>
      <img src={img} alt={title} />
      <div className={styles.productName}>{title} | {item_qty}</div>
      <div className={styles.priceContainer}>
        MRP ₹{price}
      </div>
      <div className={styles.shopOptions}>
        {available_qty ? <AiOutlineShoppingCart/> : <p>Out of Stock</p>}
        
        
        <GrFavorite className={styles.icon}/>
        
      </div>
      
    </div>
  )
}

export default NACard
