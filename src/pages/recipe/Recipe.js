import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

const Recipe = () => {
  const { id } = useParams(); // params.id
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, error, isPending } = useFetch(url);
  const { mode } = useTheme();
  const dark = mode === 'dark';

  // prettier-ignore
  return (
    <div className={`px-10 ${dark? 'bg-[#555] text-[#e4e4e4]' : 'bg-white'} mx-auto text-center rounded transition-all duration-500` } >
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <div className="py-7">
          <h2 className='pt-4 mb-6 text-3xl font-semibold '>{recipe.title}</h2>
          <p className={`${dark? 'text-[#e4e4e4]' : 'text-gray-600'}  `}>Takes {recipe.cookingTime} to cook.</p>
          <ul className={`flex justify-center mb-3 space-x-1 ${dark? 'text-[#e4e4e4]' : 'text-gray-600'}`}>{recipe.ingredients.map((ing) => <li className='after:content-[","] last:after:content-["."]' key={ing}>{ing}</li>)}</ul>
          <p className='text-left'>{recipe.method}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
