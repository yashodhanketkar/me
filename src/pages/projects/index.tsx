import { projectWorks, IProjectWork } from "@/common/data/project";
import { ProjectCard } from "./project";

export const ProjectPage = () => {
  return (
    <div className="flex flex-wrap flex-1 w-full mt-10 mb-10 justify-evenly gap-y-4 xl:gap-y-2 xl:mt-4 xl:mb-4">
      {projectWorks.map((projectWork: IProjectWork, i: number) => (
        <ProjectCard projectWork={projectWork} key={i} />
      ))}
    </div>
  );
};
