import { createContext } from 'react';

// creates an object
export const ThemeContext = createContext();

// creates a React Component, "children" are any components ThemeProvider might wrap.
export const ThemeProvider = ({ children }) => {
  // custom logic can be added here
  return <ThemeContext.Provider value={'text-red-700'}>{children}</ThemeContext.Provider>;
};
