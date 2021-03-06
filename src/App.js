import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import { useTheme } from './hooks/useTheme';
import ThemeSelector from './components/ThemeSelector';

const App = () => {
  const { mode } = useTheme();
  const dark = mode === 'dark';

  return (
    <div className={`min-h-screen transition-all duration-500 ${dark ? 'bg-[#333]' : 'bg-gray-300'}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <div className="max-w-6xl px-5 py-5 mx-auto">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/recipes/:id">
              <Recipe />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
