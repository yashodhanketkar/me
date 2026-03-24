import { Box, Stack, Typography } from '@mui/material';

import type { Research } from '@/config/type';

export const ResearchDetails = ({ research }: { research: Research }) => {
  const year = parseYear(research.date);

  const textAlign = { xs: 'center', md: 'left' };

  return (
    <Stack
      sx={{
        width: { xs: '100%', md: '75%', lg: '60%' },
        borderRadius: { xs: 2, md: 3 },
        paddingX: { xs: 2 },
        marginX: 'auto',
        gap: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '2rem', md: '2.25rem', lg: '2.5rem' },
          fontFamily: 'serif',
          fontWeight: 600,
          textAlign: 'center',
          textTransform: 'capitalize',
        }}
        variant="h4"
      >
        {research.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {research.authors.map((author: string) => (
          <Typography variant="subtitle1" key={author}>
            {author}.
          </Typography>
        ))}
      </Box>
      <Typography variant="overline" sx={{ textAlign }}>
        {research.journal} ({year})
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: (theme) => (theme.palette.mode === 'dark' ? 'red' : 'black'),
          textAlign,
        }}
      >
        {research.doi}
      </Typography>
      <Typography variant="overline" fontWeight={600}>
        Abstract:
      </Typography>
      <Typography>{research.abstract}</Typography>
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

const parseYear = (date: string) => {
  const res = new Date(date).getFullYear();
  if (!Number.isNaN(res)) {
    return res;
  }
  return date.split(',')[1].trim();
};
