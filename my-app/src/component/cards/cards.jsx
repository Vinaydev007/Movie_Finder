import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import "../css/moviecard.css"; // Ensure you have appropriate styles

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  // Determine if the movie is in the favorites list
  const isMovieFavorite = isFavorite(movie.id);

  // Handle adding/removing from favorites
  const toggleFavorite = () => {
    if (isMovieFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <Card className="movie-card" style={{ width: '18rem' }}>
      <Link 
        to={`/movie/${movie.id}`} 
        className="movie-card-link" 
        state={{ movie }} // Pass the movie data through state
      >
        <Card.Img
          variant="top"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://via.placeholder.com/500x750?text=No+Image'
          }
          alt={movie.title}
          loading="lazy"
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {`Rating: ${movie.vote_average}`}
          </Card.Subtitle>
          <Card.Text>{movie.release_date?.split("-")[0]}</Card.Text>
        </Card.Body>
      </Link>

      <Button
        variant={isMovieFavorite ? "danger" : "success"}
        onClick={toggleFavorite}
        className="favorite-button"
      >
        {isMovieFavorite ? "❤️" : "🤍"}
      </Button>
    </Card>
  );
}

export default MovieCard;
