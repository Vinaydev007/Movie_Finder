import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./component/context/AuthContext";
import BHome from "./component/BeforeLogin/BHome";
import Login from "./component/pages/login";
import Signup from "./component/pages/signup";
import NavBar from "./component/NavBar/navbar";
import Home from "./component/pages/home";
import MovieList from "./component/cards/cards";
import Favorites from "./component/pages/Fav";
import MovieDetail from "./component/pages/MovieDetails";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const [language, setLanguage] = useState("*");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Router>
      <div className="container mt-4">
        {isAuthenticated && <NavBar onLanguageChange={setLanguage} />}
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/" element={<BHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          ) : (
            <>
              <Route path="/" element={<ProtectedRoute><Home language={language} /></ProtectedRoute>} />
              <Route path="/movies" element={<ProtectedRoute><MovieList /></ProtectedRoute>} />
              <Route path="/movie/:id" element={<ProtectedRoute><MovieDetail /></ProtectedRoute>} />
              <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

