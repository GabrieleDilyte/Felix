import React, { useContext, useEffect } from "react";

import { AuthContext, ContentContext } from "../../context";

import Banner from "../../components/banner";
import MovieCard from "../../components/movie_card";
import Button from "../../components/button";

import "./index.css";

function Home() {
  const { user } = useContext(AuthContext);
  const { movies, error, moviesLoading, getMovies } =
    useContext(ContentContext);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      {user ? null : <Banner />}
      <div className="MovieList">
        <div className="MovieList__content">
          {error && <p className="error">{error}</p>}
          {moviesLoading && <p className="loading">Loading</p>}
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
        {user ? null : <Button isLarge>Get More Content</Button>}
      </div>
    </>
  );
}

export default Home;
