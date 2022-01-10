import React from "react";

import MovieCard from "../components/movie_card";

import "../App.css";

class Content extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    fetch("https://academy-video-api.herokuapp.com/content/items", {
      headers: {
        authorization: localStorage.getItem("user"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ movies: result });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { movies } = this.state;
    const { favorite, toggleFavorite } = this.props;

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
}

export default Content;
