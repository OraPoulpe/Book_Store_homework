import ListGenres from "../../components/ListGenres/ListGenres";
import {useState} from "react";
import ListBooks from '../../components/ListBooks/ListBooks';

import styles from './styleMainPage.module.css'

export const MainPage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.genres[0]);

    const changeActiveGenre = (genre) => {
        setActiveGenre(genre)

    }
    
    return <div className={styles.mainPage}>

        <ListGenres activeGenre = {activeGenre} genres = { props.genres} changeActiveGenre = {changeActiveGenre}/>
        <ListBooks genre = {activeGenre}/>
        
    </div>
}