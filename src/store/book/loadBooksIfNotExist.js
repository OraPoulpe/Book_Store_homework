import { prepareData } from "../utils";
import { bookSlice } from "./index";
import { selectBooks } from "./selectors";

export const loadBooksIfNotExist = (genreId) => (dispatch, getState) => {
  // if (selectBooks(getState())?.length > 0) {
  //   return;
  // }

  dispatch(bookSlice.actions.startLoading());

  fetch(`http://localhost:3001/api/books?genreId=${genreId}`)
    .then((response) => response.json())
    .then((books) => { 
      console.log(books)
      dispatch(bookSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
