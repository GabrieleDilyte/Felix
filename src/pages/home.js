import React from "react";

import Banner from "../components/banner";
import MovieCard from "../components/movie_card";
import Button from "../components/button";

import "../App.css";

class Home extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    fetch("https://academy-video-api.herokuapp.com/content/free-items")
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
        <Banner />
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
          <Button isLarge>Get More Content</Button>
        </div>
      </>
    );
  }
}

export default Home;
