
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/FireBase";
import { AuthContext } from "../context/AuthContext";
import poster from "../accessories/poster.jpg";
import "../css/signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      setError("user is already exist make login");
    }
  };

  return (
    <div
      className="signup-background"
      style={{ backgroundImage: `url(${poster})` }}
    >
      <div className="signup-container">
        <div className="top-bar">
          <span className="back-arrow" onClick={() => navigate(-1)}>&larr; Back</span>
          <span className="login-link" onClick={() => navigate("/login")}>Login</span>
        </div>

        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;


