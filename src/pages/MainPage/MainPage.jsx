import ListGenres from "../../components/ListGenres/ListGenres";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectGenres } from "../../store/genre/selectors";
import { loadGenresIfNotExist } from "../../store/genre/loadGenresIfNotExist";

import ListBooks from "../../components/ListBooks/ListBooks";

import styles from "./styleMainPage.module.css";



export const MainPage = () => {

  const dispatch = useDispatch();
  const genres = useSelector((state) => selectGenres(state));

  const [activeGenre, setActiveGenre] = useState(genres[0]);

  const changeActiveGenre = (genre) => {
      setActiveGenre(genre);
    };

  useEffect(()=>{
      dispatch(loadGenresIfNotExist);
  }, []);

  // console.log(type(activeGenre))

  return (
    <div className={styles.mainPage}>
      <ListGenres
        activeGenre={activeGenre}
        changeActiveGenre={changeActiveGenre}
      />
      {activeGenre !== undefined && <ListBooks genreId={activeGenre.id} />}
    </div>
  );
};
