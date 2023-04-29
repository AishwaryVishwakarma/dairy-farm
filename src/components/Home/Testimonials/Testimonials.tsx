import React from 'react'
import styles from './styles.module.scss'
import TestimonialCard from '../../commons/TestimonialCard/TestimonialCard'
import { nanoid } from 'nanoid'
import Loading from '../../commons/Loading/Loading'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Testimonials: React.FC<any> = ({ testimonialData }) => {
  const cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const [testimonials, setTestimonials] = React.useState<any[]>([])

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  React.useEffect(() => {
    setTestimonials(testimonialData)
  }, [testimonialData])

  return (
    <div className="full-bleed">
      <div className={styles.testimonialsWrapper}>
        <p className={styles.heading}>Testimonials</p>
        <div ref={cardsSectionRef} className={styles.TestimonialsCardsSection}>
          {testimonials ? (
            testimonials.map((data) => (
              <TestimonialCard key={nanoid()} data={data} />
            ))
          ) : (
            <Loading loadingType="bars" height={80} width={80} />
          )}
          {testimonials?.length >= 4 && (
            <button
              type="button"
              className={styles.prevButton}
              onClick={() => scroll(-1400)}
            >
              <AiOutlineLeft />
            </button>
          )}
          {testimonials?.length >= 4 && (
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

export default Testimonials
