import { useGetResearchQuery } from '@/context/services/researchService';
import { useParams } from 'react-router-dom';
import { ResearchDetails } from './card';
import { ErrorMessage } from '@/common/error';

export const ResearchDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetResearchQuery(id ?? '', {
    skip: !id,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <ErrorMessage />;

  return <ResearchDetails research={data} />;
};
