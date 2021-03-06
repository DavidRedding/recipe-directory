import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="mb-4 transition-all duration-500 bg-purple-900" style={{ background: color }}>
      <nav className="flex items-center justify-between max-w-6xl px-5 py-5 mx-auto text-purple-50">
        <Link to="/">
          <h1 className="text-3xl font-bold ">Cooking Ninja</h1>
        </Link>
        <div className="flex items-center justify-between">
          <SearchBar />
          <Link to="/create" className="p-1 ml-8 text-xl border rounded md:ml-10 ">
            Create Recipe
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
