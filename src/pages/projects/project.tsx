import { Project } from "@/config/type";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export const ProjectCard = ({ projectWork }: { projectWork: Project }) => {
  const {
    palette: { mode },
  } = useTheme();

  const source_code = projectWork.links
    ?.filter((ele) => ele.name === "source_code")?.[0]
    ?.url.toString();

  console.log(source_code);

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
          ({new Date(projectWork.start)?.getFullYear() || "Unknown"} -
          {new Date(projectWork.end)?.getFullYear() || "Present"})
        </Typography>
        <Typography
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

export const ProjectDetails = ({ projectWork }: { projectWork: Project }) => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <>
      <Stack
        sx={{
          width: {
            xs: "100%",
            md: "75%",
            lg: "60%",
            xl: "50%",
          },
          borderRadius: { xs: 2, md: 3 },
          paddingX: {
            xs: 2,
          },
        }}
        spacing={1}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "serif",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          {projectWork.name}
        </Typography>
        <Typography variant="subtitle1">
          ({new Date(projectWork.start)?.getFullYear() || "Unknown"} -
          {new Date(projectWork.end)?.getFullYear() || "Present"})
        </Typography>
        <Typography
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
        <Stack spacing={1}>
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
    </>
  );
};
