import React from 'react'
import Book from '../Book/Book'
import styles from './styleListBooks.module.css'

const ListBooks = ({genre}) => {

    return <div className={styles.list_books_layout}>
        <div>
            {
                genre.books.map((book) => <Book key={book.id} book={book}/>)
            }
        </div>
    </div>
}

export default ListBooks