// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../css/navbar.css";
// import Logo from "./assess/Logo.png";  // Adjust based on actual path

// function NavBar({ onLanguageChange }) {
//     const [selectedLanguage, setSelectedLanguage] = useState("en");

//     const handleLanguageChange = (event) => {
//         const lang = event.target.value;
//         setSelectedLanguage(lang);
//         onLanguageChange(lang);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Link to="/">Movie App</Link>
//                 <img src={Logo} alt="Logo" className="Logo"/>
//             </div>
//             <div className="navbar-links">
//                 <Link to="/" className="nav-link">Home</Link>
//                 <Link to="/favorites" className="nav-link">Favorites</Link>
//                 <Link to="/login" className="nav-link">Login</Link>
//                 <Link to="/signup" className="nav-link">Sign Up</Link>
                
//                 {/* Language Filter Dropdown */}
//                 <select 
//                     value={selectedLanguage}
//                     onChange={handleLanguageChange}
//                     className="language-select"
//                 >
//                     <option value="*">All</option>
//                     <option value="en">English</option>
//                     <option value="te">Telugu</option>
//                     <option value="fr">French</option>
//                     <option value="hi">Hindi</option>
//                     <option value="ta">Tamil</option>
//                 </select>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../css/navbar.css";
import Logo from "./assess/Logo.png";  // Ensure correct path

function NavBar({ onLanguageChange }) {
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLanguageChange = (event) => {
        const lang = event.target.value;
        setSelectedLanguage(lang);
        onLanguageChange(lang);
    };

    const handleLogout = () => {
        logout();  // Clear authentication state
        navigate("/");  // Redirect to login page
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
                <img src={Logo} alt="Logo" className="Logo"/>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>

                {/* Show Logout button only if user is authenticated */}
                {isAuthenticated && (
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                )}

                {/* Language Filter Dropdown */}
                <select 
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="language-select"
                >
                    <option value="*">All</option>
                    <option value="en">English</option>
                    <option value="te">Telugu</option>
                    <option value="fr">French</option>
                    <option value="hi">Hindi</option>
                    <option value="ta">Tamil</option>
                </select>
            </div>
        </nav>
    );
}

export default NavBar;

