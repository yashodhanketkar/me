import { useLocation } from 'react-router-dom';
import { Box, useTheme, Link } from '@mui/material';
import { navs, type nav } from './navs';
import { Link as RouterLink } from 'react-router-dom';
import type { PaletteMode } from '@mui/material/styles';

const NavFactory = (props: {
  nav: nav;
  pathname: string;
  mode: PaletteMode;
}): React.ReactElement => {
  const {
    nav: { link, name },
    pathname,
    mode,
  } = props;

  return (
    <>
      <Link
        sx={{
          ':hover': {
            ':first-letter': {
              fontWeight: 700,
              color: mode === 'dark' ? 'red' : 'black',
            },
          },
          color: pathname === link && mode === 'dark' ? 'red' : 'inherit',
          textDecoration: 'none',
        }}
        component={RouterLink}
        to={link}
      >
        {name}
      </Link>
    </>
  );
};

export const Navbar = (): React.ReactElement => {
  const {
    palette: { mode },
  } = useTheme();
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
        gap: { sm: 2, lg: 5 },
        paddingX: 2,
        paddingY: 1,
        borderRadius: 20,
        backgroundColor: mode === 'light' ? 'rgb(0, 0, 0, 0.05)' : 'transparent',
        ':hover': {
          boxShadow: mode === 'light' ? '0px 0px 2px 2px #00000011' : 'none',
        },
      }}
    >
      {navs.map((nav) => (
        <NavFactory key={nav.link} nav={nav} pathname={pathname} mode={mode} />
      ))}
    </Box>
  );
};

export { NavDrawer } from './drawer';
