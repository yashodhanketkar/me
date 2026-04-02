import { List, ListItem, Stack } from '@mui/material';
import { lazy } from 'react';

import { Hero } from './hero';
import { Skills } from './skills';

const Projects = lazy(() => import('./featured').then((module) => ({ default: module.Projects })));
const Research = lazy(() => import('./featured').then((module) => ({ default: module.Research })));

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
        },
      }}
    >
      <Hero key="hero" />
      <List>
        <ListItem key="projects">
          <Projects />
        </ListItem>

        <ListItem key="research">
          <Research />
        </ListItem>

        <ListItem key="skills">
          <Skills />
        </ListItem>
      </List>
    </Stack>
  );
};

export default HomePage;
