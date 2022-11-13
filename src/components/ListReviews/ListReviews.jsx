import React from 'react'
import Review from '../Review/Review'
import styles from './styleListReviews.module.css'

const ListReviews = ({reviews}) => {
  return (
    <div className={styles.list_review_layout}>
        {
            reviews.map((review) => <Review key={review.id} review={review}/>)
        }
    </div>
  )
}

export default ListReviews