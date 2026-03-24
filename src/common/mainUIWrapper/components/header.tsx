import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AppBar, Box, Checkbox, Container, Toolbar, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';

import { ThemeModeContext } from '@/context/theme';

import { Navbar } from './navbar/bar';
import { NavDrawer } from './navbar/drawer';

export const Header = (): React.ReactElement => {
  return (
    <Container maxWidth={false} disableGutters>
      <AppBar
        sx={{
          backgroundColor: 'transparent',
          color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
          boxShadow: 'none',
          displayPrint: 'none',
        }}
        position="static"
      >
        <Toolbar>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: 'Dancing Script',
              ':hover': { color: (theme) => (theme.palette.mode === 'dark' ? 'red' : 'inherit') },
            }}
            variant="h5"
            component={'a'}
            href="/"
            noWrap
            className="font-dancingScript"
          >
            Yashodhan
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'end', sm: 'center' } }}>
            <Navbar />
            <NavDrawer />
          </Box>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export const ThemeSwitch = (): React.ReactElement => {
  const themeMode = useContext(ThemeModeContext);
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Checkbox
      checked={mode === 'dark'}
      onChange={themeMode.toggleThemeMode}
      checkedIcon={<DarkModeIcon />}
      icon={<LightModeIcon />}
      aria-label="Switch between dark and light mode"
      sx={{ color: 'orange', '&.Mui-checked': { color: 'inherit' } }}
    />
  );
};
