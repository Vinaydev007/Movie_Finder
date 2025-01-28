// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../css/navbar.css";

// function NavBar({ onLanguageChange }) {
//     const [selectedLanguage, setSelectedLanguage] = useState("en");

//     const handleLanguageChange = (event) => {
//         setSelectedLanguage(event.target.value);
//         onLanguageChange(event.target.value);  // Pass selected language to parent
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Link to="/">Movie App</Link>
//             </div>
//             <div className="navbar-links">
//                 <Link to="/" className="nav-link">Home</Link>
//                 <Link to="/favorites" className="nav-link">Favorites</Link>
//                 <Link to="/login" className="nav-link">Login</Link>  {/* Add Login Link */}
//                 <Link to="/signup" className="nav-link">Sign Up</Link>  {/* Add Sign Up Link */}
                
//                 {/* Language Filter Dropdown */}
//                 <select 
//                     value={selectedLanguage}
//                     onChange={handleLanguageChange}
//                     className="language-select"
//                 >
//                     <option value="*">all</option>
//                     <option value="en">English</option>
//                     <option value="te">Telugu</option>
//                     <option value="fr">French</option>
//                     <option value="de">Hindi</option>
//                     <option value="it">Tamil</option>
//                     {/* Add more languages as needed */}
//                 </select>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;

import { Link } from "react-router-dom"; 
import { useState } from "react";
import "../css/navbar.css";

function NavBar({ onLanguageChange }) {
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        onLanguageChange(event.target.value);  // Pass selected language to parent
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Sign Up</Link>
                
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
                    <option value="de">Hindi</option>
                    <option value="it">Tamil</option>
                    {/* Add more languages as needed */}
                </select>
            </div>
        </nav>
    );
}

export default NavBar;

