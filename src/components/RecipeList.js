import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => (
  <div className="grid grid-cols-3 gap-8">
    {recipes.map((recipe) => (
      <div key={recipe.id} className=" p-4 bg-slate-100 rounded hover:rotate-6 transition-all duration-300">
        <h3 className="font-bold text-2xl text-gray-700">{recipe.title}</h3>
        <p className="text-gray-500 text-lg mt-1">{recipe.cookingTime} to make.</p>
        <div className=" mt-2">{recipe.method.substring(0, 95)}...</div>
        <Link
          className="block text-center mt-4 bg-gray-300 mx-auto text-gray-700 w-28 p-2"
          to={`/recipes/${recipe.id}`}
        >
          Cook This
        </Link>
      </div>
    ))}
  </div>
);

export default RecipeList;
