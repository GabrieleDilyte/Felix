export const getMovies = (state) => state.content.movies.list;
export const getMoviesLoading = (state) => state.content.movies.loading;
export const getMoviesError = (state) => state.content.movies.error;

export const getMovieById = (state, searchId) => getMovies(state).find(({id}) => searchId === id);

export const getFavorites = (state) => state.content.favorites;
export const isFavorite = (state, id) => state.content.favorites.includes(id);
