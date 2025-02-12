


import "../css/Fav.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../cards/cards";
import BrowseMoviesButton from "./browser";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { favorites = [] } = useMovieContext(); // Ensuring favorites is always an array
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty" aria-live="polite">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
        <BrowseMoviesButton />
      </div>
    );
  }

  return (
    <div className="favorites" aria-live="polite">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

