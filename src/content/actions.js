import * as types from "./types";
import * as selectors from "./selectors";

import auth from "../auth";

export const getMovies = () => async (dispatch, getState) => {
  dispatch({ type: types.GET_MOVIES });
  const isLoggedIn = auth.selectors.isLoggedIn(getState());

  const fetchURL = isLoggedIn
    ? "https://academy-video-api.herokuapp.com/content/items"
    : "https://academy-video-api.herokuapp.com/content/free-items";

  //   const fetchURL = movieId
  //     ? `https://academy-video-api.herokuapp.com/content/items/${movieId}`
  //     : "https://academy-video-api.herokuapp.com/content/free-items";

  try {
    const result = await fetch(fetchURL, {
      headers: {
        authorization: auth.selectors.getUser(getState()),
      },
    });
    const payload = await result.json();

    if (result.ok) {
      dispatch({
        type: types.GET_MOVIES_SUCCESS,
        payload: Array.isArray(payload) ? payload : [payload],
      });
    } else {
      dispatch({
        type: types.GET_MOVIES_FAILURE,
        payload: new Error(JSON.stringify(payload)),
      });
    }
  } catch (error) {
    dispatch({
      type: types.GET_MOVIES_FAILURE,
      payload: error,
    });
  }
};

export const setMoviesLoading = (payload) => ({
  type: types.GET_MOVIES,
  payload,
});

export const getMoviesError = (payload) => ({
  type: types.GET_MOVIES_FAILURE,
  payload,
});

export const toggleFavorite = (id) => (dispatch, getState) => {
  let newFavorites = selectors.getFavorites(getState());

  if (newFavorites.includes(id)) {
    newFavorites = newFavorites.filter((fav) => id !== fav);
  } else {
    newFavorites = newFavorites.concat(id);
  }

  dispatch({ type: types.TOGGLE_FAVORITE, payload: newFavorites });
};
