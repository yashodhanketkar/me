import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link, Stack, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { type nav, navs } from './navs';

const NavDrawerFactory = (props: { nav: nav; pathname: string; handleDrawer: () => void }) => {
  const {
    nav: { link, name },
    pathname,
    handleDrawer,
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
            color: (theme) => (theme.palette.mode === 'dark' ? 'red' : 'black'),
          },
        },
        color: (theme) => (pathname === link && theme.palette.mode === 'dark' ? 'red' : 'inherit'),
        textDecoration: 'none',
      }}
    >
      {name}
    </Link>
  );
};

const CoreNavDrawer = ({ handleDrawer }: { handleDrawer: () => void }) => {
  const { pathname } = useLocation();

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
      <IconButton onClick={handleDrawer}>
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
