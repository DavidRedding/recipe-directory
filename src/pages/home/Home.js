import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data: recipes, error, isPending } = useFetch('http://localhost:3000/recipes');

  return (
    <div className=" max-w-6xl mx-auto my-12 px-5">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipes &&
        recipes.map((recipe) => (
          <h2 className=" text-gray-800 font-semibold text-3xl" key={recipe.id}>
            {recipe.title}
          </h2>
        ))}
    </div>
  );
};

export default Home;
