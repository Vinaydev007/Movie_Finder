const API_KEY = "6dc321a506410cc1c6c5b17ef8334789";
const BASE_URL = "https://api.themoviedb.org/3";

// Get popular movies, with optional language filter
export const getPopularMovies = async (language = "en-US") => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${language}`
  );
  const data = await response.json();
  console.log(data.results)
  return data.results;
};

// Search for movies with a query and an optional language filter
export const searchMovies = async (query, language = "en-US") => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=${language}`
  );
  const data = await response.json();
  return data.results;
};

