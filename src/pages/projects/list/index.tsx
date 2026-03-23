import { Stack } from '@mui/material';
import { ProjectCard } from './card';
import { ProjectSkeleton } from './skeleton';
import type { Project } from '@/config/type';
import { useGetProjectsQuery } from '@/context/services/projectService';

export const ProjectPage = () => {
  const { data, isLoading, isError } = useGetProjectsQuery(undefined, {
    selectFromResult: ({ data, isLoading, isError }) => ({
      data,
      isLoading,
      isError,
    }),
  });

  if (isLoading) return <ProjectSkeleton />;
  if (isError || !data) return <div>Error</div>;

  return (
    <Stack padding={{ xs: 0, sm: 4 }} width="100%" alignItems="center" spacing={{ xs: 2, md: 4 }}>
      {data.map((projectWork: Project) => (
        <ProjectCard projectWork={projectWork} key={projectWork.id} />
      ))}
    </Stack>
  );
};
