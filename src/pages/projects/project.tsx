import { IProjectWork, projectWorks } from "@/common/data/project";
import { Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const ProjectCard = ({
  projectWork,
  feature = false,
}: {
  projectWork: IProjectWork;
  feature?: boolean;
}) => {
  const {
    palette: { mode },
  } = useTheme();

  const index = projectWorks.findIndex((ele) => ele.name === projectWork.name);

  return (
    <Paper
      sx={{
        width: feature
          ? "100%"
          : {
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
        component={RouterLink}
        to={feature ? "" : `${index}`}
        sx={{
          padding: {
            xs: 2,
          },
          alignItems: "center",
        }}
        spacing={1}
      >
        <Typography
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
        <Typography variant="subtitle1">({projectWork.year})</Typography>
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
        <Button
          variant="contained"
          component="a"
          href={projectWork.url}
          target="_blank"
          rel="noopener norefere"
          sx={{
            width: 150,
            color: "white",
            borderRadius: 5,
            backgroundColor: mode === "dark" ? "red" : "black",
            ":hover": {
              backgroundColor: mode === "dark" ? "#bb0000" : "#444444",
            },
          }}
        >
          Source Code
        </Button>
      </Stack>
    </Paper>
  );
};
