import { Link } from "react-router-dom";

function RecipeCard({ meal }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        
        <Link
          to={`/recipe/${meal.idMeal}`}
          className="text-lg font-bold mb-2 text-black"
        >
         {meal.strMeal}
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
