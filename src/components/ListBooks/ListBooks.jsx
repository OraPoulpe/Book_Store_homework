import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadBooksIfNotExist } from '../../store/book/loadBooksIfNotExist';
import { selectBooks, selectIsBooksLoading } from '../../store/book/selectors';
import { selectGenresBookIds } from '../../store/genre/selectors';
import Book from '../Book/Book'
import styles from './styleListBooks.module.css'

const ListBooks = ({genreId}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist(genreId))
    }, [genreId]);

    const bookIds = useSelector(state => selectGenresBookIds(state, genreId));
    const isLoading = useSelector(state => selectIsBooksLoading(state));

    if (isLoading){
        return <span>Loading ...</span>;
    }

    if (!bookIds){
        return null;
    }

    // console.log(genreId);

    return <div className={styles.list_books_layout}>
        <div>
            {
                bookIds.map((id) => <Book key={id} bookId={id}/>)
            }
        </div>
    </div>
}

export default ListBooks