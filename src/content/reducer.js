import * as types from "./types";

const MOVIES_DEFAULT = {
  loading: false,
  error: null,
  list: [],
};
const DEFAULT_STATE = {
  favorites: [],
  movies: MOVIES_DEFAULT,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_FAVORITE: {
      return {
        ...state,
        favorites: action.payload,
      };
    }
    case types.GET_MOVIES: {
      return {
        ...state,
        movies: {
          ...MOVIES_DEFAULT,
          list: state.movies.list,
          laoding: true,
        },
      };
    }
    case types.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: {
          ...MOVIES_DEFAULT,
          list: action.payload,
        },
      };
    }
    case types.GET_MOVIES_FAILURE: {
      return {
        ...state,
        movies: {
          ...MOVIES_DEFAULT,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export default reducer;
