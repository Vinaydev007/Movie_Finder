import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// import {API_KEY} from "../apiservice/api"
import "./slide.css"

export default function Slide() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies from TMDb API
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6dc321a506410cc1c6c5b17ef8334789`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 5))) // Get top 5 movies
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);
  return (
    <Carousel interval={2000} pause={false}>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
  className="d-block mx-auto custom-img"
  src={movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}12`
    : "https://via.placeholder.com/500x300?text=No+Image"
  }
  alt={movie.title}
/>

          <Carousel.Caption>
            <h5>{movie.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
