import { createContext } from 'react';

const ThemeModeContext = createContext({
  toggleThemeMode: () => {},
});

export { ThemeModeContext };
export type ThemeModeContextType = typeof ThemeModeContext;
