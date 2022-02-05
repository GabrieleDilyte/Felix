import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import content from "../../../content";

import Button from "../../components/button";

import "./index.css";

function SingleMovie() {
  const dispatch = useDispatch();
  const [shown, setShown] = useState(false);
  const { movieId } = useParams();
  const movie = useSelector(state => content.selectors.getMovieById(state, movieId));
  const loading = useSelector(content.selectors.getMoviesLoading);
  const error = useSelector(content.selectors.getMoviesError);
  const isFavorite = useSelector(state => content.selectors.isFavorite(state, movieId));

  useEffect(() => {
    if (!movie) {
      dispatch(content.actions.getMovies());
    }
  }, [dispatch, movie]);

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
              <Button onClick={() => setShown(!shown)}>Watch ▶</Button>
              <Button
                isFavorite={isFavorite}
                onClick={() => {
                  dispatch(content.actions.toggleFavorite(movieId))
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
