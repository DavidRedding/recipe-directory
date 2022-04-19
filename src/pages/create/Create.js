import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  return (
    <div className="max-w-6xl px-5 mx-auto">
      <h1 className="py-2 text-2xl font-semibold text-center text-slate-700">Add a New Recipe</h1>
      <form className="w-4/5 mx-auto ">
        <label>
          Recipe Title :
          <input type="text" className="w-full border-2" />
        </label>

        <label className="block">Recipe Ingredients :</label>
        <div className="flex space-x-2">
          <input type="text" className="grow" />
          <button
            className="w-1/6 border-2 border-purple-800 md:w-1/12 bg-purple-50"
            onClick={(e) => e.preventDefault()}
          >
            Add
          </button>
        </div>

        <label>
          Recipe Method :
          <input type="text" className="w-full border-2" />
        </label>

        <label>
          Cooking Time (minutes) :
          <input type="text" className="w-full mb-5 border-2" />
        </label>

        <button className="block w-1/4 mx-auto text-center border-2 border-purple-800 bg-purple-50">Submit</button>
      </form>
    </div>
  );
};

export default Create;
