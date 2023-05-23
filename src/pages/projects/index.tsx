import { projectWorks, IProjectWork } from "@/common/data/project";
import { ProjectCard } from "./project";

export const ProjectPage = () => {
  return (
    <div className="flex flex-wrap flex-1 w-full justify-evenly gap-y-4">
      {projectWorks.map((projectWork: IProjectWork, i: number) => (
        <ProjectCard projectWork={projectWork} key={i} />
      ))}
    </div>
  );
};
