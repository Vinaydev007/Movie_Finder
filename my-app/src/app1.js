import { BrowserRouter,Routes, Route } from "react-router-dom";
import BHome from "./component/BeforeLogin/BHome"; // Home Page
import Login from "./component/pages/login"; // Login Page
import Signup from "./component/pages/signup"; // Signup Page

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
