import { ResearchCard } from "./research";
import { IResearchWork, researchWorks } from "@/common";

export const ResearchPage = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 mb-4 xl:mb-10 xl:gap-10 xl:mt-10">
      {researchWorks.map((researchWork: IResearchWork, i: number) => (
        <ResearchCard {...researchWork} key={i} />
      ))}
    </div>
  );
};
