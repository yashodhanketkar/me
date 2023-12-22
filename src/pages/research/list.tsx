import type { Research } from "@/config/type";
import { useGetResearchsQuery } from "@/context/services/researchService";
import {
  Box,
  Paper,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const ResearchPage = () => {
  const { data: researchWorks, isLoading, isError } = useGetResearchsQuery();

  if (isLoading) return <ResearchSkeleton />;
  if (isError || !researchWorks) return <div>Error...</div>;

  return (
    <Stack paddingX={{ xs: 2, xl: 8 }} paddingY={2} spacing={4}>
      {researchWorks.map((researchWork: Research) => (
        <ResearchCard research={researchWork} key={researchWork._id} />
      ))}
    </Stack>
  );
};

const ResearchCard = ({ research }: { research: Research }) => {
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
      <Stack gap={1} padding={4}>
        <Typography
          sx={{
            fontFamily: "serif",
            fontWeight: 600,
          }}
          textTransform={"capitalize"}
          variant="h4"
          width={"fit-content"}
          component={RouterLink}
          to={research._id}
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

const ResearchSkeleton = () => {
  const {
    palette: { mode },
  } = useTheme();

  return [1, 2].map((i) => (
    <Paper
      key={i}
      sx={{
        backgroundColor: mode === "light" ? "white" : "inherit",
        borderRadius: 3,
        marginBottom: 2,
      }}
    >
      <Stack gap={1} padding={4}>
        <Skeleton
          variant="text"
          animation="wave"
          width="100%"
          height={"2.25rem"}
        />
        <Skeleton variant="text" animation="wave" width="100%" />
        <Skeleton variant="text" animation="wave" width="100%" />
        <Skeleton variant="text" animation="wave" width="100%" />
        <Skeleton
          variant="text"
          animation="wave"
          width="100%"
          height={"5rem"}
        />
      </Stack>
    </Paper>
  ));
};
