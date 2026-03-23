import { Skeleton, Stack } from '@mui/material';

export const ProjectSkeleton = () => {
  const SkelItem = () => (
    <Skeleton
      variant="rectangular"
      sx={{
        borderRadius: 2,
        width: {
          xs: '100%',
          md: '75%',
          lg: '60%',
          xl: '50%',
        },
        height: 200,
        paddingX: {
          xs: 2,
        },
      }}
    />
  );

  return (
    <Stack padding={4} width={'100%'} alignItems={'center'} spacing={2}>
      <SkelItem />
      <SkelItem />
      <SkelItem />
    </Stack>
  );
};
