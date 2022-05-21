import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import trashIcon from '../assets/trash-icon.svg';
import { projectFirestore } from '../firebase/config';

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();
  const dark = mode === 'dark';

  if (recipes.length === 0) return <div>No recipes to found...</div>;

  const handleClick = (id) => projectFirestore.collection('recipes').doc(id).delete();

  const mappedRecipes = recipes.map((recipe) => (
    <div
      key={recipe.id}
      className={`p-4 relative transition-all duration-500 rounded ${
        dark ? 'bg-[#555] text-[#e4e4e4]' : 'bg-slate-100'
      } hover:rotate-3`}
    >
      <h3 className={`text-2xl font-bold ${dark ? 'text-[#e4e4e4]' : 'text-gray-700'}`}>{recipe.title}</h3>
      <p className={`mt-1 text-lg ${dark ? 'text-[#e4e4e4]' : 'text-gray-500'}`}>{recipe.cookingTime} to make.</p>
      <div className="mt-2 ">{recipe.method.substring(0, 95)}...</div>
      <Link className="block p-2 mx-auto mt-4 text-center text-gray-700 bg-gray-300 w-28" to={`/recipes/${recipe.id}`}>
        Cook This
      </Link>
      <img
        className="absolute w-6 h-6 cursor-pointer right-1 top-1"
        src={trashIcon}
        alt="trashcan"
        onClick={() => handleClick(recipe.id)}
        style={{ filter: dark ? 'invert(100%)' : 'invert(20%)' }}
      />
    </div>
  ));

  return <div className="grid grid-cols-1 gap-8 md:grid-cols-3">{mappedRecipes}</div>;
};

export default RecipeList;
