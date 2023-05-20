import { ResearchCard } from "./research";
import { researchWorks } from "../../data/research";

export const ResearchPage = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 mb-4 xl:mb-10 xl:gap-10 xl:mt-10">
      {researchWorks.map((researchWork) => (
        <ResearchCard {...researchWork} />
      ))}
    </div>
  );
};
