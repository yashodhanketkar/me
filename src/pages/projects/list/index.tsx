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
    <Stack className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {data.map((projects) => (
          <ProjectCard projectWork={projects} key={projects.id} />
        ))}
      </div>
    </Stack>
  );
};

export default ProjectPage;
