import { useEffect, useState } from "react";

function Random() {
  const [meal, setMeal] = useState(null);

  // Fetch random recipe on component mount
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);

   if (!meal) return <p className="text-center text-white"> Loading recipe...</p>;

  // Extract ingredients & measures dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="bg-gray-700 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Image & Title */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-lg w-full mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 text-indigo-700">{meal.strMeal}</h1>
        <p className="text-gray-600 mb-4">
          <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded mr-2">
            {meal.strCategory}
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
            {meal.strArea}
          </span>
        </p>

        {/* Ingredients */}
        <h2 className="text-2xl font-semibold mb-3"> Ingredients</h2>
        <ul className="grid grid-cols-2 gap-2 mb-6">
          {ingredients.map((item, index) => (
            <li key={index} className="text-gray-800">
              {item.ingredient} - <span className="font-medium">{item.measure}</span>
            </li>
          ))}
        </ul>

        {/* Instructions */}
        <h2 className="text-2xl font-semibold mb-3"> Instructions</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{meal.strInstructions}</p>

        

        
      </div>
    </div>
  );
 
}

export default Random;
