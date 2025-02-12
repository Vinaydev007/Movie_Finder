// // import React, { useState } from "react";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { useNavigate } from "react-router-dom";
// // import { auth } from "../FireBase/FireBase"; // Ensure Firebase is correctly configured

// // const Login = ({ setIsAuthenticated }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError(null); // Reset errors

// //     try {
// //       const trimmedEmail = email.trim();
// //       const trimmedPassword = password.trim();

// //       if (!trimmedEmail || !trimmedPassword) {
// //         setError("Email and password cannot be empty.");
// //         return;
// //       }

// //       // Firebase Authentication
// //       const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
// //       console.log("✅ User signed in:", userCredential.user);

// //       // Store login status
// //       localStorage.setItem("isAuthenticated", "true");

// //       // Ensure setIsAuthenticated exists before calling
// //       if (typeof setIsAuthenticated === "function") {
// //         setIsAuthenticated(true);
// //       } else {
// //         console.error("❌ setIsAuthenticated is not defined.");
// //       }

// //       // Redirect to home/dashboard
// //       navigate("/");

// //     } catch (err) {
// //       console.error("❌ Firebase Error:", err.code, err.message);
// //       setError("Login failed: " + (err.message || "Invalid credentials"));
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input 
// //           type="email" 
// //           placeholder="Email" 
// //           value={email} 
// //           onChange={(e) => setEmail(e.target.value)} 
// //           required 
// //         />
// //         <input 
// //           type="password" 
// //           placeholder="Password" 
// //           value={password} 
// //           onChange={(e) => setPassword(e.target.value)} 
// //           required 
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState, useContext } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../FireBase/FireBase";
// import { AuthContext } from "../context/AuthContext"; // Import AuthContext

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { setIsAuthenticated } = useContext(AuthContext); // Use Auth Context
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const trimmedEmail = email.trim();
//       const trimmedPassword = password.trim();

//       if (!trimmedEmail || !trimmedPassword) {
//         setError("Email and password cannot be empty.");
//         setLoading(false);
//         return;
//       }

//       const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
//       console.log("✅ User signed in:", userCredential.user);

//       // Store login state
//       setIsAuthenticated(true);
//       navigate("/");
//     } catch (err) {
//       console.error("❌ Firebase Error:", err.code, err.message);
//       setError("Login failed. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../FireBase/FireBase";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;





