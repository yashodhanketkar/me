import type { Project } from "@/config/type";
import { useGetProjectsQuery } from "@/context/services/projectService";
import {
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export const ProjectPage = () => {
  const { data: projectWorks, isError, isLoading } = useGetProjectsQuery();
  if (isLoading) return <ProjectSkeleton />;

  if (isError || !projectWorks) return <div>Error</div>;

  return (
    <Stack padding={4} width={"100%"} alignItems={"center"} spacing={4}>
      {projectWorks.map((projectWork: Project) => (
        <ProjectCard projectWork={projectWork} key={projectWork._id} />
      ))}
    </Stack>
  );
};

export const ProjectCard = ({ projectWork }: { projectWork: Project }) => {
  const {
    palette: { mode },
  } = useTheme();

  const source_code = projectWork.links
    ?.filter((ele) => ele.name === "source_code")?.[0]
    ?.url.toString();

  return (
    <Paper
      sx={{
        width: {
          xs: "100%",
          md: "75%",
          lg: "60%",
          xl: "50%",
        },
        backgroundColor: mode === "light" ? "white" : "inherit",
        borderRadius: { xs: 2, md: 3 },
      }}
    >
      <Stack
        sx={{
          padding: {
            xs: 2,
          },
          alignItems: "center",
        }}
        spacing={1}
      >
        <Typography
          component={RouterLink}
          to={`${projectWork._id}`}
          variant="h4"
          sx={{
            fontFamily: "serif",
            fontSize: 24,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {projectWork.name}
        </Typography>
        <Typography variant="subtitle1">
          {`(${new Date(projectWork.start)?.getFullYear() || "Unknown"} - ${
            new Date(projectWork.end)?.getFullYear() || "Present"
          })`}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: {
              xs: "justify",
              md: "left",
            },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {projectWork.description}
        </Typography>
        {source_code && (
          <IconButton
            component="a"
            href={source_code}
            target="_blank"
            rel="noopener norefere"
            sx={{
              color: "white",
              borderRadius: 5,
              backgroundColor: mode === "dark" ? "red" : "black",
              ":hover": {
                backgroundColor: mode === "dark" ? "#bb0000" : "#444444",
              },
              zIndex: 100,
            }}
            title="Source Code"
          >
            <GitHubIcon />
          </IconButton>
        )}
      </Stack>
    </Paper>
  );
};

export const ProjectSkeleton = () => {
  return (
    <Stack padding={4} width={"100%"} alignItems={"center"} spacing={2}>
      {[1, 2].map((ele) => (
        <Skeleton
          key={ele}
          variant="rectangular"
          sx={{
            borderRadius: 2,
            width: {
              xs: "100%",
              md: "75%",
              lg: "60%",
              xl: "50%",
            },
            height: 200,
            paddingX: {
              xs: 2,
            },
          }}
        />
      ))}
    </Stack>
  );
};
