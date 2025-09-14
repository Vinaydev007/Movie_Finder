const API_KEY = "6dc321a506410cc1c6c5b17ef8334789";
const BASE_URL = "https://api.themoviedb.org/3";

const Api="https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies"
const Apikey="b4a85b7181mshd1f77ed4660b71fp105a70jsndf41c56b7c11"
// const Base_url1="http://www.omdbapi.com/?i=tt3896198&apikey=fe18ed74"

// Get movies from multiple pages (5 pages by default)
export const getPopularMovies = async (language = "*", maxPages = 5) => {
  let allMovies = [];

  for (let page = 1; page <= maxPages; page++) {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${language}&page=${page}`
    );

    const data = await response.json();

    if (data.results) {
      allMovies = [...allMovies, ...data.results]; // Append new results
    }

    if (page >= data.total_pages) {
      break; // Stop if no more pages exist
    }
  }

  console.log("Fetched Movies:", allMovies); // Debugging output
  return allMovies;
};

// Search for movies
export const searchMovies = async (query, language = "en-US") => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=${language}`
  );
  const data = await response.json();
  return data.results;
};

