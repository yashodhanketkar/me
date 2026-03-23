import { useGetResearchQuery } from '@/context/services/researchService';
import { useParams } from 'react-router-dom';
import { ResearchDetails } from './card';

export const ResearchDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetResearchQuery(id!);

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <div>Error...</div>;

  return <ResearchDetails research={data} />;
};
