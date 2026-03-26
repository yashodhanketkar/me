import { useGetProjectsQuery } from '@/context/services/projectService';

import { FeaturedElement } from './wrapper';

const FeaturedProjects = () => {
  const { data, isError, isLoading } = useGetProjectsQuery();
  return <FeaturedElement data={data} isError={isError} isLoading={isLoading} name="projects" />;
};

export default FeaturedProjects;
