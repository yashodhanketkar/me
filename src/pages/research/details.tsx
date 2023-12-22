import type { Research } from "@/config/type";
import { useGetResearchQuery } from "@/context/services/researchService";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const ResearchDetailPage = () => {
  const { id } = useParams();
  const { data: researchWork, isLoading, isError } = useGetResearchQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !researchWork) return <div>Error...</div>;

  return <ResearchDetails research={researchWork} />;
};

const ResearchDetails = ({ research }: { research: Research }) => {
  const { title, authors, journal, date, doi, abstract } = research;

  return (
    <Stack
      gap={1}
      paddingX={{
        xs: 2,
        md: 4,
      }}
      paddingY={2}
      alignItems={"center"}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "2rem",
            md: "2.25rem",
            lg: "2.5rem",
          },
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
