import React from 'react'
import styles from './styleReview.module.css'

const Review = ({review}) => {
  return (
    <div className={styles.review_layout}>
      <div className={styles.first_layout} >
        <p className={styles.name_text}>{review.user.name}</p>
        <p>Рейтинг {review.rate}</p>
      </div>
        <p className={styles.info_text}>{review.text}</p>
    </div>
  )
}

export default Review