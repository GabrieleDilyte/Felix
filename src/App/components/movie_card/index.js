import { useNavigate } from "react-router-dom";

import Button from "../button";
import { connect } from "react-redux";

import "./index.css";

function MovieCard({ id, img, title, about, isFavorite, toggleFavorite }) {
  const navigate = useNavigate();

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
              toggleFavorite(id);
            }}
          >
            {isFavorite ? "Remove 💔" : "Favorite"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ content }, { id }) {
  return {
    isFavorite: content.favorites.includes(id),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: "CONTENT/TOGGLE_FAVORITE", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
