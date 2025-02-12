// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./app1"; // Ensure app1.js has the correct routing
// import reportWebVitals from "./reportWebVitals";
// import { AuthProvider } from "./component/context/AuthContext"; // Import AuthProvider

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthProvider> {/* Wrap App inside AuthProvider */}
//       <App />
//     </AuthProvider>
//   </React.StrictMode>
// );

// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./component/context/AuthContext";
import { MovieProvider } from "./component/context/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
