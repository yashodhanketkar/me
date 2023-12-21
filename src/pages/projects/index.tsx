import { Project } from "@/config/type";
import {
  useGetProjectQuery,
  useGetProjectsQuery,
} from "@/context/services/projectService";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProjectCard, ProjectDetails } from "./project";

export const ProjectPage = () => {
  const { data: projectWorks, isError, isLoading } = useGetProjectsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError || !projectWorks) return <div>Error</div>;

  return (
    <Stack padding={4} width={"100%"} alignItems={"center"} spacing={4}>
      {projectWorks.map((projectWork: Project) => (
        <ProjectCard projectWork={projectWork} key={projectWork._id} />
      ))}
    </Stack>
  );
};

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const { data: projectWork, isError, isLoading } = useGetProjectQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !projectWork) return <>Error...</>;

  return <ProjectDetails projectWork={projectWork} />;
};
