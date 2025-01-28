import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar/navbar";
import Home from "./component/pages/home";
import MovieList from "./component/cards/cards";
import Login from "./component/pages/login";
import SignUp from "./component/pages/signup";
import { MovieProvider } from "./component/context/MovieContext"; // Import your MovieProvider
import Favorites from './component/pages/Fav';
import MovieDetail from "./component/pages/MovieDetails";
import { useState } from "react";  // Import useState for language state

function App() {
  const [language, setLanguage] = useState("en-US");  // Set default language

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);  // Update language when user selects a new one
  };

  return (
    <MovieProvider>
      <Router>
        <div className="container mt-4">
          <NavBar onLanguageChange={handleLanguageChange} /> {/* Pass handler to NavBar */}
          <Routes>
            <Route path="/" element={<Home language={language} />} /> {/* Pass language to Home */}
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;