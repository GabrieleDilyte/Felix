import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Banner from "../../components/banner";
import MovieCard from "../../components/movie_card";
import Button from "../../components/button";

import content from "../../../content";
import auth from "../../../auth";

import "./index.css";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector(content.selectors.getMovies);
  const loading = useSelector(content.selectors.getMoviesLoading);
  const error = useSelector(content.selectors.getMoviesError);
  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);

  useEffect(() => {
    dispatch(content.actions.getMovies());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? null : <Banner />}
      <div className="MovieList">
        <div className="MovieList__content">
          {error && <p className="error">{error}</p>}
          {loading && <p className="loading">Loading</p>}
          {movies.map(({ image, title, description, id }) => (
            <MovieCard
              key={id}
              id={id}
              img={image}
              title={title}
              about={description}
            />
          ))}
        </div>
        {isLoggedIn ? null : <Button isLarge>Get More Content</Button>}
      </div>
    </>
  );
}

export default Home;
