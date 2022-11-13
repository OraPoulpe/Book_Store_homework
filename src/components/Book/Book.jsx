import { useState } from 'react';
import styles from './styleBook.module.css'

const Book = ({book}) => {
    const [count, setCount] = useState(0);

    return <div className={styles.book_layout}>
        <div className={styles.book_info}>
            <p className={styles.info_text_name}>{book.name}</p>  
            <p className={styles.info_text_info}>{book.author}</p>
            <p className={styles.info_text_info}>{book.genre}</p>
            <p>Рейтинг {book.rate}</p>
            {book.price !== undefined ? <p className={styles.info_text_price}>{book.price}р</p> : <div>Нет в продаже</div>}
        </div>
        <div className={styles.counter}>
            <button className={styles.btn_counter_minus} onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            <p className={styles.cont_text}>{count}</p>
            <button className={styles.btn_counter_plus} onClick={() => setCount(count + 1)} disabled={count === 10}>+</button>
        </div>
    </div>
  
}

export default Book