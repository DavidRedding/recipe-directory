import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="flex items-center space-x-2 text-black">
          <span className="text-xl text-purple-50 "> Search:</span>
          <input
            className="p-1 px-2 rounded"
            required
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
