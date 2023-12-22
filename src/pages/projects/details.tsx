import type { Project } from "@/config/type";
import { useGetProjectQuery } from "@/context/services/projectService";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const { data: projectWork, isError, isLoading } = useGetProjectQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !projectWork) return <>Error...</>;

  return <ProjectDetails projectWork={projectWork} />;
};

export const ProjectDetails = ({ projectWork }: { projectWork: Project }) => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Stack
      sx={{
        width: {
          xs: "100%",
          md: "75%",
          lg: "60%",
        },
        borderRadius: { xs: 2, md: 3 },
        paddingX: {
          xs: 2,
        },
      }}
      marginX={"auto"}
      spacing={1}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.5rem",
            md: "2rem",
            lg: "2.5rem",
          },
          fontWeight: 600,
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {projectWork.name}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {`(${new Date(projectWork.start)?.getFullYear() || "Unknown"} - ${
          new Date(projectWork.end)?.getFullYear() || "Present"
        })`}
      </Typography>
      <Typography
        paddingTop={2}
        variant="body1"
        sx={{
          textAlign: {
            xs: "justify",
            md: "left",
          },
        }}
      >
        {projectWork.description}
      </Typography>
      <Stack paddingTop={2} spacing={1}>
        {projectWork.links?.map((link) => (
          <Box
            key={link.name}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="overline" fontWeight={600}>
              {link.name.split("_").join(" ")}
            </Typography>
            <Typography
              variant="caption"
              width={"fit-content"}
              component="a"
              color={mode === "dark" ? "red" : "black"}
              href={link.url}
              target="_blank"
              rel="noopener norefere"
            >
              {link.url}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
