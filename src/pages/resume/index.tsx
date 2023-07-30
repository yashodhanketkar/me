import { useRef } from "react";
import { Button, Card, Container, Divider, useTheme } from "@mui/material";
import {
  ResumeTitle,
  ResumeHeader,
  ResumeEducation,
  ResumeSkills,
  ResumeExperience,
} from "./components";

export const ResumePage = () => {
  const {
    palette: { mode },
  } = useTheme();

  const pageRef = useRef();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      disableGutters
    >
      <Card
        sx={{
          padding: {
            xs: 2,
            md: 4,
          },
          width: { xs: "85%", md: "70%", xl: "65%" },
          borderRadius: 2,
          backgroundColor: mode === "dark" ? "inherit" : "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <ResumeTitle />
        <Divider />
        <ResumeHeader />
        <Divider />
        <ResumeExperience />
        <Divider />
        <ResumeEducation />
        <Divider />
        <ResumeSkills />
      </Card>
    </Container>
  );
};
