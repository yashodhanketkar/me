import { Box, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';

import type { Research } from '@/config/type';

import { cardMetaStyle, paperMetaStyle } from '../style';

export const ResearchCard = memo(({ research }: { research: Research }) => {
  const {
    palette: { mode },
  } = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  const authorList = useMemo(
    () =>
      research.authors.map((author: string) => (
        <Typography variant="subtitle1" key={author}>
          {author}.
        </Typography>
      )),
    [research.authors],
  );

  const paperStyle = useMemo(() => paperMetaStyle(mode), [mode]);
  const formattedDate = useMemo(() => research.date.toLowerCase(), [research.date]);

  return (
    <Paper sx={paperStyle}>
      <Stack gap={1} padding={4}>
        <Typography
          sx={{
            fontFamily: 'serif',
            fontWeight: 600,
          }}
          textTransform="capitalize"
          variant={isMobile ? 'h6' : 'h5'}
          width="fit-content"
          component={Link}
          to={research.id}
        >
          {research.name}
        </Typography>
        <Box display="inline-flex" gap={1}>
          {authorList}
        </Box>
        <Box sx={cardMetaStyle}>
          <Typography variant="subtitle2">{research.journal}</Typography>
          <Typography variant="subtitle2" textTransform="capitalize">
            {formattedDate}
          </Typography>
        </Box>
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {research.description}
        </Typography>
        <Typography
          component="a"
          sx={{
            width: 'fit-content',
            textDecoration: 'underline',
            color: mode === 'dark' ? 'red' : 'black',
            fontStyle: 'oblique',
          }}
          href={`https://doi.org/${research.doi}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {research.doi}
        </Typography>
      </Stack>
    </Paper>
  );
});

ResearchCard.displayName = 'ResearchCard';
