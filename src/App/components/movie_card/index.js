import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button";

import { AuthContext, ContentContext } from "../../context";

import "./index.css";

function MovieCard({ id, img, title, about }) {
  const { user } = useContext(AuthContext);
  const { favorites, toggleFavorites } = useContext(ContentContext);
  const navigate = useNavigate();
  const isFavorite = favorites.includes(id);

  const onClick = () => {
    user && navigate(`/content/${id}`);
  };

  return (
    <div className="MovieCard">
      <img
        src={img}
        alt={title}
        className="MovieCard--img"
        onClick={onClick}
      ></img>
      <div className="MovieCard__content">
        <div>
          <h3 className="MovieCard__content--title" onClick={onClick}>
            {title}
          </h3>
          <p className="MovieCard__content--about" onClick={onClick}>
            {about}
          </p>
        </div>
        <div>
          <Button
            isFavorite={isFavorite}
            onClick={() => {
              toggleFavorites(id);
            }}
          >
            {isFavorite ? "Remove 💔" : "Favorite"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
