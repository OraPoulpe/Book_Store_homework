import styles from './styleListGenres.module.css'

const ListGenres = (props) => {

    const cheakStyle = (genre) => {
        if (genre === props.activeGenre) {
            return styles.btn_genre_active
        } else {
            return styles.btn_genre
        }
    }

   
    return <div className={styles.listGenres}>
            {
                props.genres.map((genre) => 
                    <button key={genre.id} className={cheakStyle(genre)} onClick={() => props.changeActiveGenre(genre)}>{genre.name}</button>)
            }
    </div>
}

export default ListGenres