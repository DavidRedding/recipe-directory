import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';

// if clicked (switch to true). If true, open input field.
// If enter on input is pressed, updated title, switch update to false.
// when true, turn update title purple
const Recipe = () => {
  const { id } = useParams(); // params.id
  const { mode } = useTheme();
  const dark = mode === 'dark';
  const newTitle = useRef();

  const [updateTitle, setUpdateTitle] = useState(true);
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find that recipe');
        }
      });
    return () => unsub();
  }, [id]);

  const firstHandleClick = () => setUpdateTitle(!updateTitle);
  const handleClick = async () => {
    await projectFirestore
      .collection('recipes')
      .doc(id)
      .update({ title: newTitle.current.value })
      .then(setUpdateTitle(!updateTitle));
  };
  const handleCancelClick = () => setUpdateTitle(!updateTitle);

  // prettier-ignore
  return (
    <div className={`px-10 ${dark? 'bg-[#555] text-[#e4e4e4]' : 'bg-white'} mx-auto text-center rounded transition-all duration-500` } >
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <div className="py-7">
         {updateTitle ? <h2 className='pt-4 mb-6 text-3xl font-semibold '>{recipe.title}</h2> : <input ref={newTitle} placeholder='Enter a brand new title' className={`pt-4 mb-6 text-3xl font-semibold outline-none ${dark ? "bg-[#555555]" : ''}`}/>}
          <p className={`${dark? 'text-[#e4e4e4]' : 'text-gray-600'}  `}>Takes {recipe.cookingTime} to cook.</p>
          <ul className={`flex justify-center mb-3 space-x-1 ${dark? 'text-[#e4e4e4]' : 'text-gray-600'}`}>{recipe.ingredients.map((ing) => <li className='after:content-[","] last:after:content-["."]' key={ing}>{ing}</li>)}</ul>
          <p className='text-left'>{recipe.method}</p>
          <div className='space-x-4'>
            {updateTitle ? <button className='px-4 py-2 mt-6 border rounded-md' onClick={firstHandleClick}>Update Title</button> : <button className={`px-4 rounded-md py-2 mt-6 border border-[#58249c] ${dark ? "" : "bg-purple-100"} active:bg-purple-500`} onClick={handleClick}>Confirm New Title</button> }
            {updateTitle ? null : <button className= {`px-4 py-2 mt-6 border border-rose-800 ${dark ? "" : "bg-rose-50"} active:bg-rose-500 rounded-md`} onClick={handleCancelClick}>Cancel</button> }
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
