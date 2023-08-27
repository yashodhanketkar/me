import { IResearchWork, researchWorks } from "@/common";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const ResearchCard = ({
  research,
  feature = false,
}: {
  research: IResearchWork;
  feature?: boolean;
}) => {
  const { title, authors, journal, year, doi, abstract } = research;
  const index = researchWorks.findIndex((ele) => ele.doi === doi);
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Paper
      sx={{
        backgroundColor: mode === "light" ? "white" : "inherit",
        borderRadius: 3,
      }}
    >
      <Stack
        component={RouterLink}
        to={feature ? "" : `${index}`}
        gap={1}
        padding={4}
      >
        <Typography
          sx={{
            fontFamily: "serif",
            fontWeight: 600,
          }}
          variant="h4"
        >
          {title}
        </Typography>
        <Box display={"inline-flex"} gap={1}>
          {authors.map((author: string, i: number) => (
            <Typography variant="subtitle1" key={i}>
              {author}.
            </Typography>
          ))}
        </Box>
        <Typography variant="subtitle2">
          {journal}, {year}
        </Typography>
        <Typography
          component="a"
          sx={{
            width: "fit-content",
            textDecoration: "underline",
            fontStyle: "oblique",
          }}
          href={`https://doi.org/${doi}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {doi}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: feature ? "inline" : "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {abstract}
        </Typography>
      </Stack>
    </Paper>
  );
};
