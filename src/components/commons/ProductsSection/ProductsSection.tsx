import React from 'react'
import styles from './styles.module.scss'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import {nanoid} from 'nanoid'
import {ProductData} from '../../../model'
import {UtilityContext} from '../../../App'

interface Props {
  type: string
  data: ProductData[]
  sectionData: {
    heading: string
    description: string
  }
}

const ProductsSection: React.FC<Props> = ({type, data, sectionData}) => {
  const {isMobile} = React.useContext(UtilityContext)

  const {heading, description} = sectionData ?? {}

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
        <div ref={cardsSectionRef} className={styles.cardsSection} style={{
          justifyContent: `${products && products?.length > 6 || isMobile ? "flex-start" : "center"}`
        }}>
          {products ? (
            products.map((data) => {
              const availableQty = Number(data.available_qty)
              return (
                availableQty > 0 && <ProductCard key={nanoid()} data={data} />
              )
            })
          ) : (
            <div
              style={{
                margin: `${isMobile ? '0 auto' : '0'}`
              }}
            >
              <Loading
                loadingType="bars"
                height={isMobile ? 50 : 80}
                width={isMobile ? 50 : 80}
              />
            </div>
          )}
          {products && products?.length > 6 && !isMobile && (
            <button
              type="button"
              className={styles.prevButton}
              onClick={() => scroll(-200 * 5)}
            >
              <AiOutlineLeft />
            </button>
          )}
          {products && products?.length > 6 && !isMobile && (
            <button
              type="button"
              className={styles.nextButton}
              onClick={() => scroll(200 * 5)}
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
