import { Stack } from '@mui/material';

import { ErrorMessage } from '@/common/error';
import { useGetProjectsQuery } from '@/context/services/projectService';

import { ProjectCard } from './card';
import { ProjectSkeleton } from './skeleton';

const ProjectPage = () => {
  const { data, isLoading, isError } = useGetProjectsQuery(undefined, {
    selectFromResult: ({ data, isLoading, isError }) => ({
      data,
      isLoading,
      isError,
    }),
  });

  if (isLoading) return <ProjectSkeleton />;
  if (isError) return <ErrorMessage />;
  if (!data) return <ErrorMessage custom="No projects found." />;

  return (
    <Stack padding={{ xs: 2, sm: 4 }} width="100%" alignItems="center" spacing={{ xs: 2, md: 4 }}>
      {data.map((projects) => (
        <ProjectCard projectWork={projects} key={projects.id} />
      ))}
    </Stack>
  );
};

export default ProjectPage;
