import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) return <div>No recipes to found...</div>;

  return (
    <div className="grid grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="p-4 transition-all duration-500 rounded bg-slate-100 hover:rotate-3">
          <h3 className="text-2xl font-bold text-gray-700">{recipe.title}</h3>
          <p className="mt-1 text-lg text-gray-500">{recipe.cookingTime} to make.</p>
          <div className="mt-2 ">{recipe.method.substring(0, 95)}...</div>
          <Link
            className="block p-2 mx-auto mt-4 text-center text-gray-700 bg-gray-300 w-28"
            to={`/recipes/${recipe.id}`}
          >
            Cook This
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
