import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../../components/button";

import "./index.css";

function SingleMovie({ movies, toggleFavorite, favorites }) {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(movies.find(({ id }) => id === movieId));
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFavorite = favorites.includes(movieId);

  const getMovie = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetch(
        `https://academy-video-api.herokuapp.com/content/items/${movieId}`
      );
      const data = await result.json();
      if (result.ok) {
        setMovie(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    if (!movie) {
      console.log("fetching");
      getMovie();
    }
  }, [getMovie, movie]);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}
      {movie && (
        <div className="SingleMovie">
          <img
            src={movie.image}
            alt={movie.title}
            className="SingleMovie--img"
          ></img>

          <div className="SingleMovie__content">
            <div>
              <h3 className="SingleMovie__content--title">{movie.title}</h3>
              <p className="SingleMovie__content--about">{movie.description}</p>
            </div>
            <div className="SingleMovie__content--buttons">
              <Button>Watch ▶</Button>
              <Button
                isFavorite={isFavorite}
                onClick={() => {
                  toggleFavorite(movieId);
                }}
              >
                {isFavorite ? "Remove 💔" : "Favorite"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function mapStateToProps({ content }) {
  return {
    movies: content.movies.list,
    favorites: content.favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: "CONTENT/TOGGLE_FAVORITE", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
