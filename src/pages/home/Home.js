import { projectFirestore } from '../../firebase/config';
import RecipeList from '../../components/RecipeList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => results.push({ id: doc.id, ...doc.data() }));
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
