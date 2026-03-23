import { Box, Paper, Skeleton, Stack, useTheme } from '@mui/material';

export const ResearchSkeleton = () => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[1, 2].map((i) => (
        <Paper
          key={i}
          sx={{
            backgroundColor: mode === 'light' ? 'white' : 'inherit',
            borderRadius: 3,
            marginBottom: 2,
          }}
        >
          <Stack gap={1} padding={4}>
            <Skeleton variant="text" animation="wave" width="100%" height={'2.25rem'} />
            <Skeleton variant="text" animation="wave" width="100%" />
            <Skeleton variant="text" animation="wave" width="100%" />
            <Skeleton variant="text" animation="wave" width="100%" />
            <Skeleton variant="text" animation="wave" width="100%" height={'5rem'} />
          </Stack>
        </Paper>
      ))}
    </Box>
  );
};
