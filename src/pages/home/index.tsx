import { Stack } from '@mui/material';
import { lazy } from 'react';

import { Hero } from './hero';

const Projects = lazy(() => import('./projects'));

const HomePage = () => {
  return (
    <Stack
      sx={{
        width: { xs: '100%', md: '75%' },
        borderRadius: { xs: 2, md: 3 },
        gap: 2,
        marginX: 'auto',
        '>*': {
          width: '100%',
          padding: 2,
          border: '1px solid red',
        },
      }}
    >
      <Hero />
      <Projects />
    </Stack>
  );
};

export default HomePage;
