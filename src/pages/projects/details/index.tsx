import { useParams } from 'react-router-dom';

import { ErrorMessage } from '@/common/error';
import { LoadingMessage } from '@/common/loading';
import { useGetProjectQuery } from '@/context/services/projectService';

import { ProjectDetails } from './card';

const ProjectDetailPage = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useGetProjectQuery(id as string, {
    skip: !id,
  });

  if (isLoading) return <LoadingMessage />;
  if (isError || !data) return <ErrorMessage />;
  return <ProjectDetails projectWork={data} />;
};

export default ProjectDetailPage;
