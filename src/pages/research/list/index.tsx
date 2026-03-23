import type { Research } from '@/config/type';
import { Stack } from '@mui/material';
import { useGetResearchsQuery } from '@/context/services/researchService';
import { ResearchCard } from './card';
import { ResearchSkeleton } from './skeleton';

export const ResearchPage = () => {
  const { data, isLoading, isError } = useGetResearchsQuery(undefined, {
    selectFromResult: ({ data, isLoading, isError }) => ({
      data,
      isLoading,
      isError,
    }),
  });

  if (isLoading) return <ResearchSkeleton />;
  if (isError || !data) return <div>Something went wrong</div>;

  return <ResearchList data={data} />;
};

const ResearchList = ({ data }: { data: Research[] }) => {
  return (
    <Stack padding={{ xs: 0, sm: 4 }} width="100%" alignItems="center" spacing={{ xs: 2, md: 4 }}>
      {data.map((researchWork: Research) => (
        <ResearchCard research={researchWork} key={researchWork.id} />
      ))}
    </Stack>
  );
};
