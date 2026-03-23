import type { Research } from '@/config/type';
import { Box, Stack, Typography } from '@mui/material';
import { parseYear } from './helper';

export const ResearchDetails = ({ research }: { research: Research }) => {
  return (
    <Stack gap={1} paddingX={{ xs: 2, md: 4 }} paddingY={2} alignItems="center">
      <Typography
        sx={{
          fontSize: { xs: '2rem', md: '2.25rem', lg: '2.5rem' },
          fontFamily: 'serif',
          fontWeight: 600,
        }}
        textTransform="capitalize"
        variant="h4"
      >
        {research.name}
      </Typography>
      <Box display="inline-flex" gap={1}>
        {research.authors.map((author: string, i: number) => (
          <Typography variant="subtitle1" key={i}>
            {author}.
          </Typography>
        ))}
      </Box>
      <Typography variant="subtitle2">
        {research.journal}, {parseYear(research.date)}
      </Typography>
      <Typography
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {research.abstract}
      </Typography>
      <Typography
        component="a"
        sx={{
          width: 'fit-content',
          textDecoration: 'underline',
          fontStyle: 'oblique',
        }}
        href={`https://doi.org/${research.doi}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {research.doi.split('g/')[1]}
      </Typography>
    </Stack>
  );
};
