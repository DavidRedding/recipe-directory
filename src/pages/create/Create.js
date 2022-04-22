import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const recipeInput = useRef(null);
  const history = useHistory();

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST');

  useEffect(() => recipeInput.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, method, ingredients, cookingTime: cookingTime + ' minutes' });
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

  // redirecting the user once we recieve data back from POST
  useEffect(() => {
    if (data) history.push('/');
  }, [data]);

  const mappedIngredients = ingredients.map((ing) => <em key={ing}>{ing}, </em>);

  return (
    <div>
      <h1 className="py-2 text-2xl font-semibold text-center text-slate-800">Add a New Recipe</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-4/5 mx-auto space-y-3">
        <label>
          <span> Recipe title :</span>
          <input
            type="text"
            className="w-full p-1 rounded"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            ref={recipeInput}
          />
        </label>

        <label>
          Recipe method :
          <textarea
            type="text"
            className="w-full p-1 rounded"
            required
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </label>

        <label>
          <span>Recipe ingredients :</span>
          <div className="flex space-x-2">
            <input
              type="text"
              className="p-1 rounded grow"
              ref={ingredientInput}
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button
              className="w-1/6 font-semibold bg-purple-800 border-2 border-purple-800 rounded md:w-1/12 text-purple-50"
              onClick={(e) => handleAdd(e)}
            >
              add
            </button>
          </div>
          <span className="text-sm text-gray-800">Current Ingredients : {mappedIngredients}</span>
        </label>

        <label>
          Cooking time (minutes) :
          <input
            type="number"
            className="w-full p-1 mb-2"
            required
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <button className="block w-1/6 p-1 mx-auto font-semibold text-center bg-purple-800 rounded text-purple-50">
          submit
        </button>
      </form>
    </div>
  );
};

export default Create;
