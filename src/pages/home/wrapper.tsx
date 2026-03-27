import {
  Box,
  Button,
  Card,
  CircularProgress,
  Collapse,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import type { Project, Research } from '@/config/type';

type Featured = Project | Research;
type Props<T extends Featured> = {
  data: T[] | undefined;
  isError: boolean;
  isLoading: boolean;
  name: string;
};

export const FeaturedElement = <T extends Featured>(props: Props<T>) => {
  if (props.isLoading) return <PlaceHolder holderFor={props.name} />;
  if (props.isError || !props.data?.length) return null;
  return <FeaturedList data={props.data} name={props.name} />;
};

const FeaturedList = <T extends Featured>({ data, name }: { data: T[]; name: string }) => {
  const featured = data?.filter((data) => data.featured) ?? [];
  const [open, setOpen] = useState(false);

  return (
    <Box borderRadius={{ xs: 2, md: 4 }}>
      <FeaturedButton name={name} open={open} setOpen={setOpen} />
      <Collapse in={open} timeout={'auto'} unmountOnExit>
        <List sx={{ width: 'auto', maxWidth: '120ch' }}>
          {featured.map((data) => (
            <ListItem key={data.id}>
              <ListItemText primary={data.name.toUpperCase()} secondary={data.description} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export const Display = ({ name, description }: { name: string; description: string }) => {
  return (
    <Grid size={{ xs: 12, lg: 6 }} display="flex" flexDirection="column">
      <Card
        variant="elevation"
        sx={{
          padding: 2,
          borderRadius: 2,
          height: '100%',
          backgroundColor: 'white',
          color: 'black',
          ':hover': {
            backgroundColor: 'red',
          },
        }}
      >
        <Stack gap={1}>
          <Typography variant="h5">{name}</Typography>
          <Typography
            variant="body1"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Card>
    </Grid>
  );
};

export const PlaceHolder = ({ holderFor }: { holderFor: string }) => {
  const isMd = useMediaQuery('(max-width:900px)');

  return (
    <Box textAlign="center">
      <Typography
        variant="overline"
        sx={{
          display: 'inline-flex',
          marginX: 'auto',
          alignItems: 'center',
          gap: 2,
          fontSize: { xs: 16, md: 20 },
        }}
      >
        {`Loading ${holderFor}...`}
        <CircularProgress size={isMd ? 20 : 28} />
      </Typography>
    </Box>
  );
};

export const FeaturedButton = ({
  name,
  open,
  setOpen,
}: {
  name: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: 'capitalize',
        fontSize: 24,
        color: 'text.primary',
        gap: 1,
      }}
      onClick={() => setOpen(!open)}
    >
      <Icon>{open ? <IoIosArrowDown /> : <IoIosArrowForward />}</Icon>
      {name}
    </Button>
  );
};
