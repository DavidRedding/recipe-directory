import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Recipe = () => {
  const { id } = useParams(); // params.id
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, error, isPending } = useFetch(url);

  // prettier-ignore
  return (
    <div className='max-w-6xl px-5 mx-auto my-10 text-center'>
    <div className='px-10 bg-white rounded '>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <div className="py-7">
          <h2 className='pt-4 mb-6 text-3xl font-semibold '>{recipe.title}</h2>
          <p className='text-gray-600 '>Takes {recipe.cookingTime} to cook.</p>
          <ul className='flex justify-center mb-3 space-x-1 text-gray-600'>{recipe.ingredients.map((ing) => <li className='after:content-[","] last:after:content-["."]' key={ing}>{ing}</li>)}</ul>
          <p className='text-left'>{recipe.method}</p>
        </div>
      )}
    </div></div>
  );
};

export default Recipe;
