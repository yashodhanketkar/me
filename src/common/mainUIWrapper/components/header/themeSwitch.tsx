import { useContext } from 'react';
import { ThemeModeContext } from '@/common/context/theme';
import { Checkbox, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeSwitch = (): React.ReactElement => {
  const {
    palette: { mode },
  } = useTheme();
  const themeMode = useContext(ThemeModeContext);

  const handleThemeSwitch = () => {
    localStorage.setItem('theme', mode === 'dark' ? 'light' : 'dark');
    themeMode.toggleThemeMode();
  };

  return (
    <Checkbox
      checked={mode === 'dark'}
      onChange={handleThemeSwitch}
      checkedIcon={<Brightness4Icon />}
      icon={<Brightness7Icon />}
      aria-label="Switch between dark and light mode"
      sx={{ color: 'orange', '&.Mui-checked': { color: 'inherit' } }}
    />
  );
};
