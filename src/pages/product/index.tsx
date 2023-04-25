import React from 'react'
import styles from './styles.module.scss'
import Layout from '../../components/Layout/Layout'

const ProductPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <p className={styles.productTitle}>This is a Product</p>
      </div>
    </Layout>
  )
}

export default ProductPage
