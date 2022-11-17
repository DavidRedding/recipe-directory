import RecipeList from '../../components/RecipeList';
const Home = ({ data, isPending, error }) => {
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
