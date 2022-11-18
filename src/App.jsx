import Layout from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { mock } from "./constants/mock";
import BookPage from "./pages/BookPage/BookPage";
import { Link, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import styles from "./styleApp.module.css"

export function App() {
  return (
    <Layout>
      <BrowserRouter>
        <header className={styles.header}>
          <p className={styles.store_text}>Магазин</p>
          <div className={styles.nav_bar}>
              <Link className={styles.btn_book_page} to="/Book_Store_homework">
                Главная страница
              </Link>
              <Link className={styles.btn_book_page} to="/Book_Store_homework/book" >
                Страница книги
              </Link>
          </div>
          <button className={styles.btn_basket} />
        </header>
        <Routes>
          <Route
            path="/Book_Store_homework"
            element={<MainPage genres={mock} />}
          />
          <Route
            path="/Book_Store_homework/book"
            element={<BookPage book={mock[0].books[1]} />}
          />
          <Route
            path="*"
            element={<Navigate to="/Book_Store_homework" replace />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
