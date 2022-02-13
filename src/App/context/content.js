import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { AuthContext } from "./";

const ContentContext = createContext();
const FAVORITES_KEY = "content/favorites";
const MOVIES_KEY = "content/movies";

function ContentProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
  );
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem(MOVIES_KEY)) || []
  );
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = useCallback(async () => {
    setMoviesLoading(true);
    const fetchURL = user
      ? "https://academy-video-api.herokuapp.com/content/items"
      : "https://academy-video-api.herokuapp.com/content/free-items";

    try {
      const result = await fetch(fetchURL, {
        headers: {
          authorization: user,
        },
      });
      const payload = await result.json();

      if (result.ok) {
        setMovies(payload);
      } else {
        setError(new Error(JSON.stringify(payload)));
      }
    } catch (error) {
      setError(error);
    } finally {
      setMoviesLoading(false);
    }
  }, [setMoviesLoading, setMovies, setError, user]);

  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => id !== fav));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
  }, [movies]);

  return (
    <ContentContext.Provider
      value={{
        movies,
        favorites,
        error,
        moviesLoading,
        getMovies,
        toggleFavorites,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export default ContentContext;
export { ContentProvider };
