import { createContext, useReducer } from 'react';

export const ThemeContext = createContext(); // creates an instance object

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload }; // spreading, then overwriting the color property
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { color: '#58249c', mode: 'light' });
  const changeColor = (color) => dispatch({ type: 'CHANGE_COLOR', payload: color });
  const changeMode = (mode) => dispatch({ type: 'CHANGE_MODE', payload: mode });

  return <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>{children}</ThemeContext.Provider>;
};
// ...state is spreading the state object (initialised by useReducer)
