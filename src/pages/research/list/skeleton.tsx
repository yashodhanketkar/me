import { Paper, Skeleton, Stack, useTheme } from '@mui/material';
import { useMemo } from 'react';

import { paperMetaStyle } from '../style';

export const ResearchSkeleton = () => {
  const {
    palette: { mode },
  } = useTheme();

  const paperStyle = useMemo(() => paperMetaStyle(mode), [mode]);

  return (
    <Stack padding={{ xs: 0, sm: 4 }} width="100%" alignItems="center" spacing={{ xs: 2, md: 4 }}>
      {[1, 2].map((i) => (
        <Paper key={i} sx={paperStyle}>
          <Stack gap={1} padding={4}>
            <Skeleton variant="text" animation="wave" width="100%" height={'2.25rem'} />
            <Skeleton variant="text" animation="wave" width="100%" />
            <Skeleton variant="text" animation="wave" width="100%" />
            <Skeleton variant="text" animation="wave" width="100%" />
            <Skeleton variant="text" animation="wave" width="100%" height={'5rem'} />
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};
