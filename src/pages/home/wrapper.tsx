import { Box, Card, CircularProgress, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

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

export const FeaturedList = <T extends Featured>({ data, name }: { data: T[]; name: string }) => {
  const featured = data?.filter((data) => data.featured) ?? [];

  if (!featured.length) {
    console.log(`No featured ${name}s found!`);
    return;
  }

  return (
    <Box borderRadius={{ xs: 2, md: 4 }}>
      <Typography
        variant="subtitle1"
        textTransform="capitalize"
        fontSize={24}
        marginBottom={{ xs: 1, md: 1 }}
      >
        {name}
      </Typography>
      <Grid container direction="row" spacing={2} alignContent="stretch">
        {featured.map((data) => (
          <Display key={data.name} name={data.name} description={data.description} />
        ))}
      </Grid>
    </Box>
  );
};

export const Display = ({ name, description }: { name: string; description: string }) => {
  return (
    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Card
        variant="elevation"
        sx={{
          padding: 2,
          borderRadius: 2,
          height: '100%',
          backgroundColor: 'background.paper',
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

const PlaceHolder = ({ holderFor }: { holderFor: string }) => {
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
