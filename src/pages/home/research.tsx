import { useGetResearchsQuery } from '@/context/services/researchService';

import { FeaturedElement } from './wrapper';

const FeaturedResearch = () => {
  const { data, isError, isLoading } = useGetResearchsQuery();
  return (
    <FeaturedElement data={data} isError={isError} isLoading={isLoading} name="publications" />
  );
};

export default FeaturedResearch;
