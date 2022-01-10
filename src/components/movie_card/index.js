import Button from "../button";

import "./index.css";

function MovieCard({ id, img, title, about, toggleFavorite, favorite }) {
  const isFavoriteCheck =
    favorite.length > 0 ? favorite.some((item) => item === id) : false;

  return (
    <div className="MovieCard">
      <img src={img} alt={title} className="MovieCard--img"></img>
      <div className="MovieCard__content">
        <div>
          <h3 className="MovieCard__content--title">{title}</h3>
          <p className="MovieCard__content--about">{about}</p>
        </div>
        <div>
          <Button
            isFavorite={isFavoriteCheck}
            onClick={() => {
              favorite = isFavoriteCheck
                ? favorite.filter((item) => item !== id)
                : favorite.concat([id]);
              toggleFavorite(favorite);
            }}
          >
            {isFavoriteCheck ? "Remove 💔" : "Favorite"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
