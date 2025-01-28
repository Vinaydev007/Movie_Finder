// // import React, { useState, useEffect } from "react";
// // import { searchMovies, getPopularMovies } from "../apiservice/api";
// // import MovieCard from "../cards/cards";
// // import "../css/Home.css"; // Import styling

// // function Home({ language }) {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [movies, setMovies] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Load popular movies based on selected language
// //     const loadPopularMovies = async () => {
// //       setLoading(true);
// //       try {
// //         const popularMovies = await getPopularMovies(language);
// //         setMovies(popularMovies);
// //         setError(null);
// //       } catch (err) {
// //         console.error("Error loading popular movies:", err);
// //         setError("Failed to load popular movies.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadPopularMovies();
// //   }, [language]); // Re-fetch popular movies when language changes

// //   const handleSearch = async (e) => {
// //     e.preventDefault();
// //     if (!searchQuery.trim()) return;

// //     setLoading(true);
// //     try {
// //       const searchResults = await searchMovies(searchQuery, language);
// //       if (searchResults.length === 0) {
// //         setError("No movies found for your search.");
// //       } else {
// //         setMovies(searchResults);
// //         setError(null);
// //       }
// //     } catch (err) {
// //       console.error("Error searching movies:", err);
// //       setError("Failed to search movies.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleClearSearch = () => {
// //     setSearchQuery("");
// //     setError(null);
// //     setLoading(true);
// //     // Reload popular movies when search is cleared
// //     const loadPopularMovies = async () => {
// //       try {
// //         const popularMovies = await getPopularMovies(language);
// //         setMovies(popularMovies);
// //       } catch (err) {
// //         console.error("Error loading popular movies:", err);
// //         setError("Failed to load popular movies.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     loadPopularMovies();
// //   };

// //   return (
// //     <div className="home">
// //       <form onSubmit={handleSearch} className="search-form">
// //         <input
// //           type="text"
// //           placeholder="Search for movies..."
// //           className="search-input"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           aria-label="Search for movies"
// //         />
// //         <button type="submit" className="search-button" aria-label="Search">
// //           <span>🔍</span> Search
// //         </button>
// //         {searchQuery && (
// //           <button
// //             type="button"
// //             className="clear-button"
// //             onClick={handleClearSearch}
// //             aria-label="Clear search"
// //           >
// //             Clear
// //           </button>
// //         )}
// //       </form>

// //       {error && <div className="error-message">{error}</div>}

// //       {loading ? (
// //         <div className="loading">Loading...</div>
// //       ) : (
// //         <div className="movies-grid">
// //           {movies.length > 0 ? (
// //             movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
// //           ) : (
// //             <div className="no-movies">No movies found.</div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Home;

































// import React, { useState, useEffect } from "react";
// import { searchMovies, getPopularMovies } from "../apiservice/api";
// import MovieCard from "../cards/cards";
// import "../css/Home.css"; // Import styling

// function Home({ language }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Load popular movies based on selected language
//   useEffect(() => {
//     const loadPopularMovies = async () => {
//       setLoading(true);
//       try {
//         const popularMovies = await getPopularMovies(language);

//         // Filter movies by original language matching selected language
//         const filteredMovies = popularMovies.filter((movie) => movie.original_language === language);

//         setMovies(filteredMovies);
//         setError(null);
//       } catch (err) {
//         console.error("Error loading popular movies:", err);
//         setError("Failed to load popular movies.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPopularMovies();
//   }, [language]); // Re-fetch popular movies when language changes

//   // Handle search functionality
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;

//     setLoading(true);
//     try {
//       const searchResults = await searchMovies(searchQuery, language);

//       // Filter search results by original language matching selected language
//       const filteredSearchResults = searchResults.filter(
//         (movie) => movie.original_language === language
//       );

//       if (filteredSearchResults.length === 0) {
//         setError("No movies found for your search.");
//       } else {
//         setMovies(filteredSearchResults);
//         setError(null);
//       }
//     } catch (err) {
//       console.error("Error searching movies:", err);
//       setError("Failed to search movies.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle clear search
//   const handleClearSearch = () => {
//     setSearchQuery("");
//     setError(null);
//     setLoading(true);

//     // Reload popular movies when search is cleared
//     const loadPopularMovies = async () => {
//       try {
//         const popularMovies = await getPopularMovies(language);

//         // Filter popular movies by original language matching selected language
//         const filteredMovies = popularMovies.filter((movie) => movie.original_language === language);

//         setMovies(filteredMovies);
//       } catch (err) {
//         console.error("Error loading popular movies:", err);
//         setError("Failed to load popular movies.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadPopularMovies();
//   };

//   return (
//     <div className="home">
//       {/* Search form */}
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           placeholder="Search for movies..."
//           className="search-input"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           aria-label="Search for movies"
//         />
//         <button type="submit" className="search-button" aria-label="Search">
//           <span>🔍</span> Search
//         </button>
//         {searchQuery && (
//           <button
//             type="button"
//             className="clear-button"
//             onClick={handleClearSearch}
//             aria-label="Clear search"
//           >
//             Clear
//           </button>
//         )}
//       </form>

//       {/* Error message */}
//       {error && <div className="error-message">{error}</div>}

//       {/* Loading state */}
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="movies-grid">
//           {/* Display movies */}
//           {movies.length > 0 ? (
//             movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
//           ) : (
//             <div className="no-movies">No movies found.</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;




import React, { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../apiservice/api";
import MovieCard from "../cards/cards";
import "../css/Home.css"; // Import styling

function Home({ language }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies based on selected language
  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies(language);

        // If 'all' is selected, we don't filter by language
        const filteredMovies = language === "*" 
          ? popularMovies 
          : popularMovies.filter((movie) => movie.original_language === language);

        setMovies(filteredMovies);
        setError(null);
      } catch (err) {
        console.error("Error loading popular movies:", err);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [language]); // Re-fetch popular movies when language changes

  // Handle search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery, language);

      // If 'all' is selected, we don't filter by language
      const filteredSearchResults = language === "*" 
        ? searchResults 
        : searchResults.filter(
            (movie) => movie.original_language === language
          );

      if (filteredSearchResults.length === 0) {
        setError("No movies found for your search.");
      } else {
        setMovies(filteredSearchResults);
        setError(null);
      }
    } catch (err) {
      console.error("Error searching movies:", err);
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    setError(null);
    setLoading(true);

    // Reload popular movies when search is cleared
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(language);

        // If 'all' is selected, we don't filter by language
        const filteredMovies = language === "*" 
          ? popularMovies 
          : popularMovies.filter((movie) => movie.original_language === language);

        setMovies(filteredMovies);
      } catch (err) {
        console.error("Error loading popular movies:", err);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  };

  return (
    <div className="home">
      {/* Search form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search for movies"
        />
        <button type="submit" className="search-button" aria-label="Search">
          <span>🔍</span> Search
        </button>
        {searchQuery && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClearSearch}
            aria-label="Clear search"
          >
            Clear
          </button>
        )}
      </form>

      {/* Error message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading state */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {/* Display movies */}
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <div className="no-movies">No movies found.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;

