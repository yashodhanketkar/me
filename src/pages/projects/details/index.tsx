import { useGetProjectQuery } from '@/context/services/projectService';
import { useParams } from 'react-router-dom';
import { ProjectDetails } from './card';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetProjectQuery(id!);

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <>Error...</>;

  return <ProjectDetails projectWork={data} />;
};
