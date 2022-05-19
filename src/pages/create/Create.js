import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const recipeInput = useRef(null);
  const history = useHistory();
  const { mode, color } = useTheme();
  const dark = mode === 'dark';

  useEffect(() => recipeInput.current.focus(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = { title, method, ingredients, cookingTime: cookingTime + ' minutes' };
    try {
      await projectFirestore.collection('recipes').add(doc);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  const mappedIngredients = ingredients.map((ing) => <em key={ing}>{ing}, </em>);

  return (
    <div className={`${dark ? 'text-[#e4e4e4]' : ''}`}>
      <h1 className={`py-2 text-2xl font-semibold text-center ${dark ? 'text-[#e4e4e4]' : 'text-slate-800'}`}>
        Add a New Recipe
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-4/5 mx-auto space-y-3 ">
        <label>
          <span> Recipe title :</span>
          <input
            type="text"
            className="w-full p-1 transition-all duration-500 border rounded"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            ref={recipeInput}
            style={{ background: mode === 'dark' ? '#333' : '' }}
          />
        </label>

        <label>
          Recipe method :
          <textarea
            type="text"
            className="w-full p-1 transition-all duration-500 border rounded"
            required
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            style={{ background: mode === 'dark' ? '#333' : '' }}
          />
        </label>

        <label>
          <span>Recipe ingredients :</span>
          <div className="flex space-x-2">
            <input
              type="text"
              className="p-1 transition-all duration-500 border rounded grow"
              ref={ingredientInput}
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              style={{ background: mode === 'dark' ? '#333' : '' }}
            />
            <button
              className="w-1/6 font-semibold transition-all duration-500 bg-purple-800 rounded md:w-1/12 text-purple-50"
              onClick={(e) => handleAdd(e)}
              style={{ background: color }}
            >
              add
            </button>
          </div>
          <span className={`text-sm ${dark ? 'text-[#e4e4e4]' : 'text-gray-800'}`}>
            Current Ingredients : {mappedIngredients}
          </span>
        </label>

        <label>
          Cooking time (minutes) :
          <input
            type="number"
            className="w-full p-1 mb-2 transition-all duration-500 border"
            required
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            style={{ background: mode === 'dark' ? '#333' : '' }}
          />
        </label>
        <button
          style={{ background: color }}
          className="block w-1/6 p-1 mx-auto font-semibold text-center transition-all duration-500 bg-purple-800 rounded text-purple-50"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Create;
