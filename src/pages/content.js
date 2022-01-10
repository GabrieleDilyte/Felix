import React, { useEffect, useState } from "react";

import MovieCard from "../components/movie_card";

import "../App.css";

function Content({ favorite, toggleFavorite, user }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://academy-video-api.herokuapp.com/content/items", {
      headers: {
        authorization: user,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <div className="MovieList">
        <div className="MovieList__content">
          {movies.map(({ image, title, description, id }) => (
            <MovieCard
              key={id}
              id={id}
              img={image}
              title={title}
              about={description}
              toggleFavorite={toggleFavorite}
              favorite={favorite}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
