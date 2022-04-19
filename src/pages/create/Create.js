import { useState, useEffect } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const log = (arg) => console.log(arg);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(`Title: ${title}`);
    console.log(`Method: ${method}`);
    console.log(`Cooking Time: ${cookingTime} minutes`);
    // Prediction : Run the POST Method here
  };

  return (
    <div className="max-w-6xl px-5 mx-auto">
      <h1 className="py-2 mt-8 text-2xl font-semibold text-center text-slate-700">Add a New Recipe</h1>
      <form onSubmit={(e) => formSubmit(e)} className="flex flex-col w-4/5 mx-auto space-y-3">
        <label>
          <span> Recipe Title :</span>
          <input
            type="text"
            className="w-full p-1 border-2 rounded"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          Recipe Method :
          <textarea
            type="text"
            className="w-full border-2 rounded"
            required
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </label>
        {/* // Ingredients */}
        <label>
          <span>Recipe Ingredients :</span>
          <div className="flex space-x-2">
            <input type="text" className="rounded grow" required />
            <button
              className="w-1/6 border-2 border-purple-800 rounded md:w-1/12 bg-purple-50"
              onClick={(e) => e.preventDefault()}
            >
              Add
            </button>
          </div>
          <span className="text-sm text-gray-800">Current Ingredients :</span>
        </label>
        <label>
          Cooking Time (minutes) :
          <input
            type="number"
            className="w-full mb-2 border-2"
            required
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <button className="block w-1/6 p-1 mx-auto text-center bg-purple-800 rounded text-purple-50">submit</button>
      </form>
    </div>
  );
};

export default Create;
