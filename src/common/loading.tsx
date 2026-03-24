import { Typography } from '@mui/material';

export const LoadingMessage = () => {
  return (
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '80vh',
        position: 'fixed',
        zIndex: -10,
      }}
    >
      Content is loading, please wait!
    </Typography>
  );
};
