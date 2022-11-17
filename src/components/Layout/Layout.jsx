import React from 'react'
import styles from './styleLayout.module.css'


const Layout = (props) => {
    return <div className={styles.main_layout}>
        <header className={styles.header}>
            <p className={styles.store_text}>Магазин</p>
            <div className={styles.nav_bar}>
                <a className={styles.btn_book_page} href='/home'>Главная страница</a>
                <a className={styles.btn_book_page} href='/book'>Страница книги</a>
            </div>
            <button className={styles.btn_basket}/>
        </header>
        <div className={styles.content_layout}>
            { props.children }
        </div>
    </div>
}

export default Layout
