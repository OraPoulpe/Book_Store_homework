import { prepareData } from "../utils";
import { genreSlice } from "./index";
import { selectGenres } from "./selectors";

export const loadGenresIfNotExist = (dispatch, getState) => {
  if (selectGenres(getState())?.length > 0) {
    return 
  }
  dispatch(genreSlice.actions.startLoading());


  // fetch(`http://localhost:3001/api/book/?${bookId}`)
  //   .then((response) => response.json())
  //   .then((book) => {
  //     dispatch(genreSlice.actions.successLoading(prepareData(book)));
  //   })
  //   .catch(() => {
  //     dispatch(genreSlice.actions.failLoading());
  //   });


  fetch('http://localhost:3001/api/genres')
    .then((response) => response.json())
    .then((genres) => {
      dispatch(genreSlice.actions.successLoading(prepareData(genres)));
    })
    .catch(() => {
      dispatch(genreSlice.actions.failLoading());
    });
};