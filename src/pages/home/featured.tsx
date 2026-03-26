import { useGetProjectsQuery } from '@/context/services/projectService';
import { useGetResearchsQuery } from '@/context/services/researchService';

import { FeaturedElement } from './wrapper';

export const Projects = () => {
  const { data, isError, isLoading } = useGetProjectsQuery();
  return <FeaturedElement data={data} isError={isError} isLoading={isLoading} name="projects" />;
};

export const Research = () => {
  const { data, isError, isLoading } = useGetResearchsQuery();
  return (
    <FeaturedElement data={data} isError={isError} isLoading={isLoading} name="publications" />
  );
};
