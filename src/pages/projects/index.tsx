import { Stack } from "@mui/material";
import { projectWorks, IProjectWork } from "@/common/data/project";
import { ProjectCard } from "./project";

export const ProjectPage = () => {
  return (
    <Stack padding={4} width={"100%"} alignItems={"center"} spacing={4}>
      {projectWorks.map((projectWork: IProjectWork) => (
        <ProjectCard projectWork={projectWork} key={projectWork.url} />
      ))}
    </Stack>
  );
};
