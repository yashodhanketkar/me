import { Typography } from '@mui/material';

export const ErrorMessage = ({ custom }: { custom?: string }) => {
  const message = custom ?? 'Something went wrong, please try again later!';
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
      {message}
    </Typography>
  );
};
