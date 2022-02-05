import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../button";

import content from "../../../content";

import "./index.css";

function MovieCard({ id, img, title, about, toggleFavorite }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => content.selectors.isFavorite(state, id));

  return (
    <div className="MovieCard">
      <img
        src={img}
        alt={title}
        className="MovieCard--img"
        onClick={() => navigate(`/content/${id}`)}
      ></img>
      <div className="MovieCard__content">
        <div>
          <h3
            className="MovieCard__content--title"
            onClick={() => navigate(`/content/${id}`)}
          >
            {title}
          </h3>
          <p
            className="MovieCard__content--about"
            onClick={() => navigate(`/content/${id}`)}
          >
            {about}
          </p>
        </div>
        <div>
          <Button
            isFavorite={isFavorite}
            onClick={() => {
              dispatch(content.actions.toggleFavorite(id));
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
