import RecipeList from '../../components/RecipeList';
import ThemeSelector from '../../components/ThemeSelector';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data: recipes, error, isPending } = useFetch('http://localhost:3000/recipes');

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
