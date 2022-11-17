import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { projectFirestore } from './firebase/config';

// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import { useTheme } from './hooks/useTheme';
import ThemeSelector from './components/ThemeSelector';
import { useState, useEffect } from 'react';

const App = () => {
  const { mode } = useTheme();
  const dark = mode === 'dark';

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => results.push({ id: doc.id, ...doc.data() }));
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unsub();
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ${dark ? 'bg-[#333]' : 'bg-gray-300'}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <div className="max-w-6xl px-5 py-5 mx-auto">
          <Switch>
            <Route path="/" exact>
              <Home data={data} isPending={isPending} error={error} />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/search">
              <Search data={data} />
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
