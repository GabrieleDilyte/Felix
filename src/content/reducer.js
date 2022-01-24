const DEFAULT_STATE = {
  favorites: [],
  movies: {
    loading: false,
    error: null,
    list: [],
  },
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "CONTENT/TOGGLE_FAVORITE": {
      const { favorites } = state;

      if (favorites.includes(action.id)) {
        return {
          ...state,
          favorites: favorites.filter((favId) => action.id !== favId),
        };
      } else {
        return { ...state, favorites: favorites.concat(action.id) };
      }
    }
    case "CONTENT/SET_MOVIES": {
      return {
        ...state,
        movies: {
          ...state.movies,
          list: action.payload,
        },
      };
    }
    case "CONTENT/SET_MOVIES_LOADING": {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: action.payload,
        },
      };
    }
    case "CONTENT/SET_MOVIES_ERROR": {
      return {
        ...state,
        movies: {
          ...state.movies,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export default reducer;
