import { Research } from "@/config/type";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const ResearchCard = ({ research }: { research: Research }) => {
  const { title, authors, journal, date, doi, description } = research;
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
      <Stack component={RouterLink} to={research._id} gap={1} padding={4}>
        <Typography
          sx={{
            fontFamily: "serif",
            fontWeight: 600,
          }}
          textTransform={"capitalize"}
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 1,
            justifyContent: {
              xs: "flex-start",
              sm: "space-between",
            },
          }}
        >
          <Typography variant="subtitle2">{journal}</Typography>
          <Typography variant="subtitle2" textTransform={"capitalize"}>
            {date.toLowerCase()}
          </Typography>
        </Box>
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
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};

export const ResearchDetails = ({ research }: { research: Research }) => {
  const { title, authors, journal, date, doi, abstract } = research;
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Stack
      gap={1}
      paddingX={{
        xs: 2,
        md: 4,
      }}
      paddingY={2}
    >
      <Typography
        sx={{
          fontFamily: "serif",
          fontWeight: 600,
        }}
        textTransform={"capitalize"}
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
        {journal}, {date}
      </Typography>
      <Typography
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        }}
      >
        {abstract}
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
        {doi.split("g/")[1]}
      </Typography>
    </Stack>
  );
};
