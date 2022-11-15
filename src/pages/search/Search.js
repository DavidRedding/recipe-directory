import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

const Search = () => {
  // Grabs ahold of the query
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  // Making a JSON search request with the query
  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, data, isPending } = useFetch(url); // if recipe doesnt exist, data will return []

  return (
    <div className="text-xl text-center">
      <h2 className="mb-8 text-3xl font-semibold">Recipes including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
