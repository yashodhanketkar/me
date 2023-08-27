import { IProjectWork, projectWorks } from "@/common/data/project";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
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

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectWork = projectWorks[parseInt(id!)];
  return (
    <ProjectCard projectWork={projectWork} key={projectWork.url} feature />
  );
};
