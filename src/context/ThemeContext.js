import { createContext, useReducer } from 'react';

export const ThemeContext = createContext(); // creates an instance object

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload }; // spreading, then overwriting the color property
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { color: '#58249c' });
  const changeColor = (color) => dispatch({ type: 'CHANGE_COLOR', payload: color });

  return <ThemeContext.Provider value={{ ...state, changeColor }}>{children}</ThemeContext.Provider>;
};
// ...state is spreading any existing state. Therefore ...state === {color: 'blue}
