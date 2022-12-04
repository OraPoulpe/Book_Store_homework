import styles from './styleListGenres.module.css'
import { selectGenres } from "../../store/genre/selectors";
import { useSelector } from "react-redux";


const ListGenres = (props) => {

    const genres = useSelector((state) => selectGenres(state));

    const cheakStyle = (genre) => {
        if (genre === props.activeGenre) {
            return styles.btn_genre_active
        } else {
            return styles.btn_genre
        }
    }
   
    return <div className={styles.listGenres}>
        {
            genres.map((genre) => 
                <button 
                key={genre.id} 
                className={cheakStyle(genre)} 
                onClick={() => props.changeActiveGenre(genre)}>
                {genre.name}
                </button>)
        }
    </div>
}

export default ListGenres