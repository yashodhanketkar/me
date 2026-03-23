import { Typography } from '@mui/material';

export const ErrorMessage = () => {
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
      Something went wrong, please try again later!
    </Typography>
  );
};
