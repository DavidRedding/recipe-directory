import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => (
  <div className="grid grid-cols-3 gap-8">
    {recipes.map((recipe) => (
      <div key={recipe.id} className=" p-4 bg-slate-100 rounded hover:rotate-6 transition-all duration-300">
        <h3 className="font-bold text-2xl text-gray-700">{recipe.title}</h3>
        <p className="  text-gray-500 text-lg mt-1">{recipe.cookingTime} to make.</p>
        <div className=" mt-2">{recipe.method.substring(0, 80)}...</div>
        <Link
          className="block text-center mt-4 py-1 bg-gray-300 w-5/12 mx-auto text-lg text-gray-700"
          to={`/recipes/${recipe.id}`}
        >
          Cook This
        </Link>
      </div>
    ))}
  </div>
);

export default RecipeList;
