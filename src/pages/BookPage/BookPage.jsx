import React from 'react'
import Annotation from '../../components/Annotation/Annotation'
import Book from '../../components/Book/Book'
import ListReviews from '../../components/ListReviews/ListReviews'

import styles from './styleBookPage.module.css'

const BookPage = (props) => {
  return (
    <div>
      <div className={styles.firts_layout}>
        <div className={styles.book_layout}>
          <Book book={props.book} style={'small'}/>
        </div>
        <div className={styles.annotation_layout}>
          <Annotation book={props.book}/> 
        </div>
      </div>
      <ListReviews reviews={props.book.reviews}/>
    </div>
  )
}

export default BookPage