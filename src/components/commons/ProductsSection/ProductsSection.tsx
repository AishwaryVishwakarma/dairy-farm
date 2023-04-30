import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import { nanoid } from 'nanoid'
import { ProductData } from '../../../model'

interface Props {
  type: string
  data: ProductData[]
  sectionData: {
    heading: string
    description: string
  }
}

const ProductsSection: React.FC<Props> = ({ type, data, sectionData }) => {
  const { heading, description } = sectionData ?? {}

  const cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const [products, setProducts] = React.useState<ProductData[]>()

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  React.useEffect(() => {
    setProducts(data)
  }, [data])

  return (
    <div id={type} className={`${styles.sectionWrapper} full-bleed layouted`}>
      <div className={styles.sectionMain}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.description}>{description}</p>
        <div ref={cardsSectionRef} className={styles.cardsSection}>
          {products ? (
            products.map((data) => {
              const availableQty = Number(data.available_qty)
              return (
                availableQty > 0 && <ProductCard key={nanoid()} data={data} />
              )
            })
          ) : (
            <Loading loadingType="bars" height={80} width={80} />
          )}
          {products && products?.length >= 6 && (
            <button
              type="button"
              className={styles.prevButton}
              onClick={() => scroll(-1400)}
            >
              <AiOutlineLeft />
            </button>
          )}
          {products && products?.length >= 6 && (
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
  )
}

export default ProductsSection
