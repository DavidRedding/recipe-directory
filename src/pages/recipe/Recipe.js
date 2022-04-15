import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Recipe = () => {
  const { id } = useParams(); // params.id
  const url = `http://localhost:3000/recipes/${id}`;
  const { data, error, isPending } = useFetch(url);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <div>{data.title}</div>}
    </div>
  );
};

export default Recipe;
