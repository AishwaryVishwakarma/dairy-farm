import React from 'react'
import styles from './styles.module.scss'
import Layout from '../../components/Layout/Layout'

const ProductPage: React.FC = () => {
  return (
    <Layout>
      <div className='full-bleed layouted'>
        <div className={styles.productWrapper}>
          <p className={styles.productTitle}>This is a Product</p>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
