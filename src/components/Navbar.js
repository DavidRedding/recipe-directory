import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-purple-900 ">
      <nav className=" flex justify-between p-5 text-purple-50 items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className=" text-3xl font-bold  ">Cooking Ninja</h1>
        </Link>
        <Link to="/create" className="text-xl border p-1 rounded ">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
