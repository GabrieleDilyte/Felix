import React from "react";

import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
import MovieCard from "./components/movie_card";
import Button from "./components/button";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

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

    return (
      <div className="App">
        <Header></Header>
        <main>
          <Banner></Banner>
          <div className="MovieList">
            <div className="MovieList__content">
              {movies.map(({ image, title, description, id }) => (
                <MovieCard
                  key={id}
                  img={image}
                  title={title}
                  about={description}
                ></MovieCard>
              ))}
            </div>
            <Button isLarge>Get More Content</Button>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
