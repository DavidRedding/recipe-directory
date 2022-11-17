import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import { useState } from 'react';

const Search = ({ data }) => {
  // Grabs ahold of the query
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  let filteredRecipes = data.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.method.toLowerCase().includes(query.toLowerCase())
  );
  console.log(query);

  return (
    <div className="text-xl text-center">
      <h2 className="mb-8 text-3xl font-semibold">Recipes including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={filteredRecipes} />}
    </div>
  );
};

export default Search;
