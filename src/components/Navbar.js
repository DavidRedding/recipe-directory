import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-purple-900 ">
      <nav className="flex items-center justify-between max-w-6xl px-5 py-5 mx-auto text-purple-50">
        <Link to="/">
          <h1 className="text-3xl font-bold ">Cooking Ninja</h1>
        </Link>
        <Link to="/create" className="p-1 text-xl border rounded ">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
