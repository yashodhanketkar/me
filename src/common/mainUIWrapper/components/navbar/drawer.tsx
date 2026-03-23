import { IconButton, Link, Stack, SwipeableDrawer, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { navs, type nav } from './navs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import type { PaletteMode } from '@mui/material/styles';

const NavDrawerFactory = (props: {
  nav: nav;
  pathname: string;
  handleDrawer: () => void;
  mode: PaletteMode;
}) => {
  const {
    nav: { link, name },
    pathname,
    handleDrawer,
    mode,
  } = props;
  return (
    <Link
      onClick={handleDrawer}
      component={RouterLink}
      to={link}
      sx={{
        fontWeight: pathname === link ? 700 : 400,
        fontSize: 24,
        ':hover': {
          fontWeight: 700,
          ':first-letter': {
            color: mode === 'dark' ? 'red' : 'black',
          },
        },
        color: pathname === link && mode === 'dark' ? 'red' : 'inherit',
        textDecoration: 'none',
      }}
    >
      {name}
    </Link>
  );
};

const CoreNavDrawer = ({ handleDrawer }: { handleDrawer: () => void }) => {
  const { pathname } = useLocation();
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Stack sx={{ padding: 4, alignItems: 'center', gap: 2 }}>
      <IconButton
        onClick={handleDrawer}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <CloseIcon />
      </IconButton>
      {navs.map((nav) => (
        <NavDrawerFactory
          handleDrawer={handleDrawer}
          key={nav.link}
          nav={nav}
          pathname={pathname}
          mode={mode}
        />
      ))}
    </Stack>
  );
};

export const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <IconButton onClick={handleDrawer} sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        onOpen={handleDrawer}
        open={open}
        onClose={handleDrawer}
        anchor="top"
        disableSwipeToOpen={true}
      >
        <CoreNavDrawer handleDrawer={handleDrawer} />
      </SwipeableDrawer>
    </>
  );
};
