import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';

const Recipe = () => {
  const { id } = useParams(); // params.id
  const { mode } = useTheme();
  const dark = mode === 'dark';

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find that recipe');
        }
      });
  }, [id]);

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
