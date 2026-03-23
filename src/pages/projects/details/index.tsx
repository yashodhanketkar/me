import { useGetProjectQuery } from '@/context/services/projectService';
import { useParams } from 'react-router-dom';
import { ProjectDetails } from './card';
import { ErrorMessage } from '@/common/error';

export const ProjectDetailPage = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useGetProjectQuery(id ?? '', {
    skip: !id,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <ErrorMessage />;

  return <ProjectDetails projectWork={data} />;
};
