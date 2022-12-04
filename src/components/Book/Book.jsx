import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { cartSlice } from "../../store/cart";
import { selectBookCount} from "../../store/cart/selectors";
import styles from "./styleBook.module.css";

const Book = ({ bookId }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => selectBookById(state, bookId));
  const count = useSelector(state => selectBookCount(state, bookId));

  // console.log(book)

  if (!book) {
    return null;
  }

  return (
    <div className={styles.book_layout}>
      <div className={styles.book_info}>
        <p className={styles.info_text_name}>{book.name}</p>
        <p className={styles.info_text_info}>{book.author}</p>
        <p className={styles.info_text_info}>{book.genre}</p>
        <p>Рейтинг {book.rate}</p>
        {book.price !== undefined ? (
          <p className={styles.info_text_price}>{book.price}р</p>
        ) : (
          <div>Нет в продаже</div>
        )}
      </div>
      <div className={styles.counter}>
        <button
          className={styles.btn_counter_minus}
          onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
          disabled={count === 0}
        >
          -
        </button>
        <p className={styles.cont_text}>{count || 0}</p>
        <button
          className={styles.btn_counter_plus}
          onClick={() => dispatch(cartSlice.actions.addBook(bookId))}
          disabled={count === 10}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Book;
