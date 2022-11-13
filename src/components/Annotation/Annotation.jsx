import React from 'react'
import styles from './stylesAnnotation.module.css'

const Annotation = ({book}) => {
  return (
    <div className={styles.annotation_layout}>
      <p className={styles.name_text}>Аннотация</p>
      <p className={styles.info_text}>{book.annotation}</p>
    </div>
  )
}

export default Annotation