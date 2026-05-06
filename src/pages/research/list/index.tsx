import { Stack } from '@mui/material';

import { ErrorMessage } from '@/common/error';
import type { Research } from '@/config/type';
import { useGetResearchsQuery } from '@/context/services/researchService';

import { ResearchCard } from './card';
import { ResearchSkeleton } from './skeleton';

const ResearchPage = () => {
  const { data, isLoading, isError } = useGetResearchsQuery(undefined, {
    selectFromResult: ({ data, isLoading, isError }) => ({
      data,
      isLoading,
      isError,
    }),
  });

  if (isLoading) return <ResearchSkeleton />;
  if (isError) return <ErrorMessage />;
  if (!data) return <ErrorMessage custom="No research found." />;

  return <ResearchList data={data} />;
};

const ResearchList = ({ data }: { data: Research[] }) => {
  return (
    <Stack padding={{ xs: 2, sm: 4 }} width="100%" alignItems="center" spacing={{ xs: 2, md: 4 }}>
      {data.map((researchWork: Research) => (
        <ResearchCard research={researchWork} key={researchWork.id} />
      ))}
    </Stack>
  );
};

export default ResearchPage;
