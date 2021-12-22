import Button from "../button";

import "./index.css";

function MovieCard({ img, title, about }) {
  return (
    <div className="MovieCard">
      <img src={img} alt={title} className="MovieCard--img"></img>
      <div className="MovieCard__content">
        <div>
          <h3 className="MovieCard__content--title">{title}</h3>
          <p className="MovieCard__content--about">{about}</p>
        </div>
        <div>
          <Button isFavorite>Favorite</Button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
