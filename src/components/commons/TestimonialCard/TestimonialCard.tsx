import React from 'react'
import styles from './styles.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { nanoid } from 'nanoid'

const TestimonialCard: React.FC<any> = ({ data }) => {
  const { name, profile_image: image, comment, ratting } = data ?? {}

  const STARS = new Array(Number(ratting))

  STARS.fill(0)

  return (
    <div className={styles.testimonialCardWrapper}>
      <img src={image} alt={name} />
      <p className={styles.name}>{name}</p>
      <div className={styles.stars}>
        {STARS.map(() => (
          <AiFillStar key={nanoid()} />
        ))}
      </div>
      <div className={styles.reviews}>{ratting} / 5 Reviews</div>
      <p className={styles.comment}>{comment}</p>
    </div>
  )
}

export default TestimonialCard
