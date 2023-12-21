import { Research } from "@/config/type";
import {
  useGetResearchQuery,
  useGetResearchsQuery,
} from "@/context/services/researchService";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { ResearchCard, ResearchDetails } from "./research";

export const ResearchPage = () => {
  const { data: researchWorks, isLoading, isError } = useGetResearchsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !researchWorks) return <div>Error...</div>;

  return (
    <Stack paddingX={{ xs: 2, xl: 8 }} paddingY={2} spacing={4}>
      {researchWorks.map((researchWork: Research) => (
        <ResearchCard research={researchWork} key={researchWork.doi} />
      ))}
    </Stack>
  );
};

export const ResearchDetailPage = () => {
  const { id } = useParams();
  const { data: researchWork, isLoading, isError } = useGetResearchQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !researchWork) return <div>Error...</div>;

  return <ResearchDetails research={researchWork} />;
};
