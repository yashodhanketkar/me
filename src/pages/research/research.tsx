import { Box, Paper, Typography, Stack, useTheme } from "@mui/material";
import { IResearchWork } from "@/common";

export const ResearchCard = (props: IResearchWork) => {
  const { title, authors, journal, year, doi, abstract } = props;
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
      <Stack gap={1} padding={4}>
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
            textAlign: "justify",
          }}
        >
          {abstract}
        </Typography>
      </Stack>
    </Paper>
  );
};
