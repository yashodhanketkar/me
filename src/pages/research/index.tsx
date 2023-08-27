import { IResearchWork, researchWorks } from "@/common";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { ResearchCard } from "./research";

export const ResearchPage = () => {
  return (
    <Stack paddingX={{ xs: 2, xl: 8 }} paddingY={2} spacing={4}>
      {researchWorks.map((researchWork: IResearchWork) => (
        <ResearchCard research={researchWork} key={researchWork.doi} />
      ))}
    </Stack>
  );
};

export const ResearchDetailPage = () => {
  const { id } = useParams();
  const researchWork = researchWorks[parseInt(id!)];
  return <ResearchCard research={researchWork} feature />;
};
