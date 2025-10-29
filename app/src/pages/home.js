import { useState, useEffect } from "react";
import RecipeCard from "../components/recipecard";

function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [randomMeal, setRandomMeal] = useState(null);
  const [searched, setSearched] = useState(false); // ✅ only true after button click
  const [loading, setLoading] = useState(false);   // ✅ to handle API delay

  // Fetch recipes by search
  const fetchRecipes = async () => {
    if (!search.trim()) return; // prevent empty searches
    setSearched(true);
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch random recipe once on load
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandomMeal(data.meals ? data.meals[0] : null))
      .catch((err) => console.error("Error fetching random recipe:", err));
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-900 bg-cover bg-center relative"
      style={{
        backgroundImage: randomMeal
          ? `url(${randomMeal.strMealThumb})`
          : "none",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Find Your Favorite Recipe...
        </h1>

        {/* Search Bar */}
        <div className="flex gap-2 mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 flex-1 rounded text-black"
            placeholder="Search for a recipe..."
          />
          <button
            onClick={fetchRecipes}
            className="bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        {searched && (
          <div>
            <h2 className="text-2xl font-semibold mb-4"> Search Results</h2>

            {loading ? (
              <p className="text-yellow-300"> Loading recipes...</p>
            ) : recipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recipes.map((meal) => (
                  <RecipeCard key={meal.idMeal} meal={meal} />
                ))}
              </div>
            ) : (
              <p className="text-red-300 text-lg">
                 No recipes found for "{search}". Try another ingredient or dish!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
