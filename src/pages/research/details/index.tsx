import { useParams } from 'react-router-dom';

import { ErrorMessage } from '@/common/error';
import { LoadingMessage } from '@/common/loading';
import { useGetResearchQuery } from '@/context/services/researchService';

import { ResearchDetails } from './card';

const ResearchDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetResearchQuery(id as string, {
    skip: !id,
  });

  if (!id) return <ErrorMessage custom="Research id not found." />;
  if (isLoading) return <LoadingMessage />;
  if (isError) return <ErrorMessage />;
  if (!data) return <ErrorMessage custom="Research details not found." />;

  return <ResearchDetails research={data} />;
};

export default ResearchDetailPage;
