import React, { useEffect, useState } from "react";
import Bnavbar from "./Bnavbar";
import Slide from "./slide";
import MovieCard from "./Browse"; // Ensure correct import
import "./slide.css"
import "./BHome.css"

export default function BHome() {
  const [movies, setMovies] = useState([]); // State to store movies

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6dc321a506410cc1c6c5b17ef8334789`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Movies:", data.results); // Debugging output
        setMovies(data.results || []); // Set movies, ensure it's an array
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <Bnavbar />
      <Slide />
      <div className="movie-list" style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
}


