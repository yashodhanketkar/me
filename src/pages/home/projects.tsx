import { Box, Card, Grid, Stack, Typography } from '@mui/material';

import { useGetProjectsQuery } from '@/context/services/projectService';

const ProjectCard = ({ name, description }: { name: string; description: string }) => {
  return (
    <Grid size={{ xs: 12, lg: 5 }} marginX="auto">
      <Card
        variant="elevation"
        sx={{
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Stack gap={1}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>
      </Card>
    </Grid>
  );
};

const Projects = () => {
  const { data, isError, isLoading } = useGetProjectsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data || data.length === 0) return <div>No projects found</div>;

  return (
    <Box
      sx={{
        borderRadius: { xs: 2, md: 4 },
      }}
    >
      <Grid container gap={2}>
        {data.map((data) => (
          <ProjectCard key={data.name} name={data.name} description={data.description} />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
