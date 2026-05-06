import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

import { ThemeModeContext } from '@/context/theme';

export const ThemeWrapper = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    } else {
      return 'dark';
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const themeMode = useMemo(
    () => ({ toggleThemeMode: () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark')) }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'dark' ? '#222222' : '#eeeeee',
            paper: mode === 'dark' ? '#222222' : '#dddddd',
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
