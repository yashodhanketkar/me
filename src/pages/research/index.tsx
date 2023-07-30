import { Stack } from "@mui/material";
import { ResearchCard } from "./research";
import { IResearchWork, researchWorks } from "@/common";

export const ResearchPage = () => {
  return (
    <Stack paddingX={{ xs: 2, xl: 8 }} paddingY={2} spacing={4}>
      {researchWorks.map((researchWork: IResearchWork) => (
        <ResearchCard {...researchWork} key={researchWork.doi} />
      ))}
    </Stack>
  );
};
