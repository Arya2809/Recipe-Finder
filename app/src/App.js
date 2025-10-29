import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import RecipeDetails from "./pages/recipedetails";
import Random from "./pages/random";
function App() {
  return (
  <div className="min-h-screen bg-gray-100">
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
