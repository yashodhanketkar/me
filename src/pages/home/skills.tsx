import { Box, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { useGetSkillsQuery } from '@/context/services/resumeService';

import { FeaturedButton, PlaceHolder } from './wrapper';

export const Skills = () => {
  const { data, isLoading, isError } = useGetSkillsQuery();
  const [open, setOpen] = useState(false);

  if (isLoading) return <PlaceHolder holderFor="Skills" />;
  if (isError) return <>error...</>;
  if (!data?.length) return null;

  return (
    <Box sx={{ borderRadius: { xs: 2, md: 4 } }}>
      <FeaturedButton name="SKILLS" open={open} setOpen={setOpen} />
      <Collapse in={open} timeout={'auto'} unmountOnExit>
        <Box>
          <List dense>
            {data.map((s) => (
              <ListItem key={s.id}>
                <ListItemIcon>
                  <IoIosArrowForward />
                </ListItemIcon>
                <ListItemText primary={s.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};
