import React from 'react'
import Layout from '../../components/Layout/Layout'
import styles from './styles.module.scss'

const CategoriesPage: React.FC<any> = () => {
  return (
    <Layout>
      <div className="full-bleed layouted">
        <div className={styles.categoriesWrapper}>Hello</div>
      </div>
    </Layout>
  )
}

export default CategoriesPage
