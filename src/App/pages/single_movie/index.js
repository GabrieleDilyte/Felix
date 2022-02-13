import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ContentContext } from "../../context";

import Button from "../../components/button";

import "./index.css";

function SingleMovie() {
  const {
    movies,
    error,
    favorites,
    toggleFavorites,
    moviesLoading,
    getMovies,
  } = useContext(ContentContext);

  const [shown, setShown] = useState(false);
  const { movieId } = useParams();
  const movie = movies.find(({ id }) => movieId === id);
  const isFavorite = favorites.includes(movieId);

  useEffect(() => {
    if (!movie) {
      getMovies();
    }
  }, [getMovies, movie]);

  const VideoModal = () => {
    return (
      <div>
        <iframe
          title={movie.title}
          src={movie.video}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  };

  return (
    <>
      {error && <p>{error}</p>}
      {moviesLoading && <p>Loading</p>}
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
              <Button onClick={() => setShown(!shown)}>Watch ▶</Button>
              <Button
                isFavorite={isFavorite}
                onClick={() => {
                  toggleFavorites(movieId);
                }}
              >
                {isFavorite ? "Remove 💔" : "Favorite"}
              </Button>
            </div>
          </div>
        </div>
      )}
      {shown ? <VideoModal /> : null}
    </>
  );
}

export default SingleMovie;
