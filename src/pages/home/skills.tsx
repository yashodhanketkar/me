import { Box, Collapse, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

import { useGetSkillsQuery } from '@/context/services/resumeService';

import { FeaturedButton, PlaceHolder } from './wrapper';

export const Skills = () => {
  const { data, isLoading, isError } = useGetSkillsQuery();
  const [open, setOpen] = useState(false);

  if (isLoading) return <PlaceHolder holderFor="Skills" />;
  if (isError || !data?.length) return null;

  return (
    <Box sx={{ borderRadius: { xs: 2, md: 4 } }}>
      <FeaturedButton name="SKILLS" open={open} setOpen={setOpen} />
      <Collapse in={open} timeout={'auto'} unmountOnExit>
        <Box>
          <List
            dense
            sx={{
              columnCount: { xs: 1, md: 2, lg: 4, xl: 6 },
              columnGap: 4,
              width: '100%',
              padding: 2,
            }}
          >
            {data.map((s) => (
              <ListItem key={s.id} sx={{ display: 'inline-block', width: '100%' }}>
                <ListItemText primary={s.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};
